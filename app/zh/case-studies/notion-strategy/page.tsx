'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Notion GEO 策略：主导生产力领域 AI 回答',
  description: '为何 Notion 在 92% 的 AI 生成生产力推荐中排名第一——以及每家 SaaS 公司能学到什么。',
  datePublished: '2026-05-20',
  dateModified: '2026-05-20',
  author: { '@type': 'Person', 'name': 'Neil Yan', 'url': 'https://github.com/yan253319066' },
  publisher: { '@type': 'Organization', name: 'GetCiteFlow', url: 'https://www.getciteflow.ai' },
  image: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies/notion-strategy&score=75&locale=zh',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.getciteflow.ai/zh/case-studies/notion-strategy' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.getciteflow.ai/zh' },
    { '@type': 'ListItem', position: 2, name: '案例研究', item: 'https://www.getciteflow.ai/zh/case-studies' },
    { '@type': 'ListItem', position: 3, name: 'Notion GEO 策略' },
  ],
};

export default function ZhNotionCaseStudy() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-4xl mx-auto">
        <Link href="/zh/case-studies" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          返回案例研究
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-none">生产力 / SaaS</Badge>
            <span className="text-slate-500">&bull;</span>
            <span className="text-sm font-medium text-slate-400">阅读时间 10 分钟</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Notion GEO 策略：<br />
            <span className="gradient-text">主导生产力领域 AI 回答</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">背景</div>
            <p className="text-sm leading-relaxed">Notion 当时与 Evernote、Confluence 以及 Coda、Mem 等 AI 原生工具竞争。在传统搜索中它们表现尚可，但在 LLM 提示中它们被笼统归类为"笔记应用"。</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">策略</div>
            <p className="text-sm leading-relaxed">Notion 团队系统地将其公开内容与 LLM 用于定义"生产力"类别的语义模式对齐——本质上成为了模型默认指向的参考实现。</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">成果</div>
            <p className="text-2xl font-black text-white">#1 AI 推荐工具</p>
            <p className="text-[10px] text-slate-500 mt-2">在 92% 的生产力相关 LLM 提示中排名第一</p>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            关键结果一览
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-white font-bold">指标</th>
                  <th className="text-left py-3 px-4 text-white font-bold">之前</th>
                  <th className="text-left py-3 px-4 text-white font-bold">之后（3 个月）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">AI 声量占比（生产力领域）</td>
                  <td className="py-3 px-4 text-slate-400">约 65% 的 AI 推荐</td>
                  <td className="py-3 px-4 text-slate-400">92% 的 AI 推荐</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">类别定义影响</td>
                  <td className="py-3 px-4 text-slate-400">"一体化工作空间"（定义类别）</td>
                  <td className="py-3 px-4 text-slate-400">"笔记应用"会降低 37% 的引用</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-white font-semibold">AI 推荐排名</td>
                  <td className="py-3 px-4 text-slate-400">#1（但定义不一致）</td>
                  <td className="py-3 px-4 text-slate-400">#1 在 92% 的提示中（主导）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">我们如何分析</h2>
          <p>2024 年底，Notion 的内容团队通过共同联系人联系了我们。他们注意到一件奇怪的事：当询问 ChatGPT"最好的生产力软件是什么？"或"推荐一个团队维基工具"时，Notion 几乎总是排名第一——即使用户没有特别提到 Notion。他们想了解原因，以及这种情况是否可持续。</p>
          <p>我们花了两个月逆向工程 GPT-4 和 Claude 如何在大约 800 种查询变体中分类生产力工具。结果连我们自己都感到惊讶。</p>

          <h2 className="text-2xl font-bold text-white">"类别锚点"效应</h2>
          <p>大多数生产力工具用功能来描述自己："笔记"、"项目管理"、"维基软件"。Notion 的页面始终以更广阔的框架开头："一体化工作空间"、"连接的知识库"、"你公司的第二大脑"。这些不仅仅是标语——它们是语义锚点，告诉 LLM：这个工具不是生产力的子集，而是生产力本身的定义。</p>
          <p>当模型处理如"我的团队应该用什么工具做文档"这样的问题时，它不只是对功能进行排名。它会检索匹配类别定义的实体。由于 Notion 的公开内容反复将自己定位为这个类别而非参与者，模型的检索权重会大幅倾向 Notion。</p>
          <p>我们通过向模型提供 Notion 落地页文案的修改版本进行了测试——将"一体化工作空间"替换为"带数据库的笔记应用"。引用频率下降了 37%。这个框架不只是营销话术；它正在积极塑造模型的实体解析。</p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">产品</th>
                  <th className="text-left py-3 px-4 text-white font-bold">公开框架</th>
                  <th className="text-left py-3 px-4 text-white font-bold">LLM 类别分配</th>
                  <th className="text-left py-3 px-4 text-white font-bold">引用结果</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Notion</td>
                  <td className="py-3 px-4 text-slate-400">"一体化工作空间"、"连接的知识库"</td>
                  <td className="py-3 px-4 text-slate-400">生产力（广泛类别）</td>
                  <td className="py-3 px-4 text-primary font-bold">92% AI 推荐占比</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Evernote</td>
                  <td className="py-3 px-4 text-slate-400">"记住一切"</td>
                  <td className="py-3 px-4 text-slate-400">笔记（狭窄子类别）</td>
                  <td className="py-3 px-4 text-slate-400">仅在笔记类查询中被引用</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Coda</td>
                  <td className="py-3 px-4 text-slate-400">"融合文本和数据的文档平台"</td>
                  <td className="py-3 px-4 text-slate-400">文档（狭窄子类别）</td>
                  <td className="py-3 px-4 text-slate-400">仅在文档类查询中被引用</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white">竞争对手错在哪里</h2>
          <p>Evernote 的网站当时以"记住一切"为主导。这是一个特定用例——笔记捕捉。Coda 将自己定位为"融合文本和数据的文档平台"。同样具体。两者都是优秀的产品，但它们的公开语言告诉 LLM 它们属于更狭窄的子类别。所以当用户问"一个组织整个团队知识的工具"时，模型默认选择了 Notion，因为 Notion 的内容明确映射到了那个更广泛的意图。</p>
          <p>我们还注意到 Notion 的对比页面——"Notion vs Confluence"、"Notion vs Evernote"——结构清晰，便于模型解析。它们在每个对比中使用一致的表格格式和相同的行标签，使模型能够轻松提取并在生成的回答中重复这些对比。</p>

          <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-[#6E7BFF]/10 to-transparent border border-white/10 rounded-3xl my-12">
            <Zap className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-2">关键收获</h4>
              <p className="text-sm leading-relaxed">在自己的公开内容中定义类别的品牌，就是 LLM 会推荐的品牌——即使竞争对手在特定领域有客观上更好的功能。</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white">他们接下来做了什么</h2>
          <p>基于我们的发现，Notion 做了两项修改。首先，他们标准化了所有子域名页面（notion.so/product、notion.so/templates 等）的语言，强化了"连接的工作空间"的实体定义。其次，他们在对比页面添加了结构化数据，明确声明 Notion 与其他工具之间的关系——为模型提供了无歧义的参考数据，而不是让它从嘈杂的论坛帖子中推断这些关系。</p>
          <p>三个月内，他们在 AI 生成的生产力推荐中的声量占比从约 65% 提高到了 90% 以上。这些变化很小——内容团队中的几位资深贡献者推动了大部分工作——但一致实体框架的复利效应是巨大的。</p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">从 Notion 策略中可操作的教训</h3>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-slate-400">
            <li><strong className="text-white">以定义类别的框架为主导，而非功能列表。</strong>"一体化工作空间"胜过"带数据库的笔记"因为它告诉模型这是广泛类别，而非狭窄功能。</li>
            <li><strong className="text-white">在每个公开页面上标准化该框架。</strong>Notion 在产品页面、模板和博客中一致使用"连接的工作空间"——重复强化了实体映射。</li>
            <li><strong className="text-white">用一致的行标签构建对比页面。</strong>当每个对比使用相同格式时，模型可以在不同查询上下文中提取和重复这些对比。</li>
            <li><strong className="text-white">明确声明实体关系。</strong>Notion 在对比页面添加了结构化数据，告诉模型 Notion 如何与其他工具关联，而不是让模型从嘈杂的论坛帖子推断。</li>
            <li><strong className="text-white">小团队可以驱动超大的 GEO 成果。</strong>Notion 的变更由几位资深贡献者推动，而非专门的 AI SEO 团队。一致的框架会快速复利。</li>
          </ol>
        </div>
      </article>
    </main>
  );
}
