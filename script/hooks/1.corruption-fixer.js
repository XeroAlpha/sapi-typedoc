/* eslint-disable no-unused-vars */
const { strict: assert } = require('assert');
const { SyntaxKind } = require('ts-morph');

/** @type {((context: import('./hook').TranslateHookContext) => void)[]} */
const patches = [
    ({ project }) => {
        // patch: @minecraft/server-editor@0.1.0-beta.1.21.0-preview.21
        const SettingsUIElementClass = project
            .getSourceFileOrThrow('server-editor.d.ts')
            .getClassOrThrow('SettingsUIElement');
        const variantType = 'variant';
        const variantTypeDefinition = 'boolean | number | string | minecraftserver.Vector3';
        const valueChangedPropTypeParameter = SettingsUIElementClass.getMemberOrThrow('onChange')
            .asKindOrThrow(SyntaxKind.PropertyDeclaration)
            .getTypeNode()
            .asKindOrThrow(SyntaxKind.FunctionType)
            .getParameter('arg');
        assert.equal(valueChangedPropTypeParameter.getTypeNode().getText(), variantType);
        valueChangedPropTypeParameter.setType(variantTypeDefinition);

        const constructorValueChangedParameterTypeParameter = SettingsUIElementClass.getConstructors()[0]
            .getParameter('onChange')
            .getTypeNode()
            .asKindOrThrow(SyntaxKind.FunctionType)
            .getParameter('arg');
        assert.equal(constructorValueChangedParameterTypeParameter.getTypeNode().getText(), variantType);
        constructorValueChangedParameterTypeParameter.setType(variantTypeDefinition);
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
