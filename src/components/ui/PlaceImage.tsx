import Image, { type ImageProps } from "next/image";
import {
  isWikimediaUrl,
  resizeWikimediaUrl,
} from "@/lib/media/wikimedia";

type PlaceImageProps = Omit<ImageProps, "quality"> & {
  quality?: number;
  /** Wikimedia kaynakları için thumb genişliği (LCP optimizasyonu) */
  wikimediaWidth?: number;
};

/** Yer görselleri — Wikimedia için doğrudan yükleme (çift encode / optimizer sorunu yok) */
export function PlaceImage({
  src,
  quality = 90,
  wikimediaWidth,
  ...props
}: PlaceImageProps) {
  const srcStr = typeof src === "string" ? src : "";
  const unoptimized = srcStr ? isWikimediaUrl(srcStr) : false;
  const resolvedSrc =
    srcStr && wikimediaWidth && isWikimediaUrl(srcStr)
      ? resizeWikimediaUrl(srcStr, wikimediaWidth)
      : src;

  return (
    <Image
      src={resolvedSrc}
      quality={quality}
      unoptimized={unoptimized}
      {...props}
    />
  );
}
