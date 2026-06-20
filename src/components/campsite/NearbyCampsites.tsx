import { PlaceImage } from "@/components/ui/PlaceImage";
import Link from "next/link";
import type { Campsite } from "@/lib/types";

interface NearbyCampsitesProps {
  campsites: Campsite[];
  title?: string;
}

export function NearbyCampsites({
  campsites,
  title = "Yakındaki Kamp Alanları",
}: NearbyCampsitesProps) {
  if (campsites.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {campsites.map((campsite) => (
          <Link
            key={campsite.slug}
            href={`/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}/${campsite.slug}`}
            className="group overflow-hidden rounded-xl bg-white shadow-sm border border-forest-100 hover:shadow-md transition-all"
          >
            <div className="relative aspect-[16/10]">
              <PlaceImage
                src={campsite.images[0]}
                alt={campsite.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="25vw"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm text-forest-800 group-hover:text-amber-700">
                {campsite.name}
              </h3>
              <p className="text-xs text-amber-600 mt-0.5">
                ★ {campsite.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
