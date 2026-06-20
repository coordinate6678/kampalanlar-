import type { Campsite } from "@/lib/types";
import { IMAGES, mapEmbed } from "./helpers";

export const egeCampsites: Campsite[] = [
  {
    slug: "alacati-doga-kampi",
    name: "Alaçatı Doğa Kampı",
    provinceSlug: "izmir",
    districtSlug: "cesme",
    shortDescription:
      "Zeytinlikler arasında rüzgâr sörfü merkezine yürüme mesafesinde sakin bir kamp alanı.",
    description:
      "Alaçatı Doğa Kampı, Çeşme Yarımadası'nın en sevilen kamp noktalarından biri olarak yüzyıllık zeytin ağaçlarının gölgesinde konumlanır. Hem çadır hem karavan kampına uygun düzenlenmiş parsellerde elektrik ve su bağlantısı mevcuttur; ortak duş ve tuvalet alanları düzenli olarak temizlenir. Alaçatı merkezine sadece 2 km mesafede olan kamp alanı, dünyaca ünlü rüzgâr sörfü merkezlerine yürüyüş mesafesindedir. Sabahları kuş sesleriyle uyanır, öğleden sonra Alaçatı'nın taş sokaklarında gezinebilirsiniz. Akşamları kamp ateşi alanında toplanan misafirler yıldızlı gökyüzü altında unutulmaz anlar yaşar. Bölgenin meltem rüzgârları yaz sıcağında serin bir ortam sağlar. Çeşme plajları ve termal kaplıcalar araçla kısa mesafededir. Organik zeytinyağı tadımı ve yerel pazar gezileri kamp programınızı zenginleştirir. Alaçatı Ot Festivali döneminde kamp alanı özel etkinlikler düzenler. Rüzgâr sörfü ekipmanı kiralama için merkeze kısa bir yolculuk yeterlidir. Zeytinlik içindeki konumu sayesinde yaz sıcağında doğal gölge alanı bol miktarda bulunur.",
    features: [
      { icon: "⚡", label: "Elektrik" },
      { icon: "🚿", label: "Duş" },
      { icon: "🚐", label: "Karavan Uyumlu" },
      { icon: "🐕", label: "Evcil Hayvan Dostu" },
      { icon: "🔥", label: "Kamp Ateşi Alanı" },
    ],
    images: [IMAGES.camp, IMAGES.valley, IMAGES.coast],
    rating: 4.6,
    reviewCount: 128,
    category: "orman",
    coordinates: { lat: 38.2833, lng: 26.375 },
    googleMapsEmbed: mapEmbed(38.2833, 26.375),
    transport:
      "İzmir Havalimanı'ndan 80 km. Çeşme otobüs terminalinden Alaçatı minibüsleri mevcuttur.",
    createdAt: "2025-11-15",
  },
  {
    slug: "cesme-ilica-sahil-kampi",
    name: "Çeşme Ilıca Sahil Kampı",
    provinceSlug: "izmir",
    districtSlug: "cesme",
    shortDescription:
      "Ilıca Plajı'nın sıcak su kaynakları yakınında deniz kenarı kamp ve karavan alanı.",
    description:
      "Çeşme Ilıca Sahil Kampı, ünlü Ilıca Plajı'nın hemen yanında, deniz suyuyla karışan termal kaynakların yakınında konumlanmış benzersiz bir kamp tesisidir. Kumlu plaja sıfır mesafede kurulan çadırlar, sabah denizde yüzme ve akşam termal suda dinlenme imkânı sunar. Karavan parselleri tam donanımlı olup elektrik, su ve gri su bağlantısı içerir. Çeşme merkezine 5 km mesafede olan tesis, marina ve restoranlara bisikletle ulaşılabilir. Yaz aylarında düzenlenen yelken ve sörf etkinliklerine katılım imkânı sunulur. Gün batımında Ege'nin turkuaz suları altın rengine bürünürken kamp ateşi sohbetleri başlar. Aileler için güvenli, sığ deniz alanları ve çocuk oyun köşesi mevcuttur. Çeşme Yarımadası'nın gece hayatına yakın ama yeterince sakin bir konumdadır. Ilıca'nın termal sularında yıl boyunca yüzme keyfi yaşanabilir. Marina ve gece hayatına yakınlık genç grupların ilgisini çeker. Ilıca plajının sıcak su kaynakları romatizma ve cilt hastalıklarına iyi geldiğine inanılır.",
    features: [
      { icon: "🌊", label: "Deniz Kenarı" },
      { icon: "♨️", label: "Termal Yakını" },
      { icon: "🚐", label: "Karavan Parkı" },
      { icon: "🏄", label: "Su Sporları" },
      { icon: "👨‍👩‍👧", label: "Aile Dostu" },
    ],
    images: [IMAGES.beach, IMAGES.coast, IMAGES.sunset],
    rating: 4.5,
    reviewCount: 156,
    category: "deniz-kenari",
    coordinates: { lat: 38.315, lng: 26.31 },
    googleMapsEmbed: mapEmbed(38.315, 26.31),
    transport:
      "İzmir-Çeşme otoyolunu takip edin. Ilıca çıkışından plaj yönüne 2 km.",
    createdAt: "2026-01-28",
  },
  {
    slug: "urla-sahil-kampi",
    name: "Urla Sahil Kampı",
    provinceSlug: "izmir",
    districtSlug: "urla",
    shortDescription:
      "Ege kıyısında bağ yolları arasında Barbaros Koyu manzaralı deniz kenarı kamp.",
    description:
      "Urla Sahil Kampı, Ege'nin en sakin kıyılarından birinde, Barbaros Koyu'na bakan teraslı bir alanda konumlanmış deniz kenarı kamp tesisidir. Gün batımı manzarası bölgenin en etkileyici görüntülerinden birini sunar; akşamları güneş İzmir Körfezi üzerinde batarken kamp alanı turuncu ve mor tonlara bürünür. Tesis çadır ve bungalov seçenekleri sunar; bungalovlar ahşap teras ve deniz manzaralı verandaya sahiptir. Urla'nın ünlü bağ evleri, şarap atölyeleri ve farm-to-table restoranlarına bisikletle 10 dakikada ulaşılabilir. Deniz kenarında yüzme ve kano imkânı mevcuttur. Urla Enginar Festivali döneminde özel etkinlikler düzenlenir. Sakin atmosferi ve kaliteli hizmetiyle çiftler ve küçük gruplar tarafından sıkça tercih edilir. Urla Cittaslow ruhu kamp alanına da yansır; geri dönüşüm ve sıfır atık politikası uygulanır. Bağ bozumu döneminde özel hasat turları organize edilir. Barbaros Koyu'nda kano ve paddle board kiralama imkânı yaz aylarında mevcuttur.",
    features: [
      { icon: "🌊", label: "Deniz Kenarı" },
      { icon: "🏡", label: "Bungalov" },
      { icon: "🚿", label: "Duş" },
      { icon: "🍽️", label: "Mutfak" },
      { icon: "🚲", label: "Bisiklet Yolu" },
    ],
    images: [IMAGES.beach, IMAGES.camp, IMAGES.sunset],
    rating: 4.4,
    reviewCount: 89,
    category: "deniz-kenari",
    coordinates: { lat: 38.35, lng: 26.75 },
    googleMapsEmbed: mapEmbed(38.35, 26.75),
    transport:
      "İzmir merkezden Urla'ya 35 km. İzmir-Çeşme yolu üzerinde Urla çıkışını takip edin.",
    createdAt: "2025-12-01",
  },
  {
    slug: "urla-bademler-bag-kampi",
    name: "Urla Bademler Bağ Kampı",
    provinceSlug: "izmir",
    districtSlug: "urla",
    shortDescription:
      "Urla bağları ortasında şarap tadımı ve organik tarım deneyimi sunan butik kamp.",
    description:
      "Urla Bademler Bağ Kampı, İzmir'in şarap rotası üzerindeki Bademler köyünde, üzüm bağlarının ve zeytinliklerin ortasında konumlanmış butik bir kamp tesisidir. Deniz kampının aksine iç kesimde yer alan tesis, bağ bozumu döneminde hasat deneyimi ve şarap tadımı etkinlikleri düzenler. Çadır alanları bağ sıraları arasında gölgelik alanlara kurulur; yaz sıcağında doğal serinlik sağlar. Organik sebze bahçesinden taze ürünlerle hazırlanan akşam yemekleri tesisin öne çıkan özelliklerindendir. Urla merkezine 8 km mesafede olan kamp alanı, Karaburun yarımadasına günübirlik turlar için ideal bir üs noktasıdır. Kuş cıvıltıları ve bağ yapraklarının hışırtısı eşliğinde huzurlu bir kamp deneyimi sunar. Yıldız gözlemi için ışık kirliliğinden uzak konumu avantaj sağlar. Şarap rotası üzerindeki konumu sayesinde birkaç üreticiyi aynı gün ziyaret edebilirsiniz. Sessiz ortamı çalışmak veya okumak isteyenler için idealdir. Bağ kampında sabah kuş sesleriyle uyanmak şehir hayatından tamamen kopmanızı sağlar.",
    features: [
      { icon: "🍇", label: "Bağ İçi" },
      { icon: "🍷", label: "Şarap Tadımı" },
      { icon: "🌿", label: "Organik Bahçe" },
      { icon: "⭐", label: "Gökyüzü Gözlemi" },
      { icon: "🔥", label: "Kamp Ateşi" },
    ],
    images: [IMAGES.valley, IMAGES.forest, IMAGES.camp],
    rating: 4.7,
    reviewCount: 64,
    category: "orman",
    coordinates: { lat: 38.32, lng: 26.72 },
    googleMapsEmbed: mapEmbed(38.32, 26.72, 13),
    transport:
      "Urla merkezinden Bademler köyü yönüne 8 km. Bağ kampı tabelaları köy girişinde.",
    createdAt: "2026-02-12",
  },
  {
    slug: "sigacik-koy-kampi",
    name: "Sığacık Koy Kampı",
    provinceSlug: "izmir",
    districtSlug: "seferihisar",
    shortDescription:
      "Tarihi kale manzaralı mandalina bahçeleri arasında Cittaslow kamp deneyimi.",
    description:
      "Sığacık Koy Kampı, Türkiye'nin ilk Cittaslow beldesi Seferihisar'ın ünlü Sığacık Kalesi'nin hemen yanında konumlanır. Mandalina bahçeleri arasındaki bu sakin kamp alanı, sürdürülebilir turizm anlayışıyla işletilir ve doğaya saygılı kampçılığı teşvik eder. Organik kahvaltı servisi, bisiklet kiralama ve Teos antik kentine günlük turlar tesisin sunduğu hizmetler arasındadır. Kale surlarının gölgesinde kurulan çadırlar, tarihi bir atmosferde kamp yapma imkânı sunar. Sığacık limanındaki balıkçı teknelerinden taze deniz ürünleri temin edilebilir. Akşamları koyun sakin sularında gün batımı izlemek kamp deneyiminin vazgeçilmez parçasıdır. Seferihisar'ın mandalina festivali döneminde özel etkinlikler düzenlenir. Aileler ve doğa severler için güvenli, temiz ve huzurlu bir ortam sunar. Teos antik kentine sabah erken saatlerde yürüyüş yaparak kalabalıktan kaçınabilirsiniz. Mandalina hasadı döneminde köylülerle birlikte toplama deneyimi sunulur. Sığacık limanından kalkan balıkçı tekneleri taze levrek ve çipura getirir.",
    features: [
      { icon: "🏰", label: "Tarihi Konum" },
      { icon: "🍊", label: "Organik Kahvaltı" },
      { icon: "🚲", label: "Bisiklet Kiralama" },
      { icon: "🌊", label: "Deniz Kenarı" },
      { icon: "🏛️", label: "Teos Antik Kenti" },
    ],
    images: [IMAGES.sunset, IMAGES.forest, IMAGES.coast],
    rating: 4.7,
    reviewCount: 156,
    category: "deniz-kenari",
    coordinates: { lat: 38.195, lng: 26.79 },
    googleMapsEmbed: mapEmbed(38.195, 26.79),
    transport:
      "İzmir'den Seferihisar'a 45 km. Sığacık yönü tabelalarını takip edin.",
    createdAt: "2026-01-10",
  },
  {
    slug: "seferihisar-urla-koyu-kampi",
    name: "Seferihisar Ürkmez Koyu Kampı",
    provinceSlug: "izmir",
    districtSlug: "seferihisar",
    shortDescription:
      "Ürkmez sahilinde çam ormanı ile deniz arasında geniş aile kamp alanı.",
    description:
      "Seferihisar Ürkmez Koyu Kampı, Seferihisar'ın en geniş sahil şeridinde, çam ormanı ile deniz arasında konumlanmış geniş bir kamp tesisidir. Ailelerin tercih ettiği bu alan, çocuk oyun parkı, güvenli yüzme bölgesi ve geniş çadır parselleri sunar. Ürkmez plajının kumlu kıyısına 50 metre mesafede olan kamp alanı, deniz sporları ve plaj voleybolu imkânı sağlar. Elektrik ve su bağlantısı tüm parsellerde mevcuttur; ortak mutfak ve mangal alanları paylaşımlı kullanıma açıktır. Seferihisar merkezine 10 km mesafede olan tesis, mandalina bahçeleri ve zeytinliklerle çevrilidir. Akşamları çam ağaçlarının arasından esen meltem rüzgârı serin bir ortam yaratır. Cittaslow beldesinin sakin yaşam temposu kamp deneyimine yansır. Ürkmez plajı ailelerin güvenle tercih ettiği sığ sularda yüzme imkânı verir. Seferihisar pazarından taze deniz ürünü alıp mangal yapabilirsiniz. Ürkmez'de plaj temizliği düzenli yapılır; mavi bayrak standartlarına yakın kalite sunulur.",
    features: [
      { icon: "👨‍👩‍👧", label: "Aile Dostu" },
      { icon: "🌲", label: "Çam Ormanı" },
      { icon: "🌊", label: "Kumlu Plaj" },
      { icon: "⚡", label: "Elektrik" },
      { icon: "🏐", label: "Plaj Sporları" },
    ],
    images: [IMAGES.pine, IMAGES.beach, IMAGES.camp],
    rating: 4.3,
    reviewCount: 142,
    category: "deniz-kenari",
    coordinates: { lat: 38.17, lng: 26.82 },
    googleMapsEmbed: mapEmbed(38.17, 26.82),
    transport:
      "İzmir-Seferihisar karayolunda Ürkmez çıkışını takip edin. Sahil yolu kamp alanına çıkar.",
    createdAt: "2025-10-30",
  },
  {
    slug: "dikili-bademli-koyu-kampi",
    name: "Dikili Bademli Koyu Kampı",
    provinceSlug: "izmir",
    districtSlug: "dikili",
    shortDescription:
      "Dikili'nin saklı Bademli Koyu'nda zeytinlikler içinde bakir deniz kampı.",
    description:
      "Dikili Bademli Koyu Kampı, İzmir'in kuzey sahillerinde yer alan Dikili ilçesinin en bakir koylarından Bademli'de konumlanmıştır. Turizm baskısından henüz uzak bu sakin nokta, zeytin ve çam ağaçlarının gölgesinde kamp yapmak isteyenler için ideal bir kaçış sunar. Koyun berrak suları yüzme ve şnorkelle dalış için uygundur; kıyıda küçük kayalık alanlar deniz canlılarını gözlemlemek için fırsat verir. Kamp alanı çadır turizmine özeldir; tuvalet ve duş alanları çevre dostu malzemelerle inşa edilmiştir. Dikili merkezine 12 km mesafede olan tesis, Nebiler Şelalesi ve Çandarlı Kalesi gibi çevre gezilerine üs olabilir. Akşamları kamp ateşi etrafında toplanan misafirler yerel balıkçılardan taze levrek ve çipura temin edebilir. Kuzey Ege'nin sakin atmosferi burada en saf haliyle yaşanır. Dikili'nin henüz keşfedilmemiş koylarından biri olan Bademli sakin kampçıları ağırlar. Nebiler Şelalesi için günlük gezi planlayabilirsiniz. Bademli'de gece ışık kirliliği minimum düzeydedir; samanyolu net şekilde görülür.",
    features: [
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🌊", label: "Bakir Koy" },
      { icon: "🤿", label: "Şnorkel" },
      { icon: "🔥", label: "Kamp Ateşi" },
      { icon: "🥾", label: "Çevre Gezileri" },
    ],
    images: [IMAGES.coast, IMAGES.forest, IMAGES.sunset],
    rating: 4.6,
    reviewCount: 78,
    category: "deniz-kenari",
    coordinates: { lat: 39.08, lng: 26.88 },
    googleMapsEmbed: mapEmbed(39.08, 26.88),
    transport:
      "İzmir-Bergama karayolunda Dikili çıkışını takip edin. Bademli Koyu yönü 12 km.",
    createdAt: "2026-01-15",
  },
  {
    slug: "dikili-nebiler-dere-kampi",
    name: "Dikili Nebiler Dere Kampı",
    provinceSlug: "izmir",
    districtSlug: "dikili",
    shortDescription:
      "Nebiler Şelalesi yakınında dere kenarında serin orman kampı.",
    description:
      "Dikili Nebiler Dere Kampı, Dikili'nin ünlü Nebiler Şelalesi'nin hemen yakınında, dere kenarında konumlanmış serin bir orman kamp alanıdır. Yaz aylarında şehir sıcaklarından kaçmak isteyenler için ideal olan tesis, şelale havuzlarında serinleme imkânı sunar. Çam ve meşe ağaçlarının oluşturduğu doğal gölgelik alanlar çadır kurmak için mükemmel zemin sağlar. Dere suyu kamp alanının doğal sınırını oluşturur; sabahları su sesi eşliğinde uyanırsınız. Trekking rotaları şelale çevresindeki ormanlık alana uzanır; rehberli doğa yürüyüşleri organize edilir. Dikili sahiline 8 km mesafede olan kamp alanı, hem deniz hem orman deneyimini bir arada sunar. Elektrik bağlantısı sınırlı tutularak doğayla uyumlu bir kamp anlayışı benimsenmiştir. Şelale havuzlarında serinlemek yaz sıcağında büyük keyif verir. Dere kenarında ayakkabısız yürümek için kaymaz taban tercih edin. Orman kampında yangın riskine karşı ateş yalnızca belirlenen alanlarda yakılabilir.",
    features: [
      { icon: "💧", label: "Şelale Yakını" },
      { icon: "🌲", label: "Orman İçi" },
      { icon: "🥾", label: "Trekking" },
      { icon: "🏊", label: "Doğal Havuz" },
      { icon: "🐕", label: "Evcil Hayvan Dostu" },
    ],
    images: [IMAGES.forest, IMAGES.valley, IMAGES.pine],
    rating: 4.4,
    reviewCount: 53,
    category: "orman",
    coordinates: { lat: 39.06, lng: 26.92 },
    googleMapsEmbed: mapEmbed(39.06, 26.92, 13),
    transport:
      "Dikili merkezinden Nebiler Şelalesi yönüne 6 km. Son 1 km toprak yol.",
    createdAt: "2025-12-08",
  },
  {
    slug: "kabak-koyu-kamp",
    name: "Kabak Koyu Kamp",
    provinceSlug: "mugla",
    districtSlug: "fethiye",
    shortDescription:
      "Likya Yolu'nun incisi Kabak Koyu'nda deniz ve orman arasında teraslı kamp.",
    description:
      "Kabak Koyu Kamp, Fethiye'nin en ünlü koylarından Kabak'ta, deniz seviyesinden başlayarak orman içine uzanan teraslı alanlarda konumlanır. Turkuaz deniz manzarası Likya kıyılarının en etkileyici görüntülerinden birini sunar. Yoga ve meditasyon kampları, doğa sporları etkinlikleri ve rehberli Likya Yolu yürüyüşleri düzenli olarak organize edilir. Koya iniş yürüyüş mesafesindedir; patika yol çam ormanından geçerek plaja ulaşır. Organik mutfakta hazırlanan yemekler tesis bahçesinden toplanan sebzelerle sunulur. Kabak'ın alternatif yaşam tarzı ve hippi atmosferi kamp deneyimine özgün bir karakter katar. Faralya köyüne yürüyüş mesafesinde olan tesis, Ölüdeniz ve Kelebekler Vadisi turlarına başlangıç noktası olabilir. Yıldızlı gecelerde kamp ateşi eşliğinde gitar sesleri yükselir. Kabak'ın alternatif yaşam kültürü yeni gelenleri sıcak karşılar. Likya Yolu'nda yürüyüş planlıyorsanız Faralya'dan başlangıç yapabilirsiniz. Kabak'ta internet bağlantısı sınırlıdır; doğayla baş başa kalmak isteyenler için avantajdır.",
    features: [
      { icon: "🧘", label: "Yoga Alanı" },
      { icon: "🌊", label: "Deniz Kenarı" },
      { icon: "🥾", label: "Likya Yolu" },
      { icon: "🍽️", label: "Organik Yemek" },
      { icon: "🌲", label: "Orman Terası" },
    ],
    images: [IMAGES.coast, IMAGES.beach, IMAGES.forest],
    rating: 4.9,
    reviewCount: 287,
    category: "deniz-kenari",
    coordinates: { lat: 36.458, lng: 29.124 },
    googleMapsEmbed: mapEmbed(36.458, 29.124),
    transport:
      "Fethiye'den Ölüdeniz yolu üzerinden Faralya'ya, oradan Kabak yönüne 15 km toprak yol.",
    createdAt: "2026-02-14",
  },
  {
    slug: "fethiye-katranci-koyu-kampi",
    name: "Fethiye Katrancı Koyu Kampı",
    provinceSlug: "mugla",
    districtSlug: "fethiye",
    shortDescription:
      "Fethiye merkeze yakın Katrancı Koyu'nda çam ormanı içinde aile kamp alanı.",
    description:
      "Fethiye Katrancı Koyu Kampı, Fethiye merkeze sadece 15 km mesafede, Katrancı Koyu'nun çam ormanıyla çevrili kıyısında yer alır. Ailelerin güvenle tercih ettiği bu geniş kamp alanı, çocuk oyun alanı, market ve restoran gibi temel ihtiyaçlara yakınlığıyla öne çıkar. Koyun sakin ve sığ suları çocuklar için güvenlidir; plaj kumlu ve geniştir. Çam ağaçlarının gölgesinde kurulan çadırlar yaz sıcağında doğal serinlik sağlar. Elektrik ve su bağlantısı tüm parsellerde mevcuttur. Fethiye çarşısı, antik Telmessos kenti ve tekne turları araçla kısa mesafededir. Akşamları koyun sakin atmosferinde balık tutma ve mangal keyfi yapılabilir. Muğla'nın en erişilebilir kamp noktalarından biri olarak hafta sonu kaçamakları için idealdir. Fethiye merkeze yakınlığı ulaşım kolaylığı sağlar. Tekne turları ve yamaç paraşütü gibi aktiviteler için acentelerle anlaşma imkânı vardır. Katrancı'da akşam saatlerinde deniz esintisi serin bir uyku ortamı yaratır.",
    features: [
      { icon: "👨‍👩‍👧", label: "Aile Dostu" },
      { icon: "🌲", label: "Çam Ormanı" },
      { icon: "🌊", label: "Sakin Koy" },
      { icon: "⚡", label: "Elektrik" },
      { icon: "🏪", label: "Market Yakını" },
    ],
    images: [IMAGES.pine, IMAGES.beach, IMAGES.camp],
    rating: 4.3,
    reviewCount: 198,
    category: "deniz-kenari",
    coordinates: { lat: 36.62, lng: 29.08 },
    googleMapsEmbed: mapEmbed(36.62, 29.08),
    transport:
      "Fethiye merkezden Katrancı yönüne 15 km. Koy girişinde kamp alanı tabelası.",
    createdAt: "2025-11-20",
  },
  {
    slug: "datca-palamutbuku-kamp",
    name: "Datça Palamutbükü Kamp",
    provinceSlug: "mugla",
    districtSlug: "datca",
    shortDescription:
      "Bakir Palamutbükü koyunda zeytin ve badem ağaçları arasında sakin kamp.",
    description:
      "Datça Palamutbükü Kamp, yarımadanın en güzel koylarından Palamutbükü'nde, zeytin ve badem ağaçlarının gölgesinde konumlanır. Kristal berraklığındaki denize birkaç adım mesafede kurulan çadırlar, Datça'nın sakin atmosferini en iyi şekilde yansıtır. Knidos antik kentine günübirlik turlar düzenlenir; antik liman kalıntıları ve Deveboynu Feneri gezilebilir. Bölgenin az yapılaşmış yapısı huzurlu bir kamp deneyimi sunar; gece gökyüzü ışık kirliliğinden arınmıştır. Yerel balıkçılardan taze deniz ürünleri temin edilebilir; badem ve zeytin hasadı döneminde özel etkinlikler yapılır. Palamutbükü'nün rüzgârsız suları yüzme ve paddle board için idealdir. Datça merkeze 25 km mesafede olan tesis, yarımadanın doğal güzelliklerini keşfetmek için mükemmel bir üs noktasıdır. Palamutbükü'nün sakin suları sabah erken yüzüş için biçilmiş kaftandır. Knidos günübirlik turu için tekne kalkış noktalarına yakınsınız. Datça yarımadasının rüzgârlı iklimi yaz sıcağında ferahlatıcı bir etki yapar.",
    features: [
      { icon: "🌊", label: "Özel Koy" },
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🏛️", label: "Knidos Yakını" },
      { icon: "🚿", label: "Duş" },
      { icon: "⭐", label: "Gökyüzü Gözlemi" },
    ],
    images: [IMAGES.sunset, IMAGES.forest, IMAGES.coast],
    rating: 4.6,
    reviewCount: 94,
    category: "deniz-kenari",
    coordinates: { lat: 36.71, lng: 27.65 },
    googleMapsEmbed: mapEmbed(36.71, 27.65),
    transport:
      "Datça merkezden Palamutbükü'ne 25 km. Marmaris-Datça yolu üzerinde.",
    createdAt: "2025-11-28",
  },
  {
    slug: "datca-hayitbuku-kampi",
    name: "Datça Hayıtbükü Kampı",
    provinceSlug: "mugla",
    districtSlug: "datca",
    shortDescription:
      "Üç koyun birleştiği Hayıtbükü'nde badem çiçekleri arasında butik kamp.",
    description:
      "Datça Hayıtbükü Kampı, Datça Yarımadası'nın güney ucunda, üç koyun birleştiği eşsiz Hayıtbükü manzarasında konumlanmış butik bir kamp tesisidir. Nisan ayında badem çiçekleriyle kaplanan yamaçlar kamp alanına romantik bir atmosfer katar. Küçük ölçekli yapısı sayesinde kalabalıktan uzak, özel bir deneyim sunar. Koya özel patika yol 10 dakikalık yürüyüşle ulaşılır; yol boyunca Datça'nın virajlı sahil manzaraları eşlik eder. Çadır ve bungalov seçenekleri mevcuttur; bungalovlar taş ve ahşap karışımı yerel mimariyle inşa edilmiştir. Knidos antik kentine 12 km mesafede olan tesis, günübirlik antik kent turları için ideal konumdadır. Akşamları Datça'nın ünlü badem şekeri ve balı ürünleri tadılabilir. Rüzgârsız koy suları sakin yüzme imkânı sağlar. Badem çiçeği festivali döneminde konaklama yoğunluğu artar; önceden rezervasyon şarttır. Hayıtbükü'ne iniş patikası rahat ayakkabı gerektirir. Hayıtbükü'nün üç koy manzarası her mevsim farklı renk tonlarıyla değişir.",
    features: [
      { icon: "🌸", label: "Badem Çiçeği" },
      { icon: "🏡", label: "Bungalov" },
      { icon: "🌊", label: "Üç Koy Manzarası" },
      { icon: "🥾", label: "Patika Yol" },
      { icon: "🏛️", label: "Knidos Yakını" },
    ],
    images: [IMAGES.valley, IMAGES.coast, IMAGES.camp],
    rating: 4.8,
    reviewCount: 71,
    category: "bungalov",
    coordinates: { lat: 36.695, lng: 27.58 },
    googleMapsEmbed: mapEmbed(36.695, 27.58, 13),
    transport:
      "Datça merkezden Knidos yönüne ilerleyin. Hayıtbükü çıkışı 18 km sonra.",
    createdAt: "2026-02-22",
  },
  {
    slug: "marmaris-ciftlik-koyu-kampi",
    name: "Marmaris Çiftlik Koyu Kampı",
    provinceSlug: "mugla",
    districtSlug: "marmaris",
    shortDescription:
      "Marmaris'in saklı Çiftlik Koyu'nda zeytinlikler içinde deniz kenarı kamp.",
    description:
      "Marmaris Çiftlik Koyu Kampı, Marmaris merkezin kalabalığından uzakta, Çiftlik Koyu'nun zeytin ve çam ağaçlarıyla çevrili kıyısında konumlanmış sakin bir kamp alanıdır. Koyun sakin suları yüzme ve kano için idealdir; kıyıda küçük bir balıkçı barınağı taze deniz ürünü temin imkânı sunar. Kamp alanı çadır ve karavan konaklamasına uygundur; elektrik ve su bağlantısı mevcuttur. Marmaris çarşısına ve marinaya 12 km mesafede olan tesis, şehir imkânlarına yakın ama yeterince sakin bir konumdadır. Çevredeki yürüyüş rotaları koyun tepelerine çıkarak Muğla kıyılarının panoramik manzarasını sunar. Akşamları zeytin ağaçlarının gölgesinde kamp ateşi keyfi yapılabilir. Tekne turları ile yakın koylar ve Adalar keşfedilebilir. Çiftlik Koyu Marmaris kalabalığından uzak ama merkeze yakın bir denge sunar. Balıkçı barınağından taze avla akşam yemeği hazırlayabilirsiniz. Çiftlik'te tekne turları ile çevre koylar ve Adalar keşfedilebilir.",
    features: [
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🌊", label: "Sakin Koy" },
      { icon: "🚐", label: "Karavan Uyumlu" },
      { icon: "🛶", label: "Kano" },
      { icon: "⛵", label: "Tekne Turları" },
    ],
    images: [IMAGES.coast, IMAGES.pine, IMAGES.sunset],
    rating: 4.5,
    reviewCount: 134,
    category: "deniz-kenari",
    coordinates: { lat: 36.82, lng: 28.24 },
    googleMapsEmbed: mapEmbed(36.82, 28.24),
    transport:
      "Marmaris merkezden Çiftlik yönüne 12 km. Koy girişinde kamp tabelası.",
    createdAt: "2026-01-18",
  },
  {
    slug: "marmaris-bozburun-yarimadasi-kampi",
    name: "Marmaris Bozburun Yarımadası Kampı",
    provinceSlug: "mugla",
    districtSlug: "marmaris",
    shortDescription:
      "Bozburun Yarımadası'nda mandalina bahçeleri arasında bakir koy kampı.",
    description:
      "Marmaris Bozburun Yarımadası Kampı, Marmaris'in güneyinde uzanan Bozburun Yarımadası'nda, mandalina ve zeytin bahçeleri arasında konumlanmış bakir bir kamp noktasıdır. Yarımadanın sakin koylarına yürüyüş mesafesinde olan tesis, kalabalıktan uzak kamp deneyimi arayanlar için idealdir. Geleneksel taş evlerin yakınında kurulan çadır alanları, yerel yaşam kültürüyle iç içe bir deneyim sunar. Bozburun'un ünlü gulet tersaneleri ve balıkçı limanı gezilebilir; taze balık restoranları yürüme mesafesindedir. Yarımadanın rüzgârlı iklimi yelken ve rüzgâr sörfü tutkunları için cazip koşullar sağlar. Akşamları mandalina bahçelerinin kokusu kamp alanına yayılır. Datça ve Knidos turları için stratejik bir konumda olan tesis, Likya kıyılarının keşfi için üs noktası olabilir. Bozburun'un gulet geleneği kamp deneyimine denizcilik kültürü katar. Yarımada yolu virajlıdır; dikkatli sürüş önerilir. Yarımadanın mandalina kokulu yolları araçla gezerken keyifli molalar sunar.",
    features: [
      { icon: "🍊", label: "Mandalina Bahçesi" },
      { icon: "⛵", label: "Gulet Tersanesi" },
      { icon: "🌊", label: "Bakir Koylar" },
      { icon: "🥾", label: "Yarımada Yürüyüşü" },
      { icon: "🐟", label: "Taze Balık" },
    ],
    images: [IMAGES.valley, IMAGES.coast, IMAGES.camp],
    rating: 4.7,
    reviewCount: 89,
    category: "deniz-kenari",
    coordinates: { lat: 36.68, lng: 28.04 },
    googleMapsEmbed: mapEmbed(36.68, 28.04, 13),
    transport:
      "Marmaris'ten Bozburun yönüne 45 km. Yarımada yolu boyunca tabelalar mevcuttur.",
    createdAt: "2025-12-14",
  },
  {
    slug: "kazdagi-edremit-kamp",
    name: "Kazdağı Edremit Kamp",
    provinceSlug: "balikesir",
    districtSlug: "edremit",
    shortDescription:
      "Kazdağı eteklerinde zeytinlikler arasında orman ve deniz manzaralı kamp.",
    description:
      "Kazdağı Edremit Kamp, Kazdağı Milli Parkı'nın eteklerinde, Edremit Körfezi'ne bakan yamaçta konumlanmış eşsiz bir kamp alanıdır. Zeytin ağaçları arasındaki parseller hem deniz hem orman manzarası sunar; sabahları güneş denizden doğarken akşamları Kazdağı silüeti gün batımına karışır. Kazdağı trekking rotalarına kolay erişim sağlar; Hasanboğuldu ve Sütuven Şelaleleri yürüyüş mesafesindedir. Edremit'in termal kaplıcalarına 15 km mesafede olan tesis, kamp sonrası dinlenme imkânı sunar. Zeytin hasadı döneminde özel etkinlikler düzenlenir; yerel zeytinyağı tadımı yapılabilir. Aileler ve doğa yürüyüşçüleri tarafından sıkça tercih edilir. Altınoluk ve Akçay plajları araçla 10 dakika mesafededir. Kazdağı trekking rotaları için rehberli turlar organize edilir. Zeytin hasadı döneminde köylülerle birlikte toplama etkinliği yapılabilir. Kazdağı'nda endemik bitki türleri gözlemlemek doğa tutkunlarına özel bir deneyim sunar. Edremit zeytinyağı fabrikalarında tadım turları kamp programınıza eklenebilir.",
    features: [
      { icon: "⛰️", label: "Dağ Manzarası" },
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🥾", label: "Trekking" },
      { icon: "♨️", label: "Termal Yakını" },
      { icon: "🌊", label: "Deniz Manzarası" },
    ],
    images: [IMAGES.forest, IMAGES.pine, IMAGES.mountain],
    rating: 4.3,
    reviewCount: 76,
    category: "orman",
    coordinates: { lat: 39.59, lng: 27.02 },
    googleMapsEmbed: mapEmbed(39.59, 27.02),
    transport:
      "Balıkesir-Edremit karayolu üzerinde, Altınoluk çıkışından 5 km.",
    createdAt: "2026-01-05",
  },
  {
    slug: "edremit-altinoluk-sahil-kampi",
    name: "Edremit Altınoluk Sahil Kampı",
    provinceSlug: "balikesir",
    districtSlug: "edremit",
    shortDescription:
      "Altınoluk sahilinde kumlu plaja sıfır mesafede aile dostu deniz kampı.",
    description:
      "Edremit Altınoluk Sahil Kampı, Edremit Körfezi'nin en gözde tatil beldelerinden Altınoluk'ta, kumlu plaja sıfır mesafede konumlanmış aile dostu bir kamp tesisidir. Geniş çadır parselleri ve karavan alanları deniz manzaralıdır; sabahları plajda yüzme imkânı sunar. Altınoluk'un restoranları, marketleri ve eczaneleri yürüme mesafesindedir. Çocuk oyun alanı ve güvenli yüzme bölgesi ailelerin tercih sebeplerindendir. Kazdağı yürüyüş rotalarına 20 dakika sürüşle ulaşılabilir; günübirlik dağ turları organize edilir. Akşamları sahil yürüyüşü ve balık restoranları kamp programını tamamlar. Edremit Havalimanı'na 25 km mesafede olan tesis, ulaşım açısından avantajlıdır. Yaz aylarında canlı bir tatil atmosferi sunar. Altınoluk'un canlı sahil yaşamı kamp sonrası eğlence arayanlara hitap eder. Akçay ve Altınoluk plajları yürüme mesafesindedir. Altınoluk sahilinde bisiklet kiralama noktaları kamp alanına yakın mesafededir. Sahil boyunca uzanan yürüyüş yolu sabah ve akşam sporları için idealdir.",
    features: [
      { icon: "🌊", label: "Plaja Sıfır" },
      { icon: "👨‍👩‍👧", label: "Aile Dostu" },
      { icon: "🚐", label: "Karavan Uyumlu" },
      { icon: "🏪", label: "Merkeze Yakın" },
      { icon: "✈️", label: "Havalimanı Yakını" },
    ],
    images: [IMAGES.beach, IMAGES.coast, IMAGES.camp],
    rating: 4.4,
    reviewCount: 167,
    category: "deniz-kenari",
    coordinates: { lat: 39.57, lng: 26.74 },
    googleMapsEmbed: mapEmbed(39.57, 26.74),
    transport:
      "Edremit-Altınoluk sahil yolu üzerinde. Plaj kenarında kamp alanı tabelası.",
    createdAt: "2025-10-25",
  },
  {
    slug: "ayvalik-cunda-adasi-kampi",
    name: "Ayvalık Cunda Adası Kampı",
    provinceSlug: "balikesir",
    districtSlug: "ayvalik",
    shortDescription:
      "Cunda Adası'nda taş evler arasında zeytinlik içinde Ege adası kamp deneyimi.",
    description:
      "Ayvalık Cunda Adası Kampı, Ayvalık körfezindeki Cunda Adası'nda, geleneksel taş evlerin ve zeytinliklerin arasında konumlanmış özgün bir kamp tesisidir. Adanın sakin atmosferi ve Ege mimarisi kamp deneyimine tarihi bir boyut katar. Çadır alanları zeytin ağaçlarının gölgesinde düzenlenmiştir; denize yürüyüş mesafesindedir. Cunda'nın ünlü balık restoranları, taş fırınları ve şarap evleri keşfedilebilir. Ayvalık merkeze köprü ve feribot ile 15 dakikada ulaşılır. Taksiyarhis Kilisesi ve Sevim Necdet Kent Kitaplığı gibi kültürel noktalar adayı gezmeye değer kılar. Akşamları adanın batı sahillerinde gün batımı izlenirken zeytinyağlı mezeler tadılabilir. Ada rüzgârı yaz sıcağında serinlik sağlar. Cunda Adası'na köprü ve feribot alternatifleri mevcuttur. Taş fırın ekmeği ve Ayvalık tostu kahvaltıda mutlaka denenmelidir. Cunda'da akşam saatlerinde deniz ürünü restoranları canlı bir atmosfer sunar. Adanın tarihi kiliseleri ve müzeleri günübirlik kültür gezisi için mükemmel duraklardır.",
    features: [
      { icon: "🏝️", label: "Ada Kampı" },
      { icon: "🫒", label: "Zeytinlik" },
      { icon: "🏛️", label: "Tarihi Doku" },
      { icon: "🍽️", label: "Balık Restoranları" },
      { icon: "🌅", label: "Gün Batımı" },
    ],
    images: [IMAGES.coast, IMAGES.valley, IMAGES.sunset],
    rating: 4.6,
    reviewCount: 112,
    category: "deniz-kenari",
    coordinates: { lat: 39.34, lng: 26.64 },
    googleMapsEmbed: mapEmbed(39.34, 26.64),
    transport:
      "Ayvalık'tan Cunda Adası'na köprü veya feribot. Ada merkezinden kamp alanına 2 km.",
    createdAt: "2026-02-08",
  },
  {
    slug: "ayvalik-sarimsakli-kampi",
    name: "Ayvalık Sarımsaklı Kampı",
    provinceSlug: "balikesir",
    districtSlug: "ayvalik",
    shortDescription:
      "Sarımsaklı Plajı'nda çam ormanı ile deniz arasında geniş kamp alanı.",
    description:
      "Ayvalık Sarımsaklı Kampı, Ayvalık'ın en uzun plajı Sarımsaklı'da, çam ormanı ile deniz arasında konumlanmış geniş bir kamp tesisidir. 7 kilometrelik kumsalın hemen yanında yer alan kamp alanı, yüzme ve plaj aktiviteleri için ideal konumdadır. Çam ağaçlarının gölgesinde kurulan çadırlar yaz sıcağında doğal serinlik sağlar. Elektrik, su ve duş imkânları tüm parsellerde mevcuttur. Ayvalık merkeze 8 km mesafede olan tesis, şehir imkânlarına yakınlığıyla avantaj sağlar. Sahil boyunca bisiklet yolu ve yürüyüş parkuru bulunur. Akşamları Ayvalık'ın ünlü Cunda mutfağından lezzetler tadılabilir. Aileler ve genç gruplar tarafından yoğun ilgi görür; yaz aylarında canlı bir kamp atmosferi sunar. Sarımsaklı'nın uzun plajı sabah koşusu ve bisiklet için idealdir. Ayvalık merkez gezisi akşam saatlerinde keyifli bir aktivitedir. Sarımsaklı kamp alanı yaz festivalleri döneminde canlı müzik etkinliklerine ev sahipliği yapar.",
    features: [
      { icon: "🌲", label: "Çam Ormanı" },
      { icon: "🏖️", label: "7 km Plaj" },
      { icon: "⚡", label: "Elektrik" },
      { icon: "🚲", label: "Bisiklet Yolu" },
      { icon: "👨‍👩‍👧", label: "Aile Dostu" },
    ],
    images: [IMAGES.pine, IMAGES.beach, IMAGES.camp],
    rating: 4.2,
    reviewCount: 223,
    category: "deniz-kenari",
    coordinates: { lat: 39.31, lng: 26.68 },
    googleMapsEmbed: mapEmbed(39.31, 26.68),
    transport:
      "Ayvalık merkezden Sarımsaklı yönüne 8 km. Plaj girişinde kamp alanı.",
    createdAt: "2025-11-02",
  },
];
