import { getCategoryBySlug } from "@/data/categories";
import { getEquipmentBySlug } from "@/data/equipment";
import type { ContentLink } from "@/lib/types";

export interface EquipmentRelatedItem {
  href: string;
  label: string;
  icon: string;
}

export function resolveEquipmentRelatedItem(
  link: ContentLink
): EquipmentRelatedItem {
  const equipmentMatch = link.href.match(/^\/kamp-ekipmanlari\/([^/]+)\/?$/);
  if (equipmentMatch) {
    const item = getEquipmentBySlug(equipmentMatch[1]);
    return {
      href: link.href,
      label: link.label,
      icon: item?.icon ?? "🎒",
    };
  }

  const categoryMatch = link.href.match(/^\/kategori\/([^/]+)\/?$/);
  if (categoryMatch) {
    const category = getCategoryBySlug(categoryMatch[1]);
    return {
      href: link.href,
      label: link.label,
      icon: category?.icon ?? "🏕️",
    };
  }

  return {
    href: link.href,
    label: link.label,
    icon: "📍",
  };
}

export function resolveEquipmentRelatedItems(
  links: ContentLink[]
): EquipmentRelatedItem[] {
  return links.map(resolveEquipmentRelatedItem);
}
