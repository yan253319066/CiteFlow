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

        <div className="prose prose-invert prose-primary max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Generative Engine Optimization (GEO) is the new SEO. As Large Language Models like ChatGPT, Gemini, and Perplexity become the primary gateway to information, the way we think about "ranking" must fundamentally change.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What is AI Visibility?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unlike traditional search engines that return a list of links, AI engines synthesize information into a single response. AI Visibility measures the frequency and prominence with which your brand, product, or content is mentioned within these synthesis patterns.
          </p>

          <div className="p-8 glass rounded-3xl my-12">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Strategy: Semantic Clarity
            </h3>
            <p className="text-sm text-muted-foreground">
              Ensure your website uses clear schema.org markers. LLMs use these structured data points as absolute signals of truth. Without them, your content is just unstructured text that's harder for the model to attribute.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">How LLMs "Cite" Sources</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            LLMs don't just pick the most popular site; they pick the most relevant entity within the search context. This means creating content that fits into the "Knowledge Graph" of the topic you're targeting.
          </p>
        </div>
      </article>
    </main>
  );
}
