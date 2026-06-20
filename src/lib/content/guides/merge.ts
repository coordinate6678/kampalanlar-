import type { GuideSection, GuideContent } from "@/lib/content/guides/types";
import type { ContentLink } from "@/lib/types";

export interface GuideSupplement {
  extraIntro?: string[];
  sections: GuideSection[];
  relatedGuides?: ContentLink[];
}

export function mergeGuideContent(
  base: GuideContent,
  supplement?: GuideSupplement
): GuideContent {
  if (!supplement) return base;

  return {
    ...base,
    intro: supplement.extraIntro
      ? [base.intro, ...supplement.extraIntro].join(" ")
      : base.intro,
    sections: [...base.sections, ...supplement.sections],
    relatedGuides: [
      ...base.relatedGuides,
      ...(supplement.relatedGuides ?? []).filter(
        (link) => !base.relatedGuides.some((r) => r.href === link.href)
      ),
    ],
  };
}

export function getGuideTocEntries(
  sections: GuideSection[]
): { id: string; heading: string; level: 2 | 3 }[] {
  const entries: { id: string; heading: string; level: 2 | 3 }[] = [];
  for (const section of sections) {
    entries.push({ id: section.id, heading: section.heading, level: 2 });
    if (section.subsections) {
      for (const sub of section.subsections) {
        entries.push({ id: sub.id, heading: sub.heading, level: 3 });
      }
    }
  }
  return entries;
}
