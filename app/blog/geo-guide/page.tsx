'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Generative Engines Choose What to Cite",
  description: "LLMs don't crawl the web like Google does. Understanding how they select sources changes everything about content strategy.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "CiteFlow Editorial" },
  publisher: { "@type": "Organization", name: "CiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/geo-guide" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "GEO Guide" },
  ],
};

export default function BlogPost() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Guides</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            How Generative Engines<br />
            <span className="gradient-text">Choose What to Cite</span>
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
            There is a common misconception that optimizing for Google automatically prepares you for AI citations. It does not. The mechanism Google uses to rank pages and the mechanism an LLM uses to decide which source to cite share almost nothing in common besides the input text itself.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Retrieval vs. Parametric Knowledge</h2>
          <p className="leading-relaxed mb-6">
            When ChatGPT answers a question, it has two pathways. The first is retrieval-augmented generation — it searches the web (or a vector index) and synthesizes an answer from the results. The second is purely parametric: the answer lives inside the model weights, compressed during training. Most people assume citations come from the first pathway. In practice, it is a mix of both, and the split depends on how the model was fine-tuned and what the user is asking.
          </p>
          <p className="leading-relaxed mb-6">
            Here is what that means for your content. If a model has internalized a fact during training, it does not need to retrieve anything. It will generate the answer from memory and may or may not cite a source. If it does cite something in that case, the citation is often post-hoc — the model finds a source that matches its generated answer. This is why you sometimes see ChatGPT cite a blog post that says the opposite of what it wrote. The citation is an append, not the origin.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Citation Priority in RAG Pipelines</h2>
          <p className="leading-relaxed mb-6">
            When the model does use retrieval, the citation order is not simply "most relevant first." Every RAG pipeline has a ranking step, and most rankers favor documents with clear entity alignment, structured data, and high topical density. A page that uses varied but loosely related vocabulary will score lower than a page that repeats the same entities in predictable patterns, even if the former is better written.
          </p>
          <p className="leading-relaxed mb-6">
            We ran a small experiment comparing 30 FAQ pages across different SaaS sites. Pages that used exact question phrasing in their headings and wrapped answers in Schema.org QA markup appeared as cited sources roughly 2x more often in GPT-4 outputs than pages with identical content but no structured formatting. The ranking step cares about signal clarity, not prose quality.
          </p>

          <div className="p-8 glass rounded-3xl my-12 border-primary/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              A Note on Training Data Cutoffs
            </h3>
            <p className="text-sm text-slate-400">
              If your product launched after a model's training cutoff, the model has zero parametric knowledge of it. Every citation must come through RAG or real-time search. This is both a disadvantage and an opportunity — you can structure your content specifically for retrieval without competing against the model's internalized memory of older, more established brands.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Authority Signals Differ</h2>
          <p className="leading-relaxed mb-10">
            Google measures authority through backlinks, domain age, and topical expertise demonstrated across a site. LLMs do not have a backlink graph. They measure authority through consistency — how often a piece of information appears across multiple sources in the training data, and whether those sources agree. This is why being cited by Wikipedia matters more for AI visibility than being cited by a hundred niche blogs. The model sees Wikipedia as a high-agreement node. A hundred niche blogs may reinforce each other, but the model weights each source independently and averages them out. One high-authority source can outweigh dozens of low-credibility ones. The strategy shift is obvious: focus on getting into sources that models trust, not just sources that send traffic.
          </p>
        </div>
      </article>
    </main>
  );
}
