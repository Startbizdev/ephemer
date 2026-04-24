import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Insights on hiring and engineering | Ephemer",
  description: "Engineering hiring trends, liquid talent, startup culture, and technical insights from the Ephemer team.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const posts = [
  {
    slug: "why-contractors-win",
    title: "Why contractors win for startups",
    excerpt: "Permanent hiring takes months. Contractors deploy in days. Here's when each model makes sense.",
    date: "2025-04-15",
    category: "Hiring",
  },
  {
    slug: "senior-engineer-signal",
    title: "What 'senior engineer' actually means",
    excerpt: "It's not a title. It's a decision-making pattern. How to hire for it.",
    date: "2025-04-08",
    category: "Engineering",
  },
  {
    slug: "remote-first-infrastructure",
    title: "Building remote-first teams",
    excerpt: "Async, ownership, written specs. What makes distributed teams actually work.",
    date: "2025-03-30",
    category: "Culture",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Engineering insights
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          Hiring trends, liquid talent, engineering culture, and lessons from placing 100+ engineers.
        </TextBlock>
      </Section>

      {/* Posts */}
      <Section className="pt-0">
        <div className="space-y-8 max-w-3xl">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="border border-carbon rounded-xl p-8 hover:border-indigo-600/30 hover:bg-carbon/20 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="default">{post.category}</Badge>
                  <span className="text-xs text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-700 text-snow mb-3 group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-indigo-400 group-hover:gap-3 transition-all">
                  Read more
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter signup or CTA */}
      <Section>
        <div className="border border-carbon rounded-2xl p-12 text-center bg-carbon/30">
          <Heading as="h2" size="md" className="mb-4">
            Get engineering insights
          </Heading>
          <TextBlock className="max-w-xl mx-auto mb-6">
            Weekly thoughts on hiring, remote work, and startup execution. Straight from the Ephemer team.
          </TextBlock>
          <Button href="/contact">Subscribe to updates</Button>
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Ready to hire?" subheading="Deploy senior engineers in days. Brief us now." />
    </>
  );
}
