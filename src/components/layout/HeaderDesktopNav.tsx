import Link from "next/link";
import { categories } from "@/data/categories";
import { equipmentItems } from "@/data/equipment";
import { guides } from "@/data/guides";
import type { Province } from "@/lib/types";
import { getDistrictsByProvince } from "@/lib/data";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

interface HeaderDesktopNavProps {
  provinces: Province[];
}

function NavDropdown({
  label,
  children,
  panelClassName = "w-64",
}: {
  label: string;
  children: React.ReactNode;
  panelClassName?: string;
}) {
  return (
    <details className="group relative [&_summary::-webkit-details-marker]:hidden">
      <summary className="cursor-pointer list-none rounded-lg px-4 py-2 text-sm font-medium text-cream hover:bg-forest-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
        {label}
      </summary>
      <div
        className={`absolute left-0 top-full z-50 ${panelClassName} rounded-b-xl bg-white p-4 shadow-2xl border border-forest-100`}
      >
        {children}
      </div>
    </details>
  );
}

export function HeaderDesktopNav({ provinces }: HeaderDesktopNavProps) {
  return (
    <nav
      className="hidden items-center gap-1 lg:flex"
      aria-label="Ana navigasyon"
    >
      <details className="group relative [&_summary::-webkit-details-marker]:hidden">
        <summary className="cursor-pointer list-none rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-forest-900 transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
          Kamp Alanları
        </summary>
        <div className="absolute left-0 top-full z-50 w-[600px] rounded-b-xl bg-white p-6 shadow-2xl border border-forest-100">
          <Link
            href="/kamp-alanlari"
            className="mb-4 inline-flex items-center gap-2 rounded-lg bg-forest-50 px-4 py-2 text-sm font-semibold text-forest-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
          >
            Tüm kamp alanları rehberi →
          </Link>
          <div className="grid grid-cols-2 gap-4">
            {provinces.map((province) => {
              const districts = getDistrictsByProvince(province.slug);
              const provinceLinkText = getKampAlaniLinkText(province.name);
              return (
                <div key={province.slug}>
                  <Link
                    href={`/kamp-alanlari/${province.slug}`}
                    title={provinceLinkText}
                    className="mb-2 block font-semibold text-forest-800 hover:text-amber-600 break-words"
                  >
                    {provinceLinkText}
                  </Link>
                  <ul className="space-y-1">
                    {districts.map((district) => {
                      const districtLinkText = getKampAlaniLinkText(
                        district.name
                      );
                      return (
                        <li key={district.slug}>
                          <Link
                            href={`/kamp-alanlari/${province.slug}/${district.slug}`}
                            title={districtLinkText}
                            className="text-sm text-gray-600 hover:text-forest-700 break-words"
                          >
                            {districtLinkText}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </details>

      <NavDropdown label="Kategoriler ▾">
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/kategori/${cat.slug}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-forest-50 transition-colors"
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </NavDropdown>

      <NavDropdown label="Kamp Ekipmanları ▾" panelClassName="w-72 max-h-[70vh] overflow-y-auto">
        <Link
          href="/kamp-ekipmanlari"
          className="mb-3 block rounded-lg bg-forest-50 px-3 py-2 text-sm font-semibold text-forest-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
        >
          Tüm ekipman rehberi →
        </Link>
        <ul className="space-y-1">
          {equipmentItems.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/kamp-ekipmanlari/${item.slug}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-forest-50 transition-colors"
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </NavDropdown>

      <NavDropdown label="Rehberler ▾" panelClassName="w-80 max-h-[70vh] overflow-y-auto">
        <Link
          href="/rehberler"
          className="mb-3 block rounded-lg bg-forest-50 px-3 py-2 text-sm font-semibold text-forest-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
        >
          Tüm rehberler →
        </Link>
        <ul className="space-y-1">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/rehberler/${guide.slug}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-forest-50 transition-colors"
              >
                <span aria-hidden="true">{guide.icon}</span>
                <span className="line-clamp-2">{guide.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </NavDropdown>
    </nav>
  );
}
