import Link from "next/link";
import { ProvinceCard } from "@/components/cards/ProvinceCard";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { HubCategoryLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllCampsites,
  getAllProvinces,
  getDistrictsByProvince,
  getPopularProvinces,
} from "@/lib/data";
import { isDistrictIndexable, isProvinceIndexable } from "@/lib/seo/indexability";
import {
  buildHubPageDescription,
  buildHubPageTitle,
} from "@/lib/seo/page-metadata";
import { buildMetadata } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildItemListJsonLd,
} from "@/lib/seo/json-ld";
import { getDistrictLinkLabel, getProvinceLinkLabel } from "@/lib/utils/seoText";
import { headers } from "next/headers";

export const revalidate = 3600;

const campsiteCount = getAllCampsites().length;

export const metadata = buildMetadata({
  title: buildHubPageTitle(),
  description: buildHubPageDescription(campsiteCount),
  path: "/kamp-alanlari",
});

export default async function KampAlanlariHubPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const provinces = getAllProvinces().filter((p) => isProvinceIndexable(p.slug));
  const popular = getPopularProvinces();
  const featuredDistricts = provinces.flatMap((province) =>
    getDistrictsByProvince(province.slug)
      .filter((d) => isDistrictIndexable(province.slug, d.slug))
      .slice(0, 2)
      .map((district) => ({
        provinceSlug: province.slug,
        provinceName: province.name,
        districtSlug: district.slug,
        districtName: district.name,
      }))
  );

  const provinceListItems = provinces.map((province) => ({
    name: getProvinceLinkLabel(province.name, province.slug.length),
    url: `/kamp-alanlari/${province.slug}`,
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(
            [
              { label: "Ana Sayfa", href: "/" },
              { label: "Kamp Alanları" },
            ],
            "/kamp-alanlari"
          ),
          buildCollectionPageJsonLd({
            name: buildHubPageTitle(),
            description: buildHubPageDescription(campsiteCount),
            path: "/kamp-alanlari",
          }),
          buildItemListJsonLd(provinceListItems, "Türkiye Kamp Alanları — İller"),
        ]}
      />

      <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
        Türkiye Kamp Alanları Rehberi
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-gray-600">
        {campsiteCount}+ kamp noktasını il, ilçe ve kategori bazında keşfedin.
        Çadır, karavan ve bungalov seçenekleri tek listede.
      </p>

      <ContentGrid
        mainClassName="space-y-12"
        main={
          <>
            <section>
              <h2 className="mb-4 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
                Popüler İller
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {popular
                  .filter((p) => isProvinceIndexable(p.slug))
                  .map((province) => (
                    <ProvinceCard key={province.slug} province={province} />
                  ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
                Tüm İller
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {provinces.map((province) => (
                  <ProvinceCard key={province.slug} province={province} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
                Öne Çıkan İlçeler
              </h2>
              <ul className="flex flex-wrap gap-2">
                {featuredDistricts.map((item, index) => (
                  <li key={`${item.provinceSlug}-${item.districtSlug}`}>
                    <Link
                      href={`/kamp-alanlari/${item.provinceSlug}/${item.districtSlug}`}
                      className="inline-flex rounded-full border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
                    >
                      {getDistrictLinkLabel(item.districtName, index)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block">
                Tematik Listeler ve Kategoriler
              </h2>
              <HubCategoryLinks />
            </section>
          </>
        }
        sidebar={<SearchWidget />}
      />
    </div>
  );
}
