'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';


const exampleReports = [
  { project: "AI Visibility", score: 72, status: "good" },
  { project: "FAQ Coverage", score: 41, status: "warning" },
  { project: "Entity Clarity", score: 88, status: "good" },
];

function ScoreCard({ item, idx }: { item: typeof exampleReports[number]; idx: number }) {
  const { ref, isInView } = useInView(0.2);
  return (
    <div ref={ref} className={isInView ? `animate-fade-in-up stagger-delay-${idx === 0 ? 0 : idx}` : ''}>
      <Card className="p-8 bg-[#0A0F24]/60 border-white/10 rounded-3xl group hover:border-[#6E7BFF]/50 transition-all flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-bold tracking-widest text-[#94a3b8] uppercase">{item.project}</span>
          <Badge variant="outline" className={item.status === 'good' ? 'border-[#6E7BFF]/30 text-[#6E7BFF] bg-[#6E7BFF]/5' : 'border-yellow-500/30 text-yellow-500 bg-yellow-500/5'}>
            {item.status === 'good' ? 'Optimized' : 'Issue'}
          </Badge>
        </div>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="text-5xl font-black">{item.score}</span>
            <span className="text-xs font-bold text-slate-500 ml-1">/100</span>
          </div>
          <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-out ${item.status === 'good' ? 'bg-[#6E7BFF]' : 'bg-yellow-500'}`}
              style={{ width: isInView ? `${item.score}%` : '0%', transitionDelay: `${idx * 0.2}s` }}
            />
          </div>
        </div>
        
        {/* Decoration */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 blur-3xl -z-10 rounded-full group-hover:bg-primary/10 transition-colors" />
      </Card>
    </div>
  );
}

export function ScoreCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {exampleReports.map((item, idx) => (
            <ScoreCard key={item.project} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

