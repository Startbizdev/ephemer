import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service — Ephemer",
  alternates: { canonical: `${SITE_URL}/legal/terms` },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <Heading as="h1" size="lg" className="mb-8">
          Terms of Service
        </Heading>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div>
            <h2 className="font-600 text-snow mb-3">1. Service Overview</h2>
            <p>
              Ephemer connects clients with vetted contract engineers. We facilitate introductions and manage engagement
              logistics. The relationship is between you and the engineer; we are a matching platform.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">2. Contractor Terms</h2>
            <p>
              Contractors retain independent status. Ephemer handles compliance and payments via Deel. You (the client)
              set the scope and timeline; the contractor delivers. Contractors can decline missions and choose
              engagement length.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">3. Client Terms</h2>
            <p>
              Clients brief us on needs and select from matched profiles. Rates are agreed upfront. Ephemer guarantees
              replacement profiles at no cost if the match underperforms in the first 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">4. Disputes</h2>
            <p>
              Disputes over work quality or engagement terms are handled between client and contractor. Ephemer acts as
              mediator if needed, but does not arbitrate rates or project scope. Contractor-to-hire conversions follow
              agreed terms.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">5. Intellectual Property</h2>
            <p>
              Code and work product belong to the client. All contracts include IP assignment. Contractors retain rights
              to reusable tools and frameworks created independently.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">6. Limitations of Liability</h2>
            <p>
              Ephemer is not liable for contractor non-performance beyond replacement guarantee. We are not responsible
              for project outcomes, salary disputes, or employment classification claims.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">7. Changes to Terms</h2>
            <p>We may update these terms. Continued use of our service indicates acceptance of updated terms.</p>
          </div>

          <div className="border-t border-carbon pt-6 mt-6">
            <p className="text-xs text-zinc-500">Last updated: April 2025</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
