'use client';

import { Navbar } from '@/components/Navbar';
import { JsonLd } from '@/components/JsonLd';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { Rocket, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO for Startups: Build AI Visibility from Day One",
  description: "Learn how startups can establish AI citations early and build lasting visibility in ChatGPT, Perplexity, Gemini, DeepSeek, Doubao, and other AI search engines.",
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: { "@type": "Person", "name": "Neil Yan", "url": "https://github.com/yan253319066" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-startups&score=75",
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

function StrategyCard({ strategy, idx }: { strategy: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }; idx: number }) {
  const { ref, isInView } = useInView(0.15);
  return (
    <div ref={ref} className={isInView ? `animate-fade-in-up stagger-delay-${idx}` : ''}>
      <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors">
        <strategy.icon className="w-10 h-10 text-primary mb-6" />
        <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
        <p className="text-slate-400 leading-relaxed">{strategy.description}</p>
      </Card>
    </div>
  );
}

function ChecklistItem({ item, idx }: { item: string; idx: number }) {
  const { ref, isInView } = useInView(0.15);
  return (
    <div ref={ref} className={`flex items-start gap-3 ${isInView ? `animate-fade-in-up stagger-delay-${idx}` : ''}`}>
      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-slate-300">{item}</span>
    </div>
  );
}

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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            GEO for Startups
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Build AI visibility from day one. How startups can get mentioned by ChatGPT, Gemini, Perplexity, DeepSeek, Doubao, and other AI assistants before competitors establish category leadership.
          </p>

          <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl mt-8">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              What You'll Learn
            </h3>
            <ol className="text-sm text-slate-400 space-y-2 list-decimal list-inside">
              <li>Why startups should prioritize GEO before SEO</li>
              <li>How category creation drives AI citations for new products</li>
              <li>Why comparison pages are your fastest path to citations</li>
              <li>How GEO compounds over time unlike paid acquisition</li>
              <li>How to measure AI visibility with limited resources</li>
            </ol>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {strategies.map((strategy, idx) => (
            <StrategyCard key={strategy.title} strategy={strategy} idx={idx} />
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
              <p className="leading-relaxed mb-6">
                More importantly, early movers in AI citations have lasting advantages. Once a category leader is established in AI training data, it becomes harder to displace.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Priority Actions for Startups</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-400">
                <li><strong className="text-white">Define a new category or own a specific use case.</strong> "The first AI tool for X" gets more citations than "another Y tool." Category creation signals novelty that AI models reward.</li>
                <li><strong className="text-white">Create comparison pages before you have traffic.</strong> "How We Compare to [Competitor A]" is the fastest way to establish a shared entity cluster with established brands.</li>
                <li><strong className="text-white">Build FAQ pages with Schema markup for your top 10 use cases.</strong> Each Q&A pair is a potential citation. Use the exact phrasing your target customers use.</li>
                <li><strong className="text-white">Write about your category as if you are defining it.</strong> Category-defining content gets cited more often than product-feature content. Teach the model what the category means.</li>
                <li><strong className="text-white">Create an llms.txt and pricing.md on day one.</strong> Machine-readable files help AI agents evaluate your product alongside competitors without requiring a rendered page visit.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Your GEO Checklist</h2>
            <div className="space-y-4">
              {checklist.map((item, idx) => (
                <ChecklistItem key={idx} item={item} idx={idx} />
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
