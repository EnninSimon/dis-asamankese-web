import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "../../public/fonts/NotoSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NotoSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
});

const display = localFont({
  src: [{ path: "../../public/fonts/NotoSerifDisplay-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} · ${site.town}`,
    template: `%s · ${site.shortName}`,
  },
  description: `${site.name} in ${site.town}, ${site.region}. ${site.motto}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
