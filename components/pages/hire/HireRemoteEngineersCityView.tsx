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
import {
  breadcrumbJsonLd,
  faqJsonLd,
  cityProfessionalServiceJsonLd,
  SITE_URL,
} from "@/lib/seo";
import { buildRemoteEngineersCityFaqs } from "@/lib/hireCityFaqs";
import { roles } from "@/lib/roles";
import type { CityData } from "@/lib/cities";

export function HireRemoteEngineersCityView({ city }: { city: CityData }) {
  const faqs = buildRemoteEngineersCityFaqs(city);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire remote engineers", url: `${SITE_URL}/hire-remote-engineers` },
          { name: city.name, url: `${SITE_URL}/hire-remote-engineers-${city.slug}` },
        ])}
      />
      <JsonLd data={cityProfessionalServiceJsonLd(city)} />
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
          {city.startupsUseCase}
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
          <Badge variant="indigo" className="mb-4">
            Local hiring reality
          </Badge>
          <Heading as="h2" size="md" className="mb-6">
            Why {city.name} startups struggle to hire senior engineers
          </Heading>
          <TextBlock className="leading-relaxed">{city.hiringNarrative}</TextBlock>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-4">
            Market culture
          </Badge>
          <Heading as="h2" size="md" className="mb-6">
            What {city.name} engineers respond to
          </Heading>
          <TextBlock className="leading-relaxed">{city.marketInsight}</TextBlock>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-6">Why Ephemer in {city.name}</Badge>
          <Heading as="h2" size="md" className="mb-6">
            Execution without the six-month search
          </Heading>
          <div className="flex flex-col gap-5">
            <TextBlock>
              {city.hiringDifficulty} Founders here often run 4–6 month cycles for one senior hire
              — writing JDs, screening inbound noise, and losing finalists to better-funded rivals
              or remote national offers.
            </TextBlock>
            <TextBlock>
              Ephemer front-loads quality: we only introduce engineers who have already cleared
              our technical and execution bar for senior startup work. Your interview loop focuses
              on fit and scope — not whether someone can pass a basic screen.
            </TextBlock>
            <TextBlock>
              Engagement economics are transparent before you commit, benchmarked against{" "}
              {city.avgSalary} so you can compare total cost to an open role on your roadmap.
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
            ...roles.map((r) => ({
              href: `/hire-${r.slug}-${city.slug}`,
              label: `${r.title} · ${city.name}`,
            })),
          ]}
        />
      </Section>
    </>
  );
}
