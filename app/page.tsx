import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
    </main>
  );
}
