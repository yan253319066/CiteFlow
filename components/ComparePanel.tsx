'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Crosshair, Loader2, TrendingUp, TrendingDown, Minus, Share2, Copy, Check } from 'lucide-react';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface Breakdown {
  aiVisibility: number;
  faqCoverage: number;
  entityClarity: number;
  authority: number;
}

interface CompData {
  score: number;
  breakdown: Breakdown;
}

const LABELS: Record<string, string> = {
  aiVisibility: 'AI Visibility',
  faqCoverage: 'FAQ Coverage',
  entityClarity: 'Entity Clarity',
  authority: 'Authority',
};

function DiffBadge({ diff }: { diff: number }) {
  if (diff > 0) return <span className="flex items-center gap-1 text-xs font-bold text-green-400"><TrendingUp className="w-3 h-3" />+{diff}</span>;
  if (diff < 0) return <span className="flex items-center gap-1 text-xs font-bold text-red-400"><TrendingDown className="w-3 h-3" />{diff}</span>;
  return <span className="flex items-center gap-1 text-xs font-bold text-slate-500"><Minus className="w-3 h-3" />0</span>;
}

function ScoreCard({ domain, score, breakdown, competitorBreakdown, side }: {
  domain: string;
  score: number;
  breakdown: Breakdown;
  competitorBreakdown?: Breakdown;
  side: 'you' | 'competitor';
}) {
  return (
    <Card className="bg-[#0A0F24]/60 border-white/10 rounded-2xl p-6">
      <div className="mb-4">
        <p className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-1">{side === 'you' ? 'YOUR SITE' : 'COMPETITOR'}</p>
        <p className="text-base font-bold text-white truncate">{domain}</p>
      </div>
      <div className={`text-4xl font-black mb-5 ${score >= 70 ? 'text-green-400' : score >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
        {score}/100
        <span className="text-xs text-slate-500 font-normal ml-2">GEO Score</span>
      </div>
      <div className="space-y-4">
        {Object.entries(breakdown).map(([key, val]) => {
          const compVal = competitorBreakdown?.[key as keyof Breakdown];
          const diff = compVal !== undefined ? val - compVal : 0;
          return (
            <div key={key}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-slate-400">{LABELS[key] ?? key}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white">{val}%</span>
                  {competitorBreakdown && diff !== 0 && <DiffBadge diff={diff} />}
                </div>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{
                  width: `${val}%`,
                  background: val >= 70 ? '#22C55E' : val >= 40 ? '#EAB308' : '#EF4444',
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function ComparePanel({ currentDomain, currentScore, currentBreakdown }: { currentDomain: string; currentScore: number; currentBreakdown: Breakdown }) {
  const searchParams = useSearchParams();
  const [competitor, setCompetitor] = useState('');
  const [loading, setLoading] = useState(false);
  const [compData, setCompData] = useState<CompData | null>(null);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const autoCompared = useRef(false);

  useEffect(() => {
    const withDomain = searchParams.get('with');
    if (withDomain && !autoCompared.current && !compData && !loading) {
      autoCompared.current = true;
      setCompetitor(withDomain);
      runCompare(withDomain);
    }
  }, [searchParams]);

  const runCompare = async (domain: string) => {
    setLoading(true);
    setError('');
    setCompData(null);
    setExpanded(true);
    try {
      const res = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: domain }),
      });
      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setCompData({
        score: data.score ?? data.overall_visibility_score ?? 0,
        breakdown: data.breakdown ?? data.breakdown_scores ?? { aiVisibility: 0, faqCoverage: 0, entityClarity: 0, authority: 0 },
      });
      updateUrl(domain);
    } catch {
      setError('Could not analyze competitor. Please check the domain and try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateUrl = (domain: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('with', domain);
    window.history.replaceState({}, '', url.toString());
  };

  const handleCompare = () => {
    const clean = competitor.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    if (!clean) return;
    runCompare(clean);
  };

  const shareUrl = compData
    ? `${window.location.origin}/report/${currentDomain}?with=${encodeURIComponent(competitor.trim())}`
    : null;

  const shareText = compData
    ? `${currentDomain} (${currentScore}/100) vs ${competitor.trim()} (${compData.score}/100) - AI Visibility Comparison on CiteFlow`
    : null;

  const handleNativeShare = async () => {
    if (!shareUrl || !shareText || typeof navigator === 'undefined' || !navigator.share) return;
    try {
      await navigator.share({
        title: `${currentDomain} vs ${competitor.trim()} | CiteFlow`,
        text: shareText,
        url: shareUrl,
      });
    } catch {
    }
  };

  const handleCopy = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  };

  return (
    <div>
      <Card className="bg-gradient-to-r from-primary/5 via-primary/[0.02] to-transparent border border-primary/20 rounded-2xl p-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 shrink-0">
            <Crosshair className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Compare</span>
          </div>
          <Input
            type="text"
            placeholder="Enter competitor domain"
            value={competitor}
            onChange={(e) => setCompetitor(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCompare()}
            className="bg-white/5 border-white/10 h-9 rounded-lg text-sm focus:ring-primary flex-1 min-w-[160px]"
          />
          <button
            onClick={handleCompare}
            disabled={!competitor.trim() || loading}
            className="h-9 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4" /> Compare</>}
          </button>
          {shareUrl && (
            <div className="flex items-center gap-1 shrink-0">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText!)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6E7BFF]/50 hover:bg-[#6E7BFF]/10 transition-all cursor-pointer"
                title="Share on X"
              >
                <span className="text-[13px] font-black leading-none">𝕏</span>
              </a>
              <button
                onClick={handleNativeShare}
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6E7BFF]/50 hover:bg-[#6E7BFF]/10 transition-all cursor-pointer"
                title="Share via system"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopy}
                className="h-9 px-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 text-xs text-slate-400 hover:text-white hover:border-[#6E7BFF]/50 hover:bg-[#6E7BFF]/10 transition-all cursor-pointer"
                title="Copy comparison link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}
        </div>
      </Card>

      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}

      {loading && (
        <div className="mt-4 p-6 bg-[#0A0F24]/60 border border-white/10 rounded-2xl flex items-center justify-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin text-primary" />
          <span className="text-sm text-slate-400">Analyzing competitor site...</span>
        </div>
      )}

      {expanded && compData && !loading && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: `${currentDomain} vs ${competitor.trim()} AI Visibility Comparison`,
                about: {
                  '@type': 'Thing',
                  name: 'Generative Engine Optimization',
                  description: 'Comparison of AI visibility scores between two websites.',
                },
                mainEntity: [
                  { '@type': 'StatisticalScore', name: `${currentDomain} GEO Score`, value: currentScore },
                  { '@type': 'StatisticalScore', name: `${competitor.trim()} GEO Score`, value: compData.score },
                ],
              }),
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ScoreCard domain={currentDomain} score={currentScore} breakdown={currentBreakdown} competitorBreakdown={compData.breakdown} side="you" />
            <ScoreCard domain={competitor.trim()} score={compData.score} breakdown={compData.breakdown} competitorBreakdown={currentBreakdown} side="competitor" />
          </div>
        </>
      )}
    </div>
  );
}