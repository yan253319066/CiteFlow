# GetCiteFlow — Agent Guide

Next.js 15 (App Router) / React 19 / Tailwind CSS 4 / shadcn/ui. AI Visibility (GEO) platform deployed on Vercel.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint (flat config in `eslint.config.mjs`) |
| `npm test` | Node.js native test runner (`node --test`) |

## Architecture

- **Entrypoints**: `app/page.tsx` (home), `app/report/[domain]/page.tsx` (SSR report with `maxDuration = 60`), `app/services/ai-visibility-growth/page.tsx` (service page)
- **API**: `POST /api/compare` — analyzes a URL and returns GEO score (rate-limited via Upstash)
- **OG images**: `app/api/og/route.tsx` (Edge runtime, `force-dynamic`)
- **AI providers**: Gemini (default via `@google/genai`), OpenAI, Deepseek — switch via `AI_PROVIDER_DEFAULT` env var
- **Scraper**: `lib/scrape.ts` — fetches site HTML + checks `/robots.txt`, `/sitemap.xml`, `/llms.txt`
- **Cache**: In-memory `Map` (1h TTL), both scrape results and final reports
- **Rate limiting**: Upstash Redis + sliding window (`RATE_LIMIT_MAX`/hour). Falls back gracefully to 503 when Redis is unavailable.
- **Aliases**: `@/*` → root (via `tsconfig.json` paths)
- **shadcn/ui**: `components.json` uses `base-nova` style. Add via `npx shadcn add`

## Structure

```
app/           — App Router (home, report/[domain], blog, compare/*, pricing, case-studies, services/, etc.)
components/    — React components (Hero, ComparePanel, etc.) + ui/ (shadcn)
lib/           — analyze.ts, scrape.ts, ai-provider.ts, ratelimit.ts, cache.ts, gemini.ts, utils.ts (cn)
public/        — Static assets + llms.txt (critical for GEO)
```

## Key conventions

- **No tests exist yet**. `tests/` is empty. `npm test` runs `node --test` (no framework).
- **Two ESLint configs**: `eslint.config.mjs` (flat, active) and `.eslintrc.json` (legacy, may conflict)
- **Build**: ESLint errors ignored during build (`ignoreDuringBuilds: true`); TS errors block build
- **HMR can be disabled** via `DISABLE_HMR=true` (used in AI Studio to prevent flicker on agent edits)
- **Output**: `standalone` (Vercel-optimized)
- **Env**: `.env*.local` is gitignored. Required vars in `.env.example`.
- **No Prettier** config present.
- **Hooks**: `hooks/use-mobile.ts` only
