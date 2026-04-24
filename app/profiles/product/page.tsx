import type { Metadata } from "next";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hire senior product engineers — Product managers, PMs, Technical PMs | Ephemer",
  description:
    "Deploy senior product-minded engineers and technical product leaders. Bridge engineering and product. Own features, shape strategy.",
  alternates: { canonical: `${SITE_URL}/profiles/product` },
};

const roles = [
  {
    title: "Product Engineers",
    desc: "Full-stack developers who think in terms of user value, not just code",
  },
  {
    title: "Technical Product Managers",
    desc: "PMs with engineering background who can design and ship features",
  },
  {
    title: "Product Managers",
    desc: "Strategic thinking + execution, embedded in engineering teams",
  },
  {
    title: "Engineering Managers / Tech Leads",
    desc: "Leadership and technical depth, growing teams and shipping products",
  },
];

const whatTheyDo = [
  "Bridge engineering and product: translate strategy into technical decisions",
  "Own features end-to-end: discovery, design, execution, measurement",
  "Make product tradeoffs: scope vs. timeline vs. technical debt",
  "Mentor engineers on product thinking: why we build, not just what",
  "Set standards: code quality, user experience, customer value",
];

export default function ProductEngineersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Profiles", url: `${SITE_URL}/profiles` },
          { name: "Product Engineers", url: `${SITE_URL}/profiles/product` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="indigo">Specialization</Badge>
          <Badge variant="default">5+ years product thinking</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire product-minded engineers and leaders
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Engineers who think like product people. PMs who ship like engineers. Leaders who bridge
          the gap and drive decisions.
        </TextBlock>
        <Button href="/contact#book" size="lg">
          Hire now
          <ArrowRight size={16} />
        </Button>
      </Section>

      {/* Roles */}
      <Section className="pt-0">
        <Heading as="h2" size="md" className="mb-8">Specializations</Heading>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div key={role.title} className="border border-carbon rounded-xl p-6">
              <p className="font-600 text-snow mb-2">{role.title}</p>
              <p className="text-sm text-zinc-400">{role.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What they do */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">What product engineers and leaders deliver</Heading>
        <ul className="space-y-4 max-w-3xl">
          {whatTheyDo.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Lightbulb size={16} className="mt-1 flex-shrink-0 text-indigo-400" />
              <span className="text-sm text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Engagement */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Badge variant="indigo" className="mb-4">Typical context</Badge>
            <Heading as="h3" size="sm" className="mb-6">Where they fit</Heading>
            <ul className="space-y-2 text-sm text-zinc-300">
              {["Scaling engineering teams (5 → 15+ engineers)", "Building new product areas from scratch", "Unblocking feature velocity", "Technical leadership gap (CTO on leave)", "VP Engineering / Director level roles"].map(
                (context) => (
                  <li key={context} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    {context}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">Typical engagement</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Duration</p>
                <p className="text-lg font-700 text-snow">2–5 months (or convert to permanent)</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Model</p>
                <p className="text-lg font-700 text-snow">Fractional or full-time contract</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Rate range</p>
                <p className="text-lg font-700 text-snow">$80–150/h</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Need product and technical leadership?" subheading="Deploy senior product-minded engineers in days." />
    </>
  );
}
