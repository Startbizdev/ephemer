import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { RoleLinksSection } from "@/components/blocks/RoleLinksSection";
import { CityLinksSection } from "@/components/blocks/CityLinksSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hire remote engineers — US startups | Ephemer",
  description:
    "Hire senior remote engineers for your US startup. Ephemer deploys vetted backend, frontend, DevOps, ML, and platform engineers within days. No agency fees.",
  alternates: { canonical: `${SITE_URL}/hire-remote-engineers` },
  keywords: [
    "hire remote engineers",
    "remote software engineers",
    "contract engineers startup",
    "hire senior engineers US",
    "remote engineering team",
    "hire backend engineer remote",
    "hire devops engineer remote",
  ],
};

const faqs = [
  {
    q: "How quickly can I hire a remote engineer through Ephemer?",
    a: "Most engagements start within 5–10 business days of your initial brief. We surface matched profiles within 48 hours and run a single-round interview process.",
  },
  {
    q: "What seniority level are Ephemer engineers?",
    a: "All engineers in the Ephemer network have a minimum of 6 years of professional experience and have passed a rigorous technical and execution assessment.",
  },
  {
    q: "Do you cover engineers in all US time zones?",
    a: "Yes. Ephemer places both US-based engineers and international engineers with strong US time-zone overlap, depending on client preference.",
  },
  {
    q: "What is the difference between contract and fractional?",
    a: "Contract engineers work full-time (40h/week) on a fixed-term basis. Fractional engineers work 2–3 days per week and are ideal when you need deep expertise without a full-time commitment.",
  },
  {
    q: "What roles can I hire through Ephemer?",
    a: "Backend, frontend, fullstack, DevOps/SRE, ML, platform, data engineering, security engineering, mobile, staff engineering, and engineering management.",
  },
];

export default function HireRemoteEngineersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire remote engineers", url: `${SITE_URL}/hire-remote-engineers` },
        ])}
      />
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Badge variant="indigo" className="mb-6">Remote engineering talent</Badge>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire remote engineers for your US startup
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Ephemer deploys senior engineers into US startups within days. Vetted, senior,
          remote-ready — no agency fees, no bloated hiring cycles.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/contact#book" size="lg">
            Book a 15-min call
            <ArrowRight size={16} />
          </Button>
          <Button href="/how-it-works" variant="secondary" size="lg">
            How it works
          </Button>
        </div>
      </Section>

      {/* Why remote */}
      <Section className="pt-0">
        <div className="border border-carbon rounded-2xl p-8 md:p-12 max-w-4xl">
          <Heading as="h2" size="md" className="mb-6">
            Why US startups hire remote engineers through Ephemer
          </Heading>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Access beyond geography",
                body: "The best engineers are not always in your city. Remote hiring expands your talent pool to every market in the US and compatible international time zones.",
              },
              {
                title: "Faster deployment",
                body: "Remote-first engineers are set up to work asynchronously, adapt to new codebases quickly, and deliver output without needing physical onboarding.",
              },
              {
                title: "Cost efficiency without quality cuts",
                body: "You access senior talent without paying San Francisco market rates on a San Francisco cost of living. Ephemer negotiates fair rates that work for both sides.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-tight font-700 text-snow mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <RoleLinksSection variant="hub" />

      <CityLinksSection variant="hub" />

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">Hiring questions</Heading>
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
        heading="Ready to hire remote engineers?"
        subheading="Book a 15-minute call and brief us on your role. We surface matched senior profiles within 48 hours."
      />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related pages"
          links={[
            { href: "/for-clients", label: "For clients" },
            { href: "/how-it-works", label: "How it works" },
            { href: "/hire-senior-backend-engineer-remote", label: "Backend · Remote" },
            { href: "/hire-devops-engineer-remote", label: "DevOps · Remote" },
            { href: "/hire-ml-engineer-remote", label: "ML · Remote" },
            { href: "/hire-senior-frontend-engineer-remote", label: "Frontend · Remote" },
          ]}
        />
      </Section>
    </>
  );
}
