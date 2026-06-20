import { notFound } from "next/navigation";
import {
  getLandingPageBySlug,
  getLandingPageStaticParams,
} from "@/data/landing-pages";
import {
  createOgImageResponse,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/create-og-image";

export const alt = "Tematik kamp alanları listesi";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLandingPageStaticParams();
}

export default async function OpenGraphImage({ params }: OgProps) {
  const { slug } = await params;
  const def = getLandingPageBySlug(slug);

  if (!def) {
    notFound();
  }

  return createOgImageResponse({
    title: def.h1,
    subtitle: def.metaDescription,
    badge: "Kamp rehberi — kampalanlari.co",
  });
}
