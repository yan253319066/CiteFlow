'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function BlogPost() {
  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Guides</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            The Ultimate Guide to GEO: <br />
            <span className="gradient-text">Generative Engine Optimization</span>
          </motion.h1>
          
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary" />
              <div>
                <p className="text-sm font-bold">CiteFlow Editorial</p>
                <p className="text-xs text-muted-foreground">May 15, 2026 • 8 min read</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-white transition-colors"><Bookmark className="w-5 h-5" /></button>
              <button className="text-muted-foreground hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <p className="text-xl text-white leading-relaxed mb-8">
            生成式引擎优化（GEO）不再是简单的关键词匹配，而是一场关于“语义权威”的博弈。当 ChatGPT 或 Perplexity 面对一个查询时，它们不是在搜索网页，而是在检索已经内化在其参数中的知识库。
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">从索引到内化的转变</h2>
          <p className="leading-relaxed mb-6">
            传统的 SEO 依赖于爬虫发现 URL。而 GEO 依赖于模型对实体的理解。如果你的品牌在模型的训练数据中缺乏明确的、结构化的关联，那么即使你在 Google 排名第一，在 AI 的回答中你也可能只是“有一家知名的供应商”或干脆被忽略。
          </p>

          <div className="p-8 glass rounded-3xl my-12 border-primary/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              核心公式：权重 = 权威性 × 语义距离
            </h3>
            <p className="text-sm text-slate-400">
              LLM 更倾向于引用那些在上下文向量中距离问题“最近”的答案。通过优化 Schema 标记和建立清晰的实体逻辑表述，你可以人为缩小品牌与核心问题之间的语义距离。
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">引用的逻辑：事实性还是权威性？</h2>
          <p className="leading-relaxed mb-10">
            模型在生成回答时会进行“自洽性检查”。我们的策略是利用这种机制，通过在多个可信来源（包括文档、第三方评测和结构化字段）中重复一致的语义特征，提高模型采用你作为事实来源的置信度。
          </p>
        </div>
      </article>
    </main>
  );
}
