import {
  getCampsiteCountByDistrict,
  getCampsiteCountByProvince,
  getDistrictsByProvince,
} from "@/lib/data";

/** İlçesi veya kamp alanı olmayan il sayfaları thin content — indexlenmemeli */
export function isProvinceIndexable(provinceSlug: string): boolean {
  const districtCount = getDistrictsByProvince(provinceSlug).length;
  const campsiteCount = getCampsiteCountByProvince(provinceSlug);
  return districtCount > 0 || campsiteCount > 0;
}

export function isDistrictIndexable(
  provinceSlug: string,
  districtSlug: string
): boolean {
  return getCampsiteCountByDistrict(provinceSlug, districtSlug) > 0;
}
