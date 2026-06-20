import { DEFAULT_EDITOR } from "@/data/organization";
import type { GuideAuthor } from "@/lib/content/guides/types";

export const DEFAULT_GUIDE_AUTHOR: GuideAuthor = {
  name: DEFAULT_EDITOR.name,
  role: DEFAULT_EDITOR.role,
  bio: DEFAULT_EDITOR.bio,
};

export const GUIDE_PUBLISHED_AT = "2025-03-01";
export const GUIDE_UPDATED_AT = "2025-06-19";
