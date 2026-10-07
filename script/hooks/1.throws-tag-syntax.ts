import {
    type JSDoc,
    type JSDocLink,
    type JSDocLinkCode,
    type JSDocLinkPlain,
    type JSDocTag,
    type JSDocThrowsTag,
    SyntaxKind,
    ts
} from 'ts-morph';
import type { Context, Reflection } from 'typedoc';
import { jsdocTagBounds, nextNonWhitespace } from '../multiline-comments.js';
import type { Hook } from './hook.js';

const throwsPrompts = ['This function can throw errors.', 'This property can throw when used.'];
const throwsTypeSep = ' - ';

type CommentPart = string | JSDocLink | JSDocLinkCode | JSDocLinkPlain;
function getCommentParts(jsdoc: JSDoc | JSDocTag): CommentPart[] {
    const comment = jsdoc.getComment();
    if (typeof comment === 'string') {
        return [comment];
    }
    if (Array.isArray(comment)) {
        const commentParts = comment.filter((e) => e !== undefined);
        return commentParts.map((e) => (e.isKind(SyntaxKind.JSDocText) ? e.compilerNode.text : e));
    }
    return [];
}

function splitCommentPartIntoLines(commentParts: CommentPart[]) {
    let currentLine: CommentPart[] = [];
    const lines = [currentLine];
    const restParts = [...commentParts];
    while (restParts.length > 0) {
        const restFirst = restParts.shift();
        if (typeof restFirst === 'string') {
            const lnPos = restFirst.indexOf('\n');
            if (lnPos !== -1) {
                restParts.unshift(restFirst.slice(lnPos + 1));
                if (lnPos > 0) {
                    currentLine.push(restFirst.slice(0, lnPos));
                }
                currentLine = [];
                lines.push(currentLine);
            } else if (restFirst !== '') {
                currentLine.push(restFirst);
            }
        } else if (restFirst !== undefined) {
            currentLine.push(restFirst);
        }
    }
    return lines;
}

function convertTemplateThrows(throwsTag: JSDocThrowsTag) {
    const tagLines = jsdocTagBounds(throwsTag);
    const tagNameEnd = throwsTag.getTagNameNode().getEnd();
    const lastValidEnd = tagLines.findLast((e) => e.comment !== undefined)?.commentEnd ?? throwsTag.getEnd();
    // 匹配 @throws <固定文本>[<换行*n>{@link Identifier}[内容][<换行*n>{@link Identifier}...]]
    const commentLines = splitCommentPartIntoLines(getCommentParts(throwsTag));
    let isFirstLine = true;
    const links: JSDocLink[] = [];
    for (const line of commentLines) {
        if (line.length === 0) {
            continue;
        }
        if (isFirstLine) {
            if (!(line.length === 1 && typeof line[0] === 'string' && throwsPrompts.includes(line[0]))) {
                return null;
            }
            isFirstLine = false;
        } else {
            if (!(typeof line[0] === 'object' && line[0].isKind(SyntaxKind.JSDocLink))) {
                return null;
            }
            links.push(line[0]);
        }
    }
    if (isFirstLine) {
        return null;
    }
    const pendingEdits: ts.TextChange[] = [];
    if (links.length > 0) {
        // 移除@throws <固定文本><换行*n>
        pendingEdits.push({
            span: { start: throwsTag.getStart(), length: links[0].getStart() - throwsTag.getStart() },
            newText: ''
        });
        for (const link of links) {
            // 替换 {@link xxx} 为 @throws {xxx}
            const innerNode = link.getFirstChild();
            if (link.getChildCount() !== 1 || !innerNode) {
                continue;
            }
            pendingEdits.push({
                span: { start: link.getStart(), length: link.getWidth() },
                newText: `@throws {${innerNode.getText()}}`
            });
        }
    } else {
        // 移除固定文本
        pendingEdits.push({
            span: { start: tagNameEnd, length: lastValidEnd - tagNameEnd },
            newText: ''
        });
    }
    return pendingEdits;
}

// biome-ignore lint/correctness/noUnusedVariables: 目前 TypeDoc 支持这种写法，暂不使用
function convertTSDocThrows(throwsTag: JSDocThrowsTag): ts.TextChange | null {
    const linkNode = throwsTag.getNextSiblingIfKind(SyntaxKind.JSDocTag);
    if (throwsTag.getTypeExpression()?.getText() === '{' && linkNode && linkNode.getTagName() === 'link') {
        const linkTagStart = linkNode.getStart();
        const linkTagNameEnd = linkNode.getTagNameNode().getEnd();
        const firstValidCharPos = nextNonWhitespace(linkNode.getText(), linkTagNameEnd - linkTagStart);
        if (firstValidCharPos !== -1) {
            return {
                span: { start: linkTagStart, length: firstValidCharPos - linkTagStart },
                newText: ''
            };
        }
    }
    return null;
}

function hasThrowsTag(refl: Reflection) {
    const tags = refl.comment?.getTags('@throws');
    return tags !== undefined && tags.length > 0;
}

function isTSDocThrowsTag(throwsTag: ts.JSDocThrowsTag) {
    if (throwsTag.typeExpression?.getText() === '{') {
        const childNodes = throwsTag.parent.getChildren();
        const index = childNodes.indexOf(throwsTag);
        if (index !== -1 && index !== childNodes.length - 1) {
            const siblingNode = childNodes[index + 1];
            if (ts.isJSDocUnknownTag(siblingNode) && siblingNode.tagName.text === 'link') {
                return true;
            }
        }
    }
    return false;
}

function fixTemplateThrowsTag(ctx: Context, refl: Reflection, jsdoc: ts.JSDoc) {
    const reflThrowsTags = refl.comment?.getTags('@throws') ?? [];
    const tsThrowsTags = jsdoc.tags?.filter(ts.isJSDocThrowsTag) ?? [];
    if (reflThrowsTags.length === tsThrowsTags.length && reflThrowsTags.length > 0) {
        for (let i = 0; i < reflThrowsTags.length; i += 1) {
            const reflThrowsTag = reflThrowsTags[i];
            const tsThrowsTag = tsThrowsTags[i];
            if (isTSDocThrowsTag(tsThrowsTag)) {
                continue;
            }
            if (tsThrowsTag.typeExpression) {
                if (reflThrowsTag.content.length > 0) {
                    // 加个分隔符，美观些
                    const [firstPart] = reflThrowsTag.content;
                    if (firstPart.kind === 'text') {
                        firstPart.text = `${throwsTypeSep}${firstPart.text}`;
                    } else {
                        reflThrowsTag.content.unshift({
                            kind: 'text',
                            text: throwsTypeSep
                        });
                    }
                }
                const typeRef = tsThrowsTag.typeExpression.type;
                const tsType = ctx.checker.getTypeAtLocation(typeRef);
                const tsSymbol = tsType.getSymbol() ?? tsType.aliasSymbol ?? ctx.checker.getSymbolAtLocation(typeRef);
                reflThrowsTag.content.unshift({
                    kind: 'inline-tag',
                    tag: '@link',
                    text: typeRef.getText(),
                    target: tsSymbol ? ctx.createSymbolId(tsSymbol) : undefined
                });
            }
        }
    }
}

export default {
    afterLoad({ sourceFiles }) {
        for (const sourceFile of sourceFiles) {
            const textChanges: ts.TextChange[] = [];
            const throwsTags = sourceFile.getDescendantsOfKind(SyntaxKind.JSDocThrowsTag);
            for (const throwsTag of throwsTags) {
                const templateThrowEdits = convertTemplateThrows(throwsTag);
                if (templateThrowEdits) {
                    textChanges.push(...templateThrowEdits);
                }
                // 暂时先共存，看起来 TypeDoc 同样支持这种写法
                // const tsDocThrowsEdits = convertTSDocThrows(throwsTag);
                // if (tsDocThrowsEdits) {
                //     textChanges.push(tsDocThrowsEdits);
                // }
            }
            if (textChanges.length > 0) {
                sourceFile.applyTextChanges(textChanges);
            }
        }
    },
    beforeConvert({ tsdocApplication }) {
        // 等修复 https://github.com/TypeStrong/typedoc/issues/3097
        tsdocApplication.converter.on('createSignature', (ctx, refl, decl) => {
            if (hasThrowsTag(refl) && decl) {
                const jsdocNodes = ts.getJSDocCommentsAndTags(decl).filter(ts.isJSDoc);
                if (jsdocNodes.length === 1) {
                    fixTemplateThrowsTag(ctx, refl, jsdocNodes[0]);
                }
            }
        });
        tsdocApplication.converter.on('createDeclaration', (ctx, refl) => {
            if (hasThrowsTag(refl)) {
                const symbol = ctx.getSymbolFromReflection(refl);
                const decl = symbol?.valueDeclaration ?? symbol?.declarations?.[0];
                if (decl) {
                    const jsdocNodes = ts.getJSDocCommentsAndTags(decl).filter(ts.isJSDoc);
                    if (jsdocNodes.length === 1) {
                        fixTemplateThrowsTag(ctx, refl, jsdocNodes[0]);
                    }
                }
            }
        });
    }
} as Hook;
