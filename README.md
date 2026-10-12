# llk-blog

aa 的个人博客，基于开源模板 [XinghuisamaBlogs](https://github.com/heiehiehi/XinghuisamaBlogs)（作者 XingHuiSama，CC BY-NC 4.0）二次开发。

已上线：https://blog.110549.xyz

## 目录

- `XHBlogs/` — 博客本体（Next.js 16 + React 19 + Tailwind 4）
  - 全站配置在 `XHBlogs/siteConfig.ts`（站名、介绍、头像、背景、弹幕都在这一个文件里改）
  - 文章在 `XHBlogs/posts/`（Markdown），项目页数据在 `XHBlogs/data/projects.ts`
- `my-blog-manager/` — 本地写作后台（Windows 双击 `Start.bat` 启动），写文章/管草稿用
- `UPSTREAM_README.md` — 上游模板的原始使用说明

## 本地跑起来

```bash
cd XHBlogs
npm install
npm run dev     # 开发预览 http://localhost:3000
npm run build   # 生产构建
```

## 线上部署

VPS 上 /opt/xhblog，systemd 服务 `xhblog`（端口 3010），nginx 反代 blog.110549.xyz。
改完 push 上来后跟小呆说一声即可重新部署。

## 未包含的二进制文件

通过接口推送不便传二进制，以下文件未入库（不影响构建，猫咪图是装饰）：
`XHBlogs/components/siamese-cat.png`、`XHBlogs/public/siamese-cat.png`、`XHBlogs/public/spaceship.bin`、`my-blog-manager` 下的若干 png/ico。需要时从上游仓库补。
