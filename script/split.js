const { SyntaxKind, SourceFile } = require("ts-morph");
const { resolve: resolvePath, relative: relativePath } = require("path");

const basePath = resolvePath(__dirname, "..");
const translatingPath = resolvePath(basePath, "translate-pieces");
const translatedPath = resolvePath(basePath, "translated");

const SkippedTopLevelSyntaxKinds = [
    SyntaxKind.EndOfFileToken,
    SyntaxKind.ImportDeclaration,
    SyntaxKind.ImportEqualsDeclaration
];

const SyntaxKindToCategory = new Map([
    [SyntaxKind.EnumDeclaration, "enums"],
    [SyntaxKind.ClassDeclaration, "classes"],
    [SyntaxKind.FunctionDeclaration, "functions"],
    [SyntaxKind.InterfaceDeclaration, "interfaces"],
    [SyntaxKind.ModuleDeclaration, "modules"],
    [SyntaxKind.TypeAliasDeclaration, "types"],
    [SyntaxKind.VariableStatement, "variables"],
    [SyntaxKind.ExportDeclaration, "types"]
]);

/**
 * @param {SourceFile} sourceFile
 */
function split(sourceFile) {
    const pieceDirectory = resolvePath(
        translatingPath,
        relativePath(translatedPath, sourceFile.getDirectoryPath()),
        sourceFile.getBaseNameWithoutExtension()
    );
    const piecePathList = [];
    const pieces = [];
    sourceFile.forEachChild((node) => {
        if (SkippedTopLevelSyntaxKinds.includes(node.getKind())) return;
        const includedSymbols = node.getDescendants()
            .map((e) => e.getSymbol())
            .filter((e) => e);
        let symbol = node.getSymbol();
        if (!symbol) {
            symbol = includedSymbols[0];
        }
        if (!symbol) {
            console.log(`Cannot find symbol for node: ${node.getKindName()}`);
            return;
        }
        const category = SyntaxKindToCategory.get(node.getKind());
        if (!category) {
            console.log(`Cannot find category for node: ${node.getKindName()}`);
            return;
        }
        let piecePath = resolvePath(pieceDirectory, category, `${symbol.getName()}.d.ts`);
        let pieceIndex = 1;
        while (piecePathList.includes(piecePath.toLowerCase())) {
            piecePath = resolvePath(pieceDirectory, category, `${symbol.getName()}-${pieceIndex}.d.ts`);
            pieceIndex++;
        }
        piecePathList.push(piecePath.toLowerCase());
        const jsdocList = node.getChildrenOfKind(SyntaxKind.JSDoc);
        let pieceStart = node.getStart(true);
        if (jsdocList.length > 0) {
            pieceStart = jsdocList.pop().getStart();
        }
        pieces.push({
            start: pieceStart,
            end: node.getEnd(),
            path: piecePath
        });
    });
    return pieces;
}

module.exports = { split };