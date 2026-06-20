import {
  createOgImageResponse,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og/create-og-image";

export const runtime = "edge";
export const alt = "Kamp Alanları — Türkiye kamp rehberi";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return createOgImageResponse({
    title: "Türkiye Kamp Alanları Rehberi",
    subtitle:
      "İl, ilçe ve kategori bazında çadır, karavan ve bungalov kamp rotaları",
  });
}
