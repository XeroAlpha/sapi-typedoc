const TypeDoc = require("typedoc");
const { Project, SyntaxKind } = require("ts-morph");
const { resolve: resolvePath, relative: relativePath } = require("path");
const { existsSync, readFileSync, writeFileSync } = require("fs");
const { split } = require("./split");

const basePath = resolvePath(__dirname, "..");
const translatedPath = resolvePath(basePath, "translated");
const distPath = resolvePath(basePath, "dist");

async function build() {
    const tsConfigFilePath = resolvePath(translatedPath, "tsconfig.json");
    const project = new Project({ tsConfigFilePath });
    project.getSourceFiles().forEach((sourceFile) => {
        const pieces = split(sourceFile);
        let sourceFileText = sourceFile.getFullText();
        let writtenCount = 0;
        pieces.sort((a, b) => b.start - a.start);
        pieces.forEach((piece) => {
            if (!existsSync(piece.path)) return;
            const text = readFileSync(piece.path, "utf-8");
            sourceFileText = `${sourceFileText.slice(0, piece.start)}${text}${sourceFileText.slice(piece.end)}`;
            writtenCount++;
        });
        if (writtenCount > 0) {
            writeFileSync(sourceFile.getFilePath(), sourceFileText);
        }
    });

    const app = await TypeDoc.Application.bootstrapWithPlugins({
        tsconfig: tsConfigFilePath,
        githubPages: false
    }, [new TypeDoc.TSConfigReader()]);
    const tsdocProject = await app.convert();
    if (tsdocProject) {
        const reflectionEntries = Object.entries(tsdocProject.reflections);
        const visitCommentPart = (/** @type {TypeDoc.CommentDisplayPart} */part) => {
            if (part.kind === 'inline-tag' && part.tag === '@link') {
                if (typeof part.target === 'string') {
                    return;
                }
                if (typeof part.target === 'object' && part.target.name === part.text) {
                    return;
                }
                const lastSegment = part.text.split(/[\./]/).pop();
                const foundReflections = reflectionEntries.filter(([_, refl]) => refl.name === lastSegment);
                if (foundReflections.length === 0) {
                    return;
                }
                if (foundReflections.length >= 2) {
                    console.warn(`Multiple resolutions of link: ${part.text}`);
                }
                part.target = foundReflections[0][1];
            }
        }
        reflectionEntries.forEach(([id, reflection]) => {
            if (reflection.sources) {
                reflection.sources.forEach((source) => {
                    source.fileName = source.fileName.replace("translated", tsdocProject.name);
                });
            }
            if (reflection.comment) {
                reflection.comment.summary.forEach(visitCommentPart);
                reflection.comment.blockTags.forEach((tag) => {
                    tag.content.forEach(visitCommentPart);
                });
            }
        });
        await app.generateDocs(tsdocProject, distPath);
        await app.generateJson(tsdocProject, resolvePath(distPath, 'index.json'));
    } else {
        throw new Error("Convert failed");
    }
    return tsdocProject;
}

module.exports = {
    build
};

if (require.main === module) {
    build().catch((err) => {
        console.error(err);
    });
}