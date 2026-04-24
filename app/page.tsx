import type { Metadata } from "next";
import { Zap, Shield, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Hero } from "@/components/blocks/Hero";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { TrustedBySection } from "@/components/blocks/TrustedBySection";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ephemer — Senior engineers, deployed fast",
  description:
    "Ephemer deploys senior engineers into US startups within days. Seed to Series C teams hire vetted contract engineers without recruiter overhead or bloated timelines.",
  alternates: { canonical: "https://www.ephemer.co" },
};

const features = [
  {
    icon: Zap,
    title: "Deploy in days, not months",
    description:
      "Traditional recruiting drags 3–6 months for senior roles. Ephemer pre-vets every engineer so your team can move on week one.",
  },
  {
    icon: Shield,
    title: "Senior-only network",
    description:
      "Every engineer in the Ephemer network has a minimum of 6 years experience and has passed a rigorous technical and execution bar.",
  },
  {
    icon: Users,
    title: "Built for startup velocity",
    description:
      "Engineers who ship. Not engineers who spectate. Ephemer matches you with operators who thrive in fast, high-ownership environments.",
  },
  {
    icon: Clock,
    title: "Flexible contract structures",
    description:
      "Full-time contract, part-time fractional, or project-based. You get the precision you need without the overhead of a permanent hire.",
  },
  {
    icon: CheckCircle,
    title: "No recruiter overhead",
    description:
      "No agencies. No 30% placement fees. No bloated intermediary layers. You work directly with Ephemer and your engineer from day one.",
  },
  {
    icon: ArrowRight,
    title: "Ongoing talent pipeline",
    description:
      "As your team scales, Ephemer scales with you. Build a repeatable hiring motion that does not restart from zero every quarter.",
  },
];

const homeFaqs = [
  {
    q: "What types of startups does Ephemer work with?",
    a: "Ephemer works with US startups from Seed through Series C. Our clients are typically engineering-led companies that move fast and need senior execution, not junior headcount.",
  },
  {
    q: "How is Ephemer different from a staffing agency?",
    a: "Agencies cast wide nets and extract 20–35% placement fees. Ephemer operates as a precision deployment partner — we maintain an active network of pre-vetted senior engineers and match them to the specific problem you need to solve.",
  },
  {
    q: "How long does it take to get an engineer in place?",
    a: "Most clients have a first conversation with matched engineers within 72 hours of briefing. Typical time-to-deploy is 5–10 business days depending on role specificity.",
  },
  {
    q: "Do you handle compliance and payments?",
    a: "Yes. Ephemer handles the full engagement layer — contracts, compliance, payments, and tax documentation — so your team stays focused on product, not admin.",
  },
  {
    q: "What roles does Ephemer cover?",
    a: "Backend, frontend, fullstack, DevOps, ML, platform, data engineering, security, mobile, and staff-level roles. If you need it in a production codebase, we cover it.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      {/* Hero */}
      <Hero
        eyebrow="Senior engineers · Contract and fractional"
        heading={
          <>
            The{" "}
            <em className="not-italic text-indigo-400">ephemeral</em>{" "}
            team your startup needed yesterday
          </>
        }
        subheading="Ephemer deploys vetted senior engineers into US startups within days. No recruiters. No agency fees. No bloat. Just execution."
        metrics={[
          { value: "< 7 days", label: "Average time to deploy" },
          { value: "6+ yrs", label: "Minimum experience" },
          { value: "Seed to C", label: "Stage range" },
          { value: "0%", label: "Recruiter markup" },
        ]}
      />

      {/* Features */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Why Ephemer</Badge>
          <Heading as="h2" size="lg" className="mb-4 max-w-xl">
            Designed for startups that cannot afford to wait
          </Heading>
          <TextBlock className="max-w-2xl">
            Every feature of Ephemer exists to eliminate friction between your hiring
            decision and your engineer writing production code.
          </TextBlock>
        </div>
        <FeatureGrid features={features} columns={3} />
      </Section>

      {/* Trusted by */}
      <TrustedBySection />

      {/* How it works teaser */}
      <Section className="pt-0">
        <Container className="px-0">
          <div className="border border-carbon rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="indigo" className="mb-4">Process</Badge>
                <Heading as="h2" size="md" className="mb-4">
                  From brief to deployed in five steps
                </Heading>
                <TextBlock className="mb-6">
                  Ephemer&apos;s deployment process is designed for speed without
                  sacrificing quality. Brief us today, interview by Friday.
                </TextBlock>
                <div className="flex flex-col gap-3">
                  {[
                    "You brief us on the role and context",
                    "We surface matched profiles within 48h",
                    "You interview and select",
                    "Contracts signed, onboarding begins",
                    "Engineer is shipping code",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-indigo-900 bg-indigo-900/20 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-indigo-400">{i + 1}</span>
                      </span>
                      <span className="text-sm text-zinc-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-l border-carbon pl-12 hidden md:block">
                <p className="font-tight text-5xl font-800 text-snow leading-none mb-2">72h</p>
                <p className="text-sm text-zinc-400 mb-8">Median time to first engineer profile</p>
                <p className="font-tight text-5xl font-800 text-snow leading-none mb-2">5–10</p>
                <p className="text-sm text-zinc-400 mb-8">Business days to deployment</p>
                <p className="font-tight text-5xl font-800 text-snow leading-none mb-2">0</p>
                <p className="text-sm text-zinc-400">Intermediary layers between you and your engineer</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-10">
          <Heading as="h2" size="md" className="mb-3">Common questions</Heading>
          <TextBlock muted>Straight answers to the questions every CTO asks first.</TextBlock>
        </div>
        <div className="max-w-3xl">
          {homeFaqs.map((faq) => (
            <div key={faq.q} className="border-b border-carbon py-5 last:border-0">
              <h3 className="font-500 text-snow mb-2 text-sm md:text-base">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
