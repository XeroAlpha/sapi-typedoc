/* eslint-disable @typescript-eslint/no-unused-vars */
import { strict as assert } from 'assert';
import { SyntaxKind, ts } from 'ts-morph';
import type { Hook, TranslateHookContext } from './hook.js';

const patches: ((context: TranslateHookContext) => void)[] = [];

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
    for (const sourceFile of sourceFiles) {
        const textChanges: ts.TextChange[] = [];
        const identifiers = sourceFile.getDescendantsOfKind(SyntaxKind.Identifier);
        for (const identifier of identifiers) {
            if (identifier.getText() === 'minecraftserverbindings') {
                textChanges.push({
                    span: {
                        start: identifier.getStart(),
                        length: identifier.getEnd() - identifier.getStart()
                    },
                    newText: 'minecraftserver'
                });
            }
        }
        sourceFile.applyTextChanges(textChanges);
    }
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
