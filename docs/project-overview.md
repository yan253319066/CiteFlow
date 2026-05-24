# GetCiteFlow — Project Overview

## 项目主题

**GetCiteFlow** 是一个 **AI 可见性（GEO）平台**，专注于帮助网站被 AI 搜索引擎（如 ChatGPT、Gemini、Perplexity）引用和推荐。

> **核心理念：** 传统的 SEO（关键词、外链、页面速度）并不能转化为 AI 引用。Google 排名与 AI 提及之间的相关性仅有约 0.3。GetCiteFlow 是一个全新的品类——Generative Engine Optimization（GEO）——而非 SEO 工具。

---

## 一句话定位

**"Get Mentioned by AI"**

副标题：*Analyze and optimize your website for ChatGPT, Gemini and AI Search.*

---

## 产品做什么

用户输入任意网站 URL，GetCiteFlow 会扫描该网站并给出一个 **AI 可见性评分（0-100）**，衡量该网站在 AI 搜索引擎中被引用的可能性。评分基于四个维度：

| 维度 | 说明 |
|------|------|
| **AI Visibility** | 网站在 AI 系统中的整体可见性 |
| **FAQ Coverage** | FAQ 内容和 Schema 标记的覆盖程度 |
| **Entity Clarity** | 品牌和产品的实体定义清晰度 |
| **Authority** | 网站权威信号 |

输出包括：总体评分、各维度细分、缺失组件检测、以及 AI 生成的优化建议。同时支持**两个域名对比**，以及生成**可分享的报告页面**。

---

## 目标用户

- **SaaS 公司** — 希望被 AI 推荐的产品
- **AI 工具厂商** — 面临独特 GEO 挑战（AI 模型可能不推荐竞争产品）
- **初创公司** — 需要从第一天建立 AI 可见性
- **内容团队 & 增长营销人员** — 负责品牌可见性
- **B2B 公司** — 处于竞争激烈的品类中

---

## 品牌调性

- **自信但不浮夸** — 数据驱动、分析性、直截了当
- **教育型/权威型** — 将自己定位为 GEO 新品类的思想领袖
- **明确与传统 SEO 区分** — 不断强调 GEO ≠ SEO
- **略带反主流** — "搜索排名不等同于 AI 引用"，"AI 可见性比点击率更有意义"
- **技术但易懂** — 用平实的语言解释 RAG 管道、实体解析等复杂概念
- **对局限性坦诚** — "暂无外链数据库或关键词研究"——早期阶段产品的透明态度

---

## 核心文案

### 标签 / 口号

| 位置 | 文案 |
|------|------|
| 主标语 | Get Mentioned by AI |
| 英雄区副标题 | Analyze and optimize your website for ChatGPT, Gemini and AI Search. |
| 页脚 | The AI visibility infrastructure for the next generation of the web. |
| 页脚 | Built for teams who want to stay relevant in the age of LLMs. |
| 定位 | AI Visibility Platform |

### 英雄区

- **Badge:** GEO Report 2026
- **输入框占位符:** Enter website URL (e.g. acme.com)
- **CTA 按钮:** Analyze Site

### 功能说明

| 功能卡片 | 文案 |
|----------|------|
| AI Visibility Score | Get a comprehensive score measuring how well your website is positioned for AI citation in ChatGPT, Perplexity, and Gemini. |
| Entity Clarity Analysis | Evaluate how clearly your brand and value proposition are defined for AI systems that need to resolve what you are before citing you. |
| FAQ Coverage Check | Identify missing FAQ content and Schema markup that could increase your chances of appearing in AI-powered search results. |
| Actionable Recommendations | Receive specific, prioritized suggestions to improve your content structure for better AI visibility and citation rates. |

### 使用流程

1. **Enter Your Website URL** — Simply type in any website URL you want to analyze.
2. **AI Analyzes Your Content** — Our algorithms evaluate your content structure, entity clarity, FAQ coverage, Schema markup...
3. **Get Your AI Visibility Score** — Receive a detailed report with your AI Visibility Score, specific strengths to leverage, and actionable recommendations.

### 定价页面

- **标题:** Start with a Free Report
- **副标题:** No credit card required. Get your AI Visibility Score in seconds.
- **Free 计划:** $0/forever — 无限 GEO 报告、评分、分析、建议、可分享报告页面
- **Pro 计划:** TBD（Coming Soon，可加入 Waitlist）— 多平台引用追踪、品牌提及提醒、竞品分析、定时监控、API 访问、PDF 导出、团队协作

### 对比页面（Compare）

- **标题:** Compare Your AI Visibility Against Competitors
- **副标题:** Most GEO tools show you a score. GetCiteFlow lets you see exactly where you win and lose — side by side with any competitor.
- **引用数据:** ~33% 的 AI 引用来自对比内容（Princeton GEO Study）；结构化对比可使引用增加 140%

### 博客

- **标题:** Insights on AI Visibility
- **副标题:** Strategies for the generative web where citations are the new currency of authority.
- **文章主题:** AI 如何选择引用源、搜索排名与 AI 引用的脱节、为什么 AI 可见性比点击率更有意义、如何被 ChatGPT 引用

### 案例研究

- **Nexus Protocol:** "+140% AI Citations in 3 weeks" — DeFi 协议通过对比页面、FAQ 和 llms.txt 重新获得 AI 可见性
- **Notion:** "The Notion GEO Playbook: Dominating Productivity Answers" — 在 92% 的 AI 生产力推荐中排第一

---

## 技术栈

| 层 | 技术 |
|----|------|
| 框架 | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| 动画 | Motion (motion/react) |
| AI 引擎 | Google Gemini（默认）、OpenAI、Deepseek |
| 限流 | Upstash Redis |
| 部署 | Vercel |
| 字体 | Inter |

---

## 项目阶段

| 阶段 | 状态 | 内容 |
|------|------|------|
| Phase 1 — MVP | ✅ 完成 | 首页 + 分析功能 + 报告页面 |
| Phase 2 — 内容增长 | 🔄 进行中 | 博客、程序化 SEO 页面、案例研究 |
| Phase 3 — 真正的 SaaS | 📋 计划中 | 登录系统、数据库、历史记录、支付 |
| Phase 4 — GEO Copilot | 🔮 愿景 | 自动内容修复、自动生成 FAQ/对比页面/AI 摘要 |

---

*文档生成日期: 2026-05-24*
