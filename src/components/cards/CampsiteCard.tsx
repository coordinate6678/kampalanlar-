import { PlaceImage } from "@/components/ui/PlaceImage";
import Link from "next/link";
import type { Campsite } from "@/lib/types";
import { getCategoryBySlug } from "@/data/categories";
import { getProvinceBySlug, getDistrictBySlug } from "@/lib/data";

function isPopularCampsite(campsite: Campsite): boolean {
  return campsite.reviewCount >= 50 && campsite.rating >= 4.5;
}

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
    const category = getCategoryBySlug(campsite.category);
    const hasReviews = campsite.reviewCount > 0;
    const showPopularBadge = hasReviews && isPopularCampsite(campsite);

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
          {!hasReviews ? (
            <span className="absolute left-3 top-3 rounded-md bg-amber-500 px-2 py-0.5 text-xs font-semibold text-forest-900">
              Yeni Eklendi
            </span>
          ) : showPopularBadge ? (
            <span className="absolute left-3 top-3 rounded-md bg-forest-800 px-2 py-0.5 text-xs font-semibold text-cream">
              Popüler
            </span>
          ) : null}
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-forest-800 group-hover:text-amber-700 transition-colors line-clamp-2">
              {campsite.name}
            </h3>
            {hasReviews && (
              <span className="shrink-0 text-sm font-medium text-amber-600">
                ★ {campsite.rating}{" "}
                <span className="text-forest-400">
                  ({campsite.reviewCount})
                </span>
              </span>
            )}
          </div>
          <p className="mt-1.5 flex items-center gap-1 text-sm text-forest-500">
            <svg
              className="h-3.5 w-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {district?.name}, {province?.name}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {category && (
              <span className="rounded-full bg-forest-50 px-2 py-0.5 text-xs text-forest-600">
                #{category.name}
              </span>
            )}
            {campsite.features.slice(0, 2).map((feature) => (
              <span
                key={feature.label}
                className="rounded-full bg-forest-50 px-2 py-0.5 text-xs text-forest-600"
              >
                #{feature.label}
              </span>
            ))}
          </div>
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
            {campsite.reviewCount > 0 ? (
              <>
                ★ {campsite.rating} ({campsite.reviewCount})
              </>
            ) : (
              <span className="text-forest-400">Yeni eklendi</span>
            )}
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
