import { getPopularProvinces } from "@/lib/data";
import { ProvinceCard } from "@/components/cards/ProvinceCard";

export function PopularProvinces() {
  const provinces = getPopularProvinces();

  return (
    <section id="populer-iller">
      <h2 className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
        Popüler İller
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {provinces.map((province) => (
          <ProvinceCard key={province.slug} province={province} />
        ))}
      </div>
    </section>
  );
}
