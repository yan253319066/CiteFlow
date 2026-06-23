import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, ArrowRight, Clock, Lightbulb, ShieldAlert } from 'lucide-react';
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

  const canonicalUrl = `https://www.getciteflow.ai/zh/report/${domain}`;
  const ogImageBase = `https://www.getciteflow.ai/api/og?domain=${encodeURIComponent(domain)}&locale=zh`;

  let fullTitle = `${domain} AI 可见度评分 | GetCiteFlow 中文`;
  let ogDesc = `${domain} 的 AI 可见度检测`;
  let ogImage = ogImageBase;

  if (withDomain) {
    fullTitle = `${domain} vs ${withDomain}：AI 可见度对比 | GetCiteFlow 中文`;
    ogDesc = `对比 ${domain} 和 ${withDomain} 的 AI 可见度评分。`;
  }

  try {
    const data = await analyzeSite(domain);
    if (data.error && (data.errorType === 'TIMEOUT' || data.errorCode === 1001)) {
      fullTitle = `${domain} - 分析超时 | GetCiteFlow 中文`;
      ogDesc = `${domain} 的分析超时。请稍后重试。`;
    } else {
      const report = parseReport(data);
      fullTitle = withDomain
        ? `${domain}（${report.score}/100）vs ${withDomain}：AI 可见度对比 | GetCiteFlow 中文`
        : `${domain} AI 可见度评分：${report.score}/100 | GetCiteFlow 中文`;
      ogDesc = withDomain
        ? `${domain} 的 AI 可见度评分为 ${report.score}/100。对比 ${withDomain}。`
        : `${domain} 的 AI 可见度评分：${report.score}/100。`;
      ogImage = `${ogImageBase}&score=${report.score}`;
    }
  } catch {
    // fallback
  }

  return {
    title: fullTitle,
    description: ogDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        zh: canonicalUrl,
        en: `https://www.getciteflow.ai/report/${domain}`,
        'x-default': `https://www.getciteflow.ai/report/${domain}`,
      },
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description: ogDesc, images: [ogImage] },
    openGraph: { title: fullTitle, description: ogDesc, url: canonicalUrl, siteName: 'GetCiteFlow 中文', images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }] },
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

export default async function ZhReportPage({ params }: { params: Promise<{ domain: string }> }) {
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
              <h1 className="text-3xl font-bold mb-4">请求过于频繁</h1>
              <p className="text-muted-foreground mb-2">您本小时的检测次数已用完。</p>
              <p className="text-muted-foreground mb-8">请稍后再试。</p>
            </>
          ) : result.reason === 'service_unavailable' ? (
            <>
              <AlertTriangle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">服务暂时不可用</h1>
              <p className="text-muted-foreground mb-2">限流服务暂时不可用。</p>
              <p className="text-muted-foreground mb-8">请稍后重试或联系支持。</p>
            </>
          ) : result.reason === 'timeout' ? (
            <>
              <Clock className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">分析超时</h1>
              <p className="text-muted-foreground mb-2">目标网站响应超时。这通常是因为网站速度较慢或启用了反爬保护。</p>
              <p className="text-muted-foreground mb-4">您可以重试或分析其他网站。</p>
              <Link href="/zh" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block mb-4">检测其他网站</Link>
            </>
          ) : (
            <>
              <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">分析失败</h1>
              <p className="text-muted-foreground mb-8">无法分析 {domain}。请稍后重试。</p>
            </>
          )}
          <Link href="/zh" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold inline-block">返回首页</Link>
        </div>
      </main>
    );
  }

  const report = result.data;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${domain} AI 可见度评分：${report.score}/100`,
    description: report.summary,
    url: `https://www.getciteflow.ai/zh/report/${domain}`,
    about: {
      '@type': 'Thing',
      name: 'AI 可见度（GEO）',
      description: '衡量品牌在 AI 搜索结果中表现的 AI 可见度评分。',
    },
    mainEntity: {
      '@type': 'PropertyValue',
      name: 'AI 可见度评分',
      value: report.score,
      minValue: 0,
      maxValue: 100,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'AI 可见度', value: report.breakdown.aiVisibility },
        { '@type': 'PropertyValue', name: 'FAQ 覆盖', value: report.breakdown.faqCoverage },
        { '@type': 'PropertyValue', name: '实体清晰度', value: report.breakdown.entityClarity },
        { '@type': 'PropertyValue', name: '权威性', value: report.breakdown.authority },
        ...(report.breakdown.contentStructure != null ? [{ '@type': 'PropertyValue', name: '内容结构', value: report.breakdown.contentStructure }] : []),
        ...(report.breakdown.summaryOptimization != null ? [{ '@type': 'PropertyValue', name: '摘要优化', value: report.breakdown.summaryOptimization }] : []),
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
          <Link href="/zh" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12"><ArrowLeft className="w-4 h-4" />返回首页</Link>
          <h1 className="text-2xl font-bold text-white mb-8">{domain} — AI 可见度评分</h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Card className="md:col-span-4 bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8 flex flex-col items-center justify-between min-h-[360px]">
              <div className="relative w-52 h-52 rounded-full border-8 border-white/10 flex items-center justify-center mt-4">
                <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#6E7BFF ${report.score}%, #8B5CF6 ${report.score}%, rgba(255,255,255,0.07) 0)` }} />
                <div className="w-40 h-40 rounded-full bg-[#0A0F24] border border-white/10 flex flex-col items-center justify-center z-10">
                  <span className="text-6xl font-black text-white">{report.score}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">综合评分</span>
                </div>
              </div>
              <ShareButtons domain={domain} score={report.score} />
            </Card>
            <div className="md:col-span-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500/80" />缺失组件</h3>
                  <ul className="space-y-4">{report.missing.slice(0, 5).map((item, i) => <li key={i} className="text-sm text-white">• {item}</li>)}</ul>
                </Card>
                <Card className="bg-[#0A0F24]/60 border-white/10 rounded-3xl p-8">
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-[#6E7BFF]" />AI 建议</h3>
                  <ul className="space-y-4">{report.suggestions.slice(0, 5).map((item, i) => <li key={i} className="text-sm text-white">• {item}</li>)}</ul>
                </Card>
              </div>
              <ComparePanel currentDomain={domain} currentScore={report.score} currentBreakdown={report.breakdown} />
            </div>
          </div>
          <Card className="bg-gradient-to-r from-[#6E7BFF]/10 to-transparent border border-[#6E7BFF]/20 rounded-3xl p-8 mt-8 mb-8"><p className="text-sm text-slate-300 leading-relaxed">{report.summary}</p></Card>

          {/* Enterprise CTA */}
          <div className="bg-gradient-to-r from-[#6E7BFF]/10 via-[#8B5CF6]/10 to-transparent border border-[#6E7BFF]/20 rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">希望我们为您修复这些问题？</h3>
              <p className="text-sm text-slate-400">我们的团队为您处理品牌可见性优化——FAQ Schema、llms.txt、实体优化等——让您省心省力。</p>
            </div>
            <a href="mailto:support@getciteflow.ai" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shrink-0">
              联系我们 <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Newsletter CTA */}
          <div className="border border-white/10 rounded-3xl p-8 mb-8 text-center">
            <h3 className="text-lg font-bold text-white mb-2">每周获取 GEO 技巧</h3>
            <p className="text-sm text-slate-400 mb-4">AI 可见度策略、案例研究和实用技巧——无垃圾邮件。</p>
            <a href="mailto:support@getciteflow.ai?subject=Subscribe%20to%20GEO%20Newsletter" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors">
              通过邮件订阅 <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-slate-600 mt-3">不发送垃圾邮件，可随时退订。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatMini label="AI 可见度" value={report.breakdown.aiVisibility} />
            <StatMini label="FAQ 覆盖" value={report.breakdown.faqCoverage} />
            <StatMini label="实体清晰度" value={report.breakdown.entityClarity} />
            <StatMini label="权威性" value={report.breakdown.authority} />
            <StatMini label="内容结构" value={report.breakdown.contentStructure ?? 0} />
            <StatMini label="摘要优化" value={report.breakdown.summaryOptimization ?? 0} />
          </div>
        </div>
    </main>
  );
}
