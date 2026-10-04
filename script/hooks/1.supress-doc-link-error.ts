import type { Hook } from './hook.js';

export default {
    afterLoad({ project }) {
        const gtSource = project.getSourceFileOrThrow('server-gametest.d.ts');
        const registerFunc = gtSource.getFunctionOrThrow('register');
        const registerJsdocs = registerFunc.getJsDocs();
        const registerRemarkTags = registerJsdocs
            .flatMap((jsdoc) => jsdoc.getTags())
            .filter((t) => t.getTagName() === 'remarks');
        for (const jsdocTag of registerRemarkTags) {
            const structure = jsdocTag.getStructure();
            if (typeof structure.text === 'string') {
                structure.text = structure.text.replace(
                    '/gametest run\n[testClassName]:[testName]',
                    '`/gametest run\n[testClassName]:[testName]`'
                );
                jsdocTag.set(structure);
            }
        }

        const registerAsyncFunc = gtSource.getFunctionOrThrow('registerAsync');
        const registerAsyncJsdocs = registerAsyncFunc.getJsDocs();
        const registerAsyncRemarkTags = registerAsyncJsdocs
            .flatMap((jsdoc) => jsdoc.getTags())
            .filter((t) => t.getTagName() === 'remarks');
        for (const jsdocTag of registerAsyncRemarkTags) {
            const structure = jsdocTag.getStructure();
            if (typeof structure.text === 'string') {
                structure.text = structure.text.replace(
                    '/gametest run [testClassName]:[testName]',
                    '`/gametest run [testClassName]:[testName]`'
                );
                jsdocTag.set(structure);
            }
        }
    }
} as Hook;
