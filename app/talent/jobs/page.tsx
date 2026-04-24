import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Open missions — Hire senior contract engineers | Ephemer",
  description:
    "Current opportunities for senior engineers. Backend, frontend, DevOps, ML. Full-time contract or fractional. Direct client relationships.",
  alternates: { canonical: `${SITE_URL}/talent/jobs` },
};

export default function JobsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Talent", url: `${SITE_URL}/talent` },
          { name: "Open missions", url: `${SITE_URL}/talent/jobs` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Open missions
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          Current opportunities from funded startups. Click through to learn more about each mission.
        </TextBlock>
      </Section>

      {/* Missions list */}
      <Section className="pt-0">
        <div className="max-w-4xl">
          <div className="border border-carbon rounded-xl p-8 text-center">
            <p className="text-zinc-400 mb-4">
              Our active missions are managed through our ATS (Ashby / Spott). Each opportunity below links directly to the mission details.
            </p>
            <p className="text-sm text-zinc-500">
              New opportunities posted regularly. Follow us on LinkedIn for updates.
            </p>
          </div>
        </div>
      </Section>

      {/* Placeholder for ATS integration */}
      <Section className="pt-0">
        <div className="border border-carbon rounded-xl p-12 text-center">
          <p className="text-lg text-zinc-300 mb-6">
            Missions are powered by our ATS. Integration coming soon.
          </p>
          <p className="text-sm text-zinc-500">
            In the meantime, reach out to contact@ephemer.co to explore current opportunities.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Interested in a mission?" subheading="Email us or check back soon for the full list of opportunities." />
    </>
  );
}
