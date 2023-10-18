const { execSync } = require("child_process");
const { readFileSync, writeFileSync, rmSync, mkdirSync, existsSync } = require("fs");
const { resolve: resolvePath } = require("path");
const { URL } = require("url");
const { build } = require("./build.js");
const { split } = require("./split.js");

const basePath = resolvePath(__dirname, "..");
const originalPath = resolvePath(basePath, "original");
const translatingPath = resolvePath(basePath, "translate-pieces");
const translatedPath = resolvePath(basePath, "translated");

const namespacePrefix = "@minecraft/";
const baseURL = "https://projectxero.top/sapi/";
const botModules = [
    "@minecraft/vanilla-data"
];

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

const KindString = [
    "项目", // Project = 0x1,
    "模块", // Module = 0x2,
    "命名空间", // Namespace = 0x4,
    "枚举", // Enum = 0x8,
    "枚举成员", // EnumMember = 0x10,
    "变量", // Variable = 0x20,
    "函数", // Function = 0x40,
    "类", // Class = 0x80,
    "接口", // Interface = 0x100,
    "构造器", // Constructor = 0x200,
    "属性", // Property = 0x400,
    "方法", // Method = 0x800,
    "调用签名", // CallSignature = 0x1000,
    "索引签名", // IndexSignature = 0x2000,
    "构造器签名", // ConstructorSignature = 0x4000,
    "参数", // Parameter = 0x8000,
    "类型字面量", // TypeLiteral = 0x10000,
    "类型参数", // TypeParameter = 0x20000,
    "访问器", // Accessor = 0x40000,
    "Getter 签名", // GetSignature = 0x80000,
    "Setter 签名", // SetSignature = 0x100000,
    "类型别名", // TypeAlias = 0x200000,
    "引用" // Reference = 0x400000
];
function kindToString(kind) {
    const result = [];
    for (let i = 0; i < KindString.length; i++) {
        if (kind & (1 << i)) {
            result.push(KindString[i]);
        }
    }
    return result.join("/");
}

async function main() {
    // 强制检出 original 分支
    const head = execSync("git rev-parse --abbrev-ref HEAD", {
        cwd: basePath
    }).toString("utf-8").trim();
    if (head !== "original" && head !== "HEAD") {
        execSync("git checkout original", {
            cwd: basePath,
            stdio: "inherit"
        });
    }

    // 清除 node_modules 与缓存的 package.json
    const packageInfoPath = resolvePath(originalPath, "package.json");
    const packageSnapshotPath = resolvePath(translatedPath, "package.json");
    if (existsSync(packageSnapshotPath)) {
        rmSync(packageSnapshotPath);
    }
    const originalNodeModulesDir = resolvePath(originalPath, "node_modules");
    if (existsSync(originalNodeModulesDir)) {
        rmSync(originalNodeModulesDir, { recursive: true, force: true });
    }

    // 不使用翻译构建项目
    const { sourceFiles, dependencies, tsdocProject } = await build(false);

    // 按类切分文件
    rmSync(translatingPath, { recursive: true, force: true });
    sourceFiles.forEach((sourceFile) => {
        const pieces = split(sourceFile);
        const sourceFileText = sourceFile.getFullText();
        pieces.forEach((piece) => {
            mkdirSync(resolvePath(piece.path, ".."), { recursive: true });
            writeFileSync(piece.path, sourceFileText.slice(piece.start, piece.end));
        });
    });

    // 生成 README.md
    const readMePath = resolvePath(translatedPath, "README.md");
    const readMe = readFileSync(readMePath, "utf-8");

    const summaryLines = [
        "<!-- summary start -->",
        "",
        "模块：",
        ""
    ];
    tsdocProject.children.forEach((moduleRef) => {
        const docURL = new URL(moduleRef.url || '', baseURL);
        summaryLines.push(`- [${namespacePrefix}${moduleRef.name}](${docURL})`);
    });
    summaryLines.push([
        "",
        "NPM 包：",
        "",
        "|包名|版本|",
        "| - | - |"
    ]);
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
    summaryLines.push([
        "",
        `游戏版本号：\`${gameVersion}\``,
        "",
        "<!-- summary end -->"
    ]);

    const statusHeadLines = [
        "<!-- status start -->",
        "",
        "|模块|进度|",
        "| - | - |"
    ];
    const statusLines = [];
    tsdocProject.children.forEach((moduleRef) => {
        const moduleFullName = namespacePrefix + moduleRef.name;
        if (botModules.includes(moduleFullName)) return;
        const linkHref = moduleFullName.replace(/[@\/]/g, "");
        statusHeadLines.push(`|[${moduleFullName}](#${linkHref})|0/${moduleRef.children.length}|`);
        statusLines.push([
            "",
            `### ${moduleFullName}`,
            "",
            "|名称|类型|状态|",
            "| - | - | - |"
        ]);
        moduleRef.children.forEach((member) => {
            const kindStr = kindToString(member.kind);
            const url = new URL(member.url, baseURL);
            statusLines.push(`|[\`${member.name}\`](${url})|${kindStr}|未翻译|`);
        });
    });
    statusLines.unshift(statusHeadLines);
    statusLines.push([
        "",
        "<!-- status end -->"
    ]);

    const newReadMe = readMe
        .replace(/<!-- summary start -->\n\n[^]+\n\n<!-- summary end -->/, summaryLines.flat().join("\n"))
        .replace(/<!-- status start -->\n\n[^]+\n\n<!-- status end -->/, statusLines.flat().join("\n"));
    writeFileSync(readMePath, newReadMe);

    // 生成 package.json 快照
    const packageInfo = JSON.parse(readFileSync(packageInfoPath, "utf-8"));
    writeFileSync(packageSnapshotPath, JSON.stringify({ ...packageInfo, dependencies }, null, 2));
}

main().catch((err) => {
    console.error(err);
});
