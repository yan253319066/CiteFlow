# AI Visibility for Professional Services & Agencies

**Phase 3, Article 14**

---

## Key Takeaways

- **Professional services face a person vs. firm entity challenge.** Models must resolve whether "Jane Smith at McKinsey" and "McKinsey the firm" are the same entity — and they often fail without explicit schema linking.
- **Individual entity pages are the highest-impact content investment.** A personal bio page with Person schema, Organization affiliation, and SameAs links to LinkedIn, Twitter, and a personal website creates a resolvable entity graph.
- **Local LLM optimization is real.** Models cite firms with complete LocalBusiness schema, Google Business Profile data, and location-specific content for geographic queries.
- **Case studies with named clients build the most durable entity associations.** Each client name creates an entity relationship that models reinforce.

---

Professional services firms — consulting, legal, accounting, agencies — face a unique AI visibility challenge that B2B SaaS and e-commerce brands do not: the person vs. firm entity split. Models must resolve individual practitioners as entities, link them to their firms, and understand the relationship between both.

## The Person vs. Firm Entity Problem

When a model retrieves a page about "Jane Smith, Partner at McKinsey," it needs to resolve three entity questions: Is Jane Smith a real person? Does she work at McKinsey? What is McKinsey? Without explicit schema linking the person to the organization, the model may treat "Jane Smith" and "McKinsey" as disconnected entities, or worse — fail to resolve either.

## Individual Entity Pages

Every practitioner who should be citable needs a personal entity page. Structured data: Person schema with name, jobTitle, affiliation (Organization schema with @id), sameAs links (LinkedIn, Twitter, professional website). The sameAs links are critical because they enable cross-entity resolution — the model can verify that the person on your site matches the person on LinkedIn.

## Local LLM Optimization

Professional services firms often serve specific geographic markets. LLMs cite firms with complete LocalBusiness schema, verified Google Business Profile data, and location-specific content for queries like "best law firm in Chicago" or "top marketing agency in San Francisco."

## Case Studies as Entity Association Builders

Case studies with named client logos and results create the most durable entity associations. A case study titled "How We Increased Revenue 3x for HubSpot" creates an entity relationship between your firm and HubSpot. The model reinforces this association with every query involving HubSpot's growth strategy or agency partnerships.

---

*Next: Article 15 — "Why Blocking AI Crawlers Can Backfire" — the crawl vs. train distinction, and what happens when you block all AI crawlers.*
