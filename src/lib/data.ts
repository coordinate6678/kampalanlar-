import { campsites } from "@/data/campsites";
import type { Campsite } from "@/lib/types";
import {
  getAllDistricts,
  getAllProvinces,
  getDistrictBySlug,
  getDistrictsByProvince,
  getDistrictStaticParams,
  getFooterRegions,
  getHiddenGems,
  getNeighborDistricts,
  getPopularProvinces,
  getProvinceBySlug,
  getProvinceStaticParams,
} from "@/lib/iller";

export {
  getAllProvinces,
  getProvinceBySlug,
  getPopularProvinces,
  getDistrictsByProvince,
  getDistrictBySlug,
  getAllDistricts,
  getHiddenGems,
  getFooterRegions,
  getProvinceStaticParams,
  getDistrictStaticParams,
  getNeighborDistricts,
};

export function getCampsitesByDistrict(
  provinceSlug: string,
  districtSlug: string
): Campsite[] {
  return campsites.filter(
    (c) => c.provinceSlug === provinceSlug && c.districtSlug === districtSlug
  );
}

export function getCampsitesByProvince(provinceSlug: string): Campsite[] {
  return campsites.filter((c) => c.provinceSlug === provinceSlug);
}

export function getCampsiteBySlug(
  provinceSlug: string,
  districtSlug: string,
  slug: string
): Campsite | undefined {
  return campsites.find(
    (c) =>
      c.provinceSlug === provinceSlug &&
      c.districtSlug === districtSlug &&
      c.slug === slug
  );
}

export function getAllCampsites(): Campsite[] {
  return campsites;
}

export function getRecentCampsites(limit = 6): Campsite[] {
  return [...campsites]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}

export function getFeaturedCampsites(limit = 6): Campsite[] {
  const rated = [...campsites]
    .filter((c) => c.reviewCount > 0)
    .sort((a, b) => {
      const scoreA = a.rating * Math.log10(a.reviewCount + 1);
      const scoreB = b.rating * Math.log10(b.reviewCount + 1);
      return scoreB - scoreA;
    });

  const featured = rated.slice(0, limit);
  if (featured.length >= limit) return featured;

  const seen = new Set(
    featured.map((c) => `${c.provinceSlug}-${c.districtSlug}-${c.slug}`)
  );
  const recent = getRecentCampsites(limit).filter(
    (c) => !seen.has(`${c.provinceSlug}-${c.districtSlug}-${c.slug}`)
  );

  return [...featured, ...recent].slice(0, limit);
}

export function getNearbyCampsites(
  campsite: Campsite,
  limit = 4
): Campsite[] {
  return campsites
    .filter(
      (c) =>
        c.slug !== campsite.slug &&
        (c.districtSlug === campsite.districtSlug ||
          c.provinceSlug === campsite.provinceSlug)
    )
    .slice(0, limit);
}

export function searchCampsites(query: string): Campsite[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return campsites.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.shortDescription.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
  );
}

export function getCampsiteStaticParams(): {
  il: string;
  ilce: string;
  slug: string;
}[] {
  return campsites.map((c) => ({
    il: c.provinceSlug,
    ilce: c.districtSlug,
    slug: c.slug,
  }));
}

export function getCampsiteCountByDistrict(
  provinceSlug: string,
  districtSlug: string
): number {
  return getCampsitesByDistrict(provinceSlug, districtSlug).length;
}

export function getCampsiteCountByProvince(provinceSlug: string): number {
  return getCampsitesByProvince(provinceSlug).length;
}

export function getCampsitesByCategory(categorySlug: string): Campsite[] {
  return campsites.filter((c) => c.category === categorySlug);
}

export function getCategoryStaticParams(): { slug: string }[] {
  return [
    "deniz-kenari",
    "dag",
    "orman",
    "kislik",
    "festival",
    "karavan",
    "bungalov",
  ].map((slug) => ({ slug }));
}
