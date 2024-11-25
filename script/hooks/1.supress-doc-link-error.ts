import type { Hook } from './hook.js';

export default {
    afterLoad({ project }) {
        const gtSource = project.getSourceFileOrThrow('server-gametest.d.ts');
        const registerFunc = gtSource.getFunctionOrThrow('register');
        const registerJsdocs = registerFunc.getJsDocs();
        const registerRemarkTags = registerJsdocs
            .flatMap((jsdoc) => jsdoc.getTags())
            .filter((t) => t.getTagName() === 'remarks');
        registerRemarkTags.forEach((t) => {
            const structure = t.getStructure();
            if (typeof structure.text === 'string') {
                structure.text = structure.text.replace(
                    '/gametest run\n[testClassName]:[testName]',
                    '`/gametest run\n[testClassName]:[testName]`'
                );
                t.set(structure);
            }
        });

        const registerAsyncFunc = gtSource.getFunctionOrThrow('registerAsync');
        const registerAsyncJsdocs = registerAsyncFunc.getJsDocs();
        const registerAsyncRemarkTags = registerAsyncJsdocs
            .flatMap((jsdoc) => jsdoc.getTags())
            .filter((t) => t.getTagName() === 'remarks');
        registerAsyncRemarkTags.forEach((t) => {
            const structure = t.getStructure();
            if (typeof structure.text === 'string') {
                structure.text = structure.text.replace(
                    '/gametest run [testClassName]:[testName]',
                    '`/gametest run [testClassName]:[testName]`'
                );
                t.set(structure);
            }
        });
    }
} as Hook;
