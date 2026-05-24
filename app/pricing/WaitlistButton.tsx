'use client';

import { useState } from 'react';
import { WaitlistModal } from '@/components/WaitlistModal';
import { CheckCircle2 } from 'lucide-react';

export function WaitlistButton() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    "Everything in Free",
    "Fix package generation",
    "FAQ Schema JSON-LD generator",
    "AI-optimized meta descriptions",
    "llms.txt & robots.txt generator",
    "Head code injection snippets",
    "Export: JSON-LD / Markdown / HTML / React / Next.js / Vue / Nuxt / WordPress",
    "One-click copy & download patch",
  ];

  return (
    <>
      <div className="p-8 border border-primary/40 bg-primary/5 rounded-2xl relative flex flex-col">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">Early Access</span>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Pro</h2>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-black">$19</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">Generate deployable GEO fix packages and export in your framework format.</p>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer"
        >
          Join Waitlist <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}