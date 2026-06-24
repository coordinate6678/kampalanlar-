"use client";

import { useMemo, useState } from "react";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { getCategoryBySlug } from "@/data/categories";
import type { Campsite } from "@/lib/types";

const PAGE_SIZE = 9;

interface ProvinceCampsiteGridProps {
  campsites: Campsite[];
  provinceName: string;
}

export function ProvinceCampsiteGrid({
  campsites,
  provinceName,
}: ProvinceCampsiteGridProps) {
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categoriesInProvince = useMemo(() => {
    const slugs = [...new Set(campsites.map((c) => c.category))];
    return slugs
      .map((slug) => getCategoryBySlug(slug))
      .filter((cat): cat is NonNullable<typeof cat> => cat !== undefined);
  }, [campsites]);

  const filtered = useMemo(
    () =>
      category === "all"
        ? campsites
        : campsites.filter((c) => c.category === category),
    [campsites, category]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  function handleCategoryChange(next: string) {
    setCategory(next);
    setVisibleCount(PAGE_SIZE);
  }

  if (campsites.length === 0) return null;

  return (
    <section id="kamp-alanlari" className="mb-10" aria-labelledby="province-camps-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <h2
          id="province-camps-heading"
          className="font-display text-xl font-bold text-forest-800 lg:text-2xl"
        >
          {provinceName} Kamp Alanları
        </h2>
        <p className="text-sm text-forest-500">
          {filtered.length} kamp alanı listeleniyor
        </p>
      </div>

      {categoriesInProvince.length > 1 && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <label htmlFor="province-category-filter" className="text-sm font-medium text-forest-700">
            Kategori:
          </label>
          <select
            id="province-category-filter"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="rounded-lg border border-forest-200 bg-white px-3 py-2 text-sm text-forest-800 focus:border-amber-500 focus:outline-none"
          >
            <option value="all">Tümü</option>
            {categoriesInProvince.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((campsite) => (
          <CampsiteCard
            key={`${campsite.districtSlug}-${campsite.slug}`}
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
            className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white px-6 py-3 text-sm font-medium text-forest-700 shadow-sm transition-colors hover:border-forest-300 hover:bg-forest-50"
          >
            Daha Fazla Alan Yükle
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
    </section>
  );
}
