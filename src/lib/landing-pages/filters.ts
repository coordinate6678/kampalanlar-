import { campsites } from "@/data/campsites";
import { getProvinceBySlug } from "@/lib/data";
import type { Campsite } from "@/lib/types";

export type LandingFilterKey =
  | "deniz-kenari"
  | "karavan"
  | "aile-dostu"
  | "istanbul-yakin"
  | "ege-region"
  | "akdeniz-region"
  | "orman"
  | "gol-kenari"
  | "ucretsiz";

export const ISTANBUL_NEARBY_PROVINCES = [
  "izmit",
  "bolu",
  "canakkale",
  "balikesir",
] as const;

function campsiteText(c: Campsite): string {
  return `${c.name} ${c.shortDescription} ${c.description} ${c.features.map((f) => f.label).join(" ")}`;
}

export const landingFilters: Record<
  LandingFilterKey,
  (all: Campsite[]) => Campsite[]
> = {
  "deniz-kenari": (all) => all.filter((c) => c.category === "deniz-kenari"),

  karavan: (all) =>
    all.filter(
      (c) =>
        c.category === "karavan" || /karavan/i.test(campsiteText(c))
    ),

  "aile-dostu": (all) =>
    all.filter((c) => /aile|çocuk|cocuk|aileler/i.test(campsiteText(c))),

  "istanbul-yakin": (all) =>
    all.filter((c) =>
      ISTANBUL_NEARBY_PROVINCES.includes(
        c.provinceSlug as (typeof ISTANBUL_NEARBY_PROVINCES)[number]
      )
    ),

  "ege-region": (all) =>
    all.filter((c) => getProvinceBySlug(c.provinceSlug)?.region === "ege"),

  "akdeniz-region": (all) =>
    all.filter(
      (c) => getProvinceBySlug(c.provinceSlug)?.region === "akdeniz"
    ),

  orman: (all) => all.filter((c) => c.category === "orman"),

  "gol-kenari": (all) =>
    all.filter((c) => {
      const t = campsiteText(c).toLowerCase();
      return (
        /abant göl|sapanca göl|göl kıy|göl kenar|lake abant|gölü kıy|göl çevr|göl manzara/.test(
          t
        ) ||
        c.slug.includes("abant") ||
        (c.provinceSlug === "izmit" && c.districtSlug === "kartepe")
      );
    }),

  ucretsiz: (all) =>
    all.filter((c) =>
      /ücretsiz|bedava|free/i.test(`${c.shortDescription} ${c.description}`)
    ),
};

export function getCampsitesForLandingFilter(
  filterKey: LandingFilterKey
): Campsite[] {
  return landingFilters[filterKey](campsites);
}
