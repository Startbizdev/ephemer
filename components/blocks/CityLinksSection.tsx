import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { cities } from "@/lib/cities";
import { cn } from "@/lib/utils";

export type CityLinksVariant = "home" | "hub" | "editorial" | "compact";

const COPY: Record<
  CityLinksVariant,
  { badge?: string; title: string; intro: string; showBadge: boolean }
> = {
  home: {
    badge: "Locations",
    title: "Hiring context by city",
    intro:
      "Each hub page covers local compensation bands, ecosystem notes, and how Ephemer deploys senior engineers to startups in that market.",
    showBadge: true,
  },
  hub: {
    badge: "Locations",
    title: "Hire remote engineers by city",
    intro:
      "Explore market-specific insights — hiring difficulty, dominant sectors, and typical senior comp — before you brief a role.",
    showBadge: true,
  },
  editorial: {
    badge: "Markets",
    title: "Where Ephemer works with startups",
    intro:
      "We support founders in major US tech hubs. Pick a city to understand the local engineering landscape and link to role-specific pages.",
    showBadge: true,
  },
  compact: {
    title: "Cities",
    intro: "",
    showBadge: false,
  },
};

interface CityLinksSectionProps {
  variant: CityLinksVariant;
  excludeSlug?: string;
  className?: string;
  withSection?: boolean;
}

export function CityLinksSection({
  variant,
  excludeSlug,
  className,
  withSection = true,
}: CityLinksSectionProps) {
  const c = COPY[variant];
  const list = excludeSlug ? cities.filter((x) => x.slug !== excludeSlug) : cities;

  const grid = (
    <div
      className={cn(
        "grid gap-2",
        variant === "compact" ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {list.map((city) => (
        <Link
          key={city.slug}
          href={`/hire-remote-engineers-${city.slug}`}
          className="flex items-center gap-2 p-3.5 border border-carbon rounded-xl hover:border-zinc-600 hover:bg-carbon/30 transition-all group"
        >
          <MapPin size={13} className="text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-500 text-snow truncate">{city.name}</p>
            <p className="text-xs text-zinc-500 font-mono">{city.state}</p>
          </div>
          <ArrowRight size={12} className="text-zinc-600 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </Link>
      ))}
    </div>
  );

  const head = (
    <div className={cn("mb-10", variant === "compact" && "mb-6")}>
      {c.showBadge && c.badge && (
        <Badge variant="indigo" className="mb-4">
          {c.badge}
        </Badge>
      )}
      <Heading as="h2" size={variant === "compact" ? "sm" : "md"} className="mb-4">
        {c.title}
      </Heading>
      {c.intro ? (
        <TextBlock className={cn("max-w-xl", variant === "compact" && "text-sm")}>{c.intro}</TextBlock>
      ) : null}
    </div>
  );

  if (!withSection) {
    return (
      <div>
        {head}
        {grid}
      </div>
    );
  }

  return (
    <Section className={variant === "compact" ? "pt-0 pb-8" : undefined}>
      {head}
      {grid}
    </Section>
  );
}
