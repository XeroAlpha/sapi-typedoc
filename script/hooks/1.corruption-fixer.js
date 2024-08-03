/* eslint-disable no-unused-vars */
const { strict: assert } = require('assert');
const { SyntaxKind } = require('ts-morph');

/** @type {((context: import('./hook').TranslateHookContext) => void)[]} */
const patches = [
    ({ project }) => {
        // patch: @minecraft/server-editor@0.1.0-beta.1.21.30-preview.21
        const sourceFile = project.getSourceFileOrThrow('server-editor.d.ts');
        const interfaces = sourceFile.getInterfaces();
        const injectInterfaceName = 'WidgetCreateOptions';
        assert.equal(sourceFile.getInterface(injectInterfaceName), undefined);
        const positionInterface = interfaces.find((i) => i.getName() > injectInterfaceName);
        const position = positionInterface.getFullStart();
        sourceFile.replaceText(
            [position, position],
            `

export interface WidgetCreateOptions {
    collisionOffset?: minecraftserver.Vector3;
    collisionRadius?: number;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
    visible?: boolean;
}`
        );
    }
];

const errors = [];
/** @type {import('./hook').Hook} */
module.exports = {
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
};
