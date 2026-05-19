import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

interface ReportData {
  score: number;
  breakdown: { aiVisibility: number; faqCoverage: number; entityClarity: number; authority: number };
  missing: string[];
  suggestions: string[];
  summary: string;
  provider?: string;
}

export async function generateMetadata({ params }: { params: Promise<{ domain: string }> }): Promise<Metadata> {
  const { domain } = await params;
  const title = `CiteFlow Report for ${domain}`;
  return {
    title,
    description: `AI visibility report and GEO suggestions for ${domain}.`,
    keywords: ['AI Visibility', 'GEO', 'ChatGPT SEO', domain],
    alternates: { canonical: `https://citeflow.ai/report/${domain}` },
    twitter: { card: 'summary_large_image', title, description: `GEO score report for ${domain}` },
    openGraph: { title, description: `GEO score report for ${domain}`, url: `https://citeflow.ai/report/${domain}` },
  };
}

async function getReport(domain: string): Promise<ReportData | null> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${base}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: domain }),
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
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
  const report = await getReport(domain);

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

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      <Navbar />
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.05] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.05] blur-[100px] rounded-full -z-10" />
      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12"><ArrowLeft className="w-4 h-4" />Back to Dashboard</Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <Card className="md:col-span-4 bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[360px]">
            <div className="relative w-52 h-52 rounded-full border-8 border-white/10 flex items-center justify-center mb-8">
              <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#6E7BFF ${report.score}%, #8B5CF6 ${report.score}%, rgba(255,255,255,0.07) 0)` }} />
              <div className="w-40 h-40 rounded-full bg-[#0A0F24] border border-white/10 flex flex-col items-center justify-center z-10">
                <span className="text-6xl font-black text-white">{report.score}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Overall</span>
              </div>
            </div>
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
