import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

function LocaleScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var c=document.cookie.match(/NEXT_LOCALE=([^;]+)/);if(c&&c[1]==='zh')document.documentElement.lang='zh'}catch(e){}})()`
      }}
    />
  );
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL('https://www.getciteflow.ai'),
  title: "GetCiteFlow | Get Your Brand Recommended by AI",
  description: "Enterprise AI Brand Service. Free AI Visibility Scanner — check your brand's standing with ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen.",
  keywords: ['AI brand visibility', 'get mentioned by AI', 'AI brand service', 'enterprise AI visibility', 'brand recommended by AI', 'AI citation service', 'ChatGPT brand mentions'],
  alternates: { canonical: 'https://www.getciteflow.ai/', languages: { en: 'https://www.getciteflow.ai/', zh: 'https://www.getciteflow.ai/zh', 'x-default': 'https://www.getciteflow.ai/' } },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: { title: "GetCiteFlow | Get Your Brand Recommended by AI", description: "Enterprise AI Brand Service that gets your brand recommended by ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen.", type: "website", siteName: "GetCiteFlow", images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75', width: 1200, height: 630, alt: 'GetCiteFlow OG Image' }] },
  twitter: { card: 'summary_large_image', title: 'GetCiteFlow | Get Your Brand Recommended by AI', description: 'Enterprise service that gets your brand mentioned and recommended by AI systems.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75'] },
  other: { 'google-site-verification': 'BoNURFBgBxzB3hvyclbuiET1LgD1QAc8sWbOqG3lnh' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GetCiteFlow',
  url: 'https://www.getciteflow.ai',
  logo: 'https://www.getciteflow.ai/logo.png',
  description: 'Enterprise AI Brand Service that helps brands get mentioned and recommended by ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen.',
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
      <body className="bg-background text-foreground antialiased">
        <LocaleScript />
        {children}
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
