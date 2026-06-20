import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";
import {
  createOgImageResponse,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/create-og-image";

export const alt = "Kamp rehberi";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function OpenGraphImage({ params }: OgProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return createOgImageResponse({
    title: guide.title,
    subtitle: guide.description,
    badge: "Rehber — kampalanlari.co",
  });
}
