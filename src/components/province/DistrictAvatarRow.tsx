import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import type { District } from "@/lib/types";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

interface DistrictAvatarRowProps {
  districts: District[];
  provinceSlug: string;
  provinceName: string;
}

export function DistrictAvatarRow({
  districts,
  provinceSlug,
  provinceName,
}: DistrictAvatarRowProps) {
  if (districts.length === 0) return null;

  const scrollable = districts.length >= 3;

  return (
    <section className="mb-10" aria-labelledby="district-avatars-heading">
      <h2
        id="district-avatars-heading"
        className="mb-5 font-display text-xl font-bold text-forest-800 lg:text-2xl"
      >
        İlçelere Göre Keşfedin
      </h2>
      <div
        className={
          scrollable
            ? "flex gap-5 overflow-x-auto pb-2"
            : "flex flex-wrap gap-5"
        }
      >
        {districts.map((district) => {
          const linkText = getKampAlaniLinkText(district.name);
          return (
            <Link
              key={district.slug}
              href={`/kamp-alanlari/${provinceSlug}/${district.slug}`}
              title={linkText}
              className="group flex w-24 shrink-0 flex-col items-center gap-2 sm:w-28"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-forest-100 shadow-sm transition-colors group-hover:border-amber-300 sm:h-24 sm:w-24">
                <PlaceImage
                  src={district.image}
                  alt={`${district.name} — ${provinceName} kamp alanları`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="96px"
                />
              </div>
              <span className="text-center text-sm font-medium text-forest-800 group-hover:text-amber-700">
                {district.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
