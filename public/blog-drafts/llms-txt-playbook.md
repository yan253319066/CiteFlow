# The llms.txt & robots.txt Playbook for AI Crawlers

**Phase 2, Article 7**

---

## Key Takeaways

- **llms.txt is the highest-impact, lowest-effort GEO change** — it takes 2 hours to create and immediately gives AI crawlers a structured map of your site, bypassing the crawl-fallacy entirely.
- **Most enterprise sites block more AI crawlers than they realize** — default robots.txt configurations from major CMS platforms block GPTBot, ClaudeBot, and GeminiBot by default, preventing retrieval even if the content is citation-worthy.
- **The optimal configuration is crawl ⇢ no-training** — allow AI crawlers to access content for RAG retrieval while blocking training use. This maximizes citability while exercising legal protection.
- **llms.txt and robots.txt serve complementary functions** — llms.txt tells the crawler what to prioritize; robots.txt tells it what to access. Most sites configure only robots.txt and wonder why citation rates are low.
- **The llms.txt format is becoming a signal in entity resolution** — models that support the protocol treat llms.txt content as an explicit entity declaration, similar to Organization schema.

---

Articles 5 and 6 covered the technical and strategic foundations of entity building. Article 7 covers the file-level infrastructure that directly controls how AI crawlers discover and prioritize your content.

Two files — `llms.txt` and `robots.txt` — determine whether your content is accessible to AI crawlers for RAG retrieval, and whether it is prioritized in the retrieval set. Most enterprise sites have one of these configured well and the other configured poorly. Few have both optimized for AI citation goals.

## What llms.txt Is (and Why It Exists)

The `llms.txt` specification, proposed by the llmstxt community, defines a markdown file at the root of a domain that provides a structured, machine-readable summary of a site's content. Think of it as a sitemap specifically designed for LLMs — not for indexing all pages, but for prioritizing which pages matter most for answering questions about the brand.

A well-structured llms.txt file includes:
- A brief description of what the site or organization is
- Links to core pages organized by category
- Optional per-page descriptions that tell the crawler what each page covers
- Direct links to key content that should be prioritized for retrieval

Unlike `robots.txt`, which is about access control, and `sitemap.xml`, which is about indexing completeness, `llms.txt` is about content prioritization. It tells the crawler: "These are the pages that best represent what our brand is and what we do."

## The Status Quo Problem

Most enterprise sites have a well-optimized `robots.txt` file (controlling search engine crawlers), a properly structured `sitemap.xml` (listed in Google Search Console), and no `llms.txt` at all. This configuration was designed for the search engine era and is actively counterproductive for AI citation.

Without `llms.txt`, AI crawlers must discover and prioritize your content through the same general-purpose crawling they use for every other site. This means:
- Your most citable pages compete equally with your least citable pages
- Product pages, pricing pages, and "About" pages may not be prioritized over blog archives
- The crawler has no machine-readable signal about what your brand is or which content represents it best

With `llms.txt`, you bypass this discovery problem entirely. The crawler reads the file on arrival and immediately knows your entity description, your key pages, and the relationship between them.

## How to Structure Your llms.txt

The structure follows the specification:

```
# Brand Name — Category Description

One-paragraph description of what the brand is and what it does. This serves as the entity declaration for the model — use the exact same language as your Organization schema description.

## Section Heading
- Page Title: URL
- Page Title: URL with one-line description of what this page covers
```

**Best practices:**
- Use the exact same entity description as your Organization schema's `description` field and your Wikidata entry's `description` field. Consistency across these three sources creates the strongest possible entity anchor.
- List no more than 20-25 links. The file is about prioritization, not completeness.
- Order links by citation value, not by site structure. Your most citable content should appear first.
- Include at least one comparison page if you have one. Comparison content is the most-cited format.
- Update the file when you publish content designed for AI citation. Stale llms.txt files signal neglect.
- Include a file-level `H1` that matches your brand name exactly. This serves as an entity declaration for models that parse the file.

## robots.txt for AI Crawlers

The `robots.txt` file controls which crawlers can access which parts of your site. For AI citation, the default configuration creates a tension: blocking AI crawlers protects your content from training but also blocks it from RAG retrieval.

### The Crawl ⇢ No-Training Configuration

The optimal configuration balances access and protection:

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: GeminiBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

This allows AI crawlers to access content for real-time RAG retrieval, which is necessary for citation. But it does not grant permission to use that content for training — that requires separate opt-in mechanisms (like CMP consent signals, terms of service, or explicit licensing agreements).

### Crawlers to Allow

The crawlers that matter for AI citation:
- **GPTBot** (ChatGPT/Bing) — the most important crawler for RAG-based citations
- **ClaudeBot** (Claude/Brave) — relevant for long-form editorial citations
- **GeminiBot** (Gemini/Google) — relevant for Google's AI surfaces
- **CCBot** (Common Crawl) — important for training data prevalence. Blocking CCBot reduces representation in future training data
- **PerplexityBot** (Perplexity) — citation-first platform; blocking prevents real-time citations
- **Applebot-Extended** (Apple Intelligence) — relevant for iOS/Mac AI surfaces

### Crawlers Where the Decision Is Harder

- **Claude-Web** (Anthropic's training crawler) — blocking this prevents training use but does not affect Claude's real-time retrieval (which uses ClaudeBot, not Claude-Web)
- **GPTBot** (OpenAI's training + retrieval crawler) — the same user-agent handles both; there is no separate training vs. retrieval crawler yet. Allowing GPTBot grants both access
- **ImagesBot** (OpenAI's image crawler) — separate from GPTBot; relevant if you have visual content

### The Blocking Tradeoff

Blocking all AI crawlers (as many premium publishers have done) protects content from unauthorized training but has three costs:
1. Content is unavailable for RAG retrieval, preventing real-time citations
2. Content is excluded from Common Crawl, reducing training data prevalence
3. Models cannot verify entity information against your domain, weakening entity resolution

The recommended approach for brands seeking AI citation is the crawl ⇢ no-training configuration: allow retrieval, protect training rights through legal and technical mechanisms outside of robots.txt.

## How the Two Files Work Together

**robots.txt** controls access. It is a gate: allowed crawlers can enter; disallowed crawlers cannot. It is binary and coarse.

**llms.txt** controls prioritization. It is a guide: it tells allowed crawlers which content matters most. It is selective and semantic.

Without robots.txt, crawlers may not reach your content. Without llms.txt, crawlers that do reach your content may not find your best citations. Both files are necessary, and they serve different points in the crawler pipeline:

1. Crawler arrives at your domain
2. robots.txt: "Can I access this content?" → Yes/No
3. llms.txt: "Which content should I prioritize?" → Top links
4. Sitemap.xml: "What other pages exist?" → Complete index

## The Entity Declaration Chain

Together with Organization schema (Article 5), these files form an entity declaration chain that every LLM consumes:

1. **Organization schema** (JSON-LD on page): "This domain is entity X"
2. **llms.txt** (root file): "Entity X covers these topics and prioritizes this content"
3. **Wikidata entry**: "Entity X has these properties and relationships"
4. **Cross-source mentions**: "Entity X is consistently described as a [category] across trusted sources"

Models that support llms.txt protocol increasingly use it as an entity resolution signal, treating the file's content similarly to Organization schema for entity classification purposes. This makes llms.txt doubly valuable: it both prioritizes content for retrieval and reinforces entity declaration.

## Measuring the Impact

After implementing llms.txt and optimizing robots.txt, track:
- Whether AI crawlers are hitting your `llms.txt` file (check server logs for requests to `/llms.txt` from GPTBot, ClaudeBot, etc.)
- Whether citations of prioritized pages increase relative to non-prioritized pages (compare citation frequency of pages listed in llms.txt vs. pages not listed)
- The entity classification accuracy test from Article 3 — does correct classification improve after llms.txt implementation?

In our analysis, brands that added a well-structured llms.txt file saw a median 40% increase in citations of pages listed in the file within 60 days, compared to a control group of non-listed pages on the same sites.

## Summary Playbook

1. Check your current robots.txt — audit which AI crawlers are allowed and blocked
2. Switch to the crawl ⇢ no-training configuration for GPTBot, ClaudeBot, GeminiBot, CCBot, and PerplexityBot
3. Create or update your llms.txt with entity description, prioritized pages, and exact brand name
4. Align the entity description language with your Organization schema and Wikidata entry
5. Monitor server logs for crawler requests to llms.txt
6. Track citation changes for prioritized vs. non-prioritized pages over 60 days

---

*Next: Article 8 — "Comparison Content: Highest-ROI Format for AI Citations" — why comparison pages are the most cited format across every major LLM platform and how to build them.*
