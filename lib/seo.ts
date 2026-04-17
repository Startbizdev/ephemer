import type { Metadata } from "next";
import type { CityData } from "./cities";
import type { RoleData } from "./roles";

export const SITE_URL = "https://www.ephemer.co";
export const SITE_NAME = "Ephemer";
export const SITE_DESCRIPTION =
  "Ephemer deploys senior engineers into US startups within days. Seed to Series C teams hire contract and fractional engineers without recruiter overhead.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

/** Set to `false` after long-form content on role×city URLs is validated for indexation. */
export const PROGRAMMATIC_ROLE_CITY_NOINDEX = true;

// ─── Root metadata ────────────────────────────────────────────────────────────

export function buildMetadata(override: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Ephemer — Senior engineers, deployed fast",
      template: "%s | Ephemer",
    },
    description: SITE_DESCRIPTION,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ephemer_co",
    },
    alternates: { canonical: SITE_URL },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    ...override,
  };
}

// ─── City hub metadata ────────────────────────────────────────────────────────

function hiringDifficultyTier(city: CityData): "extreme" | "very_high" | "high" | "moderate" {
  const h = city.hiringDifficulty.toLowerCase();
  if (h.startsWith("extreme")) return "extreme";
  if (h.startsWith("very high")) return "very_high";
  if (h.startsWith("high")) return "high";
  return "moderate";
}

/** Diversified meta descriptions for /hire-remote-engineers-[city]. */
export function buildCityListingDescription(city: CityData): string {
  const tier = hiringDifficultyTier(city);
  if (tier === "extreme") {
    return `${city.name}'s ${city.avgSalary} market makes senior hiring brutal for lean startups. Ephemer deploys pre-vetted contract engineers in days — no six-month searches, no contingency recruiter markup.`;
  }
  if (tier === "very_high") {
    return `Competing in ${city.name} without a FAANG recruiting team? Ephemer matches startups with senior contract engineers within 48 hours, with rates benchmarked to local bands like ${city.avgSalary}.`;
  }
  if (tier === "high") {
    return `${city.name} founders use Ephemer to staff senior engineers before roadmaps slip. Transparent engagement terms, elite technical vetting, remote-first delivery with hybrid options when you need them.`;
  }
  return `Explore ${city.name} startup hiring dynamics and deploy senior contract engineers through Ephemer — comp context ${city.avgSalary}, sector focus ${city.topSectors.slice(0, 3).join(", ")}.`;
}

export function buildCityMetadata(city: CityData): Metadata {
  const title = `Hire remote engineers in ${city.name} — Ephemer`;
  const description = buildCityListingDescription(city);

  return buildMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/hire-remote-engineers-${city.slug}`,
    },
    alternates: { canonical: `${SITE_URL}/hire-remote-engineers-${city.slug}` },
  });
}

// ─── Long-tail metadata ───────────────────────────────────────────────────────

export function buildRoleCityMetaDescription(role: RoleData, city: CityData): string {
  const n = (role.slug.length + city.slug.charCodeAt(0)) % 3;
  if (n === 0) {
    return `Hire a senior ${role.title} in ${city.name}. Ephemer matches ${role.plural} vetted on ${role.skills.slice(0, 3).join(", ")} — local rate context ${city.avgSalary}, no agency markup.`;
  }
  if (n === 1) {
    return `${city.name} startups: deploy a ${role.title} on contract in days. Ephemer surfaces ${role.plural} with production depth in your stack; typical ${city.name} bands around ${city.avgSalary}.`;
  }
  return `Need ${role.plural} in ${city.name}? Brief Ephemer on your roadmap; we return matched senior profiles fast. ${city.hiringDifficulty.split(".")[0]}.`;
}

export function buildRoleRemoteMetaDescription(role: RoleData): string {
  const n = role.slug.length % 3;
  if (n === 0) {
    return `Hire a remote ${role.title} for your US startup. Ephemer deploys ${role.plural} with proven ${role.skills.slice(0, 4).join(", ")} experience — contract or fractional.`;
  }
  if (n === 1) {
    return `Senior remote ${role.title} on demand: Ephemer vets every profile on domain skills (${role.skills.slice(0, 3).join(", ")}) and startup execution. No contingency recruiters.`;
  }
  return `US startups hire remote ${role.plural} through Ephemer in under two weeks from brief. Transparent rates, senior-only network, flexible engagement lengths.`;
}

export function buildLongTailMetadata(
  role: RoleData,
  city?: CityData
): Metadata {
  const title = city
    ? `Hire a ${role.title} in ${city.name} — Ephemer`
    : `Hire a remote ${role.title} — Ephemer`;
  const description = city
    ? buildRoleCityMetaDescription(role, city)
    : buildRoleRemoteMetaDescription(role);
  const slug = city
    ? `/hire-${role.slug}-${city.slug}`
    : `/hire-${role.slug}-remote`;

  const robots: Metadata["robots"] =
    city && PROGRAMMATIC_ROLE_CITY_NOINDEX
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } };

  return buildMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${slug}`,
    },
    alternates: { canonical: `${SITE_URL}${slug}` },
    robots,
  });
}

// ─── JSON-LD helpers ──────────────────────────────────────────────────────────

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ephemer",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@ephemer.co",
      contactType: "customer support",
    },
    sameAs: ["https://www.linkedin.com/company/ephemer"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ephemer",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Contract Engineering Placement",
    provider: {
      "@type": "Organization",
      name: "Ephemer",
      url: SITE_URL,
    },
    serviceType: "Engineering Talent Placement",
    areaServed: { "@type": "Country", name: "United States" },
    description:
      "Ephemer places senior software engineers with US startups on contract and fractional engagements. No recruiters. No bloat.",
  };
}

export function cityProfessionalServiceJsonLd(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Ephemer — Senior engineers for ${city.name} startups`,
    provider: {
      "@type": "Organization",
      name: "Ephemer",
      url: SITE_URL,
    },
    serviceType: "Contract Engineering Placement",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
    description: `Senior contract engineers for ${city.name} startups — deployed within days. ${city.ecosystem.slice(0, 120)}…`,
  };
}

export function roleOccupationJsonLd(role: RoleData, context?: { city?: CityData }) {
  const place = context?.city
    ? `${context.city.name}, ${context.city.state}`
    : "United States (remote)";
  return {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: role.title,
    description: role.whatTheyDo.slice(0, 280),
    skills: role.skills.join(", "),
    occupationalLocation: {
      "@type": "Place",
      name: place,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
