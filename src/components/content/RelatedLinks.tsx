import Link from "next/link";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getActiveLandingPages } from "@/lib/landing-pages";
import type { Campsite } from "@/lib/types";
import {
  getCategoryLinkLabel,
  getDistrictLinkLabel,
  getProvinceLinkLabel,
} from "@/lib/utils/seoText";

interface CampsiteRelatedLinksProps {
  campsite: Campsite;
  provinceName: string;
  districtName: string;
}

export function CampsiteRelatedLinks({
  campsite,
  provinceName,
  districtName,
}: CampsiteRelatedLinksProps) {
  const category = getCategoryBySlug(campsite.category);
  const provincePath = `/kamp-alanlari/${campsite.provinceSlug}`;
  const districtPath = `/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}`;
  const categoryPath = `/kategori/${campsite.category}`;

  return (
    <section className="mt-8 rounded-xl border border-forest-100 bg-forest-50/60 p-5">
      <h2 className="mb-3 font-display text-lg font-bold text-forest-800">
        İlgili Rehberler
      </h2>
      <ul className="flex flex-wrap gap-2 text-sm">
        <li>
          <Link
            href={districtPath}
            className="rounded-full border border-forest-200 bg-white px-4 py-2 font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
          >
            {getDistrictLinkLabel(districtName, 1)}
          </Link>
        </li>
        <li>
          <Link
            href={provincePath}
            className="rounded-full border border-forest-200 bg-white px-4 py-2 font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
          >
            {getProvinceLinkLabel(provinceName, 2)}
          </Link>
        </li>
        {category && (
          <li>
            <Link
              href={categoryPath}
              className="rounded-full border border-forest-200 bg-white px-4 py-2 font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
            >
              {getCategoryLinkLabel(category.name, 0)}
            </Link>
          </li>
        )}
        <li>
          <Link
            href="/kamp-alanlari"
            className="rounded-full border border-forest-200 bg-white px-4 py-2 font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
          >
            Türkiye kamp alanları listesi
          </Link>
        </li>
      </ul>
    </section>
  );
}

interface ProvinceDistrictLinksProps {
  provinceSlug: string;
  provinceName: string;
  districts: { slug: string; name: string }[];
}

export function ProvinceDistrictLinks({
  provinceSlug,
  provinceName,
  districts,
}: ProvinceDistrictLinksProps) {
  if (districts.length === 0) return null;

  return (
    <section className="mb-10 prose-seo">
      <h2 className="mb-3 font-display text-xl font-bold text-forest-800">
        {provinceName} İlçe Kamp Rehberleri
      </h2>
      <p className="text-gray-700">
        {provinceName} sınırlarında kamp planı yaparken ilçe rehberlerinden
        başlayabilirsiniz:
      </p>
      <ul className="mt-3 flex flex-wrap gap-2 not-prose">
        {districts.map((district, index) => (
          <li key={district.slug}>
            <Link
              href={`/kamp-alanlari/${provinceSlug}/${district.slug}`}
              className="inline-flex rounded-full border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
            >
              {getDistrictLinkLabel(district.name, index)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

interface HubQuickLinksProps {
  showCategories?: boolean;
}

export function HubCategoryLinks({ showCategories = true }: HubQuickLinksProps) {
  const landingPages = getActiveLandingPages();

  return (
    <div className="space-y-6">
      {landingPages.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium text-forest-600">
            Tematik kamp listeleri
          </p>
          <div className="flex flex-wrap gap-2">
            {landingPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-forest-800 hover:border-amber-400 hover:bg-amber-100 transition-colors"
              >
                <span aria-hidden="true">{page.icon}</span>
                {page.h1}
              </Link>
            ))}
          </div>
        </div>
      )}
      {showCategories && (
        <div>
          <p className="mb-3 text-sm font-medium text-forest-600">
            Kategori rehberleri
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-forest-100 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
              >
                <span aria-hidden="true">{cat.icon}</span>
                {getCategoryLinkLabel(cat.name, index)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
