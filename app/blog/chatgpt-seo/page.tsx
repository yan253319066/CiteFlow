'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function ChatGPTSEO() {
  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Strategy</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            Why ChatGPT Doesn't Mention Your SaaS <br />
            <span className="gradient-text">and how to fix it</span>
          </motion.h1>
          
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div>
                <p className="text-sm font-bold">CiteFlow Intelligence</p>
                <p className="text-xs text-muted-foreground">May 10, 2026 • 6 min read</p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <p className="text-xl text-white mb-8 leading-relaxed">
            When you ask ChatGPT for the "best project management tool for creative agencies," it doesn't scan the entire web in real-time. Instead, it relies on complex weights, internalized entities, and specific attention maps.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Attribution Gap</h2>
          <p className="mb-6 leading-relaxed">
            Many founders assume that high SEO rankings naturally lead to AI mentions. This is a critical misconception. While SEO focuses on user intent and domain authority, GEO (Generative Engine Optimization) focuses on <strong>Entity Association</strong>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Models Ignore You</h2>
          <p className="mb-6 leading-relaxed">
            If your brand name is generic or frequently used in other contexts (Polysemy), the model's confidence in your entity "Uniqueness" drops. To be mentioned, you must establish a "Non-Colliding" name space and clear semantic clusters.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl my-10">
            <h3 className="text-lg font-bold text-white mb-4">Tactical Fix: Semantic Clustering</h3>
            <p className="text-sm">
              Stop writing generic blog posts. Start creating "Definition Pillars." These are pages that establish your brand as the definitive answer for specific, niche technical definitions. By anchoring your brand to a niche concept, you increase the probability of being the cited authority when that concept is queried.
            </p>
          </div>

          <p className="mb-10 leading-relaxed">
            In our next update, we'll explore how <strong>Semantic Headers</strong> can influence the weight distribution in Gemini's long-context window.
          </p>
        </div>
      </article>
    </main>
  );
}
