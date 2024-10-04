const { execSync } = require('child_process');
const { readFileSync, writeFileSync, rmSync, existsSync } = require('fs');
const { resolve: resolvePath } = require('path');
const { build } = require('./build.js');
const { split, writePiece } = require('./split.js');
const { loadHooks } = require('./hooks.js');
const { basePath, originalPath, translatingPath, translatedPath } = require('./utils');

const excludedPackages = ['@minecraft/dummy-package', '@minecraft/core-build-tasks', '@minecraft/creator-tools'];

async function main() {
    const runHooks = loadHooks();

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
    const scopedPackages = JSON.parse(execSync('npm search --json @minecraft'));
    const onlinePackageNames = scopedPackages
        .map((package) => package.name)
        .filter((packageName) => !excludedPackages.includes(packageName));

    // 清除 node_modules 与缓存的 package.json
    const packageInfoPath = resolvePath(originalPath, 'package.json');
    const packageSnapshotPath = resolvePath(translatedPath, 'package.json');
    if (!process.argv.includes('--cache') && existsSync(packageSnapshotPath)) {
        rmSync(packageSnapshotPath);
    }
    const originalNodeModulesDir = resolvePath(originalPath, 'node_modules');
    if (existsSync(originalNodeModulesDir)) {
        rmSync(originalNodeModulesDir, { recursive: true, force: true });
    }

    // 不使用翻译构建项目
    const buildResult = await build(false);
    const { sourceFiles, dependencies } = buildResult;

    // 检查是否所有包都在依赖中
    const missingDependencies = onlinePackageNames.filter((packageName) => !(packageName in dependencies));
    if (missingDependencies.length > 0) {
        throw new Error(`Missing dependencies: ${missingDependencies.join(',')}`);
    }

    // 按类切分文件
    rmSync(translatingPath, { recursive: true, force: true });
    sourceFiles.forEach((sourceFile) => {
        const pieces = split(sourceFile);
        pieces.forEach((piece) => writePiece(sourceFile, piece));
    });
    await runHooks('afterUpdate', buildResult);

    // 生成 package.json 快照
    const packageInfo = JSON.parse(readFileSync(packageInfoPath, 'utf-8'));
    writeFileSync(packageSnapshotPath, JSON.stringify({ ...packageInfo, dependencies }, null, 2));
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
