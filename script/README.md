# script/ — 构建管线文档

> 本目录是仓库真正的代码：把 Minecraft 脚本 API（`@minecraft/*`）的 d.ts 用 [TypeDoc](https://typedoc.org/) 生成为双语文档站。本文档面向维护本目录的开发者或 AI 代理；翻译贡献请阅读 main 分支的 `translated/README.md`。

核心管线：

```
original/ 的 @minecraft 依赖 (d.ts)
  │ split.ts 按顶层成员切分
  ▼
translate-pieces/（翻译工作区，翻译者编辑）
  │ replacePieces 合并回源码
  ▼
translated/（构建时生成的 ts-morph Project）
  │ TypeDoc convert + emit
  ▼
dist/（站点产物，已 gitignore）
```

## 文件一览

| 文件 | 职责 |
| - | - |
| `cli.ts` | CLI 入口，仅读 `argv[2]`：build / build-original / update / update-cached |
| `build.ts` | 构建管线主流程（见「构建管线」） |
| `update.ts` | 更新原始 d.ts 与切分片断（见「更新流程」） |
| `split.ts` | 源码 ↔ translate-pieces/ 的切分与合并（见「片断格式」） |
| `hooks.ts` | 加载并调度 `hooks/` 下的钩子（见「hooks 系统」） |
| `utils.ts` | 路径常量、git 封装、版本解析/比较、TypeDoc 文案安装（见「utils.ts」） |
| `pickRandom.ts` | 工具：随机挑一个未翻译片断 |
| `hooks/hook.d.ts` | Hook 类型定义（生命周期与 context 继承关系） |
| `.prettierrc` / `eslint.config.mjs` / `tsconfig.json` | 工程配置 |

## utils.ts

被 `build.ts`、`update.ts` 和各 hooks 共享的公共工具：

- **路径常量**：`basePath`（仓库根）、`originalPath`（original/）、`translatingPath`（translate-pieces/）、`translatedPath`（translated/）、`distPath`（dist/）。
- **`git(args)`**：在仓库根目录执行 git 命令并返回输出（`execSync` 封装）。hooks 里读分支、提交历史都靠它。
- **版本解析**：`PackageVersion` 类型 + `parsePackageVersion()`，把 `@minecraft/*` 的版本串（如 `1.0.0-beta.1.26.50-preview.27`）解析为 `{ version, gameVersion, gamePreRelease }`；`comparePackageVersion()` 按版本 + 游戏版本 + 分支（stable > preview）排序比较。
- **TypeDoc 文案**：`TypeDocLanguages` 类型 + `installLanguages(app, languages)`，给 TypeDoc 注入额外中英文案（如 `tag_rc: '预览版'`）。

## 命令

| 命令 | 等价执行 | 说明 |
| - | - | - |
| `npm run build` | `tsx ./script/cli.ts build` | 翻译版构建（合并 translate-pieces 后生成站点） |
| `npm run update` | `tsx ./script/cli.ts update` | **强制切到 original 分支**重建原始 d.ts 并重新切分片断 |
| `npm run update-cache` | `tsx ./script/cli.ts update-cached` | 同上，但保留 package.json 版本快照 |
| `npm run lint-script` | `cd script && eslint --fix .` | 仅检查 script/ |

⚠️ **`npm run update` 会执行 `git checkout original`（见 update.ts），未提交的更改会被丢弃。运行前务必提交或 stash。**

## 构建管线（build.ts）

1. **依赖恢复**：把 `translated/package.json`（版本快照）写入 `original/package.json`，在 `original/` 下 `npm install`，随后恢复原文件。`original/.npmrc` 强制 `package-lock=false`、`legacy-peer-deps=true`，构建需联网。
2. **触发 beforeLoad 钩子**
3. **加载模块**：遍历 original 依赖中 `@minecraft/*` 的包，用 ts-morph Project（tsconfig = `translated/tsconfig.json`，`skipAddingFilesFromTsConfig`）读取 d.ts 写入 `translated/`。单文件包 → `translated/<name>.d.ts`；多文件包 → 目录结构 + 入口 `export * from ...`。`botModules`（`@minecraft/vanilla-data`）只加载不参与文档生成。
4. **触发 afterLoad 钩子**
5. **翻译合并**（仅 translated 构建）：对每个 sourceFile 执行 `split()` + `replacePieces()`，把 translate-pieces/ 合并回源码。
6. **触发 afterTranslate 钩子**
7. **TypeDoc 准备**：`saveSync()` → `bootstrapWithPlugins`（tsconfig + 注册 `@rc` modifierTag）→ `installLanguages` → 清空 dist。
8. **触发 beforeConvert 钩子**
9. **文档树构建**：读取 ts 代码，将其转换为 TypeDoc 项目描述结构，便于处理待生成的页面。
10. **触发 afterConvert 钩子**
11. **渲染与输出**：根据 TypeDoc 项目描述结构，渲染网页并输出 JSON。
12. **触发 afterEmit 钩子**

## 更新流程（update.ts）

1. **强制 original 分支**：当前 HEAD 不在 `original` 时执行 `git checkout original`；检查 npm ≥ 8（overrides 需要）。
2. **拉取包列表**：`npm search --json scope:minecraft` 获取 `@minecraft` 组织下所有包，排除 `excludedPackages`。
3. **清理**：删除 `translated/package.json` 版本快照（`update-cached` 则保留）与 `original/node_modules`。
4. **加载原始**：调用 `build(false)` 构建纯原文项目，拿到 sourceFiles 与解析后的依赖版本。
5. **校验**：确认在线包都出现在依赖中，缺失数量 >5 直接报错。
6. **beta 标签处理**：原 package.json 中标 `beta` 的依赖若解析为稳定版，用 `npm view versions` 取最新 preview 分支，写入快照并递归 `update(true)` 重跑。
7. **清空 translate-pieces/**：删除 translate-pieces/，保证从零重新切分。
8. **触发 beforeUpdate 钩子**
9. **切分片断**：对每个 sourceFile `split()` + `writePiece()` 写入 translate-pieces/。
10. **触发 afterUpdate 钩子**
11. **写快照**：把 `package.json` 与各依赖实际解析到的版本写入 `translated/package.json`（供 build 时恢复依赖）。

## split.ts：片断格式（改动前必读）

- 按顶层成员切分到 `translate-pieces/<模块>/<类别>/<成员>.d.ts`；类别：`enums` / `classes` / `functions` / `interfaces` / `modules` / `types` / `variables`。
- `package.d.ts` 是 `@packageDocumentation` 注释片断；`index.d.ts` 是自动生成的导出汇总（generated piece，不会被 replacePieces 回写）。
- 片断头部注入 `/* IMPORT */` import 语句、尾部 `/* EXPORT */ export { ... };`（非导出成员）——这些行在 replacePieces 时被剥离，翻译者不可改动它们。
- **修改 split.ts 会改变 translate-pieces/ 的布局，直接影响所有翻译 PR 的合并**，需格外谨慎，必要时提供片断迁移方案。

## hooks 系统

- `hooks.ts` 加载 `hooks/` 下所有非 `.d.ts` 的脚本，**按文件名排序**执行；default 导出可以是 `{ [event]: fn }` 对象，也可以是 `(event, context) => fn` 函数。
- 约定文件名数字前缀表示执行优先级：例如 `0.*` 最先、`1.*` 次之、`2.*` 再次之，以此类推。
- 生命周期（context 类型逐级继承，见 `hooks/hook.d.ts`）：
  - `beforeLoad(HookContext)` / `afterLoad(TranslateHookContext)` / `afterTranslate(TranslateHookContext)`
  - `beforeConvert(BeforeConvertHookContext)` / `afterConvert(AfterConvertHookContext)` / `afterEmit(AfterConvertHookContext)`
  - `beforeUpdate(AfterConvertHookContext)` / `afterUpdate(AfterConvertHookContext)`

## 现有钩子（hooks/）

| 文件 | 生命周期 | 职责 |
| - | - | - |
| `0.corruption-fixer.ts` | afterLoad / beforeConvert | 修复 d.ts 损坏或结构不正确 |
| `1.execution-privileges.ts` | afterLoad / beforeConvert / afterConvert | 把「can't be called in read-only mode」等英文注释替换为 `@worldMutation` / `@earlyExecution` 自定义修饰标签，并生成特权列表页 |
| `1.example-extractor.ts` | afterLoad / afterTranslate / beforeConvert / afterConvert / afterUpdate | 把 `@example` 代码块提取为独立页面（`DocumentReflection`），同名多版本用内容 hash 区分；afterUpdate 写 `translate-pieces/examples/` |
| `1.fix-link-inline-tags.ts` | afterConvert | 修正 `@link` 的目标解析 |
| `1.net-packet-ids.ts` | afterLoad | 克隆 Mojang/bedrock-protocol-docs 到 cache/，给 server-net `PacketId` 枚举成员添加描述文本与 `@see` 注释 |
| `1.readme.ts` | afterConvert / afterUpdate | 分析 git 历史生成翻译状态（untranslated / wip / translated / needReview，提交信息 `WIP:` 前缀及 `/translated <file>` 等命令可覆写），渲染 README 摘要与状态表 |
| `1.release-stage.ts` | afterLoad / afterTranslate / beforeUpdate | 记录 `@beta` / `@rc` 发布阶段；update 切分前从 translate-pieces 移除（仅含发布标签的 JSDoc 整块删除，其余删标签行），translated 合并后按需补回或重建注释，保证最终文档保留阶段标签 |
| `1.rewrite-defined-in.ts` | afterConvert | 把 sources 里的 `translated` 路径替换为项目名 |
| `1.supress-doc-link-error.ts` | afterLoad | 修 server-gametest `register` / `registerAsync` 的 remarks 代码块 |
| `2.no-namespaced-import.ts` | afterLoad | 把 namespace import 展开为 named import |

## 工程约定

- ESM（`"type": "module"`），用 `tsx` 运行；import 必须带 `.js` 后缀（NodeNext）。
- `tsconfig.json`：strict、noImplicitAny、verbatimModuleSyntax 等全开。
- ESLint：typescript-eslint `strictTypeChecked` + `stylisticTypeChecked` + prettier（`.prettierrc`：printWidth 120、tabWidth 4、singleQuote、无尾逗号）。改完跑 `npm run lint-script`。
- **没有测试框架**：验证方式是 `npm run lint-script` + 构建验证。任何管线改动至少本地跑一次 build；涉及 update 流程的改动，**先跑一次 `npm run update` 并检查其产物**（如 translate-pieces/ 的切分结果），再跑一次 `npm run build` 验证。
- TypeDoc 是 `^0.28.13`，其内部 API（renderer、internationalization、DocumentReflection）跨版本不稳定，升级需单独验证。

## 红线

- ❌ 不要手工编辑 `original/`、`translate-pieces/`、`dist/`、`cache/`、`translated/*.d.ts` 去「修复」问题——它们是生成物或他人工作区；管线问题在 script/ 内解决。
- ✅ 通过脚本命令（`npm run build` / `npm run update`）读写这些目录是设计行为，也是验证脚本改动的正常方式，不要因「勿手工编辑」而拒绝执行。
- ⚠️ 分支提交规则：改动同时适用于 original 与 main（如脚本通用修复）时在 `original` 分支提交；仅适用于 main（如翻译相关逻辑）时在 `main` 分支提交。注意 `npm run update` 会强制切换分支。
- ❌ 不要手工改 `translated/*.d.ts`——每次 build 都会被覆盖；`translated/README.md`、`GLOSSARY.md`、`package.json`（版本快照）是例外，由钩子或人工维护。
- ✅ 改完脚本先 `npm run lint-script`，再 `npm run build` 验证。
