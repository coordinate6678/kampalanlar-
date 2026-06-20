import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "deniz-kenari",
    name: "Deniz Kenarı",
    description: "Sahil ve koylarda kamp yapma imkânı sunan alanlar",
    icon: "🌊",
  },
  {
    slug: "dag",
    name: "Dağ",
    description: "Yüksek rakımlı, doğa ile iç içe dağ kamp alanları",
    icon: "⛰️",
  },
  {
    slug: "orman",
    name: "Orman",
    description: "Çam ve meşe ormanları içinde kamp seçenekleri",
    icon: "🌲",
  },
  {
    slug: "kislik",
    name: "Kışlık",
    description: "Dört mevsim açık veya kış kampına uygun alanlar",
    icon: "❄️",
  },
  {
    slug: "festival",
    name: "Festival",
    description: "Müzik ve kültür festivallerine ev sahipliği yapan kamp alanları",
    icon: "🎪",
  },
  {
    slug: "karavan",
    name: "Karavan",
    description: "Karavan parkı ve elektrik/su bağlantısı olan alanlar",
    icon: "🚐",
  },
  {
    slug: "bungalov",
    name: "Bungalov",
    description: "Konforlu konaklama ile doğa deneyimini birleştiren tesisler",
    icon: "🏡",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
