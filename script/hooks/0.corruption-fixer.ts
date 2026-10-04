// biome-ignore-all lint/correctness/noUnusedImports: 常用导入，有意保留，便于快速编写 fixer
import assert from 'node:assert/strict';
import { Scope, StructureKind, SyntaxKind, ts } from 'ts-morph';
import { DefaultIndentWidth } from '../multiline-comments.js';
import type { Hook, HookFunction, TranslateHookContext } from './hook.js';

const patches: ((context: TranslateHookContext) => void)[] = [];

patches.push(({ project }) => {
    // @minecraft/math
    const mathDts = project.getSourceFileOrThrow('math.d.ts');
    const dtsLines = mathDts.getFullText().split(/\r\n|\n/g);
    let state: 'normal' | 'comment' | 'validLineAfterComment' = 'normal';
    let commentIndent = 0;
    let previousIndent = 0;
    let padLength = 0;
    const outputLines: string[] = [];
    for (const line of dtsLines) {
        const trimmedLine = line.trimStart();
        if (line === '') {
            outputLines.push('');
            continue;
        }
        if (state === 'normal' || state === 'validLineAfterComment') {
            let indentLength = line.length - trimmedLine.length;
            assert(indentLength >= padLength);
            indentLength -= padLength;
            let expectIndent = indentLength;
            if (state === 'validLineAfterComment') {
                expectIndent = commentIndent;
            }
            if (trimmedLine === '}' && previousIndent - indentLength < DefaultIndentWidth) {
                expectIndent = previousIndent - DefaultIndentWidth;
            }
            if (expectIndent !== indentLength) {
                padLength += indentLength - expectIndent;
                assert(padLength >= 0);
                indentLength = expectIndent;
            }
            outputLines.push(`${' '.repeat(indentLength)}${trimmedLine}`);
            state = 'normal';
            if (trimmedLine === '/**') {
                state = 'comment';
                commentIndent = indentLength;
            }
            previousIndent = indentLength;
        } else {
            if (trimmedLine.startsWith('*')) {
                // force indent be commentIndent + 1
                outputLines.push(`${' '.repeat(commentIndent + 1)}${trimmedLine}`);
            } else {
                // unexpected
                outputLines.push(line);
            }
            if (trimmedLine === '*/') {
                state = 'validLineAfterComment';
            }
        }
    }
    mathDts.replaceWithText(outputLines.join('\n'));
});

const errors: unknown[] = [];
export default {
    afterLoad(context) {
        for (const patch of patches) {
            try {
                patch(context);
            } catch (err) {
                errors.push(err);
            }
        }
    },
    beforeConvert() {
        if (errors.length > 0) {
            const error = new AggregateError(errors);
            errors.length = 0;
            throw error;
        }
    }
} as Hook;
