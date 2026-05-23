# GetCiteFlow - AI Visibility Platform

<div align="center">
<img width="1200" height="475" alt="GetCiteFlow Banner" src="https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75" />
</div>

GetCiteFlow helps you analyze and optimize your website for AI search engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews. Get actionable insights to increase your chances of being cited by large language models.

## What is GEO?

GEO (Generative Engine Optimization) is the practice of optimizing your website content to increase visibility and citation rates in AI-powered search results. Unlike traditional SEO, GEO focuses on making content structure and entity clarity optimized for AI retrieval systems.

## Features

- **AI Visibility Score**: Get a comprehensive score measuring how well your website is positioned for AI citation
- **Entity Clarity Analysis**: Evaluate how clearly your brand and value proposition are defined for AI systems
- **FAQ Coverage Check**: Identify missing FAQ content and Schema markup that could increase your AI visibility
- **Actionable Recommendations**: Receive specific, prioritized suggestions to improve your content structure

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics & Speed Insights
- **API**: Google Gemini AI

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

Create a `.env.local` file in the root directory and add your API key:

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
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── blog/              # Blog articles
│   ├── geo-for-saas/      # GEO guide for SaaS
│   ├── geo-for-ai-tools/  # GEO guide for AI tools
│   ├── geo-for-startups/  # GEO guide for startups
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # UI components (shadcn)
│   ├── Features.tsx       # Features section
│   ├── HowItWorks.tsx     # How it works section
│   ├── Hero.tsx           # Hero section
│   └── ...
├── lib/                   # Utilities and libraries
└── public/                # Static assets
```

## Learn More

- [GEO - Generative Engine Optimization](https://www.getciteflow.ai/) - Official website
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

