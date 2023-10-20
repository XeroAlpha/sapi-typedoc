const TypeDoc = require("typedoc");

/** @type {import('./hook').Hook} */
module.exports = {
    afterConvert({ tsdocProject }) {
        const reflectionEntries = Object.entries(tsdocProject.reflections)
            .filter(([id, refl]) => !refl.kindOf([
                TypeDoc.ReflectionKind.ConstructorSignature,
                TypeDoc.ReflectionKind.CallSignature,
                TypeDoc.ReflectionKind.GetSignature,
                TypeDoc.ReflectionKind.SetSignature
            ]))
            .map(([id, refl]) => [refl.getFriendlyFullName(), refl]);
        const visitCommentPart = (/** @type {TypeDoc.CommentDisplayPart} */ part) => {
            if (part.kind === 'inline-tag' && part.tag === '@link') {
                if (typeof part.target === 'string') {
                    return;
                }
                if (typeof part.target === 'object' && part.target.name === part.text) {
                    return;
                }
                const segments = part.text.split(/[\./]/);
                const probablySymbolNames = segments.map((_, i) => segments.slice(i).join('.'));
                const foundReflections = reflectionEntries.map(([friendlyFullName, refl]) => [
                    probablySymbolNames.findIndex((symbolName) => friendlyFullName === symbolName || friendlyFullName.endsWith(`.${symbolName}`)),
                    refl,
                    friendlyFullName
                ]).filter(([rank, refl]) => rank >= 0);
                if (foundReflections.length === 0) {
                    return;
                }
                const bestMatchReflection = foundReflections
                    .reduce((best, e) => e[0] < best[0] ? e : best);
                const bestMatchReflections = foundReflections.filter((e) => e[0] <= bestMatchReflection[0]);
                if (bestMatchReflections.length >= 2) {
                    console.warn(`Multiple resolutions of link: ${part.text}`);
                }
                part.target = bestMatchReflection[1];
            }
        }
        Object.entries(tsdocProject.reflections).forEach(([id, reflection]) => {
            if (reflection.comment) {
                reflection.comment.summary.forEach(visitCommentPart);
                reflection.comment.blockTags.forEach((tag) => {
                    tag.content.forEach(visitCommentPart);
                });
            }
        });
    }
};
