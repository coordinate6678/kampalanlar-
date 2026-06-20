import { districtExtendedContent } from "@/lib/content/district-content";
import { districtSupplementContent } from "@/lib/content/district-supplement-content";
import { provinceExtendedContent } from "@/lib/content/province-content";
import { provinceSupplementContent } from "@/lib/content/province-supplement-content";
import { campsiteSeoContent } from "@/lib/content/campsite-content";
import { campsiteSupplementContent } from "@/lib/content/campsite-supplement-content";
import { splitDescription } from "@/lib/content/campsite-seo";
import type { Campsite } from "@/lib/types";

export function getProvinceContent(slug: string, fallback: string): string[] {
  const base = provinceExtendedContent[slug]?.paragraphs ?? [fallback];
  const extra = provinceSupplementContent[slug]?.paragraphs ?? [];
  return [...base, ...extra];
}

export function getDistrictContent(
  provinceSlug: string,
  districtSlug: string,
  fallback: string
): string[] {
  const key = `${provinceSlug}/${districtSlug}`;
  const base = districtExtendedContent[key]?.paragraphs ?? [fallback];
  const extra = districtSupplementContent[key]?.paragraphs ?? [];
  return [...base, ...extra];
}

export function getCampsiteSeoExtra(slug: string) {
  return campsiteSeoContent[slug] ?? null;
}

export function getCampsiteFullContent(
  campsite: Campsite,
  provinceName: string,
  districtName: string
): {
  mainParagraphs: string[];
  extraParagraphs: string[];
  bestSeason: string | null;
  tips: string[];
  nearbyAttractions: string[];
  campType: string | null;
  suitableFor: string | null;
  transport: string;
} {
  const extra = campsiteSeoContent[campsite.slug];
  const supplement = campsiteSupplementContent[campsite.slug];
  return {
    mainParagraphs: splitDescription(campsite.description),
    extraParagraphs: extra?.extraParagraphs ?? [
      `${campsite.name}, ${districtName} (${provinceName}) bölgesinde ${campsite.category.replace(/-/g, " ")} kategorisinde listelenen kamp alanlarından biridir. ${campsite.shortDescription}`,
      `${districtName} kamp alanları arasında ${campsite.rating} puan ve ${campsite.reviewCount} değerlendirme ile öne çıkan ${campsite.name}; ulaşım, tesis özellikleri ve konum bilgileri bu sayfada güncel olarak sunulmaktadır.`,
    ],
    bestSeason:
      extra?.bestSeason ??
      `${districtName} bölgesinde kamp için mayıs-haziran ve eylül-ekim ayları genellikle en dengeli dönemlerdir. Yaz aylarında deniz suyu sıcaklığı yüksektir; hafta sonları yoğunluk artabilir.`,
    tips: extra?.tips ?? [
      "Rezervasyon ve güncel fiyat bilgisi için gitmeden önce tesisle iletişime geçin.",
      "Gece sıcaklığı düşebileceğinden katmanlı giyim ve uyku tulumu seçimine dikkat edin.",
      "Çöpünüzü geri götürün; doğaya saygılı kamp kurallarına uyun.",
      "Harita ve ulaşım bilgilerini yola çıkmadan kontrol edin.",
    ],
    nearbyAttractions: extra?.nearbyAttractions ?? [
      `${districtName} çevresindeki doğal ve tarihî noktalar`,
      `${provinceName} ilindeki diğer kamp alanları`,
      "Yürüyüş rotaları ve seyir terasları",
    ],
    campType: extra?.campType ?? supplement?.campType ?? null,
    suitableFor: extra?.suitableFor ?? supplement?.suitableFor ?? null,
    transport:
      extra?.transportExtended ??
      supplement?.transportExtended ??
      campsite.transport,
  };
}
