import type { Campsite } from "@/lib/types";
import {
  CAMPSITE_IMAGES,
  getDistrictImage,
  getProvinceImage,
  HERO_IMAGE,
} from "@/data/media/place-images";

export {
  CAMPSITE_IMAGES,
  getDistrictImage,
  getProvinceImage,
  HERO_IMAGE,
};

/** @deprecated Yerel görseller için PLACE / place-images.ts kullanın */
export const IMAGES = {
  camp: HERO_IMAGE,
  beach: HERO_IMAGE,
  mountain: HERO_IMAGE,
  coast: HERO_IMAGE,
  sunset: HERO_IMAGE,
  lake: HERO_IMAGE,
  cliffSea: HERO_IMAGE,
  ancient: HERO_IMAGE,
  plateau: HERO_IMAGE,
  cityNature: HERO_IMAGE,
  snowMountain: HERO_IMAGE,
  groupCamp: HERO_IMAGE,
  greenNature: HERO_IMAGE,
  tropical: HERO_IMAGE,
  alpine: HERO_IMAGE,
  forestTrail: HERO_IMAGE,
  pine: HERO_IMAGE,
  forest: HERO_IMAGE,
  valley: HERO_IMAGE,
} as const;

export function enrichCampsiteImages(campsite: Campsite): Campsite {
  const images = CAMPSITE_IMAGES[campsite.slug];
  return images ? { ...campsite, images: [...images] } : campsite;
}

export function mapEmbed(lat: number, lng: number, zoom = 14): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}
