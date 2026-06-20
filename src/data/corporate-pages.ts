import { DEFAULT_EDITOR, ORGANIZATION } from "@/data/organization";

export interface CorporateSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface CorporatePage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  updatedAt: string;
  intro: string;
  sections: CorporateSection[];
}

export const corporatePages: CorporatePage[] = [
  {
    slug: "hakkimizda",
    title: "Hakkımızda — Kamp Alanları Rehberi",
    h1: "Hakkımızda",
    metaDescription:
      "kampalanlari.co kimdir? Türkiye kamp alanları rehberinin misyonu, editoryal yaklaşımı ve içerik üretim süreci hakkında bilgi.",
    updatedAt: "2025-06-19",
    intro: `${ORGANIZATION.brandName}, Türkiye'de kamp yapmak isteyen gezginler için il, ilçe ve tesis bazında güvenilir bilgi sunan bağımsız bir dijital rehberdir. Amacımız; doğru lokasyon, ulaşım, sezon ve ekipman bilgisini tek adreste toplayarak kamp planlamasını kolaylaştırmaktır.`,
    sections: [
      {
        heading: "Misyonumuz",
        paragraphs: [
          "Kamp alanı seçimi çoğu zaman dağınık forum yazıları, güncellenmemiş listeler ve doğrulanmamış sosyal medya paylaşımları arasında kaybolur. Biz bu bilgi kirliliğini azaltmak için her tesis sayfasını yapılandırılmış veri, editoryal açıklama ve pratik planlama ipuçlarıyla sunuyoruz.",
          "İçeriklerimiz reklam baskısından bağımsız editoryal ilkelerle hazırlanır; tesis sıralaması kullanıcı puanı, konum uygunluğu ve altyapı bilgisine dayanır.",
        ],
      },
      {
        heading: "Ne Sunuyoruz?",
        paragraphs: [
          "Platformumuzda il ve ilçe rehberleri, kategori bazlı listeler, tematik landing sayfaları, ekipman rehberleri ve saha odaklı kamp rehberleri yer alır. Her kamp sayfasında ulaşım, sezon, özellikler ve yakın alternatifler gibi planlama için kritik bilgiler bulunur.",
        ],
        list: [
          "34+ doğrulanmış kamp tesisi kaydı",
          "İl, ilçe ve kategori bazlı keşif sayfaları",
          "10+ editoryal kamp rehberi",
          "Ekipman seçim ve güvenlik içerikleri",
        ],
      },
      {
        heading: "Editoryal Ekip",
        paragraphs: [
          `${DEFAULT_EDITOR.name}, ${DEFAULT_EDITOR.role} olarak rehber içeriklerinin doğruluğu, güncelliği ve okunabilirliğinden sorumludur. İçerikler saha araştırması, resmi kaynak kontrolü ve kullanıcı geri bildirimleriyle düzenli olarak gözden geçirilir.`,
          "Her rehber sayfasında yazar, yayın tarihi ve son güncelleme tarihi şeffaf biçimde gösterilir. Editöryal süreçlerimiz hakkında ayrıntılı bilgi için Editoryal Politika ve İçerik Üretim İlkeleri sayfalarını inceleyebilirsiniz.",
        ],
      },
      {
        heading: "Bağımsızlık ve Şeffaflık",
        paragraphs: [
          "kampalanlari.co bir bilgi rehberidir; doğrudan rezervasyon aracısı veya tesis işletmecisi değildir. Tesis bilgileri değişebilir; güncel fiyat, kontenjan ve kural bilgisi için her zaman tesisle doğrudan iletişim kurmanızı öneririz.",
          "Hata bildirimi, içerik düzeltme talebi ve iş birliği önerileri için İletişim sayfamızdan bize ulaşabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "editorial-politika",
    title: "Editoryal Politika — İçerik Standartları",
    h1: "Editoryal Politika",
    metaDescription:
      "kampalanlari.co editoryal politikası: içerik doğrulama, güncelleme, düzeltme ve bağımsızlık ilkeleri.",
    updatedAt: "2025-06-19",
    intro:
      "Bu sayfa, kampalanlari.co'da yayımlanan tüm içeriklerin hangi standartlara göre üretildiğini, güncellendiğini ve düzeltildiğini açıklar.",
    sections: [
      {
        heading: "Editoryal İlkeler",
        paragraphs: [
          "Tüm içerikler okuyucuya pratik değer sunmak amacıyla hazırlanır. Sensasyonel başlık, yanıltıcı iddia ve doğrulanmamış saha bilgisi yayımlamayız.",
          "Kamp tesis bilgileri mümkün olduğunca birincil kaynaklar (resmi web siteleri, tesis yönetimi, harita verileri) ve saha gözlemleriyle çapraz kontrol edilir.",
        ],
        list: [
          "Doğruluk ve güncellik önceliği",
          "Okuyucu odaklı, jargonu sadeleştiren dil",
          "Kaynak gösterimi ve şeffaf düzeltme",
          "Reklam ve sponsorlu içerik ayrımı",
        ],
      },
      {
        heading: "İçerik Türleri",
        paragraphs: [
          "Rehber makaleleri editoryal ekip tarafından yazılır ve periyodik olarak gözden geçirilir. Kamp tesis sayfaları yapılandırılmış veri alanları ve editoryal tamamlayıcı metinlerden oluşur. Kategori, il ve tematik sayfalar gerçek veritabanı kayıtlarına dayalı programatik içeriklerdir; veri yoksa sayfa üretilmez.",
        ],
      },
      {
        heading: "Güncelleme ve Düzeltme",
        paragraphs: [
          "Sezon değişimleri, ulaşım güncellemeleri ve tesis kapanışları gibi durumlarda ilgili sayfalar önceliklendirilerek güncellenir. Her rehber ve kamp sayfasında son güncelleme tarihi görünür.",
          "Okuyuculardan gelen düzeltme talepleri 5 iş günü içinde değerlendirilir. Doğrulanan hatalar gecikmeksizin düzeltilir; önemli değişiklikler sayfa altında güncelleme notu ile belirtilebilir.",
        ],
      },
      {
        heading: "Bağımsızlık",
        paragraphs: [
          "Tesis sahipleri veya tur operatörleri içerik sıralamasını satın alamaz. Affiliate bağlantılar kullanıldığında okuyucuya açıkça belirtilir. Editoryal kararlar yalnızca içerik kalitesi ve kullanıcı faydasına dayanır.",
        ],
      },
    ],
  },
  {
    slug: "icerik-uretim-ilkeleri",
    title: "İçerik Üretim İlkeleri — Metodoloji",
    h1: "İçerik Üretim İlkeleri",
    metaDescription:
      "Kamp rehberi içeriklerinin nasıl araştırıldığı, yazıldığı ve doğrulandığına dair metodoloji ve kalite standartları.",
    updatedAt: "2025-06-19",
    intro:
      "kampalanlari.co içerikleri; araştırma, yazım, doğrulama ve yayın sonrası izleme adımlarından geçen tekrarlanabilir bir süreçle üretilir.",
    sections: [
      {
        heading: "Araştırma Süreci",
        paragraphs: [
          "Her kamp tesisi için konum, kategori, ulaşım, altyapı ve sezon bilgileri yapılandırılmış veri modeline işlenir. Editoryal metinler bu veriyi tamamlayıcı nitelikte olup saha koşullarını ve planlama ipuçlarını açıklar.",
          "Rehber makalelerinde konu önceliklendirmesi arama niyeti analizi, mevsimsel ihtiyaç ve okuyucu geri bildirimlerine göre yapılır.",
        ],
      },
      {
        heading: "Yazım Standartları",
        paragraphs: [
          "İçerikler Türkçe dil bilgisi kurallarına uygun, sade ve eylem odaklı yazılır. Başlık hiyerarşisi (H1–H3) SEO ve erişilebilirlik standartlarına uygun tutulur.",
          "Minimum kelime eşikleri içerik türüne göre belirlenir; kısa ve yüzeysel sayfalar yayımlanmaz. Her rehberde SSS bölümü, iç linkler ve ilgili kamp örnekleri bulunur.",
        ],
        list: [
          "Rehber sayfaları: 900+ editoryal kelime hedefi",
          "Kamp sayfaları: yapılandırılmış alan + tamamlayıcı paragraflar",
          "Kategori/il sayfaları: veri destekli editorial tamamlama",
        ],
      },
      {
        heading: "Doğrulama ve Kalite Kontrol",
        paragraphs: [
          "Yayın öncesi her içerik teknik (link, schema, meta) ve editoryal (doğruluk, ton, tekrar) kontrolden geçer. Kamp koordinatları ve ulaşım tarifleri harita verileriyle karşılaştırılır.",
          "Build sürecinde TypeScript ve statik üretim kontrolleri içerik altyapısının tutarlı kalmasını sağlar.",
        ],
      },
      {
        heading: "Yayın Sonrası İzleme",
        paragraphs: [
          "Mevsimsel trafik, arama performansı ve okuyucu geri bildirimleri içerik güncelleme önceliğini belirler. Güncel olmayan bilgi tespit edildiğinde ilgili sayfa revize edilir ve güncelleme tarihi yenilenir.",
        ],
      },
    ],
  },
  {
    slug: "iletisim",
    title: "İletişim — Kamp Alanları Rehberi",
    h1: "İletişim",
    metaDescription:
      "kampalanlari.co ile iletişime geçin. İçerik düzeltme, iş birliği ve genel sorular için iletişim bilgileri.",
    updatedAt: "2025-06-19",
    intro:
      "Sorularınız, düzeltme önerileriniz veya iş birliği teklifleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.",
    sections: [
      {
        heading: "E-posta",
        paragraphs: [
          `Genel sorular ve içerik bildirimleri için: ${ORGANIZATION.email}`,
          "E-posta mesajlarınızı 5 iş günü içinde yanıtlamaya çalışıyoruz. Acil saha güvenliği konularında (sel, yangın, tesis kapanışı) lütfen konu satırına \"ACİL\" ekleyin.",
        ],
      },
      {
        heading: "Hangi Konularda Yazabilirsiniz?",
        paragraphs: ["Aşağıdaki konularda geri bildiriminizi memnuniyetle karşılıyoruz:"],
        list: [
          "Yanlış veya güncel olmayan tesis bilgisi bildirimi",
          "Yeni kamp alanı önerisi (doğrulanabilir kaynakla)",
          "Rehber içeriği düzeltme talebi",
          "Telif ve içerik kullanım soruları",
          "Medya ve iş birliği teklifleri",
        ],
      },
      {
        heading: "Yanıt Süresi",
        paragraphs: [
          "Standart talepler 3–5 iş günü içinde yanıtlanır. Yoğun sezon dönemlerinde (mayıs–eylül) yanıt süresi uzayabilir; bu dönemde öncelik güvenlik ve doğruluk bildirimlerine verilir.",
        ],
      },
      {
        heading: "Rezervasyon ve Tesis İşletmeciliği",
        paragraphs: [
          "kampalanlari.co rezervasyon platformu değildir. Tesis rezervasyonu, fiyat ve kontenjan sorularınız için lütfen doğrudan ilgili kamp tesisinin resmi iletişim kanallarını kullanın.",
        ],
      },
    ],
  },
  {
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası",
    h1: "Gizlilik Politikası",
    metaDescription:
      "kampalanlari.co gizlilik politikası: kişisel verilerin toplanması, kullanımı ve korunmasına ilişkin bilgiler.",
    updatedAt: "2025-06-19",
    intro:
      "Bu gizlilik politikası, kampalanlari.co web sitesini ziyaret ettiğinizde kişisel verilerinizin nasıl işlendiğini açıklar. Son güncelleme: 19 Haziran 2025.",
    sections: [
      {
        heading: "Veri Sorumlusu",
        paragraphs: [
          `${ORGANIZATION.brandName} (${ORGANIZATION.url}) kişisel verilerinizin veri sorumlusudur. Sorularınız için ${ORGANIZATION.email} adresine yazabilirsiniz.`,
        ],
      },
      {
        heading: "Toplanan Veriler",
        paragraphs: [
          "Siteyi ziyaret ettiğinizde teknik olarak IP adresi, tarayıcı türü, cihaz bilgisi, ziyaret edilen sayfalar ve yönlendirme kaynağı gibi standart sunucu günlükleri otomatik olarak kaydedilebilir.",
          "İletişim formu veya e-posta yoluyla paylaştığınız ad, e-posta adresi ve mesaj içeriği yalnızca talebinizi yanıtlamak amacıyla işlenir.",
        ],
      },
      {
        heading: "Verilerin Kullanım Amaçları",
        paragraphs: ["Toplanan veriler aşağıdaki amaçlarla kullanılır:"],
        list: [
          "Site güvenliği ve kötüye kullanımın önlenmesi",
          "Site performansının ve içerik kalitesinin iyileştirilmesi",
          "İletişim taleplerinin yanıtlanması",
          "Yasal yükümlülüklerin yerine getirilmesi",
        ],
      },
      {
        heading: "Çerezler",
        paragraphs: [
          "Site, deneyimi iyileştirmek için çerezler kullanabilir. Ayrıntılı bilgi için Çerez Politikası sayfamızı inceleyin.",
        ],
      },
      {
        heading: "Veri Saklama ve Haklarınız",
        paragraphs: [
          "Kişisel veriler yalnızca gerekli süre boyunca saklanır. KVKK kapsamında erişim, düzeltme, silme ve itiraz haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    h1: "Çerez Politikası",
    metaDescription:
      "kampalanlari.co çerez politikası: hangi çerezlerin kullanıldığı ve tercihlerinizi nasıl yönetebileceğiniz.",
    updatedAt: "2025-06-19",
    intro:
      "Bu çerez politikası, kampalanlari.co sitesinde kullanılan çerez türlerini ve bunları nasıl kontrol edebileceğinizi açıklar.",
    sections: [
      {
        heading: "Çerez Nedir?",
        paragraphs: [
          "Çerezler, web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Site işlevselliği, tercih hatırlama ve kullanım analizi için kullanılabilir.",
        ],
      },
      {
        heading: "Kullandığımız Çerez Türleri",
        paragraphs: ["Sitemizde aşağıdaki çerez kategorileri kullanılabilir:"],
        list: [
          "Zorunlu çerezler: site güvenliği ve temel işlevler için gerekli",
          "Analitik çerezler: ziyaret istatistikleri ve sayfa performansı (anonim)",
          "Tercih çerezleri: dil ve görüntüleme ayarlarının hatırlanması",
        ],
      },
      {
        heading: "Üçüncü Taraf Çerezleri",
        paragraphs: [
          "Harici analitik veya reklam sağlayıcıları kendi çerezlerini yerleştirebilir. Bu çerezler ilgili sağlayıcının gizlilik politikasına tabidir.",
        ],
      },
      {
        heading: "Çerez Tercihlerinizi Yönetme",
        paragraphs: [
          "Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması sitenin bazı işlevlerini etkileyebilir.",
        ],
      },
    ],
  },
  {
    slug: "kullanim-sartlari",
    title: "Kullanım Şartları",
    h1: "Kullanım Şartları",
    metaDescription:
      "kampalanlari.co kullanım şartları: site kullanım koşulları, sorumluluk sınırları ve fikri mülkiyet hakları.",
    updatedAt: "2025-06-19",
    intro:
      "kampalanlari.co sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyun.",
    sections: [
      {
        heading: "Hizmetin Kapsamı",
        paragraphs: [
          "Site, kamp alanları hakkında bilgilendirme amaçlı bir rehberdir. Rezervasyon, ödeme veya tesis işletmeciliği hizmeti sunmaz. Tesis bilgileri değişebilir; nihai doğrulama sorumluluğu kullanıcıya aittir.",
        ],
      },
      {
        heading: "Fikri Mülkiyet",
        paragraphs: [
          "Sitedeki metin, görsel, logo ve yazılım unsurları kampalanlari.co'ya aittir veya lisanslı olarak kullanılmaktadır. İzinsiz kopyalama, çoğaltma veya ticari kullanım yasaktır. Alıntı yapılması durumunda kaynak gösterilmesi zorunludur.",
        ],
      },
      {
        heading: "Sorumluluk Sınırı",
        paragraphs: [
          "Doğa ve kamp aktiviteleri risk içerir. Sitedeki bilgiler genel rehber niteliğindedir; hava koşulları, tesis kuralları ve saha güvenliği kullanıcının sorumluluğundadır. kampalanlari.co doğrudan veya dolaylı zararlardan sorumlu tutulamaz.",
        ],
      },
      {
        heading: "Kullanıcı Yükümlülükleri",
        paragraphs: [
          "Siteyi yasalara uygun şekilde kullanmayı, otomatik veri kazıma (scraping) ile site altyapısına zarar vermemeyi ve yanıltıcı bilgi yayımlamamayı kabul edersiniz.",
        ],
      },
      {
        heading: "Değişiklikler",
        paragraphs: [
          "Bu kullanım şartları önceden haber verilmeksizin güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır; siteyi kullanmaya devam etmeniz güncel şartları kabul ettiğiniz anlamına gelir.",
        ],
      },
    ],
  },
];

export function getCorporatePage(slug: string): CorporatePage | undefined {
  return corporatePages.find((page) => page.slug === slug);
}

export function getCorporatePagePath(slug: string): string {
  return `/${slug}`;
}

export function getAllCorporatePages(): CorporatePage[] {
  return corporatePages;
}
