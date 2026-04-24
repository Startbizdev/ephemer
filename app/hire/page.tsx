import type { Metadata } from "next";
import { Zap, Shield, Users, Clock, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Hero } from "@/components/blocks/Hero";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RoleLinksSection } from "@/components/blocks/RoleLinksSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hire senior engineers — Contract and fractional | Ephemer",
  description:
    "Deploy vetted senior engineers into your startup in days. Backend, frontend, DevOps, ML, and product engineers. No agency fees. Transparent rates. Remote-first.",
  alternates: { canonical: `${SITE_URL}/hire` },
  openGraph: {
    title: "Hire senior engineers fast — Ephemer",
    description: "Deploy vetted senior engineers in days, not months. Contract and fractional.",
    url: `${SITE_URL}/hire`,
  },
};

const benefits = [
  {
    icon: Zap,
    title: "Deploy in days, not months",
    description:
      "Traditional recruiting takes 3–6 months for senior roles. Ephemer surfaces matched profiles within 48 hours so you ship faster.",
  },
  {
    icon: Shield,
    title: "Senior-only vetting",
    description:
      "6+ years minimum. Every engineer passes technical assessment, reference checks, and mission-fit interview before your first conversation.",
  },
  {
    icon: TrendingUp,
    title: "Transparent engagement terms",
    description:
      "You see rates and terms before you commit. No 20–35% placement fees. No hidden costs. What you see is what you pay.",
  },
  {
    icon: Users,
    title: "Built for startup velocity",
    description:
      "Engineers who ship. We match operators who thrive in ambiguity, own outcomes, and move fast—not committee members.",
  },
  {
    icon: Clock,
    title: "Flexible structures",
    description:
      "Full-time contract, fractional (2–3 days/week), or project-based. Match the engagement to your actual need, not a permanent hire mold.",
  },
  {
    icon: CheckCircle,
    title: "No recruiter overhead",
    description:
      "Direct access to your engineer from day one. No agencies, no intermediaries, no call forwarding. You control the relationship.",
  },
];

const faqs = [
  {
    q: "How quickly can I hire through Ephemer?",
    a: "Most teams interview matched engineers within 72 hours of briefing. Time-to-deployment typically runs 5–10 business days once you select a candidate, depending on contract negotiation and onboarding.",
  },
  {
    q: "What seniority level are your engineers?",
    a: "All engineers in the Ephemer network have a minimum of 6 years of professional experience and have passed rigorous technical and execution assessments. You get senior-level judgment, not junior talent dressed up.",
  },
  {
    q: "Can I convert a contract engineer to permanent?",
    a: "Yes. We offer contractor-to-hire conversion at 20%, allowing you to trial the engineer for 2–3 months before committing to full employment. Zero risk, full optionality.",
  },
  {
    q: "What if the engineer is not a good fit?",
    a: "We stand behind our matches. If seniority, technical skills, or execution approach don't align with what we promised, we surface replacement profiles at no additional cost within 48 hours.",
  },
  {
    q: "Do you handle compliance and payments?",
    a: "Yes. Ephemer manages contracts, tax documentation, IP assignment, payment processing, and compliance—so your team stays focused on product, not admin.",
  },
  {
    q: "What if my team is remote or distributed?",
    a: "Ephemer is remote-first by design. All engineers are comfortable with async work, clear written specs, and distributed team dynamics. If you need timezone overlap or occasional in-person meetings, we filter for that upfront.",
  },
];

export default function HireClientsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire", url: `${SITE_URL}/hire` },
        ])}
      />
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Hero
        eyebrow="For startup CTOs and VP Engineers"
        heading={
          <>
            Senior engineers shipped to your codebase in days{" "}
            <em className="not-italic text-indigo-400">—not months</em>
          </>
        }
        subheading="Ephemer deploys pre-vetted contract and fractional engineers into US startups. No agency fees. No bloat. Just execution."
        metrics={[
          { value: "< 7 days", label: "Average deployment" },
          { value: "6+ yrs", label: "Minimum seniority" },
          { value: "100K+", label: "Engineer network" },
          { value: "0%", label: "Markup fees" },
        ]}
      />

      {/* Why Ephemer */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Why Ephemer</Badge>
          <Heading as="h2" size="lg" className="mb-4 max-w-xl">
            Precision staffing for founders who cannot afford to wait
          </Heading>
          <TextBlock className="max-w-2xl">
            Every feature of Ephemer exists to eliminate friction between your hiring decision and
            your engineer writing production code. You get speed without sacrifice.
          </TextBlock>
        </div>
        <FeatureGrid features={benefits} columns={3} />
      </Section>

      {/* Process tease */}
      <Section className="pt-0">
        <Container className="px-0">
          <div className="border border-carbon rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="indigo" className="mb-4">How it works</Badge>
                <Heading as="h2" size="md" className="mb-4">
                  From brief to engineer in five steps
                </Heading>
                <TextBlock className="mb-6">
                  Our process is designed for speed without sacrificing quality. One conversation, one
                  technical screen, one reference check — then you hire.
                </TextBlock>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    "Brief us on your stack and mission",
                    "We surface 3–5 matched profiles within 48h",
                    "You run a focused technical interview",
                    "Contracts and compliance handled",
                    "Engineer starts shipping code",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-indigo-900 bg-indigo-900/20 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-indigo-400">{i + 1}</span>
                      </span>
                      <span className="text-sm text-zinc-300">{step}</span>
                    </div>
                  ))}
                </div>
                <Button href="/hire/how-it-works" variant="secondary">
                  Learn the process
                  <ArrowRight size={16} />
                </Button>
              </div>
              <div className="border-l border-carbon pl-12 hidden md:block">
                <p className="font-tight text-5xl font-800 text-snow leading-none mb-2">72h</p>
                <p className="text-sm text-zinc-400 mb-8">Profile match response</p>
                <p className="font-tight text-5xl font-800 text-snow leading-none mb-2">1</p>
                <p className="text-sm text-zinc-400 mb-8">Technical screen round</p>
                <p className="font-tight text-5xl font-800 text-snow leading-none mb-2">5–10</p>
                <p className="text-sm text-zinc-400">Business days to deploy</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* By role */}
      <Section className="pt-0">
        <RoleLinksSection variant="home" withSection={false} />
      </Section>

      {/* Pricing tease */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="indigo" className="mb-4">Transparent pricing</Badge>
            <Heading as="h2" size="md" className="mb-4">
              Rates start at $65/h. No surprises.
            </Heading>
            <TextBlock className="mb-6">
              You see engineer rates and Ephemer's terms before you commit. No 20–35% agency markup.
              No tiered pricing games. Contractor-to-hire conversion at 20%.
            </TextBlock>
            <Button href="/hire/pricing">
              View pricing
              <ArrowRight size={16} />
            </Button>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Full-time contract</p>
                <p className="text-3xl font-tight font-800 text-snow">$65–120/h</p>
                <p className="text-sm text-zinc-400 mt-2">40h/week · 3 month minimum</p>
              </div>
              <div className="border-t border-carbon pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Fractional</p>
                <p className="text-3xl font-tight font-800 text-snow">$75–140/h</p>
                <p className="text-sm text-zinc-400 mt-2">2–3 days/week · 1 month minimum</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case studies tease */}
      <Section>
        <div className="mb-10">
          <Badge variant="indigo" className="mb-4">Proof</Badge>
          <Heading as="h2" size="md" className="mb-3">
            Companies that shipped faster with Ephemer
          </Heading>
          <TextBlock muted>Real missions. Real outcomes. Real client logos.</TextBlock>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              client: "FinTech Series B",
              outcome: "Backend team scaled from 2 → 6 engineers in 3 months",
              detail: "Deployed 2 senior backend engineers + 1 platform engineer to handle 10x transaction volume before investor close.",
            },
            {
              client: "Blockchain infrastructure",
              outcome: "Shipped core consensus layer 8 weeks early",
              detail: "Contracted 1 senior Rust engineer + 1 systems engineer to accelerate infrastructure work ahead of mainnet launch.",
            },
            {
              client: "B2B SaaS Series A",
              outcome: "Unblocked product roadmap without permanent headcount",
              detail: "Fractional ML engineer (2 days/week) built recommendation engine. Converted to full-time hire after 4-month trial.",
            },
          ].map((cs, i) => (
            <div key={i} className="border border-carbon rounded-xl p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">{cs.client}</p>
              <p className="font-600 text-snow mb-3">{cs.outcome}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{cs.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/hire/case-studies" variant="secondary">
            Read more case studies
            <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-10">
          <Heading as="h2" size="md" className="mb-3">Hiring questions</Heading>
          <TextBlock muted>Straight answers to what every CTO asks first.</TextBlock>
        </div>
        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-carbon py-5 last:border-0">
              <h3 className="font-500 text-snow mb-2 text-sm md:text-base">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Ready to hire?"
        subheading="Brief us on your team, stack, and timeline. We return matched profiles within 48 hours."
      />
    </>
  );
}
