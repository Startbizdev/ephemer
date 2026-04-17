import type { Metadata } from "next";
import { Target, Timer, DollarSign, Layers, RefreshCw, Lock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { RoleLinksSection } from "@/components/blocks/RoleLinksSection";
import { CityLinksSection } from "@/components/blocks/CityLinksSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "For clients — Hire senior engineers fast | Ephemer",
  description:
    "CTOs and VP Engineers at US startups use Ephemer to hire senior contract engineers without recruiter overhead. Seed to Series C. Deploy in days.",
  alternates: { canonical: `${SITE_URL}/for-clients` },
};

const benefits = [
  {
    icon: Timer,
    title: "Speed as a competitive advantage",
    description:
      "Your competitors are moving. Every week your key hire is open is a week of execution lost. Ephemer cuts time-to-deploy from months to days.",
  },
  {
    icon: Target,
    title: "Mission-specific matching",
    description:
      "We do not send you generalists. We match engineers to your specific stack, problem domain, and engineering culture.",
  },
  {
    icon: DollarSign,
    title: "No placement fees",
    description:
      "Ephemer operates on a transparent engagement model. No 20–35% placement fees. No hidden costs. The pricing is predictable from day one.",
  },
  {
    icon: Layers,
    title: "Flexible engagement structures",
    description:
      "Full-time contract, fractional (2–3 days per week), or project-based. Match the engagement model to your actual need.",
  },
  {
    icon: RefreshCw,
    title: "Conversion paths built in",
    description:
      "Every Ephemer engagement includes an optional conversion clause. If the engineer is exceptional, you can bring them full-time with a simple transition.",
  },
  {
    icon: Lock,
    title: "IP protection by default",
    description:
      "Work-for-hire IP assignment is included in every engagement contract. Your code, your IP — no ambiguity.",
  },
];

const useCases = [
  {
    title: "Fill a critical gap fast",
    description:
      "Your lead backend engineer just resigned. Your Series A is closing in 6 weeks and the product needs to ship. Ephemer gets an experienced engineer in place while you run a thoughtful permanent search.",
  },
  {
    title: "Extend your team for a specific sprint",
    description:
      "You need to execute a major infrastructure migration or launch a new product surface. Ephemer deploys the right specialist for the duration — no permanent overhead.",
  },
  {
    title: "Audit and uplift your engineering org",
    description:
      "A senior fractional engineer reviews your architecture, identifies technical debt priorities, and mentors your junior team. High leverage. Predictable cost.",
  },
  {
    title: "Scale up for fundraising",
    description:
      "Investors want to see a capable team. Ephemer can extend your engineering capability during the critical pre-raise window.",
  },
];

const faqs = [
  {
    q: "How do you price engagements?",
    a: "Ephemer charges a monthly engagement fee that covers the engineer's compensation, our matching and coordination service, and full compliance handling. Pricing varies by seniority and time commitment. We provide a clear number before any commitment.",
  },
  {
    q: "What is the minimum commitment?",
    a: "Three months for full-time contract engagements, one month for fractional. We do not do week-by-week arrangements — the engineers in our network are senior professionals, not gig workers.",
  },
  {
    q: "Do engineers sign NDAs?",
    a: "Yes. NDAs and IP assignment agreements are standard in every Ephemer engagement contract. Your code and data are protected.",
  },
  {
    q: "Can I interview multiple engineers?",
    a: "You will speak with 2–4 profiles. We do not run a high-volume cattle call. The profiles you receive are pre-filtered to the point where you are choosing between strong options, not sorting through noise.",
  },
  {
    q: "What if the engineer is not performing?",
    a: "Ephemer provides a two-week replacement guarantee. If the engagement is not working, we replace the engineer at no additional cost and investigate what went wrong in the matching process.",
  },
];

export default function ForClientsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "For clients", url: `${SITE_URL}/for-clients` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Badge variant="indigo" className="mb-6">For clients</Badge>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Senior engineers for US startups that move fast
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          CTOs and VP Engineers at Seed to Series C companies use Ephemer when they
          need senior engineering execution without the time and cost of a full
          recruiting cycle.
        </TextBlock>
      </Section>

      {/* Benefits */}
      <Section className="pt-0">
        <div className="mb-12">
          <Heading as="h2" size="md" className="mb-4">What you get</Heading>
        </div>
        <FeatureGrid features={benefits} columns={3} />
      </Section>

      {/* Use cases */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Use cases</Badge>
          <Heading as="h2" size="md" className="mb-4">When clients use Ephemer</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-carbon border border-carbon rounded-xl overflow-hidden">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-graphite p-8 hover:bg-carbon/40 transition-colors">
              <h3 className="font-tight font-700 text-snow text-lg mb-3">{uc.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <RoleLinksSection variant="editorial" />
      <CityLinksSection variant="editorial" />

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">Client questions</Heading>
        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-carbon py-5 last:border-0">
              <h3 className="font-500 text-snow mb-2 text-sm md:text-base">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Ready to hire senior engineers?"
        subheading="Book a 15-minute call. Tell us what you need. We will tell you honestly whether we can help."
      />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related"
          links={[
            { href: "/how-it-works", label: "How it works" },
            { href: "/hire-remote-engineers", label: "Hire remote engineers" },
            { href: "/hire-senior-backend-engineer-san-francisco", label: "Backend · San Francisco" },
            { href: "/hire-devops-engineer-new-york", label: "DevOps · New York" },
            { href: "/about", label: "About Ephemer" },
          ]}
        />
      </Section>
    </>
  );
}
