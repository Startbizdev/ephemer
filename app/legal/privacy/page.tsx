import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy — Ephemer",
  alternates: { canonical: `${SITE_URL}/legal/privacy` },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <Heading as="h1" size="lg" className="mb-8">
          Privacy Policy
        </Heading>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div>
            <h2 className="font-600 text-snow mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly: name, email, company, role, and project details when you
              contact us or submit a brief. We also collect technical data: IP address, browser type, pages visited.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">2. How We Use Your Information</h2>
            <p>
              To respond to inquiries, match you with engineers, process contracts, and communicate about services.
              We do not sell personal data. We may share data with contractors and partners strictly necessary to
              provide service (e.g., payment processors, compliance tools).
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">3. Data Retention</h2>
            <p>
              We retain contact and brief information for 2 years after last interaction. Contractor and vetting data
              retained per contract terms. You can request deletion at contact@ephemer.co.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">4. GDPR Compliance</h2>
            <p>
              For EU residents: you have the right to access, correct, or delete your data. Contact us to exercise
              these rights. We comply with standard data protection requirements.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">5. Cookies and Tracking</h2>
            <p>
              We use minimal cookies for website function and analytics. We do not use invasive tracking. See our
              Cookie Policy for details.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">6. Contact</h2>
            <p>Questions about privacy? Email privacy@ephemer.co</p>
          </div>

          <div className="border-t border-carbon pt-6 mt-6">
            <p className="text-xs text-zinc-500">Last updated: April 2025</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
