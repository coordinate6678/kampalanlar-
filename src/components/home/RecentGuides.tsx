import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import {
  getRecentGuides,
  GUIDE_CATEGORY_LABELS,
  type GuideCategory,
} from "@/data/guides";
import { getGuideContent } from "@/lib/content/guides";

const categoryAccent: Record<GuideCategory, string> = {
  "kamp-alanlari": "text-amber-600",
  baslangic: "text-forest-600",
  ekipman: "text-forest-700",
  guvenlik: "text-earth-600",
};

export function RecentGuides() {
  const guides = getRecentGuides(3);

  return (
    <section aria-labelledby="recent-guides-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <h2
          id="recent-guides-heading"
          className="font-display text-2xl font-bold text-forest-800 lg:text-3xl"
        >
          Son Eklenen Rehberler
        </h2>
        <Link
          href="/rehberler"
          className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
        >
          Tüm rehberler →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => {
          const content = getGuideContent(guide.slug);
          return (
            <Link
              key={guide.slug}
              href={`/rehberler/${guide.slug}`}
              className="group overflow-hidden rounded-xl border border-forest-100 bg-white shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {content && (
                  <PlaceImage
                    src={content.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
              <div className="p-5">
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${categoryAccent[guide.category]}`}
                >
                  {GUIDE_CATEGORY_LABELS[guide.category]}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-forest-800 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {guide.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
