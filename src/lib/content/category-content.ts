import { getCategoryImage, PLACE } from "@/data/media/place-images";

export interface CategoryContent {
  image: string;
  intro: string;
  paragraphs: string[];
  tips: string[];
  bestRegions: { label: string; href: string }[];
}

export const categoryContent: Record<string, CategoryContent> = {
  "deniz-kenari": {
    image: getCategoryImage("deniz-kenari", PLACE.kaputas),
    intro:
      "Deniz kenarı kamp alanları, sabahı dalga sesiyle karşılamak ve gün batımında turkuaz suların keyfini çıkarmak isteyenler için Türkiye'nin en popüler kamp türüdür.",
    paragraphs: [
      "Ege ve Akdeniz kıyılarında kumsala sıfır veya koy kenarında kurulan çadırlar, yaz tatilinin en sade ama en etkileyici biçimini sunar. Çeşme'den Kaş'a, Assos'tan Datça'ya uzanan şeritte hem organize tesisler hem de daha sakin koy noktaları bulunur. Deniz kenarı kampında rüzgâr yönünü doğru değerlendirmek, çadırınızı korunaklı noktalara kurmak ve güneşten korunmak deneyimin kalitesini belirler.",
      "Türkiye'de deniz kenarı kamp alanları genellikle mayıstan ekime kadar en verimli dönemi yaşar. Temmuz-ağustos aylarında popüler koylarda yoğunluk artarken, haziran başı ve eylül ortası hem deniz suyu sıcaklığı hem de kalabalık açısından altın sezon kabul edilir. Karavan parkları, bungalov tesisleri ve çadır alanları bir arada sunulduğundan aileler, çiftler ve solo kampçılar farklı konfor seviyelerinde seçim yapabilir.",
      "Deniz kenarında kamp yaparken gelgit ve rüzgâr koşullarını önceden araştırmak, plastik atık bırakmamak ve Caretta caretta gibi koruma altındaki türlerin yumurtlama alanlarına saygı göstermek önemlidir. Likya kıyısı boyunca yürüyüş rotalarıyla birleştirilen çok günlük kamp programları, deniz kampını trekking deneyimiyle zenginleştirir. Listemizdeki deniz kenarı kategorisindeki tesisler; elektrik, duş, karavan bağlantısı ve plaj erişimi gibi kriterlere göre filtrelenmiştir.",
    ],
    tips: [
      "Meltem rüzgârına karşı sağlam kazık ve kaliteli çadır kullanın.",
      "Güneş kremi, şapka ve yeterli su bulundurun; kıyıda gölge sınırlı olabilir.",
      "Gece nem oranı yükselebilir; uyku tulumu ve mat seçimine dikkat edin.",
      "Popüler dönemlerde erken rezervasyon ve erken varış avantaj sağlar.",
    ],
    bestRegions: [
      { label: "Çeşme Kamp Alanları", href: "/kamp-alanlari/izmir/cesme" },
      { label: "Assos Kamp Alanları", href: "/kamp-alanlari/canakkale/assos" },
      { label: "Kaş Kamp Alanları", href: "/kamp-alanlari/antalya/kas" },
      { label: "Kabak Koyu Kamp", href: "/kamp-alanlari/mugla/fethiye/kabak-koyu-kamp" },
    ],
  },
  dag: {
    image: getCategoryImage("dag", PLACE.yusufeliCoruh),
    intro:
      "Dağ kamp alanları, yüksek rakımda temiz hava, geniş manzara ve yıldızlı gökyüzü arayan macera tutkunlarının tercih ettiği rotalardır.",
    paragraphs: [
      "Kaçkar Dağları, Toroslar, Kazdağı ve Kartepe gibi farklı coğrafyalarda dağ kampı; trekking, yayla gezisi ve fotoğrafçılıkla birleştirilebilir. Yusufeli ve Artvin vadilerinde nehir kenarı kamp noktaları, Bolu ve Kartepe'de orman içi yamaçlar, Antalya'nın iç kesimlerinde Likya Dağları rotaları dağ kampının çeşitli yüzlerini oluşturur. Rakım arttıkça gece sıcaklığı düşer; katmanlı giyim ve uygun uyku ekipmanı şarttır.",
      "Dağ kampında rota planlaması güvenliğin temelidir. Hava tahminini günlük kontrol etmek, su kaynağı ve yiyecek stokunu buna göre ayarlamak, acil durum iletişim planı oluşturmak deneyimi güvenli kılar. Türkiye'de birçok dağ kamp alanı yaz aylarında açıkken, ilkbahar kar kalıntıları ve sonbahar sisli manzaralar farklı mevsim deneyimleri sunar. Deneyimsiz kampçılar için rehberli turlar veya kısa süreli yayla kampı iyi bir başlangıç olabilir.",
      "Listemizdeki dağ kategorisindeki kamp alanları; rakım, ulaşım zorluğu, tesis imkânları ve yakın yürüyüş rotaları açısından değerlendirilmiştir. Kaçkar trekking rotaları, Bezirgan Yaylası ve Altiparmak Dağları çevresindeki noktalar bu kategorinin öne çıkan adreslerindendir. Dağ kampında çöpünüzü geri götürmek ve yangın riskine karşı açık ateş kurallarına uymak doğanın korunması için kritiktir.",
    ],
    tips: [
      "Harita, pusula veya GPS ile rota takibi yapın; telefon sinyali zayıf olabilir.",
      "Gece sıcaklığı gündüze göre 10–15°C düşebilir; termal katman hazırlayın.",
      "Yüksek rakımda güneş etkisi güçlüdür; SPF koruma ihmal etmeyin.",
      "Yağmur ve ani sis için su geçirmez çadır ve yağmurluk taşıyın.",
    ],
    bestRegions: [
      { label: "Yusufeli Kamp Alanları", href: "/kamp-alanlari/artvin/yusufeli" },
      { label: "Kartepe Kamp Alanları", href: "/kamp-alanlari/izmit/kartepe" },
      { label: "Kaş Dağ Kampı", href: "/kamp-alanlari/antalya/kas" },
      { label: "Kalkan Bezirgan Yaylası", href: "/kamp-alanlari/antalya/kalkan/kalkan-bezirgan-yayla-kampi" },
    ],
  },
  orman: {
    image: getCategoryImage("orman", PLACE.olymposAntikKenti),
    intro:
      "Orman kamp alanları, çam ve meşe ağaçlarının gölgesinde kuş sesleri eşliğinde huzurlu bir doğa deneyimi sunar.",
    paragraphs: [
      "Türkiye'nin orman kamp coğrafyası Kazdağı'ndan Yedigöller'e, Olympos vadisinden Kartepe çamlarına kadar geniş bir yelpazeye sahiptir. Orman içi kamp, yaz sıcağında doğal gölge sağladığı için özellikle aileler ve çocuklu gruplar tarafından tercih edilir. Dere kenarı noktalarda su sesi eşliğinde uyumak, sabah kuş cıvıltılarıyla uyanmak orman kampının ayırt edici özelliklerindendir.",
      "Orman kamp alanlarında yangın riski en önemli güvenlik konusudur. Açık ateşi yalnızca belirlenen mangal alanlarında yakmak, sigara izmaritlerini kontrol altında tutmak ve kuru dönemlerde ekstra dikkat göstermek gerekir. Milli park sınırları içindeki kamp alanlarında giriş saatleri, ücretler ve çadır kurulum kuralları farklılık gösterebilir; gitmeden önce güncel bilgi alınmalıdır.",
      "Olympos antik kent çevresindeki çam ormanları, Bolu Mudurnu vadileri ve Kartepe orman kamp alanları listemizde orman kategorisinin öne çıkan örnekleridir. Orman kampında böcek ve kene riskine karşı koruyucu sprey kullanmak, gıdaları kapalı tutmak ve gece aydınlatması tercih etmek pratik önlemlerdir. Sonbahar yaprak dökümü ve ilkbahar yeşili orman kampına mevsimsel renk katar.",
    ],
    tips: [
      "Kene ve böcek riskine karşı koruyucu sprey kullanın.",
      "Yiyecekleri kapalı kaplarda saklayın; vahşi hayvanları çekmeyin.",
      "Yangın yasağı dönemlerini takip edin; mangal alanı dışında ateş yakmayın.",
      "Gece serinliğine karşı ince polar veya hafif uyku tulumu getirin.",
    ],
    bestRegions: [
      { label: "Olympos Kamp Alanları", href: "/kamp-alanlari/antalya/olympos" },
      { label: "Kartepe Orman Kampı", href: "/kamp-alanlari/izmit/kartepe/kartepe-orman-kampi" },
      { label: "Mudurnu Kamp Alanları", href: "/kamp-alanlari/bolu/mudurnu" },
      { label: "Alaçatı Doğa Kampı", href: "/kamp-alanlari/izmir/cesme/alacati-doga-kampi" },
    ],
  },
  kislik: {
    image: getCategoryImage("kislik", PLACE.abantLake),
    intro:
      "Kışlık kamp alanları, kar manzarası, soğuk hava koşullarına dayanıklı ekipman ve dört mevsim açık tesislerle kış aylarında da doğada kalmanızı sağlar.",
    paragraphs: [
      "Kış kampı, deneyim ve ekipman gerektiren ama karlı zirveler, donmuş göller ve sessiz ormanlarla ödüllendiren bir deneyimdir. Kartepe'de kar yağışı sonrası beyaz örtü altında kamp kurmak, Bolu yükseklerinde kış yürüyüşüyle birleştirilen kısa kaçamaklar ve Kaçkar eteklerinde erken kış rotaları Türkiye'de kış kampının erişilebilir örnekleridir. Uyku tulumu derecesi, izolasyon matı ve katmanlı giyim hayati önem taşır.",
      "Kışlık kamp alanlarında elektrik ve sıcak su imkânı sunan tesisler, soğuk gece koşullarında konforu artırır. Karavan kampında ısıtma sistemi test edilmeli, çadır kampında ise dört mevsim çadır ve rüzgâr kesici kullanılmalıdır. Gün ışığı kısa olduğundan kamp kurulumunu öğleden önce tamamlamak ve gece aktiviteleri için baş feneri bulundurmak gerekir.",
      "Listemizde kışlık kategorisinde yer alan tesisler, yıl boyu açık olma durumu ve kış koşullarına uygun altyapı açısından değerlendirilmiştir. Mudurnu Tarihi Kent Kampı ve Kartepe bölgesi bu kategorinin dikkat çeken adreslerindendir. Kış kampında hipotermi riskine karşı ıslak kıyafetle uyumaktan kaçınmak ve sıcak içecek stoku yapmak önemli pratiklerdir.",
    ],
    tips: [
      "Uyku tulumu derecesini gece minimum sıcaklığının 5°C altında seçin.",
      "Katmanlı giyin; pamuklu kıyafet yerine sentetik veya yün tercih edin.",
      "Karlı yollarda zincir veya kış lastiği bulundurun.",
      "Termos, el ısıtıcısı ve ekstra battaniye konforu artırır.",
    ],
    bestRegions: [
      { label: "Kartepe Kamp Alanları", href: "/kamp-alanlari/izmit/kartepe" },
      { label: "Mudurnu Tarihi Kent Kampı", href: "/kamp-alanlari/bolu/mudurnu/mudurnu-tarihi-kent-kampi" },
      { label: "Yusufeli Dağ Kampı", href: "/kamp-alanlari/artvin/yusufeli" },
    ],
  },
  festival: {
    image: getCategoryImage("festival", PLACE.alacati),
    intro:
      "Festival kamp alanları, müzik ve kültür etkinlikleri çevresinde toplu kamp deneyimi arayanlar için özel olarak düzenlenmiş veya festival döneminde açılan alanlardır.",
    paragraphs: [
      "Türkiye'de yaz aylarında düzenlenen açık hava müzik festivalleri, kamp alanı kültürünün en canlı örneklerinden birini oluşturur. Festival kampında çadır komşuluğu, ortak alanlar ve gece programları sosyal bir atmosfer yaratır. Bu tür alanlarda gürültü, kalabalık ve gece aktivitesi normaldir; sessizlik arayanlar için uygun olmayabilir.",
      "Festival kampına giderken hafif ama işlevsel ekipman tercih etmek, değerli eşyaları minimumda tutmak ve grup halinde hareket etmek güvenliği artırır. Kulak tıkacı, portatif şarj cihazı, su matarası ve su geçirmez çadır festival kampının vazgeçilmezleri arasındadır. Etkinlik alanı kuralları, giriş-çıkış saatleri ve güvenlik kontrolleri festivalden festivale değişir.",
      "Festival kategorisindeki kamp alanları listemiz, etkinlik dönemlerinde hizmet veren veya festival turizmine uygun altyapıya sahip tesisleri kapsar. Gelecekte bu kategoriye yeni tesisler eklendikçe rehberimiz güncellenecektir. Festival kampında çevreye saygı, atık ayrıştırma ve gürültü kurallarına uyum topluluk deneyiminin kalitesini yükseltir.",
    ],
    tips: [
      "Bilet, giriş ve kamp alanı rezervasyonunu önceden tamamlayın.",
      "Değerli eşyaları araçta veya emanet alanında bırakın.",
      "Kulak tıkacı ve göz bandı uyku kalitesini artırır.",
      "Atıkları ayrıştırın; festival alanı kurallarına uyun.",
    ],
    bestRegions: [
      { label: "Çeşme Festival Sezonu", href: "/kamp-alanlari/izmir/cesme" },
      { label: "Fethiye Etkinlik Rotası", href: "/kamp-alanlari/mugla/fethiye" },
      { label: "Olympos Gençlik Kampı", href: "/kamp-alanlari/antalya/olympos" },
    ],
  },
  karavan: {
    image: getCategoryImage("karavan", PLACE.lakeSapanca),
    intro:
      "Karavan kamp alanları, elektrik, su ve atık su bağlantısı sunan parklar veya karavan dostu geniş parsellerde konforlu yolculuk imkânı sağlar.",
    paragraphs: [
      "Karavan turizmi Türkiye'de son yıllarda hızla büyüyen bir segmenttir. Ege kıyılarından Marmara ormanlarına, Kapadokya çevresinden Akdeniz koylarına uzanan rotalarda tam donanımlı karavan parkları bulunur. Elektrik bağlantısı, temiz su noktası, gri su boşaltma ve güvenli otopark karavan kampının temel beklentileridir.",
      "Karavan ile kamp yaparken tesis kurallarına uymak, komşu parsellere saygı göstermek ve gürültü saatlerini gözetmek önemlidir. Uzun süreli konaklamalarda tesisle indirim görüşmesi yapılabilir; yaz sezonunda erken rezervasyon yer garantisi sağlar. Kartepe Yayla Karavan Kampı gibi yüksek rakımlı noktalar manzara sunarken, Çeşme ve Fethiye kıyılarında deniz manzaralı karavan parkları tercih edilir.",
      "Listemizde karavan kategorisindeki tesisler; bağlantı tipi, parsel büyüklüğü, duş-tuvalet imkânları ve ulaşım kolaylığı açısından değerlendirilmiştir. Karavan kampında seviyeleme blokları, uzatma kabloları ve tesis su hortumu gibi pratik ekipmanlar konforu artırır. Kış aylarında ısıtma sistemini test etmek ve gaz tüpü stokunu kontrol etmek güvenlik açısından şarttır.",
    ],
    tips: [
      "Elektrik, su ve gri su bağlantılarını varışta kontrol edin.",
      "15–20 metre uzatma kablosu ve su hortumu bulundurun.",
      "Seviyeleme blokları karavan dengesini sağlar.",
      "Komşu parsellere saygılı olun; gece sessizliğine dikkat edin.",
    ],
    bestRegions: [
      { label: "Kartepe Karavan Kampı", href: "/kamp-alanlari/izmit/kartepe/kartepe-yayla-karavan-kampi" },
      { label: "Çeşme Karavan Parkları", href: "/kamp-alanlari/izmir/cesme" },
      { label: "Assos Kadırga Kamp", href: "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp" },
    ],
  },
  bungalov: {
    image: getCategoryImage("bungalov", PLACE.olymposBeachRiver),
    intro:
      "Bungalov kamp alanları, çadır kurmadan doğada konaklamak isteyenler için ahşap veya prefabrik yapılarda konforlu bir alternatif sunar.",
    paragraphs: [
      "Bungalov tesisleri, özellikle deniz kenarı ve orman içi lokasyonlarda çadır kampının yorgunluğunu yaşamak istemeyen aileler ve çiftler tarafından tercih edilir. Elektrik, yatak, banyo ve bazen mini mutfak imkânı sunan bungalovlar, ilk kez kamp yapacaklar için ideal bir geçiş basamağıdır. Urla, Kalkan, Datça ve Olympos çevresinde bungalov seçenekleri yaygındır.",
      "Bungalov kampında tesis kuralları, check-in saatleri ve iptal politikaları çadır alanlarından farklı olabilir. Rezervasyon onayı, depozito ve ek hizmet ücretleri gitmeden önce netleştirilmelidir. Deniz manzaralı teraslı bungalovlar gün batımı deneyimini zenginleştirirken, orman içi bungalovlar yaz sıcağında doğal serinlik sağlar.",
      "Listemizde bungalov kategorisindeki tesisler; konfor seviyesi, manzara, ulaşım ve fiyat-performans açısından değerlendirilmiştir. Datça Hayıtbükü Kampı, Kalkan Kalamar Koyu Kampı ve Gökçeada bungalov seçenekleri bu kategorinin öne çıkan adreslerindendir. Bungalov kampında hafif yürüyüş ayakkabısı, plaj havlusu ve kişisel hijyen malzemeleri yine de yanınızda olmalıdır.",
    ],
    tips: [
      "Rezervasyonu özellikle yaz sezonunda haftalar öncesinden yapın.",
      "Bungalov içi kuralları (sigara, evcil hayvan) önceden sorun.",
      "Teras ve manzara fotoğraflarını karşılaştırarak seçim yapın.",
      "Çadır alanı ile bungalov fiyat farkını ve dahil hizmetleri karşılaştırın.",
    ],
    bestRegions: [
      { label: "Datça Hayıtbükü Kampı", href: "/kamp-alanlari/mugla/datca/datca-hayitbuku-kampi" },
      { label: "Kalkan Kalamar Koyu", href: "/kamp-alanlari/antalya/kalkan/kalkan-kalamar-koyu-kampi" },
      { label: "Urla Sahil Kampı", href: "/kamp-alanlari/izmir/urla/urla-sahil-kampi" },
    ],
  },
};

import { categorySupplementContent } from "@/lib/content/category-supplement-content";

export function getCategoryContent(slug: string): CategoryContent | undefined {
  const base = categoryContent[slug];
  if (!base) return undefined;
  const extra = categorySupplementContent[slug]?.paragraphs ?? [];
  return {
    ...base,
    paragraphs: [...base.paragraphs, ...extra],
  };
}
