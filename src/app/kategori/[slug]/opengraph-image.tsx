import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import {
  createOgImageResponse,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/create-og-image";

export const alt = "Kamp kategorisi";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function OpenGraphImage({ params }: OgProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return createOgImageResponse({
    title: `${category.name} Kamp Alanları`,
    subtitle: category.description,
    badge: "Kategori — kampalanlari.co",
  });
}
