# GetCiteFlow — AI Agent Context

GetCiteFlow is an enterprise brand visibility service that helps brands get mentioned and recommended by AI systems including ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews.

## Quick Facts
- **Category**: Enterprise AI Brand Service
- **Pricing**: Free tier available (5 reports/hour). Enterprise from $3,999 (one-time) or $4,999/month (managed service)
- **Core function**: Enterprise service that builds brand presence across AI systems. Free scanner checks any URL for AI visibility signals and scores it 0-100.
- **Key differentiator**: Combines AI-driven analysis with deterministic signal detection across 6 dimensions

## API
- `POST /api/compare` — Analyze a URL and return AI visibility score (rate-limited via Upstash Redis)

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
