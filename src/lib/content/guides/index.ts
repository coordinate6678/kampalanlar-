import type { Campsite } from "@/lib/types";
import { getCampsiteBySlug } from "@/lib/data";
import type { GuideContent, CampsiteRef } from "@/lib/content/guides/types";
import { guideEntries } from "@/lib/content/guides/entries";
import { guideSupplements } from "@/lib/content/guides/supplements";
import { mergeGuideContent } from "@/lib/content/guides/merge";

export type {
  GuideContent,
  GuideSection,
  GuideSubsection,
  GuideAuthor,
  CampsiteRef,
} from "@/lib/content/guides/types";

export { getGuideTocEntries, mergeGuideContent } from "@/lib/content/guides/merge";

export function getGuideContent(slug: string): GuideContent | undefined {
  const base = guideEntries[slug];
  if (!base) return undefined;
  return mergeGuideContent(base, guideSupplements[slug]);
}

export function getAllGuideContentSlugs(): string[] {
  return Object.keys(guideEntries);
}

export function resolveRelatedCampsites(refs: CampsiteRef[]): Campsite[] {
  return refs
    .map((ref) =>
      getCampsiteBySlug(ref.provinceSlug, ref.districtSlug, ref.slug)
    )
    .filter((campsite): campsite is Campsite => campsite !== undefined);
}

export function getGuidePath(slug: string): string {
  return `/rehberler/${slug}`;
}
