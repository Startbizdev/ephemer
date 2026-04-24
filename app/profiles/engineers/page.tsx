import type { Metadata } from "next";
import { ArrowRight, Code, GitBranch, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hire senior software engineers — Backend, frontend, fullstack | Ephemer",
  description:
    "Deploy senior backend, frontend, or fullstack engineers in days. Ephemer matches your stack with proven production experience.",
  alternates: { canonical: `${SITE_URL}/profiles/engineers` },
};

const specializations = [
  {
    title: "Backend Engineers",
    description: "APIs, microservices, databases, system design",
    skills: ["Python", "Go", "Node/TypeScript", "Rust", "Java", "PostgreSQL/MongoDB"],
  },
  {
    title: "Frontend Engineers",
    description: "React, Vue, performance, design systems",
    skills: ["React", "TypeScript", "Next.js", "Vue", "CSS", "Performance"],
  },
  {
    title: "Fullstack Engineers",
    description: "End-to-end ownership, feature shipping",
    skills: ["Full-stack depth", "DevOps basics", "Databases", "Frontend + API"],
  },
  {
    title: "Mobile Engineers",
    description: "iOS/Android native or React Native",
    skills: ["Swift", "Kotlin", "React Native", "App design patterns"],
  },
];

const whatTheyDo = [
  "Ship features end-to-end: API design through frontend UI through deployment",
  "Make architectural decisions under ambiguity without 6 layers of approval",
  "Debug production issues: stack traces, logs, incident response",
  "Review code for both correctness and design—raise standards",
  "Mentor 1–2 junior engineers without management overhead",
];

const hiringSignals = [
  "Production experience at 5+ companies or 6+ years at 1-2 scale-ups",
  "Can explain architectural tradeoffs (SQL vs. NoSQL, monolith vs. microservices, sync vs. async)",
  "Has debugged real incidents and shipped fixes under time pressure",
  "Comfortable with new stacks—can learn your tooling in 2 weeks",
  "Collaborative code review style; improves code without ego",
];

const commonMistakes = [
  "Asking 'How many LeetCode problems can you solve?' instead of 'Walk me through a system you shipped.'",
  "Expecting 100% stack match. A senior engineer can learn your stack in weeks; cultural fit matters more.",
  "Multi-round interview loops (3–5 rounds). At senior level, one strong technical signal + references suffice.",
  "Unclear about the 90-day outcome. Engineers perform better when they know what 'done' looks like.",
];

const faqs = [
  {
    q: "What's the difference between a senior and staff engineer?",
    a: "Senior: owns complete features, makes technical decisions, mentors 1–2 others. Staff: shapes architecture across teams, influencer role, 15+ years typical. Both are 'senior-only' for Ephemer purposes.",
  },
  {
    q: "Can I hire backend + frontend to ship faster?",
    a: "Absolutely. Many teams deploy a backend engineer + frontend engineer + fullstack generalist for parallel feature work. We can coordinate matching to align complementary skills.",
  },
  {
    q: "How do I know if the engineer can learn my tech stack?",
    a: "Ask about their most recent 3 stack transitions. If they've gone from Rails to Go or React to Vue, they can learn. If they've used the same stack for 10 years, learning curve is longer.",
  },
  {
    q: "What about remote collaboration?",
    a: "Ephemer engineers are remote-first. They are used to async code review, written specs, and distributed standups. If you need in-person time, we clarify timezone overlap upfront.",
  },
];

export default function SoftwareEngineersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Profiles", url: `${SITE_URL}/profiles` },
          { name: "Software Engineers", url: `${SITE_URL}/profiles/engineers` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="indigo">Core discipline</Badge>
          <Badge variant="default">6+ years minimum</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire senior software engineers
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Backend, frontend, fullstack, or mobile. Engineers who ship features end-to-end without
          needing five layers of review.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/contact#book" size="lg">
            Hire now
            <ArrowRight size={16} />
          </Button>
          <Button href="/hire" variant="secondary" size="lg">
            Back to hire
          </Button>
        </div>
      </Section>

      {/* Specializations */}
      <Section className="pt-0">
        <Heading as="h2" size="md" className="mb-8">Specializations we staff</Heading>
        <div className="grid md:grid-cols-2 gap-6">
          {specializations.map((spec) => (
            <div key={spec.title} className="border border-carbon rounded-xl p-6">
              <p className="font-600 text-snow mb-2">{spec.title}</p>
              <p className="text-sm text-zinc-400 mb-4">{spec.description}</p>
              <div className="flex flex-wrap gap-2">
                {spec.skills.map((skill) => (
                  <span key={skill} className="inline-block px-2 py-1 text-xs bg-carbon rounded text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What they do */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Badge variant="indigo" className="mb-4">What you get</Badge>
            <Heading as="h2" size="md" className="mb-6">
              What a senior software engineer does for you
            </Heading>
            <ul className="space-y-4">
              {whatTheyDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Code size={16} className="mt-1 flex-shrink-0 text-indigo-400" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">Typical engagement</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Duration</p>
                <p className="text-lg font-700 text-snow">3–6 months</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Hours</p>
                <p className="text-lg font-700 text-snow">40h/week (contract) or 2–3 days/week (fractional)</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Rate range</p>
                <p className="text-lg font-700 text-snow">$65–120/h</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Hiring guidance */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Heading as="h3" size="sm" className="mb-6">What to look for when interviewing</Heading>
            <ul className="space-y-4">
              {hiringSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" size="sm" className="mb-6">Common hiring mistakes</Heading>
            <ul className="space-y-4">
              {commonMistakes.map((mistake) => (
                <li key={mistake} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">Questions about hiring software engineers</Heading>
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
      <CTASection heading="Ready to hire a software engineer?" subheading="Brief us on your stack and timeline. We'll match profiles within 48 hours." />
    </>
  );
}
