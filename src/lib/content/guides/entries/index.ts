import { listingGuides } from "@/lib/content/guides/entries/listings";
import { beginnerGuides } from "@/lib/content/guides/entries/beginner";
import { equipmentGuides } from "@/lib/content/guides/entries/equipment";
import { safetyGuides } from "@/lib/content/guides/entries/safety";
import { advancedGuides } from "@/lib/content/guides/entries/advanced";
import type { GuideContent } from "@/lib/content/guides/types";

export const guideEntries: Record<string, GuideContent> = {
  ...listingGuides,
  ...beginnerGuides,
  ...equipmentGuides,
  ...safetyGuides,
  ...advancedGuides,
};
