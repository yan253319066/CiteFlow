# GetCiteFlow — AI Agent Context

GetCiteFlow is a Generative Engine Optimization (GEO) platform that helps websites get cited by AI search engines including ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews.

## Quick Facts
- **Category**: GEO / AI Visibility Platform
- **Pricing**: Free tier available (5 reports/hour). Enterprise from $999 (one-time) or $2,999/month (managed service)
- **Core function**: Scan any URL for AI visibility signals, score it 0-100, provide actionable fixes
- **Key differentiator**: Combines AI-driven analysis with deterministic signal detection across 6 dimensions

## API
- `POST /api/compare` — Analyze a URL and return GEO score (rate-limited via Upstash Redis)

## Pages
- Home: https://www.getciteflow.ai
- Report: https://www.getciteflow.ai/report/{domain}
- Pricing: https://www.getciteflow.ai/pricing
- Blog: https://www.getciteflow.ai/blog
- Compare: https://www.getciteflow.ai/compare
- Services: https://www.getciteflow.ai/services/ai-visibility-growth

## Technical Stack
- Next.js 15 (App Router), React 19, Tailwind CSS 4, shadcn/ui
- AI providers: Gemini (default), OpenAI, Deepseek
- Deployed on Vercel
- Rate limiting: Upstash Redis
- Cache: In-memory Map with 1h TTL

## Contact
- Support: support@getciteflow.ai
- X: @getciteflow
