import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HireRoleRemoteView } from "@/components/pages/hire/HireRoleRemoteView";
import { getRoleBySlug, roles } from "@/lib/roles";
import { buildLongTailMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return roles.map((r) => ({ slug: `hire-${r.slug}-remote` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseHireRoleSlug(params.slug);
  if (!parsed) return {};

  const role = getRoleBySlug(parsed.roleSlug);
  if (!role) return {};
  return buildLongTailMetadata(role);
}

function parseHireRoleSlug(slug: string): { roleSlug: string } | null {
  if (!slug.startsWith("hire-") || !slug.endsWith("-remote")) return null;
  const roleSlug = slug.slice("hire-".length, -"-remote".length);
  return roleSlug ? { roleSlug } : null;
}

export default function HireRoleRemotePage({ params }: Props) {
  const parsed = parseHireRoleSlug(params.slug);
  if (!parsed) notFound();

  const role = getRoleBySlug(parsed.roleSlug);
  if (!role) notFound();

  return <HireRoleRemoteView role={role} />;
}
