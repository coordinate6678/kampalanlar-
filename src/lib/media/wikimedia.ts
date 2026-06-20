/** Wikimedia Commons thumb URL — path segmentleri tek sefer encode edilir */
const DEFAULT_WIDTH = 1920;
/** Hero LCP için önerilen genişlik */
export const HERO_LCP_WIDTH = 1280;
/** Kart / liste görselleri */
export const CARD_IMAGE_WIDTH = 640;

function wikiFileSegment(fileName: string): string {
  return encodeURIComponent(fileName).replace(/%20/g, "_");
}

export function wikimedia(
  hashPath: string,
  fileName: string,
  width = DEFAULT_WIDTH
): string {
  const segment = wikiFileSegment(fileName);
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${hashPath}/${segment}/${width}px-${segment}`;
}

export function isWikimediaUrl(src: string): boolean {
  return src.includes("upload.wikimedia.org");
}

/** Mevcut Wikimedia thumb URL'sinin genişliğini değiştirir */
export function resizeWikimediaUrl(src: string, width: number): string {
  if (!isWikimediaUrl(src)) return src;
  return src.replace(/\/(\d+)px-/, `/${width}px-`);
}
