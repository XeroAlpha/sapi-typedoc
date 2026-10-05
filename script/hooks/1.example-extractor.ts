import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import { SyntaxKind, type Symbol as TsSymbol, type ts } from 'ts-morph';
import {
    type CommentDisplayPart,
    type DefaultTheme,
    DocumentReflection,
    i18n,
    JSX,
    type Reflection,
    type ReflectionSymbolId,
    translateTagName
} from 'typedoc';
import { jsdocTagBounds } from '../multiline-comments.js';
import { findJSXElement, installLanguages, type TypeDocLanguages } from '../utils.js';
import type { Hook } from './hook.js';

const CodeBlockMark = '```';

const ExampleNameOverwrite = [
    {
        source: 'server',
        path: 'ItemStack.setCanDestroy',
        originalName: 'example.ts',
        renameTo: 'giveRestrictedPickaxe.ts'
    },
    {
        source: 'server',
        path: 'ItemStack.setCanPlaceOn',
        originalName: 'example.ts',
        renameTo: 'giveRestrictedGoldBlock.ts'
    }
];

function hashTextShort(str: string) {
    return createHash('sha256').update(str).digest('hex').slice(0, 8);
}

function unescapeMultilineComment(text: string) {
    return text.replace(/\/\\\*/g, '/*').replace(/\*\\\//g, '*/');
}

function toCodeBlock(code: string, language?: string) {
    return `${CodeBlockMark}${language ?? ''}\n${code}\n${CodeBlockMark}`;
}

interface ExampleVersion {
    language?: string;
    content: string;
    hash: string;
    fileName: string;
    sources: { source: string; fileName: string; path: string; symbol: TsSymbol }[];
}
const examples: Record<string, ExampleVersion[]> = {};

declare module 'typedoc' {
    interface TranslatableStrings {
        example_extractor_referenced_by_with_colon: [];
    }
}

const TypeDocExtraTranslations: TypeDocLanguages = {
    zh: {
        example_extractor_referenced_by_with_colon: '在以下成员中被引用：'
    },
    en: {
        example_extractor_referenced_by_with_colon: 'References:'
    }
};

export default {
    afterLoad({ sourceFiles }) {
        const postActions: (() => void)[] = [];
        // 提取 example
        for (const sourceFile of sourceFiles) {
            const sourceFileName = sourceFile.getFilePath();
            const sourceName = sourceFile.getBaseNameWithoutExtension();
            const comments = sourceFile.getDescendantsOfKind(SyntaxKind.JSDocTag);
            const exampleTags = comments.filter((t) => t.getTagName() === 'example');
            const pendingTextChangeAppliers: { span: ts.TextSpan; newText: () => string }[] = [];
            for (const tag of exampleTags) {
                const tagLines = jsdocTagBounds(tag);
                const tagStart = tag.getStart();
                const tagNameNodeEnd = tag.getTagNameNode().getEnd();
                const [firstLine] = tagLines;
                const bodyLines = tagLines.slice(1);
                const bodyFirstLineComment = bodyLines[0]?.comment;
                let exampleLanguage: string | undefined;
                if (bodyFirstLineComment?.startsWith(CodeBlockMark)) {
                    if (bodyFirstLineComment.length > CodeBlockMark.length) {
                        exampleLanguage = bodyFirstLineComment.slice(CodeBlockMark.length).trim();
                    }
                    const codeBlockEnd = bodyLines.findIndex((e, i) => i > 0 && e.comment === CodeBlockMark);
                    if (codeBlockEnd !== -1) {
                        pendingTextChangeAppliers.push({
                            span: {
                                start: tagStart,
                                length: bodyLines[codeBlockEnd].commentEnd - tagStart
                            },
                            newText: () => {
                                if (exampleVersions.length > 1) {
                                    return `@seeExample ${exampleName} ${hashTextShort(exampleContent)}`;
                                }
                                return `@seeExample ${exampleName}`;
                            }
                        });
                        bodyLines.splice(codeBlockEnd);
                        bodyLines.splice(0, 1);
                    }
                }

                let examplePath = '';
                const exampleParent = tag.getParentWhileKindOrThrow(SyntaxKind.JSDoc).getParent();
                const exampleParentSymbol = exampleParent.getSymbol();
                const sourceFileSymbol = sourceFile.getSymbolOrThrow();
                if (exampleParentSymbol) {
                    examplePath = exampleParentSymbol
                        .getFullyQualifiedName()
                        .replace(`${sourceFileSymbol.getEscapedName()}.`, '');
                }

                let exampleName = (firstLine.comment?.slice(tagNameNodeEnd - firstLine.commentStart) ?? '').trim();
                for (const exampleNameOverwriteEntry of ExampleNameOverwrite) {
                    if (
                        exampleNameOverwriteEntry.source === sourceName &&
                        exampleNameOverwriteEntry.path === examplePath &&
                        exampleNameOverwriteEntry.originalName === exampleName
                    ) {
                        exampleName = exampleNameOverwriteEntry.renameTo;
                        break;
                    }
                }

                let exampleVersions = examples[exampleName];
                if (!exampleVersions) {
                    exampleVersions = [];
                    examples[exampleName] = exampleVersions;
                }

                const exampleContent = bodyLines.map((e) => e.comment ?? '').join('\n');
                const foundVersion = exampleVersions.find((e) => e.content === exampleContent);
                const source = {
                    source: sourceName,
                    fileName: sourceFileName,
                    path: examplePath,
                    symbol: exampleParentSymbol ?? sourceFileSymbol
                };
                if (foundVersion) {
                    foundVersion.sources.push(source);
                } else {
                    const exampleVersion: ExampleVersion = {
                        language: exampleLanguage,
                        content: exampleContent,
                        hash: hashTextShort(exampleContent),
                        fileName: exampleName,
                        sources: [source]
                    };
                    exampleVersions.push(exampleVersion);
                    postActions.push(() => {
                        const dotPos = exampleName.lastIndexOf('.');
                        let fileNameWithoutExt = dotPos > 0 ? exampleName.slice(0, dotPos) : exampleName;
                        const ext = dotPos > 0 ? exampleName.slice(dotPos) : '.ts';
                        if (exampleVersions.length > 1) {
                            fileNameWithoutExt = `${fileNameWithoutExt}.${exampleVersion.hash}`;
                        }
                        exampleVersion.fileName = `${fileNameWithoutExt}${ext}`;
                    });
                }
            }
            if (pendingTextChangeAppliers.length > 0) {
                postActions.push(() => {
                    sourceFile.applyTextChanges(
                        pendingTextChangeAppliers.map((e) => ({ span: e.span, newText: e.newText() }))
                    );
                });
            }
        }
        for (const action of postActions) {
            action();
        }
    },
    afterTranslate({ translatingPath }) {
        const exampleDir = resolvePath(translatingPath, 'examples');
        if (existsSync(exampleDir)) {
            for (const [, exampleVersions] of Object.entries(examples)) {
                for (const exampleVersion of exampleVersions) {
                    const exampleFilePath = resolvePath(exampleDir, exampleVersion.fileName);
                    if (existsSync(exampleFilePath)) {
                        exampleVersion.content = readFileSync(exampleFilePath, 'utf-8');
                    }
                }
            }
        }
    },
    beforeConvert({ tsdocApplication }) {
        installLanguages(tsdocApplication, TypeDocExtraTranslations);
        tsdocApplication.options.setValue('blockTags', [
            ...tsdocApplication.options.getValue('blockTags'),
            '@seeExample'
        ]);
        tsdocApplication.renderer.on('beginRender', () => {
            const defaultTheme = tsdocApplication.renderer.theme as DefaultTheme;
            const oldContextFactory = defaultTheme.getRenderContext;
            defaultTheme.getRenderContext = function (...args) {
                const renderContext = oldContextFactory.call(this, ...args);
                const oldCommentTagsRender = renderContext.commentTags;
                renderContext.commentTags = (props) => {
                    const jsx = oldCommentTagsRender(props);
                    const exampleTags = findJSXElement(jsx, (el): el is JSX.Element => {
                        if (typeof el === 'object' && el.props) {
                            return (el.props as { class?: string }).class?.includes('tsd-tag-example') ?? false;
                        }
                        return false;
                    });
                    for (const exampleTag of exampleTags) {
                        const summaryTag = JSX.createElement('summary', null, exampleTag.children[0]);
                        const detailsTag = JSX.createElement('details', null, [
                            summaryTag,
                            exampleTag.children.slice(1)
                        ]);
                        exampleTag.children = [detailsTag];
                    }
                    return jsx;
                };
                return renderContext;
            };
        });
    },
    afterConvert({ tsdocProject }) {
        const allReflections = Object.values(tsdocProject.reflections);
        const reflAndSymbolIdMap = allReflections
            .map((refl) => [refl, tsdocProject.getSymbolIdFromReflection(refl)] as const)
            .filter((e): e is [Reflection, ReflectionSymbolId] => e[1] !== undefined);
        const exampleRefls: [name: string, refl: DocumentReflection, versions: ExampleVersion[]][] = [];
        // 添加 example 页面
        const exampleI18N = translateTagName('@example');
        const exampleReferencesI18N = String(i18n.example_extractor_referenced_by_with_colon());
        const exampleParentRef = new DocumentReflection(exampleI18N, tsdocProject, [], { title: exampleI18N });
        tsdocProject.registerReflection(exampleParentRef, undefined, undefined);
        tsdocProject.addChild(exampleParentRef);
        for (const exampleName of Object.keys(examples).sort()) {
            const exampleVersions = examples[exampleName];
            const content: CommentDisplayPart[] = [];
            for (const exampleVersion of exampleVersions) {
                if (exampleVersions.length > 1) {
                    content.push({
                        kind: 'text',
                        text: `# ${exampleName}（${exampleVersion.hash}）\n\n`
                    });
                } else {
                    content.push({
                        kind: 'text',
                        text: `# ${exampleName}\n\n`
                    });
                }
                content.push({
                    kind: 'code',
                    text: toCodeBlock(exampleVersion.content, exampleVersion.language)
                });
                content.push({
                    kind: 'text',
                    text: `\n${exampleReferencesI18N}\n`
                });
                if (exampleVersion.sources.length > 1) {
                    exampleVersion.sources.sort((a, b) => {
                        if (a.source !== b.source) {
                            return a.source.localeCompare(b.source);
                        }
                        return a.path.localeCompare(b.path);
                    });
                }
                for (const source of exampleVersion.sources) {
                    const reflAndSymbolId = reflAndSymbolIdMap.find(
                        ([, symbolId]) =>
                            symbolId.fileName === source.fileName && symbolId.qualifiedName === source.path
                    );
                    if (reflAndSymbolId) {
                        const sourceRef = tsdocProject.getReflectionFromSymbolId(reflAndSymbolId[1]);
                        content.push({
                            kind: 'text',
                            text: '\n- '
                        });
                        content.push({
                            kind: 'inline-tag',
                            tag: '@link',
                            text: source.path ? `${source.source} / ${source.path}` : source.source,
                            target: sourceRef
                        });
                    }
                }
                content.push({
                    kind: 'text',
                    text: '\n\n'
                });
            }
            const docRef = new DocumentReflection(exampleName, exampleParentRef, content, { title: exampleName });
            tsdocProject.registerReflection(docRef, undefined, undefined);
            exampleRefls.push([exampleName, docRef, exampleVersions]);
            exampleParentRef.addChild(docRef);
        }

        // 修正 @example 引用
        for (const refl of Object.values(tsdocProject.reflections)) {
            if (refl.comment) {
                for (const commentTag of refl.comment.blockTags) {
                    if (commentTag.tag === '@seeExample' && commentTag.content[0]?.kind === 'text') {
                        const [firstLine, ...rest] = commentTag.content[0].text.split('\n');
                        const [exampleName, exampleHash] = firstLine.split(' ');
                        const relatedExample = examples[exampleName].find(
                            (e) => !exampleHash || exampleHash === e.hash
                        );
                        if (relatedExample) {
                            commentTag.tag = '@example';
                            commentTag.name = exampleName;
                            const replacement: CommentDisplayPart[] = [
                                {
                                    kind: 'code',
                                    text: toCodeBlock(relatedExample.content, relatedExample.language)
                                }
                            ];
                            if (rest.length > 0) {
                                replacement.push({
                                    kind: 'text',
                                    text: rest.join('\n')
                                });
                            }
                            commentTag.content.splice(0, 1, ...replacement);
                        } else {
                            console.warn(`Example not found: ${exampleName}`);
                        }
                    }
                }
            }
        }
    },
    afterUpdate({ translatingPath }) {
        const exampleDir = resolvePath(translatingPath, 'examples');
        mkdirSync(exampleDir, { recursive: true });
        for (const [, exampleVersions] of Object.entries(examples)) {
            for (const exampleVersion of exampleVersions) {
                writeFileSync(
                    resolvePath(exampleDir, exampleVersion.fileName),
                    `${unescapeMultilineComment(exampleVersion.content)}\n`
                );
            }
        }
    }
} as Hook;
