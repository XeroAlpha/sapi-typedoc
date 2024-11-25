import { SyntaxKind, ts } from 'ts-morph';
import type { Hook } from './hook.js';

const translateTexts = [
    [
        `This function can't be called in read-only mode.`,
        `无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。`
    ],
    [`This property can't be edited in read-only mode.`, `无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。`]
];

export default {
    afterTranslate({ sourceFiles }) {
        sourceFiles.forEach((sourceFile) => {
            const fullText = sourceFile.getFullText();
            const textChanges: ts.TextChange[] = [];
            const jsdocNodes = sourceFile.getDescendantsOfKind(SyntaxKind.JSDoc);
            translateTexts.forEach(([from, to]) => {
                fullText.replaceAll(from, (match, offset: number) => {
                    if (jsdocNodes.some((jsdocNode) => jsdocNode.containsRange(offset, offset + match.length))) {
                        textChanges.push({
                            span: { start: offset, length: match.length },
                            newText: to
                        });
                    }
                    return '';
                });
            });
            sourceFile.applyTextChanges(textChanges);
        });
    }
} as Hook;
