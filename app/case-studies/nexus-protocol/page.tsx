'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Nexus Protocol Increased AI Citations by 140%",
  description: "A DeFi protocol that was invisible in ChatGPT despite strong SEO. How GEO fixed it in 3 weeks.",
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: { "@type": "Organization", name: "GetCiteFlow" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies/nexus-protocol&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/case-studies/nexus-protocol" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.getciteflow.ai/case-studies" },
    { "@type": "ListItem", position: 3, name: "Nexus Protocol", item: "https://www.getciteflow.ai/case-studies/nexus-protocol" },
  ],
};

export default function CaseStudyDetail() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-4xl mx-auto">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-none">DeFi / Web3</Badge>
            <span className="text-slate-500">•</span>
            <span className="text-sm font-medium text-slate-400">8 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            How Nexus Protocol <br />
            <span className="gradient-text">Increased AI Citations by 140%</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Challenge</div>
            <p className="text-sm leading-relaxed">Users asking ChatGPT "what's the best yield protocol?" were getting recommendations that didn't include Nexus — even though Nexus had better rates and stronger audited security than the names that kept coming up.</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Solution</div>
            <p className="text-sm leading-relaxed">Restructured their docs and landing pages around the exact language people use when comparing yield protocols, so LLMs could map Nexus to the right user intent.</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">The Result</div>
            <p className="text-2xl font-black text-white">+140% Citation Frequency</p>
            <p className="text-[10px] text-slate-500 mt-2">Verified via GetCiteFlow Monitoring Dashboard</p>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Key Results at a Glance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-white font-bold">Metric</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Before</th>
                  <th className="text-left py-3 px-4 text-white font-bold">After (6 weeks)</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">Citation Frequency (ChatGPT)</td>
                  <td className="py-3 px-4 text-slate-400">~0% of "best DeFi yields" responses</td>
                  <td className="py-3 px-4 text-slate-400">43% of responses</td>
                  <td className="py-3 px-4 text-primary font-bold">+Infinity</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">Cross-LLM Citation Rate</td>
                  <td className="py-3 px-4 text-slate-400">Baseline (near zero)</td>
                  <td className="py-3 px-4 text-slate-400">+140% month-over-month</td>
                  <td className="py-3 px-4 text-primary font-bold">+140%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-white font-semibold">Discord Support Pings</td>
                  <td className="py-3 px-4 text-slate-400">High — "is Nexus any good?" questions</td>
                  <td className="py-3 px-4 text-slate-400">Near zero — users pre-sold by AI</td>
                  <td className="py-3 px-4 text-primary font-bold">-90%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">The problem nobody was talking about</h2>
          <p>Back in September, Alex (their head of growth) noticed something strange. Nexus was ranked well on Google for most of their target keywords. Organic traffic was fine. But when he pulled up ChatGPT and asked it to compare DeFi yield protocols, Nexus wasn't mentioned — even though their TVL and APY numbers were beating the protocols that did show up.</p>
          <p>The issue wasn't SEO. It was that the LLM had been trained on documentation and discussions where Nexus wasn't consistently described using the same language that users type into search prompts. People say "best yield farming protocol" or "highest APY DeFi" — but Nexus's docs talked about "optimized liquidity provisioning" and "capital-efficient pool management." The model couldn't connect the dots.</p>
          
          <h2 className="text-2xl font-bold text-white">What we actually did</h2>
          <p>We started by auditing how LLMs were answering yield-related questions across 40+ prompt variations. For every query that returned a competitor but not Nexus, we traced it back to the source content the model was drawing from. In most cases, the competitor pages used simple, conversational language that matched the query structure almost exactly.</p>
          <p>So instead of rewriting their whole site, we focused on three things:</p>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong className="text-white">The comparison pages.</strong> We added straightforward comparison tables between Nexus and the top 5 protocols — not just features, but real data points: APY, audit history, TVL, withdrawal fees. The kind of table a user would actually want to see when deciding.</li>
            <li><strong className="text-white">The FAQ section.</strong> We rewrote 12 FAQ entries using the exact phrasing that appears in real user queries. Things like "Which protocol has the highest yield?" and "Is Nexus safer than [competitor]?" — direct, no marketing spin.</li>
            <li><strong className="text-white">The llms.txt file.</strong> We created a structured llms.txt with entity definitions that explicitly connected Nexus to the yield-related terms the model was already familiar with.</li>
          </ol>
          <p>The whole thing took about three weeks. A lot of it was just removing the gap between how the product team described their own features internally and how actual users search for them.</p>

          <h2 className="text-2xl font-bold text-white">What changed</h2>
          <p>Within six weeks, Nexus was appearing in 43% of ChatGPT responses about "best DeFi yields" — up from basically zero. The citation frequency across all monitored LLMs increased 140% month-over-month. But the real signal was something Alex noticed by accident: their Discord mods stopped getting pinged with "is Nexus any good?" questions from people who'd heard about the protocol through ChatGPT. New users were already pre-sold because the model had done the comparison for them.</p>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 italic">"We were spending six figures on SEO and paid acquisition, but the thing that actually moved the needle was making sure the AI could explain what we do in plain English. Once we stopped assuming the model would figure it out and started spelling it out, the results came fast."</h3>
            <p className="text-sm font-bold">— Alex Chen, Head of Growth, Nexus Protocol</p>
          </div>

          <h2 className="text-2xl font-bold text-white">Key Takeaways for Your Brand</h2>
          <ol className="list-decimal list-inside space-y-4 text-slate-400">
            <li><strong className="text-white">SEO does not guarantee AI visibility.</strong> Nexus ranked well on Google but was invisible in ChatGPT. The two channels operate on different signals.</li>
            <li><strong className="text-white">Match your language to user queries, not internal terminology.</strong> "Optimized liquidity provisioning" meant nothing to the LLM. "Best yield farming protocol" did.</li>
            <li><strong className="text-white">Comparison pages with real data are the highest-impact change.</strong> Tables with APY, audit history, and fees gave the model structured data it could cite directly.</li>
            <li><strong className="text-white">Results can come in weeks, not months.</strong> Nexus saw measurable citation changes within 6 weeks of making content structure changes.</li>
            <li><strong className="text-white">AI citations reduce support burden.</strong> When the model answers questions accurately, users arrive pre-educated and pre-sold.</li>
          </ol>
        </div>
      </article>
    </main>
  );
}
