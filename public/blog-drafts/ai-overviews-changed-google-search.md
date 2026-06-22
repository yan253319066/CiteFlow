# How AI Overviews Changed Google Search

**Phase 4, Article 16**

---

## Key Takeaways

- **AI Overviews reduced traditional organic click-through rates by 15-25% for informational queries** — generating an answer in SERP means fewer users click through to publisher sites.
- **Google's AI Overviews use a fundamentally different retrieval architecture from ChatGPT** — Google leverages its existing search index and ranking signals, then applies LLM synthesis on top. ChatGPT uses the RAG pipeline (Article 2) against open web content.
- **Citations in AI Overviews favor Google-indexed authority signals** — domain authority (PageRank), backlink profiles, and E-E-A-T signals still matter in a way they do not for ChatGPT citations.
- **Brands must optimize for both architectures simultaneously** — the signals that win in Google AI Overviews (backlinks, authority, structured data) partially overlap with GEO signals but are not identical.
- **Zero-click search is accelerating.** AI Overviews answer queries directly in the SERP. The only way to capture value from zero-click queries is to be the cited entity in the overview.

---

AI Overviews represent Google's entry into generative search. Unlike GPT-based retrieval engines that crawl the web independently through RAG pipelines, AI Overviews sit on top of Google's existing search index. This architectural difference has significant implications for citation strategy.

## The Architecture Difference

**Google AI Overviews** use Google's web index as the retrieval corpus. The same ranking signals — PageRank, domain authority, backlink profiles, E-E-A-T, Core Web Vitals — determine whether a page is cited. Then an LLM synthesizes the answer from the top-ranked results.

**ChatGPT/Perplexity/Claude** use the RAG pipeline: query analysis, vector retrieval from an independent index or web crawl, re-ranking by information gain, then citation synthesis.

The practical difference: a page with high domain authority but weak entity definition will perform better in AI Overviews than in ChatGPT. A page with strong entity definition but low domain authority will perform better in ChatGPT than in AI Overviews.

## What This Means for Strategy

**For high-authority domains:** AI Overviews are a favorable environment. Continue investing in traditional SEO signals — they transfer to AI Overviews directly. Add entity definition (Article 9 Layer 1) and schema markup to maximize citation probability.

**For low-authority domains:** AI Overviews are harder to break into. The backlink requirement persists. Focus on GEO-first strategies for ChatGPT, Perplexity, and Claude where entity clarity outweighs domain authority.

## The Zero-Click Acceleration

AI Overviews accelerate the zero-click search trend. For informational queries, Google increasingly answers the question directly in the SERP, citing one or more sources. Users get the answer without clicking through. The only value for the cited brand is the citation itself — brand awareness, entity reinforcement, and the impression of authority from being cited by Google.

## Measurement Implications

Tracking AI Overviews citations requires different tools than tracking organic search rankings. Citation frequency in AI Overviews, citation share vs. competitors, and the queries that trigger overview citations are the relevant metrics.

---

*Next: Article 17 — "Measuring AI Visibility: Beyond Google Analytics" — the metrics that matter for GEO.*
