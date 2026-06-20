import Link from "next/link";
import { getFooterRegions } from "@/lib/data";
import { getActiveLandingPages } from "@/lib/landing-pages";
import { getAllCorporatePages } from "@/data/corporate-pages";
import {
  isDistrictIndexable,
  isProvinceIndexable,
} from "@/lib/seo/indexability";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

export function Footer() {
  const regions = getFooterRegions();

  return (
    <footer className="mt-auto bg-forest-900 text-forest-200">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <h2 className="mb-8 font-display text-lg font-bold text-cream">
          Site Haritası — Bölgelere Göre İller
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {regions.map((region) => (
            <div key={region.slug}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-400">
                {region.name}
              </h3>
              <ul className="space-y-4">
                {region.provinces
                  .filter((province) => isProvinceIndexable(province.slug))
                  .map((province) => {
                  const provinceLinkText = getKampAlaniLinkText(province.name);
                  const indexableDistricts = province.districts.filter(
                    (district) =>
                      isDistrictIndexable(province.slug, district.slug)
                  );

                  return (
                    <li key={province.slug}>
                      <Link
                        href={`/kamp-alanlari/${province.slug}`}
                        title={provinceLinkText}
                        className="font-medium text-cream hover:text-amber-400 transition-colors break-words"
                      >
                        {provinceLinkText}
                      </Link>
                      {indexableDistricts.length > 0 && (
                        <ul className="mt-1.5 space-y-1 pl-3 border-l border-forest-700">
                          {indexableDistricts.map((district) => {
                            const districtLinkText = getKampAlaniLinkText(
                              district.name
                            );
                            return (
                              <li key={district.slug}>
                                <Link
                                  href={`/kamp-alanlari/${province.slug}/${district.slug}`}
                                  title={districtLinkText}
                                  className="text-sm text-forest-300 hover:text-amber-400 transition-colors break-words"
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

        <div className="mt-10 border-t border-forest-700 pt-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-amber-400">
            Kurumsal
          </h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {getAllCorporatePages().map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="text-sm text-forest-300 hover:text-amber-400 transition-colors"
              >
                {page.h1}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-forest-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">⛺</span>
              <span className="font-display font-bold text-cream">
                kampalanlari.co
              </span>
            </div>
            <Link
              href="/kamp-alanlari"
              className="text-sm text-forest-300 hover:text-amber-400 transition-colors"
            >
              Kamp alanları rehberi
            </Link>
            <Link
              href="/rehberler"
              className="text-sm text-forest-300 hover:text-amber-400 transition-colors"
            >
              Kamp rehberleri
            </Link>
            {getActiveLandingPages()
              .slice(0, 4)
              .map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="text-sm text-forest-300 hover:text-amber-400 transition-colors"
                >
                  {page.h1}
                </Link>
              ))}
          </div>
          <p className="text-sm text-forest-400">
            © {new Date().getFullYear()} Kamp Alanları. Türkiye&apos;nin kamp
            rehberi.
          </p>
        </div>
      </div>
    </footer>
  );
}
