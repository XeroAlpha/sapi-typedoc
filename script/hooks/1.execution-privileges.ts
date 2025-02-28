import { SyntaxKind, ts, type NodeParentType } from 'ts-morph';
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

const FunctionLikeSyntaxKind = [SyntaxKind.Constructor, SyntaxKind.MethodDeclaration, SyntaxKind.FunctionDeclaration];
const PropertyLikeSyntaxKind = [SyntaxKind.PropertyDeclaration];

const translateTexts: {
    from: string;
    to: string;
    matches?: (declaration: NodeParentType<ts.JSDoc>) => boolean;
}[] = [
    {
        from: `This function can't be called in read-only mode.`,
        to: '@worldMutation',
        matches(declaration) {
            return FunctionLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can't be used in read-only mode.`,
        to: '@worldMutation',
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can't be edited in read-only mode.`,
        to: '@worldMutation',
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This function can be called in early-execution mode.`,
        to: '@earlyExecution',
        matches(declaration) {
            return FunctionLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can be read in early-execution mode.`,
        to: '@earlyExecution',
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can be edited in early-execution mode.`,
        to: '@earlyExecution',
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    }
];

export default {
    afterLoad({ sourceFiles }) {
        sourceFiles.forEach((sourceFile) => {
            const fullText = sourceFile.getFullText();
            const textChanges: ts.TextChange[] = [];
            const jsdocNodes = sourceFile.getDescendantsOfKind(SyntaxKind.JSDoc);
            translateTexts.forEach(({ from, to, matches }) => {
                fullText.replaceAll(from, (match, offset: number) => {
                    const relatedJsdoc = jsdocNodes.find((node) => node.containsRange(offset, offset + match.length));
                    if (relatedJsdoc) {
                        if (!matches || matches(relatedJsdoc.getParent())) {
                            textChanges.push({
                                span: { start: offset, length: match.length },
                                newText: to
                            });
                        }
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
