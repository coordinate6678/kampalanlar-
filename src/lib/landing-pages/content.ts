import { PLACE } from "@/data/media/place-images";
import type { FaqItem } from "@/lib/types";

export interface LandingPageContent {
  image: string;
  intro: string;
  paragraphs: string[];
  tips: string[];
  faq: FaqItem[];
}

export const landingPageContent: Record<string, LandingPageContent> = {
  "deniz-kenari-kamp-alanlari": {
    image: PLACE.kaputas,
    intro:
      "Türkiye'de deniz kenarı kamp alanı arayanlar için Ege ve Akdeniz kıyısı en zengin seçenekleri sunar. Aşağıdaki liste yalnızca veritabanımızda deniz kenarı kategorisinde kayıtlı, gerçek tesis bilgisi bulunan kamp noktalarını içerir.",
    paragraphs: [
      "Deniz kenarı kampında meltem yönü konforu belirler: Assos Kadırga, Ayvalık Cunda Adası ve Çeşme Ilıca gibi açık kıyılarda rüzgâr güçlü eserken, Datça Palamutbükü ve Gökçeada Kuzu Koyu gibi korunaklı koylarda gece uykusu daha rahattır. Kum zeminde geniş plastik kazık ve kum torbası ağırlık sistemi çadır stabilitesini korur.",
      "Ege kıyısında Ayvalık Sarımsaklı, Edremit Altınoluk Sahil, Dikili Bademli Koyu ve Urla Sahil kamp alanları hem deniz manzarası hem tesis altyapısı sunar. Seferihisar Ürkmez Koyu ailelerin tercih ettiği geniş parselleriyle öne çıkar; Sığacık Koyu ise Cittaslow beldesinin sakin temposunu kamp deneyimine yansıtır.",
      "Akdeniz hattında Olympos Adrasan Koyu antik kent kalıntıları ve 2 km kumsal ile listenin en kapsamlı sahil tesislerinden biridir. Kaş Kaputaş Koyu turkuaz su manzarasıyla öne çıkar; Kabak Koyu ve Fethiye Katrancı Koyu Fethiye-Muğla rotasının klasik duraklarıdır. Marmaris Çiftlik Koyu ve Bozburun Yarımadası daha sakin alternatifler sunar.",
      "Caretta caretta yumurtlama alanlarında (Adrasan, Çıralı hattı) gece ışık kısıtlaması uygulanır; kırmızı kafa lambası ve sessizlik kurallarına uyum zorunludur. Deniz kenarı kampında kişi başı günde minimum 3 litre su stoku planlanmalı; birçok koyda musluk suyu sınırlı olabilir.",
      "Aşağıdaki kartlarda her tesisin il, ilçe, ulaşım bilgisi ve kullanıcı puanı yer alır. Rezervasyon yoğun dönemlerde (temmuz-ağustos) haftalar öncesinden yapılmalıdır; mayıs-haziran ve eylül hem kalabalık hem fiyat açısından avantajlıdır.",
      "Deniz kenarı kamp planlamasında ulaşım katmanı rotayı belirler. Çeşme, Urla ve Ayvalık gibi popüler duraklarda otoyol ve feribot birleşimi hafta sonu trafiğini etkiler; Cuma akşamı erken çıkış veya Cumartesi sabah 07:00 öncesi hareket park alanı ve tesis kontenjanı açısından belirleyicidir. Gökçeada ve Datça gibi yarımada rotalarında araç yakıt stoku ve market alışverişi tesis yakınında sınırlı olabileceğinden İstanbul veya İzmir çıkışında tamamlanmalıdır.",
      "Sahil kampında zemin seçimi konforu doğrudan etkiler. Kum zeminde geniş plastik kazık ve kum torbası ağırlık sistemi çadır stabilitesini korur; taşlı kıyılarda (Assos, Kaş) zemin pedi ve ekstra kazık seti taşınmalıdır. Deniz kenarında gece nem oranı yükselir; nefes alan çadır kumaşı yoğuşmayı azaltır, iç çadır havalandırması açık tutulmalıdır.",
      "Güvenlik açısından deniz kenarı kampında dalga profili, akıntı yönü ve rüzgâr hızı günlük kontrol edilmelidir. Çocuklu ailelerde sığ ve korunaklı koy tercih edilmeli; Seferihisar Ürkmez, Gökçeada Kuzu Koyu ve Datça Palamutbükü bu profilde öne çıkar. Caretta caretta alanlarında gece ışık kısıtlaması ve plastik atık yasağı sadece kurallar değil, doğrudan koruma önlemidir.",
      "Deniz kenarı kamp ekipmanında minimum set şunları içerir: 3 mevsim çadır, en az 6 gerdirme noktası, UV korumalı güneş kremi, geniş kenarlı şapka, kişi başı günde 3 litre su, deniz ayakkabısı ve gece sıcaklığı için termal içlik. Meltem gecelerinde rüzgâr yönü değişebilir; çadır girişi rüzgâra sırt verecek şekilde konumlandırılmalıdır.",
      "Bu sayfadaki 17 deniz kenarı tesisinin tamamı veritabanımızda deniz kenarı kategorisinde kayıtlıdır. Her tesis sayfasında harita koordinatları, ulaşım tarifi, yakın market ve sağlık noktası bilgisi yer alır. İl bazında filtrelemek için Ege ve Akdeniz bölge sayfalarına veya il rehberlerine geçiş yapabilirsiniz.",
      "Deniz kenarı kampında atık yönetimi çevreye duyarlı kampın temelidir. Plastik atık sahil ekosistemine zarar verir; tüm atıkları tesisin belirlediği noktaya taşıyın ve geri dönüşüm ayrımına uyun. Caretta caretta alanlarında plastik torba ve ışık kirliliği yumurtlama başarısını doğrudan etkiler. Deniz kenarı kamp deneyimini sürdürülebilir kılmak, gelecek sezonlarda aynı koyların erişilebilir kalmasının ön koşuludur.",
    ],
    tips: [
      "3 mevsim çadır ve en az 6 gerdirme noktası deniz kenarı için minimum gereksinimdir.",
      "Korunaklı koy seçimi meltem gecelerinde uyku kalitesini belirgin artırır.",
      "Gün batımından sonra kıyı sıcaklığı hızla düşer; termal içlik bulundurun.",
    ],
    faq: [
      {
        question: "Deniz kenarında kaç kamp alanı listeleniyor?",
        answer:
          "Bu sayfada yalnızca deniz kenarı kategorisinde kayıtlı gerçek tesisler listelenir; sayı kamp veritabanı güncellemelerine göre değişebilir.",
      },
      {
        question: "Deniz kenarı kamp için hangi mevsim ideal?",
        answer:
          "Mayıs-haziran ve eylül-ekim hem sıcaklık hem kalabalık açısından idealdir. Temmuz-ağustos'ta popüler koylarda erken rezervasyon şarttır.",
      },
      {
        question: "Melteme dayanıklı çadır gerekli mi?",
        answer:
          "Evet. Assos, Ayvalık ve Kaş rotalarında sağlam kazık-gerdirme sistemi ve 3 mevsim çadır zorunludur.",
      },
      {
        question: "Caretta caretta alanlarında neye dikkat edilmeli?",
        answer:
          "Adrasan ve Çıralı hattında gece ışık kısıtlaması vardır; kırmızı ışık kullanın ve plastik atık bırakmayın.",
      },
    ],
  },

  "karavan-kamp-alanlari": {
    image: PLACE.lakeSapanca,
    intro:
      "Karavan kamp alanı seçerken elektrik kontuarı, temiz su girişi ve gri su boşaltma noktası temel kriterlerdir. Bu sayfa, veritabanımızda karavan altyapısı belgelenmiş gerçek kamp tesislerini listeler.",
    paragraphs: [
      "Tam donanımlı karavan parkı arayanlar için Kartepe Yayla Karavan Kampı Marmara'nın referans tesisidir; 220V elektrik, su bağlantısı ve atık su boşaltma imkânı sunar. Kartepe Orman Kampı da karavan parselleri kabul eder; orman gölgesi yaz sıcaklarında serinlik sağlar.",
      "Ege rotasında Assos Kadırga, Çeşme Ilıca Sahil ve Edremit Altınoluk Sahil kamp alanları karavan bağlantısı olan tesisler arasındadır. Marmaris Çiftlik Koyu geniş park alanıyla büyük karavanlar için uygundur. Abant Gölü kamp alanı kış karavan rotasında boru donması riski taşır; tank ısıtıcı planlanmalıdır.",
      "Alaçatı Doğa Kampı karavan ve çadır kampını bir arada sunar; meltem gecelerinde sabitleme blokları kullanılmalıdır. Karavan boyutu 7 metreyi aştığında dar köy yollarında (Datça, Gökçeada feribotu) erişim kısıtlamaları ortaya çıkabilir.",
      "Yaz sezonunda (temmuz-ağustos) elektrik kontenjanı tesislerde sınırlıdır; solar panel veya jeneratör yedek planı uzun konaklamalarda zorunludur. Gece jeneratör yasağı olan tesislerde sessiz saatler (genellikle 23:00–07:00) komşu konforu için uygulanmalıdır.",
      "Aşağıdaki listede her tesisin karavan altyapısı, konum ve ulaşım detaylarına ulaşabilirsiniz. Uzun konaklamalarda (7+ gece) tesisle haftalık indirim görüşmesi yapılabilir.",
      "Karavan kampında elektrik tüketimi planlaması uzun konaklamalarda kritik hale gelir. Klima, buzdolabı ve su ısıtıcısı aynı anda çalıştığında 16 amper kontuar yetersiz kalabilir; tesis girişinde amper limitini sorun ve güç dağıtımını buna göre ayarlayın. Solar panel yedek planı, özellikle yaz ortasında elektrik kontenjanının dolduğu tesislerde (Kartepe, Çeşme) konforu korur.",
      "Gri su ve siyah su boşaltma noktaları rotada düzenli duraklar gerektirir. Tam altyapılı parklarda (Kartepe Yayla Karavan Kampı) boşaltma ücretsiz veya düşük ücretlidir; kırsal duraklarda taşınabilir gri su tankı ve uygun boşaltma noktası araştırması yapılmalıdır. Çevreye saygı açısından dere yatağı ve göl kenarına boşaltma kesinlikle yasaktır.",
      "Karavan boyutu rota erişimini belirler. 7 metrenin üzeri araçlar Datça virajları, Gökçeada feribot rampası ve Alaçatı dar sokaklarında kısıtlama yaratabilir. Rota planlamasını harita üzerinde araç boyutu ve tırmanış eğimiyle birlikte doğrulayın; dar virajlı rotalarda karavan park sensörü ve yardımcı sürücü büyük fark yaratır.",
      "Mevsimsel farklılıklar karavan kampında ekipman listesini değiştirir. Yaz sezonunda güneş koruması, havalandırma ve meltem sabitleme blokları önceliklidir; kış rotasında (Abant, Kartepe) boru donması riski, tank ısıtıcı, propan yedek stoku ve kar lastiği zorunlu hale gelir. Her mevsimde yangın söndürücü ve karbon monoksit dedektörü bulundurulmalıdır.",
      "Bu sayfada listelenen 8 karavan uyumlu tesis, veritabanımızda karavan altyapısı veya karavan kabulü açıkça belgelenmiş gerçek kamp noktalarıdır. Detay sayfalarında elektrik amperi, su bağlantı tipi ve parsel boyutu bilgisi yer alır; rezervasyon öncesi tesisle telefon veya mesajla karavan boyutunuzu paylaşmanız önerilir.",
      "Karavan topluluğunda komşu saygısı uzun konaklamalarda konforu belirler. Gece jeneratör yasağı olan tesislerde sessiz saatler (genellikle 23:00–07:00) uygulanmalı; dış aydınlatma komşu parselleri rahatsız etmemelidir. Karavan parkında çocuklu aileler ve evcil hayvan sahipleri için tesis kurallarını önceden okuyun; bazı tesisler evcil hayvan kabul etmez veya ek ücret uygular.",
      "Türkiye karavan kamp rotasında Marmara (Kartepe), Ege (Assos, Çeşme, Edremit) ve kış rotası (Abant) üç ana ekseni oluşturur. Her eksende en az bir tam altyapılı park durağı planlamak uzun yolculuklarda su, elektrik ve atık yönetimi stresini ortadan kaldırır. Karavan kampı deneyimini ilk kez deneyenler için Kartepe Yayla Karavan Kampı en güvenli başlangıç noktasıdır.",
    ],
    tips: [
      "Rota planlamasını harita üzerinde araç boyutuyla birlikte doğrulayın.",
      "Her 3–4 günde bir tam altyapılı park durağı planlayın.",
      "Kış karavan kampında boru donması ve yedek propan stoku kritiktir.",
    ],
    faq: [
      {
        question: "Karavan parkında elektrik şart mı?",
        answer:
          "Uzun konaklamalarda evet. Kısa duraklarda solar panel veya jeneratör yedek planı yeterli olabilir.",
      },
      {
        question: "En tam donanımlı karavan kamp alanı hangisi?",
        answer:
          "Kartepe Yayla Karavan Kampı elektrik, su ve atık su altyapısı açısından Marmara'nın en kapsamlı tesisidir.",
      },
      {
        question: "Karavan boyutu rota seçimini etkiler mi?",
        answer:
          "Evet. 7 metrenin üzeri araçlar dar virajlı rotalarda ve feribot kontenjanında kısıtlama yaratabilir.",
      },
      {
        question: "Kışın karavan kampı yapılabilir mi?",
        answer:
          "Abant Gölü ve Kartepe kış rotasına uygundur; boru donması ve tank ısıtıcı planlaması zorunludur.",
      },
    ],
  },

  "aile-dostu-kamp-alanlari": {
    image: PLACE.sarimsakli,
    intro:
      "Aile dostu kamp alanı; güvenli plaj, tuvalet-duş altyapısı, geniş çadır parselleri ve çocuklar için uygun ortam sunan tesis anlamına gelir. Bu liste, veritabanımızda aile uygunluğu açıkça belgelenmiş gerçek kamp noktalarını içerir.",
    paragraphs: [
      "Kartepe Orman Kampı Maşukiye'de ailelerin hafta sonu kaçamağı için en çok tercih edilen Marmara tesislerinden biridir; elektrik, ortak duş-tuvalet ve mangal noktaları mevcuttur. Abant Gölü kamp alanı göl çevresi yürüyüş parkurları ve fotoğraf noktalarıyla aile rotalarına uygundur.",
      "Gökçeada Aydıncık Kampı geniş kumsal ve rüzgâr sörfü okuluyla aktif aileler için idealdir; Kuzu Koyu ise dalgasız sularıyla küçük çocuklu ailelerin tercih ettiği sakin bir koydur. Çeşme Ilıca Sahil ve Seferihisar Ürkmez Koyu çocuk oyun alanı ve güvenli yüzme bölgesi sunar.",
      "Edremit Altınoluk Sahil Kampı kumlu plaja sıfır mesafede konumlanır; çocuk oyun alanı ve market erişimi ailelerin tercih sebeplerindendir. Ayvalık Sarımsaklı plajı geniş kum alanıyla aile piknikleri için uygundur. Sığacık Koyu mandalina bahçeleri arasında sakin bir aile ortamı sunar.",
      "Fethiye Katrancı Koyu çam ormanı içinde aile kamp alanı olarak tanımlanır; Olympos Adrasan Koyu 2 km kumsal ve çam ormanı arasında geniş aile parselleri sunar. Kazdağı Edremit Kamp alanı orman gölgesi ve deniz rotası kombinasyonuyla aile doğa turlarına uygundur.",
      "Aile kampında 1 gece 2 gün planı ideal başlangıç süresidir; altyapılı tesisle başlamak ilk deneyimde stresi azaltır. Aşağıdaki listede her tesisin özellikleri, puanı ve ulaşım bilgisi yer alır.",
      "Aile dostu kamp alanı seçerken güvenlik katmanını üç başlıkta değerlendirin: su güvenliği (sığ plaj, cankurtaran sezonu), altyapı güvenliği (tuvalet-duş, aydınlatma, elektrik) ve çevre güvenliği (trafikten uzak parsel, gece sessizlik kuralları). Kartepe Orman Kampı, Edremit Altınoluk Sahil ve Seferihisar Ürkmez Koyu bu üçlüyü dengeli sunar.",
      "Çocuklu ailelerde ekipman listesi yetişkin kampından farklıdır. Ek olarak: çocuk uyku tulumu, gece lambası, bol atıştırmalık, güneş kremi (SPF 50+), böcek kovucu, plaj oyuncakları ve acil iletişim planı (tesis yönetimi numarası) bulundurulmalıdır. İlk aile kampında çadır kurulumunu evde bir kez denemek sahada stresi ciddi ölçüde azaltır.",
      "Aile kampında aktivite planı çocukların sabrını belirler. Gün içinde kısa yürüyüş (Abant göl çevresi, Sığacık mandalina bahçeleri), plaj oyunu (Gökçeada Aydıncık, Sarımsaklı) ve akşam mangal ritüeli dengeli bir program oluşturur. Elektronik cihaz kullanımını sınırlamak doğa deneyimini zenginleştirir; gece yıldız gözlemi Olympos ve Kazdağı rotalarında aileler arasında popüler aktivitedir.",
      "Rezervasyon ve bütçe planlamasında aile parseli boyutu önemlidir. Geniş parselli tesislerde (Kartepe, Olympos Adrasan) çocukların güvenli hareket alanı genişler; komşu çadırlarla mesafe konforu artırır. Hafta sonu kaçamağında Cuma akşamı erken varış çocukların uyku düzenini korur; Pazar dönüşte erken hareket trafik stresini azaltır.",
      "Bu sayfada 13 aile dostu tesis listelenmektedir; tamamı veritabanımızda aile uygunluğu, güvenli plaj veya geniş parsel gibi kriterlerle belgelenmiştir. Her tesis kartından detay sayfasına geçerek harita, ulaşım ve yakın market bilgisine ulaşabilirsiniz.",
      "Aile kampında acil durum planı hazırlamak sorumlu kampın parçasıdır. En yakın sağlık kuruluşu, tesis yönetimi iletişim numarası ve acil çıkış rotası konaklama öncesi not edilmelidir. Çocukların tesis sınırları içinde serbest hareket ettiği geniş parselli alanlarda (Kartepe, Olympos Adrasan) gece reflektörlü yelek veya kafa lambası güvenlik açısından faydalıdır.",
      "Türkiye'de aile kamp kültürü son yıllarda hızla büyümektedir; altyapılı tesislerde başlamak ilk deneyimde olumsuz izlenim riskini azaltır. Bu sayfadaki 13 tesis arasında hem Marmara (Kartepe, Abant) hem Ege (Çeşme, Ayvalık, Seferihisar) hem de Gökçeada rotaları temsil edilmektedir; bölge tercihinize göre filtreleme yapabilirsiniz.",
    ],
    tips: [
      "İlk aile kampı için Kartepe veya Altınoluk gibi altyapılı tesisleri tercih edin.",
      "Çocuklu ailelerde 1 gece 2 gün planı ideal başlangıç süresidir.",
      "Market stokunu tesis yakınındaki seçeneklere göre planlayın.",
    ],
    faq: [
      {
        question: "Aile dostu kamp alanı nasıl seçilir?",
        answer:
          "Güvenli plaj, tuvalet-duş, geniş parsel ve market erişimi temel kriterlerdir. Bu sayfadaki tesisler bu özellikler veritabanında belgelenmiştir.",
      },
      {
        question: "Küçük çocuklu aileler için en sakin koy hangisi?",
        answer:
          "Gökçeada Kuzu Koyu dalgasız sularıyla küçük çocuklu aileler arasında popülerdir.",
      },
      {
        question: "Aile kampında minimum ekipman nedir?",
        answer:
          "Çadır, mat, tulum, ocak, su, kafa lambası, ilk yardım ve bol atıştırmalık temel settir.",
      },
      {
        question: "İstanbul'a yakın aile kamp alanı var mı?",
        answer:
          "Kartepe Orman Kampı otoyol mesafesi ve altyapısıyla en pratik aile rotasıdır.",
      },
    ],
  },

  "istanbula-yakin-kamp-alanlari": {
    image: PLACE.sapancaLake,
    intro:
      "İstanbul'dan hafta sonu kaçamağı için Kartepe, Abant Gölü, Assos ve Ayvalık rotaları en pratik seçeneklerdir. Bu sayfa yalnızca veritabanımızda İstanbul'a yakın illerde (Kocaeli, Bolu, Çanakkale, Balıkesir) kayıtlı kamp tesislerini listeler.",
    paragraphs: [
      "Kartepe Orman Kampı ve Kartepe Yayla Karavan Kampı TEM otoyoluna yakın konumlarıyla İstanbul'dan 1,5–2 saatte ulaşılır; hafta sonu kaçamağının klasik Marmara rotasıdır. Orman gölgesi yaz sıcaklarında serinlik sunar; karavan altyapısı elektrik ve su bağlantısı arayanlar için uygundur.",
      "Abant Gölü (Mudurnu) ve Mudurnu Tarihi Kent kamp alanları İstanbul'dan yaklaşık 3 saat mesafededir; göl çevresi yürüyüş parkurları ve kış buz manzarası mevsimsel çekicilik katar. Bolu otoyolu üzerinden ulaşım kolaydır; Pazar dönüş trafiğinde erken hareket önerilir.",
      "Assos Kadırga Kamp ve Assos Zeus Ormanı Eceabat feribotu ile ulaşılır; antik kent kalıntıları ve deniz manzarası hafta sonunu değerli kılar. Gökçeada Aydıncık ve Kuzu Koyu ada feribotu gerektirir; yaz sezonunda araç kontenjanı haftalar öncesinden rezervasyon ister.",
      "Balıkesir hattında Ayvalık Cunda Adası, Ayvalık Sarımsaklı, Kazdağı Edremit ve Edremit Altınoluk Sahil kamp alanları Ege meltemi ve zeytinlik manzarasıyla İstanbul'dan 4–5 saatlik rotada yer alır. Mayıs-haziran ve eylül dönemlerinde tesis doluluk oranı düşer.",
      "Hafta sonu kampında Cuma akşamı 16:00 öncesi veya Cumartesi sabah erken çıkış trafikten kaçınmanın en iyi yoludur. Otoyol geçiş ücreti, feribot bileti ve tesis ücretini tek bütçe tablosunda toplayın.",
      "İstanbul'dan kamp rotası seçerken mesafe ve ulaşım katmanını birlikte değerlendirin. Kartepe (1,5–2 saat, otoyol) en hızlı seçenekken Abant (3 saat) göl manzarası ve serinlik sunar; Assos ve Ayvalık (4–5 saat + feribot) deneyimi zenginleştirir ancak planlama süresi uzar. Hafta sonu kaçamağında mesafe ile deneyim kalitesi arasında denge kurmak kritiktir.",
      "Feribotlu rotalarda (Assos Eceabat, Gökçeada Kabatepe) araç kontenjanı yaz sezonunda haftalar öncesinden dolabilir. Feribot saatlerini tesis check-in saatine göre ayarlayın; geç varışta parsel seçimi kısıtlanabilir. Feribot ücreti ve otoyol geçişini tek bütçe tablosunda toplayarak sürpriz maliyetlerden kaçının.",
      "İstanbul yakını kamp rotalarında market ve su stoku stratejisi belirleyicidir. Kırsal tesislerde (Kartepe üst yayla, Abant çevresi) market seçenekleri sınırlı olabilir; İstanbul çıkışında su, ocak gazı, buz ve atıştırmalık stokunu tamamlayın. Maşukiye ve Mudurnu gibi beldeler tesis yakınında temel ihtiyaçları karşılar.",
      "Mevsimsel planlama İstanbul yakını rotalarda belirgin fark yaratır. Yaz ortasında Kartepe hafta sonu doluluk oranı yüksektir; mayıs-haziran ve eylül daha sakin pencere sunar. Kışın Abant buz manzarası ve Kartepe kar manzarası farklı bir deneyim sunar; dört mevsim ekipman ve zincir kontrolü zorunludur.",
      "Bu sayfada İstanbul'a yakın illerde (Kocaeli, Bolu, Çanakkale, Balıkesir) kayıtlı 12 kamp tesisinin tamamı listelenmektedir. Her tesis sayfasında İstanbul'dan tahmini sürüş süresi, otoyol çıkışı ve alternatif ulaşım bilgisi yer alır.",
      "İstanbul yakını kamp rotalarında dijital detoks ve doğa deneyimi bir arada planlanabilir. Kartepe orman gölgesi, Abant göl sisli sabah manzarası ve Assos antik kent kalıntıları farklı deneyim katmanları sunar. Hafta sonu kaçamağında tek rota yerine iki kısa durak (örneğin Cumartesi Kartepe, Pazar Abant) planlamak trafik stresini azaltır ve deneyim çeşitliliğini artırır.",
      "İstanbul'dan kamp rotası seçerken tesis rezervasyonunu trafik planıyla birlikte yapın. Yoğun hafta sonlarında (mayıs-ekim) Kartepe ve Abant tesisleri Cuma akşamına kadar dolabilir; erken rezervasyon parsel seçiminde avantaj sağlar. Ayvalık ve Assos rotalarında feribot saatleri rezervasyon saatine göre ayarlanmalıdır.",
      "Bu sayfadaki 12 tesis İstanbul'dan 1,5 ila 5 saat arasında ulaşılabilen gerçek kamp noktalarıdır; tamamı veritabanımızda konum, ulaşım ve tesis özellikleriyle belgelenmiştir.",
    ],
    tips: [
      "Cuma akşamı erken çıkış hafta sonu trafiğinden kaçınmanızı sağlar.",
      "Feribotlu rotalarda (Assos, Gökçeada) kontenjanı haftalar öncesinden ayırtın.",
      "Market alışverişini İstanbul'dan tamamlayın; kırsal tesislerde seçenek sınırlıdır.",
    ],
    faq: [
      {
        question: "İstanbul'dan en yakın kamp alanı hangisi?",
        answer:
          "Kartepe Orman Kampı otoyol mesafesi açısından en pratik seçenektir; yaklaşık 1,5–2 saat sürer.",
      },
      {
        question: "Hafta sonu kamp için ne zaman yola çıkmalı?",
        answer:
          "Cuma 16:00 öncesi veya Cumartesi sabah erken saatler idealdir. Pazar dönüşte 15:00 öncesi hareket trafiği azaltır.",
      },
      {
        question: "Feribot gerektiren rotalar hangileri?",
        answer:
          "Assos (Eceabat feribotu) ve Gökçeada (Kabatepe feribotu) feribot planlaması gerektirir.",
      },
      {
        question: "Kışın İstanbul yakını kamp yapılabilir mi?",
        answer:
          "Abant Gölü ve Kartepe kış kampına uygundur; dört mevsim ekipman ve termos zorunludur.",
      },
    ],
  },

  "ege-kamp-alanlari": {
    image: PLACE.cesmeIlica,
    intro:
      "Ege bölgesi Türkiye'nin en yoğun kamp rotasıdır; Çeşme, Urla, Ayvalık, Dikili, Datça ve Fethiye hattında deniz kenarı ve orman kamp tesisleri bir arada bulunur. Bu sayfa veritabanımızdaki tüm Ege ili kamp noktalarını listeler.",
    paragraphs: [
      "İzmir hattında Alaçatı Doğa Kampı meltem ve rüzgâr sörfü rotasıyla entegre planlanabilir; Çeşme Ilıca Sahil ve Urla Sahil deniz kenarı tesislerdir. Urla Bademler Bağ Kampı bağ evi manzaralı orman içi alternatif sunar. Seferihisar Ürkmez Koyu ve Sığacık Koyu aile dostu geniş parselleriyle öne çıkar.",
      "Dikili Bademli Koyu ve Nebiler Deresi Kamp alanları İzmir rotalarına kıyasla daha sakin ve ekonomik alternatifler sunar; meltem gecelerinde korunaklı koy seçimi kritiktir. Balıkesir hattında Ayvalık Cunda Adası, Sarımsaklı, Kazdağı Edremit ve Edremit Altınoluk Sahil kamp alanları zeytinlik ve deniz manzarasıyla Ege'nin kuzey sahili rotasını oluşturur.",
      "Muğla hattında Kabak Koyu, Fethiye Katrancı Koyu, Datça Palamutbükü, Datça Hayıtbükü, Marmaris Çiftlik Koyu ve Bozburun Yarımadası kamp alanları Akdeniz sınırına yakın Ege koylarını kapsar. Datça yarımadası sakin koyları kalabalıktan uzak kamp arayanlar için idealdir.",
      "Ege meltemi haziran'dan itibaren güçlenir; açık kıyılarda 3 mevsim çadır ve sağlam gerdirme sistemi zorunludur. Mayıs ve eylül ayları hem sıcaklık hem tesis fiyatlandırması açısından en dengeli dönemdir.",
      "Aşağıdaki listede 18 Ege kamp noktası il, ilçe ve kategori bilgisiyle birlikte sunulur. Her tesis sayfasında ulaşım, harita ve kamp ipuçları detaylandırılmıştır.",
      "Ege kamp rotası planlarken bölgeyi üç hatta düşünmek pratik olur: kuzey sahil (Ayvalık, Edremit, Kazdağı), orta kıyı (Urla, Çeşme, Seferihisar, Dikili) ve güney kıyı (Datça, Fethiye, Marmaris, Bozburun). Her hat farklı meltem profili, ulaşım süresi ve tesis yoğunluğu sunar; hafta sonu kaçamağı için orta kıyı, uzun tatil için güney kıyı tercih edilir.",
      "Ege meltemi haziran'dan itibaren güçlenir ve açık kıyılarda gece rüzgârı çadır stabilitesini test eder. Korunaklı koy seçimi (Datça Palamutbükü, Gökçeada Kuzu Koyu, Dikili Bademli) meltem gecelerinde uyku kalitesini belirgin artırır. 3 mevsim çadır, en az 6 gerdirme noktası ve kum torbası ağırlık sistemi Ege sahil kampının minimum ekipman setidir.",
      "Ege rotasında su ve market erişimi rotayı etkiler. Datça yarımadası ve Gökçeada gibi yarımada rotalarında tesis yakını market seçenekleri sınırlı olabilir; İzmir veya Balıkesir çıkışında stok tamamlanmalıdır. Dikili ve Urla gibi beldelere yakın tesislerde günlük market ihtiyacı daha kolay karşılanır.",
      "Ege kampında mevsim penceresi fiyat ve kalabalık açısından belirleyicidir. Mayıs-haziran ve eylül-ekim hem sıcaklık hem tesis doluluk oranı açısından en dengeli dönemdir. Temmuz-ağustos'ta Çeşme, Alaçatı ve Ayvalık hattında haftalar öncesinden rezervasyon şarttır; erken rezervasyon yapanlar parsel seçiminde avantajlı olur.",
      "Bu sayfada Ege bölgesi illerinde kayıtlı 18 kamp tesisinin tamamı gerçek veritabanı kayıtlarından oluşur. İl bazında detay için il rehberlerine, kategori bazında filtreleme için deniz kenarı ve orman kategori sayfalarına geçiş yapabilirsiniz.",
      "Ege kamp rotasında kültür ve doğa bir arada planlanabilir. Sığacık Cittaslow beldesi, Assos antik kent kalıntıları ve Ayvalık zeytinlik manzarası kamp deneyimine kültürel katman ekler. Uzun Ege rotasında (7+ gün) Datça-Fethiye-Marmaris kombinasyonu en çok tercih edilen güzergâhtır; her durakta en az 2 gece kalmak bölgeyi tanımak için yeterli süre sunar.",
      "Ege kamp alanları arasında deniz kenarı ve orman kategorileri bir arada bulunur; rotanızı tek kategoriye kilitlemek zorunda değilsiniz. Alaçatı Doğa Kampı ve Urla Bademler Bağ Kampı orman-deniz geçişini tek tesis içinde sunarken, Datça Palamutbükü saf sahil deneyimi arayanlara hitap eder. Aşağıdaki 18 tesisin kategori bilgisi her kartta görülebilir.",
    ],
    tips: [
      "Ege rotasında meltem yönünü gün batımından önce gözlemleyin.",
      "Datça ve Gökçeada rotalarında su stokunu artırın.",
      "Mayıs-eylül arası rezervasyon baskısı yaz ortasına göre düşüktür.",
    ],
    faq: [
      {
        question: "Ege'de kaç kamp alanı listeleniyor?",
        answer:
          "Bu sayfada Ege bölgesi illerinde kayıtlı tüm kamp tesisleri listelenir; güncel sayı aşağıdaki kartlarda görülebilir.",
      },
      {
        question: "Ege kamp rotası kaç gün olmalı?",
        answer:
          "Hafta sonu için Urla-Çeşme veya Ayvalık hattı; 5–7 gün için Datça-Fethiye-Marmaris kombinasyonu uygundur.",
      },
      {
        question: "En sakin Ege kamp koyu hangisi?",
        answer:
          "Datça Palamutbükü, Dikili Bademli ve Datça Hayıtbükü kalabalıktan uzak alternatifler sunar.",
      },
      {
        question: "Ege meltemi ne zaman başlar?",
        answer:
          "Haziran'dan itibaren güçlenir; açık kıyılarda gece rüzgârı çadır stabilitesini test eder.",
      },
    ],
  },

  "akdeniz-kamp-alanlari": {
    image: PLACE.olymposBeach,
    intro:
      "Akdeniz bölgesi Kaş, Kalkan, Olympos ve Adrasan hattında turkuaz koylar, antik kent kalıntıları ve dağ kamp alanlarını bir arada sunar. Bu sayfa veritabanımızdaki 6 Akdeniz kamp noktasını gerçek tesis verisiyle listeler.",
    paragraphs: [
      "Kaş Peninsula Kamp ve Kaş Kaputaş Koyu Kampı turkuaz su ve kayalık manzarasıyla Akdeniz rotasının en fotojenik duraklarıdır. Kaputaş plajı park alanı sınırlı olduğundan hafta sonu erken varış kritiktir. Kaş yarımadası dalış ve kano turlarıyla entegre kamp planlanabilir.",
      "Kalkan Kalamar Koyu Kampı tekne ulaşımı gerektirse de kalabalıktan uzak bir deneyim sunar; Kalkan Bezirgan Yaylası dağ kampı ve gün batımı manzarasıyla alternatif bir Akdeniz rotası oluşturur. Bungalov konsepti aileler arasında popülerdir.",
      "Olympos Ağaç Ev Kamp orman içi ağaç platformlarıyla çadır kampına geçiş basamağı sunar; Olympos Adrasan Koyu 2 km kumsal ve antik kent kalıntılarıyla listenin en kapsamlı tesisidir. Caretta caretta yumurtlama alanı kuralları bu hatta gece ışık kısıtlaması gerektirir.",
      "Akdeniz kampında haziran-temmuz zirve sezonu yaşar; ağustos sonu ve eylül kalabalıktan arınırken yüzme sıcaklığı devam eder. Antalya Havalimanı Kaş ve Olympos rotalarına 2–3 saat mesafededir.",
      "Aşağıdaki 6 tesis il, ilçe, ulaşım ve puan bilgisiyle listelenmiştir. Her tesis sayfasında harita, ulaşım ve yakın gezilecek yerler detaylandırılmıştır.",
      "Akdeniz kamp rotası planlarken ulaşım merkezi Antalya Havalimanı'dır; Kaş ve Olympos rotalarına 2–3 saat mesafededir. Araç kiralama veya özel araçla ulaşım en pratik seçenektir; otobüs bağlantıları sınırlı ve sefer saatleri tesis check-in saatine göre ayarlanmalıdır. Kaş yarımadası virajlı yollar nedeniyle gündüz varış tercih edilmelidir.",
      "Akdeniz kampında caretta caretta koruma alanları (Adrasan, Çıralı hattı) gece ışık kısıtlaması gerektirir. Kırmızı kafa lambası kullanın, plastik atık bırakmayın ve kumsalda çadır kurmayın; koruma alanı kuralları hem yasal zorunluluk hem ekosistem sorumluluğudur. Olympos Adrasan Koyu bu kuralların en sıkı uygulandığı tesislerden biridir.",
      "Kaş ve Kalkan hattında tekne ulaşımı gerektiren koylar (Kalamar Koyu) kalabalıktan uzak deneyim sunar; ancak tekne saati ve hava koşulu planlaması yapılmalıdır. Bezirgan Yaylası dağ kampı deniz rotasına alternatif oluşturur; gün batımı manzarası ve serin gece havası yaz ortasında avantaj sağlar.",
      "Akdeniz kampında mevsim penceresi haziran-temmuz zirve sezonu yaşar; ağustos sonu ve eylül kalabalıktan arınırken yüzme sıcaklığı devam eder. Olympos ve Kaş'ta temmuz-ağustos doluluk oranı yüksektir; mayıs-haziran ve eylül-ekim hem fiyat hem kalabalık açısından ideal pencere sunar.",
      "Bu sayfada Antalya ve Muğla Akdeniz hattında kayıtlı 6 kamp tesisinin tamamı listelenmektedir. Her tesis sayfasında dalış noktaları, antik kent kalıntıları ve yakın restoran bilgisi yer alır; detay sayfalarından rotanızı genişletebilirsiniz.",
      "Akdeniz kampında dalış ve su sporları rotayı zenginleştirir. Kaş yarımadası dalış okulları ve kano turlarıyla entegre planlanabilir; Olympos hattında nehir yatağı yürüyüşü ve antik kent gezisi kamp gününe aktivite ekler. Akdeniz kamp deneyimini tek boyutlu bırakmamak için her tesis sayfasındaki yakın gezilecek yerler bölümünü rotanıza dahil edin.",
      "Akdeniz kamp alanları Türkiye'nin en fotojenik kıyı rotasını oluşturur; Kaş Kaputaş turkuaz su, Olympos antik kent kalıntıları ve Kalkan Bezirgan yayla manzarası farklı deneyim katmanları sunar. Bu sayfadaki 6 tesis Antalya-Muğla hattının çekirdek duraklarıdır; sezon ortasında (temmuz-ağustos) Olympos ve Kaş'ta haftalar öncesinden rezervasyon şarttır.",
      "Akdeniz kampında gece sıcaklığı yaz ortasında bile düşebilir; hafif polar ve termal içlik çantada bulundurulmalıdır. Kıyı nem oranı gece yükselir; nefes alan çadır kumaşı yoğuşmayı azaltır. Mayıs ve eylül ayları hem sıcaklık hem kalabalık açısından en dengeli dönemdir.",
    ],
    tips: [
      "Kaş ve Kaputaş rotalarında erken varış park alanı garantiler.",
      "Adrasan hattında caretta caretta kurallarına uyun.",
      "Eylül ayı kalabalık ve fiyat açısından ideal pencere sunar.",
    ],
    faq: [
      {
        question: "Akdeniz'de kaç kamp alanı var?",
        answer:
          "Veritabanımızda Antalya ve Muğla Akdeniz hattında 6 kamp noktası kayıtlıdır; tamamı aşağıda listelenmiştir.",
      },
      {
        question: "En popüler Akdeniz kamp rotası hangisi?",
        answer:
          "Olympos Adrasan hattı antik kent, plaj ve orman üçlüsüyle en çok ziyaret edilen rotadır.",
      },
      {
        question: "Kaş'ta kamp alanı yeterli mi?",
        answer:
          "Kaş Peninsula ve Kaputaş olmak üzere 2 ayrı tesis kayıtlıdır; sezon ortasında erken rezervasyon önerilir.",
      },
      {
        question: "Akdeniz kampında ne zaman gidilmeli?",
        answer:
          "Mayıs-haziran ve eylül-ekim idealdir. Temmuz-ağustos'ta Olympos ve Kaş yoğundur.",
      },
    ],
  },

  "orman-kamp-alanlari": {
    image: PLACE.olymposAntikKenti,
    intro:
      "Orman kamp alanı çam ve meşe gölgesi, serin gece havası ve doğayla iç içe ortam sunar. Bu sayfa veritabanımızda orman kategorisinde kayıtlı 8 gerçek kamp tesisini listeler.",
    paragraphs: [
      "Kartepe Orman Kampı Maşukiye'de yoğun çam ve kayın ağaçları arasında yıl boyu hizmet verir; İstanbul'a yakınlığı hafta sonu orman kampının en pratik adresidir. Assos Zeus Ormanı Çanakkale hattında antik tapınak kalıntıları arasında orman gölgesi sunar.",
      "Alaçatı Doğa Kampı çam ormanı ile deniz arasında konumlanır; meltem gecelerinde orman gölgesi serinlik sağlar. Urla Bademler Bağ Kampı bağ evi manzaralı orman içi parseller sunar. Dikili Nebiler Deresi dere sesi eşliğinde orman kampı arayanlar için sakin bir alternatiftir.",
      "Kazdağı Edremit Kamp alanı milli park çevresinde zeytinlik ve çam ormanı içinde konumlanır; yaz sıcaklarında serinlik avantajı belirgindir. Olympos Ağaç Ev Kamp vadide çam ormanı içinde ağaç platformlarıyla öne çıkar.",
      "Abant Gölü (Mudurnu Lake Abant) orman ve göl kombinasyonu sunar; sonbahar yaprak renkleri ve kış buz manzarası mevsimsel çekicilik katar. Orman kampında böcek kovucu ve kene kontrolü önemlidir; yiyecekleri kapalı kapta saklayın.",
      "Orman yangını riski yüksek dönemlerde açık ateş yasaktır; gaz ocak kullanımı tercih edilmelidir. Aşağıdaki 8 tesis il, ilçe ve ulaşım bilgisiyle listelenmiştir.",
      "Orman kampında zemin ve ağaç seçimi güvenlik açısından kritiktir. Yüksek dallı ağaç altına çadır kurmayın; fırtına ve kuru dal düşmesi riski vardır. Düz ve açık parseller (Kartepe, Kazdağı Edremit) hem güvenlik hem havalandırma açısından avantajlıdır. Orman zemininde nem yoğuşması gece belirginleşir; nefes alan çadır kumaşı ve iç havalandırma açık tutulmalıdır.",
      "Orman kampında böcek ve kene profili bölgeye göre değişir. Kazdağı ve Abant gölgesinde kene kontrolü yapılmalı; yürüyüş sonrası vücut taraması alışkanlık haline getirilmelidir. Yiyecekleri kapalı kapta saklayın; sincap ve kuş müdahalesi açık gıda bırakıldığında sorun yaratır. Böcek kovucu sprey orman kampının standart ekipmanıdır.",
      "Orman yangını riski yüksek dönemlerde (yaz kuraklığı) açık ateş kesinlikle yasaktır; gaz ocak kullanımı güvenli alternatiftir. Sigara izmariti ve cam şişe orman yangını riskini artırır; tüm atıklar tesisin belirlediği noktaya taşınmalıdır. Olympos ve Kazdağı gibi koruma alanlarında ek kısıtlamalar uygulanabilir; tesis girişinde kuralları okuyun.",
      "Orman kampında mevsim farklılıkları belirgindir. Yaz ortasında orman gölgesi (Kartepe, Kazdağı, Alaçatı) sahil kampına kıyasla 5–10°C serinlik sunar; hafif polar tercih edilmelidir. Sonbahar (Abant, Kazdağı) yaprak renkleri fotoğraf kampı için eşsiz manzara sunar; kış rotasında dört mevsim ekipman zorunludur.",
      "Bu sayfada orman kategorisinde kayıtlı 8 tesisin tamamı gerçek veritabanı kayıtlarından oluşur. İstanbul'a yakın orman kampı için Kartepe, antik kalıntılar arasında orman deneyimi için Assos Zeus Ormanı, milli park çevresi için Kazdağı Edremit öne çıkar.",
      "Orman kampında gece sessizliği ve yıldız gözlemi deneyimin ayrılmaz parçasıdır. Işık kirliliğinden uzak parsellerde (Abant, Kazdağı, Olympos) samanyolu gözlemi mümkündür; kırmızı kafa lambası gece hareketinde hem gezinmeyi hem yıldız gözlemini kolaylaştırır. Orman sesleri (kuş, rüzgâr, dere) uyku kalitesini etkileyebilir; kulak tıkacı hafif uyuyanlar için faydalıdır.",
      "Türkiye orman kamp rotasında Kartepe (Marmara), Kazdağı Edremit (Ege), Olympos (Akdeniz) ve Abant (İç Anadolu sınırı) dört farklı iklim profili sunar. Orman kampında mevsim seçimi deneyimi belirler: yaz ortasında serinlik arayanlar Kazdağı ve Kartepe'yi, sonbahar yaprak renkleri için Abant'ı, antik-orman kombinasyonu için Assos Zeus Ormanı'nı tercih eder.",
      "Orman kampında çadır kurulumu ağaç kökleri ve eğim açısına göre ayarlanmalıdır; düz zemin bulunamazsa baş tarafı hafif yüksekte konumlandırın. Aşağıdaki 8 tesisin tamamı orman kategorisinde kayıtlı gerçek kamp noktalarıdır.",
    ],
    tips: [
      "Orman kampında böcek kovucu ve kene kontrolü standart ekipmandır.",
      "Yüksek dallı ağaç altına çadır kurmayın; fırtına riski vardır.",
      "Ateş yerine gaz ocak kullanın; orman yangını riski yüksektir.",
    ],
    faq: [
      {
        question: "Orman kamp alanı seçerken neye bakmalı?",
        answer:
          "Gölge alan, tuvalet-duş altyapısı, yangın yasağı kuralları ve böcek profili temel kriterlerdir.",
      },
      {
        question: "İstanbul'a en yakın orman kamp alanı?",
        answer:
          "Kartepe Orman Kampı otoyol mesafesi ve orman gölgesiyle en pratik seçenektir.",
      },
      {
        question: "Orman kampında ateş yakılır mı?",
        answer:
          "Yaz kuraklığında çoğu orman bölgesinde yasaktır; gaz ocak güvenli alternatiftir.",
      },
      {
        question: "En serin orman rotası hangisi?",
        answer:
          "Kazdağı Edremit ve Abant Gölü yaz sıcaklarında belirgin serinlik sunar.",
      },
    ],
  },

  "gol-kenari-kamp-alanlari": {
    image: PLACE.abantLake,
    intro:
      "Göl kenarı kamp alanı göl manzarası, sabah sisli fotoğraf fırsatları ve yürüyüş parkurlarıyla öne çıkar. Bu sayfa veritabanımızda Abant Gölü ve Sapanca-Kartepe hattında göl kenarı konumlandırılmış 4 gerçek kamp tesisini listeler.",
    paragraphs: [
      "Mudurnu Lake Abant Kampı Abant Gölü kıyısında tesisli kamp altyapısı sunar; sonbahar yaprak renkleri ve kış buz manzarası mevsimsel çekicilik katar. Gece sıcaklığı yaz ortasında bile 10°C altına inebilir; katmanlı giyim zorunludur.",
      "Mudurnu Tarihi Kent Kamp alanı Abant rotasına eklenerek kültür-doğa birleşik hafta sonu planlanabilir. Bolu otoyolu üzerinden İstanbul'a 3 saat mesafededir; kış aylarında yol buzlanması kontrol edilmelidir.",
      "Kartepe Orman Kampı Sapanca Gölü ve Maşukiye dere havzasına yakın konumlanır; göl manzaralı yürüyüş rotalarına kısa sürüş mesafesindedir. Kartepe Yayla Karavan Kampı göl çevresi karavan rotasının tam altyapılı durağıdır.",
      "Göl kenarı kampında nem oranı gece yükselir; nefes alan çadır kumaşı yoğuşmayı azaltır. Sabah erken saatlerde göl yüzeyinde sis fotoğrafı için ideal pencere açılır. Abant Gölü kışın kısmen donar; bu manzara fotoğraf kampı için eşsizdir.",
      "Aşağıdaki 4 tesis göl kenarı konumlandırması veritabanında belgelenmiş gerçek kamp noktalarıdır. Her tesis sayfasında ulaşım, harita ve mevsim ipuçları detaylandırılmıştır.",
      "Göl kenarı kampında nem ve sıcaklık profili sahil kampından farklıdır. Abant Gölü'nde gece sıcaklığı yaz ortasında bile 10°C altına inebilir; katmanlı giyim ve -5°C tulum minimum gereksinimdir. Sapanca-Kartepe hattında göl sisli sabah manzarası fotoğraf için ideal pencere sunar; sabah 06:00–08:00 arası göl yüzeyinde sis yoğunlaşır.",
      "Göl kenarı kamp rotasında ulaşım Bolu otoyolu üzerinden kolaydır; ancak kış aylarında yol buzlanması kontrol edilmelidir. Zincir, kar lastiği ve yedek battaniye araçta bulundurulmalıdır. Mudurnu beldesi Abant rotasında market ve restoran ihtiyacını karşılar; Maşukiye ise Kartepe rotasında termal ve yemek seçenekleri sunar.",
      "Göl kenarı kampında aktivite planı yürüyüş odaklıdır. Abant Gölü çevresi yürüyüş parkurları (6–7 km) aile rotalarına uygundur; Kartepe-Sapanca hattında göl manzaralı kısa yürüyüşler tesis yakınında yapılabilir. Kışın Abant gölü kısmen donar; bu manzara fotoğraf kampı için eşsizdir ancak buz üzerinde yürüyüş güvenlik riski taşır.",
      "Göl kenarı kamp ekipmanında nem yönetimi önceliklidir. Nefes alan çadır kumaşı yoğuşmayı azaltır; sabah çadır içi nem birikimini önlemek için gece havalandırma açık tutulmalıdır. Göl kenarında böcek profili orman kampına benzer; kene kontrolü yürüyüş sonrası yapılmalıdır.",
      "Bu sayfada Abant Gölü ve Sapanca-Kartepe hattında göl kenarı konumlandırılmış 4 tesis listelenmektedir. İstanbul'dan hafta sonu kaçamağı için Abant (3 saat) ve Kartepe (1,5–2 saat) en pratik rotalardır; detay sayfalarından bütçe ve rezervasyon bilgisine ulaşabilirsiniz.",
      "Göl kenarı kampında fotoğraf ve doğa gözlemi aktiviteleri rotayı zenginleştirir. Abant sonbahar yaprak renkleri ve kış buz manzarası, Sapanca sisli sabah manzarası profesyonel olmayan ekipmanla bile etkileyici kareler üretir. Göl kenarı kampında sabah erken kalkmak hem fotoğraf hem sessiz doğa deneyimi için en verimli saattir; gece geç saatlerde gürültüden kaçının.",
      "Türkiye'de göl kenarı kamp alanı seçenekleri sınırlı ancak kaliteli tesisler sunar; Abant Gölü ve Sapanca-Kartepe hattı İstanbul'a yakın hafta sonu kaçamağı için en pratik rotadır. Göl kenarı kampında karavan altyapısı arayanlar Kartepe Yayla Karavan Kampı'nı, çadır kampı tercih edenler Abant Gölü tesisini değerlendirebilir; her iki tesis de aşağıda listelenmektedir.",
      "Göl kenarı kampında su kaynağı planlaması önemlidir; tesis musluk suyu içilebilir olmayabilir. Kişi başı günde en az 2 litre içme suyu stoku bulundurun; Abant rotasında Mudurnu beldesinden stok tamamlanabilir.",
    ],
    tips: [
      "Abant rotasında kış ekipmanı (-10°C tulum) şarttır.",
      "Göl kenarında sabah nem oranı yüksektir; havalandırma açık tutun.",
      "Bolu yolu kışın buzlanabilir; zincir veya kar lastiği kontrol edin.",
    ],
    faq: [
      {
        question: "Göl kenarı kamp alanı var mı?",
        answer:
          "Evet. Abant Gölü ve Sapanca-Kartepe hattında toplam 4 tesis kayıtlıdır; aşağıda listelenmiştir.",
      },
      {
        question: "Abant Gölü'nde kış kampı yapılır mı?",
        answer:
          "Evet. Ocak-şubat döneminde buz manzarası sunar; dört mevsim çadır ve -10°C tulum zorunludur.",
      },
      {
        question: "İstanbul'dan Abant'a ne kadar sürer?",
        answer:
          "Otoyol ile yaklaşık 3 saat. Hafta sonu trafiğinde erken çıkış önerilir.",
      },
      {
        question: "Sapanca gölü kamp alanı hangisi?",
        answer:
          "Kartepe Orman Kampı ve Kartepe Yayla Karavan Kampı Sapanca göl havzasına yakın konumlanır.",
      },
    ],
  },
};

export function getLandingPageContent(slug: string): LandingPageContent | undefined {
  return landingPageContent[slug];
}
