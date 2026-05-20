import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, Lightbulb, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { analyzeSite } from '@/lib/analyze';
import { verifyAnalysisToken } from '@/lib/verification';
import { ShareButtons } from '@/components/ShareButtons';
import { JsonLd } from '@/components/JsonLd';

export const maxDuration = 60;

interface ReportData {
  score: number;
  breakdown: { aiVisibility: number; faqCoverage: number; entityClarity: number; authority: number };
  missing: string[];
  suggestions: string[];
  summary: string;
  provider?: string;
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
  const { token } = await searchParams;

  const canonicalUrl = `https://getciteflow.ai/report/${domain}`;
  const ogImageBase = `https://getciteflow.ai/api/og?domain=${encodeURIComponent(domain)}`;
  const keywords = [
    domain, 'AI Visibility', 'GEO', 'Generative Engine Optimization',
    'ChatGPT SEO', 'AI search ranking', 'GEO score', 'AI readiness',
    'LLM visibility', 'AI search optimization',
  ];

  if (!token || typeof token !== 'string') {
    return {
      title: `${domain} AI Visibility Score & GEO Report | CiteFlow`,
      description: `Check the Generative Engine Optimization (GEO) score for ${domain}. See how well your site is optimized for AI search engines like ChatGPT, Gemini, and Claude. Get actionable suggestions to improve your AI visibility.`,
      keywords,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: `${domain} AI Visibility Score — Free GEO Report`,
        description: `See how ${domain} ranks in AI search and get personalized suggestions to improve.`,
        url: canonicalUrl,
        images: [{ url: ogImageBase, width: 1200, height: 630 }],
      },
      twitter: { card: 'summary_large_image', title: `${domain} — Free GEO Report`, description: `Check the GEO score for ${domain}.`, images: [ogImageBase] },
    };
  }

  let fullTitle = `${domain} AI Visibility Score & GEO Report | CiteFlow`;
  let ogDesc = `GEO score report for ${domain}`;
  let ogImage = ogImageBase;

  try {
    if (await verifyAnalysisToken(token)) {
      const data = await analyzeSite(domain);
      const report = parseReport(data);
      fullTitle = `${domain} AI Visibility Score: ${report.score}/100 | CiteFlow GEO Report`;
      ogDesc = `AI Visibility score for ${domain}: ${report.score}/100. ${report.summary}`;
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
    openGraph: { title: fullTitle, description: ogDesc, url: canonicalUrl, images: [{ url: ogImage, width: 1200, height: 630 }] },
  };
}

async function getReport(domain: string, token: string): Promise<ReportData | null> {
  try {
    if (!(await verifyAnalysisToken(token))) return null;

    const data = await analyzeSite(domain);
    return parseReport(data);
  } catch (e) {
    console.error('[getReport] error:', e);
    return null;
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

export default async function ReportPage({ params, searchParams }: { params: Promise<{ domain: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { domain } = await params;
  const { token } = await searchParams;

  if (!token || typeof token !== 'string') {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
          <ShieldAlert className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Verification Required</h1>
          <p className="text-muted-foreground mb-8">Please complete the CAPTCHA on the home page before viewing a report.</p>
          <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block">Go to Home</Link>
        </div>
      </main>
    );
  }

  const report = await getReport(domain, token);

  if (!report) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Analysis Failed</h1>
          <p className="text-muted-foreground mb-8">We could not analyze {domain} now. Please try again.</p>
          <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block">Try Another Site</Link>
        </div>
      </main>
    );
  }

  const jsonLd = {
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
  };

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
        <JsonLd data={jsonLd} />
        <Navbar />
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.05] blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.05] blur-[100px] rounded-full -z-10" />
        <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12"><ArrowLeft className="w-4 h-4" />Back to Dashboard</Link>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
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
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500/80" />Missing Components</h3>
                <ul className="space-y-4">{report.missing.slice(0, 5).map((item, i) => <li key={i} className="text-sm text-white">• {item}</li>)}</ul>
              </Card>
              <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-[#6E7BFF]" />AI Suggestions</h3>
                <ul className="space-y-4">{report.suggestions.slice(0, 5).map((item, i) => <li key={i} className="text-sm text-white">• {item}</li>)}</ul>
              </Card>
            </div>
          </div>
          <Card className="bg-gradient-to-r from-[#6E7BFF]/10 to-transparent border border-[#6E7BFF]/20 rounded-3xl p-8 mb-8"><p className="text-sm text-slate-300 leading-relaxed">{report.summary}</p></Card>
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
