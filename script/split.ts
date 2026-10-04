import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { sep as pathSep, relative as relativePath, resolve as resolvePath } from 'node:path';
import { sep as pathSepPosix } from 'node:path/posix';
import { type ExportGetableNode, type SourceFile, SyntaxKind, ts } from 'ts-morph';
import { stringCompare, translatedPath, translatingPath } from './utils.js';

const ModuleSuffixRegex = /(?:\.d)?\.ts$/i;

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
    relativePathPosix = relativePathPosix.replace(ModuleSuffixRegex, '');
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

type ImportedSymbol =
    | {
          type: 'default';
          name: string;
          modulePath: string;
      }
    | {
          type: 'namespaced';
          name: string;
          modulePath: string;
      }
    | {
          type: 'named';
          name: string;
          exportName?: string;
          modulePath: string;
      };

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
            path: resolvePath(pieceDirectory, 'package.d.ts')
        });
    }
    const sourceScopeSymbols = new Set(
        sourceFile.getSymbolsInScope(ts.SymbolFlags.ModuleMember).map((e) => e.getExportSymbol())
    );
    sourceFile.forEachChild((node) => {
        if (SkippedTopLevelSyntaxKinds.includes(node.getKind())) {
            return;
        }
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
            pieceIndex += 1;
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

        const importSymbols: ImportedSymbol[] = [];
        for (const scopedSymbol of new Set(scopedSymbols)) {
            const decl = scopedSymbol.getDeclarations().find((symbolDecl) => {
                const declSourceFile = symbolDecl.getSourceFile();
                if (
                    declSourceFile === sourceFile &&
                    symbolDecl.getStart() >= pieceStart &&
                    symbolDecl.getEnd() <= node.getEnd()
                ) {
                    return false;
                }
                return resolvePath(declSourceFile.getFilePath()).startsWith(translatedPath);
            });
            if (!decl) {
                continue;
            }
            const ancestors = [decl, ...decl.getAncestors()];
            const importDecl = ancestors.find((n) => n.isKind(SyntaxKind.ImportDeclaration));
            if (importDecl) {
                const importModulePath = getSourceFilePieceDirectory(importDecl.getModuleSpecifierSourceFileOrThrow());
                const importSpecifier = ancestors.find((n) => n.isKind(SyntaxKind.ImportSpecifier));
                if (importSpecifier) {
                    importSymbols.push({
                        type: 'named',
                        name: scopedSymbol.getName(),
                        exportName: importSpecifier.getName(),
                        modulePath: importModulePath
                    });
                } else {
                    const namespaceImport = ancestors.find((n) => n.isKind(SyntaxKind.NamespaceImport));
                    if (namespaceImport) {
                        importSymbols.push({
                            type: 'namespaced',
                            name: scopedSymbol.getName(),
                            modulePath: importModulePath
                        });
                    } else {
                        importSymbols.push({
                            type: 'default',
                            name: scopedSymbol.getName(),
                            modulePath: importModulePath
                        });
                    }
                }
            } else {
                importSymbols.push({
                    type: 'named',
                    name: scopedSymbol.getName(),
                    exportName: decl.getSymbolOrThrow().getName(),
                    modulePath: getSourceFilePieceDirectory(decl.getSourceFile())
                });
            }
        }
        const isExported = (node as Partial<ExportGetableNode>).hasExportKeyword?.() ?? false;

        const importGroupedByFile = Object.groupBy(importSymbols, (e) => e.modulePath);
        const importModulePaths = Object.keys(importGroupedByFile).sort();
        const piecePathParent = resolvePath(piecePath, '..');
        const importStatements: string[] = [];
        for (const modulePath of importModulePaths) {
            const imports = importGroupedByFile[modulePath] ?? [];
            const defaultImports = imports.filter((e) => e.type === 'default');
            const namespacedImports = imports.filter((e) => e.type === 'namespaced');
            const namedImports = imports.filter((e) => e.type === 'named');
            const modulePathRelative = asRelativeModulePath(piecePathParent, modulePath);
            for (const { name } of namespacedImports) {
                importStatements.push(`import * as ${name} from '${modulePathRelative}';`);
            }
            for (const { name } of defaultImports) {
                importStatements.push(`import ${name} from '${modulePathRelative}';`);
            }
            if (namedImports.length > 0) {
                const identifiers = namedImports
                    .sort((a, b) => stringCompare(a.name, b.name))
                    .map((e) => {
                        if (e.exportName && e.exportName !== e.name) {
                            return `${e.exportName} as ${e.name}`;
                        }
                        return e.name;
                    });
                importStatements.push(`import { ${identifiers.join(', ')} } from '${modulePathRelative}';`);
            }
        }

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
    const indexExportStatements = [...indexExports];
    for (const { symbolName, piecePath, isExported } of pieceExports) {
        const piecePathRelative = asRelativeModulePath(pieceDirectory, piecePath);
        const prefix = isExported ? '' : `${PrivatePrompt} `;
        indexExportStatements.push(`${prefix}export { ${symbolName} } from '${piecePathRelative}';`);
    }
    const sourceIndexPiece = {
        generated: true,
        start: -1,
        path: sourceIndexPieceFile,
        content: indexExportStatements.join('\n')
    } as const;
    pieces.sort((a, b) => b.start - a.start);
    pieces.unshift(sourceIndexPiece);
    return pieces;
}

export function writePiece(sourceFile: SourceFile, piece: Piece) {
    mkdirSync(resolvePath(piece.path, '..'), { recursive: true });
    if (piece.generated) {
        writeFileSync(piece.path, `${piece.content}\n`);
    } else {
        let pieceContent = sourceFile.getFullText().slice(piece.start, piece.end);
        if (piece.imports) {
            pieceContent = `${piece.imports}\n\n${pieceContent}`;
        }
        if (piece.exports) {
            pieceContent = `${pieceContent}\n\n${piece.exports}`;
        }
        pieceContent += '\n';
        writeFileSync(piece.path, pieceContent);
    }
}

export function replacePieces(sourceFile: SourceFile, pieces: Piece[]) {
    let sourceFileText = sourceFile.getFullText();
    let writtenCount = 0;
    for (const piece of pieces) {
        if (!piece.generated && existsSync(piece.path)) {
            const text = readFileSync(piece.path, 'utf-8')
                .split('\n')
                .filter((e) => !(e.startsWith(ImportPrompt) || e.startsWith(ExportPrompt)))
                .join('\n')
                .trim();
            sourceFileText = `${sourceFileText.slice(0, piece.start)}${text}${sourceFileText.slice(piece.end)}`;
            writtenCount += 1;
        }
    }
    if (writtenCount > 0) {
        sourceFile.replaceWithText(sourceFileText);
    }
}
