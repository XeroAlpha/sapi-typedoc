import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { relative as relativePath, resolve as resolvePath } from 'path';
import { Project, SourceFile } from 'ts-morph';
import type { PackageJson } from 'type-fest';
import * as TypeDoc from 'typedoc';
import runHooks from './hooks.js';
import { replacePieces, split } from './split.js';
import {
    basePath,
    distPath,
    installLanguages,
    originalPath,
    translatedPath,
    translatingPath,
    type TypeDocLanguages
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

function readPackageInfo(modulePath: string) {
    const packageInfoPath = resolvePath(modulePath, 'package.json');
    if (existsSync(packageInfoPath)) {
        try {
            return JSON.parse(readFileSync(packageInfoPath, 'utf-8')) as PackageJson;
        } catch {
            /* ignore */
        }
    }
}

function readPackageInfoOrThrow(modulePath: string) {
    const packageInfo = readPackageInfo(modulePath);
    if (!packageInfo) {
        throw new Error(`package.json not exist or cannot read: ${modulePath}`);
    }
    return packageInfo;
}

function findModuleOrThrow(moduleName: string, root: string) {
    const localRequire = createRequire(resolvePath(root, 'node_modules'));
    const searchPaths = localRequire.resolve.paths(moduleName);
    if (searchPaths) {
        for (const searchPath of searchPaths) {
            const modulePath = resolvePath(searchPath, moduleName);
            const moduleDesc = readPackageInfo(modulePath);
            if (moduleDesc && moduleDesc.name === moduleName) {
                return modulePath;
            }
        }
    }
    throw new Error(`Cannot find module ${moduleName} in ${root}`);
}

function walkFiles(directory: string, walker: (directory: string, fileName: string | null, path: string) => void) {
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

function getModuleSourceFiles(fromPath: string, moduleSpecifier: string) {
    const project = new Project();
    const sourceFile = project.createSourceFile(resolvePath(fromPath, '__temp_module_resolution__.ts'));
    const rootDecl = sourceFile.addExportDeclaration({ moduleSpecifier });
    const referencedFiles: string[] = [];
    const walk = (source: SourceFile | undefined) => {
        if (!source) return;
        const path = source.getFilePath();
        if (referencedFiles.includes(path)) return;
        referencedFiles.push(path);
        const importDecl = source.getImportDeclarations();
        const exportDecl = source.getExportDeclarations();
        importDecl.forEach((decl) => {
            walk(decl.getModuleSpecifierSourceFile());
        });
        exportDecl.forEach((decl) => {
            walk(decl.getModuleSpecifierSourceFile());
        });
    };
    walk(rootDecl.getModuleSpecifierSourceFile());
    return referencedFiles.map((e) => resolvePath(e));
}

function getCommonStringFromStart(a: string, b: string) {
    let len = Math.min(a.length, b.length);
    while (len > 0) {
        if (a.slice(0, len) === b.slice(0, len)) {
            return a.slice(0, len);
        }
        len -= 1;
    }
    return '';
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
    const tsConfigFilePath = resolvePath(translatedPath, 'tsconfig.json');
    const project = new Project({
        tsConfigFilePath,
        skipAddingFilesFromTsConfig: true
    });
    const sourceFiles: SourceFile[] = [];
    const dependencies = readPackageInfo(originalPath)?.dependencies ?? {};
    Object.keys(dependencies).forEach((moduleName) => {
        if (moduleName.startsWith(namespacePrefix)) {
            const pureModuleName = moduleName.slice(namespacePrefix.length);
            const modulePath = findModuleOrThrow(moduleName, originalPath);
            const packageInfo = readPackageInfoOrThrow(modulePath);
            const version = packageInfo.version;
            console.log(`Loading d.ts for ${moduleName}@${version ?? 'undefined'}`);
            let dtsFiles: string[] = [];
            walkFiles(modulePath, (dir, file, path) => {
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
                const typeEntry = resolvePath(modulePath, packageInfo.types ?? 'index.d.ts').replace(/\.d\.ts$/i, '');
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
    const translateHookContext = { ...hookContext, basePath, project, sourceFiles, dependencies };
    await runHooks('afterLoad', translateHookContext);
    console.timeEnd('[loadOriginal] Total');

    if (translated) {
        // 将顶层成员替换为带翻译的版本
        console.time('[translate] Total');
        sourceFiles.forEach((sourceFile) => {
            const pieces = split(sourceFile);
            replacePieces(sourceFile, pieces);
        });
        await runHooks('afterTranslate', translateHookContext);
        console.timeEnd('[translate] Total');
    }

    // 生成 TypeDoc 页面
    console.time('[analyze] Total');
    project.saveSync();
    const tsdocApplication = await TypeDoc.Application.bootstrapWithPlugins(
        {
            tsconfig: tsConfigFilePath,
            modifierTags: [...TypeDoc.OptionDefaults.modifierTags, '@rc']
        },
        [new TypeDoc.TSConfigReader()]
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
    } else {
        throw new Error('Convert failed');
    }
}
