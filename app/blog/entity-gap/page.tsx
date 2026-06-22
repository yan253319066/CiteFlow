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
  headline: "The Entity Gap: Why Most Brands Are Invisible to AI",
  description: "73–92% of brands cannot be reliably identified as entities by LLMs. Named Entity Recognition failure, polysemy, and the five types of entity gap that block AI citations.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/entity-gap&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/entity-gap" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "The Entity Gap", item: "https://www.getciteflow.ai/blog/entity-gap" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the entity gap in AI visibility?",
      acceptedAnswer: { "@type": "Answer", text: "The entity gap is the disconnect between how humans recognize brand names and how LLMs resolve them. When a Named Entity Recognition (NER) system cannot classify a brand name as an Organization or Product entity, downstream retrieval and citation pipelines never consider it. Studies show 73-92% of brands suffer from some form of entity gap." }
    },
    {
      "@type": "Question",
      name: "Why are brands invisible to ChatGPT and other LLMs?",
      acceptedAnswer: { "@type": "Answer", text: "Most brands are invisible because LLMs cannot reliably identify them as named entities. If the NER system does not flag a brand name as an Organization or Product, the brand is excluded from retrieval and citation. Common causes include polysemy (brand names that are also common words), lack of Wikidata presence, and insufficient cross-source mention density." }
    },
    {
      "@type": "Question",
      name: "What is polysemy and how does it affect brand recognition?",
      acceptedAnswer: { "@type": "Answer", text: "Polysemy occurs when a single term has multiple meanings. For brand recognition, names like Apple, Shell, Next, and Slack create ambiguous entity vectors. An LLM must disambiguate using surrounding context. Without strong category signals within 15-20 tokens of the brand name, the model defaults to the most common meaning rather than the brand meaning." }
    },
    {
      "@type": "Question",
      name: "How do LLMs disambiguate brand names?",
      acceptedAnswer: { "@type": "Answer", text: "LLMs use a four-stage pipeline: candidate generation (retrieving all known entities matching the surface form), context encoding (converting surrounding text into a vector), entity scoring (comparing context vectors against each candidate), and confidence thresholding (only accepting candidates above a confidence threshold). If no candidate exceeds the threshold, the mention is treated as unclassified text." }
    },
    {
      "@type": "Question",
      name: "Does SEO help with entity disambiguation?",
      acceptedAnswer: { "@type": "Answer", text: "Traditional SEO has limited impact on entity disambiguation because LLMs treat self-declared information on your own domain as unverified. Cross-source mention density in authoritative content is the strongest signal. A brand mentioned across 50+ industry sources is treated as a confirmed entity, while a brand mentioned only on its own domain is treated as an unverified mention." }
    },
    {
      "@type": "Question",
      name: "What are the five types of entity gap?",
      acceptedAnswer: { "@type": "Answer", text: "The five types are: (1) Polysemy Gap — brand name is a common English word; (2) Common-Name Gap — brand name is a personal or place name; (3) Novelty Gap — brand launched after the model's training cutoff; (4) Bare-Goods Gap — brand name is a generic product category; (5) Distribution Gap — brand has insufficient cross-source mention density. Most brands suffer from at least three simultaneously." }
    },
    {
      "@type": "Question",
      name: "How can I fix the entity gap for my brand?",
      acceptedAnswer: { "@type": "Answer", text: "Fixing the entity gap requires four strategies: (1) Organization Schema with exact legal name, alternate names, and sameAs links to Wikidata; (2) consistent branded anchor text that pairs brand name with category in external sources; (3) a Wikidata entry to serve as the canonical entity hub; (4) category-rich internal content that pairs the brand name with its industry descriptor within the first paragraph of every page." }
    }
  ]
};

export default function EntityGap() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Research Report</Badge>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            The Entity Gap: Why Most Brands Are<br /><span className="gradient-text">Invisible to AI</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 12 min read</p></div>
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
              <li><strong className="text-white">73–92% of brands are invisible to LLMs</strong> — studies across ChatGPT, Claude, and Perplexity show the majority cannot be reliably identified as entities by generative AI systems.</li>
              <li><strong className="text-white">NER is the first-pass filter</strong> — if a model cannot identify your brand name as a named entity in its category, no amount of content quality or backlinks produces a citation.</li>
              <li><strong className="text-white">Polysemy is the dominant failure mode</strong> — brands sharing names with common words, places, or other entities create ambiguous entity vectors that cause LLMs to deprioritize them.</li>
              <li><strong className="text-white">Entity disambiguation determines citation eligibility</strong> — models use Wikidata clusters, context vectors, and knowledge graph traversal. Without signals that anchor your brand to its category, you lose the disambiguation step.</li>
              <li><strong className="text-white">Five distinct types of entity gap exist</strong> — each requires a different remediation strategy. Most brands suffer from at least three simultaneously.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            When ChatGPT fails to mention your brand in response to a relevant query, the instinct is to ask: "Is my content good enough? Do I have enough backlinks? Did I use the right keywords?" These questions assume the AI has identified your brand as a candidate for citation and then evaluated it against other candidates. For the majority of brands, that assumption is wrong. The AI never got to the evaluation stage because it could not reliably identify your brand as an entity in the first place.
          </p>

          <p className="mb-6 leading-relaxed">
            This is the entity gap — the disconnect between how humans recognize brand names and how LLMs resolve them. And it is the single most underdiagnosed reason brands are invisible to generative AI.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What NER Is and Why LLMs Cannot Identify Most Brands</h2>
          <p className="mb-6 leading-relaxed">
            Named Entity Recognition (NER) is the NLP task of locating and classifying named entities in text into predefined categories — person, organization, location, product, event. Every LLM uses some form of NER as an upstream filter before retrieval and citation. If the NER pass does not flag your brand name as an "Organization" or "Product" entity, downstream pipelines never consider it.
          </p>
          <p className="mb-6 leading-relaxed">
            The problem is that modern NER systems were trained primarily on news corpora, Wikipedia abstracts, and formal institutional text. A company like "Microsoft" appears millions of times in these corpora, consistently classified as ORG. A SaaS brand called "Launchpad" appears in those corpora as a NASA term, a city name, and a product category — but rarely as a brand entity. The NER model has no reliable anchor for "Launchpad the brand."
          </p>
          <p className="mb-6 leading-relaxed">
            This creates a systematic bias: brands with distinctive, unique names that appear in authoritative text corpora pass NER with confidence. Brands with common names, recent launches, or niche categories fail NER and are invisible to the rest of the pipeline.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Scale of the Problem</h2>
          <p className="mb-6 leading-relaxed">
            The numbers are stark. A 2025 study by <a href="https://www.generative-engine.org/" target="_blank" rel="noopener noreferrer" className="underline text-primary">generative-engine.org</a> found that 73% of brands tested were invisible to ChatGPT — the model could not produce a meaningful answer about them from parametric memory or retrieval. <a href="https://fuelonlinemarketing.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Fuel Online Marketing</a> replicated this with an enterprise sample and found a 92% invisibility rate for B2B enterprise brands.
          </p>
          <p className="mb-6 leading-relaxed">
            <a href="https://www.brightedge.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">BrightEdge's 2025 analysis</a> of 1,000+ brand queries across 16 industries found that ChatGPT and Google AI disagreed on brand recommendations 61.9% of the time. When AI systems cannot agree on whether a brand exists, entity confusion — not content quality — is the likely cause.
          </p>
          <p className="mb-6 leading-relaxed">
            <a href="https://ahrefs.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Ahrefs' study</a> of 75,000 brand mentions across LLM responses found that brand mention density in authoritative content was the single strongest correlation factor with AI citation rate — stronger than domain authority, page rank, or content length. This is not because the model reads those mentions for endorsement value. It is because mention density creates the statistical anchor the NER system needs: a brand name appearing across 50+ authoritative sources is treated by the model as a confirmed entity, whereas a brand appearing only on its own domain is treated as an unverified entity.
          </p>
          <p className="mb-6 leading-relaxed">
            The implication is uncomfortable: your own website's "About Us" page does less for your entity recognition than 10 mentions across industry blogs, because the model weights cross-source confidence over self-declaration.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Polysemy Problem</h2>
          <p className="mb-6 leading-relaxed">
            Polysemy — a single term with multiple meanings — is the dominant failure mode for brand entity recognition. Consider what the following brand names mean to a stateless NER system:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Brand Name</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Meanings to an NER System</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Apple</td>
                  <td className="py-3 px-4 text-slate-400">Fruit, record label, computer company, film studio</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Shell</td>
                  <td className="py-3 px-4 text-slate-400">Sea creature, oil company, CLI interpreter, energy provider</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Next</td>
                  <td className="py-3 px-4 text-slate-400">Temporal adverb, clothing retailer, programming framework</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Slack</td>
                  <td className="py-3 px-4 text-slate-400">Loose rope, messaging app, charitable giving</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Prime</td>
                  <td className="py-3 px-4 text-slate-400">Mathematical concept, Amazon membership, video service, quality descriptor</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Safari</td>
                  <td className="py-3 px-4 text-slate-400">Web browser, African expedition, Apple browser</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-relaxed">
            When an LLM encounters these terms in a query, the NER system must resolve the ambiguity using surrounding context. For high-entity brands like Apple (the computer company), the context vector in most queries is sufficient — there are enough co-occurring terms (iPhone, MacBook, Tim Cook) to disambiguate. For brands sharing names with common words or other well-known entities, the context vector rarely tips toward the brand interpretation.
          </p>
          <p className="mb-6 leading-relaxed">
            Veezow Research, in their analysis of citation-gap root causes, identified polysemy as the most underappreciated driver of AI invisibility: "Entity disambiguation is one of the least-discussed drivers of AI citation gaps. Brands sharing names with everyday objects or common words create useless entity vectors. An LLM knows 'Next' is a clothing brand only when 'clothing,' 'fashion,' or 'retail' appears within 20 tokens of the name. Without that signal, 'Next' resolves to a time reference."
          </p>
          <p className="mb-6 leading-relaxed">
            This is not a trivial edge case. A systematic scan of top SaaS brands reveals that approximately 35% share their name with a common English word, a place name, or another well-known entity. For every well-known brand that has overcome this ambiguity through sheer mention volume, there are hundreds of smaller brands that remain invisible because the entity vector was never anchored.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Entity Disambiguation: How LLMs Decide What a Name Means</h2>
          <p className="mb-6 leading-relaxed">
            Entity disambiguation is the process by which a model resolves an ambiguous mention to a specific entity in its knowledge base. The typical pipeline has four stages:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 1: Candidate Generation</h3>
          <p className="mb-6 leading-relaxed">
            The model identifies the mention and retrieves all known entities that match the surface form. For "Shell," this might include the mollusk, the oil company, the command-line interpreter, and the energy company. Each candidate is associated with a Wikidata ID, a Wikipedia abstract, and a set of known aliases. The size of the candidate set depends on how many entities share the surface form — common words produce candidate sets of 10 or more, while distinctive names may produce only one.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 2: Context Encoding</h3>
          <p className="mb-6 leading-relaxed">
            The model encodes the surrounding text — typically 20-50 tokens on each side of the mention — into a vector representation. Terms like "fuel," "gas station," "petrochemical," and "drilling" push the vector toward the energy company entity. Terms like "marine," "seashore," "ocean," and "beach" push toward the mollusk. The discriminative power of this stage depends entirely on the density of category-specific terms near the brand name.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 3: Entity Scoring</h3>
          <p className="mb-6 leading-relaxed">
            Each candidate entity is scored against the context vector for semantic similarity. The entity with the highest score is selected. The key failure mode here is insufficient context: if the surrounding text is generic ("I use Shell every day"), the model has insufficient discriminative signal and either selects the wrong entity or, more commonly, flags the mention as unresolvable.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stage 4: Confidence Thresholding</h3>
          <p className="mb-6 leading-relaxed">
            Even the highest-scoring candidate must exceed a confidence threshold. If no candidate reaches the threshold, the mention is treated as unclassified text rather than a named entity. Unclassified mentions do not trigger brand citations. This is the silent failure mode: the model sees your brand name, tries to classify it, decides it cannot do so with confidence, and proceeds as if the name does not exist.
          </p>

          <p className="mb-6 leading-relaxed">
            For brands, this means entity recognition depends not on the quality of your own website but on the consistency with which your brand name appears in contexts that disambiguate it toward your category. A mention in the form "X, the leading project management platform" is far more valuable for entity anchoring than "X announced a feature update," because the former provides the category anchor in the same sentence.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Five Types of Entity Gap</h2>
          <p className="mb-6 leading-relaxed">
            Based on the research, brand invisibility from entity confusion falls into five distinct patterns. Most brands suffer from at least three simultaneously.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Gap Type</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Example</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Root Cause</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Remediation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Polysemy Gap</td>
                  <td className="py-3 px-4 text-slate-400">Slack, Prime, Bridge</td>
                  <td className="py-3 px-4 text-slate-400">Name is common English word with multiple meanings</td>
                  <td className="py-3 px-4 text-slate-400">Pair brand with category descriptor within 15 tokens</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Common-Name Gap</td>
                  <td className="py-3 px-4 text-slate-400">Jordan, Lincoln, Austin</td>
                  <td className="py-3 px-4 text-slate-400">NER defaults to PERSON or LOCATION</td>
                  <td className="py-3 px-4 text-slate-400">Schema.org Organization type declaration + sameAs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Novelty Gap</td>
                  <td className="py-3 px-4 text-slate-400">Brand launched 2025+</td>
                  <td className="py-3 px-4 text-slate-400">No entity record in training data or Common Crawl</td>
                  <td className="py-3 px-4 text-slate-400">RAG-only strategy — optimize retrievability</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Bare-Goods Gap</td>
                  <td className="py-3 px-4 text-slate-400">The Mattress Store, Cloud Storage Co</td>
                  <td className="py-3 px-4 text-slate-400">Name classified as product category, not brand</td>
                  <td className="py-3 px-4 text-slate-400">Create distinctive sub-brand or product name</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Distribution Gap</td>
                  <td className="py-3 px-4 text-slate-400">Any brand with low cross-source mentions</td>
                  <td className="py-3 px-4 text-slate-400">Below confidence threshold despite entity existing</td>
                  <td className="py-3 px-4 text-slate-400">Build mentions across industry publications</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-relaxed">
            A novel SaaS product (gap 3) with a common English name (gap 1) and no industry press mentions (gap 5) is effectively nonexistent to every major LLM. The compounding effect is important: each gap reduces the probability of entity resolution, and the gaps interact in ways that simple additive models cannot predict.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              The Compounding Effect of Entity Gaps
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              A brand with one entity gap may still be resolved by a model if the remaining signals are strong enough. A brand with three gaps has vanishingly small probability of correct entity resolution. The gaps do not add — they multiply. If each gap independently reduces resolution probability by 50%, a brand with three gaps has only a 12.5% chance (0.5 × 0.5 × 0.5) of being correctly identified.
            </p>
            <p className="text-sm text-slate-400">
              This explains why entity-driven citation gaps are so much more common than most brands realize. The brand team sees strong content and a decent domain. The model sees an ambiguous name vector, no Wikidata entry, and a handful of self-referential mentions. The model moves on.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Measure Your Entity Gap</h2>
          <p className="mb-6 leading-relaxed">
            You can perform a preliminary diagnosis with a simple three-test protocol across ChatGPT, Perplexity, and Claude:
          </p>
          <p className="mb-6 leading-relaxed">
            Ask each model: "What is [Your Brand]?" followed by "[Your Brand] vs [competitor]." Then evaluate:
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Test 1 — Entity Classification.</strong> Does the model correctly identify your brand's category? If ChatGPT says "Launchpad is a project management tool" but your brand is an email marketing platform, the entity is classified in the wrong category. The name resolved to a different entity cluster.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Test 2 — Entity Resolution.</strong> Does the model produce accurate, substantive output about your brand? If the response is generic, vague, or hallucinated, the model likely failed to retrieve entity-specific information and is relying on its general language priors.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Test 3 — Cross-Platform Consistency.</strong> Do the responses differ between platforms? If ChatGPT describes one brand and Perplexity describes another entity with the same name, you have a polysemy or common-name gap using different resolution mechanisms on different platforms.
          </p>
          <p className="mb-6 leading-relaxed">
            If any model fails test 1, you have at least one entity gap. If the models disagree with each other on test 3, you have multiple gaps.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Closing the Gap: Schema, Wikidata, and Entity Anchoring</h2>
          <p className="mb-6 leading-relaxed">
            Fixing the entity gap does not require a content overhaul. It requires targeted entity-signal engineering across four dimensions:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Organization Schema with Entity Declaration</h3>
          <p className="mb-6 leading-relaxed">
            Google's Knowledge Graph and Wikidata entries both derive entity resolution signals from Schema.org markup. An Organization schema block that includes your brand name, legal name, alternate names, industry category, and sameAs links to Wikipedia and Wikidata provides the NER system with an explicit entity declaration it cannot get from text alone. The sameAs links are critical — they bridge your domain to the entity record, telling the model "this URL corresponds to entity Q12345."
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Consistent Branded Anchor Text</h3>
          <p className="mb-6 leading-relaxed">
            Every time your brand appears on another domain, the anchor text should include both the brand name and a category signal. "Acme Analytics" is better than "Acme." "Acme Analytics — Marketing Intelligence Platform" is better still. Each instance builds cross-source confidence for the NER system. This is the single highest-leverage action for the Distribution Gap.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Wikidata and Wikipedia Presence</h3>
          <p className="mb-6 leading-relaxed">
            For brands pursuing entity-driven citation strategy, a Wikidata entry serves as the entity hub. LLMs use Wikidata as the canonical entity resolution layer. Without one, the model treats your brand as an unverified mention. A Wikidata entry with the correct entity type (Organization or Product), industry classification, and references to authoritative sources anchors the entity for every model that queries the knowledge graph.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Category-Rich Internal Content</h3>
          <p className="mb-6 leading-relaxed">
            On your own site, pair your brand name with its category descriptor within the first paragraph of every high-value page. For a project management tool, "Launchpad is a project management platform" is the anchor. "Welcome to Launchpad" is not. This self-declaration signal, while weaker than cross-source mentions, establishes the baseline entity vector that retrieval systems use as a starting point.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Entity Signal Priority Order
            </h3>
            <p className="text-sm text-slate-400">
              Cross-source mention density &gt; Wikidata/Wikipedia presence &gt; Schema.org markup with sameAs &gt; Category-rich content on your own site. The model weights external verification over self-declaration. Prioritize building mentions in authoritative sources over optimizing your own pages for entity signals.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Summary</h2>
          <p className="mb-6 leading-relaxed">
            The entity gap is the hidden tax on AI brand visibility. Before your content quality, your backlinks, or your domain authority matters, the AI must answer one yes/no question: "Is this name a brand in this category?" For 73-92% of brands, that question receives the answer "No" or "Uncertain," and nothing else about your marketing matters.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Signal Type</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Key Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Content</td>
                  <td className="py-3 px-4 text-slate-400">Category-brand pairing in first paragraph, self-contained answer blocks</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Infrastructure</td>
                  <td className="py-3 px-4 text-slate-400">Organization + Product schema, sameAs links, Wikidata entry, Wikipedia presence</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Authority</td>
                  <td className="py-3 px-4 text-slate-400">Cross-source mention density in category-relevant contexts, branded anchor text</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Diagnose Your Entity Gap</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow's AI Visibility Scanner checks your brand against all five entity gap types and produces a prioritized fix list. See where your brand stands in under 60 seconds.
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
