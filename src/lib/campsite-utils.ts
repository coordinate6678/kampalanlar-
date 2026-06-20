import type { Campsite } from "@/lib/types";

export function getCampsiteUpdatedAt(campsite: Pick<Campsite, "createdAt" | "updatedAt">): string {
  return campsite.updatedAt ?? campsite.createdAt;
}
