'use client';

import { motion } from "motion/react";
import { Globe, FileText, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Enter Your Website URL",
    description: "Simply type in any website URL you want to analyze. Our system will crawl and examine the publicly accessible content on your domain.",
  },
  {
    number: "02",
    icon: FileText,
    title: "AI Analyzes Your Content",
    description: "Our algorithms evaluate your content structure, entity clarity, FAQ coverage, Schema markup, and other factors that AI systems use to determine citation priority.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Get Your AI Visibility Score",
    description: "Receive a detailed report with your AI Visibility Score, specific strengths to leverage, and actionable recommendations to improve your chances of being cited by LLMs.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0A0F24]/50 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How to Check Your AI Visibility
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Analyzing your website for AI search performance takes less than a minute. 
          Get actionable insights to improve how AI systems perceive and cite your content.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-5xl font-black text-white/5 mb-2">{step.number}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
