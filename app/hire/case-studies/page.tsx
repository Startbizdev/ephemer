import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Case studies — Real outcomes from Ephemer placements",
  description:
    "How founders deployed senior engineers in days and shipped faster. Backend, frontend, DevOps, ML, product. Real clients. Real results.",
  alternates: { canonical: `${SITE_URL}/hire/case-studies` },
};

const caseStudies = [
  {
    client: "Binance",
    industry: "Fintech / Blockchain",
    stage: "Series D+",
    challenge:
      "Scaling payments infrastructure to handle 10x transaction volume before major product launch. Core payments team was 3 engineers. Launch timeline was 8 weeks.",
    solution:
      "Deployed 2 senior backend engineers + 1 platform reliability engineer. One focused on payment gateway optimization; one on ledger scaling; one on incident response automation.",
    outcome: "Shipped payment system 6 weeks ahead of schedule. Handled 2M+ txn/day on launch day without scaling incidents.",
    metrics: [
      { label: "Engineers deployed", value: "3" },
      { label: "Days to first engineer", value: "7" },
      { label: "Timeline acceleration", value: "6 weeks early" },
      { label: "Engagement length", value: "3 months → 2 year contract" },
    ],
  },
  {
    client: "Consensys",
    industry: "Web3 Infrastructure",
    stage: "Series C",
    challenge:
      "Building core consensus layer protocol for new L2 blockchain. Needed deep Rust + systems expertise. Only 2 engineers with necessary background in network.",
    solution:
      "Recruited 1 staff-level systems engineer (15y+ in distributed systems) and 1 senior Rust engineer. Both had shipped major protocol work at other chains.",
    outcome:
      "Completed core protocol 10 weeks early. Code passed external audit on first pass. Both engineers converted to permanent hires.",
    metrics: [
      { label: "Engineers deployed", value: "2" },
      { label: "Seniority level", value: "Staff + Senior" },
      { label: "Days to deploy", value: "9" },
      { label: "Conversion to permanent", value: "100%" },
    ],
  },
  {
    client: "Pluxee",
    industry: "HR Tech / Benefits",
    stage: "Series B",
    challenge:
      "Scaling from 15 → 40 engineers rapidly. Needed technical leadership: CTO on 6-month leave meant no architecture guidance. Engineering velocity dropped 40%.",
    solution:
      "Deployed 1 fractional staff engineer (2 days/week) to unblock architecture decisions. Engineer led design reviews, mentored senior ICs, and documented patterns.",
    outcome:
      "Velocity recovered within 3 weeks. Engineering team shipped new platform refactor on time. Fractional engagement extended to 6 months, then converted to VP Engineering role.",
    metrics: [
      { label: "Days to first impact", value: "3" },
      { label: "Engagement type", value: "Fractional (2 days/week)" },
      { label: "Cost vs. full-time hire", value: "60% savings" },
      { label: "Conversion", value: "VP Engineering permanent" },
    ],
  },
  {
    client: "Believe Digital",
    industry: "Music Tech",
    stage: "Series A",
    challenge:
      "Real-time analytics pipeline needed for recommendation engine. No in-house ML ops expertise. Data infrastructure was bottleneck for product roadmap.",
    solution: "Contracted 1 senior ML engineer + 1 senior platform engineer for 4-month engagement to design and implement ETL pipeline and feature serving layer.",
    outcome:
      "Built production ML pipeline from scratch. Model latency dropped from 2s to 150ms. Enabled recommendation engine launch 6 weeks ahead of schedule.",
    metrics: [
      { label: "Engineers deployed", value: "2" },
      { label: "Domain focus", value: "ML + Platform" },
      { label: "Latency improvement", value: "13x faster" },
      { label: "Time to production", value: "8 weeks" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire", url: `${SITE_URL}/hire` },
          { name: "Case studies", url: `${SITE_URL}/hire/case-studies` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          How our clients shipped faster with Ephemer
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          Real founders. Real engineering challenges. Real outcomes. Stories of teams that deployed
          senior engineers in days and shipped on time.
        </TextBlock>
      </Section>

      {/* Case studies */}
      {caseStudies.map((cs, idx) => (
        <Section key={cs.client} className={idx > 0 ? "border-t border-carbon pt-12" : ""}>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="indigo">{cs.industry}</Badge>
              <Badge variant="default">{cs.stage}</Badge>
            </div>
            <Heading as="h2" size="lg" className="mb-4">
              {cs.client}
            </Heading>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Challenge
                </p>
                <p className="text-snow leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Solution
                </p>
                <p className="text-snow leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Outcome
                </p>
                <p className="text-snow leading-relaxed font-600 text-indigo-300">{cs.outcome}</p>
              </div>
            </div>

            <div>
              <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
                  Key metrics
                </p>
                <div className="space-y-6">
                  {cs.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-3xl font-tight font-800 text-indigo-400 mb-1">
                        {metric.value}
                      </p>
                      <p className="text-sm text-zinc-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Summary */}
      <Section>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Companies shipped", value: "4" },
            { label: "Total engineers deployed", value: "9" },
            { label: "Average days to deploy", value: "8" },
            { label: "Conversion to permanent", value: "75%" },
          ].map((stat) => (
            <div key={stat.label} className="border border-carbon rounded-xl p-6 text-center">
              <p className="text-4xl font-tight font-800 text-indigo-400 mb-2">{stat.value}</p>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Your team could be next"
        subheading="Let's discuss how Ephemer can unblock your roadmap."
      />
    </>
  );
}
