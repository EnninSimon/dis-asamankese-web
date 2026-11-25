import type { Metadata } from "next";
import Link from "next/link";
import { campusDemoPhotos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-sm font-semibold tracking-[0.2em] text-green uppercase">About</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-navy">{site.name}</h1>
      <p className="mt-4 text-xl text-orange">{site.motto}</p>

      <div className="mt-10 max-w-3xl space-y-8 text-base leading-7 text-navy/80">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy">Who we are</h2>
          <p className="mt-3">
            Deutsche International School is a school in {site.town}, {site.region}. We exist to raise
            children who can learn well, live well, and lead with character.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy">Where we are</h2>
          <p className="mt-3">
            The campus is in {site.town}. Parents and visitors can reach us from the{" "}
            <Link href="/contact" className="font-medium text-green underline">
              Contact
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy">A word from the Head of School</h2>
          <blockquote className="mt-4 rounded-2xl border border-navy/10 bg-white px-6 py-5">
            <p>
              A welcome from the Head of School will be published here. Paste the letter in chat and it
              will replace this note.
            </p>
          </blockquote>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy">Campus</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-navy/80">
          These pictures are <strong>demo photographs from the internet</strong>, not DIS. They stand in
          until the school sends campus photos taken with consent. No children&apos;s faces are used here
          on purpose.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {campusDemoPhotos.map((photo) => (
            <li key={photo.src} className="overflow-hidden rounded-xl bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} className="h-44 w-full object-cover" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
