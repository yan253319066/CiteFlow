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
  headline: "AI Visibility Is a Better Metric Than CTR",
  description: "CTR is fading as the primary metric. AI visibility — how often your brand is cited in LLM outputs — is the replacement.",
  datePublished: "2026-05-05",
  dateModified: "2026-05-05",
  author: { "@type": "Person", "name": "Neil Yan", "url": "https://github.com/yan253319066" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility Metric", item: "https://www.getciteflow.ai/blog/ai-visibility" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is AI visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI visibility is the frequency and sentiment with which a brand is cited in LLM outputs like ChatGPT, Perplexity, and Gemini. It has two components: citation frequency (how often you appear) and citation sentiment (whether mentions are positive, neutral, or negative)."
      }
    },
    {
      "@type": "Question",
      "name": "Why is CTR no longer a reliable metric?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CTR measures clicks on blue links, but AI Overviews and generative answers increasingly satisfy queries without requiring a click. A declining CTR may actually mean growing influence if your brand is being cited in AI answers. CTR cannot capture this type of brand exposure."
      }
    },
    {
      "@type": "Question",
      "name": "How do I track AI visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Run a set of 10-20 category-defining queries across ChatGPT, Perplexity, and Gemini weekly. Record whether your brand appears, in what position, and with what sentiment. A simple spreadsheet is sufficient to start seeing trends within 60-90 days."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI-referred traffic valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Users who arrive after seeing your brand cited in an AI answer already trust you — the model vouched for you. In our early data, AI-referred visitors had session durations roughly 40% longer and page views 30% higher than organic search visitors."
      }
    },
    {
      "@type": "Question",
      "name": "Should I optimize for clicks or citations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, but with an increasing focus on citations as generative search grows. Content optimized for AI visibility — structured data, entity clarity, comparison pages — may generate near-zero clicks but builds lasting brand presence in AI answers that compounds over time."
      }
    }
  ]
};

export default function AIVisibility() {
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
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">CTR is a fading metric</strong> — as AI Overviews and generative answers absorb queries, declining CTR may mean growing influence, not failure.</li>
              <li><strong className="text-white">AI visibility has two components</strong> — citation frequency (how often you're mentioned) and citation sentiment (whether it's positive or negative).</li>
              <li><strong className="text-white">Most analytics tools cannot track citations</strong> — they measure clicks, not whether your brand was surfaced in AI responses.</li>
              <li><strong className="text-white">Content optimized for AI visibility often generates near-zero clicks</strong> — and that is fine, because AI-referred users convert at higher rates.</li>
              <li><strong className="text-white">Track citation frequency weekly across ChatGPT, Perplexity, and Gemini</strong> — a simple spreadsheet is enough to see which content investments actually move the needle.</li>
            </ol>
          </div>

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

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Metric</th>
                  <th className="text-left py-3 px-4 text-white font-bold">What It Measures</th>
                  <th className="text-left py-3 px-4 text-white font-bold">What It Misses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">CTR</td>
                  <td className="py-3 px-4 text-slate-400">Percentage of searchers who click your link</td>
                  <td className="py-3 px-4 text-slate-400">Does not capture brand exposure via AI citations, does not track user who arrives after seeing your brand in an AI answer</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Organic Traffic</td>
                  <td className="py-3 px-4 text-slate-400">Total visitors from search engines</td>
                  <td className="py-3 px-4 text-slate-400">Declining as AI Overviews absorb queries; hides the growth of AI-referred traffic</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Keyword Rankings</td>
                  <td className="py-3 px-4 text-slate-400">Position in Google search results</td>
                  <td className="py-3 px-4 text-slate-400">Irrelevant for AI citations; a #1 ranking does not guarantee AI visibility</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Citation Frequency</td>
                  <td className="py-3 px-4 text-slate-400">How often your brand appears in AI outputs</td>
                  <td className="py-3 px-4 text-slate-400">Requires manual tracking; not available in any standard analytics platform</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Defining AI Visibility</h2>
          <p className="mb-6 leading-relaxed">
            AI visibility has two components that matter. The first is citation frequency — how often your brand appears as a named source in AI-generated answers. The second is citation sentiment — when you are mentioned, is it favorable, neutral, or negative? A brand that gets mentioned five times in a negative context has worse AI visibility than a brand mentioned twice positively.
          </p>
          <p className="mb-6 leading-relaxed">
            Citation frequency can be tracked by running a set of category-defining queries across multiple models and recording which sources appear. Do this weekly. Over time, you will see which content investments actually move the needle and which ones only improve your Google rankings without affecting your AI presence. In our experience, the two lists diverge more than most teams expect.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">How to Track AI Visibility Weekly</h3>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-slate-400">
            <li><strong className="text-white">Define your target queries.</strong> Pick 10-20 questions that matter most to your business — category-defining queries, comparison queries, and use-case questions.</li>
            <li><strong className="text-white">Run each query across ChatGPT, Perplexity, and Gemini.</strong> Record whether your brand appears, in what position, and with what sentiment (positive, neutral, negative).</li>
            <li><strong className="text-white">Log competitor appearances too.</strong> Knowing who gets cited where you do not reveals entity gaps and content opportunities.</li>
            <li><strong className="text-white">Track changes week over week.</strong> A simple spreadsheet with query × platform × date is enough to see trends within 60-90 days.</li>
            <li><strong className="text-white">Correlate content changes with citation changes.</strong> When you publish a new comparison page or FAQ section, watch whether citation frequency for related queries increases in subsequent weeks.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Strategic Shift</h2>
          <p className="mb-6 leading-relaxed">
            If you accept AI visibility as a primary metric, the tactical implications follow. You stop writing content purely for click-through and start writing content that models find citable. That means structured data, clear entity definitions, comparison pages, and authoritative external references. It also means accepting that some of your best-performing content by AI visibility may generate near-zero clicks. That is fine. The user who receives an AI answer citing your brand and then searches for you directly is worth more than the user who clicked a random blog post and bounced. You just need a different dashboard to see it.
          </p>
          <p className="mb-6 leading-relaxed">
            The brands that adopt AI visibility as a core metric now will have a significant advantage in 12-18 months. As generative search becomes the default interface for more queries, the teams that have been tracking and optimizing for citations — rather than clicks — will already know what works. Everyone else will be measuring the old metric and wondering why their traffic is disappearing without understanding why.
          </p>

          <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Measure Your AI Visibility</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow gives you an AI Visibility Score with breakdown analysis across the signals that matter most for AI citations. Free, no credit card required.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Check Your Score <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
