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
        Object.entries(project.reflections).forEach(([id, reflection]) => {
            if (reflection.sources) {
                reflection.sources.forEach((source) => {
                    source.fileName = source.fileName.replace("translated", project.name);
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