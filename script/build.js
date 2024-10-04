const TypeDoc = require('typedoc');
const { Project } = require('ts-morph');
const { createRequire } = require('module');
const { resolve: resolvePath, relative: relativePath } = require('path');
const { existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync, rmSync } = require('fs');
const { split, replacePieces } = require('./split.js');
const { execSync } = require('child_process');
const { loadHooks } = require('./hooks.js');
const { basePath, originalPath, translatingPath, translatedPath, distPath } = require('./utils.js');

const namespacePrefix = '@minecraft/';
const botModules = ['@minecraft/vanilla-data'];
const skipResolutionModules = [];

function readPackageInfo(modulePath) {
    const packageInfoPath = resolvePath(modulePath, 'package.json');
    if (existsSync(packageInfoPath)) {
        try {
            return JSON.parse(readFileSync(packageInfoPath, 'utf-8'));
        } catch (e) {
            /* ignore */
        }
    }
}

function findModule(moduleName, root) {
    const localRequire = createRequire(resolvePath(root, 'node_modules'));
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

function getModuleSourceFiles(fromPath, moduleSpecifier) {
    const project = new Project();
    const sourceFile = project.createSourceFile(resolvePath(fromPath, '__temp_module_resolution__.ts'));
    const rootDecl = sourceFile.addExportDeclaration({ moduleSpecifier });
    const referencedFiles = [];
    const walk = (/** @type {import('ts-morph').SourceFile | undefined} */ source) => {
        if (!source) return;
        const path = source.getFilePath();
        if (referencedFiles.includes(path)) return;
        referencedFiles.push(path);
        const importDecl = source.getImportDeclarations();
        const exportDecl = source.getExportDeclarations();
        importDecl.forEach((decl) => walk(decl.getModuleSpecifierSourceFile()));
        exportDecl.forEach((decl) => walk(decl.getModuleSpecifierSourceFile()));
    };
    walk(rootDecl.getModuleSpecifierSourceFile());
    return referencedFiles.map((e) => resolvePath(e));
}

function getCommonStringFromStart(a, b) {
    let len = Math.min(a.length, b.length);
    while (len > 0) {
        if (a.slice(0, len) === b.slice(0, len)) {
            return a.slice(0, len);
        }
        len -= 1;
    }
    return '';
}

async function build(translated) {
    const runHooks = loadHooks();
    const hookEventContext = { basePath, originalPath, translatingPath, translatedPath, distPath };

    // 尝试加载翻译文件对应版本的 package.json
    console.time('[restoreDependencies] Total');
    const originalPackageJsonPath = resolvePath(originalPath, 'package.json');
    const cachedPackageJsonPath = resolvePath(translatedPath, 'package.json');
    const originalPackageJsonData = readFileSync(originalPackageJsonPath);
    if (existsSync(cachedPackageJsonPath)) {
        writeFileSync(originalPackageJsonPath, readFileSync(cachedPackageJsonPath));
    }

    // 使依赖与 package.json 同步
    try {
        execSync('npm install', {
            cwd: originalPath,
            stdio: 'inherit'
        });
    } finally {
        writeFileSync(originalPackageJsonPath, originalPackageJsonData);
    }
    console.timeEnd('[restoreDependencies] Total');

    // 从依赖中构建用于生成文档的项目
    console.time('[loadOriginal] Total');
    await runHooks('beforeLoad', hookEventContext);
    const tsConfigFilePath = resolvePath(translatedPath, 'tsconfig.json');
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
            let dtsFiles = [];
            walkFiles(modulePath, (dir, file, path) => {
                if (file && file.endsWith('.d.ts')) {
                    const relPath = relativePath(modulePath, path);
                    if (!relPath.includes('node_modules')) {
                        dtsFiles.push(path);
                    }
                }
            });
            if (!skipResolutionModules.includes(moduleName)) {
                const moduleSourceFiles = getModuleSourceFiles(originalPath, moduleName);
                dtsFiles = dtsFiles.filter((e) => moduleSourceFiles.includes(e));
            }
            if (dtsFiles.length < 1) {
                throw new Error(`Cannot find any d.ts for ${moduleName}`);
            }
            if (dtsFiles.length === 1) {
                const sourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    readFileSync(dtsFiles[0], 'utf-8').replace(/\r\n|\r/g, '\n'),
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) sourceFiles.push(sourceFile);
            } else {
                const typeEntry = resolvePath(modulePath, packageInfo.types).replace(/\.d\.ts$/i, '');
                const commonParent = dtsFiles
                    .map((path) => resolvePath(path, '..'))
                    .reduce((common, parent) => getCommonStringFromStart(common, parent));
                const moduleRoot = resolvePath(translatedPath, pureModuleName);
                const moduleEntry = resolvePath(moduleRoot, relativePath(commonParent, typeEntry));
                const moduleEntryRelative = `./${relativePath(translatedPath, moduleEntry).replace(/\\/g, '/')}`;
                const exportStatement = `export * from ${JSON.stringify(moduleEntryRelative)};`;
                dtsFiles.forEach((file) => {
                    const target = resolvePath(moduleRoot, relativePath(commonParent, file));
                    mkdirSync(resolvePath(target, '..'), { recursive: true });
                    const sourceFile = project.createSourceFile(
                        target,
                        readFileSync(file, 'utf-8').replace(/\r\n|\r/g, '\n'),
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
    Object.assign(hookEventContext, { basePath, project, sourceFiles, dependencies });
    await runHooks('afterLoad', hookEventContext);
    console.timeEnd('[loadOriginal] Total');

    if (translated) {
        // 将顶层成员替换为带翻译的版本
        console.time('[translate] Total');
        sourceFiles.forEach((sourceFile) => {
            const pieces = split(sourceFile);
            replacePieces(sourceFile, pieces);
        });
        await runHooks('afterTranslate', hookEventContext);
        console.timeEnd('[translate] Total');
    }

    // 生成 TypeDoc 页面
    console.time('[analyze] Total');
    project.saveSync();
    const tsdocApplication = await TypeDoc.Application.bootstrapWithPlugins(
        {
            tsconfig: tsConfigFilePath,
            githubPages: false,
            modifierTags: [...TypeDoc.OptionDefaults.modifierTags, '@rc'],
            lang: 'zh'
        },
        [new TypeDoc.TSConfigReader()]
    );
    rmSync(distPath, { recursive: true, force: true });
    Object.assign(hookEventContext, { tsdocApplication });
    await runHooks('beforeConvert', hookEventContext);
    const tsdocProject = await tsdocApplication.convert();
    console.timeEnd('[analyze] Total');
    if (tsdocProject) {
        console.time('[emit] Total');
        Object.assign(hookEventContext, { tsdocProject });
        await runHooks('afterConvert', hookEventContext);
        await tsdocApplication.generateDocs(tsdocProject, distPath);
        await tsdocApplication.generateJson(tsdocProject, resolvePath(distPath, 'index.json'));
        await runHooks('afterEmit', hookEventContext);
        console.timeEnd('[emit] Total');
    } else {
        throw new Error('Convert failed');
    }
    return hookEventContext;
}

module.exports = {
    build
};

if (require.main === module) {
    build(true)
        .then(() => {
            process.exit(0);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}
