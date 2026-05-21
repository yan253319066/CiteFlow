'use client';

import { Navbar } from '@/components/Navbar';
import { JsonLd } from '@/components/JsonLd';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Rocket, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO for Startups: Build AI Visibility from Day One",
  description: "Learn how startups can establish AI citations early and build lasting visibility in ChatGPT, Perplexity, Gemini, and other AI search engines.",
  datePublished: "2026-05-20",
  author: { "@type": "Organization", name: "CiteFlow Editorial" },
  publisher: { "@type": "Organization", name: "CiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/geo-for-startups" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should startups focus on GEO from the beginning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlike SEO which takes months to build, GEO improvements can show results quickly. Building AI visibility early means your product gets into AI training data and retrieval systems from the start, before competitors establish category leadership."
      }
    },
    {
      "@type": "Question",
      name: "How can new startups get cited by AI with no existing reputation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on category creation and use-case specificity. New products that define a new category or serve a specific use case exceptionally well are more likely to be cited than generic 'another X tool.' Create comparison content and FAQ pages with proper Schema markup."
      }
    },
    {
      "@type": "Question",
      name: "What's the biggest GEO mistake startups make?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waiting until they have traffic to optimize for AI. Most startups focus all energy on SEO/ads for customer acquisition. But GEO builds compounding value over time, and early movers in AI citations have significant advantages."
      }
    },
    {
      "@type": "Question",
      name: "How does GEO compare to traditional marketing for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO is complementary to traditional marketing, not a replacement. But unlike paid ads that stop when you stop paying, AI citations compound over time. A well-optimized page continues generating AI citations indefinitely."
      }
    }
  ]
};

const strategies = [
  {
    icon: Rocket,
    title: "Category Creation",
    description: "New categories get cited more often. Define a clear problem space and position your startup as the category-defining solution. 'The first AI tool for X' gets more citations than 'another AI tool.'",
  },
  {
    icon: Target,
    title: "Comparison-First Strategy",
    description: "Create comparison pages early. AI models love structured comparisons. 'How we compare to [Competitor A] and [Competitor B]' provides clear citation opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Build Compound Visibility",
    description: "GEO compounds over time unlike paid acquisition. Every FAQ page, every comparison, every Schema markup adds to your AI authority. Start early and keep building.",
  },
];

const checklist = [
  "Create a clear value proposition page optimized for AI parsing",
  "Build FAQ pages with Schema markup for your top 10 use cases",
  "Develop comparison pages against 2-3 established competitors",
  "Write about your product category as if you're defining it",
  "Create an llms.txt describing your startup in clear, simple terms",
  "Get listed on relevant startup and product directories",
];

export default function Page() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      
      <article className="pt-32 px-6 max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          ← Back to Home
        </Link>

        <header className="mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Vertical Guide</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            GEO for Startups
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Build AI visibility from day one. How startups can get mentioned by ChatGPT, Gemini, Perplexity, and other AI assistants before competitors establish category leadership.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {strategies.map((strategy, idx) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors">
                <strategy.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-slate-400 leading-relaxed">{strategy.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-2xl font-bold mb-6">Why Startups Should Prioritize GEO</h2>
            <div className="prose prose-invert max-w-none text-slate-400">
              <p className="leading-relaxed mb-4">
                Most startups focus entirely on SEO and paid acquisition. GEO is often an afterthought — if it's considered at all.
              </p>
              <p className="leading-relaxed mb-4">
                This is a missed opportunity. Unlike SEO which takes months to build authority, GEO improvements can show results in weeks. And unlike paid ads, AI citations compound over time — a well-optimized page continues generating citations indefinitely.
              </p>
              <p className="leading-relaxed">
                More importantly, early movers in AI citations have lasting advantages. Once a category leader is established in AI training data, it becomes harder to displace.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Your GEO Checklist</h2>
            <div className="space-y-4">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <section className="glass rounded-3xl p-12 text-center mb-16 border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Ready to Check Your AI Visibility?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Enter your website URL to get a detailed report on how well your startup is optimized for AI citations.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Analyze Your Site <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.name}</h3>
                <p className="text-slate-400">{(faq.acceptedAnswer as any).text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
