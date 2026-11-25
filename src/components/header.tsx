import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const whatsapp = whatsappHref();
  return (
    <header className="border-b border-navy/10 bg-cream">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/branding/crest.png" alt="" className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-navy uppercase">{site.name}</span>
            <span className="block text-xs text-green">{site.motto}</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 font-medium text-navy hover:bg-navy/5"
            >
              {link.label}
            </Link>
          ))}
          {whatsapp ? (
            <a
              href={whatsapp}
              className="rounded-lg bg-whatsapp px-3 py-2 font-medium text-white hover:bg-whatsapp/90"
            >
              WhatsApp
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
