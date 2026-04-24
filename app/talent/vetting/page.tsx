import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vetting process — How Ephemer validates engineering talent",
  description:
    "Three-layer vetting: technical assessment, reference checks, mission-fit interview. Senior-only, production-proven engineers.",
  alternates: { canonical: `${SITE_URL}/talent/vetting` },
};

export default function VettingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Talent", url: `${SITE_URL}/talent` },
          { name: "Vetting process", url: `${SITE_URL}/talent/vetting` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          How we vet engineers
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Three layers of validation: technical depth, production judgment, and mission fit. Senior-only is not a title—it is evidence.
        </TextBlock>
        <Button href="/talent" variant="secondary">
          Back to talent
        </Button>
      </Section>

      {/* Three layers */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Technical assessment",
              description: "CoderByte challenge (60–90 min) stack-specific. Problem-solving approach, code quality, system thinking.",
              details: [
                "Role-specific technical challenge",
                "60–90 minute time limit",
                "Evaluated on approach and depth, not speed",
                "Minimum score threshold enforced",
              ],
            },
            {
              num: "02",
              title: "Reference validation",
              description: "Minimum 2 recent managers or peers. Verify seniority signal, incident response, collaboration style.",
              details: [
                "2+ reference checks minimum",
                "Recent managers or direct peers preferred",
                "Questions about production judgment and execution",
                "Career narrative verification",
              ],
            },
            {
              num: "03",
              title: "Mission-fit interview",
              description: "Conversation about your specific problem, stack, team dynamics, and working preferences.",
              details: [
                "30-45 minute conversation",
                "Discussion of technical context and expectations",
                "Clarification of engagement preferences",
                "Final fit signal before matching",
              ],
            },
          ].map((layer) => (
            <div key={layer.num} className="border border-carbon rounded-xl p-8">
              <p className="text-sm font-mono font-bold text-indigo-400 mb-3">{layer.num}</p>
              <h3 className="text-lg font-700 text-snow mb-3">{layer.title}</h3>
              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">{layer.description}</p>
              <ul className="space-y-2">
                {layer.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-zinc-400">
                    <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Standards */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="indigo" className="mb-4">Quality bar</Badge>
            <Heading as="h2" size="md" className="mb-6">
              What "senior" actually means at Ephemer
            </Heading>
            <ul className="space-y-4">
              {[
                "Minimum 6 years production experience",
                "Shipped real systems under pressure",
                "Debugged incidents and led post-mortems",
                "Mentored junior engineers (formal or informal)",
                "Can make architectural tradeoffs",
                "Comfortable in ambiguity and ownership",
              ].map((standard) => (
                <li key={standard} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{standard}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">Key stats</p>
            <div className="space-y-6">
              <div>
                <p className="text-3xl font-tight font-800 text-indigo-400">100K+</p>
                <p className="text-sm text-zinc-400 mt-1">Profiles assessed</p>
              </div>
              <div className="border-t border-carbon pt-6">
                <p className="text-3xl font-tight font-800 text-indigo-400">10+ years</p>
                <p className="text-sm text-zinc-400 mt-1">Network built via Skill Hunter</p>
              </div>
              <div className="border-t border-carbon pt-6">
                <p className="text-3xl font-tight font-800 text-indigo-400">6+ years</p>
                <p className="text-sm text-zinc-400 mt-1">Minimum production experience</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What we reject */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">What we do not staff</Heading>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {[
            "Junior engineers (less than 6 years experience)",
            "Generic freelancers (no production depth)",
            "Body-shop contractors (low commitment, high churn)",
            "Offshore-only engineers with no timezone overlap",
            "Specialists without breadth (only knows one language / framework)",
            "CV matches without production proof",
          ].map((rejection) => (
            <div key={rejection} className="flex items-start gap-3 p-4 bg-carbon/30 rounded-lg">
              <span className="mt-0.5 inline-block w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
              <p className="text-sm text-zinc-300">{rejection}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Ready to be vetted?"
        subheading="Join the Ephemer network. Earn $65–150/h on meaningful contracts with high-growth startups."
      />
    </>
  );
}
