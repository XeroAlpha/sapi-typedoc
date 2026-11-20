import { execSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { relative as relativePath, resolve as resolvePath } from 'node:path';
import { Project, type SourceFile, type StandardizedFilePath } from 'ts-morph';
import {
    TSConfigReader,
    Application as TypeDocApplication,
    OptionDefaults as TypeDocOptionDefaults,
    type TypeDocOptions
} from 'typedoc';
import { runHooks } from './hooks.js';
import { patchSourceFiles } from './split.js';
import {
    basePath,
    compareGameVersion,
    distPath,
    findModuleOrThrow,
    formatGameVersion,
    type GameVersion,
    getCommonStringFromStart,
    installLanguages,
    originalPath,
    parseDataVersion,
    parsePackageVersion,
    readPackageInfo,
    readPackageInfoOrThrow,
    readTextFileSync,
    type TypeDocLanguages,
    translatedPath,
    translatingPath,
    walkFiles
} from './utils.js';

declare module 'typedoc' {
    interface TranslatableStrings {
        tag_rc: [];
    }
}

const TypeDocExtraTranslations: TypeDocLanguages = {
    zh: {
        tag_rc: '预览版',
        tag_beta: '实验性'
    },
    en: {
        tag_rc: 'Preview',
        tag_beta: 'Beta'
    }
};

const TypeDocExtraOptions: TypeDocOptions = {
    modifierTags: [...TypeDocOptionDefaults.modifierTags, '@rc']
};

const namespacePrefix = '@minecraft/';
const dataModuleId = '@minecraft/vanilla-data';
const tsConfigFilePath = resolvePath(translatedPath, 'tsconfig.json');

function getModuleReferencedFiles(fromPath: string, moduleSpecifier: string) {
    const project = new Project();
    const sourceFile = project.createSourceFile(resolvePath(fromPath, '__temp_module_resolution__.ts'));
    const rootDecl = sourceFile.addExportDeclaration({ moduleSpecifier });
    const referencedFiles: StandardizedFilePath[] = [];
    const walk = (source: SourceFile | undefined) => {
        if (!source) {
            return;
        }
        const path = source.getFilePath();
        if (referencedFiles.includes(path)) {
            return;
        }
        referencedFiles.push(path);
        const importDecl = source.getImportDeclarations();
        const exportDecl = source.getExportDeclarations();
        for (const decl of importDecl) {
            walk(decl.getModuleSpecifierSourceFile());
        }
        for (const decl of exportDecl) {
            walk(decl.getModuleSpecifierSourceFile());
        }
    };
    walk(rootDecl.getModuleSpecifierSourceFile());
    // 从标准化路径（`C:/Windows/`）转换为本地路径
    return referencedFiles.map((e) => resolvePath(e));
}

const dtsRegex = /\.d\.ts$/i;

function addOriginalModule(project: Project, moduleName: string, indexSourcePath: string) {
    const createSourceFile = (filePath: string, sourceFileContent: string) => {
        if (project.getSourceFile(filePath)) {
            throw new Error(`Cannot emit source file more than once: ${filePath}`);
        }
        return project.createSourceFile(filePath, sourceFileContent, { overwrite: true });
    };
    const modulePath = findModuleOrThrow(moduleName, originalPath);
    const { version, types } = readPackageInfoOrThrow(modulePath);
    let dtsFiles: string[] = [];
    walkFiles(modulePath, (_, file, path) => {
        if (file?.endsWith('.d.ts')) {
            const relPath = relativePath(modulePath, path);
            if (!relPath.includes('node_modules')) {
                dtsFiles.push(path);
            }
        }
    });
    const moduleSourceFiles = getModuleReferencedFiles(originalPath, moduleName);
    dtsFiles = dtsFiles.filter((e) => moduleSourceFiles.includes(e));
    const sourceFiles: SourceFile[] = [];
    if (dtsFiles.length === 0) {
        throw new Error(`Cannot find any d.ts for ${moduleName}`);
    }
    if (dtsFiles.length === 1) {
        const sourceFile = createSourceFile(indexSourcePath, readTextFileSync(dtsFiles[0]));
        sourceFiles.push(sourceFile);
    } else {
        const typeEntry = resolvePath(modulePath, types ?? 'index.d.ts').replace(dtsRegex, '');
        const commonParent = dtsFiles
            .map((path) => resolvePath(path, '..'))
            .reduce((common, parent) => getCommonStringFromStart(common, parent));
        const moduleRoot = indexSourcePath.replace(dtsRegex, '');
        const moduleEntry = resolvePath(moduleRoot, relativePath(commonParent, typeEntry));
        const moduleEntryRelative = `./${relativePath(translatedPath, moduleEntry).replace(/\\/g, '/')}`;
        const exportStatement = `export * from ${JSON.stringify(moduleEntryRelative)};`;
        for (const file of dtsFiles) {
            const target = resolvePath(moduleRoot, relativePath(commonParent, file));
            const sourceFile = createSourceFile(target, readTextFileSync(file));
            sourceFiles.push(sourceFile);
        }
        const indexSourceFile = createSourceFile(indexSourcePath, exportStatement);
        sourceFiles.unshift(indexSourceFile);
    }
    return { version, sourceFiles };
}

export function syncDependencies() {
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
}

export function loadOriginalProject() {
    const project = new Project({
        tsConfigFilePath,
        skipAddingFilesFromTsConfig: true
    });
    const projectSourceFiles: SourceFile[] = [];
    const dependencies = readPackageInfo(originalPath)?.dependencies ?? {};
    let projectGameVersion: GameVersion | undefined;
    for (const [moduleName, versionSpec] of Object.entries(dependencies)) {
        const pureModuleName = moduleName.startsWith(namespacePrefix)
            ? moduleName.slice(namespacePrefix.length)
            : moduleName;
        const indexSourcePath = resolvePath(translatedPath, `${pureModuleName}.d.ts`);
        const { version, sourceFiles } = addOriginalModule(project, moduleName, indexSourcePath);
        const isDataModule = moduleName === dataModuleId;
        if (!isDataModule) {
            projectSourceFiles.push(...sourceFiles);
        }
        const moduleSpec = `${moduleName}@${version ?? versionSpec}`;
        console.log(`Loaded ${sourceFiles.length} d.ts file(s) for ${moduleSpec}`);
        if (version) {
            dependencies[moduleName] = version;
            const gameVersion = isDataModule ? parseDataVersion(version) : parsePackageVersion(version)?.game;
            if (gameVersion) {
                projectGameVersion ??= gameVersion;
                const compareResult = compareGameVersion(gameVersion, projectGameVersion);
                if (compareResult !== 0) {
                    console.warn(
                        `Mismatched version for ${moduleSpec}: expected ${formatGameVersion(projectGameVersion)}, got ${formatGameVersion(gameVersion)}`
                    );
                    if (compareResult > 0) {
                        projectGameVersion = gameVersion;
                    }
                }
            }
        } else {
            console.warn(`Cannot find version in package.json of ${moduleSpec}`);
        }
    }
    if (!projectGameVersion) {
        throw new Error('Unknown game version');
    }
    return { project, sourceFiles: projectSourceFiles, dependencies, gameVersion: projectGameVersion };
}

export const Tasks = {
    /**
     * 尝试加载翻译文件对应版本的 package.json
     */
    syncDependencies() {
        const ctx = { basePath, originalPath, translatingPath, translatedPath, distPath };
        console.time('[syncDependencies] Total');
        syncDependencies();
        console.timeEnd('[syncDependencies] Total');
        return ctx;
    },

    /**
     * 从依赖中构建用于生成文档的项目
     */
    async load() {
        const ctx = this.syncDependencies();
        console.time('[load] Total');
        await runHooks('beforeLoad', ctx);
        const { project, sourceFiles, dependencies, gameVersion } = loadOriginalProject();
        const translateHookContext = { ...ctx, basePath, project, sourceFiles, dependencies, gameVersion };
        await runHooks('afterLoad', translateHookContext);
        console.timeEnd('[load] Total');
        return translateHookContext;
    },

    /**
     * 将顶层成员替换为带翻译的版本
     */
    async translate() {
        const ctx = await this.load();
        const { sourceFiles } = ctx;
        console.time('[translate] Total');
        patchSourceFiles(sourceFiles);
        await runHooks('afterTranslate', ctx);
        console.timeEnd('[translate] Total');
        return ctx;
    },

    async assemble(translated?: boolean) {
        const ctx = translated ? await this.translate() : await this.load();
        const { project } = ctx;
        project.saveSync();
        await runHooks('afterAssemble', ctx);
        return ctx;
    },

    /**
     * 分析项目并构建 TypeDoc 树
     */
    async convert(translated?: boolean) {
        const ctx = await this.assemble(translated);
        console.time('[convert] Total');
        const tsdocApplication = await TypeDocApplication.bootstrapWithPlugins(
            {
                tsconfig: tsConfigFilePath,
                ...TypeDocExtraOptions
            },
            [new TSConfigReader()]
        );
        installLanguages(tsdocApplication, TypeDocExtraTranslations);
        rmSync(distPath, { recursive: true, force: true });
        const beforeConvertContext = { ...ctx, tsdocApplication };
        await runHooks('beforeConvert', beforeConvertContext);
        const tsdocProject = await tsdocApplication.convert();
        if (!tsdocProject) {
            console.timeEnd('[convert] Total');
            throw new Error('Convert failed');
        }
        const afterConvertContext = { ...beforeConvertContext, tsdocProject };
        await runHooks('afterConvert', afterConvertContext);
        console.timeEnd('[convert] Total');
        return afterConvertContext;
    },

    /**
     * 生成 TypeDoc 页面
     */
    async emit(translated?: boolean) {
        const ctx = await this.convert(translated);
        const { tsdocApplication, tsdocProject } = ctx;
        console.time('[emit] Total');
        await tsdocApplication.generateDocs(tsdocProject, distPath);
        await tsdocApplication.generateJson(tsdocProject, resolvePath(distPath, 'index.json'));
        await runHooks('afterEmit', ctx);
        console.timeEnd('[emit] Total');
        return ctx;
    }
} as const;

export async function build(translated?: boolean) {
    return Tasks.emit(translated);
}
