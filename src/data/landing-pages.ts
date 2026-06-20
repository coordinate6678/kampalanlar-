import { getCampsitesForLandingFilter } from "@/lib/landing-pages/filters";
import type { LandingFilterKey } from "@/lib/landing-pages/filters";

export interface LandingPageDefinition {
  slug: string;
  title: string;
  h1: string;
  icon: string;
  filterKey: LandingFilterKey;
  minCampsites: number;
  metaDescription: string;
  /** Kategori sayfasıyla birebir örtüşen listeler için canonical hedefi */
  canonicalPath?: string;
}

export const landingPageDefinitions: LandingPageDefinition[] = [
  {
    slug: "deniz-kenari-kamp-alanlari",
    title: "Deniz Kenarı Kamp Alanları — Türkiye Sahil Rehberi",
    h1: "Deniz Kenarı Kamp Alanları",
    icon: "🌊",
    filterKey: "deniz-kenari",
    minCampsites: 3,
    metaDescription:
      "Türkiye'deki deniz kenarı kamp alanları listesi. Ege ve Akdeniz kıyısında meltem, koy seçimi ve tesisli sahil kamp noktaları.",
    canonicalPath: "/kategori/deniz-kenari",
  },
  {
    slug: "karavan-kamp-alanlari",
    title: "Karavan Kamp Alanları — Elektrik ve Su Altyapılı Tesisler",
    h1: "Karavan Kamp Alanları",
    icon: "🚐",
    filterKey: "karavan",
    minCampsites: 3,
    metaDescription:
      "Karavanla gidilebilecek kamp alanları. Elektrik, su bağlantısı ve atık su boşaltma imkânı olan tesisler — Marmara'dan Ege'ye.",
  },
  {
    slug: "aile-dostu-kamp-alanlari",
    title: "Aile Dostu Kamp Alanları — Çocuklu Aileler İçin Tesisler",
    h1: "Aile Dostu Kamp Alanları",
    icon: "👨‍👩‍👧‍👦",
    filterKey: "aile-dostu",
    minCampsites: 3,
    metaDescription:
      "Çocuklu aileler için uygun kamp alanları. Güvenli plaj, tuvalet-duş altyapısı ve geniş çadır alanları sunan tesisler.",
  },
  {
    slug: "istanbula-yakin-kamp-alanlari",
    title: "İstanbul'a Yakın Kamp Alanları — Hafta Sonu Kaçamağı",
    h1: "İstanbul'a Yakın Kamp Alanları",
    icon: "🌲",
    filterKey: "istanbul-yakin",
    minCampsites: 3,
    metaDescription:
      "İstanbul'dan 1–4 saat mesafedeki kamp alanları. Kartepe, Abant Gölü, Assos ve Ayvalık rotaları — hafta sonu kaçamağı rehberi.",
  },
  {
    slug: "ege-kamp-alanlari",
    title: "Ege Kamp Alanları — Kıyı ve Orman Rotası",
    h1: "Ege Kamp Alanları",
    icon: "⛵",
    filterKey: "ege-region",
    minCampsites: 3,
    metaDescription:
      "Ege bölgesi kamp alanları rehberi. Çeşme, Urla, Ayvalık, Datça ve Fethiye hattında deniz kenarı ve orman kamp noktaları.",
  },
  {
    slug: "akdeniz-kamp-alanlari",
    title: "Akdeniz Kamp Alanları — Kaş, Olympos ve Kalkan",
    h1: "Akdeniz Kamp Alanları",
    icon: "☀️",
    filterKey: "akdeniz-region",
    minCampsites: 3,
    metaDescription:
      "Akdeniz kamp alanları listesi. Kaş, Kalkan, Olympos ve Adrasan hattında deniz kenarı ve dağ kamp tesisleri.",
  },
  {
    slug: "orman-kamp-alanlari",
    title: "Orman Kamp Alanları — Çam Ormanı ve Doğa Tesisleri",
    h1: "Orman Kamp Alanları",
    icon: "🌲",
    filterKey: "orman",
    minCampsites: 3,
    metaDescription:
      "Orman içi kamp alanları rehberi. Kartepe, Olympos, Kazdağı ve Alaçatı hattında gölge, serinlik ve doğa tesisleri.",
    canonicalPath: "/kategori/orman",
  },
  {
    slug: "gol-kenari-kamp-alanlari",
    title: "Göl Kenarı Kamp Alanları — Abant ve Sapanca Rotası",
    h1: "Göl Kenarı Kamp Alanları",
    icon: "🏞️",
    filterKey: "gol-kenari",
    minCampsites: 3,
    metaDescription:
      "Göl kenarı kamp alanları. Abant Gölü, Sapanca-Kartepe hattında göl manzaralı tesisli kamp noktaları ve planlama ipuçları.",
  },
  {
    slug: "ucretsiz-kamp-alanlari",
    title: "Ücretsiz Kamp Alanları — Düşük Maliyetli Doğa Tesisleri",
    h1: "Ücretsiz Kamp Alanları",
    icon: "🏕️",
    filterKey: "ucretsiz",
    minCampsites: 3,
    metaDescription:
      "Türkiye'de ücretsiz veya düşük maliyetli kamp yapılabilecek alanlar. Assos, Gökçeada ve Olympos hattında bütçe dostu tesisler.",
  },
];

export function getActiveLandingPages(): LandingPageDefinition[] {
  return landingPageDefinitions.filter((def) => {
    const count = getCampsitesForLandingFilter(def.filterKey).length;
    return count >= def.minCampsites;
  });
}

export function getLandingPageBySlug(
  slug: string
): LandingPageDefinition | undefined {
  const def = landingPageDefinitions.find((d) => d.slug === slug);
  if (!def) return undefined;
  const count = getCampsitesForLandingFilter(def.filterKey).length;
  if (count < def.minCampsites) return undefined;
  return def;
}

export function isLandingPageSlug(slug: string): boolean {
  return getLandingPageBySlug(slug) !== undefined;
}

export function getLandingPageStaticParams(): { slug: string }[] {
  return getActiveLandingPages().map((def) => ({ slug: def.slug }));
}
