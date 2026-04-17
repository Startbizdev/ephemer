import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HireRoleCityView } from "@/components/pages/hire/HireRoleCityView";
import { HireRoleRemoteView } from "@/components/pages/hire/HireRoleRemoteView";
import { HireRemoteEngineersCityView } from "@/components/pages/hire/HireRemoteEngineersCityView";
import { getCityBySlug } from "@/lib/cities";
import { getRoleBySlug } from "@/lib/roles";
import { buildCityMetadata, buildLongTailMetadata } from "@/lib/seo";
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
    return buildCityMetadata(city);
  }

  if (parsed.kind === "role-remote") {
    const role = getRoleBySlug(parsed.roleSlug);
    if (!role) return {};
    return buildLongTailMetadata(role);
  }

  const role = getRoleBySlug(parsed.roleSlug);
  const city = getCityBySlug(parsed.citySlug);
  if (!role || !city) return {};

  return buildLongTailMetadata(role, city);
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
