import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL('https://www.getciteflow.ai'),
  title: "GetCiteFlow | Get Your Brand Recommended by AI",
  description: "Enterprise service that makes your brand get mentioned and recommended by ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao. Free AI Visibility Scanner to check where your brand stands.",
  keywords: ['AI brand visibility', 'get mentioned by AI', 'AI brand service', 'enterprise AI visibility', 'brand recommended by AI', 'AI citation service', 'ChatGPT brand mentions'],
  alternates: { canonical: '/' },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: { title: "GetCiteFlow | Get Your Brand Recommended by AI", description: "Enterprise AI brand service that gets your brand mentioned and recommended by ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao.", type: "website", siteName: "GetCiteFlow", images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75', width: 1200, height: 630, alt: 'GetCiteFlow OG Image' }] },
  twitter: { card: 'summary_large_image', title: 'GetCiteFlow | Get Your Brand Recommended by AI', description: 'Enterprise service that gets your brand mentioned and recommended by AI systems.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75'] },
  other: { 'google-site-verification': 'placeholder' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GetCiteFlow',
  url: 'https://www.getciteflow.ai',
  logo: 'https://www.getciteflow.ai/logo.png',
  description: 'Enterprise AI brand service that helps brands get mentioned and recommended by ChatGPT, Claude, Perplexity, Gemini, DeepSeek, and Doubao.',
  email: 'support@getciteflow.ai',
  sameAs: [
    'https://x.com/getciteflow',
    'https://github.com/yan253319066',
    'https://t.me/OS_Blockchain',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GetCiteFlow',
  url: 'https://www.getciteflow.ai',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.getciteflow.ai/report/{domain}',
    },
    'query-input': 'required name=domain',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
