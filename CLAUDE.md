# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

GetCiteFlow — 企业 AI 品牌服务（Enterprise AI Brand Service），帮助品牌在 ChatGPT、Claude、Perplexity、Gemini、DeepSeek、豆包、通义千问、Google AI Overviews 等 AI 系统中获得引用和推荐。

- **域名**: https://www.getciteflow.ai
- **部署**: Vercel（`output: 'standalone'`）
- **package.json name**: `ai-studio-applet`（非 `getciteflow`）

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 15 (App Router) |
| UI | React 19 + shadcn/ui (`base-nova` 风格, lucide 图标) |
| 样式 | Tailwind CSS 4 (`@tailwindcss/postcss`) + `tw-animate-css` + `@tailwindcss/typography` |
| 动画 | `motion`（原 framer-motion，已 `transpilePackages`） |
| AI 提供商 | Gemini (`@google/genai`)、OpenAI（直接 fetch）、DeepSeek（直接 fetch） |
| 限流 | Upstash Redis 滑动窗口 |
| 缓存 | 内存 `Map`，1h TTL，60s 清理间隔 |
| 国际化 | 自定义中间件路由（en 默认，zh 中文），React Context 字典 |
| 分析 | Vercel Analytics + Speed Insights + Google Analytics（可选） |
| 在线客服 | Chatwoot SDK（自动检测中英文） |

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` | 生产构建（TS 错误阻断，ESLint 不阻断） |
| `npm run lint` | ESLint（扁平配置 `eslint.config.mjs`） |
| `npm run clean` | 清除 `.next` 缓存 |
| `npm start` | 生产服务器 |

无 typecheck 脚本、无 Prettier、无 CI/CD 配置。`npm test` 存在但 `tests/` 为空。

## 核心架构

### 主要工作流：AI 可见性扫描

1. 用户在首页 `/` 或对比页 `/compare` 输入 URL
2. 重定向到 `/report/[domain]`（中文用户 `/zh/report/[domain]`）
3. **`app/report/[domain]/page.tsx`**：服务端组件，`maxDuration = 60`
   - 从 `x-forwarded-for` 获取 IP 进行限流
   - `lib/ratelimit.ts`：Upstash Redis 滑动窗口（默认 5次/小时/IP，Redis 不可用时静默放行）
   - `lib/analyze.ts`：编排分析流程
     - 先检查内存缓存（1h TTL）
     - `pendingCache` Map 去重并发请求
     - `lib/scrape.ts` 爬取网站（15s 超时，SSRF 防护，检测 robots.txt/sitemap.xml/llms.txt）
     - 调用 AI 提供商分析（默认 `openai` / `gpt-4o-mini`，可通过 `AI_PROVIDER_DEFAULT` 切换）
     - 合并 AI 检测结果与确定性信号
   - 渲染报告：评分圆环、6 维度卡片、缺失组件列表、AI 建议、对比面板、企业 CTA
4. **API 备选路径**：`POST /api/compare` 返回纯 JSON（同样限流和分析）
5. **OG 图片**：`GET /api/og`（Edge Runtime，CDN 1h 缓存）

### 目录结构

```
app/              — App Router（路由详见 README）
  report/[domain]/ — SSR 报告页（核心页面）
  api/             — compare（JSON API）、og（Edge Runtime 动态 OG 图）
  zh/              — 中文 locale 镜像路由
  blog/            — 英文博客文章
  case-studies/    — 案例研究
components/       — React 组件
  ui/              — shadcn/ui 原语（badge, button, card, input, progress, skeleton, tabs）
lib/              — 核心逻辑
  analyze.ts       — 主分析引擎（编排爬虫 + AI + 缓存）
  scrape.ts        — 网站爬虫（HTML 抓取、信号检测、SSRF 防护）
  ai-provider.ts   — 多提供商路由器 + ANALYZE_PROMPT
  gemini.ts        — Gemini 客户端单例
  ratelimit.ts     — Upstash Redis 限流
  cache.ts         — 内存缓存（Map，1h TTL）
public/           — 静态资源 + llms.txt（AI 爬虫可见性关键文件）
  AGENTS.md        — 面向外部 AI 爬虫/代理的英文上下文（不要删除此文件）
i18n/             — 国际化字典 + 博客文章翻译
hooks/            — use-mobile.ts、useInView.ts
```

### 环境变量

参考 `.env.example`。关键项：
- `GEMINI_API_KEY`、`OPENAI_API_KEY`、`DEEPSEEK_API_KEY` — 至少配置一个 AI 密钥
- `AI_PROVIDER_DEFAULT` — `openai` / `gemini` / `deepseek`（代码默认 `openai`，但 `.env.example` 写的是 `deepseek`）
- `NEXT_PUBLIC_SITE_URL` — 本地开发 `http://localhost:3000`
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` — 限流服务
- `RATE_LIMIT_MAX` — 每小时每 IP 最大分析次数（默认 5）
- `NEXT_PUBLIC_GA_ID` — Google Analytics（可选）
- `DISABLE_HMR=true` — AI Studio 场景禁止文件热更新

`.env*.local` 已 gitignore。

## 注意事项

- 暗色主题：背景 `#050816`，主色 `#6E7BFF`，定义在 `app/globals.css` 的 `@theme` 块
- 路径别名 `@/*` → 项目根目录
- 爬虫有 SSRF 防护：阻止私有 IP、localhost、metadata endpoint（169.254.169.254）、IP 地址 URL、非标准端口
- 无数据库：服务端无状态，仅依赖内存缓存和 Upstash Redis
- `firebase-tools` 在 devDependencies 中但项目无 Firebase 配置
- SEO 关键文件：`public/robots.txt`、`public/llms.txt`、动态 sitemap（双语）、JSON-LD 结构化数据
- `vercel.json` 配置了 `buildCommand: "next build"` 和 `installCommand: "npm install"`
