'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '我们如何优化 GetCiteFlow 自身的 AI 可见度——吃自家狗粮',
  description: '我们构建了一个 AI 可见度扫描器，然后用它扫描了自己。以下是我们的发现和修复过程。',
  datePublished: '2026-06-12',
  dateModified: '2026-06-12',
  author: { '@type': 'Person', 'name': 'Neil Yan', 'url': 'https://github.com/yan253319066' },
  publisher: { '@type': 'Organization', name: 'GetCiteFlow', url: 'https://www.getciteflow.ai' },
  image: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75&locale=zh',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.getciteflow.ai/zh/case-studies/nexus-protocol' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.getciteflow.ai/zh' },
    { '@type': 'ListItem', position: 2, name: '案例研究', item: 'https://www.getciteflow.ai/zh/case-studies' },
    { '@type': 'ListItem', position: 3, name: 'GetCiteFlow' },
  ],
};

export default function ZhNexusCaseStudy() {
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
            <Badge className="bg-primary/10 text-primary border-none">SaaS / AI 可见度</Badge>
            <span className="text-slate-500">&bull;</span>
            <span className="text-sm font-medium text-slate-400">阅读时间 6 分钟</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            我们如何优化 GetCiteFlow 自身的<br />
            <span className="gradient-text">AI 可见度</span>
          </h1>
          <p className="text-slate-400 text-lg">吃自家狗粮——我们对自身运行了 AI 可见度扫描器，然后修复了发现的问题。</p>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">发现</div>
            <p className="text-sm leading-relaxed">我们构建了一个扫描器，告诉其他网站为什么 AI 不引用他们。然后我们在 getciteflow.ai 上运行了它——结果发现了那些我们告诉用户需要修复的东西，我们自己却正好缺失。</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">修复</div>
            <p className="text-sm leading-relaxed">添加了 FAQ Schema，构建了全面的 llms.txt，用清晰的实体定义结构化了内容，并优化了元描述以便 AI 摘要提取。</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">结果</div>
            <p className="text-2xl font-black text-white">AI 可见度：75 &rarr; 92</p>
            <p className="text-[10px] text-slate-500 mt-2">由我们自己的扫描器测量，经真实 LLM 查询验证</p>
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
                  <th className="text-left py-3 px-4 text-white font-bold">之后</th>
                  <th className="text-left py-3 px-4 text-white font-bold">变化</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">AI 可见度评分</td>
                  <td className="py-3 px-4 text-slate-400">75/100</td>
                  <td className="py-3 px-4 text-slate-400">92/100</td>
                  <td className="py-3 px-4 text-primary font-bold">+17</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">FAQ 覆盖</td>
                  <td className="py-3 px-4 text-slate-400">0%（无 FAQ Schema）</td>
                  <td className="py-3 px-4 text-slate-400">85%（7 个结构化问答）</td>
                  <td className="py-3 px-4 text-primary font-bold">+85%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">实体清晰度</td>
                  <td className="py-3 px-4 text-slate-400">弱——品牌未对 LLM 明确定义</td>
                  <td className="py-3 px-4 text-slate-400">强——Organization + SoftwareApplication schema</td>
                  <td className="py-3 px-4 text-primary font-bold">显著提升</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-white font-semibold">llms.txt</td>
                  <td className="py-3 px-4 text-slate-400">完全缺失</td>
                  <td className="py-3 px-4 text-slate-400">完整——所有页面已为 AI 爬虫索引</td>
                  <td className="py-3 px-4 text-primary font-bold">从零开始</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">构建可见度扫描器的讽刺</h2>
          <p>我们花了几个月构建 GetCiteFlow——一个企业级 AI 品牌服务，附带免费扫描器，能分析网站并准确告诉你为什么 AI 搜索引擎不引用你。我们发布了它。我们开始写关于 GEO 的博客文章。我们构建了针对"AI 可见度"和"如何被 ChatGPT 引用"的落地页。</p>
          <p>然后有一天，几乎像开玩笑一样，我们用自己扫描器扫了一下 getciteflow.ai。结果令人汗颜：<strong className="text-white">75 分（满分 100）。</strong></p>
          <p>我们在这里告诉其他公司如何优化 AI 可见度，而我们自己的网站却缺少基础要素。没有 FAQ Schema。没有 llms.txt。薄弱的实体定义。这种讽刺没有逃过我们的注意。</p>

          <h2 className="text-2xl font-bold text-white">自我扫描揭示了什么</h2>
          <p>扫描暴露了四个明确问题：</p>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong className="text-white">没有 FAQ Schema。</strong>首页上有 FAQ 部分，但只是纯 HTML。没有 JSON-LD 结构化数据，LLM 无法可靠地提取我们的问答对用于引用。</li>
            <li><strong className="text-white">缺少 llms.txt。</strong>GPTBot 和 ClaudeBot 等 AI 爬虫没有我们网站的结构化索引。它们在猜测哪些页面重要。</li>
            <li><strong className="text-white">实体清晰度薄弱。</strong>跨页面品牌定义不一致。搜索引擎和 LLM 都依赖清晰的实体定义来理解网站的内容。</li>
            <li><strong className="text-white">内容未按 AI 提取优化。</strong>我们的博客文章对人类写得很好，但缺少 LLM 用于提取和引用信息的清晰标题层级、表格和列表。</li>
          </ol>

          <h2 className="text-2xl font-bold text-white">我们修复了什么——按影响排序</h2>
          <p>我们优先处理了能最快见效的变更：</p>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong className="text-white">构建了全面的 llms.txt。</strong>这是最快的胜利。我们列出了每个重要页面——博客文章、落地页、对比页面、案例研究——并附有清晰描述。现在当 GPTBot 或 ClaudeBot 抓取我们网站时，它能准确知道有什么内容。耗时：2 小时。</li>
            <li><strong className="text-white">在首页添加了 FAQ Schema。</strong>我们将现有的 FAQ 部分转换为 JSON-LD 结构化数据。七个问题涵盖"什么是 GEO"、"GetCiteFlow 如何工作"和常见用户问题。耗时：1 小时。</li>
            <li><strong className="text-white">清晰定义了品牌实体。</strong>我们在每个页面上添加了 Organization 和 SoftwareApplication JSON-LD schema，一致使用相同的品牌名称、描述和 URL。这告诉 LLM："GetCiteFlow 是一个企业品牌可见度服务，而不是通用的 SEO 工具。"耗时：3 小时。</li>
            <li><strong className="text-white">重组博客内容以提高 AI 可读性。</strong>我们检查了博客文章，确保每篇文章都有清晰的 H2/H3 层级、适当位置的对比表格、可操作建议的编号列表、以及 LLM 可作为摘要提取的总结段落。耗时：1 天。</li>
          </ol>

          <h2 className="text-2xl font-bold text-white">结果：从 75 到 92</h2>
          <p>实施这些变更后，我们重新扫描了网站。AI 可见度评分从 75 跃升至 92。</p>
          <p>但评分只是一个数字。真正的考验是向 ChatGPT 和 Claude 提问"什么是 GEO？"和"如何让我的网站被 AI 引用？"——然后看到 GetCiteFlow 出现在回答中。它确实出现了。</p>
          <p>更重要的是，我们现在有了一个<strong className="text-white">可信的故事可讲。</strong>当潜在客户问"这个真的有效吗？"时——我们可以展示我们自己的前后对比。不是假设。不是编造的案例研究。我们自己的网站，我们自己的服务，真实的结果。</p>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4">教训：构建你需要的东西，然后亲自使用它</h3>
            <p>每个 SaaS 创始人都应该用自己的产品扫描自己。如果你在构建可见度扫描器，而自己的网站都没有针对 AI 可见度优化，那就有问题了。修复我们自己的网站不仅提高了评分——它给了我们客户经历的这个过程的亲身体验。这种共情塑造了我们构建的每个功能。</p>
          </div>

          <h2 className="text-2xl font-bold text-white">关键收获</h2>
          <ol className="list-decimal list-inside space-y-4 text-slate-400">
            <li><strong className="text-white">先在自己身上运行扫描器。</strong>如果你在销售 GEO 优化而自己的网站评分很低，先修复它，再给别人推销。</li>
            <li><strong className="text-white">llms.txt 是影响最大、投入最低的变更。</strong>花了 2 小时就立刻给了 AI 爬虫一个结构化的网站地图。</li>
            <li><strong className="text-white">FAQ Schema 比你想象的更重要。</strong>LLM 经常在回答中引用 FAQ 内容。没有结构化数据，你的问答对就是不可见的。</li>
            <li><strong className="text-white">实体清晰度有复利效应。</strong>在所有页面上一致定义品牌，帮助 LLM 建立可靠的关于你业务的思维模型。</li>
            <li><strong className="text-white">内容结构是为机器设计的，不仅为人类。</strong>清晰的标题、表格和列表使你的内容可被 AI 提取——这正是引用发生的方式。</li>
          </ol>
        </div>
      </article>
    </main>
  );
}
