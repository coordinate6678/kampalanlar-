import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import type { District } from "@/lib/types";
import { getCampsiteCountByDistrict } from "@/lib/data";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

interface DistrictCardProps {
  district: District;
  provinceSlug: string;
}

export function DistrictCard({ district, provinceSlug }: DistrictCardProps) {
  const count = getCampsiteCountByDistrict(provinceSlug, district.slug);
  const linkText = getKampAlaniLinkText(district.name);

  return (
    <Link
      href={`/kamp-alanlari/${provinceSlug}/${district.slug}`}
      title={linkText}
      className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-forest-100 transition-all hover:shadow-md hover:border-amber-300"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
        <PlaceImage
          src={district.image}
          alt={`${district.name} kamp alanı görseli`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="64px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-forest-800 group-hover:text-amber-700 transition-colors break-words">
          {linkText}
        </h3>
        <p className="text-sm text-gray-500">
          {count > 0
            ? `${count} kamp alanı`
            : "Yakında kamp alanları eklenecek"}
        </p>
      </div>
      <span className="text-forest-300 group-hover:text-amber-500 transition-colors">
        →
      </span>
    </Link>
  );
}
