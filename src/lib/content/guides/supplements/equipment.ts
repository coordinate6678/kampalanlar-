import type { GuideSupplement } from "@/lib/content/guides/merge";

export const equipmentSupplements: Record<string, GuideSupplement> = {
  "kamp-cantasi-hazirlama-rehberi": {
    extraIntro: [
      "Doğru paketleme hem sırt yükünü dengeler hem kamp alanında ekipman bulma süresini kısaltır; aşağıda hafta sonu, deniz kenarı ve dağ rotaları için ayrı paketleme stratejileri ele alınıyor.",
      "Kartepe araç yanı kampı, Assos feribotlu rota ve Yusufeli yürüyüş kampı farklı çanta hacmi ve ağırlık limitleri gerektirir; her senaryo için örnek liste sunulur.",
      "Renk kodlu paketleme ve araç bagajı düzeni ayrı bölümlerde adım adım açıklanır.",
      "Hafta sonu, deniz kenarı ve dağ rotası için örnek çanta listeleri somut ekipman adlarıyla sunulur.",
      "Paketleme hataları ve ağırlık optimizasyonu pratik örneklerle açıklanır.",
      "Kamp öncesi son kontrol adımları rehberin sonunda listelenir.",
      "Süreye göre paketleme listeleri (1 gece, 3 gece, 1 hafta) checklist formatında sunulur; her liste ağırlık ve hacim hedefleriyle birlikte okunmalıdır.",
      "Ağırlık tavanı, dry bag düzeni ve grup ekipman paylaşımı paketleme verimliliğini doğrudan etkiler.",
    ],
    sections: [
      {
        id: "cantaya-gore-rota",
        heading: "Rotaya Göre Çanta İçeriği Planlaması",
        paragraphs: [
          "Hafta sonu kaçamağı için minimum liste: çadır, mat, tulum, ocak, 1 tencere, su matarası (2L), kafa lambası, ilk yardım, powerbank. Uzun rotalarda navigasyon, su arıtma ve yedek giysi eklenir.",
          "Deniz kenarı rotalarında (Assos, Ayvalık, Kaş) rüzgâr ipi, kum torbası, güneş kremi ve bol su stoku zorunlu katmanlardır. Dağ rotalarında (Yusufeli, Kazdağı) termal içlik, bere ve su arıtma tableti çantaya eklenmelidir.",
          "Yiyecekleri ayrı su geçirmez torbada taşıyın; sıvı sızıntısı diğer ekipmanı bozar. Buz aküsü ve soğutucu yaz kampında et ve süt ürünleri için gereklidir; Abant ve Kartepe gibi iç bölgelerde buz erime süresi daha uzundur.",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "agirlik-dagilimi-detay",
        heading: "Ağırlık Dağılımı ve Ergonomi",
        paragraphs: [
          "En ağır eşyalar (su, ocak, tencere) sırt çantasının ortasına ve kalçaya yakın konumlandırılır. Hafif ve sık kullanılan eşyalar (yağmurluk, atıştırmalık, harita) üst ceplere yerleştirilir.",
          "Çadır genellikle dış cebe veya alt bağlama noktasına takılır; ağırlığı dengelemek için mat karşı tarafa konur. Toplam ağırlık vücut ağırlığının %20'sini aşmamalıdır; 70 kg bir kişi için maksimum 14 kg sırt yükü hedeflenir.",
          "Su ağırlığı rotaya göre değişir: Datça ve Gökçeada gibi su kaynağı sınırlı koylarda kişi başı 6–8 litre stok planlayın. Kartepe ve Abant gibi tesisli alanlarda 2–3 litre yeterlidir.",
        ],
        subsections: [
          {
            id: "sirt-cantasi-hacim",
            heading: "Sırt Çantası Hacim Seçimi",
            paragraphs: [
              "40–55 litre sırt çantası hafta sonu kaçamağı için yeterlidir. Uzun rotalar ve kış ekipmanı için 60–70 litre tercih edilmelidir. Kabak Koyu gibi yürüyüş gerektiren rotalarda hafif ve kompakt paketleme kritiktir.",
              "Sıkıştırma torbaları (dry bag) giysi ve uyku tulumu hacmini %30–40 azaltır. Renk kodlu torbalar (kırmızı: ilk yardım, mavi: mutfak, yeşil: giysi) kamp alanında arama süresini kısaltır.",
            ],
            links: [
              {
                label: "Sırt Çantası Rehberi",
                href: "/kamp-ekipmanlari/sirt-cantasi",
              },
            ],
          },
          {
            id: "arac-bagaji-duzen",
            heading: "Araç Bagajında Düzen",
            paragraphs: [
              "Büyük aile çadırları genellikle bagajda taşınır; çadır, mat ve tulum ayrı torbalarda düzenlenmelidir. Kamp kurulmadan önce çantayı araç bagajından alırken checklist kullanın; unutulan mat veya kazık geceyi zorlaştırır.",
              "Ağır eşyaları bagaj tabanına, hafif eşyaları üste yerleştirin. Buz aküsü ve soğutucu bagaj tabanında sabitlenmeli; virajlarda kayma riski azaltılır.",
            ],
          },
        ],
      },
      {
        id: "cantada-duzen-detay",
        heading: "Kamp Alanında Çanta Düzeni ve Erişim",
        paragraphs: [
          "Kamp kurulduktan sonra çantayı çadır girişine yakın, su geçirmez örtü üzerinde konumlandırın. Sık kullanılan eşyalar (kafa lambası, yağmurluk, atıştırmalık) üst cepte erişilebilir tutulmalıdır.",
          "Gece acil durumda çantaya ulaşım kolay olmalıdır; kafa lambası ve ilk yardım çantası her zaman en üst cepte bulunmalıdır. Değerli eşyalar çantada değil, araçta kilitli bölmede saklanmalıdır.",
          "Kamp dönüşünde çantayı boşaltarak temizleyin; kum, toprak ve nem uzun vadede fermuar ve kumaş ömrünü kısaltır. Çadırı kuruyarak kurutun; nemli saklama küf oluşumuna yol açar.",
        ],
      },
      {
        id: "mevsim-canta-icerik",
        heading: "Mevsime Göre Çanta İçeriği Detayları",
        paragraphs: [
          "Yaz: hafif giysi, bol su (3L+/gün), güneş kremi (SPF 50+), böcek kovucu, ince polar. Kış: ekstra katman, termos, el ısıtıcı, kuru çorba, bere, eldiven. Geçiş mevsimi: yağmurluk ve polar her zaman çantada olmalıdır.",
          "Deniz kenarı rotalarında (Assos, Datça, Gökçeada) rüzgâr kesici ve ekstra gerdirme ipi zorunlu katmanlardır. Dağ rotalarında (Yusufeli Altiparmak) termal içlik, bere ve offline harita eklenmelidir.",
          "Kamp gününden bir gece önce checklist ile hazırlık yapın; sabah aceleyle paketleme eksik ekipmana yol açar. Yola çıkmadan 1 saat önce son kontrol listesini gözden geçirin.",
        ],
        links: [
          {
            label: "Yaz Kampı vs Kış Kampı",
            href: "/rehberler/yaz-kampi-vs-kis-kampi",
          },
        ],
      },
      {
        id: "cantada-ornek-liste",
        heading: "Örnek Hafta Sonu Çanta Listesi",
        paragraphs: [
          "Kartepe hafta sonu örneği: 3 mevsim çadır (bagaj), mat, +5°C tulum, ocak + 2 kartuş, 1 tencere, 3L su, kafa lambası + yedek pil, ilk yardım, powerbank, yağmurluk, polar, market stoku (2 öğün). Toplam sırt yükü 8–12 kg hedeflenir.",
          "Assos deniz kenarı örneği: yukarıdaki listeye rüzgâr ipi, kum torbası, güneş kremi (SPF 50+), 6L su stoku ve caretta caretta alanı için kırmızı kafa lambası eklenir. Feribot gecikmesine karşı atıştırmalık stoku artırılmalıdır.",
          "Yusufeli dağ rotası örneği: 4 mevsim çadır, -10°C tulum, R5+ mat, termal içlik, bere, offline harita, su arıtma tableti, 4L+ su. Bu rota hafta sonu kaçamağından ziyade 2–3 günlük teknik kamp gerektirir; çanta hacmi 60–70 litreye çıkar.",
          "Çanta hazırlığında ağırlık dağılımını evde test edin: 30 dakikalık yürüyüş sırt ağrısı yaratıyorsa paketlemeyi yeniden düzenleyin. Kartepe gibi araç yanı kampında ağır eşyaları bagajda tutmak sırt yükünü 5–8 kg'a indirir.",
          "Assos feribotlu rotada el bagajında su ve atıştırmalık bulundurun; feribot gecikmelerinde açlık ve susuzluk riski artar. Yusufeli rotasında su arıtma tableti ve yedek filtre çanta listesinin vazgeçilmez maddesidir.",
        ],
      },
      {
        id: "packing-1-gece",
        heading: "1 Gece Kampı Paketleme Listesi",
        paragraphs: [
          "Tek gece kaçamağı minimum ekipmanla yapılabilir; araç yanı kampında ağır eşyalar bagajda kalır. Aşağıdaki liste 2 kişilik 1 gece için temel çerçeveyi sunar; mevsime göre giyim katmanlarını ekleyin.",
        ],
        checklist: [
          "3 mevsim çadır + kazık + ip + zemin örtüsü",
          "Uyku matı (R2–3) ve +5°C tulum",
          "Ocak + 1 kartuş + 1 tencere",
          "Su matarası (kişi başı 2–3L)",
          "Kafa lambası + yedek pil",
          "İlk yardım çantası + powerbank",
          "Market stoku (2 öğün + atıştırmalık)",
          "Yağmurluk ve ince polar",
        ],
      },
      {
        id: "packing-3-gece",
        heading: "3 Gece Kampı Paketleme Listesi",
        paragraphs: [
          "Üç gece konaklamada yedek giysi, ekstra yakıt ve gıda stoku zorunlu hale gelir. Su stokunu rota altyapısına göre planlayın; musluk suyu sınırlı alanlarda kişi başı günde 3–4 litre hedefleyin.",
        ],
        checklist: [
          "1 gece listesindeki tüm barınma ve mutfak ekipmanı",
          "Yedek ocak kartuşu ve ek tencere/kapak",
          "Kişi başı 9–12L su veya su arıtma tableti",
          "2 set iç çamaşırı ve yedek çorap",
          "Biyobozunur deterjan ve hızlı kuruyan havlu",
          "Güneş kremi, böcek kovucu, şapka (yaz)",
          "Offline harita ve yedek powerbank",
          "Çöp torbası ve kuru torba (dry bag)",
        ],
      },
      {
        id: "packing-1-hafta",
        heading: "1 Hafta Kampı Paketleme Listesi",
        paragraphs: [
          "Bir haftalık kamp uzun süreli konfor ve bakım ekipmanı gerektirir. Ağırlık dağılımını haftalık yeniden düzenleyin; tüketilen gıda ve yakıt yerine temiz su ve kuru giysi eklenmelidir.",
        ],
        checklist: [
          "3 gece listesindeki tüm maddeler",
          "Ekstra tulum liner veya yedek iç katman",
          "Tam mutfak seti (tava, kesim tahtası, sünger)",
          "Kişisel hijyen kiti (diş fırçası, sabun, tuvalet kağıdı)",
          "Onarım seti (duct tape, ip, yedek kazık)",
          "7 günlük gıda planı + acil enerji barı stoku",
          "Solar şarj veya 2. powerbank",
          "Mevsime göre termal içlik / yağmurluk / güneş koruma",
        ],
        links: [
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "packing-prensipler-ozet",
        heading: "Paketleme Prensipleri ve Ağırlık Yönetimi",
        paragraphs: [
          "Süre uzadıkça çanta hacmi katmanlı büyür: bir gece için 40–45 litre yeterliyken bir haftada 55–65 litre gerekebilir. En ağır parçalar (su, ocak, tencere) sırt çantasının orta-alt bölgesine, sık kullanılan eşyalar üst ceplere yerleştirilir.",
          "Dry bag sistemi hem hacim kazandırır hem yağmurda koruma sağlar: renk kodlu torbalar (kırmızı ilk yardım, mavi mutfak, yeşil giysi) kamp alanında arama süresini kısaltır. Checklist'i yazdırıp paketleme sırasında işaretleyin.",
          "Gıda planını süreyle eşleştirin: kısa kaçamakta taze gıda, uzun rotada kuru ve dayanıklı gıda ağırlıklı stok. Buz ve soğutucu üç günü aşan konaklamalarda yenilenmeli; termos ve kuru gıda yedek planı her sürede bulunmalıdır.",
          "Kamp sonrası çanta düzenini gözden geçirin: kullanılmayan eşya çıkarılmalı, eksik madde listeye eklenmelidir. Deneyim arttıkça gereksiz 'just in case' eşyalar azalır.",
          "Hafta sonu kaçamaklarında ağırlık optimizasyonu konforu doğrudan etkiler: gereksiz kıyafet katmanı, fazla tencere ve ağır güneş kremi şişesi çıkarılabilir. Her seferinde çantayı tartmak farkındalık yaratır.",
        ],
        links: [
          { label: "Sırt Çantası Rehberi", href: "/kamp-ekipmanlari/sirt-cantasi" },
        ],
      },
      {
        id: "packing-hata-onleme",
        heading: "Paketleme Hataları ve Optimizasyon",
        paragraphs: [
          "En sık paketleme hataları: ağır suyu üst cebe koymak, çadırı sırt çantası içine sıkıştırmak (dış bağlantı daha dengeli), yağmurluğu en alta gömmek. Her hata yürüyüş ve kurulum stresini artırır.",
          "Ağırlık taraması yapın: her eşyayı tartıp 'gerekli / lüks / gereksiz' diye etiketleyin. İkinci kamp sonrası çanta genelde 1–2 kg hafifler; deneyim gereksiz eşyayı eler.",
          "Grup kampında ortak ekipman (ocak, tencere, ilk yardım) paylaşımı kişi başı ağırlığı düşürür. Paylaşım listesini yola çıkmadan yazılı netleştirin.",
        ],
      },
      {
        id: "cantaya-gore-son-kontrol",
        heading: "Süreye Göre Son Kontrol Özeti",
        paragraphs: [
          "Bir gece kaçamağında çanta hacmi 40–45 litre yeterlidir; üç gece rotasında yedek giysi ve gıda stoğu eklenir; bir haftalık turda su arıtma, yedek pil ve tam ilk yardım seti zorunludur. Her süre diliminde ağırlık tavanını tartarak doğrulayın.",
          "Kamp sonrası çantayı boşaltıp kurutun; nemli saklama küf ve koku oluşturur. Kullanılmayan eşyayı bir sonraki listeden çıkarın; deneyim paketlemeyi her seferinde sadeleştirir.",
        ],
      },
    ],
    relatedGuides: [
      {
        label: "Kamp Ekipmanları Kontrol Listesi",
        href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
      },
      {
        label: "Yaz Kampı vs Kış Kampı",
        href: "/rehberler/yaz-kampi-vs-kis-kampi",
      },
    ],
  },

  "cadir-secme-rehberi": {
    extraIntro: [
      "Çadır seçimi kamp türü, mevsim ve kişi sayısına göre yapılmalıdır; aşağıda Türkiye'nin farklı coğrafyalarına uygun modelleri teknik kriterlerle karşılaştırıyoruz.",
      "Assos meltemi, Abant kar fırtınası ve Olympos orman neminde aynı çadır farklı performans gösterir; su sütunu değeri, gerdirme noktası sayısı ve mevsim etiketi seçim kriterleridir.",
      "Satın alma öncesi kurulum testi ve bakım ipuçları rehberin son bölümünde yer alır.",
      "Meltem, kış fırtınası ve orman nemine karşı model seçimi rotaya göre ayrı ayrı değerlendirilir.",
      "Bütçe aralığı ve garanti koşulları satın alma bölümünde karşılaştırılır.",
      "Kişi sayısı, mevsim etiketi ve flysheet malzemesi kararını birlikte belirler; tek kriter yeterli değildir.",
      "Kurulum süresi ve gerdirme noktası sayısı sahada performansı doğrudan etkiler.",
    ],
    sections: [
      {
        id: "cadir-turleri-detay",
        heading: "Çadır Türleri, Kapasite ve Kurulum",
        paragraphs: [
          "2, 3 ve 4 kişilik çadırlar kişi kapasitesine göre ayrılır; 2 kişilik etiketli çadırda ekipman paylaşımı için alan sınırlıdır. 3 mevsim çadırlar ilkbahar-yaz-sonbahar için uygundur; 4 mevsim modeller kış ve yüksek rakım için tasarlanmıştır.",
          "Pop-up çadırlar hızlı kurulum sunar ancak rüzgâra dayanıklılığı sınırlıdır; Assos meltemi gecelerinde tercih edilmemelidir. Tünel ve kubbe tipi çadırlar meltem gecelerinde daha stabil kalır; en az 4 gerdirme noktası olan modelleri tercih edin.",
          "İlk kurulumu evde deneyin; sahilde gece pratik yapmaktan kaçının. Kuru çadırı iyice havalandırıp evde saklayın; nemli saklama küf oluşturur.",
        ],
        links: [
          {
            label: "Çadır Ekipman Rehberi",
            href: "/kamp-ekipmanlari/cadir",
          },
        ],
      },
      {
        id: "teknik-ozellikler-detay",
        heading: "Su Geçirmezlik, Havalandırma ve Zemin",
        paragraphs: [
          "Su sütunu değeri (mm) yağmur geçirmezliğini gösterir; 2000 mm flysheet ve 3000 mm+ zemin Türkiye koşulları için yeterlidir. Çift katmanlı (iç + flysheet) yapı yoğuşmayı önler; mesh paneller yaz sıcaklarında içerideki nemi azaltır.",
          "Yağmurlu havada flysheet ile iç çadır arasına dokunmayın; su sızıntısı olur. Zemin örtüsü (footprint) çadır tabanını çizilmeye ve nem geçişine karşı korur; kum zeminli rotalarda (Assos, Ayvalık) özellikle önemlidir.",
          "Kazık ve iplerin yedek setini çantada bulundurun; kayalık zeminlerde (Kaş Kaputaş, Yusufeli) plastik kazık kırılabilir. Geniş plastik kazık kum zeminde daha etkilidir.",
        ],
        subsections: [
          {
            id: "meltem-cadir",
            heading: "Meltem İçin Çadır Seçimi",
            paragraphs: [
              "Deniz kenarı rotalarında (Assos, Ayvalık, Kaş, Datça) 3 mevsim çadır, sağlam kazık sistemi ve en az 6 gerdirme noktası zorunludur. Düşük profilli tünel çadırlar meltem gecelerinde kubbe tipine göre daha stabil kalır.",
              "Korunaklı koy seçimi (Datça Hayıtbükü, Gökçeada Kuzu Koyu) çadır performansını belirgin artırır; açık kıyılarda en iyi çadır bile melteme dayanmakta zorlanabilir.",
            ],
            links: [
              {
                label: "Deniz Kenarı Kamp Rehberi",
                href: "/rehberler/deniz-kenari-kamp-rehberi",
              },
            ],
          },
          {
            id: "kis-cadir",
            heading: "Kış Kampı İçin 4 Mevsim Çadır",
            paragraphs: [
              "Abant Gölü ve Kartepe kış kampında dört mevsim çadır zorunludur; gece sıcaklığı -15°C'ye kadar inebilir. Düşük profilli, rüzgâr direnci yüksek modeller kar yağışı ve fırtınada daha stabil kalır.",
              "İç çadırda yoğuşma kış aylarında ciddi nem sorunu yaratır; havalandırma panellerini açık tutun ve uyku tulumu konfor derecesini gece minimum sıcaklığının 5°C altında seçin.",
            ],
            links: [
              {
                label: "Abant Gölü Kampı",
                href: "/kamp-alanlari/bolu/mudurnu/mudurnu-lake-abant-kampi",
              },
            ],
          },
        ],
      },
      {
        id: "rotaya-gore-secim-detay",
        heading: "Türkiye Rotalarına Göre Çadır Seçimi",
        paragraphs: [
          "Deniz kenarı (Assos, Ayvalık, Kaş): sağlam kazık, gerdirme ipi, 3 mevsim, iyi havalandırma. Dağ (Yusufeli, Kazdağı): 4 mevsim, düşük profilli, rüzgâr direnci yüksek. Orman (Kartepe, Olympos): hafif 3 mevsim, hızlı kurulum.",
          "Olympos ve Kabak gibi popüler noktalarda çadır kurulum alanı tesis yönetimince belirlenir; büyük aile çadırları için alan sınırlaması sorulmalıdır. 2 kişilik etiketli çadırda ekipman paylaşımı için 3 kişilik model tercih edilmelidir.",
          "Yusufeli Altiparmak Dağ kamp alanı ileri seviye dağ kampı için uygundur; 4 mevsim çadır, -10°C tulum ve R5+ mat bu rotada minimum gereksinimdir.",
        ],
        links: [
          {
            label: "Assos Kadırga Kamp",
            href: "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp",
          },
          {
            label: "Yusufeli Altiparmak Dağ Kampı",
            href: "/kamp-alanlari/artvin/yusufeli/yusufeli-altiparmak-dag-kampi",
          },
        ],
      },
      {
        id: "cadir-bakim-detay",
        heading: "Çadır Bakımı, Saklama ve Ömür Uzatma",
        paragraphs: [
          "Her kamp dönüşünde çadırı kuruyarak kurutun; nemli saklama küf oluşumuna yol açar ve flysheet su geçirmezliğini kalıcı olarak düşürür. Kum ve toprak zerreciklerini yumuşak fırçayla temizleyin; agresif temizlik kumaşa zarar verir.",
          "Flysheet dikiş noktalarına periyodik su geçirmezlik spreyi uygulayın; özellikle 2+ yıllık çadırlarda yağmur geçirmezliği zamanla azalır. Kazık ve ip setini yılda bir kontrol edin; UV ışığı naylon ipleri zayıflatır.",
          "Çadır seçiminde bütçe kadar rota uyumu da önemlidir; Assos'ta pop-up çadır, Abant kışında 3 mevsim çadır ciddi konfor ve güvenlik sorunları yaratır.",
        ],
      },
      {
        id: "cadir-marka-budget",
        heading: "Bütçe, Marka Seçimi ve Satın Alma İpuçları",
        paragraphs: [
          "Türkiye kamp pazarında 3 mevsim 2 kişilik çadır fiyatları 3.000–15.000 TL arasında değişir; 4 mevsim modeller 8.000–25.000 TL bandındadır. İlk çadır alımında rota uyumu fiyattan önemlidir: Assos'ta pop-up çadır, Abant kışında 3 mevsim çadır ciddi konfor sorunları yaratır.",
          "Satın almadan önce çadırı kurarak test edin; mağaza içi kurulum flysheet gerdirme sistemini göstermez. Su sütunu değeri, rüzgâr direnci etiketi ve garanti süresi karşılaştırma kriterleridir. İkinci el çadır alımında flysheet dikiş noktalarını ve kazık bütünlüğünü kontrol edin.",
          "Kamp deneyimi arttıkça çadır yükseltmesi mantıklıdır: yaz kıyı kampından dağ rotalarına geçişte 3 mevsimden 4 mevsime geçiş tipik bir ekipman evrimidir. Olympos ve Kabak gibi popüler noktalarda çadır kurulum alanı tesis yönetimince belirlenir; büyük aile çadırları için alan sınırlaması sorulmalıdır.",
          "Türkiye rotalarında en çok tercih edilen kapasite 3 kişilik çadırdır: 2 kişi + ekipman alanı için idealdir. Assos meltemi gecelerinde tünel çadır, Abant kışında kubbe veya geodesic yapı rüzgâr direnci açısından avantaj sağlar.",
          "Olympos vadisinde ağaç gölgesi nem oranını artırır; nefes alan flysheet kumaşı bu rotada yoğuşmayı azaltır. Kabak yamaçlarında rüzgâr yönü akşam saatlerinde değişebilir; en az 6 gerdirme noktalı modeller tercih edilmelidir.",
        ],
      },
      {
        id: "cadir-kisi-sayisi",
        heading: "Kişi Sayısına Göre Çadır Seçimi",
        paragraphs: [
          "Çadır etiketindeki kişi sayısı minimum uyku alanını ifade eder; ekipman paylaşımı için bir kişi fazla kapasite seçmek konforu artırır. 2 kişilik kamp için 3 kişilik çadır, sırt çantası ve ayakkabı için ek alan sağlar.",
          "Aile kampında büyük kubbe veya tünel çadırlar (4–6 kişi) ortak oturma alanı sunar; ancak kurulum alanı ve rüzgâr direnci daha fazla test edilir. Çocuklu ailelerde ayrı küçük çadır yerine tek geniş çadır gece gözetimini kolaylaştırır.",
          "Solo kampçılar için 1–2 kişilik hafif modeller taşınabilirlik avantajı sağlar; yürüyüş kampında çadır ağırlığı toplam yükün önemli kısmını oluşturur. Kişi sayısı arttıkça flysheet yüzeyi ve gerdirme noktası sayısı da artmalıdır.",
        ],
      },
      {
        id: "cadir-mevsim-karsilastirma",
        heading: "Mevsime Göre Çadır Karşılaştırması",
        paragraphs: [
          "3 MEVSİM ÇADIR — İlkbahar, yaz, sonbahar için tasarlanmıştır. Hafif, iyi havalandırmalı, mesh panelli. Kar yükü ve aşırı soğuk için yetersizdir. Türkiye'de deniz kenarı ve orman yaz kampının standart tercihidir.",
          "4 MEVSİM ÇADIR — Kalın flysheet, az mesh, düşük profil. Kış karı, fırtına ve yüksek rakım için uygundur. Ağırlığı ve hacmi 3 mevsime göre %30–50 fazladır. Kış kampı ve dağ rotalarında zorunlu sayılır.",
          "Geçiş mevsiminde yağmur olasılığı yüksektir; 3 mevsim çadırın su sütunu değeri (2000 mm+ flysheet) yeterli olmalıdır. Kış ekipmanı olmadan 3 mevsim çadırla kış kampı hipotermi riski yaratır.",
        ],
        links: [
          {
            label: "Yaz Kampı vs Kış Kampı",
            href: "/rehberler/yaz-kampi-vs-kis-kampi",
          },
        ],
      },
      {
        id: "cadir-malzeme-karsilastirma",
        heading: "Malzeme Karşılaştırması: Polyester, Nylon ve Pole",
        paragraphs: [
          "POLYESTER FLYsheet — UV direnci yüksek, fiyat/performans dengesi iyi. Biraz ağır olabilir. Türkiye güneşinde uzun ömürlü; deniz kenarı rotalarında yaygın tercih.",
          "NYLON FLYsheet — Hafif, paket hacmi küçük. Dikkatli kullanım gerektirir; UV'de zamanla zayıflar. Yürüyüş ve hafif kamp için ideal; düzenli bakım şarttır.",
          "ALÜMİNYUM KAZIK — Orta ağırlık, iyi dayanıklılık, uygun fiyat. Çoğu 3 mevsim çadırda standart. KARBON / DAC KAZIK — Ultra hafif, pahalı, yürüyüş kampında tercih edilir. Fırtına anında alüminyum daha toleranslı olabilir.",
          "Zemin naylonu kalınlığı (denier) ve su sütunu değeri (3000 mm+) çadır ömrünü belirler. Kum ve kayalık zeminlerde footprint kullanımı taban kumaşını korur.",
        ],
        links: [
          {
            label: "Çadır Ekipman Rehberi",
            href: "/kamp-ekipmanlari/cadir",
          },
        ],
      },
      {
        id: "cadir-satin-alma-ozet",
        heading: "Çadır Seçiminde Son Kontrol Soruları",
        paragraphs: [
          "Satın almadan önce şu soruları yanıtlayın: Kaç kişi ve ne kadar ekipman paylaşımı? Hangi mevsimlerde kullanılacak? Ağırlık mı dayanıklılık mı öncelikli? Kurulum süresi ve tek kişi kurulumu mümkün mü?",
          "Giriş seviyesi çadırlar hafta sonu yaz kampı için yeterli olabilir; fırtına, kar ve yüksek rakım için üst segment veya dört mevsim model gerekir. Fiyat farkı genelde flysheet kalınlığı, kazık sayısı ve havalandırma detaylarından gelir.",
          "İlk kurulumu evde yapın: kazık sayısını sayın, gerdirme noktalarını öğrenin, eksik parça varsa iade sürecini başlatın. Çadır torbasına yedek ip ve plastik kazık eklemek uzun vadede kurtarıcıdır.",
          "Bakım çadır ömrünü belirler: kuru saklama, UV'den koruma, flysheet ve zemin temizliği. Nemli çadırı katlamak küf riski yaratır; her kamp sonrası havalandırma zorunludur.",
        ],
      },
      {
        id: "cadir-kurulum-performans",
        heading: "Kurulum ve Sahada Performans",
        paragraphs: [
          "Kurulum süresi gece varış planında belirleyicidir: tünel çadır 10–15 dakika, pop-up 2–5 dakika, geodesic 15–25 dakika. İlk kurulumu evde ölçün; gece hedefinizin iki katı süre ayırın.",
          "Gerdirme noktası sayısı fırtına performansını belirler: minimum 4 kazık + 4 gerdirme; deniz kenarında 6+ nokta tercih edilir. Kazık açısı dışa doğru 45° daha iyi tutuş sağlar.",
          "İç çadır havalandırması kapalıyken yoğuşma artar; gece uyanınca nemli duvarlar normaldir ancak damla birikimi uyku tulumunu ıslatır. Flysheet ile iç çadır arasına dokunmayın.",
        ],
      },
      {
        id: "cadir-bakim-depolama",
        heading: "Çadır Bakımı ve Depolama",
        paragraphs: [
          "Her kamp sonrası çadırı kuruyarak kurutun; nemli katlama küf ve koku oluşturur. Flysheet ve zemin naylonunu hafif deterjanla silin; UV koruyucu sprey uzun vadede kumaş ömrünü uzatır.",
          "Kazık ve iplerde çatlak veya aşınma kontrolü yapın; fırtına öncesi zayıf parçayı değiştirmek gece güvenliğini artırır. Çadır torbasına yedek ip ve plastik kazık eklemek pratik bir alışkanlıktır.",
        ],
      },
    ],
    relatedGuides: [
      {
        label: "Deniz Kenarı Kamp Rehberi",
        href: "/rehberler/deniz-kenari-kamp-rehberi",
      },
      {
        label: "İlk Kez Kamp Rehberi",
        href: "/rehberler/ilk-kez-kamp-rehberi",
      },
    ],
  },

  "kamp-ekipmanlari-kontrol-listesi": {
    extraIntro: [
      "Kontrol listesi kamp türüne göre uyarlanmalıdır; deniz kenarı, dağ ve kış kampı ek maddeler gerektirir ve aşağıdaki bölümlerde her senaryo ayrı ayrı ele alınır.",
      "Kartepe hafta sonu, Assos deniz kenarı ve Abant kış kampı için ayrı checklist varyasyonları bu rehberde adım adım listelenir; yazdırılabilir format olarak kullanılabilir.",
      "Barınma, mutfak, giyim ve güvenlik kategorileri genişletilmiş checklist maddeleriyle ayrı bölümlerde sunulur.",
      "Dijital ve basılı checklist kullanımı, grup sorumluluğu ve kamp sonrası revizyon adımları rehberin sonunda özetlenir.",
    ],
    sections: [
      {
        id: "barinma-detay",
        heading: "Barınma ve Uyku: Detaylı Kontrol",
        paragraphs: [
          "Çadır, kazık, gerdirme ipi, zemin örtüsü, uyku matı, uyku tulumu ve yastık barınma setinin temelini oluşturur. Çadır kurulumunu evde test edin; gece karanlığında ilk kurulum stresli olabilir.",
          "Uyku matı R-değeri mevsime uygun seçilmelidir: yaz için R2–3, kış için R5+. Uyku tulumu konfor derecesi gece minimum sıcaklığının 5°C altında olmalıdır; Abant kışında -10°C tulum zorunludur.",
          "Deniz kenarı rotalarında ekstra gerdirme ipi ve kum torbası çadır stabilitesi için kontrol listesine eklenmelidir. Dağ rotalarında termal içlik ve bere zorunlu katmanlardır.",
        ],
        links: [
          {
            label: "Çadır Seçme Rehberi",
            href: "/rehberler/cadir-secme-rehberi",
          },
        ],
      },
      {
        id: "mutfak-su-detay",
        heading: "Mutfak, Su ve Gıda Stoku",
        paragraphs: [
          "Ocak, yedek kartuş, tencere, su matarası ve mutfak gereçleri temel mutfak setidir. Su stokunu rota bazında planlayın: Datça ve Gökçeada'da kişi başı günde 4L+, tesisli alanlarda 2–3L yeterlidir.",
          "Yaz kampında buz aküsü ve soğutucu et ve süt ürünleri için gereklidir. Biyobozunur deterjan ve bulaşık süngeri çevre dostu kampın parçasıdır; doğal su kaynaklarına deterjan dökmeyin.",
          "Yiyecekleri ayrı su geçirmez torbada taşıyın; sıvı sızıntısı diğer ekipmanı bozar. Atıştırmalık, kahvaltılık ve acil durum gıdası (enerji barı) her kamp türünde bulunmalıdır.",
        ],
        links: [
          {
            label: "Kamp Çantası Hazırlama",
            href: "/rehberler/kamp-cantasi-hazirlama-rehberi",
          },
        ],
        subsections: [
          {
            id: "deniz-kenari-ekstra",
            heading: "Deniz Kenarı Ekstra Ekipman",
            paragraphs: [
              "Deniz kenarı kampında rüzgâr ipi, kum torbası, güneş kremi (SPF 50+), bol su ve rüzgâr kesici katman kontrol listesine eklenmelidir. Caretta caretta alanlarında kırmızı kafa lambası zorunludur.",
              "Assos, Datça ve Gökçeada rotalarında musluk suyu sınırlıdır; su stokunu yola çıkmadan önce tamamlayın. Deniz suyuyla temas sonrası tatlı su tüketimi artar.",
            ],
            links: [
              {
                label: "Deniz Kenarı Kamp Rehberi",
                href: "/rehberler/deniz-kenari-kamp-rehberi",
              },
            ],
          },
          {
            id: "kis-ekstra",
            heading: "Kış Kampı Ekstra Ekipman",
            paragraphs: [
              "Kış kampında 4 mevsim çadır, -10°C tulum, termos, el ısıtıcı, bere, eldiven ve yedek katman kontrol listesine eklenir. Abant ve Kartepe kış rotalarında kar yağışı sonrası çadır flysheet temizliği ekipman listesine dahil edilmelidir.",
              "Kış kampında hipotermi riski yüksektir; ıslak giysi hemen değiştirilmeli. Termos sıcak içecek hem moral hem vücut ısısı açısından kritiktir.",
            ],
            links: [
              {
                label: "Yaz Kampı vs Kış Kampı",
                href: "/rehberler/yaz-kampi-vs-kis-kampi",
              },
            ],
          },
        ],
      },
      {
        id: "guvenlik-giyim-detay",
        heading: "Güvenlik, Giyim ve Aydınlatma Detayları",
        paragraphs: [
          "Kafa lambası + yedek pil, ilk yardım çantası, powerbank, yağmurluk, polar/termal içlik ve harita/offline GPS her kamp türünde zorunludur. Acil durum numaralarını (112, 177 orman yangını) telefona kaydedin.",
          "Yusufeli ve Datça iç koyları gibi izole alanlarda telefon çekimi zayıftır; offline harita indirin ve rotayı önceden kaydedin. Düdük acil durum sinyali için taşınmalıdır.",
          "Güneş kremi ve şapka yaz aylarında zorunlu ekipmandır. Böcek kovucu orman rotalarında (Kartepe, Olympos, Yusufeli) önemlidir; kene kontrolünü kamp dönüşünde yapın.",
        ],
        links: [
          {
            label: "Kamp Güvenliği Rehberi",
            href: "/rehberler/kamp-guvenligi-rehberi",
          },
          {
            label: "İlk Yardım Çantası",
            href: "/kamp-ekipmanlari/ilk-yardim",
          },
        ],
      },
      {
        id: "kontrol-oncesi-detay",
        heading: "Yola Çıkmadan Önce Son Kontrol Adımları",
        paragraphs: [
          "Hava durumu 3 günlük tahmin kontrol edildi, tesis rezervasyonu/iletişim yapıldı, market alışverişi tamamlandı, araç lastik ve yakıt kontrol edildi — bu maddeler yola çıkmadan 1 saat önce son kez gözden geçirilmelidir.",
          "Kamp dönüşünde çadırı kuruyarak kurutun; nemli saklama küf oluşumuna yol açar. Ekipman listesini kamp sonrası güncelleyin: hangi madde eksikti, hangi ekipman bir sonraki seferde eklenmeli?",
          "Checklist'i kamp türüne göre uyarlayın; deniz kenarı, dağ ve kış kampı listeleri birbirinden farklı ek maddeler gerektirir. Dijital veya basılı checklist kullanın; hafıza kamp hazırlığında güvenilir değildir.",
        ],
        links: [
          {
            label: "Kartepe Orman Kampı",
            href: "/kamp-alanlari/izmit/kartepe/kartepe-orman-kampi",
          },
        ],
      },
      {
        id: "kontrol-listesi-senaryo",
        heading: "Senaryo Bazlı Kontrol Listeleri",
        paragraphs: [
          "Deniz kenarı senaryosu (Assos, Datça): temel listeye rüzgâr ipi, kum torbası, 6L+ su, güneş kremi, kırmızı kafa lambası (caretta alanları), rüzgâr kesici katman eklenir. Kum zemininde geniş plastik kazık ve footprint zorunludur.",
          "Dağ senaryosu (Yusufeli, Kazdağı): 4 mevsim çadır, -10°C tulum, R5+ mat, termal içlik, bere, offline harita, su arıtma, düdük. Gece sıcaklığı 5°C altına inebilir; hipotermi riskine karşı yedek katman bulundurun.",
          "Kış senaryosu (Abant, Kartepe): kış listesine termos, el ısıtıcı, kar kazığı (çadır flysheet temizliği), yedek battaniye ve 4 mevsim çadır eklenir. Araç bagajında zincir veya kar lastiği kontrol edilmelidir; Abant yolu ocak-şubat'ta buzlanabilir.",
          "Checklist'i yazdırıp çantaya yapıştırın; her maddenin yanına boş kutu bırakın ve yola çıkmadan işaretleyin. İlk kamp sonrası listeyi güncelleyin: Assos'ta unutulan rüzgâr ipi, Abant'ta eksik termos gibi maddeler bir sonraki seferde hatayı önler.",
        ],
      },
      {
        id: "kontrol-listesi-yazdir",
        heading: "Kamp Öncesi Son 24 Saat Kontrolü",
        paragraphs: [
          "Kamp gününden 24 saat önce hava durumu tahminini son kez kontrol edin; yağmur olasılığı %40'ın üzerindeyse yağmurluk ve su geçirmez çanta kapağını listeye ekleyin. Tesisle telefon veya mesajla giriş saatini teyit edin; Olympos ve Kabak gibi popüler noktalarda geç varış park alanı sorununa yol açar.",
          "Market alışverişini kamp günü sabahı değil bir gece önce tamamlayın; taze ekmek, su ve buz aküsü son dakikada unutulma riski taşır. Aracın lastik basıncı, yakıt seviyesi ve feribot rezervasyonu (Assos, Gökçeada) bu aşamada doğrulanmalıdır.",
          "Ekipman çantasında kafa lambası pilleri, ocak kartuşu doluluk kontrolü ve ilk yardım çantası son kullanma tarihi son 24 saatlik kontrol maddeleridir. Çadır kurulumunu evde son kez test edin; eksik kazık veya ip tespiti gece karanlığında sorun yaratır.",
        ],
        links: [
          {
            label: "Kartepe Orman Kampı",
            href: "/kamp-alanlari/izmit/kartepe/kartepe-orman-kampi",
          },
        ],
      },
      {
        id: "barinma-genis-checklist",
        heading: "Barınma: Genişletilmiş Kontrol Listesi",
        paragraphs: [
          "Barınma ekipmanı gece konforunun ve güvenliğin temelini oluşturur. Aşağıdaki liste temel maddeleri tamamlayıcı detayları içerir; mevsime göre tulum konfor derecesi ve mat R-değerini ayarlayın.",
        ],
        checklist: [
          "Çadır (flysheet + iç çadır + kazık + ip + tamir seti)",
          "Zemin örtüsü (footprint) ve ekstra gerdirme ipi",
          "Uyku matı (yaz R2–3, kış R5+)",
          "Uyku tulumu (gece min. -5°C altı konfor)",
          "Tulum liner veya iç çadır (nem yönetimi)",
          "Yastık veya katlanır yastık / kıyafet torbası",
          "Acil battaniye (hafif, çanta içinde)",
          "Çadır tamir bandı (duct tape) ve yedek kazık",
        ],
      },
      {
        id: "mutfak-genis-checklist",
        heading: "Mutfak: Genişletilmiş Kontrol Listesi",
        paragraphs: [
          "Mutfak seti basit tutulabilir ancak su, yakıt ve gıda planlaması ihmal edilmemelidir. Uzun rotalarda yedek kartuş ve su arıtma ekleyin.",
        ],
        checklist: [
          "Ocak + yedek kartuş (3+ gece için 2. kartuş)",
          "Tencere, tava, kapak, tabak, çatal-bıçak, bardak",
          "Su matarası (kişi başı 2–4L/gün) veya arıtma tableti",
          "Kamp soğutucusu ve buz aküsü (yaz)",
          "Ateş çakmağı / çakmak (su geçirmez kılıf)",
          "Biyobozunur deterjan, sünger, çöp torbası",
          "Kesim tahtası ve mutfak bıçağı",
          "Atıştırmalık ve acil enerji barı stoku",
        ],
      },
      {
        id: "giyim-genis-checklist",
        heading: "Giyim: Genişletilmiş Kontrol Listesi",
        paragraphs: [
          "Katmanlı giyim sistemi mevsim geçişlerinde en esnek çözümdür. Terli giysiyle uyumayın; gece için kuru iç katman ayırın.",
        ],
        checklist: [
          "Termal içlik (sentetik veya merino)",
          "Polar veya yelek (mid layer)",
          "Yağmurluk / rüzgâr kesici (shell)",
          "Yedek çorap ve iç çamaşırı (günlük)",
          "Şapka, eldiven, bere (mevsime göre)",
          "Güneş kremi SPF 50+ ve güneş gözlüğü (yaz)",
          "Sandalet (kamp alanı) + yürüyüş ayakkabısı",
          "Hızlı kuruyan havlu veya bandana",
        ],
      },
      {
        id: "guvenlik-genis-checklist",
        heading: "Güvenlik: Genişletilmiş Kontrol Listesi",
        paragraphs: [
          "Güvenlik ekipmanı her kamp türünde zorunludur. Acil numaraları telefona kaydedin; izole alanlarda offline harita indirin.",
        ],
        checklist: [
          "Kafa lambası + yedek pil / şarjlı model",
          "İlk yardım çantası (kişisel ilaçlar dahil)",
          "Powerbank veya solar şarj",
          "Düdük ve acil ayna (sinyal)",
          "Offline harita (Maps.me, Gaia GPS vb.)",
          "112 ve 177 (orman yangını) kayıtlı",
          "Böcek kovucu ve kene pensi (orman)",
          "Su geçirmez torba (elektronik ve kuru giysi)",
        ],
        links: [
          {
            label: "Kamp Güvenliği Rehberi",
            href: "/rehberler/kamp-guvenligi-rehberi",
          },
          {
            label: "İlk Yardım Çantası",
            href: "/kamp-ekipmanlari/ilk-yardim",
          },
        ],
      },
      {
        id: "kontrol-listesi-master-ozet",
        heading: "Kamp Türüne Göre Master Checklist Özeti",
        paragraphs: [
          "Barınma, mutfak, giyim ve güvenlik dört sütun tüm kamp türlerinde geçerlidir; fark kamp türüne göre ek maddelerde ortaya çıkar. Deniz kenarında rüzgâr sabitleme, dağda termal katman, kışta dört mevsim barınma listeye eklenir.",
          "Checklist'i dijital veya basılı kullanın; paketleme sırasında ve yola çıkmadan bir saat önce iki kez gözden geçirin. Grup kampında sorumluluk paylaşımı (A barınma, B mutfak) unutmayı azaltır.",
          "Kamp sonrası checklist güncellemesi rutin haline getirin: hangi madde kullanıldı, hangisi gereksizdi, hangisi eksikti? Bu döngü bir sonraki paketlemeyi hızlandırır ve ağırlığı optimize eder.",
          "Acil durum maddeleri (ilk yardım, düdük, powerbank, offline harita) hiçbir senaryoda listeden çıkarılmamalıdır. Konfor eşyaları (sandalye, masa) araç kampında mantıklı, sırt çantası trekkinginde genelde elenir.",
        ],
        links: [
          { label: "Kamp Ekipmanları Ana Sayfa", href: "/kamp-ekipmanlari" },
        ],
      },
      {
        id: "kontrol-dijital-sablon",
        heading: "Dijital Checklist ve Grup Sorumluluğu",
        paragraphs: [
          "Checklist'i telefon notları veya yazdırılmış kağıt olarak kullanın; hafıza paketlemede güvenilir değildir. Her madde için sorumlu kişi atayın: barınma, mutfak ve güvenlik sorumluları.",
          "Kamp sonrası retrospektif 5 dakika sürer: ne eksikti, ne fazlaydı, ne değişmeli? Bu not bir sonraki checklist revizyonunu besler.",
          "Mevsim geçişlerinde checklist şablonunuzu güncelleyin; yaz listesinden kış listesine geçişte tulum ve çadır değişimi en kritik adımdır.",
        ],
      },
      {
        id: "kontrol-kategori-oncelik",
        heading: "Kategori Önceliklendirme ve Minimum Set",
        paragraphs: [
          "Minimum kamp seti barınma (çadır, mat, tulum), mutfak (ocak, su), güvenlik (lamba, ilk yardım) ve giyim (yağmurluk, katman) dört kategorisinden oluşur. Diğer maddeler konfor ve rota tipine göre eklenir.",
          "Öncelik sırası: güvenlik maddeleri asla listeden çıkarılmaz; konfor eşyaları (sandalye, büyük mutfak seti) araç kampında kalır, sırt çantası trekkinginde elenir. Her kategori için sorumlu kişi atamak unutmayı azaltır.",
        ],
      },
    ],
    relatedGuides: [
      {
        label: "Çadır Seçme Rehberi",
        href: "/rehberler/cadir-secme-rehberi",
      },
    ],
  },
};
