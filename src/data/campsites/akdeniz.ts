import type { Campsite } from "@/lib/types";
import { IMAGES, mapEmbed } from "./helpers";

export const akdenizCampsites: Campsite[] = [
  {
    slug: "kas-peninsula-kamp",
    name: "Kaş Peninsula Kamp",
    provinceSlug: "antalya",
    districtSlug: "kas",
    shortDescription:
      "Likya Yolu üzerinde Meis Adası manzaralı yüksek rakımlı kamp alanı.",
    description:
      "Kaş Peninsula Kamp, Çukurbağ Yarımadası'nın en yüksek noktalarından birinde konumlanarak Meis Adası ve Kaş limanının eşsiz manzarasını sunar. Likya Yolu trekking rotasına doğrudan bağlantılı olan tesis, yürüyüşçüler için ideal bir üs noktasıdır. Dalış merkezlerine 10 dakika mesafede olan kamp alanı, su altı dünyasını keşfetmek isteyenler için cazip bir konumdadır. Gece gökyüzü gözlemi için ideal karanlık gökyüzü koşulları sunar; yıldız fotoğrafçılığı tutkunları sıkça ziyaret eder. Çadır alanları teraslı yapıda düzenlenmiş olup deniz manzaralıdır. Kaş merkezdeki restoranlar, barlar ve antik Likya lahitleri yürüyüş veya kısa taksi mesafesindedir. Akşamları yarımadanın rüzgârı serin bir ortam yaratırken kamp ateşi sohbetleri başlar. Meis Adası manzarası gün batımında en güzel halini alır. Dalış sertifikası olmayanlar için intro dalış programları mevcuttur. Kaş yarımadasında rüzgâr genellikle akşam saatlerinde hafifler; kamp ateşi için uygun koşullar oluşur.",
    features: [
      { icon: "⛰️", label: "Dağ Manzarası" },
      { icon: "🤿", label: "Dalış Yakını" },
      { icon: "🥾", label: "Trekking Rotası" },
      { icon: "⭐", label: "Gökyüzü Gözlemi" },
      { icon: "🌊", label: "Meis Manzarası" },
    ],
    images: [IMAGES.mountain, IMAGES.pine, IMAGES.sunset],
    rating: 4.8,
    reviewCount: 203,
    category: "dag",
    coordinates: { lat: 36.21, lng: 29.64 },
    googleMapsEmbed: mapEmbed(36.21, 29.64),
    transport:
      "Antalya Havalimanı'ndan 190 km. Kaş otogarından taksi veya yürüyüş ile ulaşılır.",
    createdAt: "2025-10-20",
  },
  {
    slug: "kas-kaputas-koyu-kampi",
    name: "Kaş Kaputaş Koyu Kampı",
    provinceSlug: "antalya",
    districtSlug: "kas",
    shortDescription:
      "Ünlü Kaputaş Plajı'nın üst yamacında turkuaz koy manzaralı deniz kampı.",
    description:
      "Kaş Kaputaş Koyu Kampı, dünyaca ünlü Kaputaş Plajı'nın hemen üst yamacında, turkuaz koyun panoramik manzarasına hakim bir konumda yer alır. 200 basamaklı merdivenle plaja iniş yapılabilir; sabah erken saatlerde plajı neredeyse tek başınıza deneyimleyebilirsiniz. Kamp alanı çadır turizmine özeldir; sınırlı kapasitesi sayesinde kalabalıktan uzak bir ortam sunar. Kaş ve Kalkan arasında stratejik konumu, her iki beldeyi de keşfetmek için ideal bir üs sağlar. Koyun suları yüzme ve şnorkelle dalış için berraklığıyla ünlüdür. Akşamları güneş batarken koy turkuazdan altın rengine dönüşür; bu manzara kamp deneyiminin en unutulmaz anıdır. Likya Yolu üzerindeki patika yollar Kaş yönüne yürüyüş imkânı sunar. Kaputaş merdivenleri yoğun saatlerde kalabalık olabilir; sabah erken saatleri tercih edin. Kalkan ve Kaş arasında konaklayarak iki beldeyi keşfedin. Kaputaş'ın turkuaz rengi güneşli günlerde en canlı tonlarına ulaşır.",
    features: [
      { icon: "🌊", label: "Kaputaş Manzarası" },
      { icon: "🏖️", label: "Plaj Erişimi" },
      { icon: "🤿", label: "Şnorkel" },
      { icon: "🥾", label: "Likya Yolu" },
      { icon: "📷", label: "Fotoğraf Noktası" },
    ],
    images: [IMAGES.coast, IMAGES.beach, IMAGES.mountain],
    rating: 4.7,
    reviewCount: 178,
    category: "deniz-kenari",
    coordinates: { lat: 36.275, lng: 29.615 },
    googleMapsEmbed: mapEmbed(36.275, 29.615, 13),
    transport:
      "Kaş-Kalkan karayolunda Kaputaş Plajı çıkışı. Kamp alanı yol üstünde.",
    createdAt: "2026-01-25",
  },
  {
    slug: "kalkan-kalamar-koyu-kampi",
    name: "Kalkan Kalamar Koyu Kampı",
    provinceSlug: "antalya",
    districtSlug: "kalkan",
    shortDescription:
      "Kalkan'ın sakin Kalamar Koyu'nda zeytinlikler içinde butik deniz kampı.",
    description:
      "Kalkan Kalamar Koyu Kampı, Antalya'nın en şık tatil beldelerinden Kalkan'ın sakin Kalamar Koyu'nda, zeytin ve çam ağaçlarının gölgesinde konumlanmış butik bir kamp tesisidir. Kalkan merkezin kalabalığından uzak bu koy, huzurlu bir kamp atmosferi sunar. Koyun sakin suları yüzme ve küçük tekne turları için idealdir. Çadır ve bungalov seçenekleri mevcuttur; bungalovlar taş ve ahşap karışımı Akdeniz mimarisiyle inşa edilmiştir. Kalkan çarşısına 3 km mesafede olan tesis, restoranlara ve marketlere kolay erişim sağlar. Akşamları Kalkan'ın ünlü teras restoranlarında gün batımı yemeği yapılabilir. Patara antik kenti ve Kaputaş Plajı günübirlik turlarla ulaşılabilir mesafededir. Kalkan'ın teraslı mimarisi kampçılara da ilham verir. Kalamar Koyu'nda gün batımı tekne turu düzenlenebilir. Kalamar Koyu'nda su sıcaklığı yaz aylarında yüzmek için idealdir. Kalkan'ın butik otelleri ve sanat galerileri kamp sonrası kültür turu için keşfedilebilir.",
    features: [
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🏡", label: "Bungalov" },
      { icon: "🌊", label: "Sakin Koy" },
      { icon: "⛵", label: "Tekne Turları" },
      { icon: "🏛️", label: "Patara Yakını" },
    ],
    images: [IMAGES.coast, IMAGES.valley, IMAGES.sunset],
    rating: 4.6,
    reviewCount: 95,
    category: "bungalov",
    coordinates: { lat: 36.255, lng: 29.405 },
    googleMapsEmbed: mapEmbed(36.255, 29.405),
    transport:
      "Kaş-Kalkan karayolunda Kalkan çıkışını takip edin. Kalamar Koyu yönü 3 km.",
    createdAt: "2026-02-15",
  },
  {
    slug: "kalkan-bezirgan-yayla-kampi",
    name: "Kalkan Bezirgan Yayla Kampı",
    provinceSlug: "antalya",
    districtSlug: "kalkan",
    shortDescription:
      "Bezirgan Yaylası'nda Likya Yolu üzerinde yüksek rakımlı çadır kampı.",
    description:
      "Kalkan Bezirgan Yayla Kampı, Kalkan'ın arkasındaki Bezirgan Yaylası'nda, Likya Yolu üzerinde yüksek rakımlı bir konumda yer alır. Yayla kampı deneyimi arayanlar için ideal olan tesis, yaz aylarında serin havasıyla şehir sıcaklarından kaçış sunar. Geniş çayırlık alanlar çadır kurmak için düz zemin sağlar; gece gökyüzü yıldızlarla doludur. Likya Yolu yürüyüşçüleri için önemli bir konaklama noktasıdır; Xanthos ve Patara yönüne yürüyüş rotaları başlar. Yayladaki geleneksel köy evleri ve keçi sürüleri otantik bir kırsal atmosfer yaratır. Sabahları yayla sisleri arasından güneş doğarken, öğleden sonra Kalkan körfezinin panoramik manzarası açılır. Elektrik bağlantısı sınırlıdır; doğayla uyumlu kamp anlayışı benimsenmiştir. Bezirgan Yaylası Likya Yolu'nun önemli konaklama noktalarındandır. Yayla sisi fotoğraf tutkunları için eşsiz kareler sunar. Yayla kampında gece sıcaklığı düşebilir; katmanlı giyinmeyi tercih edin. Bezirgan köyündeki geleneksel fırından taze ekmek alarak kahvaltınızı zenginleştirebilirsiniz.",
    features: [
      { icon: "⛰️", label: "Yayla Kampı" },
      { icon: "🥾", label: "Likya Yolu" },
      { icon: "⭐", label: "Yıldız Gözlemi" },
      { icon: "🐐", label: "Yayla Yaşamı" },
      { icon: "🌿", label: "Çayırlık Alan" },
    ],
    images: [IMAGES.mountain, IMAGES.valley, IMAGES.camp],
    rating: 4.5,
    reviewCount: 67,
    category: "dag",
    coordinates: { lat: 36.28, lng: 29.45 },
    googleMapsEmbed: mapEmbed(36.28, 29.45, 12),
    transport:
      "Kalkan merkezden Bezirgan köyü yönüne 12 km. Yayla yolu son 3 km toprak.",
    createdAt: "2025-12-28",
  },
  {
    slug: "olympos-agac-ev-kamp",
    name: "Olympos Ağaç Ev Kamp",
    provinceSlug: "antalya",
    districtSlug: "olympos",
    shortDescription:
      "Antik kent kalıntıları arasında çam ormanı içinde ağaç ev ve çadır kampı.",
    description:
      "Olympos Ağaç Ev Kamp, antik Olympos kentinin kalıntıları arasında, Melas Nehri kıyısında konumlanmış eşsiz bir kamp tesisidir. Ağaç evler ve çadır alanları çam ormanı içinde yer alır; nehir sesi ve kuş cıvıltıları doğal bir fon müziği oluşturur. Yanartaş'a gece yürüyüşü, Adrasan koyuna tekne turları ve antik kent keşfi kamp deneyiminin ayrılmaz parçalarıdır. Restoran ve bar hizmetleri mevcuttur; akşamları canlı müzik etkinlikleri düzenlenir. Olympos'un alternatif yaşam tarzı ve doğayla uyumlu atmosferi kampçılara özgün bir deneyim sunar. Chimera (Yanartaş) efsanesi ve Likya kaya mezarları bölgenin tarihi zenginliğini yansıtır. Genç gezginler ve doğa tutkunları tarafından yoğun ilgi görür. Olympos'un gece atmosferi genç gezginlerin favorisidir. Yanartaş yürüyüşü için el feneri ve sıcak giysi getirmeyi unutmayın. Olympos'ta ağaç evler çam kokusuyla kaplıdır; doğal aromaterapi etkisi yaratır.",
    features: [
      { icon: "🏛️", label: "Antik Kent Yakını" },
      { icon: "🌲", label: "Çam Ormanı" },
      { icon: "🏠", label: "Ağaç Ev" },
      { icon: "🍺", label: "Restoran/Bar" },
      { icon: "🔥", label: "Yanartaş Turu" },
    ],
    images: [IMAGES.valley, IMAGES.camp, IMAGES.forest],
    rating: 4.5,
    reviewCount: 412,
    category: "orman",
    coordinates: { lat: 36.397, lng: 30.474 },
    googleMapsEmbed: mapEmbed(36.397, 30.474),
    transport:
      "Antalya'dan Kumluca yönüne 85 km. Olympos çıkışından 1 km içeride.",
    createdAt: "2025-09-05",
  },
  {
    slug: "olympos-adrasan-koyu-kampi",
    name: "Olympos Adrasan Koyu Kampı",
    provinceSlug: "antalya",
    districtSlug: "olympos",
    shortDescription:
      "Adrasan Koyu'nda 2 km kumsal ve çam ormanı arasında geniş aile kampı.",
    description:
      "Olympos Adrasan Koyu Kampı, Olympos ile Adrasan arasında, 2 kilometrelik kumsalı ve çam ormanıyla ünlü Adrasan Koyu'nda konumlanmış geniş bir kamp tesisidir. Ailelerin güvenle tercih ettiği bu alan, çocuk oyun parkı ve güvenli yüzme bölgesi sunar. Koyun sakin suları kano ve paddle board için idealdir. Çam ağaçlarının gölgesinde kurulan çadırlar yaz sıcağında serinlik sağlar. Olympos antik kentine ve Yanartaş'a 15 km mesafede olan tesis, her iki destinasyonu da keşfetmek için üs noktası olabilir. Tekne turları ile Suluada ve diğer gizli koylar ziyaret edilebilir. Akşamları koyun sakin atmosferinde balık tutma ve mangal keyfi yapılabilir. Elektrik ve su bağlantısı tüm parsellerde mevcuttur. Adrasan'ın uzun kumsalı plaj voleybolu ve kano için uygundur. Suluada tekne turları yaz sezonunda her gün düzenlenir. Adrasan'da plaj kafe ve restoranları kamp alanına yürüme mesafesindedir.",
    features: [
      { icon: "🏖️", label: "2 km Kumsal" },
      { icon: "🌲", label: "Çam Ormanı" },
      { icon: "👨‍👩‍👧", label: "Aile Dostu" },
      { icon: "🛶", label: "Kano" },
      { icon: "⛵", label: "Tekne Turları" },
    ],
    images: [IMAGES.beach, IMAGES.pine, IMAGES.coast],
    rating: 4.4,
    reviewCount: 256,
    category: "deniz-kenari",
    coordinates: { lat: 36.32, lng: 30.45 },
    googleMapsEmbed: mapEmbed(36.32, 30.45),
    transport:
      "Kumluca'dan Olympos yönüne, Adrasan çıkışını takip edin. Koy girişinde kamp alanı.",
    createdAt: "2025-11-12",
  },
];
