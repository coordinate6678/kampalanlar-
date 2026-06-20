const DISTRICT_LINK_VARIANTS = [
  (name: string) => `${name} kamp rehberi`,
  (name: string) => `${name}'da kamp yapılacak yerler`,
  (name: string) => `${name} ilçesi kamp rotası`,
  (name: string) => `${name} çadır ve karavan noktaları`,
];

const PROVINCE_LINK_VARIANTS = [
  (name: string) => `${name} kamp yerleri`,
  (name: string) => `${name} il rehberi`,
  (name: string) => `${name}'da kamp rotaları`,
];

const NEIGHBOR_LINK_VARIANTS = [
  (name: string) => `${name} yakını`,
  (name: string) => `${name} kamp alanları`,
  (name: string) => `${name} rotası`,
];

const CATEGORY_LINK_VARIANTS = [
  (name: string) => `${name} kamp tesisleri`,
  (name: string) => `${name} rehberi`,
];

function pickVariant<T extends (name: string) => string>(
  variants: T[],
  name: string,
  seed = 0
): string {
  return variants[Math.abs(seed) % variants.length](name);
}

/** Liste/kart başlıkları için (H2/H3) */
export function getKampAlaniLinkText(yerIsmi: string): string {
  return `${yerIsmi} Kamp Alanları`;
}

export function getDistrictLinkLabel(name: string, seed = 0): string {
  return pickVariant(DISTRICT_LINK_VARIANTS, name, seed);
}

export function getProvinceLinkLabel(name: string, seed = 0): string {
  return pickVariant(PROVINCE_LINK_VARIANTS, name, seed);
}

export function getNeighborLinkLabel(name: string, seed = 0): string {
  return pickVariant(NEIGHBOR_LINK_VARIANTS, name, seed);
}

export function getCategoryLinkLabel(name: string, seed = 0): string {
  return pickVariant(CATEGORY_LINK_VARIANTS, name, seed);
}

export function getCampsiteHubLinkLabel(
  campsiteName: string,
  seed = 0
): string {
  const variants = [
    () => `${campsiteName} detayları`,
    () => `${campsiteName} kamp rehberi`,
    () => `${campsiteName} — rezervasyon ve ulaşım`,
  ];
  return variants[Math.abs(seed) % variants.length]();
}
