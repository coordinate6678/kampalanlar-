import { PLACE } from "@/data/media/place-images";

export interface InlineAdContent {
  sponsor: string;
  title: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
}

const defaultAd: InlineAdContent = {
  sponsor: "Sponsorlu",
  title: "Türkiye Kamp Rotaları Rehberi",
  description: "İl ve ilçe bazında kamp alanlarını keşfedin, rotanızı planlayın.",
  image: PLACE.datca,
  imageAlt: "Datça kamp rotası",
  href: "/kamp-alanlari/mugla/datca",
  ctaLabel: "İncele",
};

export const INLINE_ADS: Record<string, InlineAdContent> = {
  "content-leaderboard": {
    sponsor: "Sponsorlu",
    title: "Rota Bozcaada — Ada Kamp Deneyimi",
    price: "1.690 ₺",
    originalPrice: "1.725 ₺",
    image: PLACE.gokceadaKardamos,
    imageAlt: "Gökçeada sahil kamp manzarası",
    href: "/kamp-alanlari/canakkale/gokceada",
    ctaLabel: "Siteye git",
  },
  "content-leaderboard-2": {
    sponsor: "Sponsorlu",
    title: "Kaş Kaputaş Koyu Kamp Turu",
    price: "2.450 ₺",
    originalPrice: "2.890 ₺",
    image: PLACE.kaputas,
    imageAlt: "Kaş Kaputaş plajı",
    href: "/kamp-alanlari/antalya/kas",
    ctaLabel: "Siteye git",
  },
  "content-leaderboard-3": {
    sponsor: "Sponsorlu",
    title: "Kabak Koyu — Likya Kıyısı Kamp Paketi",
    price: "1.290 ₺",
    image: PLACE.kabakBeach,
    imageAlt: "Kabak Koyu kamp alanı",
    href: "/kamp-alanlari/mugla/fethiye/kabak-koyu-kamp",
    ctaLabel: "Siteye git",
  },
  "content-leaderboard-4": {
    sponsor: "Sponsorlu",
    title: "Abant Gölü Karavan Kamp Hafta Sonu",
    price: "890 ₺",
    originalPrice: "990 ₺",
    image: PLACE.lakeSapanca,
    imageAlt: "Göl kenarı kamp manzarası",
    href: "/kamp-alanlari/bolu/mudurnu",
    ctaLabel: "Siteye git",
  },
};

export function getInlineAd(slot: string): InlineAdContent {
  return INLINE_ADS[slot] ?? defaultAd;
}
