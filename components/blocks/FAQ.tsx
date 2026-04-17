"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-carbon last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-500 text-snow text-sm md:text-base group-hover:text-indigo-200 transition-colors">
          {item.q}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            "flex-shrink-0 text-zinc-500 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-zinc-400 leading-relaxed pb-5 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="border border-carbon rounded-xl divide-y-0 overflow-hidden">
      <div className="divide-y divide-carbon">
        {items.map((item) => (
          <div key={item.q} className="px-6">
            <FAQRow item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export type { FAQItem };
