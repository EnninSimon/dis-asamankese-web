export const site = {
  name: "Deutsche International School",
  shortName: "DIS Asamankese",
  motto: "Raising Future Leaders",
  town: "Asamankese",
  region: "Eastern Region, Ghana",
  domain: "https://dis-asamankese.com",
  phoneDisplay: "+233 24 421 2481",
  phoneE164: "233244212481",
  whatsapp: "233244212481",
  email: "info@dis-asamankese.com",
  mapSearch: "Deutsche International School Asamankese",
};

export function telHref() {
  return site.phoneE164 ? `tel:+${site.phoneE164}` : null;
}

export function whatsappHref() {
  if (!site.whatsapp) return null;
  const text = encodeURIComponent(`Hello ${site.shortName}, I would like to know more about the school.`);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function mapsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapSearch)}`;
}

/** Demo pictures only. Replace files in public/about/ with DIS campus photos. */
export const campusDemoPhotos = [
  { src: "/about/demo-01.jpg", alt: "Demo: school building and grounds" },
  { src: "/about/demo-02.jpg", alt: "Demo: campus building" },
  { src: "/about/demo-03.jpg", alt: "Demo: library shelves" },
  { src: "/about/demo-04.jpg", alt: "Demo: writing at a desk" },
  { src: "/about/demo-05.jpg", alt: "Demo: empty lecture room" },
  { src: "/about/demo-06.jpg", alt: "Demo: classroom books and tablet" },
  { src: "/about/demo-07.jpg", alt: "Demo: stack of books" },
  { src: "/about/demo-08.jpg", alt: "Demo: library gallery" },
];
