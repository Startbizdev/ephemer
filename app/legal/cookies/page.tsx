import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookie Policy — Ephemer",
  alternates: { canonical: `${SITE_URL}/legal/cookies` },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <Heading as="h1" size="lg" className="mb-8">
          Cookie Policy
        </Heading>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div>
            <h2 className="font-600 text-snow mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small files stored on your device that help websites remember your preferences and usage
              patterns.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <p className="font-500 text-snow">Essential Cookies</p>
                <p>Required for website function (session management, security). You cannot opt out.</p>
              </div>
              <div>
                <p className="font-500 text-snow">Analytics Cookies</p>
                <p>
                  Google Analytics to understand how you use our site. No personally identifiable data. You can opt out
                  via your browser settings.
                </p>
              </div>
              <div>
                <p className="font-500 text-snow">Marketing Cookies</p>
                <p>Limited use. We do not use invasive tracking or cross-site cookies for ads.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">Managing Cookies</h2>
            <p>
              You can disable cookies in your browser settings. This may limit site functionality. For opt-out of
              analytics, visit your browser settings or contact privacy@ephemer.co.
            </p>
          </div>

          <div>
            <h2 className="font-600 text-snow mb-3">Third-Party Services</h2>
            <p>
              We use Deel (compliance), Ashby/Spott (ATS), and Google Analytics. These services may place their own
              cookies. See their privacy policies for details.
            </p>
          </div>

          <div className="border-t border-carbon pt-6 mt-6">
            <p className="text-xs text-zinc-500">Last updated: April 2025</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
