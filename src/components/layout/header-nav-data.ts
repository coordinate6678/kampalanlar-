import { categories } from "@/data/categories";
import { equipmentItems } from "@/data/equipment";
import { guides } from "@/data/guides";
import type { MobileNavData } from "@/components/layout/header-types";
import { getDistrictsByProvince } from "@/lib/data";
import type { Province } from "@/lib/types";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

export function buildMobileNavData(provinces: Province[]): MobileNavData {
  return {
    hubLink: {
      href: "/kamp-alanlari",
      label: "Tüm kamp alanları rehberi",
    },
    equipment: {
      title: "Kamp Ekipmanları",
      links: [
        { href: "/kamp-ekipmanlari", label: "Tüm ekipman rehberi" },
        ...equipmentItems.map((item) => ({
          href: `/kamp-ekipmanlari/${item.slug}`,
          label: item.name,
          icon: item.icon,
        })),
      ],
    },
    guides: {
      title: "Rehberler",
      links: [
        { href: "/rehberler", label: "Tüm kamp rehberleri" },
        ...guides.map((guide) => ({
          href: `/rehberler/${guide.slug}`,
          label: guide.title,
          icon: guide.icon,
        })),
      ],
    },
    categories: {
      title: "Kategoriler",
      links: categories.map((cat) => ({
        href: `/kategori/${cat.slug}`,
        label: cat.name,
        icon: cat.icon,
      })),
    },
    provinces: provinces.map((province) => ({
      href: `/kamp-alanlari/${province.slug}`,
      label: getKampAlaniLinkText(province.name),
      districts: getDistrictsByProvince(province.slug).map((district) => ({
        href: `/kamp-alanlari/${province.slug}/${district.slug}`,
        label: getKampAlaniLinkText(district.name),
      })),
    })),
  };
}
