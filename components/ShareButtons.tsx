'use client';

import { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';

const SITE_URL = 'https://www.getciteflow.ai';

interface ShareButtonsProps {
  domain: string;
  score: number;
}

export function ShareButtons({ domain, score }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const reportUrl = `${SITE_URL}/report/${domain}`;
  const shareText = `I just checked ${domain}'s AI visibility score on GetCiteFlow — it scored ${score}/100!`;

  async function handleNativeShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: `GetCiteFlow Report: ${domain}`, text: shareText, url: reportUrl });
      } catch {
        // user cancelled or error
      }
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(reportUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-px bg-gradient-to-r from-transparent to-white/10" />
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] flex items-center gap-1.5">
          <Share2 className="w-3 h-3" />
          Share this Report
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(reportUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all duration-200"
          title="Share on X"
        >
          <span className="text-[15px] font-black leading-none">𝕏</span>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">X</span>
        </a>
        <button
          onClick={handleNativeShare}
          className="group relative w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6E7BFF]/50 hover:bg-[#6E7BFF]/10 transition-all duration-200"
          title="Share via system"
        >
          <Share2 className="w-4 h-4" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">More</span>
        </button>
        <div className="w-px h-6 bg-white/5 mx-0.5" />
        <button
          onClick={handleCopy}
          className="group relative w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6E7BFF]/50 hover:bg-[#6E7BFF]/10 transition-all duration-200"
          title="Copy link"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        </button>
      </div>
    </div>
  );
}
