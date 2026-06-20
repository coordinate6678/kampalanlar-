import { notFound } from "next/navigation";
import {
  equipmentItems,
  getEquipmentBySlug,
} from "@/data/equipment";
import {
  createOgImageResponse,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/create-og-image";

export const alt = "Kamp ekipmanı rehberi";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return equipmentItems.map((item) => ({ slug: item.slug }));
}

export default async function OpenGraphImage({ params }: OgProps) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);

  if (!item) {
    notFound();
  }

  return createOgImageResponse({
    title: item.name,
    subtitle: item.description,
    badge: "Ekipman — kampalanlari.co",
  });
}
