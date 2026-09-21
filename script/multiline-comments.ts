import type { JSDoc } from 'ts-morph';

export interface CommentLine {
    /**
     * 本行第一个字符的位置。
     */
    lineStart: number;
    /**
     * 本行属于注释的第一个字符的位置。
     */
    commentStart: number;
    /**·1
     * 本行属于注释的最后一个字符的位置 + 1。
     */
    commentEnd: number;
    /**
     * 本行换行符的位置。
     */
    lineEnd: number;
    /**
     * 下一行第一个字符的位置，不存在则为 -1。
     */
    nextLineStart: number;
    /**
     * 本行文本。
     */
    line: string;
    /**
     * 换行符。
     */
    lineFeed?: string;
    /**
     * 本行的注释文本。不提供表示本行没有注释文本。
     * 尾部不保留空白字符。所以长度可能比 commentEnd - commentStart 小。
     */
    comment?: string;
    /**
     * 本行注释正文前的内容。
     */
    commentPrefix: string;
    /**
     * 本行注释正文后的内容。
     */
    commentSuffix: string;
}

/**
 * 定位 text 里 pos 所在行的第一个字符和换行符，以及下一行的第一个字符（如有）。支持 \n 和 \r\n。
 */
export function lineBounds(text: string, pos: number): [start: number, end: number, nextStart: number] {
    const previousLF = text.lastIndexOf('\n', pos - 1);
    let start = 0;
    if (previousLF >= 0) {
        start = previousLF + 1;
    }
    const nextLF = text.indexOf('\n', pos);
    let end = text.length;
    let nextStart = -1;
    if (nextLF >= 0) {
        end = nextLF;
        nextStart = nextLF + 1;
        if (end - start >= 1 && text.charAt(end - 1) === '\r') {
            end -= 1;
        }
    }
    return [start, end, nextStart];
}

const Whitespace = /\s/;

/**
 * 从指定位置向右（正向）查找第一个非空白字符的索引。
 *
 * @param text 需要查找的目标字符串
 * @param from 查找的起始边界（包含该位置），默认为字符串开头
 * @param to 查找的终止边界（不包含该位置），默认为字符串末尾
 * @returns 找到的非空白字符索引，若未找到则返回 -1
 */
export function nextNonWhitespace(text: string, from = 0, to = text.length) {
    for (let p = from; p < to; p++) {
        if (!Whitespace.test(text.charAt(p))) {
            return p;
        }
    }
    return -1;
}

/**
 * 从指定位置向左（反向）查找第一个非空白字符的索引。
 *
 * @param text 需要查找的目标字符串
 * @param from 查找的起始边界（不包含该位置），默认为字符串末尾
 * @param to 查找的终止边界（包含该位置），默认为字符串开头
 * @returns 找到的非空白字符索引，若未找到则返回 -1
 */
export function prevNonWhitespace(text: string, from = text.length, to = 0) {
    for (let p = from - 1; p >= to; p--) {
        if (!Whitespace.test(text.charAt(p))) {
            return p;
        }
    }
    return -1;
}

/**
 * 获取多行注释中每一行的文本信息。
 *
 * @param comment 注释。需要以 &sol;&ast; 开始，以 &ast;&sol; 结束
 * @param indent 注释第一行的缩进长度。
 */
export function commentBounds(comment: string, indent = 0) {
    if (comment.length < 4 || !comment.startsWith('/*') || !comment.endsWith('*/')) {
        throw new Error(`Illegal comment: ${comment}`);
    }
    const commentLines: CommentLine[] = [];
    let baseCol = -1;
    let p = 0;
    while (p < comment.length) {
        const [lineStart, lineEnd, nextLineStart] = lineBounds(comment, p);
        let commentStart = lineStart;
        let commentEnd = lineEnd;
        if (lineEnd === comment.length) {
            // 去除 */
            commentEnd -= 2;
        }
        if (commentLines.length === 0) {
            // 去除 /* 或 /**
            commentStart += 2;
            if (commentStart < commentEnd && comment.charAt(commentStart) === '*') {
                commentStart += 1;
            }
        } else {
            // 去除前导 *
            const maybeAsterisk = nextNonWhitespace(comment, commentStart, commentEnd);
            if (maybeAsterisk !== -1 && comment.charAt(maybeAsterisk) === '*') {
                commentStart = maybeAsterisk + 1;
            }
        }
        // 去除开头空格
        const nwsStart = nextNonWhitespace(comment, commentStart, commentEnd);
        if (nwsStart !== -1) {
            if (baseCol === -1) {
                // 首次遇到非空白行，设定基准
                if (commentLines.length === 0) {
                    // 单行的情况视为 4 固定值
                    baseCol = indent + 4;
                } else {
                    // 基准设定为非空白字符的位置
                    baseCol = nwsStart - lineStart;
                }
            }
            // 根据基准选择合适的起始点：
            // 1. 介于 commentStart 与 commentEnd 之间
            // 2. 如果 nwsStart 更后，使用基准计算正确的值，否则使用 nwsStart
            // 3. 如果是 /** 的那一行，不使用基准。
            const expectStart = commentLines.length === 0 ? nwsStart : lineStart + baseCol;
            commentStart = Math.max(commentStart, Math.min(expectStart, nwsStart, commentEnd));
        }
        const trimmedComment = comment.slice(commentStart, commentEnd).trimEnd();
        commentLines.push({
            lineStart,
            lineEnd,
            nextLineStart,
            line: comment.slice(lineStart, lineEnd),
            lineFeed: nextLineStart !== -1 ? comment.slice(lineEnd, nextLineStart) : undefined,
            commentStart,
            commentEnd,
            comment: trimmedComment === '' && baseCol === -1 ? undefined : trimmedComment,
            commentPrefix: comment.slice(lineStart, commentStart),
            commentSuffix: comment.slice(commentEnd, lineEnd)
        });
        if (nextLineStart === -1) {
            break;
        }
        p = nextLineStart;
    }
    for (let i = commentLines.length - 1; i >= 0; i--) {
        if (commentLines[i].comment === '') {
            commentLines[i].comment = undefined;
        } else {
            break;
        }
    }
    return commentLines;
}

export function jsdocBounds(jsdoc: JSDoc) {
    const fullText = jsdoc.getSourceFile().getFullText();
    const jsdocStart = jsdoc.getStart();
    const [jsdocLineStart] = lineBounds(fullText, jsdocStart);
    const bounds = commentBounds(jsdoc.getText(), jsdocStart - jsdocLineStart);
    for (const boundLine of bounds) {
        boundLine.lineStart += jsdocStart;
        boundLine.lineEnd += jsdocStart;
        boundLine.nextLineStart += jsdocStart;
        boundLine.commentStart += jsdocStart;
        boundLine.commentEnd += jsdocStart;
    }
    return bounds;
}
