import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export default function Home() {
  const whatsapp = whatsappHref();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-green uppercase">{site.town}</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight text-navy md:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl text-orange">{site.motto}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-navy/80">
            A school in {site.town}, {site.region}. This site is the school’s public home. Admissions,
            academics and term dates will be added next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-lg bg-navy px-5 text-sm font-medium text-cream hover:bg-navy/90"
            >
              About DIS
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-lg border border-navy/20 bg-white px-5 text-sm font-medium text-navy hover:bg-navy/5"
            >
              Contact
            </Link>
            {whatsapp ? (
              <a
                href={whatsapp}
                className="inline-flex h-11 items-center rounded-lg bg-whatsapp px-5 text-sm font-medium text-white hover:bg-whatsapp/90"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
        <div className="flex justify-center rounded-3xl border border-navy/10 bg-white p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/branding/crest.png"
            alt={`${site.name} crest`}
            className="h-56 w-56 object-contain md:h-64 md:w-64"
          />
        </div>
      </div>
    </div>
  );
}
