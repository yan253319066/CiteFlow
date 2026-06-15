'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "We Built an AI Visibility Scanner, Ran It on Ourselves, and Scored 75/100 — Here's What We Fixed",
  description: "Eating our own dog food: we ran GetCiteFlow against getciteflow.ai, found we were missing FAQ Schema, llms.txt, and entity clarity. Fixed everything and went from 75 to 92.",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  author: { "@type": "Person", "name": "Neil Yan", "url": "https://github.com/yan253319066" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/eating-our-own-dog-food" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "Eating Our Own Dog Food", item: "https://www.getciteflow.ai/blog/eating-our-own-dog-food" },
  ],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-none">AI Visibility</Badge>
            <Badge className="bg-primary/10 text-primary border-none">Case Study</Badge>
            <span className="text-slate-500">&bull;</span>
            <span className="text-sm font-medium text-slate-400">7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Built an AI Visibility Scanner, Ran It on Ourselves,<br />
            <span className="gradient-text">and Scored 75/100</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            The humbling moment every founder dreads: realizing your own product says your own website isn't good enough. Here's what we found, what we fixed, and what we learned.
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The moment of truth</h2>
            <p>We spent months building GetCiteFlow — a platform that scans websites and tells you exactly why AI search engines like ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao aren't citing your content. We built landing pages targeting "AI visibility" and "how to get cited by ChatGPT." We wrote blog posts about GEO. We felt like experts.</p>
            <p>Then one Friday afternoon, almost as a joke, someone on the team said: <em>"Have we actually run our own tool on our own site?"</em></p>
            <p>Silence.</p>
            <p>We typed <code className="bg-white/10 px-2 py-0.5 rounded text-sm">getciteflow.ai</code> into our own scanner and hit enter. Thirty seconds later, the result appeared:</p>

            <div className="my-8 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl text-center">
              <div className="text-6xl font-black text-white mb-2">75</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">AI Visibility Score</div>
              <div className="text-xs text-slate-500 mt-4">Out of 100</div>
            </div>

            <p>Seventy-five. We were telling other companies how to optimize for AI visibility, and our own site was missing the fundamentals. The irony was painful.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">What the scan revealed (the ugly truth)</h2>
            <p>The 6-dimension breakdown surfaced four critical gaps:</p>

            <ol className="list-decimal list-inside space-y-6 mt-6">
              <li>
                <strong className="text-white">No FAQ Schema.</strong> We had a FAQ section on the homepage answering "What is GEO?" and "How does GetCiteFlow work?" — but it was plain HTML. Without JSON-LD structured data, LLMs couldn't reliably extract our Q&amp;A pairs for citation. <span className="text-slate-500">FAQ Coverage: 0%</span>
              </li>
              <li>
                <strong className="text-white">Missing llms.txt.</strong> AI crawlers like GPTBot and ClaudeBot had no structured index of our site. They were guessing which pages mattered. We had blog posts, landing pages, comparison pages — but no map for machines.
              </li>
              <li>
                <strong className="text-white">Weak entity clarity.</strong> Our brand wasn't consistently defined across pages. Some pages said "GetCiteFlow is a brand visibility service," others just said "we help with AI visibility." Search engines and LLMs both rely on clear, consistent entity definitions to build a mental model of what a site is about.
              </li>
              <li>
                <strong className="text-white">Content not structured for AI extraction.</strong> Our blog posts were well-written for humans — but lacked the clear heading hierarchy, comparison tables, and numbered lists that LLMs use to extract and cite information. Beautiful prose doesn't help if an AI can't parse it.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">What we fixed (in order of impact)</h2>
            <p>We prioritized changes by effort-to-impact ratio. Here's what we did, in the order we did it:</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Built a comprehensive llms.txt <span className="text-sm font-normal text-slate-500">— 2 hours</span></h3>
            <p>This was the quickest, highest-impact win. We listed every important page — blog posts, landing pages, comparison pages, case studies — with clear descriptions in Markdown format. Now when GPTBot or ClaudeBot crawls our site, it knows exactly what's there instead of guessing. <strong className="text-white">Result: AI crawlers now index all key pages on first visit.</strong></p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Added FAQ Schema to the homepage <span className="text-sm font-normal text-slate-500">— 1 hour</span></h3>
            <p>We converted our existing FAQ section into JSON-LD structured data — seven questions covering "What is GEO," "How does GetCiteFlow work," "Is GEO different from SEO," and common user concerns. FAQ Schema is one of the most commonly cited structured data types by LLMs because it directly answers questions. <strong className="text-white">Result: FAQ Coverage went from 0% to 85%.</strong></p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Defined our entity clearly across all pages <span className="text-sm font-normal text-slate-500">— 3 hours</span></h3>
            <p>We added Organization and SoftwareApplication JSON-LD schema to every page, consistently using the same brand name, description, and URL. This tells LLMs: "GetCiteFlow is an enterprise brand visibility service, not a generic SEO tool." Entity clarity compounds — the more consistently you define yourself, the more confidently LLMs cite you. <strong className="text-white">Result: Entity Clarity score improved significantly.</strong></p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Restructured blog content for AI readability <span className="text-sm font-normal text-slate-500">— 1 day</span></h3>
            <p>We audited every blog post and ensured: clear H2/H3 hierarchy, comparison tables where applicable, numbered lists for actionable advice, and a summary section that LLMs could extract as a direct snippet. We didn't change the content — we just made it machine-readable. <strong className="text-white">Result: Content Structure score improved.</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The results: 75 → 92</h2>
            <p>After implementing all four changes, we re-scanned getciteflow.ai:</p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-bold">Metric</th>
                    <th className="text-left py-3 px-4 text-white font-bold">Before</th>
                    <th className="text-left py-3 px-4 text-white font-bold">After</th>
                    <th className="text-left py-3 px-4 text-primary font-bold">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white font-semibold">AI Visibility Score</td>
                    <td className="py-3 px-4 text-slate-400">75/100</td>
                    <td className="py-3 px-4 text-slate-400">92/100</td>
                    <td className="py-3 px-4 text-green-400 font-bold">+17</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white font-semibold">FAQ Coverage</td>
                    <td className="py-3 px-4 text-slate-400">0%</td>
                    <td className="py-3 px-4 text-slate-400">85%</td>
                    <td className="py-3 px-4 text-green-400 font-bold">+85%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white font-semibold">Entity Clarity</td>
                    <td className="py-3 px-4 text-slate-400">Weak</td>
                    <td className="py-3 px-4 text-slate-400">Strong</td>
                    <td className="py-3 px-4 text-green-400 font-bold">Significant</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white font-semibold">llms.txt</td>
                    <td className="py-3 px-4 text-slate-400">Missing</td>
                    <td className="py-3 px-4 text-slate-400">Complete</td>
                    <td className="py-3 px-4 text-green-400 font-bold">From zero</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>But the score is just a number. The real test was asking ChatGPT and Claude questions like <em>"what is GEO?"</em> and <em>"how do I get my site cited by AI?"</em> — and seeing GetCiteFlow appear in the answers.</p>
            <p>More importantly, we now had a <strong className="text-white">credible story to tell.</strong> When potential customers ask "does this actually work?" — we can show them our own before-and-after. Not a hypothetical. Not a fabricated case study. Our own site, our own tool, real results.</p>
          </section>

          <section>
            <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
              <h3 className="text-lg font-bold text-white mb-4">The meta-lesson: build what you need, then use it yourself</h3>
              <p className="text-slate-300">Every SaaS founder should run their own product against themselves. If you're building a visibility scanner and your own site isn't optimized for AI visibility, something is wrong. Fixing our own site didn't just improve our score — it gave us firsthand experience with the exact process our customers go through. That empathy shapes every feature we build.</p>
              <p className="text-slate-300 mt-4">It also taught us that GEO isn't complicated. The fundamentals — FAQ Schema, llms.txt, entity clarity, structured content — are straightforward. Most sites are missing them not because they're hard, but because nobody has told them these things matter for AI search. That's exactly why we built GetCiteFlow.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key takeaways for your own site</h2>
            <ol className="list-decimal list-inside space-y-4 text-slate-300">
              <li><strong className="text-white">Run your own tool on yourself first.</strong> If you're selling any kind of optimization and your own site scores poorly, fix that before pitching anyone else. Credibility is everything.</li>
              <li><strong className="text-white">llms.txt is the highest-impact, lowest-effort GEO change.</strong> It took 2 hours and immediately gave AI crawlers a structured map of our site. If you do nothing else, do this.</li>
              <li><strong className="text-white">FAQ Schema matters more than you think.</strong> LLMs frequently cite FAQ content in responses because it directly answers user questions. Without structured data, your Q&amp;A is invisible to AI.</li>
              <li><strong className="text-white">Entity clarity compounds over time.</strong> Consistently defining your brand across all pages helps LLMs build a reliable mental model of what you do. Inconsistency confuses both search engines and AI.</li>
              <li><strong className="text-white">Content structure is for machines, not just humans.</strong> Clear headings, tables, and lists make your content extractable by AI — which is how citations happen. Beautiful writing that AI can't parse is wasted effort.</li>
            </ol>
          </section>

          <section className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Want to check your own site?</h2>
            <p className="text-slate-300 mb-6">Run a free AI Visibility scan on any domain and see your score, missing components, and prioritized fixes — just like we did for ourselves.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors">
              Scan Your Site Free <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
}
