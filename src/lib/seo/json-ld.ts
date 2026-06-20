import type { VideoMedia } from "@/data/media/videos";
import { ORGANIZATION } from "@/data/organization";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { BreadcrumbItem, Campsite, FaqItem } from "@/lib/types";

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  currentPath?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const href = item.href ?? (isLast && currentPath ? currentPath : undefined);

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(href ? { item: canonicalPath(href) } : {}),
      };
    }),
  };
}

export function buildItemListJsonLd(
  items: { name: string; url: string }[],
  name?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name && { name }),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : canonicalPath(item.url),
    })),
  };
}

export function buildWebPageJsonLd({
  name,
  description,
  path,
  dateModified,
}: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalPath(path),
    inLanguage: "tr-TR",
    ...(dateModified && { dateModified }),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.brandName,
      url: ORGANIZATION.url,
    },
  };
}

export function buildCollectionPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: canonicalPath(path),
    inLanguage: "tr-TR",
  };
}

export function buildArticleJsonLd({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: canonicalPath(path),
    inLanguage: "tr-TR",
    ...(image && {
      image: image.startsWith("http") ? image : canonicalPath(image),
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalPath(path),
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    author: authorName
      ? { "@type": "Person", name: authorName }
      : {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.brandName,
      url: ORGANIZATION.url,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION.logo,
      },
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
    description:
      "Türkiye genelinde kamp alanları, karavan parkları ve doğa tesisleri rehberi.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/arama?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.brandName,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: {
      "@type": "ImageObject",
      url: ORGANIZATION.logo,
      width: 512,
      height: 512,
    },
    description: ORGANIZATION.description,
    foundingDate: ORGANIZATION.foundingDate,
    email: ORGANIZATION.email,
    knowsAbout: ORGANIZATION.knowsAbout,
    areaServed: ORGANIZATION.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: ORGANIZATION.email,
      availableLanguage: ["Turkish"],
      url: canonicalPath(ORGANIZATION.contactPagePath),
    },
    ...(ORGANIZATION.sameAs.length > 0 && { sameAs: ORGANIZATION.sameAs }),
  };
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildCampsiteJsonLd(
  campsite: Campsite,
  provinceName: string,
  districtName: string,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Campground",
    name: campsite.name,
    description: campsite.shortDescription,
    image: campsite.images.map((img) =>
      img.startsWith("http") ? img : canonicalPath(img)
    ),
    url: canonicalPath(path),
    geo: {
      "@type": "GeoCoordinates",
      latitude: campsite.coordinates.lat,
      longitude: campsite.coordinates.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: districtName,
      addressRegion: provinceName,
      addressCountry: "TR",
    },
    ...(campsite.telephone && { telephone: campsite.telephone }),
    ...(campsite.website && { sameAs: campsite.website }),
    ...(campsite.priceRange && { priceRange: campsite.priceRange }),
  };
}

function canonicalPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/\/+$/, "") || ""}`;
}

export function buildVideoJsonLd(
  video: VideoMedia,
  pagePath: string,
  publishedDate?: string
) {
  const pageUrl = canonicalPath(pagePath);
  const uploadDate =
    publishedDate ?? new Date().toISOString().split("T")[0];

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description ?? video.title,
    thumbnailUrl: video.poster,
    uploadDate,
    ...(video.type === "mp4"
      ? { contentUrl: video.src, embedUrl: pageUrl }
      : {
          embedUrl: `https://www.youtube.com/embed/${video.src}`,
        }),
  };
}
