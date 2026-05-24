'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const techFeatures = [
  "Full site GEO scan & report",
  "FAQ Schema + llms.txt generation",
  "Meta & entity optimization",
  "Competitor citation analysis",
  "Deployment support",
];

const growthFeatures = [
  "Reddit visibility strategy",
  "X/Twitter entity presence",
  "GitHub authority optimization",
  "AI citation content planning",
  "Competitor mention analysis",
  "AI-friendly content distribution",
  "Product Hunt / Hacker News launch strategy",
];

export function EnterpriseCard() {
  const [tab, setTab] = useState<'tech' | 'growth'>('tech');

  return (
    <div className="p-8 border border-primary/40 bg-primary/5 rounded-2xl flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Enterprise</h2>
        <p className="text-sm text-muted-foreground mt-1">Choose your track</p>
      </div>

      <div className="flex bg-primary/10 rounded-lg p-1 mb-6">
        <button
          onClick={() => setTab('tech')}
          className={cn(
            "flex-1 py-2 rounded-md text-sm font-medium transition-all cursor-pointer",
            tab === 'tech' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-white"
          )}
        >
          Technical GEO
        </button>
        <button
          onClick={() => setTab('growth')}
          className={cn(
            "flex-1 py-2 rounded-md text-sm font-medium transition-all cursor-pointer",
            tab === 'growth' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-white"
          )}
        >
          AI Visibility Growth
        </button>
      </div>

      {tab === 'tech' ? (
        <div className="flex flex-col flex-1">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-black">$999</span>
            <span className="text-sm text-muted-foreground">/one-time</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Full-site GEO optimization done by the GetCiteFlow team.</p>
          <ul className="space-y-2 mb-8 flex-1 text-sm">
            {techFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="https://t.me/OS_Blockchain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
            Contact via Telegram <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      ) : (
        <div className="flex flex-col flex-1">
          <span className="inline-flex items-center self-start px-3 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">New</span>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-black">$1,999</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Build your brand's presence across AI ecosystems.</p>
          <ul className="space-y-2 mb-8 flex-1 text-sm">
            {growthFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link href="/services/ai-visibility-growth" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold border border-primary/40 bg-primary/10 text-white hover:bg-primary/20 transition-all cursor-pointer mb-3">
            Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
          <a href="https://t.me/OS_Blockchain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
            Contact via Telegram <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      )}
    </div>
  );
}
