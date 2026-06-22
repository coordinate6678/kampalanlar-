import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailing = normalized.replace(/\/+$/, "") || "/";
  return `${SITE_URL}${withoutTrailing}`;
}

export function absoluteImageUrl(image?: string): string {
  if (!image) return canonicalUrl(DEFAULT_OG_IMAGE);
  if (image.startsWith("http://") || image.startsWith("https://")) {
    if (image.startsWith(SITE_URL)) return image;
    return canonicalUrl(DEFAULT_OG_IMAGE);
  }
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

/** Meta açıklamayı kelime ortasında kesmeden kısaltır */
export function metaDescription(text: string, maxLength = 160): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;

  const truncated = cleaned.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(" ");
  const base = lastSpace > maxLength * 0.6 ? truncated.slice(0, lastSpace) : truncated;
  return `${base.trimEnd()}…`;
}

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_NAME;
  return `${pageTitle} | ${SITE_NAME}`;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  image,
  skipCanonical = false,
  canonicalOverride,
  skipOgImage = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
  skipCanonical?: boolean;
  /** Canonical hedefi farklıysa (örn. landing → kategori) */
  canonicalOverride?: string;
  /** Route opengraph-image.tsx dosyasının metadata üretmesi için */
  skipOgImage?: boolean;
}) {
  const url = canonicalOverride
    ? canonicalUrl(canonicalOverride)
    : canonicalUrl(path);
  const fullTitle = buildTitle(title);
  const desc = metaDescription(description);
  const ogImage = absoluteImageUrl(image);

  return {
    title,
    description: desc,
    ...(!skipCanonical && {
      alternates: {
        canonical: url,
      },
    }),
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website" as const,
      ...(!skipOgImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: fullTitle,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description: desc,
      ...(!skipOgImage && { images: [ogImage] }),
    },
  };
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website" as const,
    locale: "tr_TR",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: [DEFAULT_OG_IMAGE],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2d4a3e",
};
