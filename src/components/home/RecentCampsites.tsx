import { getRecentCampsites } from "@/lib/data";
import { CampsiteCard } from "@/components/cards/CampsiteCard";

export function RecentCampsites() {
  const campsites = getRecentCampsites(6);

  return (
    <section>
      <h2 className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
        Son Eklenen Kamp Alanları
      </h2>
      <div className="space-y-4">
        {campsites.map((campsite) => (
          <CampsiteCard
            key={`${campsite.provinceSlug}-${campsite.districtSlug}-${campsite.slug}`}
            campsite={campsite}
          />
        ))}
      </div>
    </section>
  );
}
