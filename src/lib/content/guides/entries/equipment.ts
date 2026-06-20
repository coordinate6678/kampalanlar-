import { PLACE } from "@/data/media/place-images";
import {
  DEFAULT_GUIDE_AUTHOR,
  GUIDE_PUBLISHED_AT,
  GUIDE_UPDATED_AT,
} from "@/lib/content/guides/constants";
import type { GuideContent } from "@/lib/content/guides/types";

export const equipmentGuides: Record<string, GuideContent> = {
  "kamp-cantasi-hazirlama-rehberi": {
    image: PLACE.fethiye,
    intro:
      "Kamp çantası düzeni hem taşıma konforunu hem kamp alanında ekipman bulmayı kolaylaştırır. Ağırlığı kalçaya yakın tutmak, su ve sık kullanılan eşyaları erişilebilir yerde bulundurmak temel prensiplerdir.",
    sections: [
      {
        id: "cantaya-ne-koyulur",
        heading: "Çantaya Neler Konulmalı?",
        paragraphs: [
          "Hafta sonu kaçamağı için minimum liste: çadır, mat, tulum, ocak, 1 tencere, su matarası (2L), kafa lambası, ilk yardım, powerbank. Uzun rotalarda navigasyon, su arıtma ve yedek giysi eklenir.",
          "Yiyecekleri ayrı su geçirmez torbada taşıyın; sıvı sızıntısı diğer ekipmanı bozar. Buz aküsü ve soğutucu yaz kampında et ve süt ürünleri için gereklidir.",
        ],
      },
      {
        id: "agirlik-dagilimi",
        heading: "Ağırlık Dağılımı Prensipleri",
        paragraphs: [
          "En ağır eşyalar (su, ocak, tencere) sırt çantasının ortasına ve kalçaya yakın konumlandırılır. Hafif ve sık kullanılan eşyalar (yağmurluk, atıştırmalık, harita) üst ceplere yerleştirilir.",
          "Çadır genellikle dış cebe veya alt bağlama noktasına takılır; ağırlığı dengelemek için mat karşı tarafa konur. Toplam ağırlık vücut ağırlığının %20'sini aşmamalıdır.",
        ],
      },
      {
        id: "cantada-duzen",
        heading: "Paketleme ve Düzen İpuçları",
        paragraphs: [
          "Sıkıştırma torbaları (dry bag) giysi ve uyku tulumu hacmini %30–40 azaltır. Renk kodlu torbalar (kırmızı: ilk yardım, mavi: mutfak, yeşil: giysi) kamp alanında arama süresini kısaltır.",
          "Kamp kurulmadan önce çantayı araç bagajından alırken checklist kullanın; unutulan mat veya kazık geceyi zorlaştırır.",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
          { label: "Sırt Çantası Rehberi", href: "/kamp-ekipmanlari/sirt-cantasi" },
        ],
      },
      {
        id: "mevsim-farki",
        heading: "Mevsime Göre Çanta İçeriği",
        paragraphs: [
          "Yaz: hafif giysi, bol su, güneş kremi, böcek kovucu. Kış: ekstra katman, termos, el ısıtıcı, kuru çorba. Geçiş mevsimi: yağmurluk ve polar her zaman çantada olmalıdır.",
          "Deniz kenarı rotalarında rüzgâr kesici; dağ rotalarında termal içlik ve bere zorunlu katmanlardır.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "mugla",
        districtSlug: "fethiye",
        slug: "kabak-koyu-kamp",
      },
      {
        provinceSlug: "artvin",
        districtSlug: "yusufeli",
        slug: "yusufeli-altiparmak-dag-kampi",
      },
    ],
    relatedGuides: [
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
      { label: "Çadır Seçme Rehberi", href: "/rehberler/cadir-secme-rehberi" },
    ],
    faq: [
      {
        question: "Hafta sonu kamp çantası kaç litre olmalı?",
        answer:
          "40–55 litre sırt çantası hafta sonu kaçamağı için yeterlidir. Uzun rotalar ve kış ekipmanı için 60–70 litre tercih edilmelidir.",
      },
      {
        question: "Su ne kadar taşınmalı?",
        answer:
          "Kişi başı günde minimum 2–3 litre planlayın. Su kaynağı olmayan koylarda (Datça, Gökçeada) stok artırılmalıdır.",
      },
      {
        question: "Çadır çantaya mı bagaja mı?",
        answer:
          "Büyük aile çadırları genellikle bagajda taşınır. 2–3 kişilik çadır sırt çantası dış bağlantısına veya bagaja konur.",
      },
      {
        question: "Kamp çantası hazırlama ne zaman yapılmalı?",
        answer:
          "Kamp gününden bir gece önce checklist ile hazırlık yapın; sabah aceleyle paketleme eksik ekipmana yol açar.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "cadir-secme-rehberi": {
    image: PLACE.assosCoast,
    intro:
      "Doğru çadır seçimi kamp türü, mevsim ve kişi sayısına göre yapılmalıdır. Su geçirmezlik, havalandırma, kurulum kolaylığı ve ağırlık temel karşılaştırma kriterleridir.",
    sections: [
      {
        id: "cadir-turleri",
        heading: "Çadır Türleri ve Kapasite",
        paragraphs: [
          "2, 3 ve 4 kişilik çadırlar kişi kapasitesine göre ayrılır; 2 kişilik etiketli çadırda ekipman paylaşımı için alan sınırlıdır. 3 mevsim çadırlar ilkbahar-yaz-sonbahar için uygundur; 4 mevsim modeller kış ve yüksek rakım için tasarlanmıştır.",
          "Pop-up çadırlar hızlı kurulum sunar ancak rüzgâra dayanıklılığı sınırlıdır. Tünel ve kubbe tipi çadırlar meltem gecelerinde daha stabil kalır.",
        ],
      },
      {
        id: "teknik-ozellikler",
        heading: "Su Geçirmezlik ve Havalandırma",
        paragraphs: [
          "Su sütunu değeri (mm) yağmur geçirmezliğini gösterir; 2000 mm ve üzeri Türkiye koşulları için yeterlidir. Çift katmanlı (iç + flysheet) yapı yoğuşmayı önler; mesh paneller yaz sıcaklarında içerideki nemi azaltır.",
          "Yağmurlu havada flysheet ile iç çadır arasına dokunmayın; su sızıntısı olur. Zemin örtüsü (footprint) çadır tabanını çizilmeye karşı korur.",
        ],
        links: [
          { label: "Çadır Ekipman Rehberi", href: "/kamp-ekipmanlari/cadir" },
        ],
      },
      {
        id: "rotaya-gore-secim",
        heading: "Rotaya Göre Çadır Seçimi",
        paragraphs: [
          "Deniz kenarı (Assos, Ayvalık, Kaş): sağlam kazık, gerdirme ipi, 3 mevsim, iyi havalandırma. Dağ (Yusufeli, Kazdağı): 4 mevsim, düşük profilli, rüzgâr direnci yüksek. Orman (Kartepe, Olympos): hafif 3 mevsim, hızlı kurulum.",
          "Olympos ve Kabak gibi popüler noktalarda çadır kurulum alanı tesis yönetimince belirlenir; büyük aile çadırları için alan sınırlaması sorulmalıdır.",
        ],
        links: [
          {
            label: "Assos Kadırga Kamp",
            href: "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp",
          },
          {
            label: "Yusufeli Altiparmak Dağ Kampı",
            href: "/kamp-alanlari/artvin/yusufeli/yusufeli-altiparmak-dag-kampi",
          },
        ],
      },
      {
        id: "bakim-saklama",
        heading: "Bakım ve Saklama",
        paragraphs: [
          "İlk kurulumu evde deneyin; sahilde gece pratik yapmaktan kaçının. Kuru çadırı iyice havalandırıp evde saklayın; nemli saklama küf oluşturur.",
          "Kazık ve iplerin yedek setini çantada bulundurun; kayalık zeminlerde plastik kazık kırılabilir.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "canakkale",
        districtSlug: "assos",
        slug: "assos-kadirga-kamp",
      },
      {
        provinceSlug: "antalya",
        districtSlug: "olympos",
        slug: "olympos-adrasan-koyu-kampi",
      },
      {
        provinceSlug: "artvin",
        districtSlug: "yusufeli",
        slug: "yusufeli-altiparmak-dag-kampi",
      },
    ],
    relatedGuides: [
      { label: "Yaz Kampı vs Kış Kampı", href: "/rehberler/yaz-kampi-vs-kis-kampi" },
      { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
    ],
    faq: [
      {
        question: "3 mevsim mu 4 mevsim çadır mı almalıyım?",
        answer:
          "Yaz ve geçiş mevsimi kıyı/orman kampı için 3 mevsim yeterlidir. Kış kampı ve yüksek rakım (Yusufeli, Kazdağı) için 4 mevsim şarttır.",
      },
      {
        question: "2 kişilik çadır gerçekten 2 kişi alır mı?",
        answer:
          "Etiket kapasitesi minimum alan içindir. Ekipman paylaşımı için 2 kişi + eşya = 3 kişilik çadır tercih edilmelidir.",
      },
      {
        question: "Su sütunu değeri ne olmalı?",
        answer:
          "2000 mm flysheet ve 3000 mm+ zemin için Türkiye yağış koşullarında yeterlidir.",
      },
      {
        question: "En kolay kurulan çadır hangisi?",
        answer:
          "Pop-up modeller en hızlı kurulur ancak rüzgâra dayanıksızdır. Tünel çadırlar hız-kararlılık dengesi sunar.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "kamp-ekipmanlari-kontrol-listesi": {
    image: PLACE.kartepe,
    intro:
      "Kamp öncesi kontrol listesi unutulan ekipmanı önler ve güvenli bir deneyim sağlar. Aşağıdaki listeyi kamp türünüze göre uyarlayın; deniz kenarı, dağ ve kış kampı ek maddeler gerektirir.",
    sections: [
      {
        id: "barinma",
        heading: "Barınma ve Uyku",
        paragraphs: [
          "Çadır, kazık, gerdirme ipi, zemin örtüsü, uyku matı, uyku tulumu, yastık veya katlanır yastık. Çadır kurulumunu evde test edin.",
        ],
        checklist: [
          "Çadır (flysheet + iç çadır + kazık + ip)",
          "Zemin örtüsü (footprint)",
          "Uyku matı (R-değeri mevsime uygun)",
          "Uyku tulumu (konfor derecesi gece min. -5°C altında)",
          "Yastık veya katlanır yastık",
        ],
      },
      {
        id: "mutfak",
        heading: "Mutfak ve Su",
        paragraphs: [
          "Ocak, yakıt, tencere, su matarası ve mutfak gereçleri temel mutfak setidir. Su stokunu rota bazında planlayın.",
        ],
        checklist: [
          "Ocak ve yedek kartuş",
          "Tencere / tava / tabak / çatal-bıçak",
          "Su matarası (kişi başı 2L+ / gün)",
          "Kamp soğutucusu (yaz)",
          "Bulaşık süngeri ve biyobozunur deterjan",
        ],
      },
      {
        id: "guvenlik-giyim",
        heading: "Güvenlik, Giyim ve Aydınlatma",
        paragraphs: [
          "İlk yardım, aydınlatma ve katmanlı giyim her kamp türünde zorunludur. Powerbank telefon ve GPS için yedek güç sağlar.",
        ],
        checklist: [
          "Kafa lambası + yedek pil",
          "İlk yardım çantası",
          "Powerbank veya solar şarj",
          "Yağmurluk ve polar / termal içlik",
          "Güneş kremi ve şapka (yaz)",
          "Harita veya offline GPS",
        ],
      },
      {
        id: "kontrol-oncesi",
        heading: "Yola Çıkmadan Önce Son Kontrol",
        paragraphs: [
          "Hava durumu, tesis rezervasyonu, rota trafiği ve market alışverişi son kontrol maddeleridir. Kamp dönüşünde çadırı kuruyarak kurutun.",
        ],
        checklist: [
          "Hava durumu 3 günlük tahmin kontrol edildi",
          "Tesis rezervasyonu / iletişim yapıldı",
          "Market alışverişi tamamlandı",
          "Araç lastik ve yakıt kontrol edildi",
          "Acil durum numaraları kayıtlı",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "izmit",
        districtSlug: "kartepe",
        slug: "kartepe-orman-kampi",
      },
    ],
    relatedGuides: [
      { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
      { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
      { label: "Kamp Ekipmanları Ana Sayfa", href: "/kamp-ekipmanlari" },
    ],
    faq: [
      {
        question: "Minimum kamp ekipman listesi nedir?",
        answer:
          "Çadır, mat, tulum, ocak, su matarası, kafa lambası ve ilk yardım çantası minimum settir.",
      },
      {
        question: "Kontrol listesi ne zaman kullanılmalı?",
        answer:
          "Paketleme sırasında ve yola çıkmadan 1 saat önce son kez gözden geçirilmelidir.",
      },
      {
        question: "Deniz kenarı kampında ekstra ne gerekir?",
        answer:
          "Rüzgâr ipi, kum torbası, güneş kremi, bol su ve rüzgâr kesici katman eklenmelidir.",
      },
      {
        question: "Kış kampında listeye ne eklenir?",
        answer:
          "4 mevsim çadır, -10°C tulum, termos, el ısıtıcı, bere, eldiven ve yedek katman zorunludur.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },
};
