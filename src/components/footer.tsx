import Link from "next/link";
import { mapsHref, site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  const whatsapp = whatsappHref();
  const tel = telHref();
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-cream/80">{site.motto}</p>
          <p className="mt-2 text-sm text-cream/80">
            {site.town}, {site.region}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Visit</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <a href={mapsHref()} className="hover:underline" target="_blank" rel="noreferrer">
                Map
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Talk to us</p>
          <ul className="mt-2 space-y-1">
            {tel ? (
              <li>
                <a href={tel} className="hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
            ) : null}
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            {whatsapp ? (
              <li>
                <a href={whatsapp} className="hover:underline">
                  WhatsApp
                </a>
              </li>
            ) : (
              <li className="text-cream/70">WhatsApp number to be added</li>
            )}
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-cream/60">
        © {site.name}, {site.town}
      </p>
    </footer>
  );
}
