import { cn } from "@/lib/utils";

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "md" | "sm";
  muted?: boolean;
}

export function TextBlock({ children, className, size = "md", muted = false }: TextBlockProps) {
  const sizeClass = {
    lg: "text-lg leading-relaxed",
    md: "text-base leading-relaxed",
    sm: "text-sm leading-relaxed",
  }[size];

  return (
    <p
      className={cn(
        sizeClass,
        muted ? "text-zinc-400" : "text-zinc-300",
        className
      )}
    >
      {children}
    </p>
  );
}
