import illerData from "@/data/iller.json";
import { getDistrictImage, getProvinceImage } from "@/data/campsites/helpers";
import type {
  District,
  FooterRegion,
  HiddenGem,
  IlceJson,
  IlJson,
  IllerData,
  Province,
  RegionJson,
} from "@/lib/types";

const data = illerData as IllerData;

const MAX_FOOTER_DISTRICTS = 5;

function flattenProvinces(): IlJson[] {
  return data.regions.flatMap((r) => r.provinces);
}

function flattenDistricts(): District[] {
  return data.regions.flatMap((region) =>
    region.provinces.flatMap((province) => {
      const provinceImage = getProvinceImage(province.slug, province.image);
      return province.districts.map((district) =>
        toDistrict(province.slug, district, provinceImage)
      );
    })
  );
}

function toDistrict(provinceSlug: string, district: IlceJson, provinceImage: string): District {
  return {
    slug: district.slug,
    name: district.name,
    provinceSlug,
    description: district.description,
    image: getDistrictImage(provinceSlug, district.slug, provinceImage),
    neighbors: district.neighbors,
    coordinates: district.coordinates,
    featured: district.featured,
    hiddenGem: district.hiddenGem,
    hiddenGemSummary: district.hiddenGemSummary,
  };
}

function toProvince(il: IlJson, regionSlug: RegionJson["slug"]): Province {
  return {
    slug: il.slug,
    name: il.name,
    description: il.description,
    image: getProvinceImage(il.slug, il.image),
    popular: il.popular,
    coordinates: il.coordinates,
    region: regionSlug,
  };
}

export function getIllerData(): IllerData {
  return data;
}

export function getAllProvinces(): Province[] {
  return data.regions.flatMap((region) =>
    region.provinces.map((p) => toProvince(p, region.slug))
  );
}

export function getProvinceBySlug(slug: string): Province | undefined {
  for (const region of data.regions) {
    const found = region.provinces.find((p) => p.slug === slug);
    if (found) return toProvince(found, region.slug);
  }
  return undefined;
}

export function getPopularProvinces(): Province[] {
  return getAllProvinces().filter((p) => p.popular);
}

export function getDistrictsByProvince(provinceSlug: string): District[] {
  return flattenDistricts().filter((d) => d.provinceSlug === provinceSlug);
}

export function getDistrictBySlug(
  provinceSlug: string,
  districtSlug: string
): District | undefined {
  return flattenDistricts().find(
    (d) => d.provinceSlug === provinceSlug && d.slug === districtSlug
  );
}

export function getAllDistricts(): District[] {
  return flattenDistricts();
}

export function getHiddenGems(): HiddenGem[] {
  const gems: HiddenGem[] = [];

  for (const region of data.regions) {
    for (const province of region.provinces) {
      const provinceImage = getProvinceImage(province.slug, province.image);
      for (const district of province.districts) {
        if (district.hiddenGem) {
          gems.push({
            provinceSlug: province.slug,
            provinceName: province.name,
            districtSlug: district.slug,
            districtName: district.name,
            summary:
              district.hiddenGemSummary ??
              district.description.slice(0, 100) + "...",
            image: getDistrictImage(province.slug, district.slug, provinceImage),
          });
        }
      }
    }
  }

  return gems;
}

export function getFooterRegions(): FooterRegion[] {
  return data.regions.map((region) => ({
    slug: region.slug,
    name: region.name,
    provinces: region.provinces.map((province) => ({
      slug: province.slug,
      name: province.name,
      districts: province.districts
        .filter((d) => d.featured)
        .slice(0, MAX_FOOTER_DISTRICTS)
        .map((d) => ({ slug: d.slug, name: d.name })),
    })),
  }));
}

export function getProvinceStaticParams(): { il: string }[] {
  return flattenProvinces().map((p) => ({ il: p.slug }));
}

export function getDistrictStaticParams(): { il: string; ilce: string }[] {
  return flattenDistricts().map((d) => ({
    il: d.provinceSlug,
    ilce: d.slug,
  }));
}

export function getNeighborDistricts(district: District): District[] {
  return district.neighbors
    .map((slug) =>
      flattenDistricts().find(
        (d) => d.slug === slug && d.provinceSlug === district.provinceSlug
      )
    )
    .filter((d): d is District => d !== undefined);
}
