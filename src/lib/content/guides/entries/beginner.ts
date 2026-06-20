import { PLACE } from "@/data/media/place-images";
import {
  DEFAULT_GUIDE_AUTHOR,
  GUIDE_PUBLISHED_AT,
  GUIDE_UPDATED_AT,
} from "@/lib/content/guides/constants";
import type { GuideContent } from "@/lib/content/guides/types";

export const beginnerGuides: Record<string, GuideContent> = {
  "ilk-kez-kamp-rehberi": {
    image: PLACE.kabakBeach,
    intro:
      "İlk kamp deneyimi doğru planlama, uygun alan seçimi ve temel ekipmanla sorunsuz geçer. Altyapılı bir tesisle başlamak (tuvalet, duş, güvenlik) ilk gece stresini azaltır; deneyim kazandıkça daha izole doğal alanlara geçebilirsiniz.",
    sections: [
      {
        id: "ilk-adimlar",
        heading: "İlk Kamp İçin Adım Adım Plan",
        paragraphs: [
          "Önce kamp türünüzü belirleyin: hafta sonu kaçamağı mı, deniz kenarı mı, orman mı? Buna göre rota ve ekipman listesi değişir. İlk kamp için 1 gece 2 gün planı idealdir; uzun rotalar beklenmedik sorunlarla karşılaşıldığında yorgunluk yaratır.",
          "Hava durumunu kamp gününden 3 gün önce takip etmeye başlayın; ani yağış veya fırtına planı değiştirebilir. Tesisle önceden iletişim kurarak rezervasyon, giriş saati ve kuralları netleştirin.",
        ],
      },
      {
        id: "temel-ekipman",
        heading: "İlk Kamp İçin Temel Ekipman",
        paragraphs: [
          "Minimum set: çadır, uyku matı, uyku tulumu (+10°C konfor), kafa lambası, ocak, su matarası, ilk yardım çantası. Market alışverişini evden yapın; kırsal tesislerde seçenek sınırlıdır.",
          "Çadır kurulumunu evde veya parkta en az bir kez deneyin; gece karanlığında ilk kurulum stresli olabilir. Uyku tulumu konfor derecesini gece minimum sıcaklığının 5°C altında seçin.",
        ],
        links: [
          { label: "Çadır Seçme Rehberi", href: "/rehberler/cadir-secme-rehberi" },
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "alan-secimi",
        heading: "İlk Kamp İçin Alan Seçimi",
        paragraphs: [
          "Kartepe orman kampı ve Abant Gölü altyapılı tesislerle ilk kamp için uygundur. Deniz kenarı isteyenler Assos Kadırga veya Ayvalık Sarımsaklı ile başlayabilir; meltem gecelerinde sağlam kurulum şarttır.",
          "Kalabalık dönemlerden (temmuz-ağustos) kaçınmak hem fiyat hem konfor açısından avantaj sağlar. Mayıs-haziran ve eylül ideal başlangıç aylarıdır.",
        ],
        links: [
          {
            label: "Kartepe Orman Kampı",
            href: "/kamp-alanlari/izmit/kartepe/kartepe-orman-kampi",
          },
          {
            label: "İstanbul'a Yakın Kamp Alanları",
            href: "/rehberler/istanbul-yakin-kamp-alanlari",
          },
        ],
      },
      {
        id: "ilk-gece",
        heading: "İlk Gece İpuçları",
        paragraphs: [
          "Kamp kurulumunu gün batımından en az 2 saat önce tamamlayın. Komşu çadırlara saygılı mesafe bırakın; gece sessizliğine uyun. Değerli eşyaları çadırda görünür bırakmayın.",
          "Sabah erken kalkarak çevreyi keşfedin; gün ışığı hem güvenlik hem fotoğraf için değerlidir. Ayrılırken alanı temiz bırakın; çöp bırakmak hem etik dışı hem yasal sorun yaratabilir.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "izmit",
        districtSlug: "kartepe",
        slug: "kartepe-orman-kampi",
      },
      {
        provinceSlug: "bolu",
        districtSlug: "mudurnu",
        slug: "mudurnu-lake-abant-kampi",
      },
      {
        provinceSlug: "canakkale",
        districtSlug: "assos",
        slug: "assos-kadirga-kamp",
      },
    ],
    relatedGuides: [
      { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
      { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
    ],
    faq: [
      {
        question: "İlk kamp için kaç gece yeterli?",
        answer:
          "1 gece 2 gün ideal başlangıç süresidir. Deneyim kazandıkça 2–3 gecelik rotalara geçilebilir.",
      },
      {
        question: "İlk kamp için en kolay alan hangisi?",
        answer:
          "Kartepe orman kampı ve Abant Gölü tuvalet, duş ve güvenlik altyapısıyla ilk kamp için en uygun seçeneklerdir.",
      },
      {
        question: "İlk kamp için ne kadar bütçe gerekir?",
        answer:
          "Temel ekipman (çadır, mat, tulum) bir kerelik yatırımdır. Tesis ücreti gecelik 150–400 TL arasında değişir; market alışverişi kişi başı 200–500 TL planlanabilir.",
      },
      {
        question: "Tek başına ilk kamp yapılabilir mi?",
        answer:
          "Mümkün olsa da grup veya arkadaşla başlamak güvenlik ve ekipman paylaşımı açısından avantajlıdır.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "yaz-kampi-vs-kis-kampi": {
    image: PLACE.abantLake,
    intro:
      "Yaz ve kış kampı aynı ekipman ve rota mantığıyla planlanamaz. Sıcaklık farkı, gün ışığı süresi, su ihtiyacı ve çadır tipi mevsime göre kökten değişir. Doğru mevsim-ekipman eşleşmesi konfor ve güvenliği belirler.",
    sections: [
      {
        id: "yaz-kampi",
        heading: "Yaz Kampı: Özellikler ve Ekipman",
        paragraphs: [
          "Yaz kampında öncelik güneş koruma, hidrasyon ve havalandırmadır. İnce uyku tulumu (+10°C), hafif 3 mevsim çadır, güneş kremi ve bol su stoku şarttır. Deniz kenarında meltem geceleri serinlik getirir; ince polar katman yeterlidir.",
          "Popüler rotalar (Olympos, Kabak, Ayvalık) temmuz-ağustos'ta kalabalık ve pahalıdır. Mayıs-haziran ve eylül hem sıcaklık hem kalabalık açısından idealdir.",
        ],
        links: [
          {
            label: "Deniz Kenarı Kamp Rehberi",
            href: "/rehberler/deniz-kenari-kamp-rehberi",
          },
          {
            label: "Kabak Koyu Kamp",
            href: "/kamp-alanlari/mugla/fethiye/kabak-koyu-kamp",
          },
        ],
      },
      {
        id: "kis-kampi",
        heading: "Kış Kampı: Özellikler ve Ekipman",
        paragraphs: [
          "Kış kampında dört mevsim çadır, -10°C konfor tulumu, yüksek R-değerli mat ve katmanlı giyim zorunludur. Kartepe ve Abant ocak-şubat döneminde kar yağışı sunar; gece sıcaklığı -15°C'ye kadar inebilir.",
          "Gün ışığı 9–10 saatle sınırlıdır; aktivite planlaması 07:00–16:00 aralığına sıkıştırılmalıdır. Termos, kafa feneri ve ekstra battaniye standart ekipmandır.",
        ],
        links: [
          {
            label: "Abant Gölü Kampı",
            href: "/kamp-alanlari/bolu/mudurnu/mudurnu-lake-abant-kampi",
          },
          {
            label: "Kışlık Kamp Kategorisi",
            href: "/kategori/kislik",
          },
        ],
      },
      {
        id: "karsilastirma",
        heading: "Yaz vs Kış: Hızlı Karşılaştırma",
        paragraphs: [
          "Yaz kampı daha hafif ekipman, daha uzun gün ışığı ve daha geniş rota seçeneği sunar. Kış kampı teknik bilgi, pahalı ekipman ve hava koşullarına uyum gerektirir; yeni başlayanlar için yaz ve geç sonbahar daha uygundur.",
          "Geçiş mevsimleri (mayıs, eylül) her iki dünyanın avantajını birleştirir: gündüz sıcağı, gece serinliği. Bu dönemde +5°C tulum ve 3 mevsim çadır çoğu rota için yeterlidir.",
        ],
      },
      {
        id: "rota-onerileri",
        heading: "Mevsime Göre Rota Önerileri",
        paragraphs: [
          "Yaz: Kaş Kaputaş, Ayvalık Cunda, Olympos Adrasan, Datça Palamutbükü. Kış: Abant Gölü, Kartepe, Yusufeli yaylaları (ileri seviye). Sonbahar: Kazdağı Edremit, Kalkan Bezirgan Yaylası.",
          "Mevsim dışı rota seçimi hem konfor hem güvenlik riski taşır; kış ekipmanı olmadan Abant ocak ayında kamp yapmak tehlikelidir.",
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
        provinceSlug: "bolu",
        districtSlug: "mudurnu",
        slug: "mudurnu-lake-abant-kampi",
      },
      {
        provinceSlug: "izmit",
        districtSlug: "kartepe",
        slug: "kartepe-orman-kampi",
      },
    ],
    relatedGuides: [
      { label: "Çadır Seçme Rehberi", href: "/rehberler/cadir-secme-rehberi" },
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
    ],
    faq: [
      {
        question: "Yaz kampında hangi uyku tulumu yeterli?",
        answer:
          "+10°C veya +5°C konfor dereceli ince tulum yaz kıyı kampı için yeterlidir. Dağ rotalarında +5°C tercih edilmelidir.",
      },
      {
        question: "Kış kampı için minimum ekipman nedir?",
        answer:
          "4 mevsim çadır, -10°C konfor tulumu, R-değeri 5+ mat, katmanlı giyim, termos ve kafa feneri minimum setidir.",
      },
      {
        question: "Hangi ay kamp için en ideal?",
        answer:
          "Mayıs-haziran ve eylül-ekim hem sıcaklık hem kalabalık açısından en dengeli aylardır.",
      },
      {
        question: "Kışın deniz kenarı kamp yapılır mı?",
        answer:
          "Teknik olarak mümkün olsa da gece nem, rüzgâr ve soğuk deniz kenarında konforu ciddi düşürür; kış kampı için iç bölgeler (Abant, Kartepe) tercih edilmelidir.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },
};
