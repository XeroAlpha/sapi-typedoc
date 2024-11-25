import type { DeclarationReflection, Reflection } from 'typedoc';
import type { Hook } from './hook.js';

export default {
    afterConvert({ tsdocProject }) {
        Object.values(tsdocProject.reflections).forEach((reflection) => {
            const refl = reflection as Reflection & Partial<DeclarationReflection>;
            if (refl.sources) {
                refl.sources.forEach((source) => {
                    source.fileName = source.fileName.replace('translated', tsdocProject.name);
                });
            }
        });
    }
} as Hook;
