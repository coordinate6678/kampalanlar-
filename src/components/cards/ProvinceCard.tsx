import { PlaceImage } from "@/components/ui/PlaceImage";
import Link from "next/link";
import type { Province } from "@/lib/types";
import { getCampsiteCountByProvince } from "@/lib/data";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

interface ProvinceCardProps {
  province: Province;
}

export function ProvinceCard({ province }: ProvinceCardProps) {
  const count = getCampsiteCountByProvince(province.slug);
  const linkText = getKampAlaniLinkText(province.name);

  return (
    <Link
      href={`/kamp-alanlari/${province.slug}`}
      title={linkText}
      className="group overflow-hidden rounded-xl bg-white shadow-sm border border-forest-100 transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <PlaceImage
          src={province.image}
          alt={linkText}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display text-lg font-bold text-white break-words">
            {linkText}
          </h3>
          <p className="text-sm text-forest-200">
            {count > 0 ? `${count} kamp alanı` : "Yakında"}
          </p>
        </div>
      </div>
    </Link>
  );
}
