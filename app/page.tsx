import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import Script from "next/script";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CiteFlow",
    "operatingSystem": "Web",
    "applicationCategory": "SEO Tool",
    "description": "AI Visibility Platform for Generative Engine Optimization (GEO).",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className="min-h-screen">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <ScoreCards />
    </main>
  );
}
