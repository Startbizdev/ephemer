import type { Metadata } from "next";
import { Globe, Users, Zap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/blocks/CTASection";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our network — 100K+ senior engineers globally | Ephemer",
  description:
    "Ephemer's engineering network spans 100K+ vetted senior engineers across 4 regions. Built over 10+ years via Skill Hunter.",
  alternates: { canonical: `${SITE_URL}/about/network` },
};

const regions = [
  { name: "LATAM", percentage: "45%", description: "Colombia, Brazil, Argentina, Mexico" },
  { name: "EMEA", percentage: "30%", description: "Europe, Middle East, Africa" },
  { name: "Africa", percentage: "15%", description: "Sub-Saharan tech hubs" },
  { name: "Asia", percentage: "10%", description: "India, Southeast Asia" },
];

const features = [
  {
    icon: Users,
    title: "100K+ profiles",
    description: "Deep bench of vetted senior engineers, continuously updated from the Skill Hunter network.",
  },
  {
    icon: Globe,
    title: "4 regions",
    description: "Global coverage with timezone overlap for US teams. Remote-first talent with local depth.",
  },
  {
    icon: Zap,
    title: "10+ year network",
    description: "Built on Skill Hunter's decade of recruiting relationships. Pre-vetted, not scraped.",
  },
];

export default function NetworkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
          { name: "Our network", url: `${SITE_URL}/about/network` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Our global network
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          100K+ vetted senior engineers across 4 continents. Built over 10+ years through Skill
          Hunter. Remote-first, pre-screened, ready to deploy.
        </TextBlock>
      </Section>

      {/* By the numbers */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div key={region.name} className="border border-carbon rounded-xl p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                {region.name}
              </p>
              <p className="text-4xl font-tight font-800 text-indigo-400 mb-2">{region.percentage}</p>
              <p className="text-xs text-zinc-400">{region.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="mb-12">
          <Badge variant="indigo" className="mb-4">Network</Badge>
          <Heading as="h2" size="lg" className="mb-4 max-w-xl">
            Why our network is different
          </Heading>
        </div>
        <FeatureGrid features={features} columns={3} />
      </Section>

      {/* Sourcing strategy */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Heading as="h2" size="md" className="mb-6">
              How we source and vet
            </Heading>
            <TextBlock className="mb-6">
              Unlike staffing agencies that scrape LinkedIn or job boards, Ephemer sources from the
              Skill Hunter network—built over 10+ years of direct relationships with engineers,
              hiring managers, and recruiting teams.
            </TextBlock>
            <ul className="space-y-4">
              {[
                "10+ year relationship database",
                "Pre-vetted profiles by domain and seniority",
                "Continuous network updates",
                "Reference-rich profiles (not resume-only)",
                "Timezone and skill clustering",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
              Network composition
            </p>
            <div className="space-y-6">
              {[
                { label: "Senior engineers", value: "70%" },
                { label: "Staff/Lead level", value: "20%" },
                { label: "Management/architects", value: "10%" },
              ].map((comp) => (
                <div key={comp.label}>
                  <p className="text-sm text-zinc-400 mb-2">{comp.label}</p>
                  <div className="w-full bg-carbon rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: comp.value }}
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">{comp.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Access the network" subheading="Brief us on what you need. We match from our global talent pool in 48 hours." />
    </>
  );
}
