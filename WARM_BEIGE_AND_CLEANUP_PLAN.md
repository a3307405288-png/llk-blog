# 博客善后方案（已备好，未执行，等用户点头）

对象：https://blog.110549.xyz ，本地源码 ~/workspace/xinghui-blog/XHBlogs（部署在 VPS /opt/xhblog）
背景：用户喜欢 Frud_ 站的暖米色 + 大圆角白卡片 + 橙色点缀 + 衬线标题；现站是模板原版毛玻璃渐变风。

## 一、暖米色改造（机械可执行，约一次构建+部署）

已核实的关键杠杆（app/layout.tsx）：
- 渐变层永远渲染（mix-blend-color、opacity 60），颜色来自 siteConfig.themeColors，所以只改这一组色就能给全站（包括照片背景）统一罩上暖色调。
- 紫/靛蓝点缀色在 app+components 里共 199 处（indigo/violet/purple/#6366f1），可脚本化映射替换，不用手改。

具体改动：
1. siteConfig.ts：themeColors 由 ["#a18cd1","#fbc2eb","#a1c4fd","#c2e9fb"]（紫粉蓝）
   改为暖米色系 ["#f7ead2","#f5deb5","#fad9a8","#f9ecd7"]。
2. 点缀色映射：Tailwind 类 indigo→orange、violet/purple→amber；globals.css 里
   #6366f1（播放器滑块）与滚动条 rgba(99,102,241,*) → 橙色 rgba(234,140,60,*)。
3. app/layout.tsx 两团模糊光晕：bg-indigo-400/30、dark:bg-purple-900/30 → amber/orange 对应值。
4. globals.css body 底色 bg-slate-50 → 暖白 #faf3e3（衬线字体模板已有，不用动）。
改完 npm run build 验证再按原流水线部署；git 在场，可一键回滚。

## 二、原作者残留盘点（2026-10-12 实查本地源码，计数确切）

A. 无需替代品、可直接清掉的（建议随暖米色一起做）：
- icpConfig：「萌ICP备 20260240号」+ 链接 icp.gov.moe/?keyword=20260240 —— 模板作者的萌备徽标，
  在 components/SiteDashboard.tsx 实际展示在用户站上，用户本人没有这个备案号，挂着属误导。
- data/friends.ts：假友链 1 条「罗德岛 PRTS」(prts.wiki)，头像还是作者图床图。
- counts.photos = 128：写死的照片数，不是用户的真实数量。

B. 需要用户给图才能换的（主聊已提过头像/背景，这里是完整清单）：
- siteConfig.ts 内 5 处作者图床（bu.dusays.com）引用：favicon、avatarUrl、bgImages×3、
  defaultPostCover、photoWallImage（实际复用 bg 图）。
- 示例文章 3 篇（posts/first.md、2222.md、long-test-article.md），封面均为作者图床图。
- 说说 moments 2 个文件共 13 张作者照片（10+3）；data/albums.ts 7 处作者图。
- cloudMusicIds：作者的 3 首网易云歌曲 ID，首页播放器播的是作者歌单。
- geminiConfig：AI 猫「煤球」人设仍是模板作者的（主人描述为"喜欢折腾代码的极客"）；
  是否在现站实际生效取决于有没有配 Gemini key，执行清理时先验再删。

## 执行顺序（用户点头后）
1. 先做 A 组清理 + 暖米色改造 → 构建 → 部署 → 打开验收。
2. B 组等用户给图（或同意用生图现做头像/背景）后一次性替换，再删示例文章。
