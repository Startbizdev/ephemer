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
import {
  breadcrumbJsonLd,
  faqJsonLd,
  cityProfessionalServiceJsonLd,
  roleOccupationJsonLd,
  SITE_URL,
} from "@/lib/seo";
import { buildRoleCityFaqs } from "@/lib/hireRoleFaqs";
import { getNearbyCitiesForSlug } from "@/lib/cities";
import type { CityData } from "@/lib/cities";
import type { RoleData } from "@/lib/roles";

export function HireRoleCityView({ role, city }: { role: RoleData; city: CityData }) {
  const faqs = buildRoleCityFaqs(role, city);
  const nearbyCities = getNearbyCitiesForSlug(city.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire remote engineers", url: `${SITE_URL}/hire-remote-engineers` },
          { name: city.name, url: `${SITE_URL}/hire-remote-engineers-${city.slug}` },
          { name: role.title, url: `${SITE_URL}/hire-${role.slug}-${city.slug}` },
        ])}
      />
      <JsonLd data={cityProfessionalServiceJsonLd(city)} />
      <JsonLd data={roleOccupationJsonLd(role, { city })} />
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="pt-24 pb-16">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant="indigo">{city.name}</Badge>
          <Badge variant="default">{role.seniorityLabel}</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire a {role.title} in {city.name}
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          {city.startupsUseCase} When you need {role.plural}, we match on{" "}
          {role.skills.slice(0, 4).join(", ")} and how hiring actually works in {city.name} — not
          generic job-board volume.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/contact#book" size="lg">
            Book a 15-min call
            <ArrowRight size={16} />
          </Button>
          <Button href={`/hire-remote-engineers-${city.slug}`} variant="secondary" size="lg">
            All engineers in {city.name}
          </Button>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Role overview</p>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">{role.description}</p>
          </div>
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              {city.name} hiring context
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">{city.hiringDifficulty}</p>
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
            <Badge variant="indigo" className="mb-3">What this role does</Badge>
            <Heading as="h2" size="sm" className="mb-4">
              {role.title} in a startup
            </Heading>
            <TextBlock className="leading-relaxed">{role.whatTheyDo}</TextBlock>
          </div>
          <div>
            <Heading as="h2" size="sm" className="mb-4">
              Strong interview signals
            </Heading>
            <TextBlock className="leading-relaxed">{role.hiringSignals}</TextBlock>
          </div>
          <div>
            <Heading as="h2" size="sm" className="mb-4">
              Hiring mistakes to avoid
            </Heading>
            <TextBlock className="leading-relaxed">{role.commonMistakes}</TextBlock>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-4">Local market</Badge>
          <Heading as="h2" size="md" className="mb-6">
            {city.name} context for this hire
          </Heading>
          <TextBlock className="leading-relaxed mb-6">{city.hiringNarrative}</TextBlock>
          <TextBlock className="leading-relaxed">{city.marketInsight}</TextBlock>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-6">Why Ephemer</Badge>
          <Heading as="h2" size="md" className="mb-6">
            {role.title} hiring in {city.name} — without the template search
          </Heading>
          <div className="flex flex-col gap-5">
            <TextBlock>
              {city.hiringDifficulty} A traditional search for a {role.title} here often runs
              months while your roadmap waits — especially when candidates compare you to{" "}
              {city.ecosystem.split("—")[0].trim()}.
            </TextBlock>
            <TextBlock>
              We match {role.plural} on {role.skills.slice(0, 3).join(", ")} and proof of shipping
              under constraints similar to yours — then you run a tight loop with 2–4 people who
              already cleared our bar.
            </TextBlock>
            <TextBlock>
              Economics align with {city.name} bands ({city.avgSalary}): you see rates before deep
              interviews, so you are not guessing whether contract fits your burn.
            </TextBlock>
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md" className="mb-8">
          Hiring a {role.title} in {city.name} — questions
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
        heading={`Hire a ${role.title} in ${city.name}`}
        subheading={`Brief us on your role. Senior ${role.plural} matched and deployed in under 10 business days.`}
      />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related pages"
          links={[
            { href: `/hire-remote-engineers-${city.slug}`, label: `All engineers in ${city.name}` },
            { href: `/hire-${role.slug}-remote`, label: `${role.title} · Remote` },
            { href: "/hire-remote-engineers", label: "Hire remote engineers" },
            { href: "/for-clients", label: "For clients" },
            { href: "/how-it-works", label: "How it works" },
            ...nearbyCities.map((c) => ({
              href: `/hire-${role.slug}-${c.slug}`,
              label: `${role.title} · ${c.name}`,
            })),
          ]}
        />
      </Section>
    </>
  );
}
