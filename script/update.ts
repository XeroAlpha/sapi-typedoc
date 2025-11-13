import { execSync } from 'child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import type { PackageJson } from 'type-fest';
import { build } from './build.js';
import runHooks from './hooks.js';
import { split, writePiece } from './split.js';
import {
    basePath,
    comparePackageVersion,
    originalPath,
    parsePackageVersion,
    translatedPath,
    translatingPath,
    type PackageVersion
} from './utils.js';

const excludedPackages = ['@minecraft/dummy-package', '@minecraft/core-build-tasks', '@minecraft/creator-tools'];

export async function update(keepCachedPackageJson?: boolean) {
    // 强制检出 original 分支
    const head = execSync('git rev-parse --abbrev-ref HEAD', {
        cwd: basePath
    })
        .toString('utf-8')
        .trim();
    if (head !== 'original' && head !== 'HEAD') {
        execSync('git checkout original', {
            cwd: basePath,
            stdio: 'inherit'
        });
    }

    // 保证 npm 可以识别 overrides 属性
    const npmVersion = execSync('npm -v', { encoding: 'utf-8' });
    const majorNpmVersion = parseInt(npmVersion);
    if (majorNpmVersion < 8) {
        throw new Error(`NPM version should be >= 8, currently ${npmVersion}`);
    }

    // 获取 @minecraft 组织下的包
    const scopedPackages = JSON.parse(execSync('npm search --json scope:minecraft', { encoding: 'utf-8' })) as {
        name: string;
    }[];
    const onlinePackageNames = scopedPackages
        .map((packageInfo) => packageInfo.name)
        .filter((packageName) => !excludedPackages.includes(packageName));

    // 清除 node_modules 与缓存的 package.json
    const packageInfoPath = resolvePath(originalPath, 'package.json');
    const packageSnapshotPath = resolvePath(translatedPath, 'package.json');
    if (!keepCachedPackageJson && existsSync(packageSnapshotPath)) {
        rmSync(packageSnapshotPath);
    }
    const originalNodeModulesDir = resolvePath(originalPath, 'node_modules');
    if (existsSync(originalNodeModulesDir)) {
        rmSync(originalNodeModulesDir, { recursive: true, force: true });
    }
    const packageInfoData = readFileSync(packageInfoPath);
    const packageInfo = JSON.parse(packageInfoData.toString('utf-8')) as PackageJson;

    // 不使用翻译构建项目
    const buildResult = await build(false);
    const { sourceFiles, dependencies } = buildResult;

    // 检查是否所有包都在依赖中
    const missingDependencies = onlinePackageNames.filter((packageName) => !(packageName in dependencies));
    if (missingDependencies.length > 0 && missingDependencies.length <= 5) {
        throw new Error(`Missing dependencies: ${missingDependencies.join(',')}`);
    }

    if (!keepCachedPackageJson) {
        const cacheDependencyOverwrite: Record<string, string> = {};
        for (const [dependencyName, depVersion] of Object.entries(dependencies)) {
            if (!depVersion) continue;
            const requiredVersion = packageInfo.dependencies?.[dependencyName];
            const parsedVersion = parsePackageVersion(depVersion);
            if (requiredVersion === 'beta' && parsedVersion?.gamePreRelease !== 'preview') {
                // 强制所有指定 beta 标签的包使用 preview 分支
                const onlineVersionNames = JSON.parse(
                    execSync(`npm view --json ${dependencyName} versions`, { encoding: 'utf-8' })
                ) as string[];
                const onlineVersions = onlineVersionNames
                    .map((e) => [e, parsePackageVersion(e)] as const)
                    .filter((e): e is [string, PackageVersion] => e[1] !== undefined)
                    .sort((a, b) => comparePackageVersion(a[1], b[1]));
                const selected = onlineVersions[onlineVersions.length - 1];
                console.log(
                    `Package ${dependencyName} uses a stable version ${depVersion}, which will be replaced by ${selected[0]}.`
                );
                cacheDependencyOverwrite[dependencyName] = selected[0];
            }
        }
        if (Object.keys(cacheDependencyOverwrite).length > 0) {
            writeFileSync(
                packageSnapshotPath,
                JSON.stringify(
                    {
                        ...packageInfo,
                        dependencies: { ...dependencies, ...cacheDependencyOverwrite }
                    },
                    null,
                    2
                )
            );
            await update(true);
            return;
        }
    }

    // 按类切分文件
    rmSync(translatingPath, { recursive: true, force: true });
    await runHooks('beforeUpdate', buildResult);
    sourceFiles.forEach((sourceFile) => {
        const pieces = split(sourceFile);
        pieces.forEach((piece) => {
            writePiece(sourceFile, piece);
        });
    });
    await runHooks('afterUpdate', buildResult);

    // 生成 package.json 快照
    writeFileSync(packageSnapshotPath, JSON.stringify({ ...packageInfo, dependencies }, null, 2));
}
