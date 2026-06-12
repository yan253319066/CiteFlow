'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How We Optimized GetCiteFlow's Own AI Visibility — Eating Our Own Dog Food",
  description: "We built a GEO platform. Then we used it on ourselves. Here's what we found and how we fixed it.",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  author: { "@type": "Person", "name": "Neil Yan", "url": "https://github.com/yan253319066" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/case-studies/nexus-protocol" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.getciteflow.ai/case-studies" },
    { "@type": "ListItem", position: 3, name: "GetCiteFlow", item: "https://www.getciteflow.ai/case-studies/nexus-protocol" },
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
            <Badge className="bg-primary/10 text-primary border-none">SaaS / GEO</Badge>
            <span className="text-slate-500">&bull;</span>
            <span className="text-sm font-medium text-slate-400">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            How We Optimized GetCiteFlow&apos;s<br />
            <span className="gradient-text">Own AI Visibility</span>
          </h1>
          <p className="text-slate-400 text-lg">Eating our own dog food — we ran our GEO platform against ourselves and fixed what we found.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">The Discovery</div>
            <p className="text-sm leading-relaxed">We built a tool that tells other sites why AI doesn&apos;t cite them. Then we ran it on getciteflow.ai — and found we were missing the very things we tell our users to fix.</p>
          </div>
          <div className="bg-[#0A0F24]/60 p-8 rounded-3xl border border-white/10">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest">What We Fixed</div>
            <p className="text-sm leading-relaxed">Added FAQ Schema, built a comprehensive llms.txt, structured our content with clear entity definitions, and optimized meta descriptions for AI snippet extraction.</p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
            <div className="text-xs font-bold text-primary uppercase mb-3 tracking-widest">The Result</div>
            <p className="text-2xl font-black text-white">AI Visibility: 75 &rarr; 92</p>
            <p className="text-[10px] text-slate-500 mt-2">Measured by our own platform, verified with real LLM queries</p>
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
                  <th className="text-left py-3 px-4 text-white font-bold">After</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">AI Visibility Score</td>
                  <td className="py-3 px-4 text-slate-400">75/100</td>
                  <td className="py-3 px-4 text-slate-400">92/100</td>
                  <td className="py-3 px-4 text-primary font-bold">+17</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">FAQ Coverage</td>
                  <td className="py-3 px-4 text-slate-400">0% (no FAQ Schema)</td>
                  <td className="py-3 px-4 text-slate-400">85% (7 structured Q&amp;As)</td>
                  <td className="py-3 px-4 text-primary font-bold">+85%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-semibold">Entity Clarity</td>
                  <td className="py-3 px-4 text-slate-400">Weak — brand not clearly defined for LLMs</td>
                  <td className="py-3 px-4 text-slate-400">Strong — Organization + SoftwareApplication schema</td>
                  <td className="py-3 px-4 text-primary font-bold">Significant</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-white font-semibold">llms.txt</td>
                  <td className="py-3 px-4 text-slate-400">Missing entirely</td>
                  <td className="py-3 px-4 text-slate-400">Complete — all pages indexed for AI crawlers</td>
                  <td className="py-3 px-4 text-primary font-bold">From zero</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">The irony of building a GEO tool</h2>
          <p>We spent months building GetCiteFlow — a platform that analyzes websites and tells you exactly why AI search engines aren&apos;t citing you. We launched it. We started writing blog posts about GEO. We built landing pages targeting &quot;AI visibility&quot; and &quot;how to get cited by ChatGPT.&quot;</p>
          <p>Then one day, almost as a joke, we ran our own tool against getciteflow.ai. The result was humbling: <strong className="text-white">75 out of 100.</strong></p>
          <p>Here we were, telling other companies how to optimize for AI visibility, and our own site was missing the fundamentals. No FAQ Schema. No llms.txt. Weak entity definitions. The irony wasn&apos;t lost on us.</p>

          <h2 className="text-2xl font-bold text-white">What our own scan revealed</h2>
          <p>The scan surfaced four clear issues:</p>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong className="text-white">No FAQ Schema.</strong> We had a FAQ section on the homepage, but it was plain HTML. Without JSON-LD structured data, LLMs couldn&apos;t reliably extract our Q&amp;A pairs for citation.</li>
            <li><strong className="text-white">Missing llms.txt.</strong> AI crawlers like GPTBot and ClaudeBot had no structured index of our site. They were guessing which pages mattered.</li>
            <li><strong className="text-white">Weak entity clarity.</strong> Our brand wasn&apos;t consistently defined across pages. Search engines and LLMs both rely on clear entity definitions to understand what a site is about.</li>
            <li><strong className="text-white">Content not structured for AI extraction.</strong> Our blog posts were well-written for humans, but lacked the clear heading hierarchy, tables, and lists that LLMs use to extract and cite information.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white">What we fixed — in order of impact</h2>
          <p>We prioritized the changes based on what would move the needle fastest:</p>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong className="text-white">Built a comprehensive llms.txt.</strong> This was the quickest win. We listed every important page — blog posts, landing pages, comparison pages, case studies — with clear descriptions. Now when GPTBot or ClaudeBot crawls our site, it knows exactly what&apos;s there. <em>Time: 2 hours.</em></li>
            <li><strong className="text-white">Added FAQ Schema to the homepage.</strong> We converted our existing FAQ section into JSON-LD structured data. Seven questions covering &quot;What is GEO,&quot; &quot;How does GetCiteFlow work,&quot; and common user concerns. <em>Time: 1 hour.</em></li>
            <li><strong className="text-white">Defined our entity clearly.</strong> We added Organization and SoftwareApplication JSON-LD schema to every page, consistently using the same brand name, description, and URL. This tells LLMs: &quot;GetCiteFlow is a GEO platform, not a generic SEO tool.&quot; <em>Time: 3 hours.</em></li>
            <li><strong className="text-white">Restructured blog content for AI readability.</strong> We went through our blog posts and made sure every article had: clear H2/H3 hierarchy, comparison tables where applicable, numbered lists for actionable advice, and a summary section that LLMs could extract as a snippet. <em>Time: 1 day.</em></li>
          </ol>

          <h2 className="text-2xl font-bold text-white">The results: from 75 to 92</h2>
          <p>After implementing these changes, we re-scanned our site. The AI Visibility Score jumped from 75 to 92.</p>
          <p>But the score is just a number. The real test was asking ChatGPT and Claude questions like &quot;what is GEO?&quot; and &quot;how do I get my site cited by AI?&quot; — and seeing GetCiteFlow appear in the answers. It did.</p>
          <p>More importantly, we now had a <strong className="text-white">credible story to tell.</strong> When potential customers ask &quot;does this actually work?&quot; — we can show them our own before-and-after. Not a hypothetical. Not a fabricated case study. Our own site, our own tool, real results.</p>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4">The lesson: build what you need, then use it yourself</h3>
            <p>Every SaaS founder should run their own product against themselves. If you&apos;re building a GEO tool and your own site isn&apos;t optimized for AI visibility, something is wrong. Fixing our own site didn&apos;t just improve our score — it gave us firsthand experience with the exact process our customers go through. That empathy shapes every feature we build.</p>
          </div>

          <h2 className="text-2xl font-bold text-white">Key Takeaways</h2>
          <ol className="list-decimal list-inside space-y-4 text-slate-400">
            <li><strong className="text-white">Run your own tool on yourself first.</strong> If you&apos;re selling GEO optimization and your own site scores poorly, fix that before pitching anyone else.</li>
            <li><strong className="text-white">llms.txt is the highest-impact, lowest-effort change.</strong> It took 2 hours and immediately gave AI crawlers a structured map of our site.</li>
            <li><strong className="text-white">FAQ Schema matters more than you think.</strong> LLMs frequently cite FAQ content in responses. Without structured data, your Q&amp;A is invisible.</li>
            <li><strong className="text-white">Entity clarity compounds.</strong> Consistently defining your brand across all pages helps LLMs build a reliable mental model of what you do.</li>
            <li><strong className="text-white">Content structure is for machines, not just humans.</strong> Clear headings, tables, and lists make your content extractable by AI — which is how citations happen.</li>
          </ol>
        </div>
      </article>
    </main>
  );
}
