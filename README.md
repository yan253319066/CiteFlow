# GetCiteFlow — Enterprise AI Brand Service

<div align="center">
<img width="1200" height="475" alt="GetCiteFlow Banner" src="https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75" />
</div>

GetCiteFlow helps enterprise brands get mentioned and recommended by AI systems — ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Google AI Overviews. Try our **free AI Visibility Scanner** to check where your brand stands.

## What We Do

GetCiteFlow is an enterprise service that makes your brand get mentioned and recommended by AI systems. We also offer a **free AI Visibility Scanner** that checks any website's AI visibility by analyzing entity clarity, structured data, FAQ markup, content structure, and machine-readable files like `llms.txt`.

## Features

- **AI Visibility Score** — 0-100 score measuring how well your site is positioned for AI citations
- **Missing Components Scan** — Detects missing FAQ Schema, llms.txt, robots.txt issues, weak entity clarity, and more — ranked by impact
- **Multi-Format Export** — Copy or download your report data in multiple formats

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
| Enterprise — Brand Visibility | From $3,999 | Full-site brand visibility optimization by the GetCiteFlow team (price varies by scope) |
| Enterprise — AI Visibility Growth | From $4,999/mo | Managed brand presence across AI systems (industry platform strategy, brand entity building, citation-optimized content, etc.) |

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
│   ├── geo-for-saas/          # AI visibility guide for SaaS
│   ├── geo-for-ai-tools/      # AI visibility guide for AI tools
│   ├── geo-for-startups/      # AI visibility guide for startups
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
│   ├── analyze.ts             # AI visibility analysis engine
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
