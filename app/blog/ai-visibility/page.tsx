'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function AIVisibility() {
  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Concepts</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            AI Visibility: <br />
            <span className="gradient-text">The Metric for the Next Decades</span>
          </motion.h1>
        </header>

        <div className="prose prose-invert text-slate-400 max-w-none">
          <p className="text-xl text-white mb-8 leading-relaxed">
            Traditional Click-Through Rate (CTR) is a dying metric. In a zero-click world powered by LLMs, "AI Visibility" is the only metric that truly measures long-term brand relevance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Zero-Click Reality</h2>
          <p className="mb-6 leading-relaxed">
            As Google Search Generative Experience (SGE) and Perplexity capture more top-of-funnel traffic, the direct website visit is becoming rare. However, brand influence is higher than ever. If an AI recommends your product as the best solution, the purchase intent is significantly higher even if the initial touchpoint didn't result in a "click."
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Measuring Visibility</h2>
          <p className="mb-10 leading-relaxed">
            How do you measure something that isn't a click? We look at <strong>Citation Density</strong> and <strong>Sentiment Valence</strong> within model outputs. Being mentioned is step one; being mentioned as a positive, reliable authority is the real win. CiteFlow's AI Visibility Score is designed to track these non-linear influence markers across all major foundational models.
          </p>
        </div>
      </article>
    </main>
  );
}
