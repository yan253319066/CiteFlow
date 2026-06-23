'use client';

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Search, FileText, Download, Share2, BarChart3 } from "lucide-react";
import { useDictionary } from '@/i18n/useDictionary';

const featureIcons = [Search, FileText, Download, Share2, BarChart3] as const;

const enFeatures = [
  {
    title: "Full Site Scan",
    desc: "GetCiteFlow crawls your homepage and landing pages, checking title tags, H1s, FAQ Schema, meta descriptions, robots.txt, llms.txt, and content structure \u2014 everything AI systems evaluate.",
  },
  {
    title: "AI Visibility Diagnosis",
    desc: "Receive a prioritized issue list ranked by impact on AI citation probability. See exactly what your brand is missing vs. what AI systems look for when deciding who to recommend.",
  },
  {
    title: "Actionable Recommendations",
    desc: "Get prioritized, clear guidance on exactly what to fix \u2014 from FAQ Schema and meta descriptions to llms.txt and entity clarity. No fluff, just what moves the needle.",
  },
  {
    title: "Industry-Specific Analysis",
    desc: "AI citation patterns vary by industry \u2014 what works for a SaaS company won't work for an e-commerce brand. GetCiteFlow tailors its analysis based on your specific domain, backed by real AI response data across 40+ query categories.",
  },
];



export function Features() {
  const dict = useDictionary();
  const t = dict?.features;

  const items = t?.items ?? enFeatures;

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t?.title || 'Scan. Diagnose. Fix.'}
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          {t?.subtitle || "GetCiteFlow doesn't just show you a score \u2014 it tells you exactly what's missing and what to fix."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((feature: any, idx: number) => {
            const Icon = featureIcons[idx] ?? featureIcons[0];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors">
                  <Icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
