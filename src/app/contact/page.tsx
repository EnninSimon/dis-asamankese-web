import type { Metadata } from "next";
import { mapsHref, site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const whatsapp = whatsappHref();
  const tel = telHref();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-semibold tracking-[0.2em] text-green uppercase">Contact</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-navy">Visit or write to us</h1>
      <p className="mt-4 text-navy/80">
        {site.name} is in {site.town}, {site.region}. Use WhatsApp for the fastest reply once the office
        number is on this page.
      </p>

      <dl className="mt-10 space-y-6 text-sm">
        <div>
          <dt className="font-semibold text-navy">Address</dt>
          <dd className="mt-1 text-navy/80">
            {site.name}
            <br />
            {site.town}, {site.region}
          </dd>
          <dd className="mt-2">
            <a href={mapsHref()} className="font-medium text-green underline" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Email</dt>
          <dd className="mt-1">
            <a href={`mailto:${site.email}`} className="text-green underline">
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Phone</dt>
          <dd className="mt-1 text-navy/80">
            {tel ? (
              <a href={tel} className="text-green underline">
                {site.phoneDisplay}
              </a>
            ) : (
              "Office number will be published here."
            )}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">WhatsApp</dt>
          <dd className="mt-3">
            {whatsapp ? (
              <a
                href={whatsapp}
                className="inline-flex h-11 items-center rounded-lg bg-whatsapp px-5 text-sm font-medium text-white hover:bg-whatsapp/90"
              >
                Message on WhatsApp
              </a>
            ) : (
              <p className="text-navy/80">
                Send the school WhatsApp number and it will appear as a button here and in the header.
              </p>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
