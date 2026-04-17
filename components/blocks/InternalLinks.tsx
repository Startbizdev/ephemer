import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InternalLink {
  href: string;
  label: string;
  description?: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  className?: string;
}

export function InternalLinks({ title, links, className }: InternalLinksProps) {
  return (
    <div className={cn("border-t border-carbon pt-10", className)}>
      {title && (
        <p className="text-xs font-600 uppercase tracking-widest text-zinc-500 mb-5 font-mono">
          {title}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-400 border border-carbon rounded-lg hover:text-snow hover:border-zinc-600 transition-colors"
          >
            {link.label}
            <ArrowRight size={12} />
          </Link>
        ))}
      </div>
    </div>
  );
}
