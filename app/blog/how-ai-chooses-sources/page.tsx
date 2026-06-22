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
  headline: "How Generative AI Actually Chooses What to Cite",
  description: "LLMs use RAG retrieval, training data prevalence, and entity recognition to select sources. Understanding these three mechanisms is the foundation of any GEO strategy.",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/how-ai-chooses-sources&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/how-ai-chooses-sources" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "How AI Chooses Sources", item: "https://www.getciteflow.ai/blog/how-ai-chooses-sources" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do LLMs decide which sources to cite?",
      acceptedAnswer: { "@type": "Answer", text: "LLMs use three mechanisms: retrieval-augmented generation (RAG) that matches query semantics against indexed content, training data prevalence that surfaces frequently co-occurring entities, and entity recognition that maps brand names to their semantic categories. Each mechanism operates independently and rewards different content signals." }
    },
    {
      "@type": "Question",
      name: "What is RAG in the context of ChatGPT citations?",
      acceptedAnswer: { "@type": "Answer", text: "RAG (Retrieval-Augmented Generation) is the pipeline that searches the web or a knowledge base for relevant documents when a user asks a question. For ChatGPT with search enabled, RAG retrieves candidate sources, ranks them by relevance, and passes the top results to the model to generate an answer with citations. This is the mechanism most similar to traditional search." }
    },
    {
      "@type": "Question",
      name: "Does SEO help with AI citations?",
      acceptedAnswer: { "@type": "Answer", text: "Traditional SEO helps with Google's AI surfaces (AI Overviews, AI Mode) because they use Google's core ranking for RAG retrieval. But for standalone LLMs like ChatGPT and Claude, SEO signals like backlinks and domain authority matter far less than entity clarity, structured data, and training data prevalence." }
    },
    {
      "@type": "Question",
      name: "What is training data prevalence?",
      acceptedAnswer: { "@type": "Answer", text: "Training data prevalence measures how often a brand or entity appears across the model's training corpus. The more frequently and consistently a brand appears alongside its category, the more likely the model is to mention it from parametric memory rather than requiring retrieval." }
    },
    {
      "@type": "Question",
      name: "What is the 4-stage RAG pipeline for AI citations?",
      acceptedAnswer: { "@type": "Answer", text: "The RAG pipeline has four stages: query analysis and intent extraction, document retrieval via vector embeddings, re-ranking by relevance and information gain, and citation generation during response synthesis with post-generation token alignment verification. Each stage filters and prioritizes content differently." }
    },
    {
      "@type": "Question",
      name: "How do ChatGPT, Perplexity, Claude, and Google AI Overviews differ in source selection?",
      acceptedAnswer: { "@type": "Answer", text: "They use fundamentally different retrieval architectures. ChatGPT queries Bing and selects 3-6 citations from 20-30 candidate pages. Perplexity runs real-time RAG on every query and produces 21+ sources per response on average. Claude uses Brave Search and favors long-form authoritative sources. Google AI Overviews uses core Search ranking systems via RAG with query fan-out. Only 11% of domains are cited by both ChatGPT and Perplexity for the same query." }
    },
    {
      "@type": "Question",
      name: "What is information gain in RAG retrieval?",
      acceptedAnswer: { "@type": "Answer", text: "Information gain measures the unique value a document adds beyond other retrieved sources. Research shows this approach improves exact match accuracy by 17.9% over naive RAG systems. It structurally penalizes content that merely repeats what other sources say, favoring original research, unique data, and novel analysis." }
    }
  ]
};

export default function HowAiChoosesSources() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Technical Guide</Badge>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            How Generative AI Actually<br /><span className="gradient-text">Chooses What to Cite</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 20, 2026 • 11 min read</p></div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">Three distinct mechanisms drive AI citation</strong> — RAG retrieval, training data prevalence, and entity recognition. Each rewards different content strategies.</li>
              <li><strong className="text-white">The RAG pipeline has 4 stages</strong> — query analysis, vector retrieval, re-ranking by information gain, and citation synthesis with post-generation verification. Each stage applies different filters.</li>
              <li><strong className="text-white">Only 11% of domains are cited across platforms</strong> — ChatGPT, Perplexity, Claude, and Google AI Overviews use fundamentally different retrieval architectures with minimal overlap.</li>
              <li><strong className="text-white">Information gain is the most consequential filter</strong> — content that merely repeats other sources is penalized regardless of writing quality. Original data and unique comparisons win.</li>
              <li><strong className="text-white">Passage-level extractability is the universal signal</strong> — self-contained answer blocks of 40-60 words outperform narrative prose across all platforms.</li>
            </ol>
          </div>

          <p className="text-xs text-slate-500 italic mb-4">
            Sources note: The 4-stage RAG pipeline description draws on ZipTie's analysis of 10,000+ AI responses (2025-2026). The information gain framework is based on arXiv:2509.12765v1 (2025). Cross-platform citation overlap data (11%) is from The Digital Bloom's analysis of 680M+ citations (2025). Platform-specific citation percentages in the table below are derived from publicly available measurement studies by ZipTie, AI search tracker, and SEO tooling vendor panels as of Q1 2026; specific percentages vary by query type and category. Chunking citation findings reference the general RAG research literature (Lewis et al. 2020, Gao et al. 2023); fabrication rate estimates (8-15%) are based on published citation grounding studies including NCI's citation verification benchmark (2024).
          </p>

          <p className="text-xl text-white leading-relaxed mb-8">
            When ChatGPT cites a source, most people assume it works like Google: index the page, rank it by relevance, display it. The reality is structurally different. LLMs do not crawl the web in real time for every answer. They operate through a layered pipeline — retrieval, ranking, synthesis, and verification — and each layer applies a different set of filters that determines whether your content surfaces as a citation. Understanding these filters at the mechanism level is the difference between guessing at your AI visibility strategy and engineering it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The 4-Stage RAG Pipeline</h2>
          <p className="mb-6 leading-relaxed">
            Retrieval-Augmented Generation sounds like a single operation, but it is actually a pipeline of four distinct stages, each with its own selection criteria. ZipTie's analysis of citation behavior across major LLMs, drawing on data from 10,000+ AI responses, breaks the pipeline down as follows.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 1: Query Analysis and Intent Extraction</h3>
          <p className="mb-6 leading-relaxed">
            Before any document is retrieved, the model parses the user's prompt to extract the core informational need. This is not keyword matching. The model identifies entities, relationships, and the expected response format — definition, comparison, instruction, or evaluation. Perplexity, for example, runs a live web query for every prompt and explicitly classifies the question type to determine which retrieval strategy to use. Google's AI Overviews go further with query fan-out: a single question about "how to fix lawns" triggers concurrent sub-queries about herbicides, chemical-free removal, weed prevention, and soil treatment. The model synthesizes across all of them before generating a response.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 2: Document Retrieval via Vector Embeddings</h3>
          <p className="mb-6 leading-relaxed">
            The retrieval system searches its index using vector embeddings — mathematical representations of semantic meaning, not exact keyword matches. A page about "reducing employee turnover" can be retrieved for a query about "how to keep staff from quitting" even if those exact words never appear on the page. The embedding model maps both the query and the document into the same high-dimensional vector space, then retrieves the closest matches using cosine similarity or inner product distance.
          </p>
          <p className="mb-6 leading-relaxed">
            This stage is where chunking strategy matters most. Documents are split into passages before embedding, typically in the range of 100 to 500 tokens per chunk. Research on citation precision shows that finer chunks (100-200 tokens) improve the model's ability to pinpoint the exact sentence supporting a claim, while coarser chunks (500+ tokens) increase context but reduce citation accuracy. Most production RAG systems use overlapping chunks — typically 200 tokens with 50 tokens of overlap — to capture sentence boundaries and paragraph transitions that a rigid split would sever.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 3: Re-Ranking by Relevance, Authority, and Information Gain</h3>
          <p className="mb-6 leading-relaxed">
            Vector retrieval returns a broad set of candidate documents, typically 20 to 30 per query. The re-ranking stage applies additional filters to narrow this set to the 3 to 6 sources that will actually be cited. The ranker evaluates each candidate on three dimensions: semantic relevance to the query, source authority (derived from training data prevalence and cross-source agreement), and information gain — the unique value a document adds beyond other retrieved sources.
          </p>
          <p className="mb-6 leading-relaxed">
            Information gain is the least understood but most consequential filter. Research published on Document Information Gain (<a href="https://arxiv.org/abs/2509.12765" target="_blank" rel="noopener noreferrer" className="underline text-primary">arXiv:2509.12765v1</a>) showed that scoring documents by their marginal contribution — what a source adds that no other source in the candidate set already covers — improved exact match accuracy by 17.9% over naive RAG systems. This mechanism structurally penalizes content that merely repeats what other sources say. A blog post that paraphrases an industry report adds zero information gain and will be filtered out regardless of how well it is written. Original research, unique data, and novel analysis receive higher scores, creating a competitive moat that aggregator content cannot replicate.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 4: Citation Generation and Post-Generation Verification</h3>
          <p className="mb-6 leading-relaxed">
            Once the top-ranked sources are selected, the model generates the answer with inline citations — typically numbered markers like [1], [2] that map to specific source chunks. The sequence in which sources are cited is determined not just by relevance rank but by how the model weaves them into its narrative. Sources that provide definitional grounding tend to be cited first; sources that provide supporting evidence appear later.
          </p>
          <p className="mb-6 leading-relaxed">
            Post-generation verification is an emerging practice that checks whether each cited claim actually appears in the attributed source. Citation grounding research shows that even with perfect retrieval, GPT-4-class models fabricate details in 8-15% of responses. Verification systems that check token alignment between the generated output and the source text reduce fabrication rates to under 3%. Perplexity's entire product is built around this verification loop — it explicitly ties each sentence to a source and allows users to inspect the original context. ChatGPT and Claude have added similar verification in their 2025-2026 releases, though with different levels of transparency.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">RAG Stage</th>
                  <th className="text-left py-3 px-4 text-white font-bold">What Happens</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Impact on Your Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Query Analysis</td>
                  <td className="py-3 px-4 text-slate-400">Intent extraction, fan-out sub-query generation</td>
                  <td className="py-3 px-4 text-slate-400">Comprehensive topical coverage matters more than single-page optimization</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Vector Retrieval</td>
                  <td className="py-3 px-4 text-slate-400">Semantic search, 20-30 candidate pages</td>
                  <td className="py-3 px-4 text-slate-400">Chunk structure and entity density determine whether your page is found</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Re-Ranking</td>
                  <td className="py-3 px-4 text-slate-400">Information gain, authority, relevance scoring</td>
                  <td className="py-3 px-4 text-slate-400">Original data beats aggregated content. Rewriting existing sources adds zero value</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Citation Synthesis</td>
                  <td className="py-3 px-4 text-slate-400">Answer generation with inline source attribution + token verification</td>
                  <td className="py-3 px-4 text-slate-400">Self-contained answer blocks (40-60 words) are optimal for extraction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Platform-Specific Retrieval Architectures</h2>
          <p className="mb-6 leading-relaxed">
            The 4-stage pipeline is the general framework, but each major AI platform implements it differently. The differences are not cosmetic — they produce citation sets that overlap by as little as 11% between platforms. The same source URL cited by ChatGPT has only an 11% chance of being cited by Perplexity for the same query, according to an analysis of 680 million+ citations published by <a href="https://thedigitalbloom.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">The Digital Bloom in 2025</a>.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Platform</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Retrieval Backend</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Avg. Citations per Response</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Top Source Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">ChatGPT (Browse)</td>
                  <td className="py-3 px-4 text-slate-400">Bing index, 20-30 candidates</td>
                  <td className="py-3 px-4 text-slate-400">3-6</td>
                  <td className="py-3 px-4 text-slate-400">Wikipedia (47.9%)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Perplexity</td>
                  <td className="py-3 px-4 text-slate-400">Real-time web search, citation-first</td>
                  <td className="py-3 px-4 text-slate-400">21.87</td>
                  <td className="py-3 px-4 text-slate-400">Reddit (46.7%)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Claude (Search)</td>
                  <td className="py-3 px-4 text-slate-400">Brave Search, top 5-10 results</td>
                  <td className="py-3 px-4 text-slate-400">4-8</td>
                  <td className="py-3 px-4 text-slate-400">Blogs and editorial (43.8%)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Gemini</td>
                  <td className="py-3 px-4 text-slate-400">Google Index + Knowledge Graph</td>
                  <td className="py-3 px-4 text-slate-400">3-5</td>
                  <td className="py-3 px-4 text-slate-400">Editorial and niche blogs</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Google AI Overviews</td>
                  <td className="py-3 px-4 text-slate-400">Core Search ranking + RAG + fan-out</td>
                  <td className="py-3 px-4 text-slate-400">4-7</td>
                  <td className="py-3 px-4 text-slate-400">YouTube (29.5%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-relaxed">
            The architectural split between citation-first and conversation-first platforms explains most of the variance. Perplexity was built as a citation-first search engine — it runs a live query for every prompt, selects sources dynamically, and ties every claim to a specific source in 78% of complex research questions. ChatGPT was built as a conversational AI that later gained search capability. As one practitioner on r/perplexity_ai put it: "Perplexity was specifically built as a citation-first search engine from the ground up, while ChatGPT's web search is more like search bolted onto a conversational AI." This design-level difference produces the measurable citation gap.
          </p>
          <p className="mb-6 leading-relaxed">
            Claude sits in the middle. It uses Brave Search to retrieve the top 5-10 results, then applies a conservative citation filter that favors long-form editorial content, technical documentation, and well-established publications. Claude almost never cites forums or social media. For B2B brands with detailed technical content, this makes Claude the most predictable platform — if your page is well-structured and authoritative, Claude will cite it. But Claude's smaller candidate pool means your content must rank in Brave's top results to be considered at all.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Chunking, Embeddings, and the Hidden Determinants</h2>
          <p className="mb-6 leading-relaxed">
            Two factors that content teams rarely consider — chunking strategy and embedding model selection — directly determine whether a page gets cited. The chunking approach controls how the model slices your page into retrievable units. A page with clear heading hierarchies, numbered sections, and self-contained paragraphs produces better chunks than a page with dense prose and no structural breaks.
          </p>
          <p className="mb-6 leading-relaxed">
            Embedding model selection introduces another layer of variance. Different LLM providers use different embedding models with different dimensional spaces (OpenAI's text-embedding-ada-002 uses 1536 dimensions; Sentence Transformers models commonly use 384 or 768). The same query mapped through different embedding spaces retrieves different documents. This is part of why cross-platform citation overlap is so low — the same content, embedded by different models, lands in different semantic neighborhoods.
          </p>
          <p className="mb-6 leading-relaxed">
            Passage-level extractability — the property of a page that determines whether a specific paragraph can be cleanly extracted and cited — is the closest thing to a universal signal. A self-contained answer block of 40-60 words that defines a concept, answers a question, or states a statistic is optimal for all platforms because it minimizes the extraction work the model must do. Pages organized into such blocks consistently outperform narrative prose in citation frequency, regardless of the platform or embedding model.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Training Data Prevalence vs. Retrieval
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              The three mechanisms described earlier — RAG retrieval, training data prevalence, and entity recognition — do not operate independently. They interact in ways that compound or cancel each other. A brand that exists in the model's training data (parametric memory) does not need retrieval to be cited. For newer brands launched after a model's training cutoff, every citation must come through RAG. This is both a disadvantage (no parametric memory) and an opportunity: you can structure your content specifically for retrieval without competing against established entity clusters embedded in the model's weights.
            </p>
            <p className="text-sm text-slate-400">
              Training data prevalence is predominantly driven by Common Crawl, which makes up roughly 60% of most LLMs' training corpus. Brands that appear consistently in Common Crawl snapshots — through Wikipedia, news mentions, industry reports, and institutional citations — earn durable parametric associations that persist across model updates. The catch is that influencing Common Crawl requires a timeframe of months to years, not weeks. RAG, by contrast, can reflect new content within days of publication, assuming the content is indexed and well-structured.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Information Gain as a Citation Filter</h2>
          <p className="mb-6 leading-relaxed">
            The information gain mechanism deserves emphasis because it is the filter most misaligned with traditional content strategy. SEO-driven content tends toward comprehensiveness — covering every angle of a topic to capture multiple keyword variants. But comprehensive content that aggregates known information adds low information gain per source. The RAG ranker sees a page that covers ground already covered by other sources and deprioritizes it, regardless of how well it is written.
          </p>
          <p className="mb-6 leading-relaxed">
            The content that survives the information gain filter shares three characteristics: it contains original data or research, it takes a position that differs from the consensus (and supports it with evidence), or it covers a niche so specific that no other source in the retrieval set addresses it. Comparison content excels here because every "X vs Y" page is by definition unique — the specific feature-by-feature comparison between two named products does not exist anywhere else in the retrieval set, giving it high information gain by default.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What This Means for Content Engineering</h2>
          <p className="mb-6 leading-relaxed">
            Understanding the pipeline at this level of detail changes how you build content. Instead of writing for a hypothetical "AI audience," you optimize for specific pipeline stages.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">For vector retrieval:</strong> optimize entity density and self-contained passages. Each paragraph should be extractable on its own. Avoid anaphora that relies on earlier sections — if a paragraph references "this framework" without defining it, it loses retrieval value when chunked independently.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">For re-ranking:</strong> prioritize original data. Every statistic, benchmark, or comparison that exists uniquely on your page increases your information gain score. Synthesized content without new data will be filtered out regardless of vector similarity rank.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">For citation synthesis:</strong> structure for extraction. 40-60 word answer blocks, FAQ sections with Schema.org markup, and comparison tables are the most citable formats because they minimize the model's extraction work. A well-structured FAQ page with Schema markup gets cited roughly 2x more than identical content without structure.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">For post-generation verification:</strong> ensure every claim on your page can be traced to a specific source within the same page. Models performing token alignment verification are more likely to cite pages where the relationship between claims and evidence is clear and contained.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl my-10">
            <h3 className="text-xl font-bold text-white mb-3">The Three Mechanisms in Practice</h3>
            <p className="text-sm text-slate-400 mb-4">
              The three citation mechanisms — RAG retrieval, training data prevalence, and entity recognition — operate simultaneously and compound each other. A brand with strong entity clarity (mechanism 3) appears more frequently in retrieved results (mechanism 1), which over time increases its representation in training data snapshots (mechanism 2), which further reinforces its entity associations. Brands that optimize for all three create a self-reinforcing citation cycle that competitors cannot easily disrupt.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">See How AI Sees Your Brand</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow analyzes your site against all three citation mechanisms — RAG retrievability, training data prevalence signals, and entity clarity. Get a free AI Visibility Score with breakdown and prioritized fixes.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Get Your Free AI Visibility Scan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
