"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/ephemer/15min",
  className,
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className={className}
      style={{ minWidth: "320px", height: "700px" }}
      data-url={url}
    >
      <div
        className="calendly-inline-widget w-full h-full rounded-xl overflow-hidden border border-carbon"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
