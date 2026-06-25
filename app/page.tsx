import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { JsonLd } from "@/components/JsonLd";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GetCiteFlow",
  description: "Enterprise AI Brand Service — Test Page",
  provider: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  url: "https://www.getciteflow.ai",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={serviceSchema} />
      <Navbar />
      <Hero />
      <ScoreCards />
      <Features />
      <div style={{height: '600px', background: 'transparent'}} />
      <div style={{height: '600px', background: 'transparent'}} />
    </main>
  );
}
