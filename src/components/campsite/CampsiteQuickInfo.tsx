import type { Campsite } from "@/lib/types";
import { getCategoryBySlug } from "@/data/categories";

interface CampsiteQuickInfoProps {
  campsite: Campsite;
  districtName: string;
  provinceName: string;
}

export function CampsiteQuickInfo({
  campsite,
  districtName,
  provinceName,
}: CampsiteQuickInfoProps) {
  const category = getCategoryBySlug(campsite.category);
  const highlights = campsite.features.slice(0, 3);

  return (
    <div className="rounded-xl border border-forest-100 bg-white p-5 shadow-md">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold text-forest-800">Hızlı Bilgi</h2>
        {campsite.reviewCount > 0 ? (
          <span className="text-sm font-semibold text-amber-600">
            ★ {campsite.rating}{" "}
            <span className="font-normal text-forest-400">
              ({campsite.reviewCount})
            </span>
          </span>
        ) : (
          <span className="text-sm font-medium text-forest-400">
            Yeni eklendi
          </span>
        )}
      </div>

      {highlights.length > 0 && (
        <div className="mt-4">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-forest-500">
            Öne Çıkanlar
          </h3>
          <ul className="space-y-2">
            {highlights.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-2 text-sm text-forest-700"
              >
                <span aria-hidden="true">{feature.icon}</span>
                {feature.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {campsite.website && (
        <a
          href={campsite.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-lg bg-forest-800 px-4 py-2.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-forest-700"
        >
          Web Sitesini Ziyaret Et
        </a>
      )}

      <dl className="mt-4 space-y-2 border-t border-forest-100 pt-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-forest-500">Kategori</dt>
          <dd className="text-right font-medium text-forest-800">
            {category?.name ?? campsite.category.replace(/-/g, " ")}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-forest-500">Konum</dt>
          <dd className="text-right font-medium text-forest-800">
            {districtName}, {provinceName}
          </dd>
        </div>
      </dl>
    </div>
  );
}
