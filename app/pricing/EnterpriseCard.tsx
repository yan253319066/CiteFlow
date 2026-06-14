import Link from 'next/link';

const techFeatures = [
  "Full site GEO scan & report",
  "FAQ Schema + llms.txt generation",
  "Meta & entity optimization",
  "Competitor citation analysis",
  "Deployment support",
];

const growthFeatures = [
  "AI visibility audit across your industry",
  "Brand entity building on authoritative sources",
  "Industry-specific platform presence strategy",
  "Citation-optimized content planning",
  "Competitor citation gap analysis",
  "Cross-platform content distribution",
  "Monthly citation tracking & strategy iteration",
];

export function EnterpriseCard() {
  return (
    <>
      <div className="p-6 border border-primary/40 bg-primary/5 rounded-2xl flex flex-col">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">Technical GEO</h2>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-sm text-muted-foreground font-medium">From</span>
            <span className="text-3xl font-black">$3,999</span>
            <span className="text-sm text-muted-foreground">/one-time</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Full-site GEO optimization done by the GetCiteFlow team. Price varies based on site size and scope.</p>
          <ul className="space-y-1.5 mb-6 flex-1 text-sm">
            {techFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="mailto:support@getciteflow.ai" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
            Contact Us <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      <div className="p-6 border border-primary/40 bg-primary/5 rounded-2xl flex flex-col">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">AI Visibility Growth</h2>
        </div>
        <div className="flex flex-col flex-1">
          <span className="inline-flex items-center self-start px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-semibold mb-2">New</span>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-sm text-muted-foreground font-medium">From</span>
            <span className="text-3xl font-black">$4,999</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Custom-priced based on your product positioning and scope. <span className="text-primary">Contact us for a quote.</span></p>
          <ul className="space-y-1.5 mb-6 flex-1 text-sm">
            {growthFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link href="/services/ai-visibility-growth" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold border border-primary/40 bg-primary/10 text-white hover:bg-primary/20 transition-all cursor-pointer mb-2">
            Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
          <a href="mailto:support@getciteflow.ai" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
            Contact Us <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </>
  );
}
