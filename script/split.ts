import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { sep as pathSep, relative as relativePath, resolve as resolvePath } from 'path';
import { sep as pathSepPosix } from 'path/posix';
import { ExportGetableNode, SourceFile, SyntaxKind, ts } from 'ts-morph';
import { translatedPath, translatingPath } from './utils.js';

const SkippedTopLevelSyntaxKinds = [
    SyntaxKind.EndOfFileToken,
    SyntaxKind.ImportDeclaration,
    SyntaxKind.ImportEqualsDeclaration
];

const SyntaxKindToCategory = new Map([
    [SyntaxKind.EnumDeclaration, 'enums'],
    [SyntaxKind.ClassDeclaration, 'classes'],
    [SyntaxKind.FunctionDeclaration, 'functions'],
    [SyntaxKind.InterfaceDeclaration, 'interfaces'],
    [SyntaxKind.ModuleDeclaration, 'modules'],
    [SyntaxKind.TypeAliasDeclaration, 'types'],
    [SyntaxKind.VariableStatement, 'variables'],
    [SyntaxKind.ExportDeclaration, 'types']
]);

function getSourceFilePieceDirectory(sourceFile: SourceFile) {
    return resolvePath(
        translatingPath,
        relativePath(translatedPath, sourceFile.getDirectoryPath()),
        sourceFile.getBaseNameWithoutExtension()
    );
}

function asRelativeModulePath(from: string, to: string) {
    const relativePathPlatform = relativePath(from, to);
    let relativePathPosix = relativePathPlatform.replaceAll(pathSep, pathSepPosix);
    if (!relativePathPosix.startsWith('.')) {
        relativePathPosix = `.${pathSepPosix}${relativePathPosix}`;
    }
    relativePathPosix = relativePathPosix.replace(/(?:\.d)?\.ts$/, '');
    return relativePathPosix;
}

const ImportPrompt = '/* IMPORT */';
const ExportPrompt = '/* EXPORT */';
const PrivatePrompt = '/* PRIVATE */';

export interface ExtractedPiece {
    generated?: never;
    start: number;
    end: number;
    path: string;
    imports?: string;
    exports?: string;
}

export interface GeneratedPiece {
    generated: true;
    start: -1;
    path: string;
    content: string;
}

export type Piece = ExtractedPiece | GeneratedPiece;

export function split(sourceFile: SourceFile) {
    const pieceDirectory = getSourceFilePieceDirectory(sourceFile);
    const indexExports: string[] = [];
    const pieceExports: { symbolName: string; piecePath: string; isExported: boolean }[] = [];
    const piecePathList: string[] = [];
    const pieces: Piece[] = [];
    const packageDocumentationJSDoc = sourceFile
        .getDescendantsOfKind(SyntaxKind.JSDoc)
        .find((jsdoc) => jsdoc.getTags().some((tag) => tag.getTagName() === 'packageDocumentation'));
    if (packageDocumentationJSDoc) {
        pieces.push({
            start: packageDocumentationJSDoc.getStart(),
            end: packageDocumentationJSDoc.getEnd(),
            path: resolvePath(pieceDirectory, `package.d.ts`)
        });
    }
    const sourceScopeSymbols = new Set(
        sourceFile.getSymbolsInScope(ts.SymbolFlags.ModuleMember).map((e) => e.getExportSymbol())
    );
    sourceFile.forEachChild((node) => {
        if (SkippedTopLevelSyntaxKinds.includes(node.getKind())) return;
        if (node.isKind(SyntaxKind.ExportDeclaration)) {
            indexExports.push(node.getText());
            return;
        }
        const includedSymbols = node
            .getDescendants()
            .map((e) => e.getSymbol())
            .filter((e) => e !== undefined);
        const scopedSymbols = includedSymbols.filter((e) => sourceScopeSymbols.has(e));
        let symbol = node.getSymbol();
        if (!symbol) {
            if (includedSymbols.length === 0) {
                console.log(`Cannot find symbol for node: ${node.getKindName()}`);
                return;
            }
            symbol = includedSymbols[0];
        }
        const symbolName = symbol.getName();
        const category = SyntaxKindToCategory.get(node.getKind());
        if (!category) {
            console.log(`Cannot find category for node: ${node.getKindName()}`);
            return;
        }
        let piecePath = resolvePath(pieceDirectory, category, `${symbolName}.d.ts`);
        let pieceIndex = 1;
        while (piecePathList.includes(piecePath.toLowerCase())) {
            piecePath = resolvePath(pieceDirectory, category, `${symbolName}-${String(pieceIndex)}.d.ts`);
            pieceIndex++;
        }
        piecePathList.push(piecePath.toLowerCase());
        const jsdocList = node
            .getChildrenOfKind(SyntaxKind.JSDoc)
            .filter((jsdoc) => jsdoc.getStart() !== packageDocumentationJSDoc?.getStart());
        let pieceStart = node.getStart(false);
        const firstJSDoc = jsdocList.pop();
        if (firstJSDoc) {
            pieceStart = firstJSDoc.getStart();
        }

        const importSymbols = [...new Set(scopedSymbols)]
            .map((scopedSymbol) => {
                return scopedSymbol
                    .getDeclarations()
                    .filter((decl) => {
                        const declSourceFile = decl.getSourceFile();
                        if (declSourceFile.getFilePath() === sourceFile.getFilePath()) {
                            if (decl.getStart() >= pieceStart && decl.getEnd() <= node.getEnd()) {
                                return false;
                            }
                        }
                        return resolvePath(declSourceFile.getFilePath()).startsWith(translatedPath);
                    })
                    .map((decl) => ({
                        fromName: decl.getSymbolOrThrow().getName(),
                        toName: scopedSymbol.getName(),
                        sourceFile: resolvePath(getSourceFilePieceDirectory(decl.getSourceFile()), 'index.d.ts')
                    }))
                    .shift();
            })
            .filter((e) => e !== undefined);
        importSymbols.sort((a, b) => (a.toName > b.toName ? 1 : a.toName < b.toName ? -1 : 0));
        const isExported = (node as Partial<ExportGetableNode>).hasExportKeyword?.() ?? false;

        const importGroupedByFile: Record<string, string[]> = {};
        importSymbols.forEach((e) => {
            let group = importGroupedByFile[e.sourceFile] as string[] | undefined;
            if (!group) {
                importGroupedByFile[e.sourceFile] = group = [];
            }
            group.push(e.fromName === e.toName ? e.toName : `${e.fromName} as ${e.toName}`);
        });

        const piecePathParent = resolvePath(piecePath, '..');
        const importStatements = Object.entries(importGroupedByFile).map(([fileName, imports]) => {
            const fileNameRelative = asRelativeModulePath(piecePathParent, fileName);
            return `import { ${imports.join(', ')} } from '${fileNameRelative}';`;
        });

        pieceExports.push({ symbolName, piecePath, isExported });
        pieces.push({
            start: pieceStart,
            end: node.getEnd(),
            path: piecePath,
            imports: importStatements.map((e) => `${ImportPrompt} ${e}`).join('\n'),
            exports: isExported ? '' : `${ExportPrompt} export { ${symbolName} };`
        });
    });

    const sourceIndexPieceFile = resolvePath(pieceDirectory, 'index.d.ts');
    const sourceImportDeclarations = sourceFile.getImportDeclarations();
    const indexImportStatements: string[] = [];
    const indexExportStatements = [...indexExports];
    sourceImportDeclarations.forEach((e) => {
        const importModulePathRelative = asRelativeModulePath(
            pieceDirectory,
            getSourceFilePieceDirectory(e.getModuleSpecifierSourceFileOrThrow())
        );
        const importClause = e.getImportClause();
        if (!importClause) {
            throw new Error(`Cannot find import clause for import statement: ${e.print()}`);
        }
        const importedIdentifiers = [];
        const namespaceImport = importClause.getNamespaceImport();
        if (namespaceImport) {
            importedIdentifiers.push(namespaceImport);
        } else {
            importClause.getNamedImports().forEach((spec) => {
                importedIdentifiers.push(spec.getAliasNode() ?? spec.getNameNode());
            });
        }
        const importedIdentifierNames = importedIdentifiers.map((e) => e.getText());
        indexImportStatements.push(`import ${importClause.getText()} from '${importModulePathRelative}';`);
        indexExportStatements.push(`${PrivatePrompt} export { ${importedIdentifierNames.join(', ')} };`);
    });
    pieceExports.forEach(({ symbolName, piecePath, isExported }) => {
        const piecePathRelative = asRelativeModulePath(pieceDirectory, piecePath);
        const prefix = isExported ? '' : `${PrivatePrompt} `;
        indexExportStatements.push(`${prefix}export { ${symbolName} } from '${piecePathRelative}';`);
    });
    const sourceIndexPiece = {
        generated: true,
        start: -1,
        path: sourceIndexPieceFile,
        content: [...indexImportStatements, ...indexExportStatements].join('\n')
    } as const;
    pieces.sort((a, b) => b.start - a.start);
    pieces.unshift(sourceIndexPiece);
    return pieces;
}

export function writePiece(sourceFile: SourceFile, piece: Piece) {
    mkdirSync(resolvePath(piece.path, '..'), { recursive: true });
    if (piece.generated) {
        writeFileSync(piece.path, piece.content);
    } else {
        let pieceContent = sourceFile.getFullText().slice(piece.start, piece.end);
        if (piece.imports) {
            pieceContent = `${piece.imports}\n\n${pieceContent}`;
        }
        if (piece.exports) {
            pieceContent = `${pieceContent}\n\n${piece.exports}`;
        }
        writeFileSync(piece.path, pieceContent);
    }
}

export function replacePieces(sourceFile: SourceFile, pieces: Piece[]) {
    let sourceFileText = sourceFile.getFullText();
    let writtenCount = 0;
    pieces.forEach((piece) => {
        if (piece.generated || !existsSync(piece.path)) return;
        const text = readFileSync(piece.path, 'utf-8')
            .split('\n')
            .filter((e) => !e.startsWith(ImportPrompt) && !e.startsWith(ExportPrompt))
            .join('\n')
            .trim();
        sourceFileText = `${sourceFileText.slice(0, piece.start)}${text}${sourceFileText.slice(piece.end)}`;
        writtenCount++;
    });
    if (writtenCount > 0) {
        sourceFile.replaceWithText(sourceFileText);
    }
}
