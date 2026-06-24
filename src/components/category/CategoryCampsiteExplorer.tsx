"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { SearchWidget } from "@/components/layout/SearchWidget";
import type { Campsite } from "@/lib/types";

const PAGE_SIZE = 9;

interface ProvinceOption {
  slug: string;
  name: string;
}

interface CategoryCampsiteExplorerProps {
  campsites: Campsite[];
  categoryName: string;
  provinceOptions: ProvinceOption[];
}

export function CategoryCampsiteExplorer({
  campsites,
  categoryName,
  provinceOptions,
}: CategoryCampsiteExplorerProps) {
  const [provinceSlug, setProvinceSlug] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const availableFeatures = useMemo(() => {
    const labels = new Set<string>();
    for (const campsite of campsites) {
      for (const feature of campsite.features) {
        labels.add(feature.label);
      }
    }
    return [...labels].sort((a, b) => a.localeCompare(b, "tr"));
  }, [campsites]);

  const filtered = useMemo(() => {
    return campsites.filter((campsite) => {
      if (provinceSlug !== "all" && campsite.provinceSlug !== provinceSlug) {
        return false;
      }
      if (selectedFeatures.length > 0) {
        const labels = campsite.features.map((feature) => feature.label);
        return selectedFeatures.every((feature) => labels.includes(feature));
      }
      return true;
    });
  }, [campsites, provinceSlug, selectedFeatures]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  function toggleFeature(label: string) {
    setSelectedFeatures((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
    setVisibleCount(PAGE_SIZE);
  }

  function clearFilters() {
    setProvinceSlug("all");
    setSelectedFeatures([]);
    setVisibleCount(PAGE_SIZE);
  }

  const hasActiveFilters =
    provinceSlug !== "all" || selectedFeatures.length > 0;

  return (
    <div className="mb-10 lg:grid lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8">
      <aside className="mb-8 space-y-6 lg:mb-0">
        <div className="rounded-xl border border-forest-100 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-forest-500">
            Filtrele
          </h2>

          {provinceOptions.length > 0 && (
            <div className="mb-5">
              <label
                htmlFor="category-province-filter"
                className="mb-2 block text-sm font-medium text-forest-800"
              >
                Bölge Seçimi
              </label>
              <select
                id="category-province-filter"
                value={provinceSlug}
                onChange={(e) => {
                  setProvinceSlug(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                className="w-full rounded-lg border border-forest-200 bg-white px-3 py-2 text-sm text-forest-800 focus:border-amber-500 focus:outline-none"
              >
                <option value="all">Tüm Bölgeler</option>
                {provinceOptions.map((province) => (
                  <option key={province.slug} value={province.slug}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {availableFeatures.length > 0 && (
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-forest-800">
                Özellikler
              </legend>
              <ul className="space-y-2">
                {availableFeatures.map((label) => (
                  <li key={label}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-forest-700">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(label)}
                        onChange={() => toggleFeature(label)}
                        className="rounded border-forest-300 text-forest-800 focus:ring-amber-400"
                      />
                      {label}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
          )}

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>

        <div className="rounded-xl bg-forest-800 p-5 text-cream">
          <h2 className="font-display text-lg font-bold text-amber-300">
            İçerik İlkelerimiz
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-forest-100">
            Yayınladığımız her kamp alanı hakkında bilgiyi nasıl
            topladığımızı öğrenin.
          </p>
          <Link
            href="/editorial-politika"
            className="mt-4 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200"
          >
            Editoryal politikayı oku →
          </Link>
        </div>

        <SearchWidget />
      </aside>

      <div>
        <p className="mb-6 text-sm text-forest-500">
          Toplam {campsites.length} {categoryName.toLowerCase()} kamp alanından{" "}
          {visible.length} tanesi gösteriliyor
        </p>

        {visible.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((campsite) => (
                <CampsiteCard
                  key={`${campsite.provinceSlug}-${campsite.districtSlug}-${campsite.slug}`}
                  campsite={campsite}
                  variant="grid"
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-lg bg-forest-800 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-700"
                >
                  Daha Fazla Göster
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-xl border border-forest-100 bg-cream p-6 text-forest-700">
            Seçtiğiniz filtrelere uygun kamp alanı bulunamadı. Filtreleri
            temizleyip tekrar deneyin.
          </div>
        )}
      </div>
    </div>
  );
}
