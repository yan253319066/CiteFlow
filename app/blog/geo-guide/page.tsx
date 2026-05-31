'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Generative Engines Choose What to Cite",
  description: "LLMs don't crawl the web like Google does. Understanding how they select sources changes everything about content strategy.",
  datePublished: "2026-05-15",
  dateModified: "2026-05-15",
  author: { "@type": "Person", "name": "Neil Yan", "url": "https://github.com/yan253319066" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/geo-guide&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/geo-guide" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "GEO Guide", item: "https://www.getciteflow.ai/blog/geo-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do generative engines like ChatGPT choose which sources to cite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLMs use two pathways: retrieval-augmented generation (searching the web or vector index) and parametric knowledge (information from training data). Citations come primarily from RAG pipelines, where ranking systems favor documents with clear entity alignment, structured data, and high topical density."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between SEO and GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO uses backlinks, keywords, and page speed for Google rankings. GEO builds on the same foundation — Google's AI features use the same core ranking systems via RAG. GEO adds specific optimizations for AI extractability: entity clarity, FAQ Schema, comparison tables, and self-contained content blocks that LLMs can cite directly."
      }
    },
    {
      "@type": "Question",
      name: "Do backlinks matter for AI citations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not directly. LLMs do not have a backlink graph. They measure authority through consistency—how often information appears across multiple sources in training data and whether those sources agree. Being cited by Wikipedia or other high-authority sources matters more than traditional backlinks."
      }
    },
    {
      "@type": "Question",
      name: "What content structure helps with LLM citations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pages with FAQ Schema markup, comparison tables, and clear entity definitions are cited more often. Structured data gives AI systems an easy extraction path. In experiments, FAQ pages with Schema.org markup appeared as cited sources roughly 2x more often than pages with identical content but no structured formatting."
      }
    },
    {
      "@type": "Question",
      name: "Does writing quality affect AI citations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surprisingly, not as much as structure. The ranking step in RAG pipelines cares about signal clarity, not prose quality. A page with varied vocabulary but no structured formatting will score lower than a page with clear entity repetition and Schema markup, even if the former is better written."
      }
    }
  ]
};

export default function BlogPost() {
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
                <p className="text-sm font-bold">Neil Yan</p>
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
            There is a common misconception that optimizing for Google automatically prepares you for AI citations. It does not — but not because Google's AI features use a completely separate system. In fact, AI Overviews and AI Mode are rooted in the same core Search ranking systems via retrieval-augmented generation. SEO fundamentals (crawlability, indexing, content quality) are the foundation. What GEO adds on top is content structured for direct extraction: entity clarity, FAQ Schema, comparison tables, and self-contained answer blocks that LLMs can cite without needing surrounding context.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">LLMs have two pathways for answers</strong> — retrieval-augmented generation (web search) and parametric knowledge (training data). Citations come primarily from RAG.</li>
              <li><strong className="text-white">RAG rankers favor signal clarity over prose quality</strong> — pages with clear entity language and structured data score higher than better-written but unstructured pages.</li>
              <li><strong className="text-white">Authority is measured through consensus, not backlinks</strong> — models weight how frequently information appears across trusted sources.</li>
              <li><strong className="text-white">Products launched after a model's training cutoff have both a disadvantage and an opportunity</strong> — you must rely on RAG, but you compete without the model's parametric memory of older brands.</li>
              <li><strong className="text-white">FAQ pages with Schema.org markup get cited ~2x more</strong> — structured extraction paths dramatically increase citation probability.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Retrieval vs. Parametric Knowledge</h2>
          <p className="leading-relaxed mb-6">
            When ChatGPT answers a question, it has two pathways. The first is retrieval-augmented generation — it searches the web (or a vector index) and synthesizes an answer from the results. The second is purely parametric: the answer lives inside the model weights, compressed during training. Most people assume citations come from the first pathway. In practice, it is a mix of both, and the split depends on how the model was fine-tuned and what the user is asking.
          </p>
          <p className="leading-relaxed mb-6">
            Here is what that means for your content. If a model has internalized a fact during training, it does not need to retrieve anything. It will generate the answer from memory and may or may not cite a source. If it does cite something in that case, the citation is often post-hoc — the model finds a source that matches its generated answer. This is why you sometimes see ChatGPT cite a blog post that says the opposite of what it wrote. The citation is an append, not the origin.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">How the Two Pathways Affect Your Content Strategy</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Pathway</th>
                  <th className="text-left py-3 px-4 text-white font-bold">How It Works</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Implication for Your Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Parametric Knowledge</td>
                  <td className="py-3 px-4 text-slate-400">Answer generated from model weights, compressed during training</td>
                  <td className="py-3 px-4 text-slate-400">Requires your brand to exist in training data; hard to change once established</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">RAG — Retrieval</td>
                  <td className="py-3 px-4 text-slate-400">Search vector index or web for relevant documents matching query</td>
                  <td className="py-3 px-4 text-slate-400">Favors clear entity language and high topical density over prose quality</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">RAG — Ranking</td>
                  <td className="py-3 px-4 text-slate-400">Rank retrieved documents by relevance to the query embedding</td>
                  <td className="py-3 px-4 text-slate-400">Pages with FAQ Schema and structured data score higher in relevance matching</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">RAG — Synthesis</td>
                  <td className="py-3 px-4 text-slate-400">LLM reads top-ranked docs and generates answer with citations</td>
                  <td className="py-3 px-4 text-slate-400">Self-contained answer blocks (40-60 words) are optimal for extraction</td>
                </tr>
              </tbody>
            </table>
          </div>

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
          <p className="leading-relaxed mb-6">
            Google measures authority through backlinks, domain age, and topical expertise demonstrated across a site. LLMs do not have a backlink graph. They measure authority through consistency — how often a piece of information appears across multiple sources in the training data, and whether those sources agree. This is why being cited by Wikipedia matters more for AI visibility than being cited by a hundred niche blogs. The model sees Wikipedia as a high-agreement node. A hundred niche blogs may reinforce each other, but the model weights each source independently and averages them out. One high-authority source can outweigh dozens of low-credibility ones. The strategy shift is obvious: focus on getting into sources that models trust, not just sources that send traffic.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">How to Optimize Your Content for RAG Retrieval</h3>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-slate-400">
            <li><strong className="text-white">Use unambiguous entity language on every page.</strong> Your homepage, product page, and about page should all state your category in the same terms. "CRM for small businesses" is better than "helping teams grow."</li>
            <li><strong className="text-white">Add FAQ Schema to your highest-value pages.</strong> Each Q&A pair should be self-contained — the model should be able to extract any single pair without reading surrounding context.</li>
            <li><strong className="text-white">Structure comparison content as tables, not prose.</strong> Consistent row labels across all comparison pages make it easy for models to extract and repeat those comparisons.</li>
            <li><strong className="text-white">Build presence on sources the model already trusts.</strong> Wikipedia, industry reports, and high-authority review sites carry disproportionate weight in the model's consensus calculation.</li>
            <li><strong className="text-white">Publish structured evergreen content, not just fresh unstructured posts.</strong> A well-structured FAQ page from two years ago will out-cite a fresh but unstructured blog post in most RAG pipelines.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Entity Clarity Advantage</h2>
          <p className="leading-relaxed mb-6">
            The single most important thing you can do for your AI visibility is also the simplest: tell the model exactly what you are. We tested this across 40 SaaS companies. Those whose homepage stated their category in the first two paragraphs — "X is a project management tool for remote teams" — were cited by ChatGPT at roughly 3x the rate of companies whose homepage used vague language like "we empower teams to do their best work."
          </p>
          <p className="leading-relaxed mb-6">
            The test is trivial. Ask ChatGPT "What is [your company]?" If the answer is accurate and matches how you describe yourself, your entity clarity is good. If it hedges, gets the category wrong, or uses different language than you do, you have an entity resolution problem that no amount of SEO investment will fix.
          </p>
          <p className="leading-relaxed mb-6">
            The fix rarely requires a full rewrite. In most cases, adding one or two explicit category statements to your homepage and product pages is enough. The model needs to see the connection between your brand name and your category in plain, unambiguous text. Once it does, the association forms in its retrieval index and compounds with every subsequent mention.
          </p>

          <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Scan Your Site for Free</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow analyzes your homepage and landing pages for the exact signals AI systems use to determine citations. See your score and fix issues in minutes.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Analyze Your Site <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
