import type { Metadata } from "next";
import { ArrowRight, Zap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hire senior infrastructure engineers — DevOps, SRE, Platform | Ephemer",
  description:
    "Deploy senior DevOps, SRE, platform, and security engineers. Kubernetes, CI/CD, cloud infrastructure, incident response.",
  alternates: { canonical: `${SITE_URL}/profiles/devops-sre` },
};

const specializations = [
  { title: "DevOps Engineers", desc: "CI/CD, deployment automation, infrastructure-as-code" },
  { title: "SRE / Platform Engineers", desc: "Incident response, observability, system reliability" },
  { title: "Cloud Architects", desc: "AWS/GCP/Azure design, cost optimization, scaling" },
  { title: "Security Engineers", desc: "Vulnerability response, compliance, hardening" },
];

const whatTheyDo = [
  "Own deployment pipelines: code commit → production with confidence",
  "Incident response: on-call, debugging, postmortems",
  "Infrastructure-as-code: Terraform, Kubernetes, declarative everything",
  "Observability: metrics, logs, traces, alerting that actually help",
  "Scaling: from handling 10K users → 1M without 3x costs",
];

export default function InfraEngineersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Profiles", url: `${SITE_URL}/profiles` },
          { name: "Infrastructure Engineers", url: `${SITE_URL}/profiles/devops-sre` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="indigo">Specialization</Badge>
          <Badge variant="default">6+ years infrastructure</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire senior infrastructure engineers
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          DevOps, SRE, platform, security. Engineers who own reliability, deployment automation,
          and incident response.
        </TextBlock>
        <Button href="/contact#book" size="lg">
          Hire now
          <ArrowRight size={16} />
        </Button>
      </Section>

      {/* Specializations */}
      <Section className="pt-0">
        <Heading as="h2" size="md" className="mb-8">Specializations</Heading>
        <div className="grid md:grid-cols-2 gap-6">
          {specializations.map((spec) => (
            <div key={spec.title} className="border border-carbon rounded-xl p-6">
              <p className="font-600 text-snow mb-2">{spec.title}</p>
              <p className="text-sm text-zinc-400">{spec.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What they do */}
      <Section>
        <Heading as="h2" size="md" className="mb-8">What senior infra engineers deliver</Heading>
        <ul className="space-y-4 max-w-3xl">
          {whatTheyDo.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Zap size={16} className="mt-1 flex-shrink-0 text-indigo-400" />
              <span className="text-sm text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills and timeline */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Badge variant="indigo" className="mb-4">Core skills</Badge>
            <Heading as="h3" size="sm" className="mb-6">Expertise you can expect</Heading>
            <ul className="space-y-2 text-sm text-zinc-300">
              {["Kubernetes / Docker", "Terraform / CloudFormation", "AWS / GCP / Azure", "CI/CD (GitHub Actions, GitLab, Jenkins)", "Go / Python / Bash", "PostgreSQL / MySQL / Redis"].map(
                (skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="border border-carbon rounded-xl p-8 bg-carbon/30">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">Typical engagement</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Duration</p>
                <p className="text-lg font-700 text-snow">2–4 months</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Ramp time</p>
                <p className="text-lg font-700 text-snow">1–2 weeks (infrastructure expertise is portable)</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Rate range</p>
                <p className="text-lg font-700 text-snow">$75–135/h</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Ready to hire infrastructure talent?" subheading="Unblock your infrastructure roadmap in days, not months." />
    </>
  );
}
