# Minecraft Script API

Minecraft 脚本 API 文档。

<!-- summary start -->

NPM 包：

|包名|版本|
| - | - |
|[@minecraft/common](https://www.npmjs.com/package/@minecraft/common)|`1.2.0`|
|[@minecraft/debug-utilities](https://www.npmjs.com/package/@minecraft/debug-utilities)|`1.0.0-beta`|
|[@minecraft/diagnostics](https://www.npmjs.com/package/@minecraft/diagnostics)|`1.0.0-beta`|
|[@minecraft/math](https://www.npmjs.com/package/@minecraft/math)|`2.2.11`|
|[@minecraft/server](https://www.npmjs.com/package/@minecraft/server)|`2.5.0-beta`|
|[@minecraft/server-admin](https://www.npmjs.com/package/@minecraft/server-admin)|`1.0.0-beta`|
|[@minecraft/server-editor](https://www.npmjs.com/package/@minecraft/server-editor)|`0.1.0-beta`|
|[@minecraft/server-gametest](https://www.npmjs.com/package/@minecraft/server-gametest)|`1.0.0-beta`|
|[@minecraft/server-graphics](https://www.npmjs.com/package/@minecraft/server-graphics)|`1.0.0-beta`|
|[@minecraft/server-net](https://www.npmjs.com/package/@minecraft/server-net)|`1.0.0-beta`|
|[@minecraft/server-ui](https://www.npmjs.com/package/@minecraft/server-ui)|`2.1.0-beta`|
|[@minecraft/vanilla-data](https://www.npmjs.com/package/@minecraft/vanilla-data)|`1.21.130-preview.27`|

游戏版本号：`1.21.130.27`

<!-- summary end -->

通过 [TypeDoc](https://typedoc.org/) 基于 d.ts 生成。

目前正在翻译中。欢迎[参与翻译](#参与翻译)！

不喜欢[译文](https://projectxero.top/sapi/)？您也可以直接查看[原文](https://projectxero.top/sapi/original/)。

## 参与翻译

项目地址：[XeroAlpha/sapi-typedoc](https://github.com/XeroAlpha/sapi-typedoc)

欢迎通过 [Fork & Pull Request](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models) 参与此项目！

> [!TIP]
> 在 Fork 仓库中，GitHub Actions 会默认开启，用于在每次 Push 时构建对应的网页版本。如果您不需要，请 [禁用工作流](https://docs.github.com/zh/actions/using-workflows/disabling-and-enabling-a-workflow)。

TSDoc 例子：
```ts
/**
 * 在给定的范围内随机一个整数并返回。
 * 
 * Return a ranged random integer.
 * @param min 范围的下限（含）。
 * @param max
 * 范围的上限（含）。
 * 
 * Maxinum of range.
 * @returns 范围内的随机数。
 * @throws
 * 若 `min > max`，则报错 `"Illegal range"`。
 */
random(min: number, max: number): number;
```
上述例子中 `@param`、`@returns` 称为“标签”。标签后面可以空一格后接文本，也可以换行。

单个标签与之后的文本组成的整体称为“块”。

## 翻译规则

- 所有翻译均在 `translate-pieces` 目录中进行。`translated` 目录下的 d.ts 文件由构建脚本跟随 `translate-pieces` 目录更新。
- **保留所有英文原文，即使原文有误**。但不保留 `@throws` 中出现的 “This function can throw errors.”、“This property can throw when used.”。
- 翻译不必遵守与英文原文句意相同的规则。能描述清楚即可。原文中的错误可在翻译中进行修正。
- 对于原文中出现的专有术语，优先使用 [Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki) 上的表述。存疑或不确定的表述可在 Pull Request 时提出。
- 对于每个块，**先中文翻译后英文原文，中间需要空一行**。只有一行的块，标签后可不换行。多行的块，标签后必须直接换行。
- 翻译文本是 Markdown 格式，换行需要空一行。包含代码的部分需要使用反引号括起。英文与中文间需要添加空格（英文与中文标点间不需要）。
- 块中的文本都是完整的句子。都需要以句号或者其他标点符号作为结尾。
- 保留所有标签，但如果在提供参数类型正确的情况下不会出错，则可以移除 `@throws` 标签。
- 所有函数的每个参数均需要 `@param` 标签来描述参数的作用。需要对 `@param` 标签中参数的描述进行翻译或补充。
- 所有有返回值的函数（返回值类型不为 `void`）都需要 `@returns` 标签来描述返回值的作用，即使已在描述中给出。需要对 `@returns` 标签中参数的描述进行翻译或补充。
- 函数可能的报错与发生条件应在 `@throws` 中详细列出。若参数类型正确的情况下不会出错，则可以省略或移除。`@throws` 后面需换行。
- 标签顺序需按照 `@param`（按参数顺序）、`@returns`、`@throws` 的顺序。
- 不翻译 `@example` 块。
- 特殊情况：若子类/代理的某一方法对外部表现的参数、返回类型和实际功能与父类一致，则可以不翻译描述、`@remarks`、`@param`、`@typeParam`、`@returns` 块，改用 `{@inheritDoc ParentClass.classMember}` 来代替描述的中文翻译部分。`@throws` 块仍然需要翻译与补充。
- 特殊情况：`This function/property can't be called/edited in read-only mode.` 视作成员标识，无需进行翻译。会在构建时统一进行替换。

|常见用语|翻译|备注|
| - | - | - |
|Represents/Describes/Specifies ...|表示……|出现在描述开头，用一个短语来描述功能时，统一翻译为“表示”|
|Contains information ...|描述了……|尽可能在之前加入“表示……”。|
|if true/if set to true|若为 `true`（，则表示……）|仅用于布尔型属性描述|
|identifier|标识符/ID|如果是字符串，使用“标识符”，其他情况使用“ID”。|
