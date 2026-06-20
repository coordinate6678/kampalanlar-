export interface Equipment {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const equipmentItems: Equipment[] = [
  {
    slug: "cadir",
    name: "Çadır",
    description: "Barınma ve hava koşullarına karşı koruma",
    icon: "⛺",
  },
  {
    slug: "uyku-tulumu",
    name: "Uyku Tulumu",
    description: "Gece sıcaklığına göre izolasyon sağlar",
    icon: "🛏️",
  },
  {
    slug: "uyku-mati",
    name: "Uyku Matı",
    description: "Zemin soğuğu ve sertlikten korur",
    icon: "🟫",
  },
  {
    slug: "ocak-mangal",
    name: "Ocak ve Mangal",
    description: "Kamp yemeği pişirme ve ısıtma",
    icon: "🔥",
  },
  {
    slug: "aydinlatma",
    name: "Fener ve Kafa Lambası",
    description: "Gece kamp alanında görüş ve güvenlik",
    icon: "🔦",
  },
  {
    slug: "sogutucu",
    name: "Kamp Soğutucusu",
    description: "Yiyecek ve içecekleri taze tutar",
    icon: "🧊",
  },
  {
    slug: "mutfak-gerecleri",
    name: "Kamp Mutfak Seti",
    description: "Tencere, tabak ve pişirme araçları",
    icon: "🍳",
  },
  {
    slug: "giyim",
    name: "Katmanlı Giyim",
    description: "Mevsim ve hava koşullarına uyum",
    icon: "🧥",
  },
  {
    slug: "sirt-cantasi",
    name: "Sırt Çantası",
    description: "Ekipman taşıma ve dağıtım",
    icon: "🎒",
  },
  {
    slug: "su-matri",
    name: "Su Matarası ve Arıtma",
    description: "Hidrasyon ve güvenli içme suyu",
    icon: "💧",
  },
  {
    slug: "navigasyon",
    name: "Harita ve Navigasyon",
    description: "Rota bulma ve yön tayini",
    icon: "🧭",
  },
  {
    slug: "ilk-yardim",
    name: "İlk Yardım Çantası",
    description: "Acil durum ve küçük yaralanmalar",
    icon: "🩹",
  },
  {
    slug: "guc-kaynagi",
    name: "Powerbank ve Solar",
    description: "Telefon, GPS ve aydınlatma şarjı",
    icon: "🔋",
  },
  {
    slug: "kamp-mobilyasi",
    name: "Sandalye ve Masa",
    description: "Kamp alanında konfor ve düzen",
    icon: "🪑",
  },
];

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipmentItems.find((item) => item.slug === slug);
}

export function getEquipmentStaticParams(): { slug: string }[] {
  return equipmentItems.map((item) => ({ slug: item.slug }));
}
