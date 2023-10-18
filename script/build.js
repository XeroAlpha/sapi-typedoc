const TypeDoc = require("typedoc");
const { Project } = require("ts-morph");
const { createRequire } = require("module");
const { resolve: resolvePath, relative: relativePath } = require("path");
const { existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync } = require("fs");
const { split } = require("./split");
const { execSync } = require("child_process");

const basePath = resolvePath(__dirname, "..");
const originalPath = resolvePath(basePath, "original");
const translatedPath = resolvePath(basePath, "translated");
const distPath = resolvePath(basePath, "dist");
const hookPath = resolvePath(__dirname, "hooks");

const namespacePrefix = "@minecraft/";
const botModules = [
    "@minecraft/vanilla-data"
];

function readPackageInfo(modulePath) {
    const packageInfoPath = resolvePath(modulePath, "package.json");
    if (existsSync(packageInfoPath)) {
        try {
            return JSON.parse(readFileSync(packageInfoPath, "utf-8"));
        } catch(e) { /* ignore */ }
    }
}

function findModule(moduleName, root) {
    const localRequire = createRequire(resolvePath(root, "node_modules"));
    const searchPaths = localRequire.resolve.paths(moduleName);
    for (const searchPath of searchPaths) {
        const modulePath = resolvePath(searchPath, moduleName);
        const moduleDesc = readPackageInfo(modulePath);
        if (moduleDesc && moduleDesc.name === moduleName) {
            return modulePath;
        }
    }
}

function walkFiles(directory, walker) {
    const files = readdirSync(directory, { withFileTypes: true });
    walker(directory, null, directory);
    files.forEach((file) => {
        if (file.isDirectory()) {
            walkFiles(resolvePath(directory, file.name), walker);
        } else {
            walker(directory, file.name, resolvePath(directory, file.name));
        }
    });
}

function getCommonStringFromStart(a, b) {
    let len = Math.min(a.length, b.length);
    while (len > 0) {
        if (a.slice(0, len) === b.slice(0, len)) {
            return a.slice(0, len);
        }
    }
    return "";
}

async function build(translated) {
    // 加载钩子
    mkdirSync(hookPath, { recursive: true });
    const hookScripts = readdirSync(hookPath)
        .filter((name) => /\.(cjs|js)$/i.test(name))
        .sort()
        .map((name) => resolvePath(hookPath, name));
    const scriptRequire = createRequire(hookPath);
    const scriptHooks = hookScripts.map((scriptPath) => scriptRequire(scriptPath));
    const runHooks = (event, arg) => {
        scriptHooks.forEach((scriptHook) => {
            if (typeof scriptHook === "function") {
                scriptHook(event, arg);
            } else {
                const hook = scriptHook[event];
                if (hook) hook(arg);
            }
        });
    }

    // 尝试加载翻译文件对应版本的 package.json
    const originalPackageJsonPath = resolvePath(originalPath, "package.json");
    const cachedPackageJsonPath = resolvePath(translatedPath, "package.json");
    const originalPackageJsonData = readFileSync(originalPackageJsonPath);
    if (existsSync(cachedPackageJsonPath)) {
        writeFileSync(originalPackageJsonPath, readFileSync(cachedPackageJsonPath));
    }

    // 使依赖与 package.json 同步
    execSync("npm install", {
        cwd: originalPath,
        stdio: "inherit"
    });

    // 从依赖中构建用于生成文档的项目
    runHooks("beforeLoad");
    const tsConfigFilePath = resolvePath(translatedPath, "tsconfig.json");
    const project = new Project({
        tsConfigFilePath,
        skipAddingFilesFromTsConfig: true
    });
    /** @type {import("ts-morph").SourceFile[]} */
    const sourceFiles = [];
    const dependencies = readPackageInfo(originalPath).dependencies;
    Object.keys(dependencies).forEach((moduleName) => {
        if (moduleName.startsWith(namespacePrefix)) {
            const pureModuleName = moduleName.slice(namespacePrefix.length);
            const modulePath = findModule(moduleName, originalPath);
            const packageInfo = readPackageInfo(modulePath);
            const version = packageInfo.version;
            console.log(`Loading d.ts for ${moduleName}@${version}`);
            const dtsFiles = [];
            walkFiles(modulePath, (dir, file, path) => {
                if (file && file.endsWith(".d.ts")) {
                    const relPath = relativePath(modulePath, path);
                    if (!relPath.includes("node_modules")) {
                        dtsFiles.push(path);
                    }
                }
            });
            if (dtsFiles.length < 1) {
                throw new Error(`Cannot find any d.ts for ${moduleName}`);
            }
            if (dtsFiles.length === 1) {
                const sourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    readFileSync(dtsFiles[0], "utf-8").replace(/\r\n|\r/g, '\n'),
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) sourceFiles.push(sourceFile);
            } else {
                const typeEntry = resolvePath(modulePath, packageInfo.types).replace(/\.d\.ts$/i, "");
                const commonParent = dtsFiles.map((path) => resolvePath(path, ".."))
                    .reduce((common, parent) => getCommonStringFromStart(common, parent));
                const moduleRoot = resolvePath(translatedPath, pureModuleName);
                const moduleEntry = resolvePath(moduleRoot, relativePath(commonParent, typeEntry));
                const moduleEntryRelative = `./${relativePath(translatedPath, moduleEntry).replace(/\\/g, "/")}`;
                const exportStatement = `export * from ${JSON.stringify(moduleEntryRelative)};`;
                dtsFiles.forEach((file) => {
                    const target = resolvePath(moduleRoot, relativePath(commonParent, file));
                    mkdirSync(resolvePath(target, ".."), { recursive: true });
                    const sourceFile = project.createSourceFile(
                        target,
                        readFileSync(file, "utf-8").replace(/\r\n|\r/g, '\n'),
                        { overwrite: true }
                    );
                    if (!botModules.includes(moduleName)) sourceFiles.push(sourceFile);
                });
                const indexSourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    exportStatement,
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) sourceFiles.push(indexSourceFile);
            }
            dependencies[moduleName] = version;
        }
    });
    writeFileSync(originalPackageJsonPath, originalPackageJsonData);
    runHooks("afterLoad", { project, sourceFiles, dependencies });
    
    if (translated) {
        // 将顶层成员替换为带翻译的版本
        sourceFiles.forEach((sourceFile) => {
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
                sourceFile.replaceWithText(sourceFileText);
            }
        });
        runHooks("afterTranslate", { project, sourceFiles, dependencies });
    }
    project.saveSync();

    // 生成 TypeDoc 页面
    const tsdocApplication = await TypeDoc.Application.bootstrapWithPlugins({
        tsconfig: tsConfigFilePath,
        githubPages: false
    }, [new TypeDoc.TSConfigReader()]);
    runHooks("beforeConvert", { project, sourceFiles, dependencies, tsdocApplication });
    const tsdocProject = await tsdocApplication.convert();
    if (tsdocProject) {
        runHooks("afterConvert", { project, sourceFiles, dependencies, tsdocApplication, tsdocProject });
        await tsdocApplication.generateDocs(tsdocProject, distPath);
        await tsdocApplication.generateJson(tsdocProject, resolvePath(distPath, 'index.json'));
        runHooks("afterEmit", { project, sourceFiles, dependencies, tsdocApplication, tsdocProject });
    } else {
        throw new Error("Convert failed");
    }
    return { project, sourceFiles, dependencies, tsdocProject };
}

module.exports = {
    build
};

if (require.main === module) {
    build(true).catch((err) => {
        console.error(err);
    });
}