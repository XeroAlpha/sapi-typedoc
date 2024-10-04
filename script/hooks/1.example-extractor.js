const { createHmac } = require('crypto');
const { mkdirSync, writeFileSync, existsSync, readFileSync } = require('fs');
const { resolve: resolvePath } = require('path');
const { SyntaxKind } = require('ts-morph');
const { DocumentReflection } = require('typedoc');

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

function hashTextShort(str) {
    return createHmac('sha256', str).digest('hex').slice(0, 8);
}

const examples = {};

/** @type {import('./hook').Hook} */
module.exports = {
    afterLoad({ sourceFiles }) {
        const postActions = [];
        // 提取 example
        for (const sourceFile of sourceFiles) {
            const sourceFileName = sourceFile.getFilePath();
            const sourceName = sourceFile.getBaseNameWithoutExtension();
            const comments = sourceFile.getDescendantsOfKind(SyntaxKind.JSDocTag);
            const exampleTags = comments.filter((t) => t.getTagName() === 'example');
            const pendingTextChangeAppliers = [];
            for (const exampleTag of exampleTags) {
                const jsdoc = exampleTag.getParentIfKindOrThrow(SyntaxKind.JSDoc);
                const lineOffset = exampleTag.getStartLineNumber() - jsdoc.getStartLineNumber();
                const exampleTagIdentifier = exampleTag.getTagNameNode();
                const exampleCommentStartCol = exampleTagIdentifier.getEnd() - exampleTag.getStartLinePos();
                const commentLines = jsdoc.getText().split('\n').slice(lineOffset);
                const commentFirstLine = commentLines.shift().slice(exampleCommentStartCol);
                let exampleName = commentFirstLine.trim();
                const commentLinesWithoutStars = commentLines.map((l) => l.replace(/^\s*\*(?: )?/, ''));
                const exampleParent = exampleTag.getParentWhileKind(SyntaxKind.JSDoc).getParent();
                const exampleParentSymbol = exampleParent.getSymbol();
                const sourceFileSymbol = sourceFile.getSymbol();
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
                let exampleContent = exampleTag.getCommentText().split('\n').slice(1).join('\n');
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
        tsdocApplication.options.setValue('blockTags', [
            ...tsdocApplication.options.getValue('blockTags'),
            '@seeExample'
        ]);
    },
    afterConvert({ tsdocProject }) {
        const exampleRefls = [];
        // 添加 example 页面
        for (const exampleName of Object.keys(examples).sort()) {
            const exampleVersions = examples[exampleName];
            const content = [];
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
                    text: '\n在以下成员中被引用：\n'
                });
                if (exampleVersion.sources.length > 1) {
                    exampleVersion.sources.sort((a, b) => {
                        if (a.length !== b.length) {
                            return b.length - a.length;
                        }
                        if (a.source !== b.source) {
                            return a.source.localeCompare(b.source);
                        }
                        return a.path.localeCompare(b.path);
                    });
                }
                for (const source of exampleVersion.sources) {
                    const reflSymbolId = [...tsdocProject.symbolToReflectionIdMap.keys()].find(
                        (k) => k.fileName === source.fileName && k.qualifiedName === source.path
                    );
                    const sourceRef = tsdocProject.getReflectionFromSymbolId(reflSymbolId);
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
                content.push({
                    kind: 'text',
                    text: '\n\n'
                });
            }
            const docRef = new DocumentReflection(exampleName, tsdocProject, content, { title: exampleName });
            tsdocProject.registerReflection(docRef);
            exampleRefls.push([exampleName, docRef, exampleVersions]);
        }
        const exampleParentRef = new DocumentReflection('示例', tsdocProject, [], { title: '示例' });
        for (const exampleRefl of exampleRefls) {
            exampleParentRef.addChild(exampleRefl[1]);
        }
        tsdocProject.registerReflection(exampleParentRef);
        tsdocProject.addChild(exampleParentRef);

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
                            const replacement = [
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
                writeFileSync(resolvePath(exampleDir, exampleVersion.fileName), fileContent);
            }
        }
    }
};
