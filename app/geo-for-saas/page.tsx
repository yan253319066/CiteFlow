'use client';

import { Navbar } from '@/components/Navbar';
import { JsonLd } from '@/components/JsonLd';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Search, FileText, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO for SaaS: How to Get Your Product Mentioned by AI",
  description: "Learn specific strategies for SaaS companies to optimize their websites for AI citations in ChatGPT, Perplexity, Gemini, DeepSeek, Doubao, and other generative engines.",
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: { "@type": "Person", "name": "Neil Yan", "url": "https://github.com/yan253319066" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-saas&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/geo-for-saas" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is GEO important for SaaS companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As AI search becomes more prevalent, potential customers are asking ChatGPT and other AI tools for product recommendations. If your SaaS product isn't cited by AI, you're missing a growing channel for customer acquisition. GEO ensures your product appears in these conversations."
      }
    },
    {
      "@type": "Question",
      name: "How does AI determine which SaaS products to cite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI systems look for clear entity definitions, comparison content, FAQ markup, and mentions across high-authority sources. SaaS products with well-defined categories, direct comparisons with alternatives, and presence in review sites are more likely to be cited."
      }
    },
    {
      "@type": "Question",
      name: "What's the difference between SEO and GEO for SaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO focuses on Google rankings through backlinks and keywords. GEO optimizes for AI citations by focusing on entity clarity, structured data, FAQ schema, and being mentioned in sources that AI models trust."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to see GEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike SEO which can take months, GEO improvements can show results within weeks. However, building the authority signals AI systems value requires consistent effort over time."
      }
    }
  ]
};

const strategies = [
  {
    icon: Search,
    title: "Be the Category Leader",
    description: "AI models prefer citing products that define their own category. Create content that positions your product as the go-to solution for a specific problem.",
  },
  {
    icon: FileText,
    title: "Comparison Content",
    description: "Create comparison pages that directly address why users might choose your product over alternatives. AI systems love structured comparisons.",
  },
  {
    icon: BarChart3,
    title: "FAQ Schema Markup",
    description: "Add comprehensive FAQ sections with proper Schema.org markup. This gives AI systems an easy way to extract and cite your content.",
  },
];

const checklist = [
  "Create a dedicated comparison page against 2-3 main competitors",
  "Add FAQ Schema markup to your pricing page",
  "Write a 'Best [Category] Software' roundup that includes your product",
  "Get listed on G2, Capterra, and other AI-trusted review sites",
  "Create an llms.txt file describing your product in plain language",
  "Add structured data to your pricing and feature pages",
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
            GEO for SaaS
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            How to get your software product mentioned by ChatGPT, Gemini, Perplexity, DeepSeek, Doubao, and other AI assistants. Specific strategies for SaaS companies.
          </p>

          <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl mt-8">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              What You'll Learn
            </h3>
            <ol className="text-sm text-slate-400 space-y-2 list-decimal list-inside">
              <li>Why SaaS companies need GEO in addition to SEO</li>
              <li>How to position your product as the category leader AI recommends</li>
              <li>How to structure comparison pages that drive citations</li>
              <li>Why FAQ Schema markup is the highest-ROI change</li>
              <li>How to measure AI visibility for your SaaS product</li>
            </ol>
          </div>
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
            <h2 className="text-2xl font-bold mb-6">Why SaaS Needs GEO</h2>
            <div className="prose prose-invert max-w-none text-slate-400">
              <p className="leading-relaxed mb-4">
                Traditional SEO brings users to your landing page through Google. GEO puts your product in the conversation when users ask AI assistants for recommendations.
              </p>
              <p className="leading-relaxed mb-4">
                The difference matters. When someone searches "best project management software" on Google, they see ads and organic results. When they ask ChatGPT the same question, they get a curated list with explanations.
              </p>
              <p className="leading-relaxed mb-6">
                If your SaaS product isn't in that curated list, you're invisible to a growing segment of potential customers who now start their research with AI.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Priority Actions for SaaS Companies</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-400">
                <li><strong className="text-white">Audit your AI visibility baseline.</strong> Run your top 10 category queries across ChatGPT, Perplexity, DeepSeek, and Doubao. If you don't appear, you have an entity clarity problem.</li>
                <li><strong className="text-white">Add FAQ Schema to your pricing page.</strong> This is the highest-ROI change for most SaaS companies. Write 5-10 Q&A pairs using conversational query language.</li>
                <li><strong className="text-white">Create comparison pages against 2-3 main competitors.</strong> Use consistent row labels across all comparisons so the model can extract and repeat the data.</li>
                <li><strong className="text-white">Standardize your category language.</strong> Choose one label ("project management software" not sometimes "platform" and sometimes "suite") and use it everywhere.</li>
                <li><strong className="text-white">Build third-party consensus.</strong> Get listed on G2, Capterra, and industry-specific review sites. Model trust is built through cross-source agreement.</li>
              </ol>
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
            Enter your website URL to get a detailed report on how well your SaaS product is optimized for AI citations.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-4 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
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
