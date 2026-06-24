import { PlaceImage } from "@/components/ui/PlaceImage";
import Link from "next/link";
import type { Campsite } from "@/lib/types";
import { getDistrictBySlug, getProvinceBySlug } from "@/lib/data";

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
      <h2 className="mb-6 inline-block border-b-2 border-amber-400 pb-2 font-display text-2xl font-bold text-forest-800">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {campsites.map((campsite) => {
          const province = getProvinceBySlug(campsite.provinceSlug);
          const district = getDistrictBySlug(
            campsite.provinceSlug,
            campsite.districtSlug
          );

          return (
            <Link
              key={`${campsite.provinceSlug}-${campsite.districtSlug}-${campsite.slug}`}
              href={`/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}/${campsite.slug}`}
              className="group overflow-hidden rounded-xl border border-forest-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <PlaceImage
                  src={campsite.images[0]}
                  alt={campsite.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="25vw"
                />
                {campsite.priceRange && (
                  <span className="absolute right-2 top-2 rounded-md bg-white/95 px-2 py-0.5 text-xs font-semibold text-forest-800 shadow-sm">
                    {campsite.priceRange}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="line-clamp-2 text-sm font-semibold text-forest-800 group-hover:text-amber-700">
                  {campsite.name}
                </h3>
                <p className="mt-0.5 text-xs text-forest-500">
                  {district?.name}, {province?.name}
                </p>
                {campsite.reviewCount > 0 && (
                  <p className="mt-1 text-xs text-amber-600">
                    ★ {campsite.rating}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
