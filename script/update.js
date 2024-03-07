const { execSync } = require('child_process');
const { readFileSync, writeFileSync, rmSync, existsSync } = require('fs');
const { resolve: resolvePath } = require('path');
const { build } = require('./build.js');
const { split, writePiece } = require('./split.js');

const basePath = resolvePath(__dirname, '..');
const originalPath = resolvePath(basePath, 'original');
const translatingPath = resolvePath(basePath, 'translate-pieces');
const translatedPath = resolvePath(basePath, 'translated');

function extractVersionInfo(versionString) {
    const match = /^([\d.]+-\w+)\.([\d.]+)-(\w+)(\.\d+)?$/.exec(versionString);
    if (match) {
        const [, version, gameVersion, gamePreRelease, gameBuild] = match;
        if (gameBuild) {
            return { version, gamePreRelease, gameVersion: gameVersion + gameBuild };
        }
        return { version, gamePreRelease, gameVersion };
    }
}

const excludedPackages = ['@minecraft/dummy-package', '@minecraft/core-build-tasks'];

async function main() {
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
    const scopedPackages = JSON.parse(
        execSync('npm search --json @minecraft', {
            cwd: originalPath
        })
    );
    const onlinePackageNames = scopedPackages
        .map((package) => package.name)
        .filter((packageName) => !excludedPackages.includes(packageName));

    // 清除 node_modules 与缓存的 package.json
    const packageInfoPath = resolvePath(originalPath, 'package.json');
    const packageSnapshotPath = resolvePath(translatedPath, 'package.json');
    if (existsSync(packageSnapshotPath)) {
        rmSync(packageSnapshotPath);
    }
    const originalNodeModulesDir = resolvePath(originalPath, 'node_modules');
    if (existsSync(originalNodeModulesDir)) {
        rmSync(originalNodeModulesDir, { recursive: true, force: true });
    }

    // 不使用翻译构建项目
    const { sourceFiles, dependencies } = await build(false);

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

    // 生成 README.md
    const readMePath = resolvePath(translatedPath, 'README.md');
    const readMe = readFileSync(readMePath, 'utf-8');

    const summaryLines = ['<!-- summary start -->', '', 'NPM 包：', '', '|包名|版本|', '| - | - |'];
    let gameVersion;
    Object.entries(dependencies).forEach(([moduleName, version]) => {
        let versionString = version;
        const versionInfo = extractVersionInfo(version);
        if (versionInfo) {
            if (!gameVersion) gameVersion = versionInfo.gameVersion;
            versionString = versionInfo.version;
        }
        const npmURL = `https://www.npmjs.com/package/${moduleName}`;
        summaryLines.push(`|[${moduleName}](${npmURL})|\`${versionString}\`|`);
    });
    summaryLines.push(['', `游戏版本号：\`${gameVersion}\``, '', '<!-- summary end -->']);

    const newReadMe = readMe.replace(
        /<!-- summary start -->\n\n[^]+\n\n<!-- summary end -->/,
        summaryLines.flat().join('\n')
    );
    writeFileSync(readMePath, newReadMe);

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
