import type { ContentLink, FaqItem } from "@/lib/types";

export interface GuideAuthor {
  name: string;
  role?: string;
  bio?: string;
}

export interface CampsiteRef {
  provinceSlug: string;
  districtSlug: string;
  slug: string;
}

export interface GuideSubsection {
  id: string;
  heading: string;
  paragraphs: string[];
  links?: ContentLink[];
}

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
  links?: ContentLink[];
  checklist?: string[];
  subsections?: GuideSubsection[];
}

export interface GuideContent {
  image: string;
  intro: string;
  sections: GuideSection[];
  relatedCampsites: CampsiteRef[];
  relatedGuides: ContentLink[];
  faq: FaqItem[];
  author: GuideAuthor;
  publishedAt: string;
  updatedAt: string;
}
