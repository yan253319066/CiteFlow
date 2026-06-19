import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | GetCiteFlow",
  description: "Review the terms and conditions governing your use of the GetCiteFlow AI brand visibility service. Understand your rights and obligations.",
  keywords: ['terms of service', 'GetCiteFlow legal', 'brand visibility service terms'],
  alternates: { canonical: "https://www.getciteflow.ai/terms-of-service" },
  openGraph: {
    title: "Terms of Service | GetCiteFlow",
    description: "Review the terms and conditions governing your use of the GetCiteFlow service.",
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/terms-of-service&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Terms of Service OG Image' }],
  },
  twitter: { card: 'summary_large_image', title: 'Terms of Service | GetCiteFlow', description: 'Review the terms and conditions governing your use of the GetCiteFlow AI brand visibility service. Understand your rights and obligations.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/terms-of-service&score=75'] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service | GetCiteFlow",
  description: "Review the terms and conditions governing your use of the GetCiteFlow AI brand visibility service.",
  url: "https://www.getciteflow.ai/terms-of-service",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={webPageSchema} />
      <Navbar />

      <section className="pt-32 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Scale className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary">Legal</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-400 mb-4">Last updated: May 19, 2026</p>

        <hr className="border-white/5 my-8" />

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the GetCiteFlow brand visibility service (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to all the terms, you may not access or use the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to update or modify these Terms at any time. Continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              GetCiteFlow provides an enterprise AI brand visibility service that helps businesses get mentioned and recommended by AI systems like ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen. Our free AI Visibility Scanner checks any URL for AI visibility signals and provides optimization recommendations.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <p className="mb-4">By using the Service, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are at least 16 years of age</li>
              <li>You have the legal capacity to enter into binding agreements</li>
              <li>You are not located in a jurisdiction that is subject to a U.S. government embargo</li>
              <li>You will comply with all applicable laws and regulations</li>
            </ul>
          </Section>

          <Section title="4. Account Registration">
            <p className="mb-4">
              When you create an account, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to protect your account security.
            </p>
          </Section>

          <Section title="5. Acceptable Use">
            <p className="mb-4">You agree not to use the Service for any unlawful purpose or in violation of these Terms. Prohibited activities include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempting to interfere with or disrupt the Service, servers, or networks</li>
              <li>Using automated scripts, bots, or scrapers without our express permission</li>
              <li>Submitting false or misleading information</li>
              <li>Reverse engineering, decompiling, or disassembling the Service</li>
              <li>Using the Service to analyze domains you do not own or have authorization to analyze</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p className="mb-4">
              The Service, including its code, design, layout, graphics, and content (excluding user-submitted domains), is owned by GetCiteFlow and protected by intellectual property laws.
            </p>
            <p className="mb-4">
              The GetCiteFlow name, logo, and related trademarks are our exclusive property. You may not use them without our prior written consent.
            </p>
            <p>
              You retain all rights to any content or data you submit to the Service. By submitting a domain for analysis, you grant us a limited license to process that data solely for the purpose of providing the Service.
            </p>
          </Section>

          <Section title="7. Service Availability and Modifications">
            <p className="mb-4">
              We strive to provide reliable service but do not guarantee uninterrupted availability. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with or without notice.
            </p>
            <p>
              We may introduce new features, change existing features, or remove features as we evolve the service. We will make reasonable efforts to notify you of significant changes.
            </p>
          </Section>

          <Section title="8. Fees and Payments">
            <p className="mb-4">
              Certain features of the Service may require payment of fees. All fees are non-refundable except as expressly stated in our refund policy or as required by applicable law.
            </p>
            <p className="mb-4">
              We reserve the right to change our pricing with reasonable advance notice. Continued use of the Service after price changes take effect constitutes your acceptance of the new pricing.
            </p>
            <p>
              Payment processing is handled by our third-party payment processors. Your payment information is subject to their terms and privacy policies.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p className="mb-4">
              To the maximum extent permitted by law, GetCiteFlow and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Service.
            </p>
            <p className="mb-4">
              This includes, but is not limited to, damages for loss of profits, data, goodwill, or business interruption, even if we have been advised of the possibility of such damages.
            </p>
            <p>
              Our total liability for any claim arising from these Terms or the Service shall not exceed the amount you have paid us in the twelve (12) months preceding the claim.
            </p>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p className="mb-4">
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied.
            </p>
            <p className="mb-4">
              We do not warrant that the Service will be error-free, secure, uninterrupted, or that results from the Service will be accurate or reliable. The analysis and recommendations provided are for informational purposes and should not be the sole basis for business decisions.
            </p>
            <p>
              We expressly disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless GetCiteFlow and its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your violation of these Terms, your misuse of the Service, or your infringement of any third-party rights.
            </p>
          </Section>

          <Section title="12. Termination">
            <p className="mb-4">
              We reserve the right to terminate or suspend your account and access to the Service at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, third parties, or us.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will immediately cease. Provisions of these Terms that by their nature should survive termination shall survive, including intellectual property provisions, warranty disclaimers, and limitation of liability.
            </p>
            <p>
              You may terminate your account at any time by contacting us. We will delete your personal data in accordance with our Privacy Policy.
            </p>
          </Section>

          <Section title="13. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved exclusively in the courts of Delaware.
            </p>
          </Section>

          <Section title="14. Severability">
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </Section>

          <Section title="15. Entire Agreement">
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and GetCiteFlow regarding your use of the Service, superseding any prior agreements or understandings.
            </p>
          </Section>

          <Section title="16. Contact Us">
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="mt-4 p-6 glass rounded-2xl text-sm space-y-2">
              <p>Email: <span className="text-primary">support@getciteflow.ai</span></p>
              <p>Website: <span className="text-primary">https://www.getciteflow.ai</span></p>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
