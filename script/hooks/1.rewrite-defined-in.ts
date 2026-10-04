import type { DeclarationReflection, NormalizedPath, Reflection } from 'typedoc';
import type { Hook } from './hook.js';

export default {
    afterConvert({ tsdocProject }) {
        for (const reflection of Object.values(tsdocProject.reflections)) {
            const refl = reflection as Reflection & Partial<DeclarationReflection>;
            if (refl.sources) {
                for (const source of refl.sources) {
                    source.fileName = source.fileName.replace('translated', tsdocProject.name) as NormalizedPath;
                }
            }
        }
    }
} as Hook;
