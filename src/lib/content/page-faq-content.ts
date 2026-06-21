import type { FaqItem } from "@/lib/types";
import {
  districtFaqOverrides,
  provinceFaqOverrides,
} from "@/lib/content/region-faq-content";

const categoryFaqOverrides: Record<string, FaqItem[]> = {
  "deniz-kenari": [
    {
      question: "Deniz kenarı kamp alanı seçerken meltem ve gelgit nelere dikkat ettirmeli?",
      answer:
        "Ege ve Akdeniz kıyılarında öğleden sonra güçlenen meltem çadır stabilitesini etkiler; rüzgâra dayanıklı çadır ve sağlam sabitleme şarttır. Gelgit olan koylarda su seviyesi gece değişebilir; kurulum noktasını gün ışığında seçin. Caretta caretta alanlarında yaz aylarında ışık kısıtlaması uygulanır.",
    },
    {
      question: "Deniz kenarında ücretsiz plaj kampı mümkün mü?",
      answer:
        "Kamuya açık plajlarda gece kalış çoğunlukla yasaktır veya sınırlıdır. Konaklama için tesis onaylı sahil alanları tercih edilmelidir. Rehberimizdeki deniz kenarı kategorisinde listelenen tesislerin kurallarını karşılaştırabilirsiniz.",
    },
    {
      question: "Deniz kenarı kampında güneş ve nem yönetimi nasıl yapılır?",
      answer:
        "Güneş koruma, bol su ve gölge tulumu temel ihtiyaçlardır. Nem çadır içinde yoğuşma yaratır; havalandırma ve su geçirmez zemin örtüsü kullanın. Deniz tuzu ekipmanı korozyona uğratabilir; kurulumdan sonra çadırı durulayın.",
    },
    {
      question: "Deniz kenarı kamp alanlarına ulaşım ve otopark nasıl planlanır?",
      answer:
        "Popüler koylar yaz sezonunda otopark sorunu yaşar; erken varış avantaj sağlar. Feribot gerektiren adalarda araç kontenjanı sınırlı olabilir. Rehberimizdeki ulaşım notları ve harita bağlantıları rota planlamasına yardımcı olur.",
    },
    {
      question: "Deniz kenarı kampında hangi mevsimde rezervasyon gerekir?",
      answer:
        "Temmuz-ağustos ve bayram dönemlerinde popüler kıyı tesislerinde erken rezervasyon önerilir. Mayıs-haziran ve eylül daha sakin ve ılıman alternatifler sunar.",
    },
    {
      question: "Deniz kenarı kampında çadır tipi nasıl seçilir?",
      answer:
        "3 mevsim çadır, sağlam gerdirme ve iyi havalandırma deniz kenarı için minimum gereksinimdir. Meltem gecelerinde kum torbası veya ağırlık sistemi stabilite sağlar.",
    },
  ],
  dag: [
    {
      question: "Dağ kampında rakım ve gece sıcaklığı planlamayı nasıl etkiler?",
      answer:
        "Rakım arttıkça gece sıcaklığı belirgin düşer; 1500 metre üzerinde yaz aylarında bile 5–10°C görülebilir. Katmanlı giyim ve dört mevsim uyku tulumu şarttır. Yüksek irtifada su kaynatma süresi uzar; yakıt stoğu planlayın.",
    },
    {
      question: "Dağ kampında rota ve acil durum planı nasıl hazırlanır?",
      answer:
        "Harita, pusula veya GPS ile rota çizin; varış ve dönüş planınızı birine bildirin. Telefon çekimi zayıf bölgelerde acil plan alternatif iletişim gerektirir. Yalnız kamp yerine grup veya bilinen rota tercih edin.",
    },
    {
      question: "Dağ kamp alanı seçerken arazi ve hava koşulları nelere dikkat ettirmeli?",
      answer:
        "Düz ve taşsız zemin, rüzgâr koruması ve su kaynağına yakınlık temel kriterlerdir. Ani yağmur sel riski vadilerde yüksektir; kurulum noktasını yükseltiden seçin. Yıldırım riskinde açık tepe ve izole ağaçlardan uzak durun.",
    },
    {
      question: "Dağ kampında ateş yakma kuralları neler?",
      answer:
        "Orman yangını döneminde açık ateş çoğu alanda yasaktır. Mevcut ateş çukurlarını kullanın ve tamamen söndürün. Gazlı ocak taşımak hem güvenli hem de yasal açıdan daha uygundur.",
    },
    {
      question: "Dağ kampında gece soğuğuna karşı minimum ekipman nedir?",
      answer:
        "Katmanlı giyim, uyku tulumu (gece min. -5°C altında konfor), yalıtımlı mat ve termal içlik temel settir. Rakım arttıkça ekipman gereksinimi yükselir.",
    },
    {
      question: "Dağ kamp alanı seçerken su kaynağı nasıl değerlendirilir?",
      answer:
        "Akarsu varsa kaynatma veya filtreleme planlayın; kaynak yoksa taşıma kapasitesi hesaplanmalıdır. Su kaynağına mesafe kurulum noktasını belirler.",
    },
  ],
  orman: [
    {
      question: "Orman kamp alanında yangın riski döneminde nelere dikkat edilmeli?",
      answer:
        "Yaz aylarında orman girişleri kısıtlanabilir ve açık ateş tamamen yasaklanabilir. Sigara, mangal ve kıvılcım çıkaran ekipman kullanımından kaçının. Orman Genel Müdürlüğü duyurularını gitmeden kontrol edin.",
    },
    {
      question: "Orman kampında yaban hayvanı ve böcek riski nasıl yönetilir?",
      answer:
        "Yiyecekleri çadır dışında ve kapalı saklayın; ayı ve domuz bölgelerinde asma torbalar kullanın. Kene ve sivrisinek için uzun kollu giysi ve repellent taşıyın. Gece hareket ederken el feneri kullanın.",
    },
    {
      question: "Orman içi kamp alanlarında su kaynağı ve hijyen nasıl sağlanır?",
      answer:
        "Akarsu suyunu kullanmadan önce kaynatın veya filtreleyin. Orman neminde çadır içi yoğuşma artar; havalandırmaya özen gösterin. Tuvalet ihtiyacını belirlenmiş alanlarda giderin; çevreye atık bırakmayın.",
    },
    {
      question: "Orman kamp alanlarına ulaşım ve araç parkı nasıl planlanır?",
      answer:
        "Orman yolları dar ve virajlı olabilir; gece sürüşünden kaçının. Belirlenmiş otopark alanlarını kullanın; yol kenarına park etmek yangın riskini artırır. Rehberimizdeki orman kategorisi tesislerinin ulaşım notlarını inceleyin.",
    },
    {
      question: "Orman kampında hangi ayda kamp yapmak daha uygundur?",
      answer:
        "İlkbahar ve sonbahar nem ve sıcaklık dengesi açısından idealdir. Yaz ortasında yangın yasağı ve kalabalık artabilir; güncel orman duyurularını takip edin.",
    },
    {
      question: "Orman kampında çadır kurulumu nereye yapılmalı?",
      answer:
        "Düz, taşsız zemin, yüksek dal riski olmayan ağaç mesafesi ve su birikintisi olmayan alan tercih edilmelidir. Vadi tabanları ani yağmurda risk taşır.",
    },
  ],
  kislik: [
    {
      question: "Kışlık kamp alanlarında donma riskine karşı hangi ekipmanlar şart?",
      answer:
        "Dört mevsim uyku tulumu, izolasyon matı, termal iç katman, kar botu ve eldiven temel ekipmandır. -10°C altında sıvı yakıt ocakları verim kaybeder; ocak ve yakıt stoğunu buna göre planlayın.",
    },
    {
      question: "Kar kampında çadır kurulumu ve kar yoğuşması nasıl yönetilir?",
      answer:
        "Kar yüzeyini düzleştirip zemin izolasyonunu çift katmanlayın. Çadır havalandırmasını açık tutarak iç yoğuşmayı azaltın. Kar fırtınasında çadır girişini rüzgâr yönünün tersine çevirin.",
    },
    {
      question: "Kışlık kamp alanlarına ulaşımda kar zinciri ve yol durumu nasıl takip edilir?",
      answer:
        "Dağ geçitleri kışın kapalı olabilir; karayolları ve meteoroloji duyurularını takip edin. Zincir ve kar lastiği bulundurmak zorunlu olabilir. Rezervasyon yapmadan önce tesisin kış sezonu açık olduğunu teyit edin.",
    },
    {
      question: "Kış kampında gün ışığı ve enerji ihtiyacı nasıl planlanır?",
      answer:
        "Kış günleri kısadır; kurulum ve aktiviteyi gün ışığına göre planlayın. Headlamp ve yedek pil şarttır. Güneş paneli verimi düşer; powerbank stoğu taşıyın.",
    },
    {
      question: "Kışlık kamp alanlarında kar yağışı kamp planını nasıl etkiler?",
      answer:
        "Yoğun kar yol kapanışına ve erişim gecikmesine yol açabilir; esnek tarih ve alternatif rota planlayın. Tesisin kış sezonu açık olduğunu önceden teyit edin.",
    },
    {
      question: "Kış kampında uyku sistemi nasıl seçilir?",
      answer:
        "Gece minimum sıcaklığının en az 5°C altında konfor dereceli tulum, R5+ mat ve termal iç katman birlikte kullanılmalıdır. Islak giysi hemen değiştirilmelidir.",
    },
  ],
  festival: [
    {
      question: "Festival kamp alanlarında bilet ve kamp alanı girişi nasıl çalışır?",
      answer:
        "Müzik festivallerinde kamp alanı bileti etkinlik biletinden ayrı satılabilir. Kontenjan sınırlıdır; erken satış döneminde almak avantaj sağlar. Giriş saatinde uzun kuyruklar olabilir; erken varış önerilir.",
    },
    {
      question: "Festival kampında gürültü, güvenlik ve değerli eşya yönetimi nasıl yapılır?",
      answer:
        "Gece gürültüsü yüksektir; kulak tıkacı taşıyın. Değerli eşyaları araçta kilitleyin veya festival kasalarını kullanın. Komşu çadırlarla alan sınırlarına saygı gösterin.",
    },
    {
      question: "Festival kamp alanında duş, tuvalet ve su imkânları ne beklenmeli?",
      answer:
        "Altyapı yoğun saatlerde yetersiz kalabilir; sabah erken duş avantaj sağlar. Su stoğu ve el dezenfektanı taşıyın. Çevre temizliği festival sonrası alan itibarı için kritiktir.",
    },
    {
      question: "Festival sonrası kamp alanından ayrılış ve atık yönetimi nasıl olmalı?",
      answer:
        "Leave no trace ilkesine uyun; tüm atıkları toplayın. Çadır ve zemin izolasyonunu kontrol ederek ayrılın. Ayrılış saatinde trafik yoğunluğu yaşanır; planınızı buna göre yapın.",
    },
    {
      question: "Festival kamp alanında hava koşullarına nasıl hazırlanılır?",
      answer:
        "Gece sıcaklığı ve ani yağmur festival alanlarında konforu düşürür; yağmurluk ve ekstra katman taşıyın. Çadır sabitlemesini kalabalık öncesi tamamlayın.",
    },
    {
      question: "Festival kampında ekipman güvenliği nasıl sağlanır?",
      answer:
        "Değerli eşyaları araçta kilitleyin veya tesis kasalarını kullanın. Gece hırsızlık riskine karşı çadır içinde görünür bırakmayın.",
    },
  ],
  karavan: [
    {
      question: "Karavan parkında elektrik, su ve atık su bağlantısı nasıl kontrol edilir?",
      answer:
        "Varışta elektrik voltajını, su basıncını ve gri/siyah su boşaltma noktasını teyit edin. Adaptör ve uzatma kablosu taşıyın. Atık su tankını düzenli boşaltmak hijyen ve koku kontrolü için şarttır.",
    },
    {
      question: "Karavan ile izinsiz park ve kamuya açık alanda kalış yasakları neler?",
      answer:
        "Yol kenarı, otopark ve izinsiz özel arazide gece kalış yasaktır. Karavan parkı veya izinli tesis dışında konaklama cezai yaptırıma tabi olabilir. Rehberimizdeki karavan kategorisi tesislerini tercih edin.",
    },
    {
      question: "Karavan kampında seviyeleme ve rüzgâr sabitlemesi neden önemli?",
      answer:
        "Düz olmayan zeminde buzdolabı ve su tankı verimsiz çalışır; seviyeleme blokları kullanın. Rüzgârlı kıyılarda stabilizer ve tekerlek kama ile sabitleme yapın.",
    },
    {
      question: "Karavan parkı rezervasyonu yoğun sezonda ne kadar önceden yapılmalı?",
      answer:
        "Temmuz–ağustos ve bayram dönemlerinde popüler parklar haftalar öncesinden dolabilir. Elektrikli kontenjan ayrı sınırlı olabilir. Rehberimizdeki karavan tesislerinin iletişim bilgilerinden önceden teyit alın.",
    },
    {
      question: "Karavan kampında kış hazırlığı neleri kapsar?",
      answer:
        "Boru donması, tank ısıtıcı, propan yedek stoku ve kar lastiği/zincir planlanmalıdır. Gece havalandırma nem yoğuşmasını azaltır.",
    },
    {
      question: "Karavan ile kısa süreli kamp için minimum altyapı nedir?",
      answer:
        "1–2 gecelik duraklarda su doldurma ve atık boşaltma noktası yeterli olabilir; elektrik için adaptör ve uzatma taşıyın. Tam park tercih edilmezse güç yedek planı şarttır.",
    },
  ],
  bungalov: [
    {
      question: "Bungalov kamp alanı ile çadır kampı arasındaki temel fark nedir?",
      answer:
        "Bungalov tesisler sabit konaklama birimi, banyo ve genelde elektrik sunar; çadır kurulumu gerekmez. Doğa deneyimini konforla birleştirmek isteyenler için uygundur. Fiyat ve rezervasyon koşulları tesisten tesise değişir.",
    },
    {
      question: "Bungalov rezervasyonunda minimum konaklama ve iptal koşulları nelere dikkat ettirmeli?",
      answer:
        "Yoğun sezonda minimum 2–3 gece şartı uygulanabilir. İptal politikası ve kapora koşullarını okuyun. Check-in saatinden önce varış imkânını ve geç giriş ücretini sorun.",
    },
    {
      question: "Bungalov kamp alanlarında mutfak, ısıtma ve soğutma imkânları ne beklenmeli?",
      answer:
        "Mini mutfak ve klima/barı petek donanımı tesise göre değişir. Dağ bungalovlarında gece ısıtma önemlidir; sahil bungalovlarında nem yönetimi gerekebilir. Rehberimizdeki tesis özelliklerini karşılaştırın.",
    },
    {
      question: "Bungalov tesisinde evcil hayvan ve çocuk politikası nasıl öğrenilir?",
      answer:
        "Evcil hayvan kabulü ve yaş sınırı tesis bazında değişir; rezervasyon öncesi yazılı teyit alın. Çocuklu aileler için güvenli alan ve yatak düzeni sorulmalıdır.",
    },
    {
      question: "Bungalov kamp alanı seçerken konum kriterleri neler?",
      answer:
        "Deniz, göl veya orman erişimi, ulaşım mesafesi ve gece sessizliği temel kriterlerdir. Altyapı (market, sağlık) yakınlığı aileler için önemlidir.",
    },
    {
      question: "Bungalov ve çadır kampı bütçe farkı nasıl değerlendirilir?",
      answer:
        "Bungalov genelde gecelik ücreti daha yüksektir ancak ekipman kiralama/alım maliyetini azaltır. Uzun konaklamada haftalık indirim sorulabilir.",
    },
  ],
};

const landingFaqOverrides: Record<string, FaqItem[]> = {
  "deniz-kenari-kamp-alanlari": [
    {
      question: "Deniz kenarı kamp landing sayfasındaki tesisler nasıl seçiliyor?",
      answer:
        "Listelenen tesisler veritabanımızda deniz kenarı kategorisinde kayıtlı gerçek kamp noktalarıdır; sayı güncellemelere göre değişebilir.",
    },
    {
      question: "Deniz kenarı kamp için hangi ekipmanlar şart?",
      answer:
        "3 mevsim çadır, gerdirme seti, güneş koruması, bol su ve gece serinliği için ince termal katman temel settir.",
    },
    {
      question: "Deniz kenarı kamp landing sayfası ile kategori sayfası arasındaki fark nedir?",
      answer:
        "İçerik aynı tesis havuzunu farklı rehber formatında sunabilir; canonical yönlendirme arama motoru tekrarını önler.",
    },
  ],
  "karavan-kamp-alanlari": [
    {
      question: "Karavan kamp alanları listesinde elektrik bilgisi nereden gelir?",
      answer:
        "Tesis kayıtlarındaki altyapı alanlarından; detay sayfasında amper ve bağlantı tipi belirtilir.",
    },
    {
      question: "Karavan boyutu rezervasyonu etkiler mi?",
      answer:
        "Evet; uzun veya geniş araçlar için tesisle önceden boyut paylaşımı yapılmalıdır.",
    },
    {
      question: "Karavan kampında günlük maliyet nasıl planlanır?",
      answer:
        "Tesis ücreti, elektrik, su, atık boşaltma ve yakıt kalemlerini ayrı bütçelendirin; uzun konaklamada indirim sorulabilir.",
    },
  ],
  "ucretsiz-kamp-alanlari": [
    {
      question: "Ücretsiz kamp landing sayfası tamamen ücretsiz mi garanti eder?",
      answer:
        "Hayır; düşük maliyetli veya sembolik ücretli tesisleri de içerebilir. Her tesis sayfasındaki ücret bilgisini kontrol edin.",
    },
    {
      question: "Ücretsiz kamp alanlarında izin gerekir mi?",
      answer:
        "Alan bazında değişir; orman, sahil ve özel arazi kuralları farklıdır. Tesis veya yerel yönetim duyurularını takip edin.",
    },
    {
      question: "Ücretsiz kamp için hangi mevsim daha uygundur?",
      answer:
        "Geçiş mevsimleri (mayıs-haziran, eylül) yangın yasağı ve kalabalık açısından genelde daha yönetilebilir.",
    },
  ],
};

export function getLandingFaqItems(
  slug: string,
  fallback: FaqItem[]
): FaqItem[] {
  const extra = landingFaqOverrides[slug];
  if (!extra) return fallback;
  const existing = new Set(fallback.map((f) => f.question));
  return [
    ...fallback,
    ...extra.filter((f) => !existing.has(f.question)),
  ];
}

export function getProvinceFaqItems(
  provinceSlug: string,
  provinceName: string,
  campsiteCount: number
): FaqItem[] {
  const override = provinceFaqOverrides[provinceSlug];
  if (override) {
    return override;
  }

  return [
    {
      question: `${provinceName}'da ücretsiz kamp yapılabilir mi?`,
      answer: `${provinceName} genelinde devlet ormanı, milli park ve belirlenmiş mesire alanlarında ücretsiz kamp mümkün olabilir; ancak alan bazında kurallar değişir. Yangın dönemlerinde yasaklar sıkılaşır. Gitmeden önce Orman Genel Müdürlüğü veya yerel belediye duyurularını kontrol edin.`,
    },
    {
      question: `${provinceName}'da en çok tercih edilen kamp bölgeleri hangileri?`,
      answer: `Rehberimizde ${provinceName} için ${campsiteCount > 0 ? `${campsiteCount} kamp noktası` : "ilçe bazlı rotalar"} listeleniyor. Deniz kenarı, orman veya yayla tercihinize göre ilçe sayfalarından detaylı listeye ulaşabilirsiniz.`,
    },
    {
      question: `${provinceName} kamp alanlarına nasıl ulaşılır?`,
      answer: `Ulaşım ilçeden ilçeye değişir. Özel araç en yaygın seçenektir; toplu taşıma sınırlı olabilir. Her kamp sayfasında ulaşım notları ve harita bağlantısı bulunur.`,
    },
    {
      question: `${provinceName}'da kamp için en uygun dönem hangisi?`,
      answer: `${provinceName} genelinde ilkbahar ve sonbahar çoğu bölgede daha ılıman ve sakindir. Yaz aylarında deniz kenarı tesislerde rezervasyon önerilir; kış kampı yüksek rakım bölgelerinde ekipman gerektirir.`,
    },
  ];
}

export function getDistrictFaqItems(
  districtKey: string,
  districtName: string,
  provinceName: string,
  campsiteCount: number
): FaqItem[] {
  const override = districtFaqOverrides[districtKey];
  if (override) {
    return override;
  }

  return [
    {
      question: `${districtName}'ta kamp yapmak için en uygun dönem hangisi?`,
      answer: `${districtName}, ${provinceName} sınırlarında deniz, orman veya yayla karakterine göre farklı sezonlar sunar. İlkbahar ve sonbahar genelde daha sakin ve ılımandır; yaz aylarında rezervasyon veya erken varış önerilir.`,
    },
    {
      question: `${districtName}'ta kaç kamp alanı var?`,
      answer:
        campsiteCount > 0
          ? `Şu an ${districtName} bölgesinde ${campsiteCount} kamp alanı listelenmektedir. Her tesisin özellikleri, fiyat bilgisi ve ulaşım detayları ilgili sayfada yer alır.`
          : `${districtName} için kamp alanı verilerimiz güncelleniyor. Bölge rehberi ve komşu ilçe önerileri sayfada mevcuttur.`,
    },
    {
      question: `${districtName}'ta karavan kampı mümkün mü?`,
      answer: `Karavan uygunluğu tesise göre değişir. ${districtName} sayfasındaki listelerde karavan parkı veya geniş alan sunan tesisleri filtreleyerek planlama yapabilirsiniz.`,
    },
    {
      question: `${districtName}'ta kamp alanlarına nasıl ulaşılır?`,
      answer: `${districtName}, ${provinceName} il sınırları içinde ilçe merkezi ve kırsal yollara bağlıdır. Özel araç en pratik seçenektir; toplu taşıma kıyı ve yayla noktalarında sınırlı olabilir.`,
    },
  ];
}

export function getCategoryFaqItems(
  categorySlug: string,
  categoryName: string,
  campsiteCount: number
): FaqItem[] {
  const override = categoryFaqOverrides[categorySlug];
  if (override) {
    return override;
  }

  return [
    {
      question: `Türkiye'de ${categoryName.toLowerCase()} kamp alanı seçerken nelere bakmalıyım?`,
      answer: `Mevsim koşulları, ulaşım, su/elektrik imkânı, güvenlik ve alan kuralları temel kriterlerdir. ${categoryName} kategorisinde ${campsiteCount > 0 ? `${campsiteCount} tesis` : "rehber ve bölge önerileri"} ile karşılaştırma yapabilirsiniz.`,
    },
    {
      question: `${categoryName} kampı için hangi ekipmanlar gerekli?`,
      answer: `Temel çadır veya karavan setine ek olarak kategoriye özel ekipman değişir. Deniz kenarında güneş koruma, dağ/ormanda katmanlı giyim ve navigasyon araçları önemlidir. Kamp ekipmanları rehberimizden detaylı listeye ulaşabilirsiniz.`,
    },
    {
      question: `${categoryName} kamp alanlarında rezervasyon şart mı?`,
      answer: `Özel tesislerde yoğun sezonda rezervasyon önerilir. Kamuya açık alanlarda genelde rezervasyon yoktur; erken gitmek avantaj sağlar.`,
    },
    {
      question: `${categoryName} kategorisinde hangi bölgeler öne çıkar?`,
      answer: `Türkiye genelinde ${categoryName.toLowerCase()} kamp alanları farklı coğrafyalara yayılır. Rehberimizdeki bölge ve il filtreleriyle size en yakın ve uygun tesisleri karşılaştırabilirsiniz.`,
    },
  ];
}
