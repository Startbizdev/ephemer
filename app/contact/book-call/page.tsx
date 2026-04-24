import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Calendar, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a call — Ephemer",
  description:
    "Schedule a call with the Ephemer team. Pick a time that works for you and let's discuss your engineering needs.",
  alternates: { canonical: "https://www.ephemer.co/contact/book-call" },
};

export default function BookCallPage() {
  return (
    <>
      <Hero
        eyebrow="Schedule time with us"
        heading="Book a call"
        subheading="Pick a time that works for you. We'll discuss your engineering needs and how Ephemer can help."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="border border-carbon rounded-lg p-6">
            <Calendar className="w-6 h-6 text-indigo-400 mb-4" />
            <h3 className="font-600 text-snow mb-2">Flexible scheduling</h3>
            <p className="text-sm text-zinc-400">
              Pick from available time slots that fit your calendar.
            </p>
          </div>

          <div className="border border-carbon rounded-lg p-6">
            <Clock className="w-6 h-6 text-indigo-400 mb-4" />
            <h3 className="font-600 text-snow mb-2">30 minutes</h3>
            <p className="text-sm text-zinc-400">
              Focused conversation to understand your needs.
            </p>
          </div>

          <div className="border border-carbon rounded-lg p-6">
            <Users className="w-6 h-6 text-indigo-400 mb-4" />
            <h3 className="font-600 text-snow mb-2">Direct access</h3>
            <p className="text-sm text-zinc-400">
              Talk to someone from the Ephemer leadership team.
            </p>
          </div>
        </div>

        <Container className="px-0">
          <div className="border border-carbon rounded-2xl p-8 md:p-12 bg-graphite/40">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <Heading as="h2" size="md" className="mb-4">
                Calendly integration
              </Heading>
              <TextBlock>
                We use Calendly for scheduling. Click the button below to book your time.
              </TextBlock>
            </div>

            <div className="flex justify-center">
              <a
                href="https://calendly.com/ephemer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-snow font-600 rounded-lg transition-colors inline-block"
              >
                Open calendar
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
