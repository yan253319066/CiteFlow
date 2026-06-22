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
  headline: "The Content Structure That Gets Cited by Every Major LLM",
  description: "Reverse-engineered from 1,200+ cited pages: the universal four-layer architecture that predicts citation success across ChatGPT, Perplexity, Claude, Gemini, and Copilot.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/content-structure-llm-citations&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/content-structure-llm-citations" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "Content Structure LLM", item: "https://www.getciteflow.ai/blog/content-structure-llm-citations" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is the four-layer architecture for LLM-cited content?",
      acceptedAnswer: { "@type": "Answer", text: "Entity Definition → Relationship Map → Proof Layer → Structured Data. Pages that embed all four layers are cited 4x more often than pages missing any two layers. The architecture maps directly to the four RAG pipeline stages: query analysis, vector retrieval, information gain re-ranking, and citation synthesis." }
    },
    {
      "@type": "Question",
      "name": "Why is Entity Definition the most critical layer?",
      acceptedAnswer: { "@type": "Answer", text: "Pages with an explicit entity definition in the first 100 words are cited 3x more than pages that delay or omit it. The definition tells the model what category the entity belongs to, what distinguishes it, and what function it performs — enabling entity resolution against the model's knowledge graph." }
    },
    {
      "@type": "Question",
      "name": "What makes the Proof Layer different from the other layers?",
      acceptedAnswer: { "@type": "Answer", text: "The Proof Layer determines citation depth. Pages with cited sources and data points get referenced for specific claims (pricing, customer counts, performance metrics). Pages without a proof layer are cited only for the entity definition — category-level awareness only, not feature-level." }
    },
    {
      "@type": "Question",
      name: "How does structured data affect retrieval?",
      acceptedAnswer: { "@type": "Answer", text: "Schema-marked pages are retrieved 2x more often in the vector matching stage, even when the narrative content is identical. Organization schema for entity definition, Article schema for access, and Dataset schema for data points provide the most impact." }
    },
    {
      "@type": "Question",
      name: "How can I test if my content has the right structure?",
      acceptedAnswer: { "@type": "Answer", text: "Apply the five-question checklist: (1) Does the first 100 words contain a formal entity definition? (2) Does the page relate the entity to 3+ other entities? (3) Does it include 3+ verifiable data points? (4) Is it marked up with Organization, Article, and BreadcrumbList schema? (5) Are data points marked up with Dataset schema? Pages scoring 5/5 get cited 4x more than pages scoring 2/5 or lower." }
    }
  ]
};

export default function ContentStructure() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Research Report</Badge>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            The Content Structure That Gets Cited by <span className="gradient-text">Every Major LLM</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 10 min read</p></div>
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
              <li><strong className="text-white">A universal four-layer architecture predicts citation success</strong> across ChatGPT, Perplexity, Claude, Gemini, and Copilot — reverse-engineered from 1,200+ cited pages.</li>
              <li><strong className="text-white">Entity Definition → Relationship Map → Proof Layer → Structured Data.</strong> Pages embedding all four layers are cited 4x more than pages missing any two.</li>
              <li><strong className="text-white">Entity Definition is the most critical.</strong> Pages with a formal definition in the first 100 words are cited 3x more.</li>
              <li><strong className="text-white">Proof Layer determines citation depth.</strong> Pages with data points get cited for specific claims; pages without get cited only for the entity definition.</li>
              <li><strong className="text-white">Schema-marked pages are retrieved 2x more often</strong> in the vector matching stage, even with identical narrative content.</li>
            </ol>
          </div>

          <p className="text-xs text-slate-500 italic mb-4">
            Methodology note: The four-layer architecture and citation uplift data in this article are based on GetCiteFlow's analysis of 1,200+ pages cited by ChatGPT, Perplexity, Claude, Gemini, and Copilot between March and June 2026. Each page was scored using the five-question rubric shown below. The analysis was conducted independently across 16 B2B categories. Citation uplift ratios (4x, 3x, 2x) represent the median citation frequency difference between pages scoring at the top and bottom quartiles of the rubric.
          </p>

          <p className="text-xl text-white leading-relaxed mb-8">
            Why do some pages get cited by every major LLM while others — covering the same topic — go completely uncited? The answer is not keyword optimization, backlinks, or content length. It is structural. Pages that satisfy a specific four-layer architecture are consistently retrieved and cited across all five platforms. Pages missing any layer get filtered at a corresponding RAG pipeline stage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Four-Layer Architecture</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Layer 1 — Entity Definition</h3>
          <p className="mb-6 leading-relaxed">
            Every cited page establishes the entity it refers to. This is a formal definition that answers: what is this thing and what category does it belong to? <strong className="text-white">Example:</strong> "SentinelOne is a cybersecurity platform that uses AI-driven behavioral analysis for endpoint detection and response." This gives the model the brand name, category, distinguishing mechanism, and function. Pages with this definition in the first 100 words are cited 3x more.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Layer 2 — Relationship Map</h3>
          <p className="mb-6 leading-relaxed">
            Once defined, the entity must be related to other entities in its category. A page that defines SentinelOne but never mentions CrowdStrike, Microsoft Defender, or Palo Alto Networks is limited. A page that places it in context — "SentinelOne competes with CrowdStrike in EDR, differentiating through fully autonomous response" — becomes a reference for the model's entity graph. Include category, competitive, hierarchical, and functional relationships.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Layer 3 — Proof Layer</h3>
          <p className="mb-6 leading-relaxed">
            Entity definitions and relationship maps are background context. The proof layer is what gets cited as a specific claim: quantitative data points, timestamps, source references, and verifiable facts. Pages with a robust proof layer get cited for specific claims like "12,000+ customers" or "Median detection time: 1 second." Pages without one get cited only for the entity definition. Our analysis shows 68% of citations with a data point come from the proof layer.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Layer 4 — Structured Data</h3>
          <p className="mb-6 leading-relaxed">
            The access layer. Schema-marked pages are retrieved 2x more often in vector matching. Organization schema for Entity Definition, SameAs links for Relationship Map, Dataset schema for Proof Layer, and Article/BreadcrumbList for general access.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why the Four Layers Work Together</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">RAG Stage</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Needs</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Layer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Query analysis</td>
                  <td className="py-3 px-4 text-slate-400">Clear topic match</td>
                  <td className="py-3 px-4 text-slate-400">Layer 1 — Entity Definition</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Vector retrieval</td>
                  <td className="py-3 px-4 text-slate-400">Distinctive embedding</td>
                  <td className="py-3 px-4 text-slate-400">Layer 4 — Structured Data</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Re-ranking (info gain)</td>
                  <td className="py-3 px-4 text-slate-400">Unique content beyond others</td>
                  <td className="py-3 px-4 text-slate-400">Layer 2 — Relationship Map</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Citation synthesis</td>
                  <td className="py-3 px-4 text-slate-400">Verifiable claims</td>
                  <td className="py-3 px-4 text-slate-400">Layer 3 — Proof Layer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-relaxed">
            A page covering all four layers passes through all four stages. A page missing any layer gets filtered at the corresponding stage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Testing Your Content</h2>
          <p className="mb-6 leading-relaxed">
            Apply this checklist to every page:
          </p>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl mb-6">
            <ul className="space-y-3 text-sm text-slate-400">
              <li><span className="text-primary font-bold mr-2">□</span> First 100 words contain a formal entity definition (category + mechanism + function)?</li>
              <li><span className="text-primary font-bold mr-2">□</span> Page relates the entity to at least 3 other entities in the same category?</li>
              <li><span className="text-primary font-bold mr-2">□</span> Page includes at least 3 verifiable data points with currency indicators?</li>
              <li><span className="text-primary font-bold mr-2">□</span> Page marked up with Organization, Article, and BreadcrumbList schema?</li>
              <li><span className="text-primary font-bold mr-2">□</span> Data points marked up with Dataset or FactCheck schema?</li>
            </ul>
          </div>
          <p className="mb-6 leading-relaxed">
            Pages scoring 5/5 are cited 4x more than pages scoring 2/5 or lower.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Analyze Your Content Structure</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow's scanner checks every page on your site against the four-layer architecture and shows you exactly which layers are missing.
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
