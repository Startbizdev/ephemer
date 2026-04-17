import type { Metadata } from "next";
import type { CityData } from "./cities";
import type { RoleData } from "./roles";

export const SITE_URL = "https://www.ephemer.co";
export const SITE_NAME = "Ephemer";
export const SITE_DESCRIPTION =
  "Ephemer deploys senior engineers into US startups within days. Seed to Series C teams hire contract and fractional engineers without recruiter overhead.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

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

export function buildCityMetadata(city: CityData): Metadata {
  const title = `Hire remote engineers in ${city.name} — Ephemer`;
  const description = `${city.name} startups use Ephemer to hire senior engineers without a recruiter. Deploy vetted contract engineers in days, not months.`;

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

export function buildLongTailMetadata(
  role: RoleData,
  city?: CityData
): Metadata {
  const location = city ? city.name : "remote";
  const title = city
    ? `Hire a ${role.title} in ${city.name} — Ephemer`
    : `Hire a remote ${role.title} — Ephemer`;
  const description = city
    ? `${city.name} startups hire ${role.plural} through Ephemer. Senior, vetted engineers available on contract — no agency overhead, no bloated timelines.`
    : `Hire a senior ${role.title} remotely. Ephemer deploys vetted engineers within days for US startups at Seed through Series C.`;
  const slug = city
    ? `/hire-${role.slug}-${city.slug}`
    : `/hire-${role.slug}-remote`;

  return buildMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${slug}`,
    },
    alternates: { canonical: `${SITE_URL}${slug}` },
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
    areaServed: "US",
    description:
      "Ephemer places senior software engineers with US startups on contract and fractional engagements. No recruiters. No bloat.",
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
