import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { LogoStrip } from "@/components/blocks/LogoStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, SITE_URL } from "@/lib/seo";
import { getRoleBySlug, roles } from "@/lib/roles";
import { cities } from "@/lib/cities";

interface Props {
  params: { role: string };
}

export async function generateStaticParams() {
  return roles.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const role = getRoleBySlug(params.role);
  if (!role) return {};

  return {
    title: `Hire a remote ${role.title} — Ephemer`,
    description: `Hire a senior remote ${role.title} for your US startup. Ephemer deploys vetted ${role.plural} within days. No agency fees, no bloated hiring timelines.`,
    alternates: { canonical: `${SITE_URL}/hire-${role.slug}-remote` },
    keywords: [
      `hire remote ${role.title.toLowerCase()}`,
      `remote ${role.title.toLowerCase()}`,
      `contract ${role.title.toLowerCase()} remote`,
      `senior ${role.title.toLowerCase()} remote`,
      `hire ${role.title.toLowerCase()} startup`,
    ],
  };
}

export default function RoleRemotePage({ params }: Props) {
  const role = getRoleBySlug(params.role);
  if (!role) notFound();

  const faqs = [
    {
      q: `How do I hire a remote ${role.title} through Ephemer?`,
      a: `Brief us on your stack, team size, and what you need unblocked. Within 48 hours we surface 2–4 matched ${role.plural} from our pre-vetted network. Typical deployment time is 5–10 business days.`,
    },
    {
      q: `What makes Ephemer ${role.plural} different from agency placements?`,
      a: `Ephemer does not run a volume-based matching model. Every ${role.title} in our network has passed a domain-specific technical assessment and an execution interview. You receive pre-qualified options, not unfiltered CVs.`,
    },
    {
      q: `Can a remote ${role.title} integrate with my existing team?`,
      a: `Yes. Ephemer's engineers are experienced in async collaboration, remote codebases, and working within established engineering cultures. We support the first two weeks of onboarding to ensure integration goes smoothly.`,
    },
    {
      q: `What is the typical engagement length for a remote ${role.title}?`,
      a: `Contract engagements run a minimum of 3 months. Fractional engagements start at 1 month. Most clients extend well beyond the initial term as the engineer becomes embedded in the product.`,
    },
    {
      q: `What tech stack experience do your ${role.plural} have?`,
      a: `Core skills include: ${role.skills.join(", ")}. We match specifically to your stack, not generically to the job title.`,
    },
  ];

  // Sample cities for city-based internal linking
  const featuredCities = cities.slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire remote engineers", url: `${SITE_URL}/hire-remote-engineers` },
          { name: `${role.title} · Remote`, url: `${SITE_URL}/hire-${role.slug}-remote` },
        ])}
      />
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant="indigo">Remote</Badge>
          <Badge variant="default">{role.seniorityLabel}</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire a remote {role.title}
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Ephemer deploys senior remote {role.plural} to US startups at Seed through
          Series C. Pre-vetted, high-ownership engineers available within days.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/contact#book" size="lg">
            Book a 15-min call
            <ArrowRight size={16} />
          </Button>
          <Button href="/hire-remote-engineers" variant="secondary" size="lg">
            All remote roles
          </Button>
        </div>
      </Section>

      {/* Role context */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Role overview</p>
            <p className="text-sm text-zinc-300 leading-relaxed">{role.description}</p>
          </div>
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Engagement options
            </p>
            <div className="flex flex-col gap-3">
              {[
                { type: "Full-time contract", detail: "40h/week · 3 month minimum" },
                { type: "Fractional", detail: "2–3 days/week · 1 month minimum" },
                { type: "Project-based", detail: "Scoped outcome · Defined milestones" },
              ].map((e) => (
                <div key={e.type} className="flex justify-between items-start">
                  <span className="text-sm text-snow font-500">{e.type}</span>
                  <span className="text-xs text-zinc-500 font-mono text-right">{e.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section className="pt-0">
        <LogoStrip
          label={`Core ${role.title} skills in the Ephemer network`}
          items={role.skills}
        />
      </Section>

      {/* What Ephemer delivers */}
      <Section>
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-6">What you get</Badge>
          <Heading as="h2" size="md" className="mb-6">
            A remote {role.title} who ships from day one
          </Heading>
          <div className="flex flex-col gap-5">
            <TextBlock>
              The Ephemer vetting process for {role.plural} is built around one
              question: does this engineer perform under real startup conditions?
              That means ownership over outcomes, not tasks — shipping into ambiguity
              without hand-holding.
            </TextBlock>
            <TextBlock>
              Every engineer in the network has passed a technical assessment covering
              {" "}{role.skills.slice(0, 3).join(", ")} and relevant architecture
              scenarios. They have also completed a structured execution interview
              reviewing past contributions in production systems.
            </TextBlock>
            <TextBlock>
              When you hire through Ephemer, you get an engineer who is ready to
              contribute in week one — not week six.
            </TextBlock>
          </div>
        </div>
      </Section>

      {/* City-based links */}
      <Section>
        <div className="mb-8">
          <Badge variant="indigo" className="mb-4">By city</Badge>
          <Heading as="h2" size="sm" className="mb-3">
            Hire a {role.title} by location
          </Heading>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-3xl">
          {featuredCities.map((city) => (
            <a
              key={city.slug}
              href={`/hire-${role.slug}-${city.slug}`}
              className="flex items-center justify-between p-4 border border-carbon rounded-xl hover:border-zinc-600 hover:bg-carbon/30 transition-all group"
            >
              <span className="text-sm font-500 text-snow">{city.name}</span>
              <ArrowRight size={13} className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">
          Hiring a remote {role.title} — questions
        </Heading>
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
        heading={`Hire a remote ${role.title}`}
        subheading={`Senior ${role.plural} matched and deployed in under 10 business days. Brief us now.`}
      />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related pages"
          links={[
            { href: "/hire-remote-engineers", label: "All remote engineers" },
            { href: "/for-clients", label: "For clients" },
            { href: "/how-it-works", label: "How it works" },
            ...roles
              .filter((r) => r.slug !== role.slug)
              .slice(0, 3)
              .map((r) => ({
                href: `/hire-${r.slug}-remote`,
                label: `${r.title} · Remote`,
              })),
          ]}
        />
      </Section>
    </>
  );
}
