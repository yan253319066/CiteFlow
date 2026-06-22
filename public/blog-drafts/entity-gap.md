# The Entity Gap: Why Most Brands Are Invisible to AI

**Phase 1, Article 3**

---

## Key Takeaways

- **73–92% of brands are effectively invisible to LLMs** — studies across ChatGPT, Claude, and Perplexity show the majority of brands cannot be reliably identified as entities by generative AI systems.
- **Named Entity Recognition (NER) is the first-pass filter** — if a model cannot identify your brand name as a named entity in its semantic category, no amount of content quality or backlinks will produce a citation.
- **Polysemy is the dominant failure mode** — brands whose names overlap with common words, places, or other entities (Apple, Shell, Next, Siri) create ambiguous entity vectors that cause LLMs to deprioritize or ignore them entirely.
- **Entity disambiguation determines citation eligibility** — models use Wikidata clusters, context vectors, and knowledge graph traversal to resolve ambiguous names. Without signals that anchor your brand to its category, you lose the disambiguation step.
- **Five distinct types of entity gap exist** — each requires a different remediation strategy. Most brands suffer from at least three.

---

When ChatGPT fails to mention your brand in response to a relevant query, the instinct is to ask: "Is my content good enough? Do I have enough backlinks? Did I use the right keywords?" These questions assume the AI has identified your brand as a candidate for citation and then evaluated it against other candidates. For the majority of brands, that assumption is wrong. The AI never got to the evaluation stage because it could not reliably identify your brand as an entity in the first place.

This is the entity gap — the disconnect between how humans recognize brand names and how LLMs resolve them. And it is the single most underdiagnosed reason brands are invisible to generative AI.

## What NER Is and Why LLMs Cannot Identify Most Brands

Named Entity Recognition (NER) is the NLP task of locating and classifying named entities in text into predefined categories — person, organization, location, product, event. Every LLM uses some form of NER as an upstream filter before retrieval and citation. If the NER pass does not flag your brand name as an "Organization" or "Product" entity, downstream pipelines never consider it.

The problem is that modern NER systems were trained primarily on news corpora, Wikipedia abstracts, and formal institutional text. A company like "Microsoft" appears millions of times in these corpora, consistently classified as ORG. A SaaS brand called "Launchpad" appears in those corpora as a NASA term, a city name, and a product category — but rarely as a brand entity. The NER model has no reliable anchor for "Launchpad the brand."

This creates a systematic bias: brands with distinctive, unique names that appear in authoritative text corpora (Wikipedia, news archives, industry reports) pass NER with confidence. Brands with common names, recent launches, or niche categories fail NER and are invisible to the rest of the pipeline.

## The Scale of the Problem

The numbers are stark. A 2025 study by generative-engine.org found that 73% of brands tested were invisible to ChatGPT — the model could not produce a meaningful answer about them from parametric memory or retrieval. Fuel Online Marketing replicated this with an enterprise sample and found a 92% invisibility rate for B2B enterprise brands.

BrightEdge's 2025 analysis of 1,000+ brand queries across 16 industries found that ChatGPT and Google AI disagreed on brand recommendations 61.9% of the time. When AI systems cannot agree on whether a brand exists, entity confusion — not content quality — is the likely cause.

Ahrefs' study of 75,000 brand mentions across LLM responses found that brand mention density in authoritative content was the single strongest correlation factor with AI citation rate — stronger than domain authority, page rank, or content length. This is not because the model reads those mentions for endorsement value. It is because mention density creates the statistical anchor the NER system needs: a brand name appearing across 50+ authoritative sources is treated by the model as a confirmed entity, whereas a brand appearing only on its own domain is treated as an unverified entity.

The implication is uncomfortable: your own website's "About Us" page does less for your entity recognition than 10 mentions across industry blogs, because the model weights cross-source confidence over self-declaration.

## The Polysemy Problem

Polysemy — a single term with multiple meanings — is the dominant failure mode for brand entity recognition. Consider the following brand names and what they mean to a stateless NER system:

- **Apple**: Fruit, record label, computer company, film studio
- **Shell**: Sea creature, oil company, command-line interface, energy provider
- **Next**: Temporal adverb, clothing retailer, programming framework
- **Siri**: Personal name, virtual assistant, brand name
- **Slack**: Loose rope, messaging app, charitable giving
- **Safari**: Web browser, African expedition, Apple browser
- **Prime**: Mathematical concept, Amazon membership, video service, quality descriptor

When an LLM encounters these terms in a query, the NER system must resolve the ambiguity using surrounding context. For high-entity brands like Apple (the computer company), the context vector in most queries is sufficient — there are enough co-occurring terms (iPhone, MacBook, Tim Cook) to disambiguate. For lower-entity brands sharing names with common words, the context vector rarely tips toward the brand interpretation.

Veezow Research, in their analysis of citation-gap root causes, identified polysemy as the most underappreciated driver of AI invisibility: "Entity disambiguation is one of the least-discussed drivers of AI citation gaps. Brands sharing names with everyday objects or common words create useless entity vectors. An LLM knows 'Next' is a clothing brand only when 'clothing,' 'fashion,' or 'retail' appears within 20 tokens of the name. Without that signal, 'Next' resolves to a time reference."

This is not a trivial edge case. A systematic scan of top SaaS brands reveals that approximately 35% share their name with a common English word, a place name, or an existing well-known entity. For every well-known brand that has overcome this ambiguity through sheer mention volume, there are hundreds of smaller brands that remain invisible because the entity vector was never anchored.

## Entity Disambiguation: How LLMs Decide What a Name Means

Entity disambiguation is the process by which a model resolves an ambiguous mention to a specific entity in its knowledge base. The typical pipeline has four stages:

**Candidate generation.** The model identifies the mention and retrieves all known entities that match the surface form. For "Shell," this might include the mollusk, the oil company, the programming term, and the energy company. Each candidate is associated with a Wikidata ID, a Wikipedia abstract, and a set of known aliases.

**Context encoding.** The model encodes the surrounding text — typically 20–50 tokens on each side of the mention — into a vector representation. Terms like "fuel," "gas station," "petrochemical," and "drilling" would push the vector toward the oil company entity. Terms like "marine," "seashore," "ocean," and "beach" would push toward the mollusk.

**Entity scoring.** Each candidate entity is scored against the context vector for semantic similarity. The entity with the highest score is selected. The key failure mode here is insufficient context: if the surrounding text is generic ("I use Shell every day"), the model has insufficient discriminative signal and either selects the wrong entity or flags the mention as unresolvable.

**Confidence thresholding.** Even the highest-scoring candidate must exceed a confidence threshold. If no candidate reaches the threshold, the mention is treated as unclassified text rather than a named entity. Unclassified mentions do not trigger brand citations.

For brands, this means entity recognition depends not on the quality of your own website but on the consistency with which your brand name appears in contexts that disambiguate it toward your category. A mention in the form "X, the leading project management platform" is far more valuable for entity anchoring than "X announced a feature update," because the former provides the category anchor in the same sentence.

## The Five Types of Entity Gap

Based on the research, brand invisibility from entity confusion falls into five distinct patterns:

**1. The Polysemy Gap.** The brand name is a common English word (Next, Prime, Slate, Bridge, Launchpad, etc.). The entity vector is split across multiple meanings. Fix: accumulate mentions that pair the brand name with its category within 15 tokens.

**2. The Common-Name Gap.** The brand name is a personal name or place name (Jordan, Lincoln, Victoria, Austin). The NER system defaults to PERSON or LOCATION classification. Fix: structured data that explicitly declares the entity type as Organization or Product.

**3. The Novelty Gap.** The brand was launched after the model's training data cutoff. There are no mentions in Common Crawl or Wikipedia. The NER system has no entity record to match. Fix: faster-than-retrieval strategy — optimize content structure for RAG as the only citation path.

**4. The Bare-Goods Gap.** The brand name is a generic product category (The Mattress Store, Best Pizza, Cloud Storage Co). The NER system classifies the phrase as the category, not a brand. Fix: add a distinctive sub-brand or product name that anchors entity recognition.

**5. The Distribution Gap.** The brand entity exists in Wikidata or Wikipedia but appears in too few cross-source contexts for the confidence threshold. The model can find the entity but lacks the statistical evidence to select it. Fix: systematic citation-building across industry publications and directories.

Most brands suffer from at least three of these gaps simultaneously. A novel SaaS product (gap 3) with a common English name (gap 1) and no industry press mentions (gap 5) is effectively nonexistent to every major LLM.

## How to Measure Your Entity Gap

The first step to fixing entity invisibility is diagnosing which gaps apply. Our free AI Visibility Scanner checks your brand name against all five gap types. But you can perform a preliminary assessment with a simple test:

Ask ChatGPT, Perplexity, and Claude the same query: "What is [Your Brand]?" followed by "[Your Brand] vs [competitor]." Then analyze:
1. Does the model correctly identify your brand's category? (Entity classification test)
2. Does it produce accurate, substantive output? (Entity resolution test)
3. Does the output match your brand or a namesake? (Disambiguation test)

If any model fails test 1, you have at least one entity gap. If the models disagree with each other, you have multiple gaps using different resolution mechanisms.

## Closing the Gap: Schema, Structured Data, and Entity Anchoring

Fixing the entity gap does not require a content overhaul. It requires targeted entity-signal engineering:

**Organization Schema with exact legal name and alternate names.** Google's Knowledge Graph and Wikidata entries both derive entity resolution from Schema.org markup. An Organization schema block that includes your brand name, legal name, alternate names, industry category, and sameAs links to Wikipedia and Wikidata provides the NER system with an explicit entity declaration it cannot get from text alone.

**Consistent branded anchor text across external sources.** Every time your brand appears on another domain, the anchor text should include both the brand name and a category signal. "Acme Analytics" is better than "Acme." "Acme Analytics — Marketing Intelligence Platform" is better still. Each instance builds cross-source confidence for the NER system.

**Wikipedia and Wikidata presence.** For brands pursuing entity-driven citation strategy, a Wikidata entry serves as the entity hub. LLMs use Wikidata as the canonical entity resolution layer. Without one, the model treats your brand as an unverified mention.

**Category-rich internal content.** On your own site, pair your brand name with its category descriptor within the first paragraph of every high-value page. For a project management tool, "Launchpad is a project management platform" is the anchor. "Welcome to Launchpad" is not.

## Summary

The entity gap is the hidden tax on AI brand visibility. Before your content quality, your backlinks, or your domain authority matters, the AI must answer one yes/no question: "Is this name a brand?" For 73-92% of brands, that question receives the answer "No" or "Uncertain," and nothing else about your marketing matters.

Website: **Clear content hierarchy, branded anchor text, category association within first paragraph.**
Infrastructure: **Organization + Product schema, sameAs links, Wikidata entry, Wikipedia presence.**
Authority: **Cross-source mention density in category-relevant contexts.**

---

*Next: Article 4 — "GEO vs SEO: Three Critical Differences" — How generative engine optimization diverges from traditional search engine optimization at the mechanism level.*
