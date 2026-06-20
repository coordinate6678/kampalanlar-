import type { GuideSupplement } from "@/lib/content/guides/merge";
import { listingSupplements } from "@/lib/content/guides/supplements/listings";
import { beginnerSupplements } from "@/lib/content/guides/supplements/beginner";
import { equipmentSupplements } from "@/lib/content/guides/supplements/equipment";
import { safetySupplements } from "@/lib/content/guides/supplements/safety";

export const guideSupplements: Record<string, GuideSupplement> = {
  ...listingSupplements,
  ...beginnerSupplements,
  ...equipmentSupplements,
  ...safetySupplements,
};
