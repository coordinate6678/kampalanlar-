import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { GUIDE_CATEGORY_LABELS } from "@/data/guides";
import type { KeepReadingItem } from "@/lib/utils/guide-page";

interface GuideKeepReadingProps {
  items: KeepReadingItem[];
}

export function GuideKeepReading({ items }: GuideKeepReadingProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-12 border-t border-forest-100 pt-10" aria-labelledby="guide-keep-reading-heading">
      <h2
        id="guide-keep-reading-heading"
        className="mb-6 font-display text-2xl font-bold text-forest-800"
      >
        Okumaya Devam Edin
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group overflow-hidden rounded-xl border border-forest-100 bg-white shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <PlaceImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                {GUIDE_CATEGORY_LABELS[item.category]}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-forest-800 transition-colors group-hover:text-amber-700 line-clamp-2">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
