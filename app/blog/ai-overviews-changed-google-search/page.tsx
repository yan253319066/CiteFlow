'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AI Overviews Changed Google Search",
  description: "AI Overviews reduced organic CTR by 15-25% for informational queries. Google's retrieval architecture differs fundamentally from ChatGPT — brands must optimize for both.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-overviews-changed-google-search&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-overviews-changed-google-search" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Overviews Google", item: "https://www.getciteflow.ai/blog/ai-overviews-changed-google-search" },
  ],
};

export default function AiOverviews() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Analysis</Badge>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            How AI Overviews Changed <span className="gradient-text">Google Search</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 5 min read</p></div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">AI Overviews reduced organic CTR by 15-25% for informational queries</strong> — the SERP answers the question, users do not click through.</li>
              <li><strong className="text-white">Google uses a fundamentally different architecture from ChatGPT</strong> — Google = search index + PageRank + E-E-A-T + LLM synthesis. ChatGPT = RAG pipeline + open web + entity clarity.</li>
              <li><strong className="text-white">Domain authority still matters in AI Overviews</strong> — unlike ChatGPT, Google's AI Overviews inherit existing ranking signals.</li>
              <li><strong className="text-white">Optimize for both architectures simultaneously</strong> — the winning content strategy is strong traditional SEO plus strong entity signals.</li>
              <li><strong className="text-white">Zero-click search is accelerating</strong> — being the cited entity in the overview is the only way to capture value.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            AI Overviews represent Google's entry into generative search. Unlike GPT-based retrieval engines, AI Overviews sit on top of Google's existing search index. This architectural difference has significant implications for citation strategy.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Architecture Difference</h2>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Google AI Overviews</strong> use Google's index with PageRank, domain authority, backlinks, and E-E-A-T signals. <strong className="text-white">ChatGPT/Perplexity/Claude</strong> use RAG pipeline with vector retrieval and information gain re-ranking. A high-DR page with weak entity clarity wins in AI Overviews. A low-DR page with strong entity clarity wins in ChatGPT. Different mechanisms require different optimizations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Implications by Authority Level</h2>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">High-authority domains:</strong> AI Overviews are favorable. Traditional SEO signals transfer directly. Add entity definition and schema for maximum impact. <strong className="text-white">Low-authority domains:</strong> Focus on GEO-first strategies — ChatGPT, Perplexity, Claude — where entity clarity outweighs domain authority.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Zero-Click Acceleration</h2>
          <p className="mb-6 leading-relaxed">
            AI Overviews accelerate zero-click search. For informational queries, Google answers directly in SERP. The only value for cited brands is the citation itself — brand awareness, entity reinforcement, and authority signaling.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Check Your AI Overviews Presence</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow tracks citations across both Google AI Overviews and independent LLM platforms — giving you a complete picture of your generative search presence.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Get Your Free AI Visibility Scan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
