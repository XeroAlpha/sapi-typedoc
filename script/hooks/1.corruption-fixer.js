/* eslint-disable no-unused-vars */
const { strict: assert } = require('assert');
const { SyntaxKind } = require('ts-morph');

// FUCK STUPID MOJANG!
/** @type {((context: import('./hook').TranslateHookContext) => void)[]} */
const patches = [
    ({ project }) => {
        // patch: @minecraft/server-editor@0.1.0-beta.1.21.0-preview.20
        const SettingsUIElementClass = project
            .getSourceFileOrThrow('server-editor.d.ts')
            .getClassOrThrow('SettingsUIElement');
        const valueChangedPropTypeParameter = SettingsUIElementClass.getMemberOrThrow('valueChanged')
            .asKindOrThrow(SyntaxKind.PropertyDeclaration)
            .getTypeNode()
            .asKindOrThrow(SyntaxKind.FunctionType)
            .getParameter('arg');
        assert.equal(valueChangedPropTypeParameter.getTypeNode().getText(), 'variant');
        valueChangedPropTypeParameter.setType('boolean | number');

        const constructorValueChangedParameterTypeParameter = SettingsUIElementClass.getConstructors()[0]
            .getParameter('valueChanged')
            .getTypeNode()
            .asKindOrThrow(SyntaxKind.FunctionType)
            .getParameter('arg');
        assert.equal(constructorValueChangedParameterTypeParameter.getTypeNode().getText(), 'variant');
        constructorValueChangedParameterTypeParameter.setType('boolean | number');
    }
];

/** @type {import('./hook').Hook} */
module.exports = {
    afterLoad(context) {
        patches.forEach((f) => f(context));
    }
};
