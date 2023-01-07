# Minecraft 脚本 API 文档网页生成器

将 Minecraft 脚本 API 的 d.ts 生成网页以供查阅。

在线网页：[https://projectxero.top/sapi/](https://projectxero.top/sapi/)

d.ts 文件来源：[NPM组织 @minecraft](https://www.npmjs.com/search?q=%40minecraft)

网页生成器：[typedoc](https://typedoc.org/)

## 准备

```
yarn
```

## 构建

```
yarn build
```

## 更新原始文件（Windows）

```
cd original
yarn upgrade
cd ..
.\translated\sync.cmd
```