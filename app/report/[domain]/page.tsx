'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { WaitlistModal } from '@/components/WaitlistModal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, CheckCircle2, ChevronRight, Info, AlertTriangle, Lightbulb } from 'lucide-react';
import Link from 'next/link';

interface ReportData {
  score: number;
  breakdown: {
    aiVisibility: number;
    faqCoverage: number;
    entityClarity: number;
    authority: number;
  };
  missing: string[];
  suggestions: string[];
  summary: string;
}

export default function ReportPage() {
  const params = useParams();
  const domain = params.domain as string;
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    async function fetchReport() {
      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: domain }),
        });
        if (!res.ok) throw new Error('Failed');
        const data = await res.ok ? await res.json() : null;
        setReport(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (domain) fetchReport();
  }, [domain]);

  if (loading) return <ReportLoading domain={domain} />;
  if (error || !report) return <ReportError domain={domain} />;

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      <Navbar />
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.05] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.05] blur-[100px] rounded-full -z-10" />

      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Main Score Card */}
          <Card className="md:col-span-4 bg-[#0A0F24]/60 border-white/10 rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden min-h-[350px] md:min-h-[400px]">
             <div className="absolute top-0 right-0 p-6">
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">GEO Report</span>
            </div>
            
            <div className="relative flex items-center justify-center mb-10 scale-75 md:scale-100">
              <svg className="w-56 h-56 transform -rotate-90">
                <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                <motion.circle 
                  cx="112" 
                  cy="112" 
                  r="100" 
                  stroke="url(#scoreGrad)" 
                  strokeWidth="12" 
                  strokeDasharray={2 * Math.PI * 100} 
                  initial={{ strokeDashoffset: 2 * Math.PI * 100 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 100 * (1 - report.score / 100) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round" 
                  fill="transparent" 
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#6E7BFF" }} />
                    <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-7xl font-black text-white"
                >
                  {report.score}
                </motion.span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Overall Score</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="text-center">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Visibility</div>
                <div className="text-xl font-bold text-[#6E7BFF]">{report.score > 70 ? 'High' : 'Moderate'}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Status</div>
                <div className="text-xl font-bold text-[#8B5CF6]">Active</div>
              </div>
            </div>
          </Card>

          {/* Detailed Statistics & Breakdown */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Missing Components */}
              <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500/80" />
                  Missing Components
                </h3>
                <ul className="space-y-6">
                  {report.missing.slice(0, 3).map((item, id) => (
                    <li key={id} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border-2 border-yellow-500/30 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">{item}</div>
                        <div className="text-[11px] text-slate-500 leading-tight">Optimization required for AI crawlers.</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Suggestions */}
              <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#6E7BFF]" />
                  AI Suggestions
                </h3>
                <ul className="space-y-6">
                  {report.suggestions.slice(0, 3).map((suggestion, id) => (
                    <li key={id} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border-2 border-[#6E7BFF]/30 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-[#6E7BFF] rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">{suggestion}</div>
                        <div className="text-[11px] text-slate-500 leading-tight">Recommended by Gemini analysis.</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Bottom Full Width Card */}
            <Card className="bg-gradient-to-r from-[#6E7BFF]/10 to-transparent border border-[#6E7BFF]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
              <div className="max-w-xl">
                <h4 className="text-xl font-bold mb-2">Detailed Report: {domain}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {report.summary}
                </p>
              </div>
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
              >
                Unlock Pro Insights
              </button>
            </Card>
          </div>
        </div>

        {/* Feature Breakdown Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatMini label="AI Visibility" value={report.breakdown.aiVisibility} />
          <StatMini label="FAQ Coverage" value={report.breakdown.faqCoverage} />
          <StatMini label="Entity Clarity" value={report.breakdown.entityClarity} />
          <StatMini label="Authority" value={report.breakdown.authority} />
        </div>
      </div>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  );
}

function StatMini({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-6 bg-[#0A0F24]/40 border-white/10 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
        <span className="text-sm font-bold text-primary">{value}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary" 
        />
      </div>
    </Card>
  );
}


function ReportLoading({ domain }: { domain: string }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 px-6 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <Skeleton className="h-4 w-32 mb-8 bg-white/5" />
          <Skeleton className="h-16 w-full mb-6 bg-white/5" />
          <Skeleton className="h-24 w-3/4 mb-12 bg-white/5" />
        </div>
        <div className="grid grid-cols-4 gap-6 mb-16">
          {[1,2,3,4].map(i => <Skeleton key={i} className="h-24 bg-white/5" />)}
        </div>
        <div className="grid grid-cols-2 gap-12">
          <Skeleton className="h-64 bg-white/5" />
          <Skeleton className="h-64 bg-white/5" />
        </div>
      </div>
    </main>
  );
}

function ReportError({ domain }: { domain: string }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 px-6 max-w-5xl mx-auto text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Analysis Failed</h1>
        <p className="text-muted-foreground mb-8">We couldn't analyze {domain} at this moment. Please check the URL and try again.</p>
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block">
          Try Another Site
        </Link>
      </div>
    </main>
  );
}
