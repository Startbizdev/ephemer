import { getCityBySlug, getCitySlugs, cities } from "./cities";
import { getRoleBySlug, roles } from "./roles";

/** Cities pre-rendered for role × city SEO pages (aligned with sitemap). */
export const LONG_TAIL_CITY_SLUGS = [
  "san-francisco",
  "new-york",
  "austin",
  "miami",
  "seattle",
  "los-angeles",
  "boston",
  "chicago",
  "denver",
  "atlanta",
  "portland",
  "raleigh",
  "nashville",
  "phoenix",
  "minneapolis",
  "san-diego",
  "salt-lake-city",
  "washington-dc",
] as const;

export type HireSlugParsed =
  | { kind: "remote-engineers-city"; citySlug: string }
  | { kind: "role-remote"; roleSlug: string }
  | { kind: "role-city"; roleSlug: string; citySlug: string };

/**
 * Resolves /hire-… URLs. Must run before getRoleBySlug / getCityBySlug in pages
 * (order: hub hire-remote-engineers-* before *-remote).
 */
export function parseHireSlug(slug: string): HireSlugParsed | null {
  const hubPrefix = "hire-remote-engineers-";
  if (slug.startsWith(hubPrefix)) {
    const citySlug = slug.slice(hubPrefix.length);
    if (getCityBySlug(citySlug)) {
      return { kind: "remote-engineers-city", citySlug };
    }
    return null;
  }

  if (!slug.startsWith("hire-")) return null;
  const afterHire = slug.slice("hire-".length);

  if (afterHire.endsWith("-remote")) {
    const roleSlug = afterHire.slice(0, -"-remote".length);
    if (getRoleBySlug(roleSlug)) {
      return { kind: "role-remote", roleSlug };
    }
    return null;
  }

  const citySlugsSorted = [...getCitySlugs()].sort((a, b) => b.length - a.length);
  for (const citySlug of citySlugsSorted) {
    const suffix = `-${citySlug}`;
    if (!afterHire.endsWith(suffix)) continue;
    const roleSlug = afterHire.slice(0, -suffix.length);
    if (!roleSlug) continue;
    if (getRoleBySlug(roleSlug) && getCityBySlug(citySlug)) {
      return { kind: "role-city", roleSlug, citySlug };
    }
  }
  return null;
}

export function getStaticHireSlugParams(): Array<{ slug: string }> {
  const slugs = new Set<string>();
  for (const r of roles) {
    slugs.add(`hire-${r.slug}-remote`);
  }
  for (const c of cities) {
    slugs.add(`hire-remote-engineers-${c.slug}`);
  }
  for (const r of roles) {
    for (const c of LONG_TAIL_CITY_SLUGS) {
      slugs.add(`hire-${r.slug}-${c}`);
    }
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}
