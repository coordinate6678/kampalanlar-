import {
  getActiveLandingPages,
  getLandingPageBySlug,
  type LandingPageDefinition,
} from "@/data/landing-pages";
import { getCampsitesForLandingFilter } from "@/lib/landing-pages/filters";
import { getLandingPageContent } from "@/lib/landing-pages/content";
import type { Campsite } from "@/lib/types";

export function getLandingPageCampsites(
  def: LandingPageDefinition
): Campsite[] {
  return getCampsitesForLandingFilter(def.filterKey);
}

export function resolveLandingPage(slug: string) {
  const def = getLandingPageBySlug(slug);
  if (!def) return undefined;

  const content = getLandingPageContent(slug);
  if (!content) return undefined;

  const campsites = getLandingPageCampsites(def);
  if (campsites.length < def.minCampsites) return undefined;

  return { def, content, campsites };
}

export {
  getActiveLandingPages,
  getLandingPageBySlug,
  isLandingPageSlug,
  getLandingPageStaticParams,
} from "@/data/landing-pages";

export { getLandingPageContent } from "@/lib/landing-pages/content";
