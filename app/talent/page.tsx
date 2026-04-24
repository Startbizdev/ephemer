import type { Metadata } from "next";
import { ArrowRight, Zap, Shield, Briefcase } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Join Ephemer — Contract opportunities for senior engineers | Ephemer",
  description:
    "Senior engineers: join the Ephemer network. Contract work with high-growth startups. Flexible engagement. Direct client relationships. $65–150/h.",
  alternates: { canonical: `${SITE_URL}/talent` },
};

const benefits = [
  {
    icon: Zap,
    title: "Flexible work on your terms",
    description: "Full-time contract, fractional (2–3 days/week), or project-based. You choose the structure.",
  },
  {
    icon: Briefcase,
    title: "High-quality missions",
    description:
      "We curate startups and missions. No low-ball rate negotiations. No time-and-materials uncertainty.",
  },
  {
    icon: Shield,
    title: "Direct client relationships",
    description: "No recruiter middlemen. You work directly with the CTO or VP Engineering. Full transparency.",
  },
];

const faqs = [
  {
    q: "Who is Ephemer looking for?",
    a: "Senior engineers with 6+ years production experience. Backend, frontend, DevOps, ML, data, product engineering. Remote-friendly, US time zone overlap preferred but not required.",
  },
  {
    q: "What rates do you offer?",
    a: "Rates vary by seniority and specialization: $65–75/h junior-senior boundary, $75–120/h senior, $120–150/h staff/specialist. All-inclusive—no hidden platform fees.",
  },
  {
    q: "How do missions work?",
    a: "Brief from the startup → you accept/decline → contract signed → you start. Typical engagement is 3–6 months, but projects range from 4 weeks to 12 months.",
  },
  {
    q: "What happens after a mission ends?",
    a: "You return to availability. We connect you with new missions. Or convert to permanent hire with the startup (happens ~30% of the time).",
  },
];

export default function TalentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Talent", url: `${SITE_URL}/talent` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Badge variant="indigo" className="mb-6">For senior engineers</Badge>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Join the Ephemer network
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Senior contract opportunities with high-growth startups. Flexible work. Direct client
          relationships. Transparent rates.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/talent/jobs" size="lg">
            View open missions
            <ArrowRight size={16} />
          </Button>
          <Button href="/contact#book" variant="secondary" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="pt-0">
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Why join Ephemer</Badge>
          <Heading as="h2" size="lg" className="mb-4 max-w-xl">
            Contract work designed for senior engineers
          </Heading>
        </div>
        <FeatureGrid features={benefits} columns={3} />
      </Section>

      {/* How it works */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">How the process works</Heading>
        <div className="max-w-3xl">
          {[
            {
              step: "01",
              title: "Profile review",
              description:
                "Submit your background, specialization, and rate expectations. We review for seniority and fit within 48 hours.",
            },
            {
              step: "02",
              title: "Mission brief",
              description:
                "We send you curated opportunities matching your skills and interests. Full context on the startup, problem, timeline, and rate.",
            },
            {
              step: "03",
              title: "You decide",
              description: "Accept a mission or pass. No pressure. No time-sensitive acceptance deadlines.",
            },
            {
              step: "04",
              title: "Contract and start",
              description:
                "Contract terms finalized. Tax docs handled. You start directly with the startup. Ephemer stays out of the way.",
            },
          ].map((item) => (
            <div key={item.step} className="mb-8 pb-8 border-b border-carbon last:border-0">
              <div className="flex items-start gap-4">
                <span className="text-sm font-mono font-bold text-indigo-400">{item.step}</span>
                <div className="flex-1">
                  <h3 className="font-600 text-snow mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Vetting process */}
      <Section>
        <div className="border border-carbon rounded-2xl p-8 md:p-12">
          <Badge variant="indigo" className="mb-6">Quality standard</Badge>
          <Heading as="h2" size="md" className="mb-6">
            How we vet the startups you work with
          </Heading>
          <p className="text-sm text-zinc-300 mb-8 leading-relaxed">
            Just like we vet engineers for startups, we vet startups for engineers. We work with
            funded teams (Seed through Series C), mission-driven founders, and real product problems.
            No flaky early-stage chaos. No penny-pinching negotiation at the last minute.
          </p>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "Founders with track record or credible investors",
              "Funded runway (minimum 12 months)",
              "Clear problem and product direction",
              "CTO or VP Engineering you'll work with directly",
              "Realistic timeline and scope expectations",
              "Transparent about compensation and equity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                <span className="text-sm text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">Talent questions</Heading>
        <div className="max-w-3xl space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-600 text-snow mb-2">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Ready to explore opportunities?" subheading="View open missions or submit your profile to join the network." />
    </>
  );
}
