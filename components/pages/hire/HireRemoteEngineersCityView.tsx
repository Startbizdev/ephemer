import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, SITE_URL } from "@/lib/seo";
import { roles } from "@/lib/roles";
import type { CityData } from "@/lib/cities";

export function HireRemoteEngineersCityView({ city }: { city: CityData }) {
  const faqs = [
    {
      q: `How does Ephemer work for ${city.name} startups?`,
      a: `${city.name} startups brief Ephemer on their engineering need. Within 48 hours, we surface 2–4 matched senior engineer profiles. Typical time-to-deploy is 5–10 business days.`,
    },
    {
      q: `Do the engineers work on-site in ${city.name}?`,
      a: `All Ephemer engagements are remote-first. If you require on-site presence in ${city.name}, we can filter for engineers within commuting distance or willing to relocate.`,
    },
    {
      q: `What is the cost of hiring through Ephemer in ${city.name}?`,
      a: `Ephemer operates on a transparent engagement fee model — no agency markup on top of the engineer's rate. Pricing is provided before any commitment and is competitive versus local market rates (${city.avgSalary}).`,
    },
    {
      q: `What types of engineers can I hire in ${city.name}?`,
      a: `Backend, frontend, fullstack, DevOps, ML, platform, data engineering, security, mobile, and staff-level roles — all senior, all pre-vetted.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire remote engineers", url: `${SITE_URL}/hire-remote-engineers` },
          { name: city.name, url: `${SITE_URL}/hire-remote-engineers-${city.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="pt-24 pb-16">
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="indigo">
            <MapPin size={11} />
            {city.name}, {city.state}
          </Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire remote engineers in {city.name}
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          {city.name} startups at Seed through Series C use Ephemer to deploy senior
          contract engineers without the cost and delay of traditional recruiting.
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

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              {city.name} tech ecosystem
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">{city.ecosystem}</p>
          </div>
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Hiring difficulty
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">{city.hiringDifficulty}</p>
          </div>
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Engineer market
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">{city.techScene}</p>
          </div>
          <div className="border border-carbon rounded-xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Market compensation
            </p>
            <p className="text-snow font-tight font-700 text-lg mb-2">{city.avgSalary}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {city.topSectors.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono text-zinc-500 border border-carbon px-2 py-0.5 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-6">Why Ephemer</Badge>
          <Heading as="h2" size="md" className="mb-6">
            The {city.name} hiring problem — and how Ephemer solves it
          </Heading>
          <div className="flex flex-col gap-5">
            <TextBlock>
              {city.hiringDifficulty} Startups in {city.name} often spend 4–6 months
              on a single senior hire — time spent writing JDs, running screens, and
              losing candidates to better-funded competitors.
            </TextBlock>
            <TextBlock>
              Ephemer operates differently. We maintain an active network of pre-vetted
              senior engineers who are ready to engage. When you brief us on a {city.name}
              -based role, we surface matched profiles within 48 hours — not 48 days.
            </TextBlock>
            <TextBlock>
              Our model eliminates the cost of a traditional agency while maintaining a
              higher quality bar. You interview 2–4 strong candidates, not 20 mediocre ones.
            </TextBlock>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Badge variant="indigo" className="mb-4">Roles in {city.name}</Badge>
          <Heading as="h2" size="md" className="mb-4">
            Hire by role in {city.name}
          </Heading>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {roles.map((role) => (
            <Link
              key={role.slug}
              href={`/hire-${role.slug}-${city.slug}`}
              className="flex items-center justify-between p-4 border border-carbon rounded-xl hover:border-zinc-600 hover:bg-carbon/30 transition-all group"
            >
              <div>
                <p className="text-sm font-500 text-snow">{role.title}</p>
                <p className="text-xs text-zinc-500 mt-0.5 font-mono">{role.seniorityLabel}</p>
              </div>
              <ArrowRight size={14} className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md" className="mb-8">
          Hiring in {city.name} — questions
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
        heading={`Ready to hire in ${city.name}?`}
        subheading={`Brief us on your ${city.name} engineering role. We surface matched profiles within 48 hours.`}
      />

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related"
          links={[
            { href: "/hire-remote-engineers", label: "All remote engineers" },
            { href: "/for-clients", label: "For clients" },
            { href: "/how-it-works", label: "How it works" },
            ...roles.slice(0, 4).map((r) => ({
              href: `/hire-${r.slug}-${city.slug}`,
              label: `${r.title} · ${city.name}`,
            })),
          ]}
        />
      </Section>
    </>
  );
}
