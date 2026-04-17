import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { CalendlyEmbed } from "@/components/blocks/CalendlyEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Book a 15-min call | Ephemer",
  description:
    "Book a 15-minute intro call with Ephemer. Tell us what you are building and what you need. No pitch deck. Direct conversation.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ])}
      />

      <Section className="pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <Badge variant="indigo" className="mb-6">Get in touch</Badge>
            <Heading as="h1" size="lg" className="mb-6">
              Book a 15-minute intro call
            </Heading>
            <TextBlock className="mb-8">
              No pitch deck. No sales process. A direct conversation about your
              engineering needs, your timeline, and whether Ephemer is the right fit.
            </TextBlock>

            <div className="flex flex-col gap-4 mb-10">
              {[
                "You tell us what you need to build",
                "We tell you what we can match",
                "If there is a fit, we move to profiling within 48h",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-indigo-900 bg-indigo-900/20 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-indigo-400">{i + 1}</span>
                  </span>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-carbon">
              <Mail size={16} className="text-zinc-500" />
              <a
                href="mailto:contact@ephemer.co"
                className="text-sm text-zinc-400 hover:text-snow transition-colors font-mono"
              >
                contact@ephemer.co
              </a>
            </div>
          </div>

          {/* Right: Calendly */}
          <div id="book">
            <CalendlyEmbed url="https://calendly.com/ephemer/15min" />
          </div>
        </div>
      </Section>
    </>
  );
}
