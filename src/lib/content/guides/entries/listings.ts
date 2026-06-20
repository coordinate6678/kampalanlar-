import { PLACE } from "@/data/media/place-images";
import {
  DEFAULT_GUIDE_AUTHOR,
  GUIDE_PUBLISHED_AT,
  GUIDE_UPDATED_AT,
} from "@/lib/content/guides/constants";
import type { GuideContent } from "@/lib/content/guides/types";

export const listingGuides: Record<string, GuideContent> = {
  "en-iyi-ucretsiz-kamp-alanlari": {
    image: PLACE.olymposBeach,
    intro:
      "Türkiye'de ücretsiz kamp yapmak mümkün olsa da her doğal alan açık değildir; milli park, özel arazi ve sahil şeridi kuralları bölge bölge değişir. Bu rehber, düşük maliyetli veya tesis ücreti makul olan, doğayla iç içe kalabileceğiniz noktaları coğrafi çeşitlilikle derler.",
    sections: [
      {
        id: "ucretsiz-kamp-nedir",
        heading: "Ücretsiz Kamp Ne Demek?",
        paragraphs: [
          "Tamamen ücretsiz kamp, genellikle devlet ormanı, sahil şeridi veya köy yaylalarında izinli alanlarda çadır kurmayı ifade eder. Ancak çoğu popüler noktada tuvalet, duş ve güvenlik için sembolik tesis ücreti alınır; bu ücretler genellikle gecelik 100–300 TL aralığındadır ve çadır başına değil kişi veya alan bazında hesaplanabilir.",
          "Olympos, Kabak Koyu ve Assos gibi yoğun rotalarda ücretsiz kamp alanı kalmamış olabilir; bu bölgelerde tesisli kamp alanları hem altyapı hem de gece güvenliği sunar. Ücretsiz arayanlar için Gökçeada koyları, Yusufeli Çoruh kıyısı ve Datça yarımadasının sakin koyları daha uygun seçeneklerdir.",
        ],
      },
      {
        id: "ege-akdeniz-ucretsiz",
        heading: "Ege ve Akdeniz'de Düşük Maliyetli Seçenekler",
        paragraphs: [
          "Ege kıyısında Dikili Bademli ve Nebiler Deresi gibi noktalar hem ulaşım hem konaklama maliyeti açısından İzmir rotalarına göre daha ekonomiktir. Ayvalık Şirincealtı (Sarımsaklı) plajı çevresinde sezon dışı dönemlerde daha uygun fiyatlı tesisler bulunur.",
          "Akdeniz'de Olympos Adrasan Koyu ve Kaş Kaputaş çevresi manzara açısından üst düzeydir; yaz ortasında rezervasyon şarttır. Kalkan Kalamar Koyu tekne ulaşımı gerektirse de kalabalıktan uzak bir deneyim sunar.",
        ],
        links: [
          {
            label: "Olympos Adrasan Koyu Kampı",
            href: "/kamp-alanlari/antalya/olympos/olympos-adrasan-koyu-kampi",
          },
          {
            label: "Ayvalık Sarımsaklı Kampı",
            href: "/kamp-alanlari/balikesir/ayvalik/ayvalik-sarimsakli-kampi",
          },
        ],
      },
      {
        id: "karadeniz-dogu",
        heading: "Karadeniz ve Doğu Anadolu Alternatifleri",
        paragraphs: [
          "Yusufeli Çoruh Nehri kıyısında nehir sesi eşliğinde kamp yapmak Artvin rotasının en özgün deneyimlerinden biridir. Abant Gölü çevresi Bolu'da tesisli alanlar sunar; kış aylarında buz manzarası eşsizdir ancak ekipman ihtiyacı yaz kampına göre belirgin artar.",
          "Ücretsiz kamp ararken mutlaka yerel bilgi alın: köy muhtarlığı, orman işletme şefliği veya tesis yönetimi hangi alanlara izin verildiğini netleştirir. Ateş yakma yasağı olan bölgelerde gaz ocak kullanımı zorunludur.",
        ],
        links: [
          {
            label: "Yusufeli Çoruh Nehri Kampı",
            href: "/kamp-alanlari/artvin/yusufeli/yusufeli-coruh-nehri-kampi",
          },
          {
            label: "Abant Gölü Kampı",
            href: "/kamp-alanlari/bolu/mudurnu/mudurnu-lake-abant-kampi",
          },
        ],
      },
      {
        id: "dikkat-edilecekler",
        heading: "Ücretsiz Kamp Yaparken Dikkat Edilecekler",
        paragraphs: [
          "Çöp bırakmamak, tuvalet ihtiyacını uygun mesafede ve toprakla kapatılarak gidermek, gece sessizliğine uymak hem doğaya saygı hem de alanın gelecek yıl açık kalması için kritiktir. Caretta caretta yumurtlama alanlarında (Adrasan, Çıralı hattı) gece ışığı kullanımı yasaktır.",
          "Su kaynağı olmayan koylarda yeterli stok taşıyın; Datça Palamutbükü ve Gökçeada Kuzu Koyu gibi noktalarda musluk suyu sınırlı olabilir. Hava durumunu günlük kontrol edin; Ege meltemi ve Akdeniz fırtınaları çadır kurulumunu zorlaştırır.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "antalya",
        districtSlug: "olympos",
        slug: "olympos-adrasan-koyu-kampi",
      },
      {
        provinceSlug: "artvin",
        districtSlug: "yusufeli",
        slug: "yusufeli-coruh-nehri-kampi",
      },
      {
        provinceSlug: "canakkale",
        districtSlug: "gokceada",
        slug: "gokceada-kuzu-koyu-kampi",
      },
      {
        provinceSlug: "mugla",
        districtSlug: "datca",
        slug: "datca-palamutbuku-kamp",
      },
    ],
    relatedGuides: [
      { label: "Deniz Kenarı Kamp Rehberi", href: "/rehberler/deniz-kenari-kamp-rehberi" },
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
    ],
    faq: [
      {
        question: "Türkiye'de tamamen ücretsiz kamp yapılabilir mi?",
        answer:
          "Bazı orman ve yayla alanlarında mümkün olsa da popüler kıyılarda tesis ücreti veya izin gereklidir. Olympos, Kabak ve Assos gibi yoğun rotalarda ücretsiz alan kalmamış olabilir; Gökçeada ve Yusufeli gibi daha sakin bölgeler alternatif sunar.",
      },
      {
        question: "Ücretsiz kamp alanlarında tuvalet ve su var mı?",
        answer:
          "Genellikle hayır. Tesisli kamp alanları duş, tuvalet ve elektrik sunar; tamamen doğal alanlarda su stoku ve taşınabilir tuvalet çözümü planlanmalıdır.",
      },
      {
        question: "Hangi mevsim ücretsiz kamp için daha uygun?",
        answer:
          "Mayıs-haziran ve eylül-ekim hem kalabalık hem fiyat açısından avantajlıdır. Temmuz-ağustos'ta popüler koylarda erken rezervasyon şarttır.",
      },
      {
        question: "Ücretsiz kamp yaparken ateş yakılabilir mi?",
        answer:
          "Orman yangını riski yüksek dönemlerde (yaz kuraklığı) çoğu bölgede yasaktır. Gaz ocak kullanımı hem güvenli hem yasal açıdan tercih edilir.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "istanbul-yakin-kamp-alanlari": {
    image: PLACE.sapancaLake,
    intro:
      "İstanbul'dan hafta sonu kaçamağı için Sapanca-Kartepe hattı, Abant Gölü ve Assos rotası en pratik seçeneklerdir. Otoyol mesafesi 1–3 saat arasında değişir; Cuma akşamı çıkış yapıp Pazar dönüş planı yoğun trafikten kaçınmanın en iyi yoludur.",
    sections: [
      {
        id: "marmara-rotalari",
        heading: "Marmara: Kartepe ve Sapanca",
        paragraphs: [
          "Kartepe orman kamp alanı İstanbul-Ankara otoyoluna yakın konumuyla hafta sonu kaçamağının klasik rotasıdır. Orman içi gölge yaz sıcaklarında serinlik sunar; kış aylarında kar yağışıyla birlikte kış kampına dönüşür. Kartepe yayla karavan kampı elektrik ve su bağlantısı arayanlar için tam donanımlı alternatiftir.",
          "Sapanca Gölü çevresinde göl manzaralı tesisler aile kampı için uygundur. Hafta sonu trafiği Cuma 17:00–21:00 ve Pazar 16:00–22:00 arası yoğundur; erken çıkış 30–60 dakika kazandırır.",
        ],
        links: [
          {
            label: "Kartepe Orman Kampı",
            href: "/kamp-alanlari/izmit/kartepe/kartepe-orman-kampi",
          },
          {
            label: "Kartepe Yayla Karavan Kampı",
            href: "/kamp-alanlari/izmit/kartepe/kartepe-yayla-karavan-kampi",
          },
        ],
      },
      {
        id: "bolu-abant",
        heading: "Bolu: Abant Gölü Rotası",
        paragraphs: [
          "Abant Gölü İstanbul'dan yaklaşık 3 saat mesafededir; göl çevresi yürüyüş parkurları ve fotoğraf kampı için idealdir. Sonbahar yaprak renkleri ve kış buz manzarası mevsimsel çekiciliği artırır. Dört mevsim ekipman gerektirir; göl kıyısında gece sıcaklığı yaz ortasında bile 10°C altına inebilir.",
          "Mudurnu tarihi kent kamp alanı Abant rotasına eklenerek kültür-doğa birleşik bir hafta sonu planlanabilir.",
        ],
        links: [
          {
            label: "Abant Gölü Kampı",
            href: "/kamp-alanlari/bolu/mudurnu/mudurnu-lake-abant-kampi",
          },
        ],
      },
      {
        id: "canakkale-assos",
        heading: "Çanakkale: Assos ve Gökçeada",
        paragraphs: [
          "Assos Kadırga Koyu İstanbul'dan feribot ve otoyol kombinasyonuyla 4–5 saatte ulaşılır; antik kent ve deniz manzarası hafta sonunu değerli kılar. Gökçeada feribotu araç kontenjanı yaz sezonunda sınırlıdır; rezervasyon haftalar öncesinden yapılmalıdır.",
          "Her iki rota da deniz kenarı kamp sevenler için uygundur; meltem gecelerinde sağlam çadır kurulumu şarttır.",
        ],
        links: [
          {
            label: "Assos Kadırga Kamp",
            href: "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp",
          },
          {
            label: "Gökçeada Aydıncık Kampı",
            href: "/kamp-alanlari/canakkale/gokceada/gokceada-aydincik-kampi",
          },
        ],
      },
      {
        id: "planlama-ipuclari",
        heading: "İstanbul Çıkışlı Planlama İpuçları",
        paragraphs: [
          "Hafta sonu kampında erken kurulum (16:00 öncesi) gün ışığından faydalanmanızı sağlar. Market stoku İstanbul'dan alın; kırsal tesislerde seçenek sınırlı olabilir. Otoyol geçiş ücreti ve feribot maliyetini bütçeye dahil edin.",
          "İlk kez kamp yapacaksanız Kartepe gibi altyapılı bir alanla başlamak, deneyim kazandıktan sonra Assos veya Abant gibi daha uzak rotalara geçmek mantıklıdır.",
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
      {
        provinceSlug: "canakkale",
        districtSlug: "gokceada",
        slug: "gokceada-aydincik-kampi",
      },
    ],
    relatedGuides: [
      { label: "Karavanla Gidilebilecek Kamp Alanları", href: "/rehberler/karavanla-gidilebilecek-kamp-alanlari" },
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
    ],
    faq: [
      {
        question: "İstanbul'dan en yakın kamp alanı hangisi?",
        answer:
          "Kartepe orman kamp alanı otoyol mesafesi ve ulaşım süresi açısından en pratik seçenektir; yaklaşık 1,5–2 saat sürer.",
      },
      {
        question: "Hafta sonu kamp için ne zaman yola çıkmalıyım?",
        answer:
          "Cuma akşamı 16:00 öncesi veya Cumartesi sabah erken saatler trafikten kaçınmanın en iyi yoludur. Pazar dönüşte 15:00 öncesi hareket önerilir.",
      },
      {
        question: "İstanbul yakınında deniz kenarı kamp var mı?",
        answer:
          "Assos Kadırga ve Gökçeada Aydıncık rotaları deniz kenarı kamp sunar; feribot süresi dahil 4–6 saat ulaşım gerektirir.",
      },
      {
        question: "Aile ile İstanbul yakını kamp için hangi alan uygun?",
        answer:
          "Kartepe orman kampı ve Abant Gölü tesisli altyapısı, tuvalet imkânı ve güvenli ortamıyla aile kampı için uygundur.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "karavanla-gidilebilecek-kamp-alanlari": {
    image: PLACE.lakeSapanca,
    intro:
      "Karavan kampı çadır kampından farklı altyapı beklentisi taşır: 220V elektrik, temiz su girişi, gri su boşaltma ve geniş park alanı temel kriterlerdir. Türkiye'de karavan parkları Marmara (Sapanca-Kartepe), Ege (Assos, Urla) ve Akdeniz (Kaş, Olympos) halkalarında yoğunlaşır.",
    sections: [
      {
        id: "karavan-altyapisi",
        heading: "Karavan Parkında Olması Gerekenler",
        paragraphs: [
          "Tam donanımlı karavan parklarında elektrik kontuarı, su bağlantısı ve atık su boşaltma noktası standart beklentidir. Yaz sezonunda (temmuz-ağustos) elektrik kontenjanı sınırlı olabilir; solar panel veya jeneratör yedek planı uzun konaklamalarda zorunludur.",
          "Karavan boyutu 7 metreyi aştığında Gökçeada feribot araç kontenjanı, Datça dar virajları ve Kaş yarımadası park alanı sorunları ortaya çıkar. Rota planlamasını harita üzerinde araç boyutuyla birlikte doğrulayın.",
        ],
      },
      {
        id: "marmara-karavan",
        heading: "Marmara Karavan Rotaları",
        paragraphs: [
          "Kartepe yayla karavan kampı İstanbul-Ankara hattında tam altyapılı seçenektir. Sapanca gölü çevresindeki tesisler hafta sonu kaçamağı için uygundur. Kış aylarında boru donması riski vardır; tank ısıtıcı ve antifriz kontrol edilmelidir.",
        ],
        links: [
          {
            label: "Kartepe Yayla Karavan Kampı",
            href: "/kamp-alanlari/izmit/kartepe/kartepe-yayla-karavan-kampi",
          },
        ],
      },
      {
        id: "ege-akdeniz-karavan",
        heading: "Ege ve Akdeniz Karavan Seçenekleri",
        paragraphs: [
          "Assos ve Urla rotaları Ege karavan turizminin klasik duraklarıdır. Kaş yarımadasında park alanı sınırlıdır; erken varış ve tesisle ön görüşme önerilir. Olympos vadisinde dar yollar büyük karavanları zorlayabilir; orta boy araçlar daha esnektir.",
          "Datça yarımadası sakin koyları sınırlı altyapılı doğal parklar sunar; su ve elektrik stoku planlaması kritiktir.",
        ],
        links: [
          {
            label: "Assos Kadırga Kamp",
            href: "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp",
          },
          {
            label: "Kaş Peninsula Kamp",
            href: "/kamp-alanlari/antalya/kas/kas-peninsula-kamp",
          },
        ],
      },
      {
        id: "rota-planlama",
        heading: "Karavan Rota Planlama İpuçları",
        paragraphs: [
          "Park4Night ve yerel karavan parkı listeleri tesis yoğunluğunu önceden gösterir. Gökçeada ve Datça gibi ada-yarımada rotalarında yaz sezonu rezervasyonu haftalar öncesinden yapılmalıdır.",
          "Gece jeneratör yasağı olan tesislerde sessiz saatler (genellikle 23:00–07:00) komşu konforu için kesinlikle uygulanmalıdır. Uzun konaklamalarda (7+ gece) tesisle haftalık indirim görüşmesi yapılabilir.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "izmit",
        districtSlug: "kartepe",
        slug: "kartepe-yayla-karavan-kampi",
      },
      {
        provinceSlug: "canakkale",
        districtSlug: "assos",
        slug: "assos-kadirga-kamp",
      },
      {
        provinceSlug: "antalya",
        districtSlug: "kas",
        slug: "kas-peninsula-kamp",
      },
      {
        provinceSlug: "izmir",
        districtSlug: "urla",
        slug: "urla-sahil-kampi",
      },
    ],
    relatedGuides: [
      { label: "İstanbul'a Yakın Kamp Alanları", href: "/rehberler/istanbul-yakin-kamp-alanlari" },
      { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
    ],
    faq: [
      {
        question: "Karavan parkında elektrik şart mı?",
        answer:
          "Uzun konaklamalarda evet. Kısa duraklarda (1–2 gece) solar panel veya jeneratör yedek planı yeterli olabilir; yaz sezonunda tesislerde elektrik kontenjanı sınırlıdır.",
      },
      {
        question: "Türkiye'de karavanla en kolay rota hangisi?",
        answer:
          "İstanbul-Ankara çıkışlı Marmara halkası (Sapanca, Kartepe, Abant) otoyol altyapısı ve tam donanımlı parklar açısından en kolay rotadır.",
      },
      {
        question: "Karavan boyutu rota seçimini etkiler mi?",
        answer:
          "Evet. 7 metrenin üzeri araçlar Datça virajları, Gökçeada feribot kontenjanı ve Kaş park alanında kısıtlama yaratabilir.",
      },
      {
        question: "Kışın karavan kampı yapılabilir mi?",
        answer:
          "Abant ve Kartepe kış kampına uygundur ancak boru donması, tank ısıtıcı ve yedek yakıt planlaması zorunludur.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "deniz-kenari-kamp-rehberi": {
    image: PLACE.kaputas,
    intro:
      "Deniz kenarı kampı meltem, kum zemini, gelgit etkisi ve caretta caretta koruma kuralları gibi kıyıya özgü dinamikler gerektirir. Ege ve Akdeniz kıyılarında koy seçimi mevsime göre değişir; korunaklı koylar rüzgârlı açık kıyılara göre gece konforunu belirgin artırır.",
    sections: [
      {
        id: "koy-secimi",
        heading: "Koy Seçimi ve Meltem",
        paragraphs: [
          "Alaçatı ve Ildırı açık kıyılarda meltem güçlü eserken, Gökçeada Yıldızkoy ve Datça Hayıtbükü gibi korunaklı koylarda gece uykusu daha rahattır. Kum zeminde derin kazık, rüzgâr ipi ve kum torbası ağırlık sistemi meltem gecelerinde çadır stabilitesini korur.",
          "Kıyı çizgisine çok yakın kurulan çadırlar gece dalga sesiyle birlikte su birikintisi riski taşır; yüksek tabanlı mat ve hafif eğimli zemin tercih edilmelidir.",
        ],
      },
      {
        id: "ege-kiyilari",
        heading: "Ege Kıyısı Kamp Noktaları",
        paragraphs: [
          "Ayvalık Cunda Adası ve Sarımsaklı plajı Ege'nin en popüler deniz kenarı rotalarındandır. Dikili Bademli Koyu daha sakin bir alternatif sunar. Çeşme Ilıca ve Urla sahil kamp alanları rüzgâr sörfü rotasıyla entegre planlanabilir.",
        ],
        links: [
          {
            label: "Ayvalık Cunda Adası Kampı",
            href: "/kamp-alanlari/balikesir/ayvalik/ayvalik-cunda-adasi-kampi",
          },
          {
            label: "Dikili Bademli Koyu Kampı",
            href: "/kamp-alanlari/izmir/dikili/dikili-bademli-koyu-kampi",
          },
        ],
      },
      {
        id: "akdeniz-kiyilari",
        heading: "Akdeniz Kıyısı Kamp Noktaları",
        paragraphs: [
          "Kaş Kaputaş ve Kalkan Kalamar Koyu turkuaz su ve kayalık manzarasıyla öne çıkar. Olympos Adrasan hattı antik kent ve plaj kombinasyonu sunar. Haziran-temmuz'da Kaş-Üçağız batık şehir manzaralı koylar, ağustos sonunda Fethiye Kabak yamaçları kalabalıktan arınır.",
        ],
        links: [
          {
            label: "Kaş Kaputaş Koyu Kampı",
            href: "/kamp-alanlari/antalya/kas/kas-kaputas-koyu-kampi",
          },
          {
            label: "Olympos Adrasan Koyu Kampı",
            href: "/kamp-alanlari/antalya/olympos/olympos-adrasan-koyu-kampi",
          },
        ],
      },
      {
        id: "deniz-kenari-guvenlik",
        heading: "Deniz Kenarı Kamp Güvenliği",
        paragraphs: [
          "Caretta caretta yumurtlama alanlarında (Adrasan, Çıralı) gece ışık kısıtlaması uygulanır; kırmızı ışık ve sessizlik kurallarına uyum zorunludur. Deniz suyuyla temas sonrası tatlı su stoku kritiktir; birçok koyda musluk suyu dışında kaynak bulunmaz.",
          "Gün batımından sonra kıyı sıcaklığı hızla düşer; deniz kenarı kampında termal içlik ve rüzgâr kesici katman gece konforunu belirgin artırır.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "balikesir",
        districtSlug: "ayvalik",
        slug: "ayvalik-cunda-adasi-kampi",
      },
      {
        provinceSlug: "antalya",
        districtSlug: "kas",
        slug: "kas-kaputas-koyu-kampi",
      },
      {
        provinceSlug: "antalya",
        districtSlug: "olympos",
        slug: "olympos-adrasan-koyu-kampi",
      },
      {
        provinceSlug: "mugla",
        districtSlug: "fethiye",
        slug: "kabak-koyu-kamp",
      },
    ],
    relatedGuides: [
      { label: "En İyi Ücretsiz Kamp Alanları", href: "/rehberler/en-iyi-ucretsiz-kamp-alanlari" },
      { label: "Yaz Kampı vs Kış Kampı", href: "/rehberler/yaz-kampi-vs-kis-kampi" },
    ],
    faq: [
      {
        question: "Deniz kenarında çadır melteme dayanır mı?",
        answer:
          "3 mevsim çadır ve sağlam kazık-gerdirme sistemi şarttır. Korunaklı koy seçimi (Datça Hayıtbükü, Gökçeada) açık kıyılara göre çok daha konforludur.",
      },
      {
        question: "Deniz kenarı kampında su nereden temin edilir?",
        answer:
          "Tesisli alanlarda musluk suyu vardır. Doğal koylarda yeterli stok taşıyın; Datça Palamutbükü gibi noktalarda kaynak sınırlıdır.",
      },
      {
        question: "Caretta caretta alanlarında kamp kuralları neler?",
        answer:
          "Gece ışık kısıtlaması, sessizlik ve plastik atık bırakmama zorunludur. Adrasan ve Çıralı hattında kırmızı ışık kullanılmalıdır.",
      },
      {
        question: "En sakin deniz kenarı kamp koyu hangisi?",
        answer:
          "Datça Palamutbükü, Dikili Bademli ve Gökçeada Kuzu Koyu kalabalıktan uzak alternatifler sunar; ulaşım planlaması gerektirir.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },
};
