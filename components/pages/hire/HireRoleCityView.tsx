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
import { cities } from "@/lib/cities";
import type { CityData } from "@/lib/cities";
import type { RoleData } from "@/lib/roles";

export function HireRoleCityView({ role, city }: { role: RoleData; city: CityData }) {
  const faqs = [
    {
      q: `How do I hire a ${role.title} in ${city.name} through Ephemer?`,
      a: `Brief us on your role and ${city.name} context. Within 48 hours we send you 2–4 matched ${role.plural} from our pre-vetted network. Typical time to deployment is 5–10 business days.`,
    },
    {
      q: `What does a ${role.title} cost in ${city.name}?`,
      a: `${city.name} market rates for ${role.plural} are typically ${city.avgSalary}. Ephemer's engagement model is transparent — no agency markup on top of the engineer's rate.`,
    },
    {
      q: `Are your ${role.plural} senior level?`,
      a: `Every engineer in the Ephemer network has at least 6 years of experience and has passed a domain-specific technical assessment. You will not receive junior profiles.`,
    },
    {
      q: `Can a ${role.title} work remotely for a ${city.name} startup?`,
      a: `Yes. All Ephemer engagements are remote-first. If you need US time-zone overlap or occasional on-site presence in ${city.name}, we filter accordingly.`,
    },
  ];

  const nearbyCities = cities.filter((c) => c.slug !== city.slug).slice(0, 3);

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
      <JsonLd data={serviceJsonLd()} />
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
          Ephemer deploys senior {role.plural} to {city.name} startups within days.
          Pre-vetted, high-ownership engineers — without agency overhead.
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
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-6">The case for Ephemer</Badge>
          <Heading as="h2" size="md" className="mb-6">
            Why {city.name} startups hire {role.plural} through Ephemer
          </Heading>
          <div className="flex flex-col gap-5">
            <TextBlock>
              Finding a senior {role.title} in {city.name} through traditional recruiting
              takes 3–5 months. {city.hiringDifficulty} Meanwhile, your product is
              waiting.
            </TextBlock>
            <TextBlock>
              Ephemer maintains an active network of pre-vetted {role.plural} who are
              ready to engage. When you brief us, we match against your specific
              stack ({role.skills.slice(0, 3).join(", ")}), your culture, and your
              current technical priorities — not just a job description.
            </TextBlock>
            <TextBlock>
              The result: a focused interview with 2–4 strong candidates, all at the
              senior level, all cleared on technical depth and execution track record.
              You deploy in days.
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
