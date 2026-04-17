import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Section } from "@/components/layout/Section";

interface HeroProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  metrics?: Array<{ value: string; label: string }>;
}

export function Hero({
  eyebrow,
  heading,
  subheading,
  primaryCta = { label: "Book a 15-min call", href: "/contact#book" },
  secondaryCta = { label: "See how it works", href: "/how-it-works" },
  metrics,
}: HeroProps) {
  return (
    <Section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-3xl animate-[fadeUp_0.5s_ease-out_both]">
        {eyebrow && (
          <Badge variant="indigo" className="mb-6">
            {eyebrow}
          </Badge>
        )}

        <Heading as="h1" size="xl" className="mb-6">
          {heading}
        </Heading>

        <TextBlock size="lg" className="mb-10 max-w-2xl">
          {subheading}
        </TextBlock>

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

      {metrics && (
        <div className="mt-20 pt-10 border-t border-carbon grid grid-cols-2 md:grid-cols-4 gap-8 animate-[fadeIn_0.5s_ease-out_0.3s_both]">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="font-tight text-3xl font-extrabold text-snow mb-1">{m.value}</p>
              <p className="text-sm text-zinc-400">{m.label}</p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
