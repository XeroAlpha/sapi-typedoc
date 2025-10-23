import * as TypeDoc from 'typedoc';
import type { Hook } from './hook.js';

export default {
    afterConvert({ tsdocProject }) {
        const reflectionEntries = Object.values(tsdocProject.reflections)
            .filter(
                (refl) =>
                    !refl.kindOf([
                        TypeDoc.ReflectionKind.ConstructorSignature,
                        TypeDoc.ReflectionKind.CallSignature,
                        TypeDoc.ReflectionKind.GetSignature,
                        TypeDoc.ReflectionKind.SetSignature
                    ])
            )
            .map((refl) => [refl.getFriendlyFullName(), refl] as const);
        const visitCommentPart = (part: TypeDoc.CommentDisplayPart, path: string) => {
            if (part.kind === 'inline-tag' && part.tag === '@link') {
                if (typeof part.target === 'string') {
                    return;
                }
                if (
                    typeof part.target === 'object' &&
                    part.target instanceof TypeDoc.Reflection &&
                    part.target.name === part.text
                ) {
                    return;
                }
                if (part.text === 'Error') {
                    return; // bypass @throws Error
                }
                const segments = part.text
                    .split(/[./]/)
                    .flatMap((s) => (s.startsWith('minecraft') ? ['@minecraft', s.slice(9)] : [s]));
                const probablySymbolNames = segments.map((_, i) => segments.slice(i).join('.'));
                const foundReflections = reflectionEntries
                    .map(
                        ([friendlyFullName, refl]) =>
                            [
                                probablySymbolNames.findIndex(
                                    (symbolName) =>
                                        friendlyFullName === symbolName || friendlyFullName.endsWith(`.${symbolName}`)
                                ),
                                refl,
                                friendlyFullName
                            ] as const
                    )
                    .filter(([rank]) => rank >= 0);
                if (foundReflections.length === 0) {
                    return;
                }
                const bestMatchReflection = foundReflections.reduce((best, e) => (e[0] < best[0] ? e : best));
                const bestMatchReflections = foundReflections.filter((e) => e[0] <= bestMatchReflection[0]);
                if (bestMatchReflections.length >= 2) {
                    console.warn(`Multiple resolutions of link in ${path}: ${part.text}`);
                }
                part.target = bestMatchReflection[1];
            }
        };
        Object.values(tsdocProject.reflections).forEach((reflection) => {
            if (reflection.comment) {
                reflection.comment.summary.forEach((part) => {
                    visitCommentPart(part, `${reflection.getFriendlyFullName()}:summary`);
                });
                reflection.comment.blockTags.forEach((tag) => {
                    tag.content.forEach((part) => {
                        visitCommentPart(part, `${reflection.getFriendlyFullName()}:${tag.tag}`);
                    });
                });
            }
        });
    }
} as Hook;
