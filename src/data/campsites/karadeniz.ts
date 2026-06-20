import type { Campsite } from "@/lib/types";
import { IMAGES, mapEmbed } from "./helpers";

export const karadenizCampsites: Campsite[] = [
  {
    slug: "yusufeli-coruh-nehri-kampi",
    name: "Yusufeli Çoruh Nehri Kampı",
    provinceSlug: "artvin",
    districtSlug: "yusufeli",
    shortDescription:
      "Çoruh Nehri kıyısında rafting üssü yakınında dağ manzaralı nehir kampı.",
    description:
      "Yusufeli Çoruh Nehri Kampı, Artvin'in Yusufeli ilçesinde, dünyaca ünlü Çoruh Nehri'nin kıyısında konumlanmış macera turizmi odaklı bir kamp alanıdır. Rafting ve kano tutkunları için ideal bir üs noktası olan tesis, nehir sesi eşliğinde kamp yapma imkânı sunar. Kamp alanı çadır turizmine özeldir; nehir kenarındaki düz alanlar güvenli çadır kurulumu için uygundur. Yusufeli merkeze 5 km mesafede olan tesis, rafting tur operatörlerine yürüme mesafesindedir. Çevredeki dağ yamaçları trekking ve dağ bisikleti rotalarına ev sahipliği yapar. Akşamları nehir kenarında kamp ateşi yakılırken Karadeniz'in serin havası ferahlatıcı bir ortam yaratır. Yusufeli Barajı ve çevre köylerin geleneksel mimarisi gezilebilir. Doğa sporları meraklıları için dört mevsim cazip bir destinasyondur. Çoruh rafting sezonu genellikle ilkbahar ve yaz aylarında yoğundur. Nehir kenarında kaymaz ayakkabı ve hızlı kuruyan kıyafet önerilir. Çoruh Vadisi'nde endemik kuş türleri gözlemlemek kuş severler için cazip bir aktivitedir.",
    features: [
      { icon: "🚣", label: "Rafting Üssü" },
      { icon: "🏔️", label: "Dağ Manzarası" },
      { icon: "🥾", label: "Trekking" },
      { icon: "🔥", label: "Nehir Kenarı Kamp" },
      { icon: "🚴", label: "Dağ Bisikleti" },
    ],
    images: [IMAGES.mountain, IMAGES.valley, IMAGES.camp],
    rating: 4.7,
    reviewCount: 89,
    category: "dag",
    coordinates: { lat: 40.82, lng: 41.54 },
    googleMapsEmbed: mapEmbed(40.82, 41.54),
    transport:
      "Artvin-Yusufeli karayolunda ilçe merkezine 5 km. Nehir kenarı tabelaları mevcuttur.",
    createdAt: "2026-01-20",
  },
  {
    slug: "yusufeli-altiparmak-dag-kampi",
    name: "Yusufeli Altıparmak Dağ Kampı",
    provinceSlug: "artvin",
    districtSlug: "yusufeli",
    shortDescription:
      "Kaçkar Dağları eteklerinde yayla havasında yüksek rakımlı dağ kampı.",
    description:
      "Yusufeli Altıparmak Dağ Kampı, Yusufeli'nin arkasındaki Altıparmak Dağları'nın eteklerinde, yayla havasında yüksek rakımlı bir konumda yer alır. Kaçkar Dağları trekking rotalarına yakınlığıyla dağcılar ve doğa yürüyüşçüleri tarafından tercih edilir. Yaz aylarında serin havası şehir sıcaklarından kaçmak isteyenler için idealdir. Kamp alanı çadır turizmine özeldir; yayla çayırlıkları düz zemin sağlar. Gece gökyüzü ışık kirliliğinden arınmıştır; yıldız gözlemi için mükemmel koşullar sunar. Yerel yaylacıların geleneksel peynir ve bal ürünleri tadılabilir. Sabahları dağ sisleri arasından güneş doğarken, öğleden sonra Çoruh Vadisi'nin panoramik manzarası açılır. Elektrik bağlantısı sınırlıdır; doğayla uyumlu kamp deneyimi hedeflenir. Kaçkar rotalarına çıkmadan önce hava durumunu kontrol edin. Yayla balı ve köy peyniri kahvaltıda taze olarak servis edilir. Yayla kampında yıldız gözlemi için dürbün getirmeniz deneyimi zenginleştirir. Yusufeli'nin geleneksel taş köprüleri ve camileri kamp sonrası tarih turu için ziyaret edilebilir.",
    features: [
      { icon: "⛰️", label: "Kaçkar Yakını" },
      { icon: "🌿", label: "Yayla Çayırlığı" },
      { icon: "⭐", label: "Yıldız Gözlemi" },
      { icon: "🥾", label: "Dağ Trekking" },
      { icon: "🧀", label: "Yerel Ürünler" },
    ],
    images: [IMAGES.mountain, IMAGES.forest, IMAGES.sunset],
    rating: 4.8,
    reviewCount: 54,
    category: "dag",
    coordinates: { lat: 40.85, lng: 41.58 },
    googleMapsEmbed: mapEmbed(40.85, 41.58, 12),
    transport:
      "Yusufeli merkezden Altıparmak yayla yoluna 15 km. Son 5 km toprak yol.",
    createdAt: "2025-12-18",
  },
  {
    slug: "mudurnu-lake-abant-kampi",
    name: "Mudurnu Abant Gölü Kampı",
    provinceSlug: "bolu",
    districtSlug: "mudurnu",
    shortDescription:
      "Mudurnu yakınında çam ormanı içinde göl kenarında dört mevsim kamp.",
    description:
      "Mudurnu Abant Gölü Kampı, Bolu'nun tarihi Mudurnu ilçesine yakın, çam ormanıyla çevrili göl kenarında konumlanmış dört mevsim kamp tesisidir. Abant Gölü'nün sakin suları ve orman manzarası kamp deneyimine huzurlu bir atmosfer katar. Tesis çadır ve karavan kampına uygundur; kış aylarında kar manzarası eşliğinde kamp yapma imkânı sunar. Göl çevresindeki yürüyüş parkuru 5 kilometre uzunluğundadır; bisiklet kiralama hizmeti mevcuttur. Mudurnu'nun Osmanlı dönemi evleri ve tarihi çarşısı 20 km mesafede gezilebilir. Sonbaharda yaprak dökümü, kışın kar örtüsü, ilkbaharda çiçek açan ağaçlar her mevsim farklı bir güzellik sunar. Aileler ve hafta sonu kaçamakları için İstanbul ve Ankara'dan kolay ulaşım imkânı sağlar. Abant Gölü çevresi dört mevsim farklı güzellikler sunar. Kış aylarında kar lastiği ve kalın uyku tulumu şarttır. Göl kenarında sabah sisleri fotoğraf tutkunlarına mistik kareler sunar.",
    features: [
      { icon: "🏞️", label: "Göl Kenarı" },
      { icon: "🌲", label: "Çam Ormanı" },
      { icon: "🚐", label: "Karavan Uyumlu" },
      { icon: "❄️", label: "Kış Kampı" },
      { icon: "🚲", label: "Bisiklet Yolu" },
    ],
    images: [IMAGES.forest, IMAGES.pine, IMAGES.valley],
    rating: 4.4,
    reviewCount: 187,
    category: "orman",
    coordinates: { lat: 40.48, lng: 31.58 },
    googleMapsEmbed: mapEmbed(40.48, 31.58),
    transport:
      "Ankara-İstanbul karayolunda Mudurnu çıkışını takip edin. Göl yönü 12 km.",
    createdAt: "2025-11-22",
  },
  {
    slug: "mudurnu-tarihi-kent-kampi",
    name: "Mudurnu Tarihi Kent Kampı",
    provinceSlug: "bolu",
    districtSlug: "mudurnu",
    shortDescription:
      "Osmanlı mimarili Mudurnu sokaklarında tarihi doku içinde butik kamp.",
    description:
      "Mudurnu Tarihi Kent Kampı, Bolu'nun Osmanlı döneminden kalma ahşap evleriyle ünlü Mudurnu ilçesinde, tarihi kent dokusu içinde konumlanmış butik bir kamp tesisidir. Mudurnu Çarşısı'nın hemen yanında yer alan kamp alanı, tarih ve doğa turizmini bir arada sunar. Çadır alanları tarihi yapıların arkasındaki yeşil alanda düzenlenmiştir. Mudurnu'nun ünlü Mudurnu peyniri, balı ve el sanatları keşfedilebilir. İlçenin camileri, hamamları ve geleneksel konakları gezilebilir. Abant Gölü ve Yedigöller Milli Parkı günübirlik turlarla ulaşılabilir mesafededir. Akşamları tarihi çarşıda yürüyüş yapılabilir; yerel restoranlarda Bolu mutfağının lezzetleri tadılabilir. Sakin atmosferi ve kültürel zenginliğiyle farklı bir kamp deneyimi arayanlar için idealdir. Mudurnu'nun Osmanlı sokakları sabah erken saatlerde en sakin halindedir. Yedigöller turu için araç kiralama veya rehberli gezi ayarlanabilir. Mudurnu peyniri ve balı hediyelik olarak satın alınabilir; yerel üreticilerden temin edin.",
    features: [
      { icon: "🏛️", label: "Osmanlı Mimarisi" },
      { icon: "🧀", label: "Yerel Peynir" },
      { icon: "🥾", label: "Tarihi Gezi" },
      { icon: "🏞️", label: "Abant Yakını" },
      { icon: "🍽️", label: "Bolu Mutfağı" },
    ],
    images: [IMAGES.camp, IMAGES.valley, IMAGES.forest],
    rating: 4.3,
    reviewCount: 72,
    category: "kislik",
    coordinates: { lat: 40.47, lng: 31.21 },
    googleMapsEmbed: mapEmbed(40.47, 31.21, 14),
    transport:
      "Bolu merkezden Mudurnu'ya 52 km. Tarihi kent merkezinde kamp alanı tabelası.",
    createdAt: "2026-02-28",
  },
];
