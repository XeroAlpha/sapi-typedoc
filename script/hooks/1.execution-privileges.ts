import { SyntaxKind, ts } from 'ts-morph';
import type { Hook } from './hook.js';
import { installLanguages, type TypeDocLanguages } from '../utils.js';

declare module 'typedoc' {
    interface TranslatableStrings {
        tag_worldMutation: [];
        tag_earlyExecution: [];
    }
}

const TypeDocExtraTranslations: TypeDocLanguages = {
    zh: {
        tag_worldMutation: '世界修改',
        tag_earlyExecution: '早期执行'
    },
    en: {
        tag_worldMutation: 'World mutation',
        tag_earlyExecution: 'Early execution'
    }
};

const translateTexts = [
    [`This function can't be called in read-only mode.`, '@worldMutation'],
    [`This property can't be edited in read-only mode.`, '@worldMutation'],
    [`This function can be called in early-execution mode.`, '@earlyExecution'],
    [`This property can be edited in early-execution mode.`, '@earlyExecution']
];

export default {
    afterLoad({ sourceFiles }) {
        sourceFiles.forEach((sourceFile) => {
            const fullText = sourceFile.getFullText();
            const textChanges: ts.TextChange[] = [];
            const jsdocNodes = sourceFile.getDescendantsOfKind(SyntaxKind.JSDoc);
            translateTexts.forEach(([from, to]) => {
                fullText.replaceAll(from, (match, offset: number) => {
                    if (jsdocNodes.some((jsdocNode) => jsdocNode.containsRange(offset, offset + match.length))) {
                        textChanges.push({
                            span: { start: offset, length: match.length },
                            newText: to
                        });
                    }
                    return '';
                });
            });
            sourceFile.applyTextChanges(textChanges);
        });
    },
    beforeConvert({ tsdocApplication }) {
        installLanguages(tsdocApplication, TypeDocExtraTranslations);
        tsdocApplication.options.setValue('modifierTags', [
            ...tsdocApplication.options.getValue('modifierTags'),
            '@worldMutation',
            '@earlyExecution'
        ]);
        tsdocApplication.options.setValue('visibilityFilters', {
            ...tsdocApplication.options.getValue('visibilityFilters'),
            '@worldMutation': true
        });
    }
} as Hook;
