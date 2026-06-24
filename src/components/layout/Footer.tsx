import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getAllCorporatePages } from "@/data/corporate-pages";
import { getFooterRegions } from "@/lib/data";
import { getActiveLandingPages } from "@/lib/landing-pages";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import {
  isDistrictIndexable,
  isProvinceIndexable,
} from "@/lib/seo/indexability";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

const legalSlugs = new Set(["gizlilik-politikasi", "kullanim-sartlari"]);

export function Footer() {
  const regions = getFooterRegions();
  const corporatePages = getAllCorporatePages();
  const legalPages = corporatePages.filter((page) => legalSlugs.has(page.slug));
  const corporateLinks = corporatePages.filter(
    (page) => !legalSlugs.has(page.slug)
  );

  return (
    <footer className="mt-auto border-t border-forest-100 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display text-lg font-bold text-forest-800">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-forest-600">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-forest-800">
              Keşfet
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kamp-alanlari"
                  className="text-sm text-forest-600 transition-colors hover:text-forest-900"
                >
                  Kamp alanları rehberi
                </Link>
              </li>
              <li>
                <Link
                  href="/rehberler"
                  className="text-sm text-forest-600 transition-colors hover:text-forest-900"
                >
                  Kamp rehberleri
                </Link>
              </li>
              <li>
                <Link
                  href="/kamp-ekipmanlari"
                  className="text-sm text-forest-600 transition-colors hover:text-forest-900"
                >
                  Kamp ekipmanları
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/kategori/${category.slug}`}
                    className="text-sm text-forest-600 transition-colors hover:text-forest-900"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-forest-800">
              Kurumsal
            </h2>
            <ul className="space-y-2">
              {corporateLinks.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="text-sm text-forest-600 transition-colors hover:text-forest-900"
                  >
                    {page.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-forest-800">
              Popüler Rehberler
            </h2>
            <ul className="space-y-2">
              {getActiveLandingPages()
                .slice(0, 6)
                .map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/${page.slug}`}
                      className="text-sm text-forest-600 transition-colors hover:text-forest-900"
                    >
                      {page.h1}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-forest-100 pt-10">
          <h2 className="mb-8 font-display text-lg font-bold text-forest-800">
            Site Haritası — Bölgelere Göre İller
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {regions.map((region) => (
              <div key={region.slug}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-600">
                  {region.name}
                </h3>
                <ul className="space-y-4">
                  {region.provinces
                    .filter((province) => isProvinceIndexable(province.slug))
                    .map((province) => {
                      const provinceLinkText = getKampAlaniLinkText(
                        province.name
                      );
                      const indexableDistricts = province.districts.filter(
                        (district) =>
                          isDistrictIndexable(province.slug, district.slug)
                      );

                      return (
                        <li key={province.slug}>
                          <Link
                            href={`/kamp-alanlari/${province.slug}`}
                            title={provinceLinkText}
                            className="break-words font-medium text-forest-800 transition-colors hover:text-amber-700"
                          >
                            {provinceLinkText}
                          </Link>
                          {indexableDistricts.length > 0 && (
                            <ul className="mt-1.5 space-y-1 border-l border-forest-200 pl-3">
                              {indexableDistricts.map((district) => {
                                const districtLinkText = getKampAlaniLinkText(
                                  district.name
                                );
                                return (
                                  <li key={district.slug}>
                                    <Link
                                      href={`/kamp-alanlari/${province.slug}/${district.slug}`}
                                      title={districtLinkText}
                                      className="break-words text-sm text-forest-600 transition-colors hover:text-forest-900"
                                    >
                                      {districtLinkText}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-forest-100 pt-8 sm:flex-row">
          <p className="text-sm text-forest-500">
            © {new Date().getFullYear()} {SITE_NAME}. Türkiye&apos;nin kamp
            rehberi.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legalPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="text-sm text-forest-600 transition-colors hover:text-forest-900"
              >
                {page.h1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
