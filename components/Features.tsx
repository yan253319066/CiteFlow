'use client';

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Zap, BarChart3, Search, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI Visibility Score",
    description: "Get a comprehensive score measuring how well your website is positioned for AI citation in ChatGPT, Perplexity, and Gemini.",
  },
  {
    icon: BarChart3,
    title: "Entity Clarity Analysis",
    description: "Evaluate how clearly your brand and value proposition are defined for AI systems that need to resolve what you are before citing you.",
  },
  {
    icon: Zap,
    title: "FAQ Coverage Check",
    description: "Identify missing FAQ content and Schema markup that could increase your chances of appearing in AI-powered search results.",
  },
  {
    icon: Shield,
    title: "Actionable Recommendations",
    description: "Receive specific, prioritized suggestions to improve your content structure for better AI visibility and citation rates.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Analyze Your Website for AI Search
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          CiteFlow evaluates your website across key factors that AI systems use to determine which sources to cite. 
          Enter your URL above to get started with a free AI visibility analysis.
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
