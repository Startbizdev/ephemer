import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Badge } from "@/components/ui/Badge";
import { roles } from "@/lib/roles";
import { cn } from "@/lib/utils";

export type RoleLinksVariant = "home" | "hub" | "editorial" | "compact";

const COPY: Record<
  RoleLinksVariant,
  { badge?: string; title: string; intro: string; showBadge: boolean }
> = {
  home: {
    badge: "Roles",
    title: "Browse by engineering role",
    intro:
      "Every profile in the network is senior-only. Open a role to see how Ephemer vets talent and what remote engagement looks like for that track.",
    showBadge: true,
  },
  hub: {
    badge: "Roles",
    title: "Every senior role we staff remotely",
    intro:
      "Select a track to read scope, core skills, and how we match engineers to your stack and timeline.",
    showBadge: true,
  },
  editorial: {
    badge: "Hiring",
    title: "Roles Ephemer places",
    intro:
      "From platform reliability to product engineering, anchor your search on the discipline you need — then we match against your roadmap.",
    showBadge: true,
  },
  compact: {
    title: "Engineering roles",
    intro: "",
    showBadge: false,
  },
};

interface RoleLinksSectionProps {
  variant: RoleLinksVariant;
  /** Hide link to this role slug (e.g. current role-remote page). */
  excludeSlug?: string;
  className?: string;
  /** Use Section wrapper; set false when embedding inside another Section. */
  withSection?: boolean;
}

export function RoleLinksSection({
  variant,
  excludeSlug,
  className,
  withSection = true,
}: RoleLinksSectionProps) {
  const c = COPY[variant];
  const list = excludeSlug ? roles.filter((r) => r.slug !== excludeSlug) : roles;

  const grid = (
    <div
      className={cn(
        "grid gap-2",
        variant === "compact" ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {list.map((role) => (
        <Link
          key={role.slug}
          href={`/hire-${role.slug}-remote`}
          className="flex items-center justify-between p-4 border border-carbon rounded-xl hover:border-zinc-600 hover:bg-carbon/30 transition-all group"
        >
          <div>
            <p className="text-sm font-500 text-snow">{role.title}</p>
            <p className="text-xs text-zinc-500 mt-0.5 font-mono">{role.seniorityLabel}</p>
          </div>
          <ArrowRight size={14} className="text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
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
