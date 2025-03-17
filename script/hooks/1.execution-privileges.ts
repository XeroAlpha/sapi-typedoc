import { SyntaxKind, ts, type NodeParentType } from 'ts-morph';
import type { Hook } from './hook.js';
import { installLanguages, type TypeDocLanguages } from '../utils.js';
import {
    DocumentReflection,
    i18n,
    Reflection,
    translateTagName,
    TraverseProperty,
    type CommentDisplayPart
} from 'typedoc';

declare module 'typedoc' {
    interface TranslatableStrings {
        tag_worldMutation: [];
        tag_earlyExecution: [];
        execution_privileges_list: [string];
    }
}

const TypeDocExtraTranslations: TypeDocLanguages = {
    zh: {
        tag_worldMutation: '世界修改',
        tag_earlyExecution: '早期执行',
        execution_privileges_list: '列表 - {0}'
    },
    en: {
        tag_worldMutation: 'World mutation',
        tag_earlyExecution: 'Early execution',
        execution_privileges_list: 'List - {0}'
    }
};

const worldMutationTag = '@worldMutation';
const earlyExecutionTag = '@earlyExecution';

const FunctionLikeSyntaxKind = [SyntaxKind.Constructor, SyntaxKind.MethodDeclaration, SyntaxKind.FunctionDeclaration];
const PropertyLikeSyntaxKind = [SyntaxKind.PropertyDeclaration];

const TraverseProperties = [
    TraverseProperty.Children,
    TraverseProperty.GetSignature,
    TraverseProperty.IndexSignature,
    TraverseProperty.SetSignature,
    TraverseProperty.Signatures
];

function generateFilterResult(rootRefl: Reflection, filter: (refl: Reflection) => boolean) {
    const filteredRefl = new Set<Reflection>();
    const traverseTags = (refl: Reflection) => {
        const children: Reflection[] = [];
        refl.traverse((childRefl, prop) => {
            if (TraverseProperties.includes(prop) && !childRefl.flags.isPrivate && !childRefl.flags.isProtected) {
                traverseTags(childRefl);
                if (filter(childRefl)) {
                    filteredRefl.add(childRefl);
                }
                children.push(childRefl);
            }
            return true;
        });
        if (children.length > 0) {
            if (children.every((c) => filteredRefl.has(c))) {
                children.forEach((c) => filteredRefl.delete(c));
                filteredRefl.add(refl);
            }
        }
    };
    traverseTags(rootRefl);
    const filteredReflWithAncestors = new Set<Reflection>();
    for (const refl of filteredRefl) {
        let parent = refl.parent;
        while (parent) {
            if (filteredReflWithAncestors.has(parent)) {
                break;
            } else {
                filteredReflWithAncestors.add(parent);
            }
            parent = parent.parent;
        }
        filteredReflWithAncestors.add(refl);
    }
    const result: CommentDisplayPart[] = [];
    const traverseAndRender = (refl: Reflection, indent: string) => {
        if (filteredReflWithAncestors.has(refl)) {
            if (filteredRefl.has(refl)) {
                result.push({
                    kind: 'text',
                    text: `${indent}- `
                });
                result.push({
                    kind: 'inline-tag',
                    tag: '@link',
                    text: refl.name,
                    target: refl
                });
                result.push({
                    kind: 'text',
                    text: `\n`
                });
            } else {
                result.push({
                    kind: 'text',
                    text: `${indent}- ${refl.name}\n`
                });
            }
            refl.traverse((childRefl) => {
                traverseAndRender(childRefl, `${indent}${' '.repeat(2)}`);
                return true;
            });
        }
    };
    traverseAndRender(rootRefl, '');
    return result;
}

const translateTexts: {
    from: string;
    to: string;
    matches?: (declaration: NodeParentType<ts.JSDoc>) => boolean;
}[] = [
    {
        from: `This function can't be called in read-only mode.`,
        to: worldMutationTag,
        matches(declaration) {
            return FunctionLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can't be used in read-only mode.`,
        to: worldMutationTag,
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can't be edited in read-only mode.`,
        to: worldMutationTag,
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This function can be called in early-execution mode.`,
        to: earlyExecutionTag,
        matches(declaration) {
            return FunctionLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can be read in early-execution mode.`,
        to: earlyExecutionTag,
        matches(declaration) {
            return PropertyLikeSyntaxKind.some((e) => declaration.isKind(e));
        }
    },
    {
        from: `This property can be edited in early-execution mode.`,
        to: earlyExecutionTag,
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
            worldMutationTag,
            earlyExecutionTag
        ]);
        tsdocApplication.options.setValue('visibilityFilters', {
            ...tsdocApplication.options.getValue('visibilityFilters'),
            [worldMutationTag]: true
        });
    },
    afterConvert({ tsdocProject }) {
        const worldMutationSummary = generateFilterResult(tsdocProject, (refl) => {
            return refl.comment?.hasModifier(worldMutationTag) ?? false;
        });
        const worldMutationTagName = translateTagName(worldMutationTag);
        const worldMutationListName = String(i18n.execution_privileges_list(worldMutationTagName));
        const worldMutationSummaryRef = new DocumentReflection(
            worldMutationListName,
            tsdocProject,
            worldMutationSummary,
            { title: worldMutationListName }
        );
        tsdocProject.registerReflection(worldMutationSummaryRef, undefined, undefined);
        tsdocProject.addChild(worldMutationSummaryRef);

        const earlyExecutionSummary = generateFilterResult(tsdocProject, (refl) => {
            return refl.comment?.hasModifier(earlyExecutionTag) ?? false;
        });
        const earlyExecutionTagName = translateTagName(earlyExecutionTag);
        const earlyExecutionListName = String(i18n.execution_privileges_list(earlyExecutionTagName));
        const earlyExecutionSummaryRef = new DocumentReflection(
            earlyExecutionListName,
            tsdocProject,
            earlyExecutionSummary,
            { title: earlyExecutionListName }
        );
        tsdocProject.registerReflection(earlyExecutionSummaryRef, undefined, undefined);
        tsdocProject.addChild(earlyExecutionSummaryRef);
    }
} as Hook;
