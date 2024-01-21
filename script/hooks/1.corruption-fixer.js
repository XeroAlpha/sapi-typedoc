// FUCK STUPID MOJANG!
const { ts } = require('ts-morph');

/** @type {import('./hook').Hook} */
module.exports = {
    afterLoad({ project }) {
        // patch: @minecraft/server@1.9.0-beta.1.20.60-preview.26
        project
            .getSourceFileOrThrow('server.d.ts')
            .getClassOrThrow('System')
            .getMemberOrThrow('runJob')
            .asKindOrThrow(ts.SyntaxKind.MethodDeclaration)
            .getParameter('generator')
            .setType('Generator');
    }
};
