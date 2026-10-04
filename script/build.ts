import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { relative as relativePath, resolve as resolvePath } from 'node:path';
import { Project, type SourceFile } from 'ts-morph';
import { TSConfigReader, Application as TypeDocApplication, OptionDefaults as TypeDocOptionDefaults } from 'typedoc';
import runHooks from './hooks.js';
import { replacePieces, split } from './split.js';
import {
    basePath,
    distPath,
    findModuleOrThrow,
    getCommonStringFromStart,
    installLanguages,
    originalPath,
    readPackageInfo,
    readPackageInfoOrThrow,
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

const namespacePrefix = '@minecraft/';
const botModules = ['@minecraft/vanilla-data'];
const skipResolutionModules: string[] = [];

function getModuleSourceFiles(fromPath: string, moduleSpecifier: string) {
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
    const tsConfigFilePath = resolvePath(translatedPath, 'tsconfig.json');
    const project = new Project({
        tsConfigFilePath,
        skipAddingFilesFromTsConfig: true
    });
    const sourceFiles: SourceFile[] = [];
    const dependencies = readPackageInfo(originalPath)?.dependencies ?? {};
    for (const moduleName of Object.keys(dependencies)) {
        if (moduleName.startsWith(namespacePrefix)) {
            const pureModuleName = moduleName.slice(namespacePrefix.length);
            const modulePath = findModuleOrThrow(moduleName, originalPath);
            const { version, types } = readPackageInfoOrThrow(modulePath);
            console.log(`Loading d.ts for ${moduleName}@${version ?? 'undefined'}`);
            let dtsFiles: string[] = [];
            walkFiles(modulePath, (_, file, path) => {
                if (file?.endsWith('.d.ts')) {
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
            if (dtsFiles.length === 0) {
                throw new Error(`Cannot find any d.ts for ${moduleName}`);
            }
            if (dtsFiles.length === 1) {
                const sourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    readFileSync(dtsFiles[0], 'utf-8').replace(/\r\n|\r/g, '\n'),
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) {
                    sourceFiles.push(sourceFile);
                }
            } else {
                const typeEntry = resolvePath(modulePath, types ?? 'index.d.ts').replace(dtsRegex, '');
                const commonParent = dtsFiles
                    .map((path) => resolvePath(path, '..'))
                    .reduce((common, parent) => getCommonStringFromStart(common, parent));
                const moduleRoot = resolvePath(translatedPath, pureModuleName);
                const moduleEntry = resolvePath(moduleRoot, relativePath(commonParent, typeEntry));
                const moduleEntryRelative = `./${relativePath(translatedPath, moduleEntry).replace(/\\/g, '/')}`;
                const exportStatement = `export * from ${JSON.stringify(moduleEntryRelative)};`;
                for (const file of dtsFiles) {
                    const target = resolvePath(moduleRoot, relativePath(commonParent, file));
                    mkdirSync(resolvePath(target, '..'), { recursive: true });
                    const sourceFile = project.createSourceFile(
                        target,
                        readFileSync(file, 'utf-8').replace(/\r\n|\r/g, '\n'),
                        { overwrite: true }
                    );
                    if (!botModules.includes(moduleName)) {
                        sourceFiles.push(sourceFile);
                    }
                }
                const indexSourceFile = project.createSourceFile(
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`),
                    exportStatement,
                    { overwrite: true }
                );
                if (!botModules.includes(moduleName)) {
                    sourceFiles.push(indexSourceFile);
                }
            }
            dependencies[moduleName] = version;
        }
    }
    const translateHookContext = { ...hookContext, basePath, project, sourceFiles, dependencies };
    await runHooks('afterLoad', translateHookContext);
    console.timeEnd('[loadOriginal] Total');

    if (translated) {
        // 将顶层成员替换为带翻译的版本
        console.time('[translate] Total');
        for (const sourceFile of sourceFiles) {
            const pieces = split(sourceFile);
            replacePieces(sourceFile, pieces);
        }
        await runHooks('afterTranslate', translateHookContext);
        console.timeEnd('[translate] Total');
    }

    // 生成 TypeDoc 页面
    console.time('[analyze] Total');
    project.saveSync();
    const tsdocApplication = await TypeDocApplication.bootstrapWithPlugins(
        {
            tsconfig: tsConfigFilePath,
            modifierTags: [...TypeDocOptionDefaults.modifierTags, '@rc']
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
