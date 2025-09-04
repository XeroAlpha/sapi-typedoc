import { SyntaxKind, type ts } from 'ts-morph';
import type { Hook } from './hook.js';

export default {
    afterLoad({ sourceFiles }) {
        for (const sourceFile of sourceFiles) {
            const textChanges: ts.TextChange[] = [];
            const namespacedImports = sourceFile
                .getImportDeclarations()
                .filter((n) => n.getNamespaceImport() !== undefined);
            for (const namespacedImport of namespacedImports) {
                const namespace = namespacedImport.getNamespaceImportOrThrow();
                const usages = namespace.findReferences();
                const usedExports = new Set<string>();
                const pendingTextChanges: ts.TextChange[] = [];
                let shouldKeepNamespacedImport = false;
                for (const usage of usages) {
                    if (usage.getDefinition().getNode() !== namespace) {
                        continue;
                    }
                    for (const ref of usage.getReferences()) {
                        if (ref.isDefinition() || ref.getSourceFile() !== sourceFile) {
                            continue;
                        }
                        const node = ref.getNode();
                        const parent = node.getParent();
                        if (parent) {
                            let success = false;
                            if (parent.isKind(SyntaxKind.QualifiedName)) {
                                const left = parent.getLeft();
                                const right = parent.getRight();
                                if (left === node) {
                                    const extractSymbol = right.getText();
                                    usedExports.add(extractSymbol);
                                    pendingTextChanges.push({
                                        span: {
                                            start: parent.getStart(),
                                            length: parent.getWidth()
                                        },
                                        newText: extractSymbol
                                    });
                                    success = true;
                                }
                            } else if (parent.isKind(SyntaxKind.PropertyAccessExpression)) {
                                const left = parent.getExpression();
                                const right = parent.getNameNode();
                                if (left === node && parent.getQuestionDotTokenNode() === undefined) {
                                    const extractSymbol = right.getText();
                                    usedExports.add(extractSymbol);
                                    pendingTextChanges.push({
                                        span: {
                                            start: parent.getStart(),
                                            length: parent.getWidth()
                                        },
                                        newText: extractSymbol
                                    });
                                    success = true;
                                }
                            }
                            if (!success) {
                                shouldKeepNamespacedImport = true;
                                console.log(`Unexpected ${parent.getKindName()}: ${parent.getText()}`);
                            }
                        }
                    }
                }
                if (!shouldKeepNamespacedImport && pendingTextChanges.length > 0) {
                    const namespacedImportNode = namespace.getParentIfKindOrThrow(SyntaxKind.NamespaceImport);
                    textChanges.push({
                        span: {
                            start: namespacedImportNode.getStart(),
                            length: namespacedImportNode.getWidth()
                        },
                        newText: `{ ${[...usedExports].sort().join(', ')} }`
                    });
                    textChanges.push(...pendingTextChanges);
                }
            }
            if (textChanges.length > 0) {
                sourceFile.applyTextChanges(textChanges);
            }
        }
    }
} as Hook;
