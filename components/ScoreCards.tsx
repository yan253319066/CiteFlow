'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileSearch, MessageSquare, Building2, BarChart3 } from 'lucide-react';

const features = [
  { 
    icon: FileSearch, 
    title: 'AI Visibility Score', 
    description: 'Measure how well your site is optimized for AI search engines and chatbots.',
    status: 'optimized'
  },
  { 
    icon: MessageSquare, 
    title: 'FAQ Coverage', 
    description: 'Evaluate your FAQ schema implementation and question-answer content quality.',
    status: 'optimized'
  },
  { 
    icon: Building2, 
    title: 'Entity Clarity', 
    description: 'Assess how clearly your content defines entities and topics for AI understanding.',
    status: 'optimized'
  },
  { 
    icon: BarChart3, 
    title: 'Authority Signals', 
    description: 'Check technical SEO factors that establish your site as a trusted source.',
    status: 'optimized'
  },
];

export function ScoreCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">GEO Analysis Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive analysis across four key dimensions to maximize your AI visibility
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-[#0A0F24]/60 border-white/10 rounded-2xl group hover:border-[#6E7BFF]/50 transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm flex-1">{feature.description}</p>
                
                <Badge variant="outline" className="mt-4 border-[#6E7BFF]/30 text-[#6E7BFF] bg-[#6E7BFF]/5">
                  {feature.status === 'optimized' ? 'Optimized' : 'Analysis'}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

