/* eslint-disable @typescript-eslint/no-unused-vars */
import { strict as assert } from 'assert';
import { Scope, StructureKind, SyntaxKind, ts } from 'ts-morph';
import type { HookFunction, Hook, TranslateHookContext } from './hook.js';

assert(true);

const patches: ((context: TranslateHookContext) => void)[] = [];

patches.push(({ project }) => {
    // @minecraft/common
    const commonDts = project.getSourceFileOrThrow('common.d.ts');

    const InvalidArgumentErrorType = commonDts.addEnum({
        isExported: true,
        name: 'InvalidArgumentErrorType',
        members: ['Duplicate', 'Empty', 'Unknown', 'Unspecified'].map((n) => ({ name: n, value: n }))
    });

    const ArgumentOutOfBoundsError = commonDts.getClassOrThrow('ArgumentOutOfBoundsError');
    ArgumentOutOfBoundsError.addMember({
        kind: StructureKind.Property,
        name: 'index',
        type: 'number'
    });

    const InvalidArgumentError = commonDts.getClassOrThrow('InvalidArgumentError');
    InvalidArgumentError.addMember({
        kind: StructureKind.Property,
        name: 'type',
        type: InvalidArgumentErrorType.getName()
    });

    commonDts.addClass({
        isExported: true,
        name: 'RuntimeConditionError',
        extends: 'Error',
        ctors: [
            {
                scope: Scope.Private
            }
        ]
    });

    commonDts.addClass({
        isExported: true,
        name: 'UnsupportedFunctionalityError',
        extends: 'Error',
        ctors: [
            {
                scope: Scope.Private
            }
        ]
    });
});

patches.push(({ project }) => {
    // since 1.21.110.25
    const serverDts = project.getSourceFileOrThrow('server.d.ts');
    const PlayerSwingEventOptionsInterface = serverDts.getInterfaceOrThrow('PlayerSwingEventOptions');
    const oldText = PlayerSwingEventOptionsInterface.getFullText();
    assert(oldText.includes('@minecraft/Server.PlayerSwingStartAfterEvent.subscribe'));
    const newText = oldText.replace(
        '@minecraft/Server.PlayerSwingStartAfterEvent.subscribe',
        '@minecraft/Server.PlayerSwingStartAfterEventSignal.subscribe'
    );
    PlayerSwingEventOptionsInterface.replaceWithText(newText.trim());
});

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
            if (trimmedLine === '}' && previousIndent - indentLength < 4) {
                expectIndent = previousIndent - 4;
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
        patches.forEach((f) => {
            try {
                f(context);
            } catch (err) {
                errors.push(err);
            }
        });
    },
    beforeConvert() {
        if (errors.length > 0) {
            const error = new AggregateError(errors);
            errors.length = 0;
            throw error;
        }
    }
} as Hook;
