import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getCitySlugs } from "@/lib/cities";
import { LONG_TAIL_CITY_SLUGS } from "@/lib/hireSlug";
import { getRoleSlugs } from "@/lib/roles";

const citySlugs = getCitySlugs();
const roleSlugs = getRoleSlugs();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/for-clients`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/for-talent`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/hire-remote-engineers`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  ];

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${SITE_URL}/hire-remote-engineers-${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const longTailRemote: MetadataRoute.Sitemap = roleSlugs.map((role) => ({
    url: `${SITE_URL}/hire-${role}-remote`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const longTailCity: MetadataRoute.Sitemap = roleSlugs.flatMap((role) =>
    LONG_TAIL_CITY_SLUGS.map((city) => ({
      url: `${SITE_URL}/hire-${role}-${city}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticPages, ...cityPages, ...longTailRemote, ...longTailCity];
}
