import { guides, getGuideBySlug, type Guide, type GuideCategory } from "@/data/guides";
import { getGuideContent, getGuidePath } from "@/lib/content/guides";
import type { GuideContent } from "@/lib/content/guides/types";
import type { ContentLink } from "@/lib/types";
import { pickHighlightParagraph } from "@/lib/utils/campsite-page";

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function estimateGuideReadingMinutes(content: GuideContent): number {
  let words = countWords(content.intro);

  for (const section of content.sections) {
    for (const paragraph of section.paragraphs) {
      words += countWords(paragraph);
    }
    if (section.subsections) {
      for (const subsection of section.subsections) {
        for (const paragraph of subsection.paragraphs) {
          words += countWords(paragraph);
        }
      }
    }
  }

  return Math.max(1, Math.ceil(words / 200));
}

export function pickGuideHighlightParagraph(
  content: GuideContent
): string | null {
  const candidates = [
    content.intro,
    ...(content.sections[0]?.paragraphs ?? []),
  ];
  return pickHighlightParagraph(candidates);
}

export interface KeepReadingItem {
  href: string;
  title: string;
  image: string;
  category: GuideCategory;
}

export function getKeepReadingItems(
  slug: string,
  relatedGuides: ContentLink[],
  allGuides: Guide[] = guides
): KeepReadingItem[] {
  const items: KeepReadingItem[] = [];

  if (relatedGuides.length > 0) {
    for (const link of relatedGuides) {
      if (items.length >= 3) break;

      const slugMatch = link.href.match(/\/rehberler\/([^/]+)\/?$/);
      if (!slugMatch) continue;

      const guideSlug = slugMatch[1];
      if (guideSlug === slug) continue;

      const guide = getGuideBySlug(guideSlug);
      const guideContent = getGuideContent(guideSlug);
      if (!guide || !guideContent) continue;

      items.push({
        href: link.href,
        title: link.label,
        image: guideContent.image,
        category: guide.category,
      });
    }
  } else {
    for (const guide of allGuides) {
      if (items.length >= 3) break;
      if (guide.slug === slug) continue;

      const guideContent = getGuideContent(guide.slug);
      if (!guideContent) continue;

      items.push({
        href: getGuidePath(guide.slug),
        title: guide.title,
        image: guideContent.image,
        category: guide.category,
      });
    }
  }

  return items;
}
