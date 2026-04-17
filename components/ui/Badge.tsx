import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "indigo" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-500 rounded-md font-mono",
        {
          "bg-carbon text-zinc-400 border border-zinc-700": variant === "default",
          "bg-indigo-900/40 text-indigo-200 border border-indigo-900": variant === "indigo",
          "bg-transparent text-zinc-400 border border-carbon": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
