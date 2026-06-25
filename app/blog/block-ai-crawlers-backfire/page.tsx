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
  headline: "Why Blocking AI Crawlers Can Backfire",
  description: "The critical distinction between crawl and train. Brands that block all AI crawlers lose citations entirely, creating a citation vacuum for competitors.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/block-ai-crawlers-backfire&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/block-ai-crawlers-backfire" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "Block AI Crawlers", item: "https://www.getciteflow.ai/blog/block-ai-crawlers-backfire" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between crawl and train?",
      acceptedAnswer: { "@type": "Answer", text: "Crawling is retrieving content to answer a user query (citation). Training is using content to improve the model. Brands should allow crawling for citations but block training for IP protection — most crawler ecosystems support this distinction." }
    },
    {
      "@type": "Question",
      "name": "What happens if I block all AI crawlers?",
      acceptedAnswer: { "@type": "Answer", text: "If a crawler cannot access your page, the model cannot retrieve it. Zero crawl access equals zero citations. If your competitor permits crawling, a citation vacuum forms — the model cites them instead of you for the same queries." }
    },
    {
      "@type": "Question",
      name: "How do I allow crawling but prevent training?",
      acceptedAnswer: { "@type": "Answer", text: "For OpenAI: allow GPTBot (citation retrieval), block ChatGPT-User (training). For Google: Google-Extended controls both training and Gemini citations. Consult each provider's crawl-no-training documentation." }
    },
    {
      "@type": "Question",
      name: "Is robots.txt or llms.txt more effective for AI crawler management?",
      acceptedAnswer: { "@type": "Answer", text: "llms.txt is more precise. It specifies which pages AI crawlers should prioritize rather than blanket-allow or blanket-block. Use robots.txt for the crawl-no-training distinction and llms.txt for page-level prioritization." }
    }
  ]
};

export default function BlockAiCrawlers() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Strategy</Badge>
          <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Why Blocking AI Crawlers <span className="gradient-text">Can Backfire</span>
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
              <li><strong className="text-white">Crawl vs. train is the critical distinction</strong> — allow crawling for citations, block training for IP protection. Most brands conflate the two.</li>
              <li><strong className="text-white">Zero crawl access equals zero citations</strong> — if a crawler cannot access your page, the model cannot retrieve it in the RAG pipeline.</li>
              <li><strong className="text-white">The citation vacuum</strong> — if you block crawlers and competitors do not, the model cites competitors instead of you for the same queries.</li>
              <li><strong className="text-white">llms.txt is more precise than robots.txt</strong> — use it to specify page-level priorities rather than blanket allow/block rules.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            The instinct to block AI crawlers is understandable — concerns about IP, training data, and loss of content control are legitimate. But blocking all crawlers is strategically wrong for brands that want AI visibility.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Crawl vs. Train: The Critical Distinction</h2>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Crawling</strong> retrieves content to answer a user query — the mechanism for citations. <strong className="text-white">Training</strong> uses content to improve the model. Most brands want to allow crawling (citations) but prevent training (IP protection). Both major crawler ecosystems support this distinction.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Configure Crawl-No-Training</h2>
          <p className="mb-6 leading-relaxed">
            For <strong className="text-white">GPTBot</strong>: allow GPTBot for citation retrieval, block ChatGPT-User for training. For <strong className="text-white">Google-Extended</strong>: blocking it prevents both Google AI citations and Gemini training. For <strong className="text-white">PerplexityBot</strong>: blocking removes your content from Perplexity results entirely. Article 7 covers the complete configuration.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Citation Vacuum</h2>
          <p className="mb-6 leading-relaxed">
            If you block all AI crawlers and your competitor does not, a citation vacuum forms. The model retrieves your competitor's content, cites your competitor, and never encounters your brand. The competitive advantage accrues entirely to the brand that permits crawling.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Check Your Crawler Configuration</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow scans your robots.txt and llms.txt to verify your crawl-no-training configuration is correctly set up for each AI crawler.
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
