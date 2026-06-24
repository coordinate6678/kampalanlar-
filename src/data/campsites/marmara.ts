import type { Campsite } from "@/lib/types";
import { IMAGES, mapEmbed } from "./helpers";

export const marmaraCampsites: Campsite[] = [
  {
    slug: "kartepe-orman-kampi",
    name: "Kartepe Orman Kampı",
    provinceSlug: "izmit",
    districtSlug: "kartepe",
    shortDescription:
      "İstanbul'a bir saat mesafede Maşukiye şelaleleri yakınında çam ormanı içinde hafta sonu kampı.",
    description:
      "Kartepe Orman Kampı, Sakarya Nehri kıyısındaki Maşukiye bölgesinde, yoğun çam ve kayın ağaçlarının gölgesinde konumlanmış bir doğa tesisi olarak kamp severlere yıl boyu hizmet verir. İstanbul ve Kocaeli'den TEM otoyolu üzerinden kolayca ulaşılabilen kamp alanı, hafta sonu kaçamakları için özellikle aileler ve doğa tutkunları tarafından tercih edilir. Tesis çadır ve karavan kampına uygun düzleştirilmiş parseller sunar; elektrik bağlantısı, ortak duş-tuvalet alanları ve mangal noktaları mevcuttur. Sabahları dere sesi eşliğinde uyanırken, öğleden sonra Kartepe kayak merkezine veya Sapanca Gölü çevresindeki yürüyüş parkurlarına kısa bir sürüşle ulaşabilirsiniz. Sonbaharda yaprak dökümü, kışın ise kar manzarası kamp deneyimine farklı bir atmosfer katar. Maşukiye'nin ünlü alabalık restoranları yürüme mesafesindedir. Kamp alanı yıl boyunca açık olup rezervasyon yoğun dönemlerde önerilir. Çocuklu aileler için güvenli oyun alanları ve rehberli doğa yürüyüşleri düzenlenmektedir. Hafta sonları yoğunluk artabileceğinden erken giriş yapmanız yer bulmayı kolaylaştırır.",
    features: [
      { icon: "🌲", label: "Orman İçi" },
      { icon: "💧", label: "Şelale Yakını" },
      { icon: "🚗", label: "Kolay Ulaşım" },
      { icon: "⛷️", label: "Kayak Merkezi Yakını" },
      { icon: "🚐", label: "Karavan Uyumlu" },
    ],
    images: [IMAGES.forest, IMAGES.pine, IMAGES.valley],
    rating: 4.2,
    reviewCount: 198,
    category: "orman",
    coordinates: { lat: 40.75, lng: 30.02 },
    googleMapsEmbed: mapEmbed(40.75, 30.02),
    transport:
      "İstanbul'dan TEM otoyolu ile yaklaşık 1 saat. Maşukiye çıkışını takip edin, dere kenarı tabelaları sizi kamp alanına yönlendirir.",
    createdAt: "2026-03-01",
  },
  {
    slug: "kartepe-yayla-karavan-kampi",
    name: "Kartepe Yayla Karavan Kampı",
    provinceSlug: "izmit",
    districtSlug: "kartepe",
    shortDescription:
      "Kartepe yamaçlarında panoramik Sapanca manzaralı, tam donanımlı karavan parkı.",
    description:
      "Kartepe Yayla Karavan Kampı, yüksek rakımlı bir yayla terasında konumlanarak Sapanca Gölü ve çevre vadilerin geniş panoramasını sunar. Karavan turizmine özel tasarlanmış bu tesis, her parselde elektrik, su ve atık su bağlantısı sağlar. Kış aylarında kar manzarası eşliğinde kamp yapma imkânı sunan nadir Marmara noktalarından biridir. Tesis bünyesinde ortak mutfak, çamaşırhane ve çocuk oyun alanı bulunur. Kartepe teleferik hattına 8 km mesafede olan kamp alanı, kış sporları merkezine yakınlığıyla dört mevsim cazibesini korur. Yaz aylarında serin havası sayesinde şehir sıcaklarından kaçmak isteyenler için ideal bir alternatiftir. Çevredeki patika yollar bisiklet ve trekking rotalarına dönüşür; gün batımında göl üzerindeki ışık oyunları unutulmaz kareler sunar. Karavan parkında uzun süreli konaklamalara özel indirim uygulanır. Kış lastiği ve zincir bulundurmanız yüksek rakım yollarında güvenliği artırır. Yayla havası astım ve alerji hastalarına iyi gelir; temiz dağ havası solunum rahatlatır.",
    features: [
      { icon: "🚐", label: "Karavan Parkı" },
      { icon: "⚡", label: "Tam Elektrik" },
      { icon: "🌄", label: "Panoramik Manzara" },
      { icon: "❄️", label: "Kış Kampı" },
      { icon: "🧺", label: "Çamaşırhane" },
    ],
    images: [IMAGES.mountain, IMAGES.camp, IMAGES.sunset],
    rating: 4.5,
    reviewCount: 112,
    category: "karavan",
    coordinates: { lat: 40.768, lng: 30.045 },
    googleMapsEmbed: mapEmbed(40.768, 30.045, 13),
    transport:
      "Kartepe yolu üzerinde Sapanca yönünden ilerleyin. Karavan parkı tabelaları yol kenarında belirgindir.",
    createdAt: "2026-02-18",
  },
  {
    slug: "assos-kadirga-kamp",
    name: "Assos Kadırga Kamp",
    provinceSlug: "canakkale",
    districtSlug: "assos",
    shortDescription:
      "Athena Tapınağı manzaralı Kadırga Koyu'nda antik Assos atmosferinde deniz kenarı kamp.",
    description:
      "Assos Kadırga Kamp, Çanakkale'nin Ayvacık ilçesindeki Behramkale köyünün hemen altında, Kadırga Koyu'nun sakin sularına bakan eşsiz bir konumda yer alır. Antik Assos kentinin Athena Tapınağı kalıntıları kamp alanından görülebilir; bu tarihi silüet gün batımında altın rengine bürünerek Ege'nin en etkileyici manzaralarından birini oluşturur. Çakıl plajın hemen yanındaki teraslı kamp parselleri hem çadır hem karavan konaklamasına uygundur. Bölgenin organik zeytinyağı ve yerel şarapları kamp ateşi sohbetlerinin vazgeçilmez eşlikçisidir. Sabahları denizde yüzme, öğleden sonra Behramkale'nin taş sokaklarında gezinti yapma imkânı sunar. Assos antik limanına yürüyüş mesafesinde olan tesis, fotoğraf tutkunları ve tarih meraklıları için ideal bir üs noktasıdır. Yaz aylarında hafif meltem rüzgârları serin bir ortam sağlar. Yaz sezonunda erken rezervasyon yapmanız tavsiye edilir. Behramkale'nin taş sokaklarında akşam yürüyüşü kamp gününü güzel tamamlar. Kadırga Koyu'nun berrak suları sabah erken saatlerde en sakin halini alır. Bütçe dostu kamp arayanlar için uygun fiyatlı parseller sunulur; ortak mangal ve piknik alanı ücretsiz kullanıma açıktır.",
    features: [
      { icon: "🏛️", label: "Antik Kent" },
      { icon: "🌅", label: "Gün Batımı" },
      { icon: "🍷", label: "Yerel Şarap" },
      { icon: "🚐", label: "Karavan Uyumlu" },
    ],
    images: [IMAGES.camp, IMAGES.mountain, IMAGES.coast],
    rating: 4.7,
    reviewCount: 167,
    category: "deniz-kenari",
    coordinates: { lat: 39.49, lng: 26.34 },
    googleMapsEmbed: mapEmbed(39.49, 26.34),
    transport:
      "Çanakkale'den Ayvacık-Assos yönüne 90 km. Behramkale köy merkezine 1 km, Kadırga Koyu'na iniş yolu mevcuttur.",
    createdAt: "2025-12-20",
  },
  {
    slug: "assos-zeus-ormani-kampi",
    name: "Assos Zeus Ormanı Kampı",
    provinceSlug: "canakkale",
    districtSlug: "assos",
    shortDescription:
      "Zeus Altarı yürüyüş rotası üzerinde zeytinlikler arasında sessiz orman kampı.",
    description:
      "Assos Zeus Ormanı Kampı, antik dönemde Zeus'a adanmış sunak kalıntılarının bulunduğu ormanlık alanda, Behramkale'nin kalabalığından uzak sakin bir kamp deneyimi sunar. Yüzyıllık zeytin ve çam ağaçlarının oluşturduğu doğal gölgelik alanlar yaz sıcağında serin bir sığınak sağlar. Kamp alanı çadır turizmine özeldir; elektrik ve su bağlantısı sınırlı tutularak doğayla iç içe bir deneyim hedeflenir. Zeus Altarı'na giden patika yol sabah erken saatlerde yürüyüş için idealdir; yol boyunca Ege kıyısının geniş manzarası açılır. Akşamları kamp ateşi alanında toplanan misafirler yerel balıkçılardan taze av tedarik edebilir. Assos antik tiyatrosuna 3 km mesafede olan tesis, kültür ve doğa turizmini bir arada yaşamak isteyenler için mükemmel bir durak noktasıdır. Minimal altyapısı sayesinde gerçek bir bushcraft deneyimi sunar. Zeus Altarı yürüyüşü için rahat ayakkabı ve su şişesi getirmeniz yeterlidir. Orman kampında cep telefonu çekimi sınırlı olabilir; dijital detoks için ideal bir ortamdır. Düşük bütçeli kamp arayanlar için uygun fiyatlı çadır parselleri ve ücretsiz kamp ateşi alanı sunulur.",
    features: [
      { icon: "🌲", label: "Zeytinlik" },
      { icon: "🥾", label: "Yürüyüş Rotası" },
      { icon: "🔥", label: "Kamp Ateşi" },
      { icon: "🏛️", label: "Antik Kalıntılar" },
      { icon: "🐕", label: "Evcil Hayvan Dostu" },
    ],
    images: [IMAGES.forest, IMAGES.pine, IMAGES.sunset],
    rating: 4.4,
    reviewCount: 83,
    category: "orman",
    coordinates: { lat: 39.505, lng: 26.355 },
    googleMapsEmbed: mapEmbed(39.505, 26.355, 13),
    transport:
      "Ayvacık-Assos karayolunda Behramkale'ye varmadan önce Zeus Ormanı tabelasını takip edin.",
    createdAt: "2026-01-22",
  },
  {
    slug: "gokceada-aydincik-kampi",
    name: "Gökçeada Aydıncık Kampı",
    provinceSlug: "canakkale",
    districtSlug: "gokceada",
    shortDescription:
      "Türkiye'nin en uzun plajı Aydıncık'ta altın kumlar üzerinde rüzgâr sörfü dostu kamp.",
    description:
      "Gökçeada Aydıncık Kampı, Türkiye'nin en büyük adasında yer alan ve 2 kilometreyi aşan altın kumlu Aydıncık Plajı'nın hemen arkasında konumlanır. Rüzgâr sörfü ve kitesurf tutkunlarının gözde noktası olan bu kamp alanı, adanın en bakir ve en geniş plajına doğrudan erişim sağlar. Çadır alanları kum tepelerinin arkasında rüzgârdan korunaklı şekilde düzenlenmiştir. Gün boyunca sörf okulu ve ekipman kiralama imkânı sunulur; akşamları plaj ateşi etkinlikleri düzenlenir. Adanın Yunan kültüründen izler taşıyan köyleri bisikletle keşfedilebilir; Zeytinli ve Bademli köylerine günlük turlar organize edilir. Gökçeada feribotu ile Çanakkale'den ulaşılan ada, kalabalıktan uzak, sakin bir kamp atmosferi arayanlar için eşsiz bir seçenektir. Deniz suyu berraklığı ve kumsal genişliği aileler için de idealdir. Feribot saatlerini önceden kontrol etmeniz ada ulaşımını kolaylaştırır. Sörf ekipmanı kiralama için kamp resepsiyonundan bilgi alabilirsiniz. Aydıncık'ta rüzgâr genellikle öğleden sonra güçlenir; sabah saatleri yüzme için daha uygundur. Sezon içinde plaj ateşi etkinlikleri ücretsiz katılıma açıktır; çadır parselleri bütçe dostu fiyatlarla kiralanır.",
    features: [
      { icon: "🏄", label: "Rüzgâr Sörfü" },
      { icon: "🌊", label: "Altın Kum Plaj" },
      { icon: "🚲", label: "Bisiklet Turları" },
      { icon: "🔥", label: "Plaj Ateşi" },
      { icon: "🐕", label: "Evcil Hayvan Dostu" },
    ],
    images: [IMAGES.beach, IMAGES.coast, IMAGES.sunset],
    rating: 4.8,
    reviewCount: 214,
    category: "deniz-kenari",
    coordinates: { lat: 40.085, lng: 25.88 },
    googleMapsEmbed: mapEmbed(40.085, 25.88),
    transport:
      "Kabatepe feribot iskelesinden Gökçeada'ya geçin. Ada merkezinden Aydıncık yönüne 12 km.",
    createdAt: "2025-11-08",
  },
  {
    slug: "gokceada-kuzu-koyu-kampi",
    name: "Gökçeada Kuzu Koyu Kampı",
    provinceSlug: "canakkale",
    districtSlug: "gokceada",
    shortDescription:
      "Adanın güneyinde sakin Kuzu Koyu'nda zeytinlikler içinde butik deniz kampı.",
    description:
      "Gökçeada Kuzu Koyu Kampı, adanın güney sahillerinde yer alan sakin Kuzu Koyu'nun çam ve zeytin ağaçlarıyla çevrili kıyı şeridinde hizmet verir. Aydıncık'ın aksine daha sakin ve dalgasız sularıyla aileler ve çocuklu kampçılar tarafından tercih edilir. Küçük ölçekli butik yapısı sayesinde kalabalıktan uzak, huzurlu bir ortam sunar. Tesis bungalov ve çadır seçenekleriyle konaklama imkânı verir; sabah kahvaltısında adanın meşhur keçi peyniri ve zeytinyağı servis edilir. Koyun etrafındaki yürüyüş patikaları deniz manzaralı fotoğraf noktalarına çıkar. Gün batımında koyun sakin suları turkuazdan pembeye dönüşür. Adanın merkezine 15 km mesafede olan kamp alanı, Gökçeada'nın doğal güzelliklerini keşfetmek isteyenler için ideal bir başlangıç noktasıdır. Adanın en sakin koylarından biri olan burada gece sessizliği hakimdir. Yerel köy pazarından taze sebze ve peynir temin edebilirsiniz. Koyun batı yönündeki kayalık alanlar gün batımı fotoğrafları için mükemmel çerçeveler sunar.",
    features: [
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🌊", label: "Sakin Koy" },
      { icon: "🍽️", label: "Kahvaltı Servisi" },
      { icon: "📷", label: "Fotoğraf Noktaları" },
    ],
    images: [IMAGES.coast, IMAGES.forest, IMAGES.camp],
    rating: 4.6,
    reviewCount: 97,
    category: "bungalov",
    coordinates: { lat: 40.12, lng: 25.92 },
    googleMapsEmbed: mapEmbed(40.12, 25.92, 13),
    transport:
      "Gökçeada merkezinden güney sahil yolunu takip edin. Kuzu Koyu tabelaları 15 km sonra başlar.",
    createdAt: "2026-02-05",
  },
];
