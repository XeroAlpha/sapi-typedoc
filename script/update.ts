import { execSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import type { PackageJson } from 'type-fest';
import { build } from './build.js';
import runHooks from './hooks.js';
import { split, writePiece } from './split.js';
import {
    comparePackageVersion,
    git,
    originalPath,
    type PackageVersion,
    parsePackageVersion,
    translatedPath,
    translatingPath
} from './utils.js';

const MininumSupportNpmVersion = 8;
const ExcludedPackages = ['@minecraft/dummy-package', '@minecraft/core-build-tasks', '@minecraft/creator-tools'];
const FewMissingDependenciesThreshold = 5;

export async function update(keepCachedPackageJson?: boolean) {
    // 强制检出 original 分支
    const head = git('rev-parse --abbrev-ref HEAD');
    if (head !== 'original' && head !== 'HEAD') {
        git('checkout original', { stdio: 'inherit' });
    }

    // 保证 npm 可以识别 overrides 属性
    const npmVersion = execSync('npm -v', { encoding: 'utf-8' });
    const majorNpmVersion = Number.parseInt(npmVersion, 10);
    if (majorNpmVersion < MininumSupportNpmVersion) {
        throw new Error(`NPM version should be >= 8, currently ${npmVersion}`);
    }

    // 获取 @minecraft 组织下的包
    const scopedPackages = JSON.parse(execSync('npm search --json scope:minecraft', { encoding: 'utf-8' })) as {
        name: string;
    }[];
    const onlinePackageNames = scopedPackages
        .map(({ name }) => name)
        .filter((packageName) => !ExcludedPackages.includes(packageName));

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
    if (missingDependencies.length > 0 && missingDependencies.length <= FewMissingDependenciesThreshold) {
        throw new Error(`Missing dependencies: ${missingDependencies.join(',')}`);
    }

    if (!keepCachedPackageJson) {
        const cacheDependencyOverwrite: Record<string, string> = {};
        for (const [dependencyName, depVersion] of Object.entries(dependencies)) {
            if (!depVersion) {
                continue;
            }
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
                const selected = onlineVersions.at(-1);
                if (!selected) {
                    throw new Error(`All versions of ${dependencyName} have been removed`);
                }
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
    for (const sourceFile of sourceFiles) {
        const pieces = split(sourceFile);
        for (const piece of pieces) {
            writePiece(sourceFile, piece);
        }
    }
    await runHooks('afterUpdate', buildResult);

    // 生成 package.json 快照
    writeFileSync(packageSnapshotPath, JSON.stringify({ ...packageInfo, dependencies }, null, 2));
}
