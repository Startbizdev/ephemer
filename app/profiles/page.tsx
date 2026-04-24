import type { Metadata } from "next";
import { ArrowRight, Code, Zap, Brain, Lightbulb } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profiles — Engineer roles and expertise | Ephemer",
  description:
    "Four core engineer profiles we staff: Software engineers (backend, frontend, fullstack), Infrastructure engineers (DevOps, SRE), AI/Data engineers, and Product engineers. Senior-only expertise.",
  alternates: { canonical: `${SITE_URL}/profiles` },
};

const profiles = [
  {
    href: "/profiles/engineers",
    icon: Code,
    title: "Software Engineers",
    subtitle: "Backend, Frontend, Fullstack, Mobile",
    description:
      "Core feature delivery. Backend systems, frontend architecture, fullstack builders. From API scale to user experience, we match engineers across your stack.",
    skills: ["Python", "Go", "Node", "React", "Vue", "Rust", "Kotlin", "Swift"],
    seniority: "Senior, Staff, Lead",
  },
  {
    href: "/profiles/devops-sre",
    icon: Zap,
    title: "Infrastructure Engineers",
    subtitle: "DevOps, SRE, Platform, Security",
    description:
      "Systems reliability and platform. Kubernetes, CI/CD pipelines, cloud infrastructure, incident response. Engineers who keep your foundation solid.",
    skills: ["Kubernetes", "Terraform", "AWS/GCP/Azure", "Golang", "Python", "Security"],
    seniority: "Senior, Staff, Lead",
  },
  {
    href: "/profiles/data-ml-ai",
    icon: Brain,
    title: "AI/Data Engineers",
    subtitle: "ML Engineering, MLOps, Data Engineering, LLM/RAG",
    description:
      "Machine learning and data infrastructure. From model training to production serving, from data pipelines to LLM applications. Hard infrastructure problems.",
    skills: ["Python", "PyTorch", "TensorFlow", "SQL", "Spark", "Airflow", "Ray", "Llama/GPT APIs"],
    seniority: "Senior, Staff, Lead",
  },
  {
    href: "/profiles/product",
    icon: Lightbulb,
    title: "Product Engineers",
    subtitle: "Product Engineers, PMs, Technical PMs",
    description:
      "Product-minded engineers and technical leaders. Bridge between engineering and product. Embedded in teams, owning features, shaping product decisions.",
    skills: ["Full-stack depth", "Product thinking", "SQL", "Analytics", "Leadership", "Design"],
    seniority: "Senior, Lead, Staff, Manager",
  },
];

export default function ProfilesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Profiles", url: `${SITE_URL}/profiles` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Four core engineer profiles we staff
        </Heading>
        <TextBlock size="lg" className="max-w-2xl">
          Senior-only expertise across backend, frontend, infrastructure, data, and product
          engineering. Pick a profile to learn more about the discipline, vetting process, and how
          we match to your mission.
        </TextBlock>
      </Section>

      {/* Profile cards */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <Link key={profile.href} href={profile.href}>
                <div className="border border-carbon rounded-2xl p-8 h-full hover:border-indigo-600/30 hover:bg-carbon/20 transition-all cursor-pointer group">
                  <div className="mb-4 inline-block p-3 bg-carbon rounded-lg group-hover:bg-indigo-900/30 transition-colors">
                    <Icon size={24} className="text-indigo-400" />
                  </div>

                  <h3 className="text-xl font-700 text-snow mb-1">{profile.title}</h3>
                  <p className="text-sm text-indigo-400 font-600 mb-4">{profile.subtitle}</p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">{profile.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                      Core skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="inline-block px-2 py-1 text-xs bg-carbon rounded text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {profile.skills.length > 4 && (
                        <span className="inline-block px-2 py-1 text-xs bg-carbon rounded text-zinc-500">
                          +{profile.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-carbon">
                    <p className="text-xs text-zinc-500">{profile.seniority}</p>
                    <ArrowRight
                      size={16}
                      className="text-zinc-600 group-hover:text-indigo-400 transition-colors"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* About vetting */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="indigo" className="mb-4">Vetting</Badge>
            <Heading as="h2" size="md" className="mb-4">
              How we validate every profile
            </Heading>
            <TextBlock className="mb-6">
              Senior-only is not a title—it is evidence. Every engineer you see has passed technical
              assessment, reference validation, and mission-fit review.
            </TextBlock>
            <ul className="space-y-3">
              {[
                "CoderByte technical challenge (stack-specific)",
                "2+ reference checks (recent managers/peers)",
                "Seniority signal validation",
                "Mission-fit conversation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Minimum experience
                </p>
                <p className="text-2xl font-tight font-800 text-snow">6+ years</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Profiles assessed
                </p>
                <p className="text-2xl font-tight font-800 text-snow">100K+</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Network update
                </p>
                <p className="text-sm text-zinc-300">Continuous from Skill Hunter 10y+ network</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why profiles matter */}
      <Section>
        <Heading as="h2" size="md" className="mb-8 text-center">
          Why profiles help you hire faster
        </Heading>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Clear skill anchors",
              description:
                "Know exactly what expertise you need. Platform engineer vs. backend engineer vs. fullstack. Saves weeks of vague job descriptions.",
            },
            {
              title: "Proven vetting scope",
              description:
                "We know what 'senior in this role' means. Technical bar, typical salary bands, skill stack. No surprises after hire.",
            },
            {
              title: "Faster matching",
              description:
                "Profile selection narrows our network search. Instead of 100K+ candidates, we filter to 5K specialists. Results in 48 hours.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-carbon rounded-xl p-6">
              <p className="font-600 text-snow mb-3">{item.title}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Pick a profile and brief us"
        subheading="Tell us which discipline you need. We'll match senior engineers within 48 hours."
      />
    </>
  );
}
