import Image, { type ImageProps } from "next/image";
import {
  isWikimediaUrl,
  resizeWikimediaUrl,
} from "@/lib/media/wikimedia";

type PlaceImageProps = Omit<ImageProps, "quality" | "src"> & {
  src?: ImageProps["src"];
  quality?: number;
  /** Wikimedia kaynakları için thumb genişliği (LCP optimizasyonu) */
  wikimediaWidth?: number;
};

/** Yer görselleri — Wikimedia için doğrudan yükleme (çift encode / optimizer sorunu yok) */
export function PlaceImage({
  src,
  quality = 90,
  wikimediaWidth,
  className,
  fill,
  ...props
}: PlaceImageProps) {
  const srcStr = typeof src === "string" ? src : "";
  if (!srcStr) {
    return (
      <div
        className={`flex items-center justify-center bg-forest-100 text-forest-400 text-sm ${
          fill ? "absolute inset-0 h-full w-full" : ""
        } ${className ?? ""}`}
      >
        Görsel yakında eklenecek
      </div>
    );
  }

  const unoptimized = isWikimediaUrl(srcStr);
  const resolvedSrc =
    wikimediaWidth && isWikimediaUrl(srcStr)
      ? resizeWikimediaUrl(srcStr, wikimediaWidth)
      : srcStr;

  return (
    <Image
      src={resolvedSrc}
      quality={quality}
      unoptimized={unoptimized}
      className={className}
      fill={fill}
      {...props}
    />
  );
}
