import type { District } from "@/lib/types";
import Link from "next/link";
import { getNeighborLinkLabel } from "@/lib/utils/seoText";

interface NeighborDistrictsProps {
  neighbors: District[];
  provinceSlug: string;
}

export function NeighborDistricts({
  neighbors,
  provinceSlug,
}: NeighborDistrictsProps) {
  if (neighbors.length === 0) return null;

  return (
    <section className="mt-10 rounded-xl bg-forest-50 p-6 border border-forest-100">
      <h2 className="mb-4 font-display text-lg font-bold text-forest-800">
        Komşu İlçeler
      </h2>
      <div className="flex flex-wrap gap-2">
        {neighbors.map((neighbor, index) => {
          const linkText = getNeighborLinkLabel(neighbor.name, index);
          return (
            <Link
              key={neighbor.slug}
              href={`/kamp-alanlari/${provinceSlug}/${neighbor.slug}`}
              title={linkText}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-forest-700 border border-forest-200 hover:border-amber-400 hover:text-amber-700 transition-colors break-words"
            >
              {linkText}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
