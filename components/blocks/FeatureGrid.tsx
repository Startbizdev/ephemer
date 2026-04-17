import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  bordered?: boolean;
}

export function FeatureGrid({ features, columns = 3, bordered = true }: FeatureGridProps) {
  const gridClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div
      className={cn(
        "grid gap-px bg-carbon",
        gridClass,
        bordered && "border border-carbon rounded-xl overflow-hidden"
      )}
    >
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-graphite p-6 hover:bg-carbon/40 transition-colors group"
        >
          <div className="mb-4 inline-flex p-2 border border-carbon rounded-lg group-hover:border-zinc-600 transition-colors">
            <feature.icon size={18} className="text-indigo-400" strokeWidth={1.5} />
          </div>
          <h3 className="font-tight font-bold text-snow text-base mb-2">{feature.title}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export type { Feature };
