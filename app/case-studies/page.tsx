'use client';

import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { WaitlistModal } from "@/components/WaitlistModal";

const cases = [
  {
    title: "How Nexus Protocol increased AI citations by 140% in 3 weeks",
    company: "Nexus Protocol",
    slug: "nexus-protocol",
    result: "+140% Visibility",
    description: "A DeFi protocol that was invisible in ChatGPT answers despite strong SEO and better yields than its competitors. The fix was simpler than they expected."
  },
  {
    title: "The Notion GEO Playbook: Dominating Productivity Answers",
    company: "Notion",
    slug: "notion-strategy",
    result: "Industry Leader",
    description: "A two-month analysis of why Notion appears first in 92% of AI-generated productivity recommendations — and what every other SaaS company can learn from their content strategy."
  }
];

export default function CaseStudiesPage() {
  const [isOpen, setIsOpen] = useState(false);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Case Studies" },
  ],
};

  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Success Stories</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Real-world evidence of how technical brands are mastering Generative Engine Optimization.
          </p>
        </div>

        <div className="grid gap-8">
          {cases.map((item, idx) => (
            <Card key={idx} className="p-8 bg-card border-white/10 hover:border-primary/50 transition-all group">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.company}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-slate-500">Early Adopter</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                  <Link 
                    href={`/case-studies/${item.slug}`}
                    className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors cursor-pointer"
                  >
                    Read full case study <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[200px] border border-white/5 group-hover:border-primary/20 transition-colors">
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <span className="text-2xl font-black text-white">{item.result}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase mt-1">Growth Indicator</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </main>
  );
}
