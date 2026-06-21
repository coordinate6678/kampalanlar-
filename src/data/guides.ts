export type GuideCategory =
  | "kamp-alanlari"
  | "baslangic"
  | "ekipman"
  | "guvenlik";

export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: GuideCategory;
}

export const GUIDE_CATEGORY_LABELS: Record<GuideCategory, string> = {
  "kamp-alanlari": "Kamp Alanları Rehberleri",
  baslangic: "Başlangıç Rehberleri",
  ekipman: "Ekipman Rehberleri",
  guvenlik: "Güvenlik Rehberleri",
};

export const guides: Guide[] = [
  {
    slug: "en-iyi-ucretsiz-kamp-alanlari",
    title: "Türkiye'deki En İyi Ücretsiz Kamp Alanları",
    description:
      "Sahil, orman ve yaylada ücretsiz veya düşük maliyetli kamp yapılabilecek doğal alanlar rehberi.",
    icon: "🏕️",
    category: "kamp-alanlari",
  },
  {
    slug: "istanbul-yakin-kamp-alanlari",
    title: "İstanbul'a Yakın Kamp Alanları",
    description:
      "Hafta sonu kaçamağı için İstanbul'dan 1–3 saat mesafedeki kamp rotaları ve tesis önerileri.",
    icon: "🌲",
    category: "kamp-alanlari",
  },
  {
    slug: "karavanla-gidilebilecek-kamp-alanlari",
    title: "Karavanla Gidilebilecek Kamp Alanları",
    description:
      "Elektrik, su ve gri su altyapısı olan karavan parkları ve rota planlama ipuçları.",
    icon: "🚐",
    category: "kamp-alanlari",
  },
  {
    slug: "deniz-kenari-kamp-rehberi",
    title: "Deniz Kenarı Kamp Alanları Rehberi",
    description:
      "Ege ve Akdeniz kıyılarında meltem, koy seçimi ve deniz kenarı kamp güvenliği.",
    icon: "🌊",
    category: "kamp-alanlari",
  },
  {
    slug: "ilk-kez-kamp-rehberi",
    title: "İlk Kez Kamp Yapacaklar İçin Rehber",
    description:
      "İlk kamp deneyiminiz için adım adım planlama, ekipman ve alan seçimi.",
    icon: "🎒",
    category: "baslangic",
  },
  {
    slug: "kamp-cantasi-hazirlama-rehberi",
    title: "Kamp Çantası Hazırlama Rehberi",
    description:
      "Hafta sonu ve uzun rotalar için çanta düzeni, ağırlık dağılımı ve paketleme listesi.",
    icon: "🎒",
    category: "ekipman",
  },
  {
    slug: "kamp-guvenligi-rehberi",
    title: "Kamp Güvenliği Rehberi",
    description:
      "Yaban hayatı, hava koşulları, yangın ve gece güvenliği için pratik önlemler.",
    icon: "🛡️",
    category: "guvenlik",
  },
  {
    slug: "yaz-kampi-vs-kis-kampi",
    title: "Yaz Kampı vs Kış Kampı",
    description:
      "Mevsimlere göre ekipman, rota ve konfor farkları; hangi kamp türü size uygun?",
    icon: "☀️",
    category: "baslangic",
  },
  {
    slug: "cadir-secme-rehberi",
    title: "Çadır Seçme Rehberi",
    description:
      "Kapasite, mevsim, su geçirmezlik ve kurulum tipine göre çadır seçimi.",
    icon: "⛺",
    category: "ekipman",
  },
  {
    slug: "kamp-ekipmanlari-kontrol-listesi",
    title: "Kamp Ekipmanları Kontrol Listesi",
    description:
      "Kamp öncesi ve kamp sırasında kontrol edilmesi gereken temel ekipman maddeleri.",
    icon: "✅",
    category: "ekipman",
  },
  {
    slug: "kamp-atesi-rehberi",
    title: "Kamp Ateşi Rehberi",
    description:
      "Güvenli ateş çukuru kurulumu, yangın yasağı dönemleri ve söndürme protokolü.",
    icon: "🔥",
    category: "guvenlik",
  },
  {
    slug: "kampta-yemek-pisirme-rehberi",
    title: "Kampta Yemek Pişirme Rehberi",
    description:
      "Kamp mutfağı temelleri, ocak kullanımı, malzeme saklama ve yiyecek güvenliği.",
    icon: "🍳",
    category: "ekipman",
  },
  {
    slug: "sirt-cantasiyla-kamp-rehberi",
    title: "Sırt Çantasıyla Kamp Rehberi",
    description:
      "Backpacking temelleri, ultralight mantık, su arıtma ve rota planlama ilkeleri.",
    icon: "🥾",
    category: "baslangic",
  },
  {
    slug: "aile-ile-kamp-rehberi",
    title: "Aile ile Kamp Rehberi",
    description:
      "Çocuklu kampta güvenlik, eğlence aktiviteleri ve yaş gruplarına göre paketleme.",
    icon: "👨‍👩‍👧‍👦",
    category: "baslangic",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: GuideCategory): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function getGuideStaticParams(): { slug: string }[] {
  return guides.map((g) => ({ slug: g.slug }));
}
