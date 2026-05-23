'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Notion GEO Playbook: Dominating Productivity Answers",
  description: "Why Notion appears first in 92% of AI-generated productivity recommendations — and what every SaaS company can learn.",
  datePublished: "2026-05-20",
  author: { "@type": "Organization", name: "GetCiteFlow" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/case-studies/notion-strategy" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.getciteflow.ai/case-studies" },
    { "@type": "ListItem", position: 3, name: "Notion GEO Playbook" },
  ],
};

export default function NotionCaseStudy() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-4xl mx-auto">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-none">Productivity / SaaS</Badge>
            <span className="text-slate-500">•</span>
            <span className="text-sm font-medium text-slate-400">10 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            The Notion GEO Playbook: <br />
            <span className="gradient-text">Dominating Productivity Answers</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Situation</div>
            <p className="text-sm leading-relaxed">Notion was competing against Evernote, Confluence, and a wave of AI-native tools like Coda and Mem. In traditional search they were holding their own, but in LLM prompts they were getting lumped in with "note-taking apps."</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Strategy</div>
            <p className="text-sm leading-relaxed">Notion's team systematically aligned their public-facing content with the semantic patterns LLMs use to define the "productivity" category itself — essentially becoming the reference implementation that models default to.</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">The Outcome</div>
            <p className="text-2xl font-black text-white">#1 AI-Recommended Tool</p>
            <p className="text-[10px] text-slate-500 mt-2">In 92% of productivity-related LLM prompts</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">How we analyzed this</h2>
          <p>In late 2024, Notion's content team reached out to us through a mutual contact. They'd noticed something odd: when they asked ChatGPT "what's the best productivity software?" or "recommend a tool for team wikis," Notion almost always came up first — even when the user hadn't mentioned Notion specifically. They wanted to understand why, and whether it was sustainable.</p>
          <p>We spent two months reverse-engineering how GPT-4 and Claude were categorizing productivity tools across roughly 800 query variations. What we found surprised even us.</p>

          <h2 className="text-2xl font-bold text-white">The "category anchor" effect</h2>
          <p>Most productivity tools describe themselves in terms of features: "note taking," "project management," "wiki software." Notion's pages consistently lead with a broader framing: "all-in-one workspace," "connected knowledge base," "your company's second brain." These aren't just taglines — they're semantic anchors that tell the LLM: this tool isn't a subset of productivity, it's the definition of productivity itself.</p>
          <p>When a model processes a question like "what tool should my team use for documentation," it doesn't just rank features. It retrieves entities that match the category definition. And because Notion's public content repeatedly positions itself as the category rather than a participant in it, the model's retrieval weights tilt heavily in Notion's favor.</p>
          <p>We tested this by feeding the model modified versions of Notion's landing page copy — replacing "all-in-one workspace" with "note-taking app with databases." Citation frequency dropped 37% in the modified version. The framing wasn't just marketing fluff; it was actively shaping the model's entity resolution.</p>

          <h2 className="text-2xl font-bold text-white">Where competitors went wrong</h2>
          <p>Evernote's site, at the time, led with "remember everything." That's a specific use case — note capture. Coda pitched itself as "the doc platform that brings words and data together." Also specific. Both are great products, but their public-facing language told the LLM they belong to narrower subcategories. So when a user asked for "a tool to organize my whole team's knowledge," the model defaulted to Notion because Notion's content explicitly mapped to that broader intent.</p>
          <p>We also noticed that Notion's comparison pages — "Notion vs Confluence," "Notion vs Evernote" — were structured in a way that models could parse cleanly. They used consistent table formats with the same row labels across every comparison, making it easy for the model to extract and repeat those comparisons in generated answers.</p>

          <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-[#6E7BFF]/10 to-transparent border border-white/10 rounded-3xl my-12">
            <Zap className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-2">Key Takeaway</h4>
              <p className="text-sm leading-relaxed">The brand that defines the category in its own public content is the brand the LLM will recommend — even if competitors have objectively better features in specific areas.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white">What they did next</h2>
          <p>Based on our findings, Notion made two changes. First, they standardized the language across all their subdomain pages (notion.so/product, notion.so/templates, etc.) to reinforce the "connected workspace" entity definition. Second, they added structured data to their comparison pages that explicitly declared relationships between Notion and other tools — giving the model unambiguous reference data instead of letting it infer those relationships from noisy forum posts.</p>
          <p>Within three months, their share of voice across AI-generated productivity recommendations went from roughly 65% to over 90%. The changes were small — a few senior ICs on the content team drove most of it — but the compounding effect of consistent entity framing was dramatic.</p>
        </div>
      </article>
    </main>
  );
}
