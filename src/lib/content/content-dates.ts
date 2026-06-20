/** Sabit içerik güncelleme tarihleri — sitemap ve metadata için */
export const SITE_CONTENT_UPDATED_AT = "2025-06-19";
export const HUB_CONTENT_UPDATED_AT = "2025-06-19";
export const CATEGORY_CONTENT_UPDATED_AT = "2025-06-19";
export const LANDING_CONTENT_UPDATED_AT = "2025-06-19";
export const EQUIPMENT_CONTENT_UPDATED_AT = "2025-06-19";
export const GUIDE_HUB_UPDATED_AT = "2025-06-19";

export function toSitemapDate(isoDate: string): Date {
  return new Date(isoDate);
}
