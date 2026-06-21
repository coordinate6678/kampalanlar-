export type RegionSlug =
  | "marmara"
  | "ege"
  | "akdeniz"
  | "karadeniz"
  | "ic-anadolu"
  | "dogu-anadolu"
  | "guneydogu-anadolu";

export interface Province {
  slug: string;
  name: string;
  description: string;
  image: string;
  popular: boolean;
  coordinates: { lat: number; lng: number };
  region: RegionSlug;
}

export interface District {
  slug: string;
  name: string;
  provinceSlug: string;
  description: string;
  image: string;
  neighbors: string[];
  coordinates: { lat: number; lng: number };
  featured?: boolean;
  hiddenGem?: boolean;
  hiddenGemSummary?: string;
}

export interface Region {
  slug: RegionSlug;
  name: string;
}

export interface IlceJson {
  slug: string;
  name: string;
  description: string;
  neighbors: string[];
  coordinates: { lat: number; lng: number };
  featured?: boolean;
  hiddenGem?: boolean;
  hiddenGemSummary?: string;
}

export interface IlJson {
  slug: string;
  name: string;
  description: string;
  image: string;
  popular: boolean;
  coordinates: { lat: number; lng: number };
  districts: IlceJson[];
}

export interface RegionJson {
  slug: RegionSlug;
  name: string;
  provinces: IlJson[];
}

export interface IllerData {
  regions: RegionJson[];
}

export interface CampsiteFeature {
  icon: string;
  label: string;
}

export interface Campsite {
  slug: string;
  name: string;
  provinceSlug: string;
  districtSlug: string;
  shortDescription: string;
  description: string;
  features: CampsiteFeature[];
  images: string[];
  rating: number;
  reviewCount: number;
  category: string;
  coordinates: { lat: number; lng: number };
  googleMapsEmbed: string;
  transport: string;
  createdAt: string;
  updatedAt?: string;
  telephone?: string;
  website?: string;
  priceRange?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FooterProvince {
  slug: string;
  name: string;
  districts: { slug: string; name: string }[];
}

export interface FooterRegion {
  slug: RegionSlug;
  name: string;
  provinces: FooterProvince[];
}

export interface HiddenGem {
  provinceSlug: string;
  provinceName: string;
  districtSlug: string;
  districtName: string;
  summary: string;
  image: string;
}

export interface ContentLink {
  href: string;
  label: string;
}

export interface SeoContentSection {
  heading: string;
  paragraphs: string[];
  links: ContentLink[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EquipmentContent {
  image: string;
  intro: string;
  purpose: string;
  paragraphs: string[];
  features: string[];
  tips: string[];
  related: { label: string; href: string }[];
  /** Genel bütçe/segment karşılaştırması; marka/model içermez */
  buyingGuide?: string;
}
