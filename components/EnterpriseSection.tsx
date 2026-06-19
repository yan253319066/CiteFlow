'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Radar, AtSign, FileText, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const offerings = [
  {
    icon: Radar,
    title: 'AI Impact Audit',
    description: 'We analyze which platforms, publications, and sources AI models trust in your specific industry — then build a custom visibility roadmap targeting the highest-impact opportunities.',
  },
  {
    icon: AtSign,
    title: 'Brand Entity Building',
    description: 'Ensure your brand name, products, and key facts are structured correctly across the authoritative sources AI systems rely on for entity recognition and citation.',
  },
  {
    icon: FileText,
    title: 'Citation-Optimized Content',
    description: 'Content briefs and calendars designed for AI citation probability. We format content in structures AI models prioritize — clear entity definitions, authoritative claims, and retrievable formats.',
  },
  {
    icon: Share2,
    title: 'Cross-Platform Distribution',
    description: 'Distribute your brand content across the platforms AI indexes most aggressively in your industry — optimized for timing, format, and syndication to maximize citation yield.',
  },
];

export function EnterpriseSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
            <Radar className="w-3 h-3 text-primary" />
            <span>Enterprise AI Brand Service</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Brand <span className="gradient-text">Recommended by AI</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We build your brand&apos;s presence across ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen — so AI systems mention and recommend you. A managed service, not a tool.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors group">
                <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="text-slate-400 text-sm mb-6">
            From $4,999/month. Every engagement starts with an industry-specific analysis.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/services/ai-visibility-growth" className="bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
              View Pricing →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
