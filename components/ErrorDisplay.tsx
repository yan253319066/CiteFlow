'use client';

import { Card } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ReportData {
  score: number;
  breakdown: { aiVisibility: number; faqCoverage: number; entityClarity: number; authority: number };
  missing: string[];
  suggestions: string[];
  summary: string;
  error?: string;
  errorCode?: string;
}

interface ErrorDisplayProps {
  report: ReportData;
}

export function ErrorDisplay({ report }: ErrorDisplayProps) {
  return (
    <Card className="bg-[#0A0F24]/60 border-orange-500/30 rounded-3xl p-8 text-center">
      <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
      <h2 className="text-2xl font-bold text-white mb-4">Analysis Failed</h2>
      <p className="text-slate-400 mb-6">{report.summary}</p>
      
      {report.error && (
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-6">
          <p className="text-sm text-orange-400 font-mono">{report.error}</p>
          {report.errorCode && (
            <p className="text-xs text-orange-500/70 mt-2">Error Code: {report.errorCode}</p>
          )}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
        <Card className="bg-[#0A0F24]/40 border-white/10 rounded-2xl p-6">
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">What's Missing</h3>
          <ul className="space-y-3">
            {report.missing.slice(0, 3).map((item, i) => (
              <li key={i} className="text-sm text-white">• {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="bg-[#0A0F24]/40 border-white/10 rounded-2xl p-6">
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Suggested Actions</h3>
          <ul className="space-y-3">
            {report.suggestions.slice(0, 3).map((item, i) => (
              <li key={i} className="text-sm text-white">• {item}</li>
            ))}
          </ul>
        </Card>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-flex items-center justify-center gap-2">
          Try Another Site
        </Link>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
        >
          Try Again
        </button>
      </div>
    </Card>
  );
}