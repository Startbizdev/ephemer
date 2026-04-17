// No fake logos — this component renders tech stack badges only
import { Badge } from "@/components/ui/Badge";

interface LogoStripProps {
  label?: string;
  items: string[];
}

export function LogoStrip({ label, items }: LogoStripProps) {
  return (
    <div className="py-8 border-y border-carbon">
      {label && (
        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-4">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="default">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
