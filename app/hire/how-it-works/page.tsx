import type { Metadata } from "next";
import { FileText, Users, Code, CheckSquare, Repeat, Clock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/blocks/Timeline";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How it works — Hire senior engineers fast | Ephemer",
  description:
    "Brief → Matched profiles within 48h → Focused interview → Contracts handled → Engineer shipping. 5–10 business days from brief to deploy.",
  alternates: { canonical: `${SITE_URL}/hire/how-it-works` },
};

const steps = [
  {
    step: "01",
    title: "Brief us today",
    description:
      "Tell us about your stack, mission, and timeline. A 30-minute conversation to understand what actually blocks shipping. Not a form—a real conversation with someone who has worked in startups.",
    details: [
      "Technical stack and production constraints",
      "Team topology and engineering culture",
      "2–3 sprint outcomes you need unblocked",
      "Timeline and engagement preference (full-time, fractional, project)",
    ],
  },
  {
    step: "02",
    title: "Profiles within 48h",
    description:
      "We surface 2 to 3 pre-vetted senior engineers. Every profile includes technical depth, relevant project history, and our honest assessment of fit for your problem.",
    details: [
      "Technical summary and skill alignment",
      "Production experience in your stack",
      "Execution evidence (shipped systems, led migrations, owned incidents)",
      "Reference check summaries and vetting assessment",
    ],
  },
  {
    step: "03",
    title: "You decide",
    description:
      "Run one focused technical interview with your top choice. One conversation to validate judgment. No multi-round ceremonies or exhausting interview loops.",
    details: [
      "System design or architecture discussion",
      "Production decision-making under ambiguity",
      "Collaboration and communication style",
      "Culture fit and working preferences",
    ],
  },
  {
    step: "04",
    title: "Ephemer handles compliance",
    description:
      "Contracts, IP assignment, and payments are sorted. We manage the full engagement layer—contract terms, compliance, tax documentation—so your team focuses on onboarding, not admin.",
    details: [
      "Engagement agreement finalized",
      "Tax documentation and compliance (Deel integration)",
      "Payment setup and invoicing",
      "IP assignment and non-disclosure terms",
    ],
  },
  {
    step: "05",
    title: "Shipping week one",
    description:
      "Your engineer integrates and starts writing production code. Onboarding is about your product and customers—not whether the engineer can operate at senior level.",
    details: [
      "Access provisioning (Git, Slack, cloud, VPN)",
      "Architecture walkthroughs and context setting",
      "First sprint planning and kickoff",
      "Direct reporting relationship with your team",
    ],
  },
];

const principles = [
  {
    icon: Clock,
    title: "Speed without sacrifice",
    description:
      "Fast matching does not mean low bar. Every engineer passes technical assessment and reference validation before your first conversation.",
  },
  {
    icon: Users,
    title: "Mission fit first",
    description:
      "We match to your specific problem—not generic job titles. System design, stack depth, and startup execution are what matter.",
  },
  {
    icon: Code,
    title: "Production judgment",
    description:
      "We assess decision-making under ambiguity, incident response, and code review clarity. Not leetcode performance.",
  },
  {
    icon: FileText,
    title: "Transparent process",
    description:
      "You see profiles, rates, and engagement terms upfront. No hidden costs, no surprise markups, no back-channel negotiations.",
  },
  {
    icon: CheckSquare,
    title: "Outcome-focused",
    description:
      "The job is done when your engineer is unblocking your roadmap—not when paperwork is signed.",
  },
  {
    icon: Repeat,
    title: "Repeatable motion",
    description:
      "As your team scales, Ephemer scales with you. Build a repeatable hiring motion that does not restart from zero every quarter.",
  },
];

const faqs = [
  {
    q: "Why does Ephemer guarantee 48-hour matching?",
    a: "We maintain a pre-vetted network of 100K+ engineers, tagged by skill, seniority, and region. When you brief us, we are not starting a search—we are filtering an active database of known profiles. The 48 hours accounts for verification calls and fit assessment, not sourcing from scratch.",
  },
  {
    q: "What if none of the initial profiles feel right?",
    a: "We refine the brief and surface new profiles within 24 hours. If seniority, technical approach, or working style do not align, we adjust and try again at no additional cost. The goal is a match you are confident hiring.",
  },
  {
    q: "How involved is the vetting process?",
    a: "Three layers: (1) CoderByte technical assessment on your stack, (2) reference checks (minimum 2 recent managers/peers), (3) mission-fit conversation with Ephemer. You see the summaries before the first call.",
  },
  {
    q: "Can I trial the engineer before signing a contract?",
    a: "Yes. Contractor-to-hire conversion allows you to trial at $X rate for 2–3 months, then convert to employment at no additional placement fee. Zero risk, full optionality.",
  },
  {
    q: "What if the engineer underperforms?",
    a: "If seniority, technical skills, or execution do not match what we promised, we surface replacement profiles at no cost within 48 hours. You do not pay twice.",
  },
  {
    q: "What happens if I need to end the engagement early?",
    a: "Most contracts have a 2-week notice clause for early termination. If the engineer is not working out within the first 30 days, we replace at no additional cost.",
  },
];

export default function HireProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire", url: `${SITE_URL}/hire` },
          { name: "How it works", url: `${SITE_URL}/hire/how-it-works` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          How Ephemer deploys engineers in 5–10 business days
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Five steps from your first conversation to an engineer shipping code. No bloat. No
          theater. Just execution.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/hire" variant="secondary">
            Back to hire main
          </Button>
          <Button href="/contact#book">Book a call</Button>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="pt-0">
        <Container className="px-0">
          <Timeline steps={steps} />
        </Container>
      </Section>

      {/* Design principles */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Our principles</Badge>
          <Heading as="h2" size="lg" className="mb-4 max-w-xl">
            How we think about hiring
          </Heading>
          <TextBlock className="max-w-2xl">
            Every decision in our process reflects a single goal: get the right senior engineer
            into your codebase as fast as possible without sacrificing match quality.
          </TextBlock>
        </div>
        <FeatureGrid features={principles} columns={3} />
      </Section>

      {/* Vetting detail */}
      <Section>
        <Container className="px-0">
          <div className="border border-carbon rounded-2xl p-8 md:p-12">
            <Badge variant="indigo" className="mb-4">Quality gates</Badge>
            <Heading as="h2" size="md" className="mb-6">
              Three-layer vetting protocol
            </Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm font-600 text-indigo-400 mb-3">01. Technical assessment</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  CoderByte challenge (60–90 min) on your stack and domain. Evaluated on problem-solving
                  approach, code quality, and system thinking—not speed. Minimum score threshold enforced per
                  profile type.
                </p>
              </div>
              <div>
                <p className="text-sm font-600 text-indigo-400 mb-3">02. Reference validation</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Minimum 2 recent managers/peers. We verify seniority signal, production judgment, incident
                  response, and team collaboration. Career track verification to confirm claimed experience.
                </p>
              </div>
              <div>
                <p className="text-sm font-600 text-indigo-400 mb-3">03. Mission fit interview</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Conversation with Ephemer recruiter on your stack, team dynamics, and working preferences.
                  Final signal that the engineer is aligned with your engineering culture and ready to ramp.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline metrics */}
      <Section className="pt-0">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { label: "Hours to first profile", value: "24–48" },
            { label: "Reference checks", value: "2 minimum" },
            { label: "Days to deploy", value: "5–10" },
          ].map((metric) => (
            <div key={metric.label} className="border border-carbon rounded-xl p-6 text-center">
              <p className="text-4xl font-tight font-800 text-indigo-400 mb-2">{metric.value}</p>
              <p className="text-sm text-zinc-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-10">
          <Heading as="h2" size="md" className="mb-3">
            Process questions
          </Heading>
          <TextBlock muted>How Ephemer actually works—honest answers.</TextBlock>
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
      <CTASection heading="Ready to brief us?" subheading="Start the process. First profiles within 48 hours." />
    </>
  );
}
