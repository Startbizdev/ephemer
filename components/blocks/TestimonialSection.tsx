import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function TestimonialSection() {
  return (
    <Section>
      <Container className="px-0">
        <div className="border border-carbon rounded-2xl p-8 md:p-12 bg-carbon/50">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-snow mb-6">
              "Ephemer supported us following our first $20M fundraising round to build our product
              team. Thanks to their expertise, we recruited a Frontend React expert, formerly at
              Datadog. This hire was critical to the development of our generative AI product.
              Ephemer's commitment and precision were decisive in making this recruitment a success."
            </p>
            <footer>
              <p className="font-600 text-snow">Julien</p>
              <p className="text-sm text-zinc-400">CEO, Adaptive ML</p>
            </footer>
          </blockquote>
        </div>
      </Container>
    </Section>
  );
}
