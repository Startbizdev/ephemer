import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/blocks/CTASection";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About — Ephemer",
  description:
    "Ephemer was built by engineers who experienced the cost of broken hiring firsthand. We built a better model for US startups that need senior talent fast.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
  {
    label: "Precision",
    description:
      "We match carefully. We do not send you a stack of profiles and hope something sticks. Every match is a deliberate decision.",
  },
  {
    label: "Honesty",
    description:
      "If we cannot find the right engineer for your role, we will tell you. We do not fill a brief with the wrong person to close a deal.",
  },
  {
    label: "Speed",
    description:
      "Hiring cycles that take 6 months are a structural failure. Ephemer was built to operate at startup speed — without dropping the quality bar.",
  },
  {
    label: "Ownership",
    description:
      "We take accountability for every engagement. If something is not working, we fix it — not manage it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Badge variant="indigo" className="mb-6">About</Badge>
        <Heading as="h1" size="xl" className="mb-6 max-w-2xl">
          Built by engineers who ran out of patience with recruiting
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          Ephemer exists because the hiring system for senior engineers is broken —
          for startups and for engineers alike.
        </TextBlock>
      </Section>

      {/* Origin */}
      <Section className="pt-0">
        <div className="max-w-3xl flex flex-col gap-6">
          <TextBlock>
            Startups at Seed and Series A move in weeks, not months. But recruiting a
            senior engineer through traditional channels takes 4–6 months of calendar
            waste, agency fees that eat into runway, and no guarantee the hire will
            perform. The incentives are misaligned at every layer.
          </TextBlock>
          <TextBlock>
            Ephemer was designed around one belief: senior engineers should be matched
            to the right problems quickly, and startups should be able to build without
            being held hostage to broken recruiting infrastructure.
          </TextBlock>
          <TextBlock>
            We built a model that is transparent about costs, rigorous about quality,
            and fast by design — not by accident.
          </TextBlock>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Values</Badge>
          <Heading as="h2" size="md">How we operate</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {values.map((v) => (
            <div key={v.label}>
              <p className="font-tight font-700 text-snow text-lg mb-2">{v.label}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance mention */}
      <Section>
        <div className="border border-carbon rounded-2xl p-8 md:p-12 max-w-3xl">
          <Badge variant="indigo" className="mb-4">Compliance and payments</Badge>
          <Heading as="h2" size="sm" className="mb-4">
            We handle the engagement infrastructure
          </Heading>
          <TextBlock className="mb-4">
            Contracts, IP assignment, payment processing, and compliance are all
            managed by Ephemer. For international engineers working with US clients,
            we leverage industry-standard global payroll infrastructure to ensure
            every engagement is compliant and payment is reliable.
          </TextBlock>
          <TextBlock muted>
            Ephemer uses Deel for global contractor payment processing.
          </TextBlock>
        </div>
      </Section>

      <CTASection
        heading="Work with a team that takes precision seriously"
        subheading="Book a 15-minute call. No formalities. Just a direct conversation about your hiring context."
      />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related"
          links={[
            { href: "/how-it-works", label: "How it works" },
            { href: "/for-clients", label: "For clients" },
            { href: "/for-talent", label: "For talent" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </Section>
    </>
  );
}
