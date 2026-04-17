import type { Metadata } from "next";
import { Star, Briefcase, Globe, TrendingUp, Coffee, Award } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "For talent — Join Ephemer's senior engineer network",
  description:
    "Ephemer connects senior engineers with US startups for contract and fractional work. Flexible, high-impact roles. No recruiter noise.",
  alternates: { canonical: `${SITE_URL}/for-talent` },
};

const benefits = [
  {
    icon: Briefcase,
    title: "High-impact work only",
    description:
      "Ephemer places you in roles where your seniority matters. No ticket queues, no pointless standups — direct ownership and real engineering problems.",
  },
  {
    icon: Globe,
    title: "Work with US startups, from anywhere",
    description:
      "All Ephemer engagements are remote-first. Work with elite US engineering teams without relocating.",
  },
  {
    icon: TrendingUp,
    title: "Senior rates, not staffing margins",
    description:
      "Ephemer's model is transparent. You know what you earn. No opaque agency margins eating into your compensation.",
  },
  {
    icon: Star,
    title: "Pre-matched, not broadcast",
    description:
      "Your profile is not blasted across job boards. Ephemer surfaces you to specific clients where the fit is genuine.",
  },
  {
    icon: Coffee,
    title: "Work on your terms",
    description:
      "Full-time contract, fractional, or project-based. Design your engagement model around your life, not an employer's headcount plan.",
  },
  {
    icon: Award,
    title: "Elite company",
    description:
      "The Ephemer network is selective. Your peers are senior engineers who have shipped in high-stakes environments. This is the standard.",
  },
];

const faqs = [
  {
    q: "What is the minimum experience level to join?",
    a: "Ephemer requires a minimum of 6 years of professional software engineering experience. We assess depth of contribution, ownership track record, and technical execution — not just years on a CV.",
  },
  {
    q: "What does the vetting process look like?",
    a: "A technical assessment relevant to your domain, a structured interview covering system design and execution experience, and a reference check. The process is designed to be rigorous but respectful of your time — typically completed in under a week.",
  },
  {
    q: "How quickly can I start working?",
    a: "Once accepted into the network, most engineers are matched to their first engagement within 2–4 weeks. We do not have a waiting list — we match actively as roles come in.",
  },
  {
    q: "How does compensation work?",
    a: "Rates are set individually based on role, seniority, and engagement terms. Payments are handled by Ephemer monthly with no delays. You invoice once per month.",
  },
  {
    q: "Can I have multiple engagements at once?",
    a: "Fractional engineers often have 2–3 concurrent engagements. Full-time contract engagements are exclusive for the duration. We coordinate to avoid conflicts.",
  },
];

export default function ForTalentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "For talent", url: `${SITE_URL}/for-talent` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Badge variant="indigo" className="mb-6">For engineers</Badge>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Work on problems worth solving
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          Ephemer places senior engineers with US startups that are building something
          real. Flexible, remote, high-ownership engagements — without the noise of a
          job search.
        </TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            href="https://form.typeform.com/ephemer-talent"
            size="lg"
            external
          >
            Apply to join the network
          </Button>
          <Button href="/how-it-works" variant="secondary" size="lg">
            How it works
          </Button>
        </div>
      </Section>

      {/* What Ephemer is not */}
      <Section className="pt-0">
        <div className="border border-carbon rounded-2xl p-8 md:p-12 max-w-3xl">
          <Badge variant="indigo" className="mb-4">What Ephemer is not</Badge>
          <div className="flex flex-col gap-4 mt-6">
            {[
              "A staffing agency with a CV database",
              "A platform that broadcasts your profile to anyone who clicks",
              "A race to the bottom on rates",
              "A place for engineers who want hand-holding or low ownership",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 text-zinc-600 font-mono text-sm">—</span>
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="mb-12">
          <Heading as="h2" size="md" className="mb-4">What you get</Heading>
        </div>
        <FeatureGrid features={benefits} columns={3} />
      </Section>

      {/* Who fits */}
      <Section>
        <div className="mb-10">
          <Badge variant="indigo" className="mb-4">Who fits</Badge>
          <Heading as="h2" size="md" className="mb-4 max-w-xl">
            Ephemer engineers share one trait
          </Heading>
          <TextBlock className="max-w-2xl">
            They own outcomes, not tasks. If you measure success by what shipped,
            not what was estimated — you will fit here.
          </TextBlock>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-carbon border border-carbon rounded-xl overflow-hidden max-w-3xl">
          {[
            { label: "Background", value: "6+ years in production engineering" },
            { label: "Mindset", value: "Operator, not spectator" },
            { label: "Availability", value: "Open to contract or fractional" },
            { label: "Location", value: "Remote, time-zone overlap with US" },
          ].map((item) => (
            <div key={item.label} className="bg-graphite p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">{item.label}</p>
              <p className="text-base text-snow font-500">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">Talent questions</Heading>
        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-carbon py-5 last:border-0">
              <h3 className="font-500 text-snow mb-2 text-sm md:text-base">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application CTA */}
      <Section>
        <div className="border border-carbon rounded-2xl p-10 md:p-16 max-w-2xl">
          <Heading as="h2" size="md" className="mb-4">Apply to the network</Heading>
          <TextBlock className="mb-8">
            Complete a short application. If your profile looks like a strong fit, we
            will reach out to schedule a technical assessment within 5 business days.
          </TextBlock>
          <Button
            href="https://form.typeform.com/ephemer-talent"
            size="lg"
            external
          >
            Start your application
          </Button>
        </div>
      </Section>

      <Section className="pt-0 pb-16">
        <InternalLinks
          title="Related"
          links={[
            { href: "/how-it-works", label: "How it works" },
            { href: "/for-clients", label: "For clients" },
            { href: "/about", label: "About Ephemer" },
          ]}
        />
      </Section>
    </>
  );
}
