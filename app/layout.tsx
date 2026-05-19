import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://citeflow.ai'),
  title: "CiteFlow | Get Mentioned by AI",
  description: "Identify and optimize your website's visibility in ChatGPT, Gemini, and AI Search results.",
  keywords: ['AI Visibility', 'GEO', 'Get Mentioned by AI'],
  alternates: { canonical: '/' },
  openGraph: { title: "CiteFlow | Get Mentioned by AI", description: "The AI Visibility Platform for GEO.", type: "website", images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', images: ['/og-image.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
