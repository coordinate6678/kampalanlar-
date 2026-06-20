import { PlaceImage } from "@/components/ui/PlaceImage";
import Link from "next/link";
import type { Campsite } from "@/lib/types";
import { getProvinceBySlug } from "@/lib/data";
import { getDistrictBySlug } from "@/lib/data";

interface CampsiteCardProps {
  campsite: Campsite;
  variant?: "list" | "grid";
}

export function CampsiteCard({ campsite, variant = "list" }: CampsiteCardProps) {
  const province = getProvinceBySlug(campsite.provinceSlug);
  const district = getDistrictBySlug(
    campsite.provinceSlug,
    campsite.districtSlug
  );
  const href = `/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}/${campsite.slug}`;

  if (variant === "grid") {
    return (
      <Link
        href={href}
        title={campsite.name}
        className="group overflow-hidden rounded-xl bg-white shadow-sm border border-forest-100 transition-all hover:shadow-md"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <PlaceImage
            src={campsite.images[0]}
            alt={`${campsite.name} — ${district?.name ?? ""}, ${province?.name ?? ""} kamp alanı`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-amber-700">
            ★ {campsite.rating}
          </div>
        </div>
        <div className="p-4">
          <p className="mb-1 text-xs text-forest-500">
            {province?.name} / {district?.name}
          </p>
          <h3 className="font-semibold text-forest-800 group-hover:text-amber-700 transition-colors">
            {campsite.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600">
            {campsite.shortDescription}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm border border-forest-100 sm:flex-row sm:gap-6 transition-all hover:shadow-md">
      <Link
        href={href}
        title={campsite.name}
        className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg sm:w-56"
      >
        <PlaceImage
          src={campsite.images[0]}
          alt={`${campsite.name} — ${district?.name ?? ""}, ${province?.name ?? ""} kamp alanı`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 224px"
        />
        <span className="absolute bottom-2 right-2 rounded-md bg-forest-700 px-2 py-0.5 text-xs font-medium text-cream">
          {campsite.category}
        </span>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>{province?.name}</span>
          <span>·</span>
          <span>{district?.name}</span>
          <span>·</span>
          <span className="font-medium text-amber-600">
            ★ {campsite.rating} ({campsite.reviewCount})
          </span>
        </div>

        <Link href={href} title={campsite.name}>
          <h3 className="font-display text-xl font-bold text-forest-800 group-hover:text-amber-700 transition-colors">
            {campsite.name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-600">
          {campsite.shortDescription}
        </p>

        <Link
          href={href}
          title={`${campsite.name} detayları`}
          className="mt-3 inline-flex w-fit items-center gap-1 rounded-lg bg-forest-700 px-4 py-2 text-sm font-medium text-cream hover:bg-forest-600 transition-colors"
        >
          Devamını Oku
          <span aria-hidden="true">›</span>
        </Link>
      </div>
    </article>
  );
}
