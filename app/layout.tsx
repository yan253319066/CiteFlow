import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL('https://www.getciteflow.ai'),
  title: "GetCiteFlow | Get Mentioned by AI",
  description: "Identify and optimize your website's visibility in ChatGPT, Gemini, and AI Search results.",
  keywords: ['AI Visibility', 'GEO', 'Get Mentioned by AI', 'GEO tool', 'AI visibility checker', 'Generative Engine Optimization'],
  alternates: { canonical: '/' },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: { title: "GetCiteFlow | Get Mentioned by AI", description: "The AI Visibility Platform for GEO.", type: "website", siteName: "GetCiteFlow", images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75', width: 1200, height: 630, alt: 'GetCiteFlow OG Image' }] },
  twitter: { card: 'summary_large_image', title: 'GetCiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75'] },
  other: { 'google-site-verification': 'placeholder' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GetCiteFlow',
  url: 'https://www.getciteflow.ai',
  logo: 'https://www.getciteflow.ai/logo.png',
  description: 'AI Visibility Platform for GEO. Analyze and optimize your website for ChatGPT, Gemini, and AI search.',
  sameAs: [
    'https://x.com/getciteflow',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
        <JsonLd data={organizationSchema} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
