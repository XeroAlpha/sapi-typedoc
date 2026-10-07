import { execSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { relative as relativePath, resolve as resolvePath } from 'node:path';
import { Project, type SourceFile } from 'ts-morph';
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
    distPath,
    findModuleOrThrow,
    getCommonStringFromStart,
    installLanguages,
    originalPath,
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
const botModules = ['@minecraft/vanilla-data'];
const tsConfigFilePath = resolvePath(translatedPath, 'tsconfig.json');

function getModuleReferencedFiles(fromPath: string, moduleSpecifier: string) {
    const project = new Project();
    const sourceFile = project.createSourceFile(resolvePath(fromPath, '__temp_module_resolution__.ts'));
    const rootDecl = sourceFile.addExportDeclaration({ moduleSpecifier });
    const referencedFiles: string[] = [];
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

export function loadOriginalProject() {
    const project = new Project({
        tsConfigFilePath,
        skipAddingFilesFromTsConfig: true
    });
    const sourceFiles: SourceFile[] = [];
    const dependencies = readPackageInfo(originalPath)?.dependencies ?? {};
    for (const [moduleName, versionSpec] of Object.entries(dependencies)) {
        const pureModuleName = moduleName.startsWith(namespacePrefix)
            ? moduleName.slice(namespacePrefix.length)
            : moduleName;
        const indexSourcePath = resolvePath(translatedPath, `${pureModuleName}.d.ts`);
        const addResult = addOriginalModule(project, moduleName, indexSourcePath);
        if (!botModules.includes(moduleName)) {
            sourceFiles.push(...addResult.sourceFiles);
        }
        dependencies[moduleName] = addResult.version;
        const moduleSpec = `${moduleName}@${addResult.version ?? versionSpec}`;
        console.log(`Loaded ${addResult.sourceFiles.length} d.ts file(s) for ${moduleSpec}`);
    }
    return { project, sourceFiles, dependencies };
}

export async function build(translated?: boolean) {
    const hookContext = { basePath, originalPath, translatingPath, translatedPath, distPath };

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
    await runHooks('beforeLoad', hookContext);
    const { project, sourceFiles, dependencies } = loadOriginalProject();
    const translateHookContext = { ...hookContext, basePath, project, sourceFiles, dependencies };
    await runHooks('afterLoad', translateHookContext);
    console.timeEnd('[loadOriginal] Total');

    if (translated) {
        // 将顶层成员替换为带翻译的版本
        console.time('[translate] Total');
        patchSourceFiles(sourceFiles);
        await runHooks('afterTranslate', translateHookContext);
        console.timeEnd('[translate] Total');
    }

    // 生成 TypeDoc 页面
    console.time('[analyze] Total');
    project.saveSync();
    const tsdocApplication = await TypeDocApplication.bootstrapWithPlugins(
        {
            tsconfig: tsConfigFilePath,
            ...TypeDocExtraOptions
        },
        [new TSConfigReader()]
    );
    installLanguages(tsdocApplication, TypeDocExtraTranslations);
    rmSync(distPath, { recursive: true, force: true });
    const beforeConvertContext = { ...translateHookContext, tsdocApplication };
    await runHooks('beforeConvert', beforeConvertContext);
    const tsdocProject = await tsdocApplication.convert();
    console.timeEnd('[analyze] Total');
    if (tsdocProject) {
        console.time('[emit] Total');
        const afterConvertContext = { ...beforeConvertContext, tsdocProject };
        await runHooks('afterConvert', afterConvertContext);
        await tsdocApplication.generateDocs(tsdocProject, distPath);
        await tsdocApplication.generateJson(tsdocProject, resolvePath(distPath, 'index.json'));
        await runHooks('afterEmit', afterConvertContext);
        console.timeEnd('[emit] Total');
        return afterConvertContext;
    }
    throw new Error('Convert failed');
}
