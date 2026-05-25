# GetCiteFlow — GEO Platform

<div align="center">
<img width="1200" height="475" alt="GetCiteFlow Banner" src="https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75" />
</div>

GetCiteFlow helps websites get cited by AI search engines — ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews. **Scan. Diagnose. Fix. Export.**

## What is GEO?

GEO (Generative Engine Optimization) is the practice of optimizing your website to increase citation rates in AI-powered search results. Unlike SEO (rankings, backlinks, keywords), GEO focuses on entity clarity, structured data, FAQ markup, and machine-readable files like `llms.txt`.

## Features

- **AI Visibility Score** — 0-100 score measuring how well your site is positioned for AI citations
- **Missing Components Scan** — Detects missing FAQ Schema, llms.txt, robots.txt issues, weak entity clarity, and more — ranked by impact
- **Fix Package Generator** — Generates deployable fixes (FAQ Schema JSON-LD, meta descriptions, llms.txt, robots.txt, head code)
- **Multi-Format Export** — One-click copy or download as JSON-LD, Markdown, HTML Snippet, React JSX, Next.js, Vue, Nuxt.js, or WordPress PHP

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animation**: Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics & Speed Insights
- **AI Engine**: Google Gemini (`@google/genai`), with OpenAI / Deepseek as alternatives
- **Rate Limiting**: Upstash Redis
- **Deployment**: Vercel (standalone)

## Pricing

| Plan | Price | What you get |
|------|-------|------------|
| Free | $0 | 5 reports per hour, AI Visibility Score, 8-dimension analysis, missing component detection |
| Pro | $19/mo | Fix package generation + multi-format export (Coming Soon) |
| Enterprise — Technical GEO | $999 | Full-site GEO optimization by the GetCiteFlow team |
| Enterprise — AI Visibility Growth | From $2,999/mo | Managed brand presence across AI ecosystems (industry platform strategy, brand entity building, citation-optimized content, etc.) |

## Getting Started

### Prerequisites

- Node.js 20+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/GetCiteFlow.git
cd GetCiteFlow
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run clean` | Clean the Next.js cache |

## Project Structure

```
├── app/                        # Next.js App Router
│   ├── api/compare            # Compare API (rate-limited)
│   ├── api/og                 # OG image generation (Edge)
│   ├── blog/                  # 6 blog articles
│   ├── case-studies/          # 2 case studies
│   ├── compare/               # Compare tool + landing pages
│   ├── geo-for-saas/          # GEO guide for SaaS
│   ├── geo-for-ai-tools/      # GEO guide for AI tools
│   ├── geo-for-startups/      # GEO guide for startups
│   ├── pricing/               # Pricing page
│   ├── report/[domain]/       # SSR report page
│   ├── services/              # Service pages
│   ├── why-chatgpt-doesnt-mention-your-site/
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                # React components
│   ├── ui/                    # shadcn/ui components
│   ├── Hero.tsx               # Homepage hero
│   ├── HowItWorks.tsx         # Scan → Diagnose → Fix → Export
│   ├── Features.tsx           # Feature cards
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Site footer
│   └── ...
├── lib/                       # Utilities and libraries
│   ├── analyze.ts             # GEO analysis engine
│   ├── scrape.ts              # Site scraper
│   ├── gemini.ts              # Gemini AI provider
│   ├── cache.ts               # In-memory cache (1h TTL)
│   └── ratelimit.ts           # Upstash rate limiting
└── public/                    # Static assets
```

## Learn More

- [GetCiteFlow](https://www.getciteflow.ai/) — Official website
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
