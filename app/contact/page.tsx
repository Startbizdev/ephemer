import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Ephemer",
  description:
    "Get in touch with the Ephemer team. Have questions about hiring, joining our network, or anything else? We'd love to hear from you.",
  alternates: { canonical: "https://www.ephemer.co/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        heading="Let's talk"
        subheading="Have questions about hiring engineers, joining our network, or anything else? Reach out and we'll get back to you within 24 hours."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Heading as="h2" size="md" className="mb-6">
              Send us a message
            </Heading>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-500 text-snow mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 bg-carbon border border-carbon rounded-lg text-snow placeholder-zinc-500 focus:outline-none focus:border-indigo-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-500 text-snow mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 bg-carbon border border-carbon rounded-lg text-snow placeholder-zinc-500 focus:outline-none focus:border-indigo-600 transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-500 text-snow mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-carbon border border-carbon rounded-lg text-snow placeholder-zinc-500 focus:outline-none focus:border-indigo-600 transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-500 text-snow mb-2">
                  What can we help with?
                </label>
                <select
                  className="w-full px-4 py-2.5 bg-carbon border border-carbon rounded-lg text-snow focus:outline-none focus:border-indigo-600 transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="hire">Hire engineers</option>
                  <option value="join">Join our network</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-500 text-snow mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2.5 bg-carbon border border-carbon rounded-lg text-snow placeholder-zinc-500 focus:outline-none focus:border-indigo-600 transition-colors resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-snow font-600 rounded-lg transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <Heading as="h2" size="md" className="mb-6">
                Other ways to reach us
              </Heading>
            </div>

            {/* Email */}
            <div className="border border-carbon rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-600 text-snow mb-1">Email</h3>
                  <p className="text-sm text-zinc-400 mb-3">
                    For general inquiries
                  </p>
                  <a
                    href="mailto:hello@ephemer.co"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-500 transition-colors"
                  >
                    hello@ephemer.co
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="border border-carbon rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-600 text-snow mb-1">Phone</h3>
                  <p className="text-sm text-zinc-400 mb-3">
                    Schedule a call with us
                  </p>
                  <Link
                    href="/contact/book-call"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-500 transition-colors flex items-center gap-1"
                  >
                    Book a call <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="border border-indigo-900/30 bg-indigo-900/10 rounded-lg p-6">
              <h3 className="font-600 text-snow mb-2">Response time</h3>
              <p className="text-sm text-zinc-400">
                We typically respond to all inquiries within 24 business hours. For urgent matters, consider booking a call instead.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
