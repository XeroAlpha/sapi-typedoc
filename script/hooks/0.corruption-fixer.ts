import { strict as assert } from 'assert';
import { Scope, StructureKind, SyntaxKind, ts } from 'ts-morph';
import type { Hook, TranslateHookContext } from './hook.js';

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

patches.push(({ sourceFiles }) => {
    // since 1.21.120.20
    let totalTextChangeCount = 0;
    for (const sourceFile of sourceFiles) {
        const textChanges: ts.TextChange[] = [];
        const identifiers = sourceFile.getDescendantsOfKind(SyntaxKind.Identifier);
        for (const identifier of identifiers) {
            if (identifier.getText() === 'minecraftserverbindings') {
                textChanges.push({
                    span: {
                        start: identifier.getStart(),
                        length: identifier.getWidth()
                    },
                    newText: 'minecraftserver'
                });
            }
        }
        if (textChanges.length > 0) {
            totalTextChangeCount += textChanges.length;
            sourceFile.applyTextChanges(textChanges);
        }
    }
    assert(totalTextChangeCount > 0);
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
