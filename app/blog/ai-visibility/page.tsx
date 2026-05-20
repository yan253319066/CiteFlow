'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Visibility Is a Better Metric Than CTR",
  description: "CTR is fading as the primary metric. AI visibility — how often your brand is cited in LLM outputs — is the replacement.",
  datePublished: "2026-05-05",
  author: { "@type": "Organization", name: "CiteFlow Editorial" },
  publisher: { "@type": "Organization", name: "CiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility Metric" },
  ],
};

export default function AIVisibility() {
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

        <header className="mb-12 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Concepts</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            AI Visibility Is<br />
            <span className="gradient-text">a Better Metric Than CTR</span>
          </motion.h1>
        </header>

        <div className="prose prose-invert text-slate-400 max-w-none">
          <p className="text-xl text-white mb-8 leading-relaxed">
            CTR has been the default metric for content performance for twenty years. It made sense when the primary interface for information was a list of blue links. That interface is fading, and CTR is fading with it. But the industry has been slow to adopt a replacement. AI visibility — the frequency and sentiment with which a brand is cited in LLM outputs — is that replacement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What CTR Actually Measures Now</h2>
          <p className="mb-6 leading-relaxed">
            A click tells you someone saw your link and decided to visit. It does not tell you whether they converted, whether they remembered your brand, or whether they would recommend you to someone else. In a world where Google SGE and Perplexity show answers directly on the results page, a declining CTR may not mean declining influence. It may mean the AI is answering the question directly and crediting you as the source. That is arguably better than a click — the user got the answer with your brand attached, and you did not have to pay for the visit.
          </p>
          <p className="mb-6 leading-relaxed">
            The problem is that most analytics tools treat the absence of a click as a failure. They do not track citations. They do not measure whether your brand was surfaced in a Perplexity response or a ChatGPT thread. So marketers optimize for what they can measure — clicks — and in doing so, optimize for a world that no longer exists.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Defining AI Visibility</h2>
          <p className="mb-6 leading-relaxed">
            AI visibility has two components that matter. The first is citation frequency — how often your brand appears as a named source in AI-generated answers. The second is citation sentiment — when you are mentioned, is it favorable, neutral, or negative? A brand that gets mentioned five times in a negative context has worse AI visibility than a brand mentioned twice positively.
          </p>
          <p className="mb-6 leading-relaxed">
            Citation frequency can be tracked by running a set of category-defining queries across multiple models and recording which sources appear. Do this weekly. Over time, you will see which content investments actually move the needle and which ones only improve your Google rankings without affecting your AI presence. In our experience, the two lists diverge more than most teams expect.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Strategic Shift</h2>
          <p className="mb-10 leading-relaxed">
            If you accept AI visibility as a primary metric, the tactical implications follow. You stop writing content purely for click-through and start writing content that models find citable. That means structured data, clear entity definitions, comparison pages, and authoritative external references. It also means accepting that some of your best-performing content by AI visibility may generate near-zero clicks. That is fine. The user who receives an AI answer citing your brand and then searches for you directly is worth more than the user who clicked a random blog post and bounced. You just need a different dashboard to see it.
          </p>
        </div>
      </article>
    </main>
  );
}
