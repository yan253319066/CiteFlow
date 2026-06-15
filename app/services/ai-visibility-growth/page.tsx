'use client';

import { Navbar } from '@/components/Navbar';
import { JsonLd } from '@/components/JsonLd';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  MessageCircle,
  AtSign,
  FileText,
  Radar,
  Share2,
  Rocket,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  Repeat,
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Visibility Growth",
  description: "A managed service that builds your brand's presence across AI systems including ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao. We analyze the platforms and sources AI trusts in your specific industry — then build discoverable brand signals across them through custom content, entity optimization, and cross-platform distribution.",
  provider: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  areaServed: "Worldwide",
  audience: { "@type": "Audience", audienceType: "Business" },
  offers: { "@type": "AggregateOffer", lowPrice: "4999", priceCurrency: "USD", offerCount: "1" },
  url: "https://www.getciteflow.ai/services/ai-visibility-growth",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI Visibility Growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Visibility Growth is a managed service that builds your brand's presence across the platforms and sources that AI systems like ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao use to generate answers. We analyze your industry's AI data sources, build brand signals across the right platforms, and continuously optimize for citation growth."
      }
    },
    {
      "@type": "Question",
      name: "How is this different from free AI visibility scanners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free AI visibility scanners analyze your existing website and tell you what to fix. AI Visibility Growth is an ongoing enterprise service where we actively build your brand's presence across the platforms and sources AI trusts in your industry — so AI systems have more and better signals to mention and recommend your brand."
      }
    },
    {
      "@type": "Question",
      name: "How long until I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvements in AI citation frequency within 4-8 weeks of engagement. Brand presence across industry-relevant platforms compounds over time, with visibility growing as signals accumulate."
      }
    },
    {
      "@type": "Question",
      name: "Do you work with any industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every engagement starts with an industry-specific analysis to identify the platforms and sources that drive AI citations in your space. Whether you're in e-commerce, professional services, consumer products, or enterprise technology — the strategy adapts to where AI looks for signals in your industry."
      }
    },
    {
      "@type": "Question",
      name: "Can I combine this with brand visibility optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Brand Visibility (fixing your site's FAQ schema, llms.txt, entity clarity) and AI Visibility Growth (building external citations and brand presence) are complementary. Many Enterprise clients start with the technical foundation and add the visibility growth service."
      }
    }
  ]
};

const offerings = [
  {
    icon: Radar,
    title: "AI Impact Audit",
    description: "We analyze which platforms, publications, and sources AI models trust in your specific industry — then build a custom visibility roadmap targeting the highest-impact opportunities.",
  },
  {
    icon: AtSign,
    title: "Brand Entity Building",
    description: "Ensure your brand name, products, and key facts are structured correctly across the authoritative sources AI systems rely on for entity recognition and citation.",
  },
  {
    icon: MessageCircle,
    title: "Industry Platform Strategy",
    description: "Strategic presence building across the online communities, review sites, and platforms that matter in your industry — wherever your audience engages and AI looks for signals.",
  },
  {
    icon: FileText,
    title: "Citation-Optimized Content",
    description: "Content briefs and calendars designed for AI citation probability. We format content in structures AI models prioritize — clear entity definitions, authoritative claims, and retrievable formats.",
  },
  {
    icon: Target,
    title: "Competitive Citation Gap",
    description: "Continuous monitoring of where your brand and competitors appear across AI systems. Identify gaps competitors fill and you don't, then close them with targeted strategy.",
  },
  {
    icon: Share2,
    title: "Cross-Platform Distribution",
    description: "Distribute your brand content across the platforms AI indexes most aggressively in your industry — optimized for timing, format, and syndication to maximize citation yield.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Iteration",
    description: "Monthly tracking of AI citation growth, share of voice, and emerging opportunities. Strategy evolves based on real data from your industry's citation landscape.",
  },
];

const steps = [
  {
    icon: Radar,
    step: "01",
    title: "Audit",
    description: "We analyze your current AI visibility across all major platforms and identify the highest-impact opportunities for your brand.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy",
    description: "A custom roadmap is built around your industry, audience, and competitive landscape — targeting the platforms that drive AI citations.",
  },
  {
    icon: Repeat,
    step: "03",
    title: "Execute",
    description: "Our team executes the strategy across the platforms and channels that drive AI citations in your industry — building signals that compound over time.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitor & Iterate",
    description: "Monthly reporting tracks citation growth, share of voice, and emerging opportunities. Strategy is adjusted based on what's working.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />

      {/* Hero */}
      <article className="pt-32 px-6 max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[400px] h-[400px] bg-[#6E7BFF] opacity-[0.06] blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[-10%] right-[15%] w-[300px] h-[300px] bg-[#8B5CF6] opacity-[0.08] blur-[100px] rounded-full -z-10" />

        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-16">
          ← Back to Home
        </Link>

        <header className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8"
          >
            <Rocket className="w-3 h-3 text-primary" />
            <span>Enterprise Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            AI Visibility <span className="gradient-text">Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
          >
            Help your brand appear more often across AI systems like ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao. A managed service that builds your presence on the platforms AI trusts in your industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-500 mb-14"
          >
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Monthly engagement</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> From $4,999/month</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Industry-specific strategy</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="mailto:support@getciteflow.ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-4 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </header>
      </article>

      {/* What We Offer */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">What We Offer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build AI Visibility</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Every strategy is customized to your industry. These are the capabilities we bring to each engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors group">
                <offering.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{offering.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A structured monthly engagement that builds momentum over time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{step.step}</span>
              <h3 className="text-lg font-bold mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Checklist / What to Expect */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-none">Monthly Deliverables</Badge>
            <h2 className="text-3xl font-bold mb-4">What You Get Each Month</h2>
            <p className="text-slate-400 mb-8">A comprehensive service with measurable outputs and transparent reporting.</p>
            <div className="space-y-4">
              {[
                "AI citation audit across 5+ major AI platforms",
                "Industry-specific platform presence report",
                "Brand entity optimization & activity log",
                "Citation-optimized content calendar & briefs",
                "Competitor citation gap dashboard",
                "Cross-platform distribution execution",
                "Monthly strategy call with your team",
                "Quarterly strategy review & roadmap update",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-8 border border-primary/40 bg-primary/5 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Ready to grow your AI visibility?</h3>
            <p className="text-sm text-slate-400 mb-6">
              Contact our team to discuss your brand's current AI presence and how we can help.
            </p>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold border border-primary/40 bg-primary/10 text-white hover:bg-primary/20 transition-all cursor-pointer mb-3"
            >
              View Pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:support@getciteflow.ai"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer mb-3"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-slate-500 text-center">or email support@getciteflow.ai</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold mb-2">{faq.name}</h3>
              <p className="text-slate-400">{(faq.acceptedAnswer as any).text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
