import type { Metadata } from "next";
import { ArrowRight, Brain } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hire senior ML/Data engineers — MLOps, Data Engineering, LLM | Ephemer",
  description:
    "Deploy senior ML engineers, MLOps experts, and data engineers. Production ML systems, data pipelines, LLM applications.",
  alternates: { canonical: `${SITE_URL}/profiles/data-ml-ai` },
};

const specializations = [
  { title: "ML Engineers", desc: "Model training, serving, experimentation frameworks" },
  { title: "MLOps Engineers", desc: "ML pipelines, model serving, experiment tracking, data quality" },
  { title: "Data Engineers", desc: "ETL/ELT pipelines, data warehousing, real-time streaming" },
  { title: "LLM / GenAI Specialists", desc: "RAG systems, prompt engineering, fine-tuning, inference optimization" },
];

const whatTheyDo = [
  "Build production ML pipelines: data ingestion → feature engineering → model serving",
  "Own model experimentation: versioning, tracking, A/B testing",
  "Debug data quality and model degradation: monitoring, alerting, postmortems",
  "Optimize inference: latency, throughput, cost at scale",
  "Mentor data science and engineering teams on best practices",
];

export default function DataMLAIEngineersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Profiles", url: `${SITE_URL}/profiles` },
          { name: "AI/Data Engineers", url: `${SITE_URL}/profiles/data-ml-ai` },
        ])}
      />

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="indigo">Specialization</Badge>
          <Badge variant="default">6+ years ML/data systems</Badge>
        </div>
        <Heading as="h1" size="xl" className="mb-6 max-w-3xl">
          Hire senior AI and data engineers
        </Heading>
        <TextBlock size="lg" className="max-w-2xl mb-10">
          ML engineers, MLOps specialists, data engineers, LLM/GenAI experts. Production-first thinking. Hard infrastructure problems.
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
        <Heading as="h2" size="md" className="mb-8">What senior data and ML engineers deliver</Heading>
        <ul className="space-y-4 max-w-3xl">
          {whatTheyDo.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Brain size={16} className="mt-1 flex-shrink-0 text-indigo-400" />
              <span className="text-sm text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills and engagement */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Badge variant="indigo" className="mb-4">Core skills</Badge>
            <Heading as="h3" size="sm" className="mb-6">Expertise you can expect</Heading>
            <ul className="space-y-2 text-sm text-zinc-300">
              {["Python / Scala", "PyTorch / TensorFlow", "Spark / Airflow", "SQL (PostgreSQL, Snowflake, BigQuery)", "Kubernetes / Docker", "AWS SageMaker / GCP Vertex / Hugging Face"].map(
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
                <p className="text-lg font-700 text-snow">3–6 months</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Typical use case</p>
                <p className="text-lg font-700 text-snow">ML pipeline, recommendation engine, LLM integration</p>
              </div>
              <div className="border-t border-carbon pt-4">
                <p className="text-sm text-zinc-400">Rate range</p>
                <p className="text-lg font-700 text-snow">$85–145/h</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection heading="Ready to build production ML systems?" subheading="Deploy senior data and ML engineers in days." />
    </>
  );
}
