import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { headers } from "next/headers";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://getciteflow.ai'),
  title: "CiteFlow | Get Mentioned by AI",
  description: "Identify and optimize your website's visibility in ChatGPT, Gemini, and AI Search results.",
  keywords: ['AI Visibility', 'GEO', 'Get Mentioned by AI'],
  alternates: { canonical: '/' },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: { title: "CiteFlow | Get Mentioned by AI", description: "The AI Visibility Platform for GEO.", type: "website", images: ['/logo.png'] },
  twitter: { card: 'summary_large_image', title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', images: ['/logo.png'] },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics nonce={nonce} />
        <SpeedInsights nonce={nonce} />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          nonce={nonce}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
