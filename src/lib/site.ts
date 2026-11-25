export const site = {
  name: "Deutsche International School",
  shortName: "DIS Asamankese",
  motto: "Raising Future Leaders",
  town: "Asamankese",
  region: "Eastern Region, Ghana",
  domain: "https://dis-asamankese.com",
  /** Office landline or mobile, with country code, e.g. +233 20 000 0000 */
  phoneDisplay: "",
  /** Digits only for tel: links, e.g. 233200000000 */
  phoneE164: "",
  /** WhatsApp digits only, country code first, no plus, e.g. 233200000000 */
  whatsapp: "",
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
