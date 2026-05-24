# GetCiteFlow — Project Overview

## 项目主题

**GetCiteFlow** 是一个 **Generative Engine Optimization (GEO) 平台**，帮助网站被 AI 搜索引擎（ChatGPT、Claude、Perplexity、Gemini）引用和推荐。

> **核心理念：** 传统的 SEO（关键词、外链、页面速度）并不能转化为 AI 引用。Google 排名与 AI 提及之间的相关性仅有约 0.3。GetCiteFlow 是一个全新的品类——GEO——而非 SEO 工具。

---

## 一句话定位

**"Get Your Site Cited by AI"**

副标题：*GetCiteFlow is a GEO platform that helps websites appear in ChatGPT, Claude, Perplexity, and Gemini answers. Scan. Diagnose. Fix. Export.*

---

## 产品做什么

用户输入任意网站 URL，GetCiteFlow 会扫描该网站并给出 **AI 可见性评分（0-100）**，衡量该网站被 AI 引用的可能性。

### 四步流程

1. **Scan** — 抓首页和核心落地页，检测标题、H1、FAQ、schema、meta、robots、llms.txt 缺失
2. **Diagnose** — 输出 GEO 问题列表，按影响程度排序
3. **Fix** — 生成可复制内容（FAQ Schema、meta description、llms.txt、robots.txt、head 代码）
4. **Export** — 一键复制 / 下载 patch / JSON-LD / Markdown / HTML Snippet / React JSX / Next.js / Vue / Nuxt.js / WordPress PHP

### 免费版检测项

| 检测项 | 说明 |
|--------|------|
| GEO 评分 | AI 可见性综合评分 |
| FAQ 缺失 | 是否缺少 FAQ Schema |
| llms.txt | 是否存在、内容是否完整 |
| robots.txt | 是否允许 AI crawler 抓取 |
| Schema | 结构化数据是否齐全 |
| Entity clarity | 品牌/产品实体定义是否清晰 |
| AI-readable markdown | 内容是否对 AI 爬虫友好 |
| AI summary optimization | 页面摘要是否包含关键信号 |

---

## 定价

| 方案 | 价格 | 功能 |
|------|------|------|
| Free | $0 | 每小时 5 次报告、GEO 评分、分析、建议、可分享报告页面 |
| Pro | $19/月 | 修复包生成 + 导出（Coming Soon + Waitlist） |
| Full GEO Optimization | $999 | 人工服务 — 一次性 |

---

## 目标用户

- **SaaS 公司** — 希望被 AI 推荐的产品
- **AI 工具厂商** — 面临独特 GEO 挑战
- **初创公司** — 需要从第一天建立 AI 可见性
- **内容团队 & 增长营销人员** — 负责品牌可见性
- **B2B 公司** — 处于竞争激烈的品类中

---

## 品牌调性

- **自信但不浮夸** — 数据驱动、分析性、直截了当
- **教育型/权威型** — 将自己定位为 GEO 新品类的思想领袖
- **明确与传统 SEO 区分** — 不断强调 GEO ≠ SEO
- **略带反主流** — "搜索排名不等同于 AI 引用"，"AI 可见性比点击率更有意义"
- **技术但易懂** — 用平实的语言解释 RAG 管道、实体解析等概念
- **对局限性坦诚** — "暂无外链数据库或关键词研究"

---

## 核心文案

### 标签 / 口号

| 位置 | 文案 |
|------|------|
| H1 | Get Your Site **Cited by AI** |
| 英雄区副标题 | GetCiteFlow is a GEO platform that helps websites appear in ChatGPT, Claude, Perplexity, and Gemini answers. **Scan. Diagnose. Fix. Export.** |
| 英雄区 Badge | Generative Engine Optimization Platform |
| 输入框占位符 | Enter website URL (e.g. acme.com) |
| CTA 按钮 | Analyze Site |
| 页脚 | The AI visibility infrastructure for the next generation of the web. |
| 定位 | GEO Platform |

### 功能说明

| 功能卡片 | 文案 |
|----------|------|
| AI Visibility Score | Comprehensive score measuring AI citation potential across major AI systems. |
| Missing Components Scan | Identifies missing GEO signals — FAQ Schema, llms.txt, entity clarity, robots.txt — ranked by impact. |
| Fix Package Generator | Generates deployable fix packages: FAQ Schema JSON-LD, meta descriptions, llms.txt, robots.txt, head code. |
| Multi-Format Export | Export fixes as JSON-LD, Markdown, HTML Snippet, React JSX, Next.js, Vue, Nuxt.js, or WordPress PHP. One-click copy or download. |

### 使用流程

1. **Scan** — Enter any URL, analyze homepage + landing pages for 8 GEO dimensions
2. **Diagnose** — Review prioritized list of missing GEO components
3. **Fix** — Generate ready-to-deploy fix packages
4. **Export** — Copy or download in your framework format

### 定价页面

- **标题:** Start with a Free Report
- **副标题:** No credit card required. Get your AI Visibility Score in seconds.
- **Free:** $0/forever — 每小时 5 次报告
- **Pro:** $19/月（Coming Soon，Waitlist）— 修复包 + 导出
- **FAQ Schema:** 5 个 Q&A

### 对比页面

- **标题:** Compare Your AI Visibility Against Competitors
- **副标题:** Most GEO tools show you a score. GetCiteFlow lets you see exactly where you win and lose.
- 引用数据来自 Princeton GEO Study

### 博客

- **标题:** Insights on AI Visibility
- **副标题:** Strategies for the generative web where citations are the new currency of authority.
- **6 篇文章:** What Is GEO / GEO Guide / ChatGPT SEO / AI Visibility / Rank in ChatGPT / AI Search vs SEO

### 案例研究

- **Nexus Protocol:** "+140% AI Citations in 3 weeks"
- **Notion:** "The Notion GEO Playbook: Dominating Productivity Answers" — 92% AI voice share

---

## 技术栈

| 层 | 技术 |
|----|------|
| 框架 | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| 动画 | Motion (motion/react) |
| AI 引擎 | Google Gemini（默认，`@google/genai`）、OpenAI、Deepseek |
| 缓存 | In-memory Map（1h TTL） |
| 限流 | Upstash Redis（滑动窗口，降级返回 503） |
| 部署 | Vercel（standalone） |
| 字体 | Inter（Geist 备用） |

---

## 页面路由

| 路由 | 类型 | 说明 |
|------|------|------|
| `/` | Static | 首页 |
| `/report/[domain]` | SSR | 分析报告 |
| `/api/compare` | Edge | 分析 API |
| `/api/og` | Edge | OG 图片生成 |
| `/blog` | Static | 博客列表 |
| `/blog/*` | Static | 6 篇博文 |
| `/case-studies` | Static | 案例列表 |
| `/case-studies/*` | Static | 2 个案例 |
| `/compare` | Static | 对比工具 |
| `/compare/*` | Static | 2 个对比落地页 |
| `/geo-for-*` | Static | 3 个垂直页面 |
| `/why-chatgpt-doesnt-mention-your-site` | Static | 问题页面 |
| `/pricing` | Static | 定价页 |
| `/privacy-policy` | Static | 隐私政策 |
| `/terms-of-service` | Static | 服务条款 |

---

## 项目阶段

| 阶段 | 状态 | 内容 |
|------|------|------|
| Phase 1 — MVP | ✅ 完成 | 首页 + 分析功能 + Report 页面 + Compare |
| Phase 2 — 内容增长 | ✅ 完成 | 6 篇 Blog、2 个 Case Studies、Programmatic SEO 页、定价页 |
| Phase 3 — 付费功能 | 🔄 计划中 | Fix Package 生成、导出、Login、Stripe |
| Phase 4 — 人工服务 | 📋 计划中 | Full GEO Optimization |

---

*文档生成日期: 2026-05-24*
