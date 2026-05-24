'use client';

import { Navbar } from '@/components/Navbar';
import { JsonLd } from '@/components/JsonLd';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Bot, Layers, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO for AI Tools: How AI Products Get Cited by Other AI Systems",
  description: "Learn how to optimize your AI tool or AI product for citations in ChatGPT, Perplexity, Gemini, and other AI assistants. Special considerations for AI products.",
  datePublished: "2026-05-20",
  author: { "@type": "Organization", name: "GetCiteFlow Editorial" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/geo-for-ai-tools" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do AI tools need special GEO strategies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI tools face unique challenges: AI models may not recommend competing AI products, and there are fewer established review sources for AI products. GEO for AI tools requires building trust signals that AI models recognize and value."
      }
    },
    {
      "@type": "Question",
      name: "Can AI tools be cited by other AI systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. ChatGPT and other AI assistants regularly recommend AI tools when users ask for solutions. Products like Notion AI, Midjourney, and Copy.ai are frequently cited. The key is establishing clear entity definitions and use-case specificity."
      }
    },
    {
      "@type": "Question",
      name: "What's the training data challenge for AI tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many AI tools launched recently, meaning they're not in most AI models' training data. This is actually an advantage - you can optimize specifically for AI retrieval without competing against established products' parametric knowledge."
      }
    },
    {
      "@type": "Question",
      name: "How do I build AI trust signals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on being mentioned in sources AI models trust: tech publications, comparison sites, and community platforms. Create detailed use-case documentation that AI can extract and cite in relevant contexts."
      }
    }
  ]
};

const strategies = [
  {
    icon: Bot,
    title: "Define Your AI Category",
    description: "Be explicit about what kind of AI you offer. 'AI writing tool' is more citation-friendly than generic descriptions. Create content that positions your specific use case clearly.",
  },
  {
    icon: Layers,
    title: "Build AI-Trust Signals",
    description: "Get mentioned in sources AI models recognize as authoritative. Tech publications, AI-specific directories, and comparison sites carry more weight than typical SaaS review platforms.",
  },
  {
    icon: Zap,
    title: "Use Case Specificity",
    description: "AI models cite specific use cases more often than broad categories. 'Best AI tool for writing Instagram captions' gets more citations than generic 'AI writing tool' mentions.",
  },
];

const checklist = [
  "Create detailed documentation in formats AI can parse easily",
  "Build comparison pages specifically for AI tool alternatives",
  "Get listed on AI-specific directories and product databases",
  "Write use-case specific content (not just feature lists)",
  "Create an llms.txt describing your AI's capabilities",
  "Add structured data to highlight pricing, features, and use cases",
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
            GEO for AI Tools
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            How to get your AI product mentioned by ChatGPT, Gemini, Perplexity, and other AI assistants. Unique strategies for the AI tools market.
          </p>

          <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl mt-8">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              What You'll Learn
            </h3>
            <ol className="text-sm text-slate-400 space-y-2 list-decimal list-inside">
              <li>How to define your AI category so models can place your product</li>
              <li>Why AI tools face unique trust signal challenges</li>
              <li>How to build AI-specific comparison pages that get cited</li>
              <li>Why use-case specificity outperforms broad category claims</li>
              <li>How to leverage the training data gap as an advantage</li>
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
            <h2 className="text-2xl font-bold mb-6">The AI Citation Challenge</h2>
            <div className="prose prose-invert max-w-none text-slate-400">
              <p className="leading-relaxed mb-4">
                AI tools face a unique GEO challenge: AI models may be reluctant to recommend competing AI products, and there are fewer established review sources specifically for AI tools.
              </p>
              <p className="leading-relaxed mb-4">
                But this challenge creates opportunity. Products that establish clear category leadership and demonstrate clear use-case value become the default recommendation when users ask AI assistants for help.
              </p>
              <p className="leading-relaxed mb-6">
                The key is building trust signals that AI models recognize and value — not just traditional SaaS metrics like G2 ratings or review counts.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Priority Actions for AI Tools</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-400">
                <li><strong className="text-white">Define your AI use case with precision.</strong> "AI writing tool for Instagram captions" is more citable than "AI content platform."</li>
                <li><strong className="text-white">Create comparison pages against non-AI alternatives.</strong> Show why AI is better for specific use cases.</li>
                <li><strong className="text-white">Get listed on AI-specific directories.</strong> Futurepedia, There's An AI For That, and AI directories carry weight with models.</li>
                <li><strong className="text-white">Publish use-case documentation.</strong> Detailed guides with prompts and outputs give models structured content to cite.</li>
                <li><strong className="text-white">Create an llms.txt and pricing.md.</strong> Machine-readable files help AI agents parse your product without rendering your page.</li>
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
            Enter your website URL to get a detailed report on how well your AI tool is optimized for AI citations.
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
