# GetCiteFlow

**Slogan:** Get Mentioned by AI

**定位:** AI Visibility Platform

> 不是 SEO 工具。

---

## 技术栈（最终确定）

### 前端 + 服务端

**Next.js 15（App Router）**

原因：SSR、SEO、GEO、Metadata、Blog、Programmatic SEO、AI SaaS 生态 — 全最强。

### UI

**TailwindCSS + shadcn/ui**

原因：AI SaaS 默认组合，做高级感很快。

### AI

**OpenAI API** — 先：GPT-4o-mini

### 数据库（第二阶段）

**Supabase**

### 部署

**Vercel** — 第一阶段直接用。别折腾 CF。

---

## 网站风格（非常重要）

**参考：** Vercel、Linear、Perplexity

**风格：** 极简 AI SaaS

- **背景颜色：** `#050816`（黑色）
- **主色（蓝紫渐变）：** `#6E7BFF` → `#8B5CF6`

**一定要：** 大标题、卡片、渐变、Glow、大留白

---

## 整体开发阶段

### 第一阶段（7天内）

**目标：** "上线 MVP" — 不要登录、不要支付、不要数据库。

#### 第一阶段页面

##### 1. 首页（最重要）

**路径：** `/`

- **Hero 标题：** Get Mentioned by AI
- **副标题：** Analyze and optimize your website for ChatGPT, Gemini and AI Search.
- **输入框：** Enter your website URL
- **按钮：** Analyze Site

**首页下面 — 展示：** GEO Score Card

| 项目 | 分数 |
|------|------|
| AI Visibility | 72 |
| FAQ Coverage | 41 |
| Entity Clarity | 88 |

##### 2. 分析结果页

**路径：** `/analyze` 或 `/report/[domain]`

**页面布局：**
- **左边：** 评分
- **右边：** 问题列表

**核心模块：**

- **GEO Score** — 大圆环（AI Visibility）
- **Missing Components** — 例如：No FAQ Schema、Weak semantic entities、No comparison content
- **AI Suggestions** — 例如：Add FAQ section、Create comparison pages、Add llms.txt

#### 第一阶段 SEO（非常重要）

1. **SSR** — Next.js 默认
2. **Metadata** — 每页：title、description、open graph、twitter card
3. **Sitemap**
4. **robots.txt**
5. **schema.org** — 首页：SoftwareApplication

#### 第一阶段 GEO（必须）

1. **llms.txt** — 这个很关键
2. **AI-readable HTML** — 不要全 div
3. **清晰 heading**
4. **FAQ schema**

---

### 第二阶段（第 2~3 周）

**目标：** "开始 SEO/GEO 流量" — 这是最关键阶段。

#### Blog + Programmatic SEO

##### 3. Blog 系统

**路径：** `/blog`

**内容方向（非常重要）：** 你只写 AI Search/GEO

**第一批文章：**

| 文章 | 路径 |
|------|------|
| GEO Guide | `/blog/geo-guide` |
| ChatGPT SEO | `/blog/chatgpt-seo` |
| AI Visibility | `/blog/ai-visibility` |
| How to Rank in ChatGPT | `/blog/rank-in-chatgpt` |

**技术方案：** MDX — Next.js 最适合。

**Blog 页面设计：** 参考 Vercel Blog、Linear Blog

**Blog SEO（非常关键）：** 每篇：Metadata、FAQ schema、TOC、Open Graph、Internal Linking

#### Programmatic SEO（核心增长）

这个是你后面流量来源。你会生成大量页面，例如：

- **GEO Landing Pages:** `/geo-for-saas`、`/geo-for-ai-tools`、`/geo-for-startups`
- **Comparison Pages:** `/compare/ahrefs-vs-getciteflow`、`/compare/profound-vs-getciteflow`
- **Problem Pages:** `/why-chatgpt-doesnt-mention-your-site`

这些页面：对 SEO/GEO 非常强。

---

### 第三阶段（第 2 个月）

**目标：** "真正 SaaS 化"

- **登录：** Clerk/Auth.js
- **数据库：** Supabase
- **功能：** 历史报告、收藏、限额
- **支付：** Stripe

---

### 第四阶段（后期）

**目标：** GEO Copilot — AI 自动修复

例如：自动生成 FAQ、Comparison page、AI snippets、GEO blocks

---

## 动态内容页（你必须做）

这是 Next.js 最大优势。例如：

- **Report 页面：** `/report/notion-so`
- **Tool Pages：** `/tools/geo-checker`
- **Blog Pages：** `/blog/chatgpt-seo`

### SSR（必须）

因为 GEO 产品自己必须 SEO/GEO 强。

**为什么 SSR 很重要：** AI crawler 更喜欢首屏就有内容。Next.js App Router 非常适合。

---

## Metadata（非常关键）

你未来 80% 流量来自 SEO/GEO。每页必须：

- title
- description
- keywords
- canonical
- og:image
- twitter card

你后面一定要做：**动态 Metadata** — 例如：GetCiteFlow Report for Notion

---

## 国际化（重点）

- **第一阶段：** 不做。只做英文。目标用户是海外 AI SaaS，英文内容对 GEO 更重要。
- **第二阶段：** 再做 i18n，支持 English + 中文。但 URL 必须英文（例如 `/blog/chatgpt-seo`），不要中文 URL。

---

## 你的核心增长逻辑（非常重要）

- **工具页** — 带转化
- **Blog** — 带 SEO
- **Programmatic SEO** — 带规模流量
- **分享截图** — 带传播

---

## 最后给你一个真正重要的建议

> 你现在不要想着 "做完整 GEO 平台"。你现在真正应该做的是：**"AI 时代的 Website Grader"**。这才是最适合独立开发者冷启动的。
