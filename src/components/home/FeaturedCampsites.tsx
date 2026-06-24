import Link from "next/link";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { getFeaturedCampsites } from "@/lib/data";

export function FeaturedCampsites() {
  const campsites = getFeaturedCampsites(6);

  return (
    <section aria-labelledby="featured-camps-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            id="featured-camps-heading"
            className="font-display text-2xl font-bold text-forest-800 lg:text-3xl"
          >
            Öne Çıkan Kamp Alanları
          </h2>
          <p className="mt-1 text-sm text-forest-500">
            Editörlerimizin seçtiği en iyi doğa durakları.
          </p>
        </div>
        <Link
          href="/kamp-alanlari"
          className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
        >
          Tümünü Gör →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campsites.map((campsite) => (
          <CampsiteCard
            key={`${campsite.provinceSlug}-${campsite.districtSlug}-${campsite.slug}`}
            campsite={campsite}
            variant="grid"
          />
        ))}
      </div>
    </section>
  );
}
