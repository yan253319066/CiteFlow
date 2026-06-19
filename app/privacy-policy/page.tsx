import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | GetCiteFlow",
  description: "Learn how GetCiteFlow collects, uses, and protects your personal data. Our commitment to your privacy and data security.",
  keywords: ['privacy policy', 'GetCiteFlow privacy', 'data protection'],
  alternates: { canonical: "https://www.getciteflow.ai/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | GetCiteFlow",
    description: "Learn how GetCiteFlow collects, uses, and protects your personal data.",
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/privacy-policy&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Privacy Policy OG Image' }],
  },
  twitter: { card: 'summary_large_image', title: 'Privacy Policy | GetCiteFlow', description: 'Learn how GetCiteFlow collects, uses, and protects your personal data. Our commitment to your privacy and data security.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/privacy-policy&score=75'] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | GetCiteFlow",
  description: "Learn how GetCiteFlow collects, uses, and protects your personal data.",
  url: "https://www.getciteflow.ai/privacy-policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={webPageSchema} />
      <Navbar />

      <section className="pt-32 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary">Legal</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 mb-4">Last updated: May 19, 2026</p>

        <hr className="border-white/5 my-8" />

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <Section title="1. Introduction">
            <p>
              GetCiteFlow AI (&ldquo;GetCiteFlow,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI visibility analysis service.
            </p>
            <p>
              By accessing or using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h3 className="text-white font-semibold mb-2">Personal Data</h3>
            <p className="mb-4">
              We may collect personally identifiable information such as your name, email address, and company name when you create an account or contact us.
            </p>

            <h3 className="text-white font-semibold mb-2">Usage Data</h3>
            <p className="mb-4">
              We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the date and time of your visit.
            </p>

            <h3 className="text-white font-semibold mb-2">Domain Analysis Data</h3>
            <p>
              When you submit a domain for analysis, we collect and process the domain name, URL metadata, and the generated visibility report. We do not store sensitive content from the analyzed domains beyond what is necessary to provide the report.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our Service</li>
              <li>To improve, personalize, and expand our Service</li>
              <li>To communicate with you, including for customer support and product updates</li>
              <li>To process your account registration</li>
              <li>To analyze usage patterns and optimize our service</li>
              <li>To detect, prevent, and address technical issues and fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            <p className="mb-4">We do not sell your personal information. We may share your data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> We may engage trusted third-party companies to facilitate our Service (e.g., hosting, analytics, email delivery). These providers are contractually bound to protect your data.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental regulation.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred as part of that transaction.</li>
              <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data that cannot reasonably identify you.</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement industry-standard security measures, including encryption in transit (TLS) and at rest, access controls, and regular security audits. However, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security but strive to protect your data to the best of our ability.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal data only as long as necessary to fulfill the purposes described in this policy, or as required by law. Usage data is typically retained for a shorter period, except when used to improve security or functionality.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p className="mb-4">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data, subject to certain exceptions.</li>
              <li><strong>Portability:</strong> Request a machine-readable copy of your data.</li>
              <li><strong>Objection:</strong> Object to the processing of your data for certain purposes.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time where we rely on consent to process your data.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at <span className="text-primary">support@getciteflow.ai</span>. We will respond within 30 days.
            </p>
          </Section>

          <Section title="8. Cookies and Tracking Technologies">
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience, analyze trends, and understand user behavior. You can control cookie preferences through your browser settings.
            </p>
            <p className="mb-4">We may use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
            </ul>
          </Section>

          <Section title="9. Third-Party Services">
            <p>
              Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal data.
            </p>
          </Section>

          <Section title="10. Children&apos;s Privacy">
            <p>
              Our Service is not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to delete it promptly.
            </p>
          </Section>

          <Section title="11. International Data Transfers">
            <p>
              Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place through standard contractual clauses or other legally recognized mechanisms.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
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
