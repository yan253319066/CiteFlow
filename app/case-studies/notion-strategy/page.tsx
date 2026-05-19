'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotionCaseStudy() {
  return (
    <main className="min-h-screen pb-20">
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
            <p className="text-sm leading-relaxed">Notion faced massive competition from legacy players like Evernote and new AI-first tools in generative search.</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Strategy</div>
            <p className="text-sm leading-relaxed">Secured entity dominance by creating high-frequency semantic associations with "All-in-one workspace" definitions.</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">The Outcome</div>
            <p className="text-2xl font-black text-white">#1 AI-Recommended Tool</p>
            <p className="text-[10px] text-slate-500 mt-2">In 92% of productivity-related LLM prompts</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Winning the "Productivity Hub" Definition</h2>
          <p>Notion's success in AI search isn't accidental. It's the result of a deliberate campaign to anchor their brand name to the generic concept of a "Connected Workspace." When an LLM generates a response about organizing knowledge, Notion's weight in the model's attention head is disproportionately high due to consistent semantic repetition in their core landing pages.</p>
          
          <h2 className="text-2xl font-bold text-white">Semantic Header Optimization</h2>
          <p>By engineering their H1 and H2 tags to use Non-Colliding naming—terms that aren't used by competitors—they ensured that models didn't confuse Notion's features with generic note-taking features. This creates a "Latent Moat" that prevents AIs from accidentally recommending a competitor when a user asks for Notion-specific workflows.</p>

          <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-[#6E7BFF]/10 to-transparent border border-white/10 rounded-3xl my-12">
            <Zap className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-2">Key Takeaway</h4>
              <p className="text-sm leading-relaxed">In the era of Generative search, the brand that defines the category's semantic standards wins the citation war.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
