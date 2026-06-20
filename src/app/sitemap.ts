import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import {
  getAllProvinces,
  getAllDistricts,
  getAllCampsites,
} from "@/lib/data";
import { categories } from "@/data/categories";
import { equipmentItems } from "@/data/equipment";
import { guides } from "@/data/guides";
import { getActiveLandingPages } from "@/lib/landing-pages";
import { getAllCorporatePages } from "@/data/corporate-pages";
import { getCampsiteUpdatedAt } from "@/lib/campsite-utils";
import {
  CATEGORY_CONTENT_UPDATED_AT,
  EQUIPMENT_CONTENT_UPDATED_AT,
  GUIDE_HUB_UPDATED_AT,
  HUB_CONTENT_UPDATED_AT,
  LANDING_CONTENT_UPDATED_AT,
  SITE_CONTENT_UPDATED_AT,
  toSitemapDate,
} from "@/lib/content/content-dates";
import { getGuideContent } from "@/lib/content/guides";
import { GUIDE_UPDATED_AT } from "@/lib/content/guides/constants";
import {
  isDistrictIndexable,
  isProvinceIndexable,
} from "@/lib/seo/indexability";

function maxCampsiteDate(
  campsites: ReturnType<typeof getAllCampsites>
): Date {
  if (campsites.length === 0) return toSitemapDate(SITE_CONTENT_UPDATED_AT);
  const timestamps = campsites.map((c) =>
    toSitemapDate(getCampsiteUpdatedAt(c)).getTime()
  );
  return new Date(Math.max(...timestamps));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const allCampsites = getAllCampsites();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: toSitemapDate(SITE_CONTENT_UPDATED_AT),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/kamp-alanlari`,
      lastModified: toSitemapDate(HUB_CONTENT_UPDATED_AT),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    ...categories.map((cat) => ({
      url: `${base}/kategori/${cat.slug}`,
      lastModified: toSitemapDate(CATEGORY_CONTENT_UPDATED_AT),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    {
      url: `${base}/kamp-ekipmanlari`,
      lastModified: toSitemapDate(EQUIPMENT_CONTENT_UPDATED_AT),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...equipmentItems.map((item) => ({
      url: `${base}/kamp-ekipmanlari/${item.slug}`,
      lastModified: toSitemapDate(EQUIPMENT_CONTENT_UPDATED_AT),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/rehberler`,
      lastModified: toSitemapDate(GUIDE_HUB_UPDATED_AT),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...guides.map((guide) => ({
      url: `${base}/rehberler/${guide.slug}`,
      lastModified: toSitemapDate(
        getGuideContent(guide.slug)?.updatedAt ?? GUIDE_UPDATED_AT
      ),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getActiveLandingPages().map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified: toSitemapDate(LANDING_CONTENT_UPDATED_AT),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...getAllCorporatePages().map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified: toSitemapDate(page.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const provincePages: MetadataRoute.Sitemap = getAllProvinces()
    .filter((province) => isProvinceIndexable(province.slug))
    .map((province) => {
      const provinceCamps = allCampsites.filter(
        (c) => c.provinceSlug === province.slug
      );
      return {
        url: `${base}/kamp-alanlari/${province.slug}`,
        lastModified: maxCampsiteDate(provinceCamps),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };
    });

  const districtPages: MetadataRoute.Sitemap = getAllDistricts()
    .filter((district) =>
      isDistrictIndexable(district.provinceSlug, district.slug)
    )
    .map((district) => {
      const districtCamps = allCampsites.filter(
        (c) =>
          c.provinceSlug === district.provinceSlug &&
          c.districtSlug === district.slug
      );
      return {
        url: `${base}/kamp-alanlari/${district.provinceSlug}/${district.slug}`,
        lastModified: maxCampsiteDate(districtCamps),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  const campsitePages: MetadataRoute.Sitemap = allCampsites
    .filter((campsite) =>
      isDistrictIndexable(campsite.provinceSlug, campsite.districtSlug)
    )
    .map((campsite) => ({
      url: `${base}/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}/${campsite.slug}`,
      lastModified: toSitemapDate(getCampsiteUpdatedAt(campsite)),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...provincePages, ...districtPages, ...campsitePages];
}
