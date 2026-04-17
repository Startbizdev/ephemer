"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-clients", label: "For clients" },
  { href: "/for-talent", label: "For talent" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-carbon bg-graphite/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-tight text-xl font-800 tracking-tight text-snow">
              ephemer
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-snow bg-carbon"
                    : "text-zinc-400 hover:text-snow hover:bg-carbon/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-500 text-snow border border-carbon rounded-lg hover:border-zinc-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact#book"
              className="px-4 py-2 text-sm font-600 text-snow bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              Book a call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-snow transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-carbon bg-graphite">
          <Container className="py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-snow bg-carbon"
                    : "text-zinc-400 hover:text-snow hover:bg-carbon/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-carbon flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-500 text-snow border border-carbon rounded-lg text-center"
              >
                Contact
              </Link>
              <Link
                href="/contact#book"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-600 text-snow bg-indigo-600 rounded-lg text-center"
              >
                Book a call
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
