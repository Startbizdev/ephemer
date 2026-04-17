import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Section } from "@/components/layout/Section";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTASection({
  heading = "Ready to deploy senior engineers?",
  subheading = "Book a 15-minute intro call. No pitch deck, no fluff — just a direct conversation about your hiring needs.",
  primaryCta = { label: "Book a 15-min call", href: "/contact#book" },
  secondaryCta = { label: "See how it works", href: "/how-it-works" },
}: CTASectionProps) {
  return (
    <Section className="py-24">
      <div className="border border-carbon rounded-2xl p-10 md:p-16 max-w-3xl">
        <Heading as="h2" size="lg" className="mb-4">
          {heading}
        </Heading>
        <TextBlock className="mb-8 max-w-lg">{subheading}</TextBlock>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
            <ArrowRight size={16} />
          </Button>
          <Button href={secondaryCta.href} variant="secondary" size="lg">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
