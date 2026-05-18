import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import Link from "next/link";
import { Mail, Twitter, Github } from "lucide-react";
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
      
      {/* Social Proof / Footer Section */}
      <footer className="border-t border-white/5 bg-card/50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">CF</span>
              </div>
              <span className="text-lg font-bold">CiteFlow</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AI visibility infrastructure for the next generation of the web. 
              Built for teams who want to stay relevant in the age of LLMs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Analyzer</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">GEO Score</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">GEO Guide</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 CiteFlow AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
