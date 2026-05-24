'use client';

import { motion } from "motion/react";
import { Globe, FileText, Wrench, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Scan",
    description: "Enter any URL and GetCiteFlow crawls your homepage and core landing pages — checking title tags, H1s, FAQ coverage, Schema markup, meta descriptions, robots.txt, and llms.txt.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Diagnose",
    description: "Get a prioritized list of GEO issues affecting your AI visibility. See exactly what AI systems find — and what they miss — on your site, ranked by impact on citation probability.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Fix",
    description: "Receive ready-to-deploy fix packages: FAQ Schema JSON-LD, optimized meta descriptions, llms.txt content, robots.txt recommendations, and structured data patches — no development skills required.",
  },
  {
    number: "04",
    icon: Download,
    title: "Export",
    description: "One-click copy, download patches, or export in your framework's format — JSON-LD, Markdown, Next.js, or Vue. Deploy what AI needs to cite you.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0A0F24]/50 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How GetCiteFlow Works
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          From scan to deploy in minutes. GetCiteFlow shows you exactly what AI systems see on your site and generates the fixes you need to get cited.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
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
