# Minecraft 脚本 API 文档网页生成器

将 Minecraft 脚本 API 的 `.d.ts` 类型声明转换为便于查阅的网页文档，并在这一过程中完成 API 文档的中文翻译。

- 译文站点：https://projectxero.top/sapi/
- 原文站点：https://projectxero.top/sapi/original/

|来源|说明|
| - | - |
|`.d.ts` 文件|[NPM 组织 @minecraft](https://www.npmjs.com/search?q=%40minecraft)|
|文档生成器|[TypeDoc](https://typedoc.org/)|
|翻译协作|[XeroAlpha/sapi-typedoc](https://github.com/XeroAlpha/sapi-typedoc)|

## 环境要求

- Node.js 24.x 或更高
- NPM 8.x 或更高且可以访问网络
- Git，且位于环境变量 PATH 中

## 快速开始

```sh
npm install
npm run build
```

构建产物位于 `dist/`，用浏览器打开 `dist/index.html` 即可预览。

## 命令

|命令|功能|
| - | - |
|`npm install`|安装构建脚本所需依赖|
|`npm run build`|合并 `translate-pieces/` 中的翻译，基于 `translated/` 生成译文文档到 `dist/`，并输出 `dist/index.json`|
|`npm run update`|检出 `original` 分支、拉取最新的 `@minecraft` 包，并重新切分 `translate-pieces/` 中的翻译片段|
|`npm run update-cache`|与 `update` 相同，但使用 `translated/package.json` 中指定的版本|
|`npm run lint-script`|对 `script/` 运行 ESLint 并自动修复|

> ⚠️ `npm run update` 会强制把分支切换到 `original`，运行前请先提交或 stash 当前更改。

构建管线的实现、各脚本与 hooks 的职责、翻译片断的格式等细节，见 [script/README.md](script/README.md)。

## 目录结构

|路径|说明|
| - | - |
|`script/`|构建与更新的全部脚本，细节见 [script/README.md](script/README.md)|
|`original/`|临时工作区：构建时在此安装 `@minecraft` 依赖|
|`translated/`|TypeDoc 的输入与站点首页；其中的 `.d.ts` 由构建生成，请勿手工编辑|
|`translate-pieces/`|按顶层声明拆分的翻译片段，翻译工作的主要场所|
|`dist/`|构建产物|
|`cache/`|运行缓存|

## 翻译

翻译**不需要**修改 `translated/`，它会在构建时重新生成。所有翻译都在 `translate-pieces/` 中进行：

- 每个模块对应一个目录，例如 `translate-pieces/server/`；
- 目录内按顶层声明的类别划分：`classes/`、`enums/`、`functions/`、`interfaces/`、`modules/`、`types/`、`variables/`；
- 文件名与顶层声明同名，例如 `translate-pieces/server/classes/World.d.ts` 对应 `server.d.ts` 中的 `World` 类；
- `package.d.ts` 保存模块的 `@packageDocumentation`，`index.d.ts` 保存模块的导出语句，`translate-pieces/examples/` 保存从 `@example` 提取出的示例代码。

把声明中的英文 JSDoc 注释翻译为中文即可，**不要改动类型签名**。具体内容请先查阅 main 分支中的 [README](translated/README.md)。

### 翻译状态

译文站点首页会自动汇总各模块的翻译进度，状态由 Git 历史推断：

|状态|判定方式|
| - | - |
|未翻译|片段内容与 `original` 分支完全一致|
|翻译中|相关提交的信息包含 `WIP:`|
|待检查|片段由合并 `original` 的合并提交带入，即原文已更新、需要重新确认译文|
|已完成|以上情况之外|

也可以在提交信息里用命令覆盖状态，格式为 `/命令 相对路径`，路径相对 `translate-pieces/`，可省略 `.d.ts` 后缀：

```text
/translated server/classes/World
/untranslated server/classes/World
/wip server/classes/World
/needReview server/classes/World
```

## 分支与部署

|分支|用途|CI|
| - | - | - |
|`main`|译文开发分支|推送到 `main` 触发 `.github/workflows/deploy.yml`，构建并部署译文站点|
|`original`|原文分支，由 `npm run update` 自动检出与更新|推送到 `original` 触发 `.github/workflows/deploy-original.yml`，构建并上传产物|

`npm run update` 只在 `original` 分支上重建未翻译基线，翻译成果保存在 `main`。把 `original` 合并进 `main` 后，Git 的三方合并会保留已有译文，原文发生变化的片段则变为“待检查”。

## 参与贡献

项目地址：[XeroAlpha/sapi-typedoc](https://github.com/XeroAlpha/sapi-typedoc)

欢迎通过 [Fork & Pull Request](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models) 参与翻译或改进脚本。提交前建议运行 `npm run lint-script`。

## 许可协议

本项目以 [MIT 许可协议](LICENSE) 授权。
