# GetCiteFlow

**Slogan:** Get Your Site Cited by AI

**定位:** Generative Engine Optimization (GEO) Platform

> 不是 SEO 工具。帮助网站被 ChatGPT / Claude / Perplexity / Gemini 引用。

---

## 技术栈（最终）

### 前端 + 服务端

**Next.js 15（App Router）** — SSR、SEO、GEO、Metadata、Blog、Programmatic SEO

### UI

**Tailwind CSS 4 + shadcn/ui (base-nova)**

### AI

**Google Gemini（默认）** — `@google/genai`
备用：OpenAI、Deepseek

通过 `AI_PROVIDER_DEFAULT` 环境变量切换。

### 缓存

**In-memory Map** — 1 小时 TTL，缓存抓取结果和报告

### 限流

**Upstash Redis** — 滑动窗口，`RATE_LIMIT_MAX`/小时，Redis 不可用时降级返回 503

### 部署

**Vercel** — standalone output

---

## 网站风格

**参考：** Vercel、Linear、Perplexity

**风格：** 极简 AI SaaS

- **背景颜色：** `#050816`
- **主色（蓝紫渐变）：** `#6E7BFF` → `#8B5CF6`

**一定要：** 大标题、卡片、渐变、Glow、大留白

---

## 产品能力

### 免费版（无需登录、无需支付）

扫描首页和核心落地页，检测以下 GEO 信号：

| 检测项 | 说明 |
|--------|------|
| GEO 评分 | AI 可见性综合评分（0-100） |
| FAQ 缺失 | 是否缺少 FAQ Schema |
| llms.txt | 是否存在、内容是否完整 |
| robots.txt | 是否允许 AI crawler 抓取 |
| Schema | 结构化数据是否齐全 |
| Entity clarity | 品牌/产品实体定义是否清晰 |
| AI-readable markdown | 内容是否对 AI 爬虫友好 |
| AI summary optimization | 页面摘要是否包含关键信号 |

输出：评分 + 各维度细分 + 缺失组件列表 + 改进建议

### 付费版（$19/月）

解锁修复包：

- **FAQ Schema** — 直接生成可复制 JSON-LD
- **meta description** — AI 优化的描述文本
- **llms.txt** — 生成完整文件
- **robots.txt** — 优化 AI crawler 规则
- **head 代码** — 注入结构化数据

**导出方式：**

- 一键复制
- 下载 patch
- 下载 JSON-LD / Markdown / HTML Snippet / React JSX / Next.js / Vue / Nuxt.js / WordPress PHP 版本

### 人工服务（一次性收费）

| 服务 | 价格 |
|------|------|
| Full GEO Optimization | $999 |

---

## 产品定位

"帮助网站变得更容易被 ChatGPT / Claude / Perplexity 引用。"

### 流程

1. **Scan** — 抓首页和核心落地页，识别标题、H1、FAQ、schema、meta、robots、llms.txt 缺失
2. **Diagnose** — 输出 GEO 问题列表，按影响程度排序
3. **Fix** — 生成可复制内容（FAQ Schema、meta description、llms.txt、robots.txt、head 代码）
4. **Export** — 一键复制 / 下载 patch / JSON-LD / Markdown / HTML Snippet / React JSX / Next.js / Vue / Nuxt.js / WordPress PHP

---

## 页面清单

### 首页 `/`

- Hero: "Get Your Site Cited by AI" + "GEO Platform" + "Scan. Diagnose. Fix. Export."
- 输入框：Enter website URL
- CTA：Analyze Site
- Features：AI Visibility Score / Missing Components Scan / Fix Package Generator / Multi-Format Export
- HowItWorks：Scan → Diagnose → Fix → Export
- FAQ Schema（7 Q&A）

### 分析结果页 `/report/[domain]`

- SSR（`maxDuration = 60`）
- AI Visibility Score（圆环）
- 各维度评分 + 缺失组件
- AI 改进建议

### 对比页 `/compare`

- 对比任意两个域名的 GEO 评分

### 对比落地页 `/compare/ahrefs-vs-getciteflow`、`/compare/profound-vs-getciteflow`

- Programmatic SEO 页面

### 定价页 `/pricing`

- Free：$0（每小时 5 次报告）
- Pro：$19/月（Fix Package + 8 格式导出，Coming Soon + Waitlist）
- Enterprise：$999/次（人工全站优化）
- FAQ Schema（5 Q&A）

### Blog `/blog`

内容方向：AI Search / GEO

| 文章 | 路径 |
|------|------|
| What Is GEO | `/blog/what-is-geo` |
| GEO Guide | `/blog/geo-guide` |
| ChatGPT SEO | `/blog/chatgpt-seo` |
| AI Visibility | `/blog/ai-visibility` |
| How to Rank in ChatGPT | `/blog/rank-in-chatgpt` |
| AI Search vs SEO | `/blog/ai-search-vs-seo` |

每篇包含：Metadata、FAQ Schema（部分）、对比表格、Key Takeaways、CTA 卡片

### 案例研究 `/case-studies`

| 案例 | 路径 |
|------|------|
| Nexus Protocol | `/case-studies/nexus-protocol` |
| Notion Strategy | `/case-studies/notion-strategy` |

### Programmatic SEO 页面

| 页面 | 路径 |
|------|------|
| GEO for SaaS | `/geo-for-saas` |
| GEO for AI Tools | `/geo-for-ai-tools` |
| GEO for Startups | `/geo-for-startups` |
| Why ChatGPT Ignores You | `/why-chatgpt-doesnt-mention-your-site` |

### 其他页面

| 页面 | 路径 |
|------|------|
| 隐私政策 | `/privacy-policy` |
| 服务条款 | `/terms-of-service` |

---

## SEO / GEO（必须）

1. **SSR** — Next.js 默认
2. **Metadata** — 每页：title、description、keywords、canonical、og:image、twitter card
3. **Sitemap** — 包含所有页面
4. **robots.txt**
5. **schema.org** — 首页：SoftwareApplication，pricing：FAQPage
6. **llms.txt** — 位于 `/llms.txt`
7. **AI-readable HTML** — 清晰的 heading 结构
8. **Internal Linking** — Blog → Product、Related posts

---

## 核心增长逻辑

- **工具页（/report）** — 带转化
- **Blog** — 带 SEO
- **Programmatic SEO** — 带规模流量
- **分享截图** — 带传播
- **免费报告** — 降低使用门槛

---

## 项目阶段

| 阶段 | 状态 | 内容 |
|------|------|------|
| Phase 1 — MVP | ✅ 完成 | 首页 + 分析功能 + Report 页面 + Compare |
| Phase 2 — 内容增长 | ✅ 完成 | 6 篇 Blog、2 个 Case Studies、4 个 Programmatic SEO 页、定价页 |
| Phase 3 — 付费功能 | 🔄 计划中 | Fix Package 生成、导出功能、Login、支付（Stripe） |
| Phase 4 — 人工服务 | 📋 计划中 | Full GEO Optimization 服务 |
