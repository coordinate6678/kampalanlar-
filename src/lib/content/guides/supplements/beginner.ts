import type { GuideSupplement } from "@/lib/content/guides/merge";

export const beginnerSupplements: Record<string, GuideSupplement> = {
  "ilk-kez-kamp-rehberi": {
    extraIntro: [
      "İlk kamp deneyiminizde altyapılı bir tesis seçmek, ekipmanı evde test etmek ve hava durumunu üç gün önceden takip etmek en sık yapılan hataları önler.",
      "Kartepe, Abant ve Assos rotaları ilk kamp için farklı zorluk seviyeleri sunar; bu rehberde her rota aile uygunluğu, ulaşım süresi ve minimum ekipman listesiyle birlikte açıklanır.",
      "İlk gece stresini azaltmak için çadır kurulumunu evde denemek ve tesisle önceden iletişim kurmak kritik adımlardır.",
      "Aşağıdaki bölümlerde bütçe planlaması, sık yapılan hatalar ve ilk gece ipuçları ayrı ayrı ele alınır.",
      "Rehber boyunca Kartepe, Abant ve Assos rotalarına doğrudan kamp sayfası bağlantıları verilir.",
    ],
    sections: [
      {
        id: "ilk-kamp-hazirlik",
        heading: "İlk Kamp Öncesi Hazırlık Listesi",
        paragraphs: [
          "İlk kamp deneyiminde en sık yapılan hata ekipmanı son dakikada paketlemektir. Kamp gününden bir gece önce çadır, mat, tulum, ocak ve kafa lambasını checklist ile kontrol edin; unutulan mat veya kazık geceyi zorlaştırır.",
          "Hava durumunu kamp gününden 3 gün önce takip etmeye başlayın; ani yağış veya fırtına planı değiştirebilir. Tesisle önceden iletişim kurarak rezervasyon, giriş saati ve kuralları netleştirin; popüler alanlarda (Kartepe, Abant) hafta sonu doluluk erken saatlerde tamamlanır.",
          "Market alışverişini evden yapın; kırsal tesislerde seçenek sınırlıdır ve fiyatlar şehir marketlerine göre daha yüksektir. Su, atıştırmalık, kahvaltılık ve temel hijyen malzemelerini stoklayın.",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "ilk-kamp-alan-onerileri",
        heading: "İlk Kamp İçin Bölgesel Alan Önerileri",
        paragraphs: [
          "Kartepe orman kamp alanı İstanbul'a yakınlığı, tuvalet-duş altyapısı ve güvenli ortamıyla ilk kamp için en pratik seçenektir. Abant Gölü göl manzarası ve yürüyüş parkurlarıyla aile kampı için uygundur; gece sıcaklığı yaz ortasında bile 10°C altına inebilir.",
          "Deniz kenarı isteyenler Assos Kadırga veya Ayvalık Sarımsaklı ile başlayabilir; meltem gecelerinde sağlam kurulum şarttır. Kalabalık dönemlerden (temmuz-ağustos) kaçınmak hem fiyat hem konfor açısından avantaj sağlar.",
        ],
        subsections: [
          {
            id: "ilk-kamp-marmara",
            heading: "Marmara: Kartepe ve Sapanca",
            paragraphs: [
              "Kartepe orman kamp alanı otoyol mesafesi ve ulaşım süresi açısından İstanbul çıkışlı ilk kamp için en pratik seçenektir. Orman içi gölge yaz sıcaklarında serinlik sunar; tesis yönetimi gece güvenlik devriyesi sağlar.",
              "Sapanca Gölü çevresindeki tesisler çocuklu aileler için uygundur. Hafta sonu trafiğinden kaçınmak için Cuma 16:00 öncesi veya Cumartesi sabah erken saatlerde hareket edin.",
            ],
            links: [
              {
                label: "Kartepe Orman Kampı",
                href: "/kamp-alanlari/izmit/kartepe/kartepe-orman-kampi",
              },
            ],
          },
          {
            id: "ilk-kamp-deniz",
            heading: "Deniz Kenarı: Assos ve Ayvalık",
            paragraphs: [
              "Assos Kadırga Koyu antik kent kalıntıları ve deniz manzarasıyla ilk deniz kenarı kampı için cazip bir rota sunar. Meltem gecelerinde çadır stabilitesi için kazık derinliği ve gerdirme ipi sayısına dikkat edin.",
              "Ayvalık Sarımsaklı plajı sezon dışı dönemlerde daha uygun fiyatlı tesisler sunar. Her iki rota da İstanbul'dan 4–5 saat ulaşım gerektirir; feribot süresini plana dahil edin.",
            ],
            links: [
              {
                label: "Assos Kadırga Kamp",
                href: "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp",
              },
              {
                label: "Ayvalık Sarımsaklı Kampı",
                href: "/kamp-alanlari/balikesir/ayvalik/ayvalik-sarimsakli-kampi",
              },
            ],
          },
        ],
      },
      {
        id: "ilk-kamp-ekipman-detay",
        heading: "İlk Kamp Ekipman Seçimi ve Test",
        paragraphs: [
          "Minimum set: çadır, uyku matı, uyku tulumu (+10°C konfor), kafa lambası, ocak, su matarası (2L), ilk yardım çantası. Çadır kurulumunu evde veya parkta en az bir kez deneyin; gece karanlığında ilk kurulum stresli olabilir.",
          "Uyku tulumu konfor derecesini gece minimum sıcaklığının 5°C altında seçin. Abant ve Kartepe gibi iç bölgelerde yaz geceleri bile 10°C altına inebilir; +5°C tulum bu rotalar için daha güvenli bir tercihtir.",
          "Kafa lambası ve yedek pil gece tuvalet, çadır içi düzenleme ve acil durum sinyali için zorunludur. Powerbank telefon şarjı ve offline harita için yedek güç sağlar.",
        ],
        links: [
          {
            label: "Çadır Seçme Rehberi",
            href: "/rehberler/cadir-secme-rehberi",
          },
          {
            label: "Kamp Çantası Hazırlama",
            href: "/rehberler/kamp-cantasi-hazirlama-rehberi",
          },
        ],
      },
      {
        id: "ilk-gece-detay",
        heading: "İlk Gece: Kurulum, Uyku ve Ayrılış",
        paragraphs: [
          "Kamp kurulumunu gün batımından en az 2 saat önce tamamlayın. Komşu çadırlara saygılı mesafe bırakın; gece sessizliğine uyun ve müzik sesini minimumda tutun. Değerli eşyaları çadırda görünür bırakmayın; araçta kilitli bölmede saklayın.",
          "Sabah erken kalkarak çevreyi keşfedin; gün ışığı hem güvenlik hem fotoğraf için değerlidir. Ayrılırken alanı temiz bırakın; çöp bırakmak hem etik dışı hem yasal sorun yaratabilir.",
          "İlk kamp sonrası çadırı evde kuruyarak kurutun; nemli saklama küf oluşumuna yol açar. Deneyim notlarını kaydedin: hangi ekipman eksikti, hangi rota tekrar ziyaret edilmeli — bir sonraki kamp planınızı kolaylaştırır.",
        ],
        links: [
          {
            label: "Kamp Güvenliği Rehberi",
            href: "/rehberler/kamp-guvenligi-rehberi",
          },
        ],
      },
      {
        id: "ilk-kamp-hatalar",
        heading: "İlk Kampçıların Sık Yaptığı Hatalar",
        paragraphs: [
          "En yaygın hatalar: gece karanlığında ilk çadır kurulumu, yetersiz su stoku, hafif uyku tulumu seçimi ve hava durumunu kontrol etmemek. Datça Palamutbükü ve Gökçeada gibi su kaynağı sınırlı rotalarda kişi başı günde 4 litre stok planlanmalıdır.",
          "Çadırı kıyı çizgisine veya vadi tabanına kurmak gece su birikintisi ve ani sel riski taşır. Kartepe ve Olympos gibi orman rotalarında yüksek dallı ağaç altından kaçının; fırtına sırasında kırık dal riski vardır.",
          "İlk kamp sonrası deneyim notları bir sonraki seferi kolaylaştırır: hangi ekipman eksikti, hangi rota tekrar ziyaret edilmeli, tesis kuralları nelerdi. Bu notlar özellikle Assos meltemi ve Abant gece soğuğu gibi sürprizler için değerlidir.",
          "İlk kamp için tesis seçerken duş ve tuvalet mesafesini, gece aydınlatmasını ve market erişimini sorun. Kartepe ve Abant'ta bu altyapı mevcuttur; Olympos vadisinde market ve duş tesis sınırları içindedir. Komşu çadırlarla tanışmak acil durumda yardım ağı oluşturur.",
        ],
        links: [
          {
            label: "Yaz Kampı vs Kış Kampı",
            href: "/rehberler/yaz-kampi-vs-kis-kampi",
          },
        ],
      },
      {
        id: "ilk-kamp-checklist-hafta",
        heading: "1 Hafta Önce: Hazırlık Checklist'i",
        paragraphs: [
          "İlk kamp deneyiminde zamanlama en kritik faktördür. Bir hafta önce başlayan hazırlık, son dakika stresini ve eksik ekipman riskini büyük ölçüde azaltır. Aşağıdaki maddeleri sırayla tamamlayın; her birini işaretleyerek ilerlemek unutmayı önler.",
        ],
        checklist: [
          "Kamp tarihi ve süresini netleştirin (1 gece / 2 gece)",
          "Tesis veya alan rezervasyonu / izin sürecini başlatın",
          "Hava durumu tahminini takip etmeye başlayın",
          "Eksik ekipman listesini çıkarın ve satın alın",
          "Çadır kurulumunu evde veya parkta test edin",
          "Market alışveriş listesini yazın",
          "Acil durum planını bir yakına bildirin",
          "Araç bakımını kontrol edin (lastik, yakıt, feribot rezervasyonu)",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "ilk-kamp-checklist-gun",
        heading: "1 Gün Önce: Son Hazırlık Checklist'i",
        paragraphs: [
          "Kamp gününden bir gece önce tüm ekipmanı gözden geçirmek, sabah acelesiyle yapılan paketleme hatalarını önler. Bu aşamada çadır, mat, tulum ve ocak mutlaka fiziksel olarak kontrol edilmelidir.",
        ],
        checklist: [
          "Çadır, kazık, ip ve zemin örtüsünü kontrol edin",
          "Uyku matı ve tulumu hava durumuna göre doğrulayın",
          "Ocak kartuşu doluluğunu ve kafa lambası pillerini test edin",
          "Su matarası, market alışverişi ve buz stokunu tamamlayın",
          "İlk yardım çantası ve kişisel ilaçları paketleyin",
          "Powerbank şarj edin; offline harita indirin",
          "Hava durumu tahminini son kez kontrol edin",
          "Tesisle varış saatini teyit edin",
        ],
      },
      {
        id: "ilk-kamp-checklist-kampta",
        heading: "Kampta: Kurulum ve Konaklama Checklist'i",
        paragraphs: [
          "Kamp alanına vardığınızda doğru yer seçimi ve düzenli kurulum, gece konforunun temelini oluşturur. Gün batımından en az iki saat önce kurulumu tamamlamayı hedefleyin.",
        ],
        checklist: [
          "Düz, drenajlı zemin seçin; vadi tabanından kaçının",
          "Çadırı rüzgâr yönüne göre konumlandırın",
          "Yiyecekleri çadır dışında kapalı kapta saklayın",
          "Su stokunu erişilebilir noktaya koyun",
          "Acil durum çantası ve kafa lambasını el altında tutun",
          "Komşu çadırlara saygılı mesafe bırakın",
          "Gece sessizliği ve ışık kurallarına uyun",
          "Ayrılırken alanı temiz bırakın; çadırı kurutarak saklayın",
        ],
        links: [
          {
            label: "Kamp Güvenliği Rehberi",
            href: "/rehberler/kamp-guvenligi-rehberi",
          },
        ],
      },
      {
        id: "ilk-kamp-yer-secimi-genel",
        heading: "Yer Seçimi Kriterleri: Genel Rehber",
        paragraphs: [
          "İlk kamp için altyapılı tesis tercih etmek en güvenli başlangıçtır: tuvalet, duş, aydınlatma ve güvenlik devriyesi gece stresini azaltır. Tesis seçerken ulaşım süresi, gece sıcaklık farkı ve mevsim koşullarını birlikte değerlendirin; uzun yol küçük çocuklar için yorucu olabilir.",
          "Çadır kurulum alanı düz, hafif eğimli ve su birikintisi yapmayan zemin olmalıdır. Yüksek dallı ağaç altı, kıyı çizgisi hemen yanı ve vadi tabanı fırtına, sel ve dal düşmesi riski taşır. Rüzgâr yönünü gün batımından önce gözlemleyin; çadır kapısını korunaklı tarafa yönlendirin.",
          "Deniz kenarında korunaklı koy, orman içinde gölge alan ve dağ rotasında rüzgârdan korunaklı düzlük farklı öncelikler gerektirir. Kamp alanları sayfasından tesis tipine göre filtreleme yaparak ilk rotanızı belirleyebilirsiniz.",
        ],
        links: [
          {
            label: "Kamp Alanları",
            href: "/kamp-alanlari",
          },
        ],
      },
      {
        id: "ilk-kamp-yaygin-hatalar-genel",
        heading: "Yaygın Hatalar ve Nasıl Önlenir",
        paragraphs: [
          "En sık yapılan hatalar: gece karanlığında ilk çadır kurulumu, hafif uyku tulumu seçimi, yetersiz su stoku ve hava durumunu kontrol etmemek. Çözüm basit: bir hafta önce checklist, evde çadır testi ve gece minimum sıcaklığının 5°C altında tulum seçimi.",
          "Çadırı kıyı çizgisine veya dere yatağına kurmak gece su birikintisi ve ani sel riski yaratır. Ateş yasağı dönemlerinde mangal denemek hem yasal sorun hem yangın tehlikesi getirir; gaz ocak her mevsim güvenli alternatiftir.",
          "İlk kamp sonrası not tutmak bir sonraki seferi kolaylaştırır: hangi ekipman eksikti, gece ne kadar soğudu, tesis kuralları nelerdi? Bu geri bildirim döngüsü deneyimi hızla geliştirir.",
        ],
      },
      {
        id: "ilk-kamp-sonrasi",
        heading: "İlk Kamp Sonrası: Değerlendirme ve Sonraki Adım",
        paragraphs: [
          "İlk kamp bittiğinde ekipmanı hemen temizleyin: çadırı kuruyarak kurutun, mat ve tulumu havalandırın, ocak başlığını tıkayın. Nemli saklama küf ve koku oluşturur; bir sonraki kamp deneyimini zedeler.",
          "Kısa bir değerlendirme notu tutun: gece sıcaklığı beklentinizle uyuştu mu, hangi ekipman eksikti, tesis kuralları nelerdi? Bu not bir sonraki rota ve ekipman seçimini doğrudan iyileştirir.",
          "İkinci kamp için hedefinizi bir küçük adım büyütün: bir gece daha uzatın, farklı bir kamp türü deneyin veya mevsim geçiş dönemini test edin. Aşamalı ilerleme güvenlik ve keyif dengesini korur; site rehberimizdeki il sayfalarından yeni rotalar keşfedebilirsiniz.",
        ],
        links: [{ label: "Türkiye Kamp Alanları", href: "/kamp-alanlari" }],
      },
    ],
    relatedGuides: [
      {
        label: "İstanbul'a Yakın Kamp Alanları",
        href: "/rehberler/istanbul-yakin-kamp-alanlari",
      },
      {
        label: "Çadır Seçme Rehberi",
        href: "/rehberler/cadir-secme-rehberi",
      },
    ],
  },

  "yaz-kampi-vs-kis-kampi": {
    extraIntro: [
      "Mevsim seçimi çadır tipinden uyku tulumu konfor derecesine kadar tüm ekipman kararlarını belirler; aşağıda yaz, kış ve geçiş mevsimi rotalarını somut lokasyonlarla karşılaştırıyoruz.",
      "Abant kış buz manzarası, Kaş yaz turkuaz koyları ve Kartepe geçiş mevsimi orman gölgesi aynı ülkede farklı ekipman setleri gerektirir; bu farkları tablo halinde özetliyoruz.",
      "Her mevsim için önerilen rota listesi ve minimum ekipman seti aşağıda ayrı bölümlerde sunulur.",
      "Geçiş mevsimi stratejisi ve mevsim-ekipman eşleştirme tablosu rehberin son bölümünde özetlenir.",
      "Kış hipotermi riski ve yaz güneş yanığı önlemleri güvenlik odaklı ayrı paragraflarda açıklanır.",
      "Geçiş mevsiminde yağmur olasılığı ve ani sıcaklık düşüşü plana dahil edilmelidir; esnek tarih seçimi riski azaltır.",
    ],
    sections: [
      {
        id: "yaz-kamp-detay",
        heading: "Yaz Kampı: Rota, Ekipman ve Pratik İpuçları",
        paragraphs: [
          "Yaz kampında öncelik güneş koruma, hidrasyon ve havalandırmadır. İnce uyku tulumu (+10°C), hafif 3 mevsim çadır, güneş kremi (SPF 50+) ve bol su stoku şarttır. Deniz kenarında meltem geceleri serinlik getirir; ince polar katman yeterlidir.",
          "Popüler rotalar (Olympos, Kabak, Ayvalık) temmuz-ağustos'ta kalabalık ve pahalıdır. Mayıs-haziran ve eylül hem sıcaklık hem kalabalık açısından idealdir; tesis ücretleri yaz ortasına kıyasla %30–40 daha düşük olabilir.",
          "Yaz kampında böcek kovucu, güneş şapkası ve hafif uzun kollu giysi Akdeniz ve Ege rotalarında zorunlu ekipmandır. Öğle saatlerinde (11:00–15:00) gölgede dinlenme planı yapın; aşırı sıcakta aktivite riski artar.",
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
        subsections: [
          {
            id: "yaz-ege-akdeniz",
            heading: "Yaz Ege ve Akdeniz Rotaları",
            paragraphs: [
              "Kaş Kaputaş, Ayvalık Cunda, Olympos Adrasan ve Datça Palamutbükü yaz kampının klasik rotalarıdır. Korunaklı koy seçimi (Datça Hayıtbükü, Gökçeada Kuzu Koyu) meltem gecelerinde uyku kalitesini belirgin artırır.",
              "Deniz kenarı yaz kampında kişi başı günde minimum 3 litre su planlayın. Caretta caretta alanlarında (Adrasan, Çıralı) gece ışık kısıtlaması uygulanır; kırmızı ışık kullanın.",
            ],
            links: [
              {
                label: "Kaş Kaputaş Koyu Kampı",
                href: "/kamp-alanlari/antalya/kas/kas-kaputas-koyu-kampi",
              },
            ],
          },
          {
            id: "yaz-orman",
            heading: "Yaz Orman Kampı: Kartepe ve Olympos",
            paragraphs: [
              "Kartepe orman kamp alanı yaz sıcaklarında İstanbul'a yakın serinlik sunar; orman gölgesi gündüz sıcaklığını 5–8°C düşürür. Olympos vadisinde antik kent kalıntıları ve nehir yatağı gölge alanlar sağlar.",
              "Orman rotalarında böcek kovucu ve kene kontrolü önemlidir. Yiyecekleri çadır dışında kapalı kapta saklayın; domuz ve tilki kamp alanlarına yiyecek kokusuyla gelir.",
            ],
          },
        ],
      },
      {
        id: "kis-kamp-detay",
        heading: "Kış Kampı: Ekipman, Rota ve Güvenlik",
        paragraphs: [
          "Kış kampında dört mevsim çadır, -10°C konfor tulumu, yüksek R-değerli mat (R5+) ve katmanlı giyim zorunludur. Kartepe ve Abant ocak-şubat döneminde kar yağışı sunar; gece sıcaklığı -15°C'ye kadar inebilir.",
          "Gün ışığı 9–10 saatle sınırlıdır; aktivite planlaması 07:00–16:00 aralığına sıkıştırılmalıdır. Termos, kafa feneri ve ekstra battaniye standart ekipmandır. Kar yağışı sonrası çadır flysheet'ine biriken kar yükü düzenli temizlenmelidir.",
          "Kış kampında hipotermi riski yüksektir; ıslak giysi hemen değiştirilmeli, termal içlik ve polar katman korunmalıdır. Ateş yakma yasağı olan dönemlerde gaz ocak hem ısınma hem yemek pişirme için güvenli alternatiftir.",
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
        id: "gecis-mevsimi",
        heading: "Geçiş Mevsimi: Mayıs ve Eylül Kamp Stratejisi",
        paragraphs: [
          "Mayıs-haziran ve eylül-ekim hem sıcaklık hem kalabalık açısından en dengeli aylardır. Gündüz sıcağı, gece serinliği bir arada yaşanır; +5°C tulum ve 3 mevsim çadır çoğu rota için yeterlidir.",
          "Eylül ayında Kaş ve Datça rotaları yaz kalabalığından arınırken hâlâ yüzme sıcaklığı sunar. Mayıs ayında Abant sonbahar yaprak renklerinin erken versiyonunu gösterir; fotoğraf kampı için ideal bir pencere açılır.",
          "Geçiş mevsiminde yağmur olasılığı artar; yağmurluk ve su geçirmez çanta kapakları her zaman çantada bulunmalıdır. Hava durumu tahminini kamp gününden 3 gün önce takip etmeye başlayın.",
        ],
        links: [
          {
            label: "En İyi Ücretsiz Kamp Alanları",
            href: "/rehberler/en-iyi-ucretsiz-kamp-alanlari",
          },
        ],
      },
      {
        id: "mevsim-rota-karsilastirma",
        heading: "Mevsime Göre Detaylı Rota Karşılaştırması",
        paragraphs: [
          "Yaz: Kaş Kaputaş, Ayvalık Cunda, Olympos Adrasan, Datça Palamutbükü, Gökçeada Aydıncık. Kış: Abant Gölü, Kartepe, Yusufeli yaylaları (ileri seviye). Sonbahar: Kazdağı Edremit, Kalkan Bezirgan Yaylası.",
          "Mevsim dışı rota seçimi hem konfor hem güvenlik riski taşır; kış ekipmanı olmadan Abant ocak ayında kamp yapmak tehlikelidir. Yaz ekipmanıyla Kartepe kış kampı denemek de ciddi sağlık riski oluşturur.",
          "Yaz kampı daha hafif ekipman, daha uzun gün ışığı ve daha geniş rota seçeneği sunar. Kış kampı teknik bilgi, pahalı ekipman ve hava koşullarına uyum gerektirir; yeni başlayanlar için yaz ve geç sonbahar daha uygundur.",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "mevsim-ekipman-tablo",
        heading: "Mevsim-Ekipman Eşleştirme Özeti",
        paragraphs: [
          "Yaz deniz kenarı: 3 mevsim çadır, +10°C tulum, R2–3 mat, güneş kremi, 3L+ su/gün. Yaz orman (Kartepe, Olympos): böcek kovucu, hafif yağmurluk, +5°C tulum. Kış (Abant, Kartepe): 4 mevsim çadır, -10°C tulum, R5+ mat, termos, katmanlı giyim.",
          "Geçiş mevsimi (mayıs, eylül) her iki dünyanın ekipmanını birleştirir: gündüz ince tişört, gece polar veya termal içlik. Yusufeli gibi yüksek rakım rotalarında yaz ortasında bile gece sıcaklığı 5°C altına inebilir; +5°C tulum minimum gereksinimdir.",
          "Mevsim dışı ekipman seçimi ciddi sağlık riski taşır: Abant ocak ayında 3 mevsim çadırla kamp hipotermi riski yaratır. Yaz ekipmanıyla Kartepe kış kampı denemek de aynı şekilde tehlikelidir; rota ve ekipman eşleşmesi güvenliğin temelidir.",
          "Türkiye'de en uzun kamp sezonu Ege kıyısında nisan-ekim arasıdır; Kaş, Ayvalık ve Datça bu pencerede en geniş rota seçeneğini sunar. İç bölgeler (Abant, Kartepe) ise yıl boyunca erişilebilir olsa da kış aylarında ekipman gereksinimi belirgin artar.",
        ],
      },
      {
        id: "mevsim-ekipman-karsilastirma-tablo",
        heading: "Mevsim Ekipman Karşılaştırma Tablosu",
        paragraphs: [
          "YAZ KAMPİ — Çadır: 3 mevsim, hafif, iyi havalandırmalı. Uyku tulumu: +10°C ile +5°C konfor. Mat: R2–3. Giyim: ince katman, güneş kremi, şapka. Ekstra: böcek kovucu, 3L+ su/gün, hafif yağmurluk.",
          "KIŞ KAMPİ — Çadır: 4 mevsim, düşük profilli, rüzgâr dirençli. Uyku tulumu: -10°C veya altı konfor. Mat: R5+. Giyim: termal içlik, polar, rüzgâr kesici, bere, eldiven. Ekstra: termos, el ısıtıcı, kuru giysi yedeği.",
          "GEÇİŞ MEVSİMİ (mayıs, eylül) — Çadır: 3 mevsim. Uyku tulumu: +5°C konfor. Mat: R3–4. Giyim: gündüz ince, gece polar/termal. Ekstra: yağmurluk, su geçirmez torba, katmanlı sistem. Yüksek rakımda yaz ortasında bile gece +5°C tulum minimum gereksinimdir.",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
          {
            label: "Çadır Seçme Rehberi",
            href: "/rehberler/cadir-secme-rehberi",
          },
        ],
      },
      {
        id: "sicaklik-nem-yonetimi",
        heading: "Sıcaklık ve Nem Yönetimi",
        paragraphs: [
          "Yaz kampında gündüz sıcaklığı 35°C'yi aşabilir; öğle saatlerinde gölgede dinlenme, bol su tüketimi ve açık renk giysi zorunludur. Isı çarpması belirtilerinde (baş dönmesi, bulantı) aktiviteyi durdurun, gölgeye geçin ve sıvı verin.",
          "Kış kampında gece sıcaklığı gündüze göre 15–20°C düşebilir; hipotermi riski ıslak giysi ve rüzgârla hızlanır. Termal içlik, kuru katman ve uyku tulumu konfor derecesi gece minimumunun 5°C altında seçilmelidir.",
          "Nem yönetimi her iki uçta da kritiktir: yaz orman kampında iç çadır yoğuşması, kış ve yağmurlu havada ıslak giysi vücut ısısı kaybını hızlandırır. Havalandırma panellerini açık tutun, ıslak eşyayı çadır dışında kurutun ve su geçirmez torba ile kuru giysi yedeğini koruyun.",
        ],
        links: [
          {
            label: "Kamp Güvenliği Rehberi",
            href: "/rehberler/kamp-guvenligi-rehberi",
          },
        ],
      },
      {
        id: "gece-gunduz-katman-stratejisi",
        heading: "Gece ve Gündüz Katman Stratejisi",
        paragraphs: [
          "Katmanlı giyim (base layer, mid layer, shell) mevsim geçişlerinde en esnek sistemdir. Gündüz aktivite sırasında ince sentetik veya merino tişört teri dışarı taşır; durduğunuzda polar veya hafif yelek ekleyin. Yağmur ve rüzgârda dış kabuk (shell) nem ve rüzgârı keser.",
          "Gece uyku katmanı aktivite giyiminden ayrı tutulmalıdır: terli giysiyle uyumak soğuk gece riskini artırır. Uyku tulumu içinde ince termal içlik yeterlidir; ağır mont tuluma sıkıştırır ve ısı yalıtımını bozar.",
          "Deniz kenarında gün batımından sonra kıyı sıcaklığı hızla düşer; meltem gece serinliği getirir. Orman kampında gündüz gölge serinliği, gece nem artışı farklı katman ihtiyacı yaratır. Çantada her zaman bir 'gece katmanı' (polar veya termal) hazır bulundurun; gündüz çıkardığınız katmanı akşam geri eklemeyi unutmayın.",
        ],
      },
      {
        id: "mevsim-karar-rehberi",
        heading: "Hangi Mevsim Size Uygun? Karar Verme Rehberi",
        paragraphs: [
          "İlk kez kamp yapacaksanız mayıs-haziran veya eylül-ekim geçiş mevsimi en düşük riskli penceredir: hafif ekipman yeterlidir, gece soğuğu yönetilebilir düzeydedir ve gün ışığı planlamayı kolaylaştırır. Kış kampı deneyim ve pahalı ekipman gerektirir; dört mevsim çadır, -10°C tulum ve katmanlı giyim olmadan kış rotasına çıkmayın.",
          "Yaz kampı en geniş rota seçeneğini sunar ancak kalabalık, fiyat artışı ve güneş riski getirir. Deniz kenarı isteyenler yaz ağırlıklı plan yapmalı; orman gölgesi ve yüksek rakım isteyenler geçiş mevsimini tercih etmelidir. Aileler için yaz ve erken sonbahar altyapılı tesislerle daha öngörülebilir bir deneyim sunar.",
          "Mevsim seçimini ekipman bütçesiyle birlikte değerlendirin: yaz seti (3 mevsim çadır, +5°C tulum) giriş maliyeti düşüktür; kış seti yatırımı yüksektir ancak yıl boyunca kullanım imkânı verir. Tek seferlik deneyim için kiralama veya tesisli alan tercih etmek, satın almadan önce test etmek akıllıca bir stratejidir.",
          "Hava durumu tahminini mevsim kararının parçası yapın: ani sıcaklık dalgası yaz rotasında hidrasyon planını, erken kar yağışı kış rotasında erişim planını değiştirir. Esnek tarih seçimi (±1 hafta) mevsim riskini azaltır; katı tarihte kamp planı hava koşullarına uyum gerektirir.",
          "Ekipman kiralama veya tesisli altyapı kullanımı, mevsim dışı deneme yapmadan önce deneyim kazanmanın ekonomik yoludur. İlk kış kampı denemesi rehberli tesis veya deneyimli grup eşliğinde planlanmalıdır.",
        ],
        links: [
          { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
          { label: "Çadır Seçme Rehberi", href: "/rehberler/cadir-secme-rehberi" },
        ],
      },
    ],
    relatedGuides: [
      {
        label: "Deniz Kenarı Kamp Rehberi",
        href: "/rehberler/deniz-kenari-kamp-rehberi",
      },
      {
        label: "Kamp Güvenliği Rehberi",
        href: "/rehberler/kamp-guvenligi-rehberi",
      },
    ],
  },
};
