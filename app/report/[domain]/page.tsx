'use client';

import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, Lightbulb, ShieldAlert, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { ShareButtons } from '@/components/ShareButtons';
import { ComparePanel } from '@/components/ComparePanel';
import { JsonLd } from '@/components/JsonLd';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { clientScrapeWebsite, type ScrapeResult } from '@/lib/client-scrape';

const COOLDOWN_MS = 30000; // 30秒冷却时间
const DEBOUNCE_MS = 1000; // 1秒防抖

interface ReportData {
  score: number;
  breakdown: { aiVisibility: number; faqCoverage: number; entityClarity: number; authority: number };
  missing: string[];
  suggestions: string[];
  summary: string;
  provider?: string;
  error?: string;
  errorCode?: string;
}

function parseReport(data: Record<string, unknown>): ReportData {
  const norm = (v: any, fallback: any) => (v !== undefined && v !== null ? v : fallback);
  return {
    score: norm(data.score, norm(data.overall_visibility_score, 0)),
    breakdown: norm(data.breakdown, norm(data.breakdown_scores, { aiVisibility: 0, faqCoverage: 0, entityClarity: 0, authority: 0 })),
    missing: norm(data.missing, norm(data.missing_components, [])),
    suggestions: norm(data.suggestions, norm(data.ai_suggestions, [])),
    summary: norm(data.summary, ''),
    provider: data.provider as string | undefined,
    error: data.error as string | undefined,
    errorCode: data.errorCode as string | undefined,
  };
}

function StatMini({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-6 bg-[#0A0F24]/40 border-white/10 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
        <span className="text-sm font-bold text-primary">{value}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div style={{ width: `${value}%` }} className="h-full bg-primary" />
      </div>
    </Card>
  );
}

function ReportContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState<string>('Initializing...');
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);
  const domain = params.domain as string;

  const lastAnalysisRef = useRef<{ domain: string; timestamp: number } | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      const now = Date.now();

      // 检查冷却时间
      if (lastAnalysisRef.current?.domain === domain && 
          now - lastAnalysisRef.current.timestamp < COOLDOWN_MS) {
        const remainingSeconds = Math.ceil((COOLDOWN_MS - (now - lastAnalysisRef.current.timestamp)) / 1000);
        setError(`Please wait ${remainingSeconds} seconds before analyzing the same domain again.`);
        setLoading(false);
        return;
      }

      // 取消之前的请求
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      try {
        setLoading(true);
        setError(null);
        setLoadingStep('Attempting server-side analysis...');

        // 第一步：尝试服务器端分析
        let response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: domain }),
          signal: abortControllerRef.current.signal,
        });

        if (response.ok) {
          const data = await response.json();
          const parsed = parseReport(data);
          
          if (!parsed.error || !parsed.errorCode?.includes('AUTH')) {
            lastAnalysisRef.current = { domain, timestamp: Date.now() };
            setReport(parsed);
            setLoading(false);
            return;
          }
          console.log('[Report] Server returned AUTH error, continuing to client-side scrape');
        }

        // 第二步：服务器端失败，尝试浏览器端抓取
        setLoadingStep('Server-side blocked, trying browser analysis...');
        console.log('[Report] Server-side failed, trying client-side scrape');

        const scrapeResult = await clientScrapeWebsite(domain);
        
        if (!scrapeResult.error || (scrapeResult.title && scrapeResult.wordCount > 0)) {
          setLoadingStep('Analyzing captured data...');
          const analysisResponse = await fetch('/api/analyze-with-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: domain, scrapeData: scrapeResult }),
            signal: abortControllerRef.current.signal,
          });

          if (analysisResponse.ok) {
            const data = await analysisResponse.json();
            lastAnalysisRef.current = { domain, timestamp: Date.now() };
            setReport(parseReport(data));
            setLoading(false);
            return;
          }

          // 检查是否是速率限制错误
          const errorData = await analysisResponse.json().catch(() => ({}));
          if (analysisResponse.status === 429) {
            throw new Error(
              errorData.error || 
              'Too many requests. Please try again later.'
            );
          }
        }

        throw new Error(
          scrapeResult.error ||
          'Unable to analyze this website. It may block automated requests.'
        );

      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          console.log('[Report] Request aborted');
          return;
        }
        console.error('Failed to fetch report:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch report');
      } finally {
        setLoading(false);
      }
    };

    // Debounce: 延迟执行
    const timeoutId = setTimeout(fetchReport, DEBOUNCE_MS);
    
    return () => {
      clearTimeout(timeoutId);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [domain]);

  const jsonLd = report && !report.error ? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${domain} AI Visibility Score: ${report.score}/100`,
    description: report.summary,
    url: `https://getciteflow.ai/report/${domain}`,
    about: {
      '@type': 'Thing',
      name: 'AI Visibility (GEO)',
      description: 'Generative Engine Optimization score measuring how well a website performs in AI-powered search engines.',
    },
    mainEntity: {
      '@type': 'StatisticalScore',
      name: 'GEO Score',
      value: report.score,
      minValue: 0,
      maxValue: 100,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'AI Visibility', value: report.breakdown.aiVisibility },
        { '@type': 'PropertyValue', name: 'FAQ Coverage', value: report.breakdown.faqCoverage },
        { '@type': 'PropertyValue', name: 'Entity Clarity', value: report.breakdown.entityClarity },
        { '@type': 'PropertyValue', name: 'Authority', value: report.breakdown.authority },
      ],
    },
  } : null;

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
          <Loader2 className="w-12 h-12 text-primary mx-auto mb-6 animate-spin" />
          <h1 className="text-2xl font-bold mb-4">Analyzing {domain}...</h1>
          <p className="text-slate-400 mb-2">{loadingStep}</p>
          <p className="text-xs text-slate-500">This may take a few seconds</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">Failed to Analyze</h1>
          <p className="text-slate-400 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-flex items-center justify-center gap-2">
              Back to Home
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!report) {
    return null;
  }

  if (report.error) {
    return (
      <main className="min-h-screen pb-20 overflow-x-hidden">
        <Navbar />
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-orange-500 opacity-[0.05] blur-[120px] rounded-full -z-10" />
        <div className="pt-28 px-6 md:px-12 max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />Back to Dashboard
          </Link>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">{domain}</h1>
            <p className="text-slate-500">GEO Analysis Report</p>
          </div>
          <ErrorDisplay report={report} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      {jsonLd && <JsonLd data={jsonLd} />}
      <Navbar />
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.05] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.05] blur-[100px] rounded-full -z-10" />
      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12"><ArrowLeft className="w-4 h-4" />Back to Dashboard</Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Card className="md:col-span-4 bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8 flex flex-col items-center justify-between min-h-[360px]">
            <div className="relative w-52 h-52 rounded-full border-8 border-white/10 flex items-center justify-center mt-4">
              <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#6E7BFF ${report.score}%, #8B5CF6 ${report.score}%, rgba(255,255,255,0.07) 0)` }} />
              <div className="w-40 h-40 rounded-full bg-[#0A0F24] border border-white/10 flex flex-col items-center justify-center z-10">
                <span className="text-6xl font-black text-white">{report.score}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Overall</span>
              </div>
            </div>
            <ShareButtons domain={domain} score={report.score} />
          </Card>
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500/80" />Missing Components</h3>
                <ul className="space-y-4">{report.missing.slice(0, 5).map((item, i) => <li key={i} className="text-sm text-white">• {item}</li>)}</ul>
              </Card>
              <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-[#6E7BFF]" />AI Suggestions</h3>
                <ul className="space-y-4">{report.suggestions.slice(0, 5).map((item, i) => <li key={i} className="text-sm text-white">• {item}</li>)}</ul>
              </Card>
            </div>
            <ComparePanel currentDomain={domain} currentScore={report.score} currentBreakdown={report.breakdown} />
          </div>
        </div>
        <Card className="bg-gradient-to-r from-[#6E7BFF]/10 to-transparent border border-[#6E7BFF]/20 rounded-3xl p-8 mt-8 mb-8"><p className="text-sm text-slate-300 leading-relaxed">{report.summary}</p></Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatMini label="AI Visibility" value={report.breakdown.aiVisibility} />
          <StatMini label="FAQ Coverage" value={report.breakdown.faqCoverage} />
          <StatMini label="Entity Clarity" value={report.breakdown.entityClarity} />
          <StatMini label="Authority" value={report.breakdown.authority} />
        </div>
      </div>
    </main>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
          <Loader2 className="w-12 h-12 text-primary mx-auto mb-6 animate-spin" />
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </main>
    }>
      <ReportContent />
    </Suspense>
  );
}
