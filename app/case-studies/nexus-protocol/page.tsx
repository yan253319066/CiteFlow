'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function CaseStudyDetail() {
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
            <Badge className="bg-primary/10 text-primary border-none">DeFi / Web3</Badge>
            <span className="text-slate-500">•</span>
            <span className="text-sm font-medium text-slate-400">8 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            How Nexus Protocol <br />
            <span className="gradient-text">Increased AI Citations by 140%</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Challenge</div>
            <p className="text-sm leading-relaxed">Despite high SEO authority, Nexus was invisible in ChatGPT "best yield protocol" queries due to semantic fragmentation.</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Solution</div>
            <p className="text-sm leading-relaxed">Implemented a "Semantic Entity Anchor" strategy, mapping complex product features to pre-existing model weights.</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">The Result</div>
            <p className="text-2xl font-black text-white">+140% Citation Frequency</p>
            <p className="text-[10px] text-slate-500 mt-2">Verified via CiteFlow Monitoring Dashboard</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Strategy 01: Eliminating Semantic Ambiguity</h2>
          <p>We redefined Nexus's core value proposition in machine-readable clusters. LLMs often experience polysemy collisions in technical fields. By injecting high-density FAQ schema and entity markers into the root docs, we ensured that the models "locked" Nexus as the primary entity for yield security definitions.</p>
          
          <h2 className="text-2xl font-bold text-white">Strategy 02: Comparative Latent Mapping</h2>
          <p>AIs don't just show links; they evaluate. We built landing pages specifically designed for LLMs to use during "cross-protocol comparison" queries. These pages utilized structured markdown tables with high-contrast comparison markers, making it nearly impossible for the model to "hallucinate" the competitor as superior in key categories.</p>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 italic">"The transition from search ranking to model citation changed our cost-per-acquisition overnight. We're now the default answer for thousands of AI users."</h3>
            <p className="text-sm font-bold">— Head of Growth, Nexus Protocol</p>
          </div>
        </div>
      </article>
    </main>
  );
}
