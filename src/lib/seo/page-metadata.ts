import { metaDescription } from "@/lib/seo";

export function buildProvincePageTitle(provinceName: string): string {
  return `${provinceName} Kamp Yerleri ve İlçe Rehberi`;
}

export function buildProvincePageDescription(
  provinceName: string,
  intro: string,
  campsiteCount: number,
  districtCount: number
): string {
  const detail =
    campsiteCount > 0
      ? `${campsiteCount} kamp noktası, ulaşım ve harita bilgileri.`
      : `${districtCount} ilçe rehberi ve bölge ipuçları.`;

  return metaDescription(
    `${provinceName} genelinde kamp yapılacak yerler. ${intro} ${detail}`
  );
}

export function buildDistrictPageTitle(
  districtName: string,
  provinceName: string
): string {
  return `${districtName}'ta Kamp Yapılacak Yerler — ${provinceName}`;
}

export function buildDistrictPageDescription(
  districtName: string,
  provinceName: string,
  intro: string,
  campsiteCount: number
): string {
  const detail =
    campsiteCount > 0
      ? `${campsiteCount} tesis, harita, ulaşım ve kamp ipuçları.`
      : "Bölge rehberi, harita ve planlama önerileri.";

  return metaDescription(
    `${districtName}, ${provinceName} kamp rotası. ${intro} ${detail}`
  );
}

export function buildCategoryPageTitle(categoryName: string): string {
  return `${categoryName} Kamp Tesisleri — Türkiye Rehberi`;
}

export function buildCategoryPageDescription(
  categoryName: string,
  intro: string,
  campsiteCount: number
): string {
  const detail =
    campsiteCount > 0
      ? `${campsiteCount} tesis listeleniyor.`
      : "Bölge önerileri ve kamp ipuçları.";

  return metaDescription(
    `${categoryName} kamp seçenekleri. ${intro} ${detail}`
  );
}

export function buildCampsitePageTitle(
  campsiteName: string,
  districtName: string
): string {
  return `${campsiteName} — ${districtName} Kamp Rehberi`;
}

export function buildCampsitePageDescription(
  campsiteName: string,
  districtName: string,
  provinceName: string,
  shortDescription: string
): string {
  return metaDescription(
    `${campsiteName}: ${districtName}, ${provinceName}. ${shortDescription} Özellikler, ulaşım, harita ve kamp ipuçları.`
  );
}

export function buildHubPageTitle(): string {
  return "Türkiye Kamp Alanları — İl ve İlçe Rehberi";
}

export function buildHubPageDescription(campsiteCount: number): string {
  return metaDescription(
    `Türkiye'nin ${campsiteCount}+ kamp noktasını il, ilçe ve kategori bazında keşfedin. Çadır, karavan ve bungalov seçenekleri tek rehberde.`
  );
}
