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
import { breadcrumbJsonLd, faqJsonLd, roleOccupationJsonLd, serviceJsonLd, SITE_URL } from "@/lib/seo";
import { buildRoleRemoteFaqs } from "@/lib/hireRoleFaqs";
import { cities } from "@/lib/cities";
import { roles } from "@/lib/roles";
import type { RoleData } from "@/lib/roles";

export function HireRoleRemoteView({ role }: { role: RoleData }) {
  const faqs = buildRoleRemoteFaqs(role);

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
      <JsonLd data={roleOccupationJsonLd(role)} />
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="pt-24 pb-16">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant="indigo">Remote</Badge>
          <Badge variant="default">{role.seniorityLabel}</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire a remote {role.title}
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          US startups use Ephemer to deploy senior {role.plural} in days — pre-vetted on{" "}
          {role.skills.slice(0, 4).join(", ")}, with engagement structures that match runway, not
          agency retainers.
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

      <Section className="pt-0">
        <LogoStrip
          label={`Core ${role.title} skills in the Ephemer network`}
          items={role.skills}
        />
      </Section>

      <Section>
        <div className="max-w-3xl space-y-8">
          <div>
            <Badge variant="indigo" className="mb-3">Depth</Badge>
            <Heading as="h2" size="sm" className="mb-4">
              What a senior {role.title} does for you
            </Heading>
            <TextBlock className="leading-relaxed">{role.whatTheyDo}</TextBlock>
          </div>
          <div>
            <Heading as="h2" size="sm" className="mb-4">
              What to look for when interviewing
            </Heading>
            <TextBlock className="leading-relaxed">{role.hiringSignals}</TextBlock>
          </div>
          <div>
            <Heading as="h2" size="sm" className="mb-4">
              Common hiring mistakes
            </Heading>
            <TextBlock className="leading-relaxed">{role.commonMistakes}</TextBlock>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-6">What you get</Badge>
          <Heading as="h2" size="md" className="mb-6">
            A remote {role.title} who ships from week one
          </Heading>
          <div className="flex flex-col gap-5">
            <TextBlock>
              Our vetting for {role.plural} centers on production judgment: ownership when specs are
              incomplete, clarity in code review, and calm under incident pressure — not textbook
              exercises alone.
            </TextBlock>
            <TextBlock>
              Technical depth maps to {role.skills.join(", ")} so you are not re-teaching the stack
              after hire.
            </TextBlock>
            <TextBlock>
              When you engage through Ephemer, onboarding is about your product and customers — not
              whether the engineer can operate at senior level.
            </TextBlock>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <Badge variant="indigo" className="mb-4">By city</Badge>
          <Heading as="h2" size="sm" className="mb-3">
            Hire a {role.title} with local context
          </Heading>
          <TextBlock muted className="max-w-xl text-sm">
            Explore city-specific hiring notes and link through to this role in each market.
          </TextBlock>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {cities.map((city) => (
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
              .slice(0, 5)
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
