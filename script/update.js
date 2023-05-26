const { execSync } = require("child_process");
const { existsSync, readFileSync, copyFileSync, writeFileSync, rmSync, readdirSync, statSync, mkdirSync, utimesSync } = require("fs");
const { createRequire } = require("module");
const { resolve: resolvePath, relative: relativePath } = require("path");
const { URL } = require("url");
const { build } = require("./build.js");

const basePath = resolvePath(__dirname, "..");
const originalPath = resolvePath(basePath, "original");
const translatedPath = resolvePath(basePath, "translated");

const namespacePrefix = "@minecraft/";
const baseURL = "https://projectxero.top/sapi/";
const botModules = [
    "@minecraft/vanilla-data"
];

function readPackageInfo(modulePath) {
    const packageInfoPath = resolvePath(modulePath, "package.json");
    if (existsSync(packageInfoPath)) {
        try {
            return JSON.parse(readFileSync(packageInfoPath, "utf-8"));
        } catch(e) { /* ignore */ }
    }
}

function findModule(moduleName, root) {
    const localRequire = createRequire(resolvePath(root, "node_modules"));
    const searchPaths = localRequire.resolve.paths(moduleName);
    for (const searchPath of searchPaths) {
        const modulePath = resolvePath(searchPath, moduleName);
        const moduleDesc = readPackageInfo(modulePath);
        if (moduleDesc && moduleDesc.name === moduleName) {
            return modulePath;
        }
    }
}

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

function copyFileAndUpdateTimeSync(src, dest) {
    const now = new Date();
    copyFileSync(src, dest);
    utimesSync(dest, now, now);
}

function walkFiles(directory, walker) {
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

function getCommonStringFromStart(a, b) {
    let len = Math.min(a.length, b.length);
    while (len > 0) {
        if (a.slice(0, len) === b.slice(0, len)) {
            return a.slice(0, len);
        }
    }
    return "";
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

    // 4. 复制模块 d.ts 至翻译目录
    const dependencies = readPackageInfo(originalPath).dependencies;
    Object.keys(dependencies).forEach((moduleName) => {
        if (moduleName.startsWith(namespacePrefix)) {
            const pureModuleName = moduleName.slice(namespacePrefix.length);
            const modulePath = findModule(moduleName, originalPath);
            const packageInfo = readPackageInfo(modulePath);
            const version = packageInfo.version;
            console.log(`Copying d.ts for ${moduleName}@${version}`);
            const dtsFiles = [];
            walkFiles(modulePath, (dir, file, path) => {
                if (file && file.endsWith(".d.ts")) {
                    const relPath = relativePath(modulePath, path);
                    if (!relPath.includes("node_modules")) {
                        dtsFiles.push(path);
                    }
                }
            });
            if (dtsFiles.length < 1) {
                throw new Error(`Cannot find any d.ts for ${moduleName}`);
            }
            if (dtsFiles.length === 1) {
                copyFileAndUpdateTimeSync(
                    dtsFiles[0],
                    resolvePath(translatedPath, `${pureModuleName}.d.ts`)
                );
            } else {
                const typeEntry = resolvePath(modulePath, packageInfo.types).replace(/\.d\.ts$/i, "");
                const commonParent = dtsFiles.map((path) => resolvePath(path, ".."))
                    .reduce((common, parent) => getCommonStringFromStart(common, parent));
                const moduleRoot = resolvePath(translatedPath, pureModuleName);
                const moduleEntry = resolvePath(moduleRoot, relativePath(commonParent, typeEntry));
                const moduleEntryRelative = `./${relativePath(translatedPath, moduleEntry).replace(/\\/g, "/")}`;
                const exportStatement = `export * from ${JSON.stringify(moduleEntryRelative)};`;
                dtsFiles.forEach((file) => {
                    const target = resolvePath(moduleRoot, relativePath(commonParent, file));
                    mkdirSync(resolvePath(target, ".."), { recursive: true });
                    copyFileAndUpdateTimeSync(file, target);
                });
                writeFileSync(resolvePath(translatedPath, `${pureModuleName}.d.ts`), exportStatement);
            }
            dependencies[moduleName] = version;
        }
    });

    // 5. 生成一次文档
    const project = await build();

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
    project.children.forEach((moduleRef) => {
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
