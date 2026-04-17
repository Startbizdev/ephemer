import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HireRoleCityView } from "@/components/pages/hire/HireRoleCityView";
import { HireRoleRemoteView } from "@/components/pages/hire/HireRoleRemoteView";
import { HireRemoteEngineersCityView } from "@/components/pages/hire/HireRemoteEngineersCityView";
import { getCityBySlug } from "@/lib/cities";
import { getRoleBySlug } from "@/lib/roles";
import { SITE_URL } from "@/lib/seo";
import { getStaticHireSlugParams, parseHireSlug } from "@/lib/hireSlug";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getStaticHireSlugParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseHireSlug(params.slug);
  if (!parsed) return {};

  if (parsed.kind === "remote-engineers-city") {
    const city = getCityBySlug(parsed.citySlug);
    if (!city) return {};
    return {
      title: `Hire remote engineers in ${city.name} — Ephemer`,
      description: `${city.name} startups hire senior engineers through Ephemer. Vetted contract engineers deployed in days, not months. No recruiter overhead.`,
      alternates: { canonical: `${SITE_URL}/hire-remote-engineers-${city.slug}` },
      keywords: [
        `hire engineers ${city.name}`,
        `remote engineers ${city.name}`,
        `contract engineers ${city.name}`,
        `senior software engineers ${city.name}`,
        `startup hiring ${city.name}`,
      ],
    };
  }

  if (parsed.kind === "role-remote") {
    const role = getRoleBySlug(parsed.roleSlug);
    if (!role) return {};
    return {
      title: `Hire a remote ${role.title} — Ephemer`,
      description: `Hire a senior remote ${role.title} for your US startup. Ephemer deploys vetted ${role.plural} within days. No agency fees, no bloated hiring timelines.`,
      alternates: { canonical: `${SITE_URL}/hire-${role.slug}-remote` },
      keywords: [
        `hire remote ${role.title.toLowerCase()}`,
        `remote ${role.title.toLowerCase()}`,
        `contract ${role.title.toLowerCase()} remote`,
        `senior ${role.title.toLowerCase()} remote`,
        `hire ${role.title.toLowerCase()} startup`,
      ],
    };
  }

  const role = getRoleBySlug(parsed.roleSlug);
  const city = getCityBySlug(parsed.citySlug);
  if (!role || !city) return {};

  return {
    title: `Hire a ${role.title} in ${city.name} — Ephemer`,
    description: `${city.name} startups hire ${role.plural} through Ephemer. Vetted, senior engineers deployed in days. No agency fees, no bloated hiring cycles.`,
    alternates: { canonical: `${SITE_URL}/hire-${role.slug}-${city.slug}` },
    keywords: [
      `hire ${role.title.toLowerCase()} ${city.name}`,
      `${role.title.toLowerCase()} ${city.name}`,
      `contract ${role.title.toLowerCase()} ${city.name}`,
      `senior ${role.title.toLowerCase()} ${city.name}`,
      `startup ${role.title.toLowerCase()} ${city.name}`,
    ],
  };
}

export default function HireLongTailPage({ params }: Props) {
  const parsed = parseHireSlug(params.slug);
  if (!parsed) notFound();

  if (parsed.kind === "remote-engineers-city") {
    const city = getCityBySlug(parsed.citySlug);
    if (!city) notFound();
    return <HireRemoteEngineersCityView city={city} />;
  }

  if (parsed.kind === "role-remote") {
    const role = getRoleBySlug(parsed.roleSlug);
    if (!role) notFound();
    return <HireRoleRemoteView role={role} />;
  }

  const role = getRoleBySlug(parsed.roleSlug);
  const city = getCityBySlug(parsed.citySlug);
  if (!role || !city) notFound();
  return <HireRoleCityView role={role} city={city} />;
}
