import { type CommentDisplayPart, Reflection, ReflectionKind } from 'typedoc';
import type { Hook } from './hook.js';

const LinkSepRegex = /[./]/;

export default {
    afterConvert({ tsdocProject }) {
        const reflectionEntries = Object.values(tsdocProject.reflections)
            .filter(
                (refl) =>
                    !refl.kindOf([
                        ReflectionKind.ConstructorSignature,
                        ReflectionKind.CallSignature,
                        ReflectionKind.GetSignature,
                        ReflectionKind.SetSignature
                    ])
            )
            .map((refl) => [refl.getFriendlyFullName(), refl] as const);
        const visitCommentPart = (part: CommentDisplayPart, path: string) => {
            if (part.kind === 'inline-tag' && part.tag === '@link') {
                if (typeof part.target === 'string') {
                    return;
                }
                if (
                    typeof part.target === 'object' &&
                    part.target instanceof Reflection &&
                    part.target.name === part.text
                ) {
                    return;
                }
                const segments = part.text
                    .split(LinkSepRegex)
                    .flatMap((s) => (s.startsWith('minecraft') ? ['@minecraft', s.slice('minecraft'.length)] : [s]));
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
                    for (const matchRefl of bestMatchReflections) {
                        console.warn(`- ${matchRefl[2]}`);
                    }
                }
                part.target = bestMatchReflection[1];
            }
        };
        for (const reflection of Object.values(tsdocProject.reflections)) {
            if (reflection.comment) {
                for (const part of reflection.comment.summary) {
                    visitCommentPart(part, `${reflection.getFriendlyFullName()}:summary`);
                }
                for (const tag of reflection.comment.blockTags) {
                    for (const part of tag.content) {
                        visitCommentPart(part, `${reflection.getFriendlyFullName()}:${tag.tag}`);
                    }
                }
            }
        }
    }
} as Hook;
