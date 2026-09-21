import { Node, SyntaxKind, ts, type JSDoc, type JSDocableNode, type JSDocTag, type SourceFile } from 'ts-morph';
import type { Hook } from './hook.js';
import { lineBounds, jsdocBounds, nextNonWhitespace } from '../multiline-comments.js';

const ReleaseStageTags = ['rc', 'beta'] as const;
type ReleaseStageTag = (typeof ReleaseStageTags)[number];

const releaseStageMap = new Map<string, ReleaseStageTag>();

function isReleaseStageTag(node: JSDocTag) {
    return ReleaseStageTags.includes(node.getTagName() as ReleaseStageTag);
}

function getReleaseStageTagNodes(node: Node): JSDocTag[] {
    return node.getDescendantsOfKind(SyntaxKind.JSDocTag).filter(isReleaseStageTag);
}

/**
 * 返回 JSDoc 所属节点的符号限定名。
 *
 * @param jsdocOrNode JSDoc 节点本身或其所属节点
 * @param sourceFile 源文件
 */
function getJSDocableSymbolPath(
    jsdocOrNode: JSDoc | (JSDocableNode & Node),
    sourceFile: SourceFile
): string | undefined {
    const node = (Node.isJSDoc(jsdocOrNode) ? jsdocOrNode.getParent() : jsdocOrNode) as Node;
    let symbol = node.getSymbol();
    if (!symbol && node.isKind(SyntaxKind.VariableStatement)) {
        // VariableStatement 的符号在它的第一个子 VariableDeclaration 上
        symbol = node.getDeclarations()[0].getSymbol();
    }
    if (symbol) {
        return symbol.getFullyQualifiedName();
    }
    if (sourceFile.getStatements()[0] === node) {
        // `@packageDocumentation` （首个 node 的 JSDoc）使用 module:<filePath>；
        return `module:${sourceFile.getFilePath()}`;
    }
    return undefined;
}

/**
 * 从 JSDoc 中移除指定 JSDocTag。
 */
function removeJSDocTag(jsdoc: JSDoc, tagNode: JSDocTag): ts.TextChange {
    const lines = jsdocBounds(jsdoc);
    const tagStart = tagNode.getStart();
    const tagNameEnd = tagNode.getTagNameNode().getEnd();
    const tagLine = lines.find((l) => tagStart >= l.lineStart && tagStart < l.lineEnd);
    if (!tagLine?.comment) throw new Error('Assert error');
    const fullText = jsdoc.getSourceFile().getFullText();
    const { lineStart, lineEnd, nextLineStart, commentStart, comment } = tagLine;
    const tagPre = comment.slice(0, tagStart - commentStart);
    const tagPost = comment.slice(tagNameEnd - commentStart);
    if (tagPre.trim() === '' && tagPost.trim() === '') {
        if (lines.every((l) => l === tagLine || !l.comment)) {
            // 如果 JSDoc 里只有这个标签：删掉整个 JSDoc
            const startLineInfo = lineBounds(fullText, jsdoc.getStart());
            const endLineInfo = lineBounds(fullText, jsdoc.getEnd());
            const jsdocPre = fullText.slice(startLineInfo[0], jsdoc.getStart());
            const jsdocPost = fullText.slice(jsdoc.getEnd(), endLineInfo[1]);
            let removeStart = jsdoc.getStart();
            let removeEnd = jsdoc.getEnd();
            if (jsdocPost.trim() === '') {
                if (jsdocPre.trim() === '') {
                    // JSDoc 完整占据多行：直接整行删除
                    removeStart = startLineInfo[0];
                    removeEnd = endLineInfo[2];
                } else {
                    // JSDoc 前面接着代码：移除 JSDoc 与前导空白符
                    removeStart = jsdoc.getFullStart();
                }
            } else {
                // JSDoc 后面接着代码：移除 JSDoc 直到后面的空白符
                const endNwsPos = nextNonWhitespace(fullText, removeEnd, endLineInfo[1]);
                if (endNwsPos !== -1) removeEnd = endNwsPos;
            }
            return {
                span: {
                    start: removeStart,
                    length: removeEnd - removeStart
                },
                newText: ''
            };
        } else {
            // 如果这一行只有这个标签：删掉这一行
            return {
                span: {
                    start: lineStart,
                    length: nextLineStart - lineStart
                },
                newText: ''
            };
        }
    } else {
        // 如果这一行除了这个标签还有其他内容：删掉这个标签和后面跟着的空白字符
        const nwsPos = nextNonWhitespace(fullText, tagNameEnd, lineEnd);
        return {
            span: {
                start: tagStart,
                length: (nwsPos !== -1 ? nwsPos : lineEnd) - tagStart
            },
            newText: ''
        };
    }
}

/**
 * 在 JSDoc 开头加上标签。
 *
 * @param jsdoc JSDoc 节点
 * @param tag 标签文本。不能包含换行，需要包含前导 `@`
 */
function prependJSDocTag(jsdoc: JSDoc, tag: string): ts.TextChange {
    const lines = jsdocBounds(jsdoc);
    const firstValidLine = lines.find((l) => l.comment);
    if (lines.length > 1 && firstValidLine) {
        // 多行注释：在注释正文行前作为一整行加入
        const lineFeed = lines[0].lineFeed ?? '\n';
        return {
            span: {
                start: firstValidLine.lineStart,
                length: 0
            },
            newText: `${firstValidLine.commentPrefix}${tag}${lineFeed}`
        };
    } else {
        // 单行注释或其他诡异情况：直接加在注释前
        // 希望没有人会在注释头尾的那两行写注释
        return {
            span: {
                start: lines[0].commentStart,
                length: 0
            },
            newText: `${tag} `
        };
    }
}

export default {
    afterLoad({ sourceFiles }) {
        releaseStageMap.clear();
        for (const sourceFile of sourceFiles) {
            for (const jsdoc of sourceFile.getDescendantsOfKind(SyntaxKind.JSDoc)) {
                for (const tagNode of getReleaseStageTagNodes(jsdoc)) {
                    const symbolPath = getJSDocableSymbolPath(jsdoc, sourceFile);
                    if (!symbolPath) {
                        continue;
                    }
                    const tagType = tagNode.getTagName() as ReleaseStageTag;
                    const claimedTagType = releaseStageMap.get(symbolPath);
                    if (claimedTagType !== undefined) {
                        // 排重
                        console.warn(`Duplicated release state ${claimedTagType} and ${tagType}: ${symbolPath}`);
                    } else {
                        releaseStageMap.set(symbolPath, tagType);
                    }
                }
            }
        }
    },
    afterTranslate({ sourceFiles }) {
        for (const sourceFile of sourceFiles) {
            const textChanges: ts.TextChange[] = [];
            const jsdocableNodes: (JSDoc | (JSDocableNode & Node))[] = sourceFile
                .getDescendants()
                .filter((node) => Node.isJSDocable(node));
            const firstStatement = sourceFile.getStatements()[0];
            const packageDocs = firstStatement.getChildrenOfKind(SyntaxKind.JSDoc);
            if (packageDocs.length > 0) {
                jsdocableNodes.unshift(packageDocs[0]);
            }
            for (const node of jsdocableNodes) {
                const symbolPath = getJSDocableSymbolPath(node, sourceFile);
                if (!symbolPath) {
                    continue;
                }
                const releaseStage = releaseStageMap.get(symbolPath);
                if (!releaseStage) {
                    continue;
                }
                const jsdoc = Node.isJSDoc(node) ? node : node.getJsDocs().at(-1);
                if (jsdoc) {
                    // 向已有 JSDoc 中恢复发布阶段标签
                    const stageTagNodes = getReleaseStageTagNodes(jsdoc);
                    const conflictStageTagNodes = stageTagNodes.filter((tag) => tag.getTagName() !== releaseStage);
                    if (conflictStageTagNodes.length > 0) {
                        // 查重
                        const conflictStageTags = conflictStageTagNodes.map((tag) => tag.getTagName()).join(',');
                        console.warn(
                            `Cannot overwrite release stage ${releaseStage} from ${conflictStageTags}: ${symbolPath}`
                        );
                    } else if (stageTagNodes.length === 0) {
                        textChanges.push(prependJSDocTag(jsdoc, `@${releaseStage}`));
                    }
                } else {
                    // 重建 JSDoc
                    const indent = node.getIndentationText();
                    textChanges.push({
                        span: { start: node.getStart(), length: 0 },
                        newText: `/**\n${indent} * @${releaseStage}\n${indent} */\n${indent}`
                    });
                }
                releaseStageMap.delete(symbolPath);
            }
            sourceFile.applyTextChanges(textChanges);
        }
        // 兜底：仍有符号的发布阶段标签未能恢复
        for (const [symbolPath, releaseStage] of releaseStageMap) {
            console.warn(`Cannot restore release stage ${releaseStage} for ${symbolPath}`);
        }
    },
    beforeUpdate({ sourceFiles }) {
        for (const sourceFile of sourceFiles) {
            const textChanges: ts.TextChange[] = [];
            for (const jsdoc of sourceFile.getDescendantsOfKind(SyntaxKind.JSDoc)) {
                const stageTagNodes = getReleaseStageTagNodes(jsdoc);
                if (stageTagNodes.length > 1) {
                    // 保证每个 JSDoc 里发布阶段标记最多只有一个
                    const symbolPath = getJSDocableSymbolPath(jsdoc, sourceFile) ?? sourceFile.getFilePath();
                    throw new Error(
                        `Multiple release stage tags (${stageTagNodes.map((tag) => `@${tag.getTagName()}`).join(', ')}) in one JSDoc of ${symbolPath}`
                    );
                }
                const symbolPath = getJSDocableSymbolPath(jsdoc, sourceFile);
                if (!symbolPath) {
                    continue;
                }
                const releaseStage = releaseStageMap.get(symbolPath);
                if (!releaseStage) {
                    continue;
                }
                const tagNode = stageTagNodes.find((tag) => tag.getTagName() === releaseStage);
                if (!tagNode) {
                    continue;
                }
                textChanges.push(removeJSDocTag(jsdoc, tagNode));
            }
            sourceFile.applyTextChanges(textChanges);
        }
    }
} as Hook;
