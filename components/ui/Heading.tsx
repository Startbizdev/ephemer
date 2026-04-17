import { cn } from "@/lib/utils";

type Level = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: Level;
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<string, string> = {
  xl: "text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-tight",
  lg: "text-3xl md:text-4xl font-800 leading-[1.1] tracking-tight",
  md: "text-2xl md:text-3xl font-700 leading-[1.2] tracking-tight",
  sm: "text-xl md:text-2xl font-700 leading-[1.25] tracking-tight",
};

export function Heading({ as: Tag = "h2", size = "lg", children, className }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-tight text-snow",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
