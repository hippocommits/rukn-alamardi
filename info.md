# travel-photobook · 站点使用说明

## 语言

网站呈现给用户的语言应跟随用户 query 的语言。本目录是**中文版**；同一模板另有英文版，如果环境中同时提供了两个语言版本，用户使用英文时改用英文版；若只有本目录，就在本目录内把文案改成英文。

## 开始之前：先问用户

动手之前，先用 ask_user 工具问用户几个问题：

1. **（必问）您是否需要将网页变成全栈应用？** 也就是是否需要持久化的数据存储。当前这是一个纯前端静态站点：全部内容写在 `src/config.ts` 里，没有后端、没有数据库，刷新页面或更换设备后不会留下任何数据。如果用户需要保存东西（例如订阅名单、留言、订单、可在后台编辑的内容），就需要加后端和数据库。
2. 与本站相关的问题（可按需选问）：
   - 保留母版「远页 · 旅行影集志」，还是启用语义变体「闲园茶事」（茶事季刊，`?variant=tea-notes`）？还是以它为底、换一个全新的主题或行业？
   - 配色是否要调整？全站主题只有 7 个色值（暖纸色 + 黛蓝墨），集中在 config 的 `theme` 字段。
   - 内容是否要换成用户自己的？四个章节的标题、日志段落、规格小表、页码与图片都可以替换；图片走本地 `/media/` 路径。

如果用户不给任何回答，就直接加载默认网站文件，不要改动任何内容。

可选：如果符合用户的需求，你可以使用图像和视频生成工具。

## 这个网站现在是什么

一个「独立出版刊物」风格的单页站点引擎，把一本自印旅行影集志做成了网页：卷首序、四章行记（每章有详情页：行状小表 + 日志体段落 + 一横一竖拼版）、一页版权页；页码（folio）、竖排题签、刊头目录浮层这些书刊语言贯穿全站。hash 路由，无后端、无账号体系。

文件结构（均在当前目录下）：

```
index.html                  # 页面入口（字体、meta）
package.json / vite.config.ts / tsconfig*.json / eslint.config.js
public/favicon.svg
src/
  main.tsx                  # 应用入口
  App.tsx                   # 路由 + 配置装配
  config.ts                 # 母版全部内容（唯一内容入口）
  variationTeaNotes.ts      # 语义变体「闲园茶事」完整配置
  variation.ts              # URL 参数解析（variant / fixture）
  types.ts                  # SiteConfig 类型定义（逐字段注释）
  hooks.ts                  # hash 路由、滚动跟随、reveal 等
  lib/routes.ts             # 路由表
  lib/validateConfig.ts     # 渲染前的 config 校验
  components/               # SiteChrome / HomePage / DetailPages / Primitives
  styles/                   # base / app / details / responsive
tests/                      # vitest 契约测试 + e2e 浏览器矩阵
dist/                       # 已构建的静态产物
```

它可以被用户的需求改造成别的东西：个人旅行影集、摄影作品集、独立杂志或小志的线上版、品牌 lookbook、茶室 / 民宿 / 餐厅的「刊物式」官网、活动纪念册等。换主题或换行业，本质上就是写一份新的 config 并替换 `/media/` 媒体——参照 `variationTeaNotes.ts` 的做法即可；要改的就是网站的文字与媒体内容，引擎代码通常不必动。

如果用户只是想看看这个网站，直接加载（构建或预览）即可，不要改任何文件。

## 技术速览

- React 19 + strict TypeScript + Vite；hash 路由（`#/`、`#/chapter/:slug`、`#/colophon` 等），无后端依赖。
- **内容即配置**：整站文案、主题色、章节数据都在一份 `SiteConfig` 里；`validateConfig` 在渲染前校验（必须恰好四章、题签 2–4 字、folioStart 唯一、媒体必须走 `/media/` 本地路径等）。改内容前先读 `src/types.ts` 和 `src/lib/validateConfig.ts`，按契约来。
- **语义变体机制**：`?variant=tea-notes` 切换整站身份（品牌、文案、配色、章节全部换掉），引擎零改动。新增一个主题 = 新增一份 config + 在 `src/variation.ts` 里注册。
- **fixture 夹具**：`?fixture=long | bad-media | no-motion` 分别压测超长文案、坏图占位、关闭动效，可与 variant 叠加；改完内容用它们自测。
- 动效由 CSS 驱动（IntersectionObserver + data 属性）：规线生长、翻页揭幕、reveal 进场；尊重 prefers-reduced-motion，config 里 `motion: false` 可全站静帧。
- 图片全部本地 `/media/` 引用，坏图有一次性可读占位兜底。
- 常用命令：`npm run dev` / `npm run build` / `npm test` / `npm run test:e2e`（见 README.md）。 （包里没带 `playwright-core`，e2e 会直接跳过并退出 0；要真跑一遍浏览器先 `npm i -D playwright-core`。）

更细的东西不用在这里找，直接读源码即可——类型与关键函数都有注释。
