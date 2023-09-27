const { execSync } = require("child_process");
const { existsSync, readFileSync, writeFileSync, rmSync, readdirSync, mkdirSync } = require("fs");
const { createRequire } = require("module");
const { resolve: resolvePath, relative: relativePath } = require("path");
const { URL } = require("url");
const { Project } = require("ts-morph");
const { build } = require("./build.js");
const { split } = require("./split.js");

const basePath = resolvePath(__dirname, "..");
const originalPath = resolvePath(basePath, "original");
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
    // Project = 0x1,
    "项目",
    // Module = 0x2,
    "模块",
    // Namespace = 0x4,
    "模块",
    // Enum = 0x8,
    "枚举",
    // EnumMember = 0x10,
    "枚举成员",
    // Variable = 0x20,
    "变量",
    // Function = 0x40,
    "函数",
    // Class = 0x80,
    "类",
    // Interface = 0x100,
    "接口",
    // Constructor = 0x200,
    "构造器",
    // Property = 0x400,
    "属性",
    // Method = 0x800,
    "方法",
    // CallSignature = 0x1000,
    "调用签名",
    // IndexSignature = 0x2000,
    "索引签名",
    // ConstructorSignature = 0x4000,
    "构造器签名",
    // Parameter = 0x8000,
    "参数",
    // TypeLiteral = 0x10000,
    "类型字面量",
    // TypeParameter = 0x20000,
    "类型参数",
    // Accessor = 0x40000,
    "访问器",
    // GetSignature = 0x80000,
    "Getter 签名",
    // SetSignature = 0x100000,
    "Setter 签名",
    // ObjectLiteral = 0x200000,
    "对象字面量",
    // TypeAlias = 0x400000,
    "类型别名",
    // Reference = 0x800000
    "引用"
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
    // 1. 强制检出 original 分支
    const head = execSync("git rev-parse --abbrev-ref HEAD", {
        cwd: basePath
    }).toString("utf-8").trim();
    if (head !== "original" && head !== "HEAD") {
        execSync("git checkout original", {
            cwd: basePath,
            stdio: "inherit"
        });
    }

    // 2. 删除 node_modules
    rmSync(resolvePath(originalPath, "node_modules"), { recursive: true, force: true });

    // 3. 重新安装模块且不生成 package-lock.json
    execSync("npm install", {
        cwd: originalPath,
        stdio: "inherit"
    });

    // 4. 不使用翻译构建项目
    const { project, sourceFiles, dependencies, tsdocProject } = await build(false);
    project.saveSync();

    // 5. 按类切分文件
    sourceFiles.forEach((sourceFile) => {
        const pieces = split(sourceFile);
        const sourceFileText = sourceFile.getFullText();
        pieces.forEach((piece) => {
            mkdirSync(resolvePath(piece.path, ".."), { recursive: true });
            writeFileSync(piece.path, sourceFileText.slice(piece.start, piece.end));
        });
    });

    // 6. 生成 README.md 。
    const readMePath = resolvePath(translatedPath, "README.md");
    const readMe = readFileSync(readMePath, "utf-8");

    const summaryLines = [
        "<!-- summary start -->",
        "",
        "|模块|版本|",
        "| - | - |"
    ];
    let gameVersion;
    Object.entries(dependencies).forEach(([moduleName, version]) => {
        let versionString = version;
        const versionInfo = extractVersionInfo(version);
        if (versionInfo) {
            if (!gameVersion) gameVersion = versionInfo.gameVersion;
            versionString = versionInfo.version;
        }
        summaryLines.push(`|[${moduleName}](https://www.npmjs.com/package/${moduleName})|\`${versionString}\`|`);
    });
    summaryLines.push("");
    summaryLines.push(`游戏版本号：\`${gameVersion}\``);
    summaryLines.push("");
    summaryLines.push("<!-- summary end -->");

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
        statusLines.push("");
        statusLines.push(`### ${moduleFullName}`);
        statusLines.push("");
        statusLines.push("|名称|类型|状态|");
        statusLines.push("| - | - | - |");
        moduleRef.children.forEach((member) => {
            const kindStr = kindToString(member.kind);
            const url = new URL(member.url, baseURL);
            statusLines.push(`|[\`${member.name}\`](${url})|${kindStr}|未翻译|`);
        });
    });
    statusLines.unshift(...statusHeadLines);
    statusLines.push("");
    statusLines.push("<!-- status end -->");

    const newReadMe = readMe
        .replace(/<!-- summary start -->\n\n[^]+\n\n<!-- summary end -->/, summaryLines.join("\n"))
        .replace(/<!-- status start -->\n\n[^]+\n\n<!-- status end -->/, statusLines.join("\n"));
    writeFileSync(readMePath, newReadMe);

    // 7. 生成 package.json 快照
    const packageSnapshotPath = resolvePath(translatedPath, "package.json");
    writeFileSync(packageSnapshotPath, JSON.stringify({ dependencies }, null, 2));
}

main().catch((err) => {
    console.error(err);
});
