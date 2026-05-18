import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "CiteFlow | Get Mentioned by AI",
  description: "Identify and optimize your website's visibility in ChatGPT, Gemini, and AI Search results.",
  openGraph: {
    title: "CiteFlow | Get Mentioned by AI",
    description: "The AI Visibility Platform for GEO (Generative Engine Optimization).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
