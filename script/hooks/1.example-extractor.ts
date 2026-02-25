import { createHash } from 'crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { Symbol, SyntaxKind, ts } from 'ts-morph';
import {
    DefaultTheme,
    DocumentReflection,
    i18n,
    JSX,
    Reflection,
    ReflectionSymbolId,
    translateTagName,
    type CommentDisplayPart
} from 'typedoc';
import type { Hook } from './hook.js';
import { installLanguages, type TypeDocLanguages } from '../utils.js';

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

type TraversableJSXChildren = Exclude<JSX.Children, JSX.Children[] | null | undefined>;

function traverseJSX(jsx: JSX.Children, f: (element: TraversableJSXChildren, traverseInto: () => void) => void) {
    if (Array.isArray(jsx)) {
        for (const child of jsx) {
            traverseJSX(child, f);
        }
    } else if (jsx !== null && jsx !== undefined) {
        f(jsx, () => {
            if (typeof jsx === 'object') {
                for (const child of jsx.children) {
                    traverseJSX(child, f);
                }
            }
        });
    }
}

function findJSXElement<E extends TraversableJSXChildren>(
    jsx: JSX.Children,
    predicate: (element: TraversableJSXChildren) => element is E
) {
    const elements: E[] = [];
    traverseJSX(jsx, (el, traverseInto) => {
        if (predicate(el)) {
            elements.push(el);
        }
        traverseInto();
    });
    return elements;
}

const examples: Record<
    string,
    {
        content: string;
        hash: string;
        fileName: string;
        sources: { source: string; fileName: string; path: string; symbol: Symbol }[];
    }[]
> = {};

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
        const postActions = [];
        // 提取 example
        for (const sourceFile of sourceFiles) {
            const sourceFileName = sourceFile.getFilePath();
            const sourceName = sourceFile.getBaseNameWithoutExtension();
            const comments = sourceFile.getDescendantsOfKind(SyntaxKind.JSDocTag);
            const exampleTags = comments.filter((t) => t.getTagName() === 'example');
            const pendingTextChangeAppliers: { span: ts.TextSpan; newText: () => string }[] = [];
            for (const exampleTag of exampleTags) {
                const jsdoc = exampleTag.getParentIfKindOrThrow(SyntaxKind.JSDoc);
                const lineOffset = exampleTag.getStartLineNumber() - jsdoc.getStartLineNumber();
                const exampleTagIdentifier = exampleTag.getTagNameNode();
                const exampleCommentStartCol = exampleTagIdentifier.getEnd() - exampleTag.getStartLinePos();
                const commentLines = jsdoc.getText().split('\n').slice(lineOffset);
                const commentFirstLine = commentLines[0].slice(exampleCommentStartCol);
                commentLines.shift();
                let exampleName = commentFirstLine.trim();
                const commentLinesWithoutStars = commentLines.map((l) => l.replace(/^\s*\*(?: )?/, ''));
                const exampleParent = exampleTag.getParentWhileKindOrThrow(SyntaxKind.JSDoc).getParent();
                const exampleParentSymbol = exampleParent.getSymbol();
                const sourceFileSymbol = sourceFile.getSymbolOrThrow();
                let examplePath = '';
                if (exampleParentSymbol) {
                    examplePath = exampleParentSymbol
                        .getFullyQualifiedName()
                        .replace(`${sourceFileSymbol.getEscapedName()}.`, '');
                }
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
                let exampleContent = (exampleTag.getCommentText() ?? '').split('\n').slice(1).join('\n');
                const exampleVersions = examples[exampleName] ?? (examples[exampleName] = []);
                if (commentLinesWithoutStars.length > 1 && commentLinesWithoutStars[0].startsWith('```')) {
                    const codeBlockEnd = commentLinesWithoutStars.indexOf('```', 1);
                    if (codeBlockEnd >= 0) {
                        exampleContent = commentLinesWithoutStars.splice(0, codeBlockEnd + 1).join('\n');
                        const replacingText = commentLines.slice(0, codeBlockEnd + 1).join('\n');
                        pendingTextChangeAppliers.push({
                            span: {
                                start: exampleTag.getStart(),
                                length: `@example${commentFirstLine}\n${replacingText}\n`.length
                            },
                            newText: () => {
                                if (exampleVersions.length > 1) {
                                    return `@seeExample ${exampleName} ${hashTextShort(exampleContent)}\n`;
                                }
                                return `@seeExample ${exampleName}\n`;
                            }
                        });
                    }
                }
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
                    const exampleVersion = {
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
                        let fileContent = readFileSync(exampleFilePath, 'utf-8');
                        const match = /^```(.+)\n([^]*?)```$/.exec(exampleVersion.content);
                        if (match) {
                            fileContent = `\`\`\`${match[1]}\n${fileContent.trim()}\n\`\`\``;
                        }
                        exampleVersion.content = fileContent;
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
            // eslint-disable-next-line @typescript-eslint/unbound-method
            const oldContextFactory = defaultTheme.getRenderContext;
            defaultTheme.getRenderContext = function (...args) {
                const renderContext = oldContextFactory.call(this, ...args);
                const oldCommentTagsRender = renderContext.commentTags;
                renderContext.commentTags = (props) => {
                    const jsx = oldCommentTagsRender(props);
                    const exampleTags = findJSXElement(jsx, (el): el is JSX.Element => {
                        if (typeof el === 'object' && el.props) {
                            return (el.props as { class?: string }).class?.includes(`tsd-tag-example`) ?? false;
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
        const exampleRefls = [];
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
                    text: exampleVersion.content
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
                                    text: relatedExample.content
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
                let fileContent = exampleVersion.content;
                const match = /^```(.+)\n([^]*?)```$/.exec(exampleVersion.content);
                if (match) {
                    const [, , content] = match;
                    fileContent = content;
                }
                writeFileSync(resolvePath(exampleDir, exampleVersion.fileName), unescapeMultilineComment(fileContent));
            }
        }
    }
} as Hook;
