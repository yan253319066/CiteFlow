'use client';

import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useDictionary } from '@/i18n/useDictionary';
import {
  MessageCircle,
  AtSign,
  FileText,
  Radar,
  Share2,
  Rocket,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  Repeat,
} from 'lucide-react';

const zhOfferings = [
  { icon: Radar, title: 'AI 影响审计', desc: '我们分析 AI 模型在你所在行业信任的平台、出版物和来源，然后构建针对最高影响力机会的定制化可见度路线图。' },
  { icon: AtSign, title: '品牌实体建设', desc: '确保你的品牌名称、产品和关键信息在 AI 系统依赖的权威来源上被正确结构化。' },
  { icon: MessageCircle, title: '行业平台策略', desc: '在你行业重要的在线社区、评论网站和平台上进行战略性存在建设——在受众互动和 AI 寻找信号的地方。' },
  { icon: FileText, title: '引用优化内容', desc: '为 AI 引用概率设计的内容简报和日历。我们以 AI 模型优先的结构格式化内容——清晰的实体定义、权威声明和可检索格式。' },
  { icon: Target, title: '竞争对手引用差距分析', desc: '持续监控你的品牌和竞争对手在 AI 系统中的出现情况。发现对手有而你没有的差距，用有针对性的策略填补。' },
  { icon: Share2, title: '跨平台分发', desc: '将你的品牌内容分发到 AI 在你行业中最积极索引的平台——针对时间、格式和聚合进行优化，以最大化引用收益。' },
  { icon: BarChart3, title: '监控与迭代', desc: '月度跟踪 AI 引用增长、声量份额和新机会。策略根据你行业引用格局的真实数据持续演进。' },
];

const zhSteps = [
  { icon: Radar, step: '01', title: '审计', desc: '分析你当前的 AI 可见度状况，发现最高影响力的机会。' },
  { icon: Target, step: '02', title: '策略', desc: '围绕你的行业、受众和竞争格局制定定制化路线图。' },
  { icon: Repeat, step: '03', title: '执行', desc: '团队在关键平台上执行策略，构建随时间累积的信号。' },
  { icon: BarChart3, step: '04', title: '监控与迭代', desc: '月度报告跟踪引用增长和声量份额，根据数据调整策略。' },
];

const stepsIcons = [Radar, Target, Repeat, BarChart3];

export default function ZhServicesPage() {
  const dict = useDictionary()!;
  const t = dict.services;

  return (
    <main className="min-h-screen pb-20">
      <Navbar />

      {/* Hero */}
      <article className="pt-32 px-6 max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[400px] h-[400px] bg-[#6E7BFF] opacity-[0.06] blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[-10%] right-[15%] w-[300px] h-[300px] bg-[#8B5CF6] opacity-[0.08] blur-[100px] rounded-full -z-10" />

        <Link href="/zh" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-16">
          {t.backToHome}
        </Link>

        <header className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8"
          >
            <Rocket className="w-3 h-3 text-primary" />
            <span>{t.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            AI 可见度<span className="gradient-text"> {t.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-500 mb-14"
          >
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {t.monthlyEngagement}</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {t.fromPrice}</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {t.industrySpecific}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="mailto:support@getciteflow.ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-4 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              {t.getStarted} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </header>
      </article>

      {/* What We Offer */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">{t.whatWeOffer}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.sectionTitle}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zhOfferings.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-[#0A0F24]/40 border-white/10 rounded-2xl h-full hover:border-white/20 transition-colors group">
                  <Icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{offering.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">{t.process}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.howItWorksSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {zhSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest">{step.step}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-none">{t.deliverables}</Badge>
            <h2 className="text-3xl font-bold mb-4">{t.deliverablesTitle}</h2>
            <p className="text-slate-400 mb-8">{t.deliverablesSubtitle}</p>
            <div className="space-y-4">
              {t.deliverablesList.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-8 border border-primary/40 bg-primary/5 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">{t.readyTitle}</h3>
            <p className="text-sm text-slate-400 mb-6">{t.readyDesc}</p>
            <Link
              href="/zh/pricing"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold border border-primary/40 bg-primary/10 text-white hover:bg-primary/20 transition-all cursor-pointer mb-3"
            >
              {t.viewPricing} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:support@getciteflow.ai"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer mb-3"
            >
              {t.contactUs} <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-slate-500 text-center">或发送邮件至 support@getciteflow.ai</p>
          </div>
        </div>
      </section>
    </main>
  );
}
