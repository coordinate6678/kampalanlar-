import { notFound } from "next/navigation";
import {
  getCampsiteBySlug,
  getCampsiteStaticParams,
  getDistrictBySlug,
  getProvinceBySlug,
} from "@/lib/data";
import {
  createOgImageResponse,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/create-og-image";
import { isWikimediaUrl, resizeWikimediaUrl } from "@/lib/media/wikimedia";

export const alt = "Kamp alanı detay sayfası";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ il: string; ilce: string; slug: string }>;
}

export async function generateStaticParams() {
  return getCampsiteStaticParams();
}

async function resolveBackgroundImage(
  url: string | undefined
): Promise<string | undefined> {
  if (!url || !isWikimediaUrl(url)) return undefined;

  const thumbUrl = resizeWikimediaUrl(url, 640);
  try {
    const res = await fetch(thumbUrl, { next: { revalidate: 86400 } });
    if (!res.ok) return undefined;
    const type = res.headers.get("content-type") ?? "";
    if (!type.startsWith("image/")) return undefined;
    return thumbUrl;
  } catch {
    return undefined;
  }
}

export default async function OpenGraphImage({ params }: OgProps) {
  const { il, ilce, slug } = await params;
  const campsite = getCampsiteBySlug(il, ilce, slug);
  const province = getProvinceBySlug(il);
  const district = getDistrictBySlug(il, ilce);

  if (!campsite || !province || !district) {
    notFound();
  }

  const backgroundImageUrl = await resolveBackgroundImage(campsite.images[0]);

  return createOgImageResponse({
    title: campsite.name,
    subtitle: `${district.name}, ${province.name}`,
    backgroundImageUrl,
  });
}
