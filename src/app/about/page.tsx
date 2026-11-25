import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-semibold tracking-[0.2em] text-green uppercase">About</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-navy">{site.name}</h1>
      <p className="mt-4 text-xl text-orange">{site.motto}</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-navy/80">
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
          <p className="mt-3">
            A welcome from the Head of School will be published here. Until then, this page is only a
            short introduction to DIS.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy">Campus</h2>
          <p className="mt-3">Photographs of the school will be added here with parent consent.</p>
          <div className="mt-5 flex justify-center rounded-2xl border border-dashed border-navy/20 bg-white p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/branding/crest.png" alt="" className="h-28 w-28 object-contain opacity-80" />
          </div>
        </section>
      </div>
    </div>
  );
}
