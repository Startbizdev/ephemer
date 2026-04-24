import Link from "next/link";
import { Linkedin } from "@/components/icons/Linkedin";
import { Container } from "./Container";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/about/network", label: "Our network" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ],
  Services: [
    { href: "/hire", label: "For clients" },
    { href: "/talent", label: "For talent" },
    { href: "/profiles", label: "Profiles" },
  ],
  Resources: [
    { href: "/hire/pricing", label: "Pricing" },
    { href: "/hire/case-studies", label: "Case studies" },
    { href: "/hire-backend-engineer-remote", label: "Backend engineers" },
    { href: "/hire-ml-engineer-remote", label: "ML engineers" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-carbon mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <span className="font-tight text-xl font-800 tracking-tight text-snow">
                ephemer
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Senior engineers, deployed fast. Seed to Series C startups build
              elite teams without recruiter overhead.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ephemer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-snow transition-colors"
                aria-label="Ephemer on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@ephemer.co"
                className="text-sm text-zinc-500 hover:text-snow transition-colors font-mono"
              >
                contact@ephemer.co
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-600 uppercase tracking-widest text-zinc-500 mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-snow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-carbon flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Ephemer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms
            </Link>
            <Link href="/legal/cookies" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
