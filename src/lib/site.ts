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
