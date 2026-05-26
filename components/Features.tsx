'use client';

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Search, FileText, Download, Share2 } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Full Site Scan",
    description: "GetCiteFlow crawls your homepage and landing pages, checking title tags, H1s, FAQ Schema, meta descriptions, robots.txt, llms.txt, and content structure — everything AI systems evaluate.",
  },
  {
    icon: FileText,
    title: "GEO Diagnosis",
    description: "Receive a prioritized issue list ranked by impact on AI citation probability. See exactly what your site is missing vs. what AI search engines look for.",
  },
  {
    icon: Download,
    title: "Actionable Recommendations",
    description: "Get prioritized, clear guidance on exactly what to fix — from FAQ Schema and meta descriptions to llms.txt and entity clarity. No fluff, just what moves the needle.",
  },
  {
    icon: Share2,
    title: "Share & Compare",
    description: "Share your report with a unique URL, compare your AI visibility against competitors, and re-scan to track your improvement over time.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Scan. Diagnose. Fix.
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          GetCiteFlow doesn't just show you a score — it tells you exactly what's missing and what to fix.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors">
                <feature.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
