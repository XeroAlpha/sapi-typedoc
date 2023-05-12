const TypeDoc = require("typedoc");
const { resolve: resolvePath } = require("path");

const basePath = resolvePath(__dirname, "..");
const translatedPath = resolvePath(basePath, "translated");
const distPath = resolvePath(basePath, "dist");

async function build() {
    const app = new TypeDoc.Application();
    app.options.addReader(new TypeDoc.TSConfigReader());
    app.bootstrap({
        tsconfig: resolvePath(translatedPath, "tsconfig.json"),
        githubPages: false,
        logLevel: "Verbose"
    });
    const project = app.convert();
    if (project) {
        const reflectionEntries = Object.entries(project.reflections);
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
                    source.fileName = source.fileName.replace("translated", project.name);
                });
            }
            if (reflection.comment) {
                reflection.comment.summary.forEach(visitCommentPart);
                reflection.comment.blockTags.forEach((tag) => {
                    tag.content.forEach(visitCommentPart);
                });
            }
        });
        await app.generateDocs(project, distPath);
    } else {
        throw new Error("Convert failed");
    }
    return project;
}

module.exports = {
    build
};

if (require.main === module) {
    build().catch((err) => {
        console.error(err);
    });
}