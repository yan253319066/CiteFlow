import { Navbar } from "@/components/Navbar";
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
      <div className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">WRS Test Page</h1>
        <p className="text-lg text-slate-400">Navbar + JsonLd only — no motion sections</p>
      </div>
    </main>
  );
}
