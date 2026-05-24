import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, Clock, Lightbulb, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { analyzeSite } from '@/lib/analyze';
import { checkRateLimit } from '@/lib/ratelimit';
import { ShareButtons } from '@/components/ShareButtons';
import { ComparePanel } from '@/components/ComparePanel';
import { JsonLd } from '@/components/JsonLd';

export const maxDuration = 60;

interface ReportData {
  score: number;
  breakdown: { aiVisibility: number; faqCoverage: number; entityClarity: number; authority: number; contentStructure?: number; summaryOptimization?: number };
  missing: string[];
  suggestions: string[];
  summary: string;
  provider?: string;
  error?: boolean;
  errorType?: string;
  errorMessage?: string;
  errorCode?: number;
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
  };
}

export async function generateMetadata({ params, searchParams }: { params: Promise<{ domain: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<Metadata> {
  const { domain } = await params;
  const { with: withDomain } = await searchParams;

  const canonicalUrl = `https://www.getciteflow.ai/report/${domain}`;
  const ogImageBase = `https://www.getciteflow.ai/api/og?domain=${encodeURIComponent(domain)}`;
  const keywords = [
    domain, 'AI Visibility', 'GEO', 'Generative Engine Optimization',
    'ChatGPT SEO', 'AI search ranking', 'GEO score', 'AI readiness',
    'LLM visibility', 'AI search optimization', 'GEO tool', 'AI visibility checker',
    'free GEO report', 'AI citation checker',
    ...(withDomain ? [withDomain as string, `${domain} vs ${withDomain}`, 'GEO comparison'] : []),
  ];

  let fullTitle = `${domain} AI Visibility Score & GEO Report | GetCiteFlow`;
  let ogDesc = `GEO score report for ${domain}`;
  let ogImage = ogImageBase;

  if (withDomain) {
    fullTitle = `${domain} vs ${withDomain}: AI Visibility Comparison | GetCiteFlow`;
    ogDesc = `Compare the GEO scores of ${domain} and ${withDomain}. See who AI recommends and why.`;
  }

  try {
    const data = await analyzeSite(domain);
    if (data.error && (data.errorType === 'TIMEOUT' || data.errorCode === 1001)) {
      fullTitle = `${domain} - Analysis Timed Out | GetCiteFlow`;
      ogDesc = `Analysis for ${domain} timed out. Upgrade to Pro for longer timeouts and priority processing.`;
    } else {
      const report = parseReport(data);
      fullTitle = withDomain
        ? `${domain} (${report.score}/100) vs ${withDomain}: GEO Comparison | GetCiteFlow`
        : `${domain} AI Visibility Score: ${report.score}/100 | GetCiteFlow GEO Report`;
      ogDesc = withDomain
        ? `${domain} scores ${report.score}/100 on AI Visibility. Compare against ${withDomain} and see who AI recommends.`
        : `AI Visibility score for ${domain}: ${report.score}/100. ${report.summary}`;
      ogImage = `${ogImageBase}&score=${report.score}`;
    }
  } catch {
    // fallback
  }

  return {
    title: fullTitle,
    description: ogDesc,
    keywords,
    alternates: { canonical: canonicalUrl },
    twitter: { card: 'summary_large_image', title: fullTitle, description: ogDesc, images: [ogImage] },
    openGraph: { title: fullTitle, description: ogDesc, url: canonicalUrl, siteName: 'GetCiteFlow', images: [{ url: ogImage, width: 1200, height: 630 }] },
  };
}

type ReportResult =
  | { ok: true; data: ReportData }
  | { ok: false; reason: 'rate_limited' }
  | { ok: false; reason: 'service_unavailable' }
  | { ok: false; reason: 'timeout' }
  | { ok: false; reason: 'failed' };

async function getReport(domain: string, ip: string): Promise<ReportResult> {
  try {
    const result = await checkRateLimit(ip);
    if (!result.success) {
      if (result.reason === 'redis_unavailable') {
        return { ok: false, reason: 'service_unavailable' };
      }
      return { ok: false, reason: 'rate_limited' };
    }
    const data = await analyzeSite(domain);
    if (data.error && (data.errorType === 'TIMEOUT' || data.errorCode === 1001)) {
      return { ok: false, reason: 'timeout' };
    }
    return { ok: true, data: parseReport(data) };
  } catch (e) {
    const msg = (e as Error).message || '';
    if (
      msg.toLowerCase().includes('timeout') ||
      msg.toLowerCase().includes('timed out') ||
      msg.includes('ETIMEDOUT') ||
      msg.includes('ECONNRESET') ||
      msg.includes('Connection closed')
    ) {
      return { ok: false, reason: 'timeout' };
    }
    console.error('[getReport] error:', e);
    return { ok: false, reason: 'failed' };
  }
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

export default async function ReportPage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  const forwardedFor = (await headers()).get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : "anonymous";

  const result = await getReport(domain, ip);

  if (!result.ok) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
          {result.reason === 'rate_limited' ? (
            <>
              <ShieldAlert className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Rate Limit Reached</h1>
              <p className="text-muted-foreground mb-2">You have used all available analysis requests for this hour.</p>
              <p className="text-muted-foreground mb-8">Please wait and try again later.</p>
            </>
          ) : result.reason === 'service_unavailable' ? (
            <>
              <AlertTriangle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Service Unavailable</h1>
              <p className="text-muted-foreground mb-2">Our rate limiting service is temporarily unavailable.</p>
              <p className="text-muted-foreground mb-8">Please try again later or contact support.</p>
            </>
          ) : result.reason === 'timeout' ? (
            <>
              <Clock className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Analysis Timed Out</h1>
              <p className="text-muted-foreground mb-2">The target website took too long to respond. This usually happens when the site is slow or has anti-bot protections.</p>
              <p className="text-muted-foreground mb-4">Upgrading to <strong>Pro</strong> extends the timeout limit and gives priority processing for faster results.</p>
              <Link href="/pricing" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block mb-4">View Pro Plans</Link>
              <p className="text-muted-foreground text-sm">You can also try a different website in the meantime.</p>
            </>
          ) : (
            <>
              <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Analysis Failed</h1>
              <p className="text-muted-foreground mb-8">We could not analyze {domain} now. Please try again.</p>
            </>
          )}
          <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block">Back to Home</Link>
        </div>
      </main>
    );
  }

  const report = result.data;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${domain} AI Visibility Score: ${report.score}/100`,
    description: report.summary,
    url: `https://www.getciteflow.ai/report/${domain}`,
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
        ...(report.breakdown.contentStructure != null ? [{ '@type': 'PropertyValue', name: 'Content Structure', value: report.breakdown.contentStructure }] : []),
        ...(report.breakdown.summaryOptimization != null ? [{ '@type': 'PropertyValue', name: 'Summary Optimization', value: report.breakdown.summaryOptimization }] : []),
      ],
    },
  };

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
        <JsonLd data={jsonLd} />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatMini label="AI Visibility" value={report.breakdown.aiVisibility} />
            <StatMini label="FAQ Coverage" value={report.breakdown.faqCoverage} />
            <StatMini label="Entity Clarity" value={report.breakdown.entityClarity} />
            <StatMini label="Authority" value={report.breakdown.authority} />
            <StatMini label="Content Structure" value={report.breakdown.contentStructure ?? 0} />
            <StatMini label="Summary Optimization" value={report.breakdown.summaryOptimization ?? 0} />
          </div>
        </div>
    </main>
  );
}
