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
