import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing — Hire senior engineers | Ephemer",
  description:
    "Transparent pricing from $65/h. No agency markup. No hidden costs. Full-time contract, fractional, or project-based. See what you'll pay before you commit.",
  alternates: { canonical: `${SITE_URL}/hire/pricing` },
};

const pricingTiers = [
  {
    name: "Full-time contract",
    description: "40 hours per week. Minimum 3 months.",
    hourlyRate: "$65–120",
    details: [
      "Full-time availability (40h/week)",
      "Minimum 3-month engagement",
      "US or international timezone",
      "Full benefits/compliance handled",
      "Contractor-to-hire option (20% of hourly rate)",
    ],
    estimated: "$10,400–19,200/month",
    use: "Build out a team capability, unblock roadmap sprint, core infrastructure work",
  },
  {
    name: "Fractional",
    description: "2–3 days per week. Minimum 1 month.",
    hourlyRate: "$75–140",
    details: [
      "2–3 days per week flexibility",
      "Minimum 1-month engagement",
      "Async-friendly arrangements",
      "Scale up to full-time if needed",
      "Ideal for specialized or short-term needs",
    ],
    estimated: "$3,000–8,400/month",
    use: "Specialized expertise (ML, platform, security), interim leadership, technical debt cleanup",
  },
  {
    name: "Project-based",
    description: "Scoped deliverable. Defined milestones.",
    hourlyRate: "$80–150",
    details: [
      "Fixed scope and deliverables",
      "Milestone-based payment",
      "6–12 week typical duration",
      "Clear success criteria upfront",
      "Code audit, architecture design, migration work",
    ],
    estimated: "$20,000–60,000+",
    use: "Specific technical initiative, migration, audit, or system redesign",
  },
];

const included = [
  "3-layer technical vetting",
  "48-hour profile matching",
  "Reference checks (2 minimum)",
  "Mission-fit interview",
  "Contracts and IP assignment",
  "Tax documentation (Deel integration)",
  "Payment processing",
  "Compliance handling",
  "Replacement guarantee (first 30 days)",
];

const comparison = [
  { feature: "Agency markup", ephemer: "0%", traditional: "20–35%" },
  { feature: "Time to hire", ephemer: "5–10 days", traditional: "8–16 weeks" },
  { feature: "Upfront costs", ephemer: "$0", traditional: "Contingency fees" },
  { feature: "Interview rounds", ephemer: "1 technical", traditional: "3–5" },
  { feature: "Profile matching", ephemer: "24–48h", traditional: "2–4 weeks" },
  { feature: "Replacement guarantee", ephemer: "30 days", traditional: "Varies" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Hire", url: `${SITE_URL}/hire` },
          { name: "Pricing", url: `${SITE_URL}/hire/pricing` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Transparent pricing. No surprises.
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          You see rates and terms before you commit. No 20–35% agency markup. No tiered pricing
          games. What you pay for is clear from the start.
        </TextBlock>
      </Section>

      {/* Pricing cards */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-carbon rounded-2xl p-8 flex flex-col hover:border-indigo-600/30 transition-colors"
            >
              <h3 className="text-lg font-700 text-snow mb-2">{tier.name}</h3>
              <p className="text-sm text-zinc-400 mb-6">{tier.description}</p>

              <div className="mb-8">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Hourly rate
                </p>
                <p className="text-3xl font-tight font-800 text-indigo-400 mb-1">{tier.hourlyRate}</p>
                <p className="text-xs text-zinc-500">Estimated monthly: {tier.estimated}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-indigo-400" />
                    <span className="text-sm text-zinc-300">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-carbon">
                <p className="text-xs text-zinc-500 mb-4">
                  <span className="font-600">Use case:</span> {tier.use}
                </p>
                <Button href="/contact#book" className="w-full">
                  Discuss pricing
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <div className="mb-10">
          <Badge variant="indigo" className="mb-4">Always included</Badge>
          <Heading as="h2" size="md" className="mb-3">
            What you get with every engagement
          </Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check size={20} className="mt-0.5 flex-shrink-0 text-indigo-400" />
              <p className="text-sm text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <Container className="px-0">
          <div className="mb-10">
            <Badge variant="indigo" className="mb-4">Comparison</Badge>
            <Heading as="h2" size="md" className="mb-3">
              Ephemer vs. traditional staffing
            </Heading>
          </div>
          <div className="border border-carbon rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-carbon bg-carbon/50">
                    <th className="text-left p-4 font-600 text-snow">Feature</th>
                    <th className="text-left p-4 font-600 text-indigo-400">Ephemer</th>
                    <th className="text-left p-4 font-600 text-zinc-400">Traditional agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-transparent" : "bg-carbon/20"}
                    >
                      <td className="p-4 text-snow">{row.feature}</td>
                      <td className="p-4 text-indigo-400 font-600">{row.ephemer}</td>
                      <td className="p-4 text-zinc-400">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-10">
          <Heading as="h2" size="md" className="mb-3">
            Pricing questions
          </Heading>
        </div>
        <div className="max-w-3xl space-y-6">
          {[
            {
              q: "Why does pricing vary by role and seniority?",
              a: "Staff-level engineers command higher rates than senior ICs. Specialized skills (Rust, ML, platform) typically cost more. Ephemer benchmarks all rates against real market bands—you are paying for actual value, not agency markup.",
            },
            {
              q: "Is there a Ephemer fee on top of hourly rate?",
              a: "No. What you see is what you pay. The rate you approve is all-inclusive—no hidden 15%, no 'platform fees,' no discovery costs. You save 20–35% compared to traditional agency models.",
            },
            {
              q: "What if I need to adjust hours or end early?",
              a: "Fractional engagements can scale to full-time. Full-time contracts typically include a 2-week notice clause for early termination. Project-based work is scoped upfront with clear milestones.",
            },
            {
              q: "Does contractor-to-hire cost extra?",
              a: "No. The 20% option means: if you trial a contractor for 2–3 months and convert to permanent hire, you pay 20% of their hourly rate as a one-time conversion fee. No additional placement fees.",
            },
            {
              q: "What about benefits, taxes, compliance?",
              a: "Ephemer uses Deel for international compliance and payment. We handle all contracts, tax forms (W-9/1099 for US, local equivalents abroad), and payment processing. Your team approves the rate and relationship—we handle the admin.",
            },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="font-600 text-snow mb-2">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Ready to hire?"
        subheading="See exact pricing for your role. Book a 15-minute call with our team."
      />
    </>
  );
}
