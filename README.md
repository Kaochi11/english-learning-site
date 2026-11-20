# 英语学习站

无需账号的静态英语练习站，适用于 GitHub Pages。保留背词、双语词库、语法、句型、口语、雅思与四六级入口。考试练习不是官方试题。

## 预览

双击 `index.html` 可预览界面；发音取决于浏览器与系统语音。`file:` 模式下浏览器对跨页面存储的处理不一致，也不会注册离线缓存。要测试完整功能，在此目录启动静态服务器后用浏览器访问 `http://localhost:8000/`：

```sh
python -m http.server 8000
```

部署到 GitHub Pages 时，确保 `index.html`、`assets/` 和 `sw.js` 均位于配置的发布目录。GitHub Pages 使用 HTTPS；本地测试也可通过 `localhost` 使用 Service Worker。

## 词库和维护

- `assets/js/data.js` 存放站内词条和课程内容；`data-extra.js` 存放扩展词库，派生自 [ECDICT](https://github.com/skywind3000/ECDICT)，附 [MIT 许可](LICENSE-ECDICT.txt)。
- `word-catalog.js` 统一去重规则：按英文拼写（首尾空格与大小写归一）合并，优先保留站内释义和例句，保留每条词的所有词书归属。
- 按文件实际内容生成首页与数据页汇总；各词书可以重叠，所以不能直接相加。当前快照为 **9,353 个去重词条、2,862 个带双语例句、8 本词书**。详见 [数据与参考资料](sources.html)。
- 修改词条、词书或主题后，生成并校验汇总（需 Node.js，无 npm 依赖）：

```sh
node tools/catalog.mjs
node tools/catalog.mjs --check
node tools/study-stats.test.cjs
```

新词使用 `{ w, p, t, m, e, z, c, b }`：拼写、音标、词性、释义、例句、例句翻译、主题、词书。`b` 可用数组；未写时归入 `core`。主题必须是 `WORD_CATEGORIES` 中定义的 ID。只有确实具备双语例句时才提供 `e` 和 `z`。

## 视觉规范

使用 [Open Design 的 Claude 风格规范](https://github.com/nexu-io/open-design/tree/0725880/design-systems/claude) 和编辑式网页模板作为设计参考；绑定记录见 `.open-design.json`。主题随站点交付，浏览或部署无需安装 Open Design，也不依赖外部字体。站点不是 Anthropic 产品。

## 学习记录与离线

- 进度仍保存在 `localStorage` 的 `en-site-progress-v1`，不会上传或跨设备同步。清除站点数据会删除本地进度。
- 新学为第一次作答的词数；复习为之后的作答次数，包含当组重试。首页的到期数跨全部词书，背词页的到期数只统计已选词书。
- 答对进入下一盒，复习间隔分别为 10 分钟、1 天、3 天、7 天、21 天和 60 天。第 6 盒的词仍会到期；它不是永久掌握。答得模糊暂不升级，答错回第 1 盒。每组优先安排到期词。
- 静态页面可在缓存完成后离线访问；第一次在线打开词库或背词页后才会缓存扩展词库。若来不及缓存，词库和背词页会明确提示当前只有基础条目。离线发音是否可用取决于所选语音。
- 卡片练习快捷键：空格翻面；`1` 想起来、`2` 模糊、`3` 不会。拼写模式使用回车提交。
