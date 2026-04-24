import type { Metadata } from "next";
import { FileText, Users, Code, CheckSquare, Repeat } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/blocks/Timeline";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { RoleLinksSection } from "@/components/blocks/RoleLinksSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How it works — Ephemer",
  description:
    "Ephemer's deployment process: brief, match, interview, contract, ship. Senior engineers in your codebase within 5–10 business days.",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
};

const steps = [
  {
    step: "01",
    title: "Brief us on your mission",
    description:
      "A 30-minute call to understand your stack, team, velocity, and what you actually need to unblock. Not a form — a real conversation with someone who has worked in startups.",
  },
  {
    step: "02",
    title: "We surface matched profiles",
    description:
      "Within 48 hours, Ephemer sends you 2–4 pre-vetted engineer profiles. Every profile includes a technical summary, relevant project history, and our honest assessment of fit.",
  },
  {
    step: "03",
    title: "You run a focused interview",
    description:
      "One technical session. One conversation about ownership and velocity. No multi-round ceremonies. You decide based on signal, not process.",
  },
  {
    step: "04",
    title: "Contracts and compliance handled",
    description:
      "Ephemer manages the full engagement layer — contract terms, compliance, payments, and IP assignment. Your legal team reviews once. That's it.",
  },
  {
    step: "05",
    title: "Engineer is in your codebase",
    description:
      "Your engineer starts with context, not confusion. We support the first two weeks to ensure alignment on priorities, access, and expectations are locked in before we step back.",
  },
];

const principles = [
  {
    icon: FileText,
    title: "Precision over volume",
    description:
      "We do not send you 20 profiles to filter. We send you 2–4 matched profiles that fit your actual requirements.",
  },
  {
    icon: Users,
    title: "Direct relationships",
    description:
      "No account managers, no handoffs. The person you brief is the person finding your engineer.",
  },
  {
    icon: Code,
    title: "Technical vetting first",
    description:
      "Every engineer passes a technical assessment before entering the Ephemer network. We do not send you untested profiles.",
  },
  {
    icon: CheckSquare,
    title: "Execution bar, not just skills",
    description:
      "We assess how engineers have performed under pressure — shipping in ambiguity, owning outcomes, and operating without hand-holding.",
  },
  {
    icon: Repeat,
    title: "Designed for scale",
    description:
      "Once you have deployed your first Ephemer engineer, adding more is fast. Your context is stored, your bar is calibrated.",
  },
];

const faqs = [
  {
    q: "What happens if the match is not right?",
    a: "We replace the engagement at no additional cost if the fit does not work out within the first two weeks. This is rare — our vetting process is designed to surface fit issues before deployment, not after.",
  },
  {
    q: "How do you vet engineers?",
    a: "Each engineer completes a technical assessment relevant to their domain, a structured interview covering system design and execution track record, and a reference check with a previous startup or engineering lead.",
  },
  {
    q: "Can I extend or transition an engineer to full-time?",
    a: "Yes. Ephemer engagements are structured to support conversion to permanent employment. Transition terms are included in the standard contract.",
  },
  {
    q: "What is the minimum engagement length?",
    a: "Three months for contract roles, one month for fractional. Project-based engagements are scoped individually.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "How it works", url: `${SITE_URL}/how-it-works` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Badge variant="indigo" className="mb-6">Process</Badge>
        <Heading as="h1" size="xl" className="mb-6 max-w-2xl">
          Brief to deployed in five steps
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          Ephemer&apos;s process is designed to eliminate the friction, ceremony, and
          calendar waste of traditional hiring — without sacrificing the quality bar.
        </TextBlock>
      </Section>

      {/* Timeline */}
      <Section className="pt-0">
        <div className="max-w-2xl">
          <Timeline steps={steps} />
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Principles</Badge>
          <Heading as="h2" size="md" className="mb-4">
            How we operate
          </Heading>
          <TextBlock className="max-w-2xl">
            These are the principles that govern every engagement — not marketing copy.
          </TextBlock>
        </div>
        <FeatureGrid features={principles} columns={3} />
      </Section>

      <RoleLinksSection variant="editorial" />

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">Process questions</Heading>
        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-carbon py-5 last:border-0">
              <h3 className="font-500 text-snow mb-2 text-sm md:text-base">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related"
          links={[
            { href: "/for-clients", label: "For clients" },
            { href: "/for-talent", label: "For talent" },
            { href: "/hire-remote-engineers", label: "Hire remote engineers" },
            { href: "/contact", label: "Book a call" },
          ]}
        />
      </Section>
    </>
  );
}
