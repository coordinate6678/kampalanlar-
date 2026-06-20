import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { getHiddenGems } from "@/lib/data";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

export function FeaturedHiddenGems() {
  const gems = getHiddenGems();

  if (gems.length === 0) return null;

  return (
    <section aria-labelledby="hidden-gems-heading">
      <h2
        id="hidden-gems-heading"
        className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block"
      >
        Az Bilinen Kamp Noktaları
      </h2>
      <p className="mb-6 text-gray-600">
        Kalabalık tatil beldelerinin ötesinde, keşfedilmeyi bekleyen sakin
        köşeler.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gems.map((gem) => {
          const linkText = getKampAlaniLinkText(gem.districtName);
          return (
            <Link
              key={`${gem.provinceSlug}-${gem.districtSlug}`}
              href={`/kamp-alanlari/${gem.provinceSlug}/${gem.districtSlug}`}
              title={linkText}
              className="group overflow-hidden rounded-xl bg-white shadow-sm border border-forest-100 transition-all hover:shadow-md hover:border-amber-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <PlaceImage
                  src={gem.image}
                  alt={`${gem.districtName} — az bilinen kamp noktası`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-amber-500/90 px-2 py-0.5 text-xs font-semibold text-forest-900">
                  Az bilinen
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-forest-800 group-hover:text-amber-700 transition-colors break-words">
                  {linkText}
                </h3>
                <p className="mt-0.5 text-sm text-forest-500">
                  {gem.provinceName}
                </p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {gem.summary}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-forest-600 group-hover:text-amber-600">
                  Keşfet →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
