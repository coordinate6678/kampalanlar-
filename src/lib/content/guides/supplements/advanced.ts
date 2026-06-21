import type { GuideSupplement } from "@/lib/content/guides/merge";

export const advancedSupplements: Record<string, GuideSupplement> = {
  "kamp-atesi-rehberi": {
    extraIntro: [
      "Türkiye'de kamp ateşi yalnızca teknik bir beceri değil; mevsimsel yasaklar, çevresel sorumluluk ve yangın riskiyle birlikte değerlendirilmesi gereken bir güvenlik konusudur.",
      "Bu rehber spesifik tesis iddiası içermez; ateş çukuru kurulumu, yasak dönemler, söndürme protokolü ve gaz ocak alternatifini genel prensiplerle açıklar.",
      "Orman yangını sezonunda 177 hattı ve yerel duyurular güncel yasak bilgisinin kaynağıdır; kamp öncesi mutlaka kontrol edilmelidir.",
    ],
    sections: [
      {
        id: "ates-alternatifleri",
        heading: "Ateş Alternatifleri: Ocak ve Isı Yönetimi",
        paragraphs: [
          "Ateş yasağı olan dönemlerde veya rüzgârlı havalarda portatif gaz veya sıvı yakıtlı ocak en güvenli pişirme yöntemidir. Ocak alevini çadırdan ve yanıcı malzemelerden uzak, düz ve taşsız bir zeminde kullanın; rüzgâr kalkanı hem verimi artırır hem alevi kontrol altında tutar.",
          "Isınma amacıyla ateş yerine termal içlik, polar, yün bere ve sıcak içecek taşımak hem daha hafif hem daha güvenlidir. Gece vücut ısısını korumak uyku tulumu konfor derecesi ve mat R-değeriyle doğrudan ilişkilidir; ateşe bağımlı kalmak uyku düzenini bozar.",
          "Mangal kullanımında kömür tamamen grileşene kadar bekleyin; açık alevde pişirme hem yanık riski hem düzensiz ısı dağılımı yaratır. Kül ve kömür artıklarını çevreye bırakmayın; tesisin belirlediği atık noktasına taşıyın veya evde bertaraf edin.",
        ],
        links: [
          { label: "Ocak ve Mangal Rehberi", href: "/kamp-ekipmanlari/ocak-mangal" },
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
        ],
      },
      {
        id: "ates-etik-cevre",
        heading: "Ateş Etik Kuralları ve Çevresel Etki",
        paragraphs: [
          "Kamp alanında canlı ağaç kesmek çoğu bölgede yasaktır; yakacak odunu kamp öncesi satın alın veya tesisin sağladığı izinli kaynakları kullanın. Dalları çekerek koparmak ağaç sağlığına zarar verir; yerdeki kuru dal ve kütük yeterli olmalıdır.",
          "Ateş çevresinde cam şişe, metal kapa ve plastik bırakmak hem görsel kirlilik hem yangın riski taşır; cam güneş ışığıyla kuru otu tutuşturabilir. Leave no trace ilkesi ateş izlerini de kapsar: çukur doldurulmalı, kül dağıtılmamalı, taş halkası eski haline getirilmelidir.",
          "Komşu çadırlara duman ve kıvılcım rahatsızlığı vermek kamp alanı kurallarını ihlal eder. Rüzgâr yönünü değerlendirip ateşi komşulara sırtınızı dönecek şekilde konumlandırın; gece saatlerinde ateş yüksekliğini minimumda tutun.",
        ],
      },
      {
        id: "ates-yakit-secimi",
        heading: "Yakıt Seçimi ve Alev Kontrolü",
        paragraphs: [
          "Kuru odun, kütük ve çalı ayrımı yanma verimini belirler: ince çalı çabuk tutuşur ancak hızlı tükenir; kütük uzun süreli ısı sağlar. Yeşil veya nemli odun duman üretir ve kıvılcım riskini artırır. Yakacak stoğunu kamp alanına varmadan planlayın.",
          "Alev boyutunu ihtiyacınızla sınırlayın: pişirme için orta alev, ısınma için kontrollü küçük alev yeterlidir. Metal ve cam malzemeleri ateşe atmayın; patlama riski taşır. Gaz ocak ile açık ateşi karıştırmayın: ocak çadıra yakın kullanılmamalıdır.",
          "Rüzgârlı havada ateş kurmayın; kıvılcım onlarca metre uzağa taşınabilir. Yangın yasağı ilan edilen günlerde termos, katmanlı giyim ve gaz ocak yedek planı önceden hazır olmalıdır.",
        ],
      },
      {
        id: "ates-kamp-alani-kurallari",
        heading: "Kamp Alanında Ateş Kuralları ve Sorumluluk",
        paragraphs: [
          "Tesis yönetiminin belirlediği ateş alanı dışında alev yakmak çoğu yerde yasaktır. Ortak ateş çukurları varsa paylaşımlı kullanımda sıra ve temizlik kurallarına uyun; kullanım sonrası alanı bir sonraki grup için bırakın.",
          "Gece ateş başında alkol tüketimi dikkat dağınıklığı yaratır; alev kontrolünü tek sorumlu kişiye verin. Çocuklar ateş çevresinde sürekli gözetim altında tutulmalıdır.",
          "Sigara kıstığı ve cam atıklar yangın riskini artırır; tüm atıkları kamp alanından çıkarın. Kamp öncesi il orman müdürlüğü duyurularını kontrol etmek yasal sorumluluğun parçasıdır.",
        ],
      },
      {
        id: "ates-sonrasi-degerlendirme",
        heading: "Kamp Sonrası Ateş Alanı Değerlendirmesi",
        paragraphs: [
          "Ayrılmadan önce ateş alanını son kez kontrol edin: kül soğuk mu, çukur dolduruldu mu, taş halkası eski haline getirildi mi? Elle sıcaklık testi yapmadan alanı terk etmeyin.",
          "Yangın yasağı dönemlerinde alternatif ocak kullanımını değerlendirin; bir sonraki kamp planına bu bilgiyi not edin. Orman müdürlüğü duyurularını takip etmek yasal sorumluluğun parçasıdır.",
          "Grup içinde ateş sorumlusu belirlemek gece güvenliğini artırır; alkol tüketimi ve çocuk gözetimi aynı kişide birleşmemelidir.",
          "Site rehberimizdeki güvenlik rehberi yangın, ilk yardım ve acil iletişim konularını tamamlayıcı olarak sunar.",
        ],
      },
    ],
    relatedGuides: [
      { label: "Kampta Yemek Pişirme Rehberi", href: "/rehberler/kampta-yemek-pisirme-rehberi" },
    ],
  },

  "kampta-yemek-pisirme-rehberi": {
    extraIntro: [
      "Kampta yemek pişirmek ev mutfağından farklıdır: sınırlı malzeme, değişken rüzgâr, hijyen ve yaban hayvanı çekme riski aynı anda yönetilmelidir.",
      "Tek tencere yemekleri, ocak güvenliği ve gıda saklama bu rehberin odak noktalarıdır; marka veya tesis önerisi içermez.",
      "Yiyecek kokusu yaban hayvanlarını çeker; tüm gıdalar çadır dışında kapalı saklanmalıdır.",
    ],
    sections: [
      {
        id: "temel-kamp-tarifleri",
        heading: "Temel Kamp Yemekleri ve Planlama",
        paragraphs: [
          "Tek tencere yemekleri (makarna, pilav, mercimek çorbası) kamp mutfağının omurgasını oluşturur; önceden ölçülmüş baharat ve kuru malzeme paketleri hazırlık süresini kısaltır. Kahvaltıda yulaf, peynir, zeytin ve ekmek kombinasyonu pişirme gerektirmez.",
          "Öğün planını kişi sayısı ve soğutma kapasitesiyle eşleştirin: et ve süt ürünleri ilk gün tüketilmeli, konserve ve kuru gıdalar sonraki günlere bırakılmalıdır. Pişirme süresi kısa tarifler akşam karanlığında stresi azaltır.",
          "Atıştırmalık ve acil gıda stoğu (enerji barı, kuruyemiş) her zaman çantada bulunmalıdır. Uzun yürüyüş veya gecikme durumunda kan şekeri düşüşü performansı etkiler.",
        ],
      },
      {
        id: "yiyecek-yaban-hayvati",
        heading: "Yiyecek Saklama ve Yaban Hayvanı Önlemleri",
        paragraphs: [
          "Yiyecek kokusu yaban hayvanlarını kamp alanına çeker; tüm gıdalar çadır dışında, hava geçirmez kaplarda ve mümkünse asılı torbalarda saklanmalıdır. Açık paketler gece çadır içinde bırakılmamalıdır.",
          "Pişirme sonrası artıklar hemen toplanmalı; bulaşık suyu deterjanla yıkanıp su kaynaklarından uzak alana dökülmelidir. Doğal su kaynaklarına yağ ve yemek artığı karıştırmayın.",
          "Meyve kabukları ve organik atıklar bile hayvan davranışını değiştirir; tüm atıklar tesis noktasına taşınmalı veya geri götürülmelidir.",
        ],
        links: [
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
        ],
      },
      {
        id: "ocak-mangal-kullanim",
        heading: "Ocak ve Mangal Kullanım İpuçları",
        paragraphs: [
          "Gaz ocakta alev sarı-turuncu ve sessiz olmalıdır; turuncu uçlar kararsız yanma ve is üretir. Rüzgâr kalkanı ocak verimini %30'a kadar artırabilir; alev söndürülmemelidir.",
          "Mangal ve kömür kullanımında açık alevde pişirmek yerine kömürün kızıl-gri hale gelmesini bekleyin. Pişirme sonrası kömür tamamen söndürülüp su ile ıslatılmalıdır.",
          "Tek tencere pişirme tekniği (one-pot) bulaşık yükünü azaltır: önce protein, sonra sebze, en son nişasta eklenir. Yağlı yiyecek artıkları yaban hayvanı riskini artırır; kilitli kaplarda saklayın.",
        ],
        links: [
          { label: "Ocak ve Mangal Rehberi", href: "/kamp-ekipmanlari/ocak-mangal" },
          { label: "Kamp Mutfak Seti", href: "/kamp-ekipmanlari/mutfak-gerecleri" },
        ],
      },
      {
        id: "mutfak-hijyen",
        heading: "Kamp Mutfağında Hijyen ve Bulaşık",
        paragraphs: [
          "Çiğ et ve sebze aynı kesim yüzeyinde hazırlanmamalıdır; taşınabilir kesim tahtası ve ayrı bıçak kullanın. Eller pişirme öncesi ve sonrası en az 20 saniye sabunla yıkanmalıdır; su stoku sınırlıysa el dezenfektanı yedekleyin.",
          "Bulaşık suyunu doğal kaynaklara dökmeyin; en az 50 metre uzağa, toprak emecek şekilde dökün. Biyobozunur deterjan tercih edin; plastik sünger parçacıkları çevreye bırakmayın.",
          "Soğutucu ve buz kullanımında iç sıcaklığı 4°C altında tutmaya çalışın; et ve süt ürünleri buz eridikten sonra hızla bozulur. Açılmış konserve 24 saat içinde tüketilmeli veya soğutulmalıdır.",
        ],
      },
      {
        id: "yemek-planlama-stok",
        heading: "Günlük Öğün Planlama ve Stok Yönetimi",
        paragraphs: [
          "Her gün için kahvaltı-öğle-akşam üçlüsünü basit tutun: pişirme gerektirmeyen kahvaltı, tek tencere öğle veya akşam, atıştırmalık yedek. Karmaşık menüler ekipman ve zaman maliyetini artırır.",
          "Baharatları küçük damlalık şişelerde taşıyın; tuz, karabiber, zeytinyağı minimum set oluşturur. Kuru gıda (makarna, pirinç, mercimek) ağırlık/verim açısından en verimli kalori kaynağıdır.",
          "Grup kampında mutfak sorumluluğu rotasyonla paylaşılmalıdır; tek kişiye yüklenmek motivasyonu düşürür. Yemek artıkları gece çadır yakınında bırakılmamalıdır.",
        ],
      },
      {
        id: "yemek-malzeme-saklama-detay",
        heading: "Malzeme Saklama ve Soğutma Stratejisi",
        paragraphs: [
          "Kuru gıdalar (makarna, pirinç, mercimek) hava geçirmez torbalarda taşınmalı; nem bozulmayı hızlandırır. Et ve süt ürünleri soğutucu ve buz aküsü ile ilk 24–48 saatte tüketilmelidir.",
          "Baharat ve yağ küçük şişelerde taşınır; sızıntı riski diğer ekipmanı bozar. Ayrı mutfak torbası (dry bag) pişirme alanında hızlı erişim sağlar.",
          "Konserve açıldıktan sonra 24 saat içinde tüketilmeli veya soğutulmalıdır. Grup kampında ortak mutfak seti paylaşımı hem ağırlık hem bulaşık yükünü azaltır.",
          "Kamp sonrası kalan gıdaları değerlendirin: hangi miktar fazla geldi, hangi tarif pratikti? Bu geri bildirim bir sonraki alışveriş listesini iyileştirir.",
        ],
        links: [
          { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
        ],
      },
    ],
    relatedGuides: [
      { label: "Kamp Ateşi Rehberi", href: "/rehberler/kamp-atesi-rehberi" },
    ],
  },

  "sirt-cantasiyla-kamp-rehberi": {
    extraIntro: [
      "Sırt çantasıyla kamp, her eşyanın ağırlığının doğrudan omuzlarınıza bindiği bir disiplindir; planlama hatası kilometrelerce yürüyüşte bedel ödetir.",
      "Ultralight mantık, su arıtma ve rota planlama ilkeleri genel backpacking bilgisi olarak sunulur.",
      "İlk rotalarda günlük mesafe ve su kaynağı aralığı muhafazakâr planlanmalıdır.",
    ],
    sections: [
      {
        id: "rota-planlama-ilkeleri",
        heading: "Rota Planlama ve Günlük Mesafe",
        paragraphs: [
          "İlk backpacking rotasında günlük mesafeyi 10–12 km ile sınırlayın; deneyim arttıkça 15–20 km mümkün olur. Rakım kazancı mesafeden daha yorucudur; haritada kontur çizgilerine bakarak gerçek zorluğu ölçün.",
          "Su kaynağı rotada belirleyici faktördür: kaynaklar arası mesafe 5 km'yi aşmamalı veya yeterli taşıma kapasitesi planlanmalıdır. Gün batımından en az 2 saat önce kamp kurulum alanına varmayı hedefleyin.",
          "Rota planını bir yakına bildirin: başlangıç noktası, tahmini varış saati, dönüş tarihi. Telefon çekimi zayıf bölgelerde offline harita indirin.",
        ],
        links: [
          { label: "Harita ve Navigasyon", href: "/kamp-ekipmanlari/navigasyon" },
        ],
      },
      {
        id: "su-filtreleme-detay",
        heading: "Su Temini, Arıtma ve Hidrasyon",
        paragraphs: [
          "Doğal su kaynaklarından içmeden önce kaynatma, filtreleme veya kimyasal arıtma uygulanmalıdır. Karışık yöntem en güvenli yaklaşımdır.",
          "Günlük tüketim yürüyüş yoğunluğuna göre 2,5–4 litre arasında değişir; susuzluk belirtilerinde yürüyüşe ara verin.",
          "Su matarası dağılımı: gün içinde erişilebilir şişe, yedek kapasite çantada. Donmuş matara kış rotalarında erişimi zorlaştırır.",
        ],
        links: [
          { label: "Su Matarası ve Arıtma", href: "/kamp-ekipmanlari/su-matri" },
        ],
      },
      {
        id: "ultralight-denge",
        heading: "Ultralight Mantık ve Ağırlık Tavanı",
        paragraphs: [
          "Ultralight kampın temel prensibi: her eşya için 'bu olmadan hayatta kalır mıyım?' sorusudur. Konfor eşyaları (sandalye, büyük mutfak seti) sırt çantası trekkinginde genelde elenir.",
          "Ağırlık tavanı vücut ağırlığının %20'sini aşmamalıdır; deneyimli yürüyüşçüler %15 hedefler. En ağır üç parça genelde çadır, uyku sistemi ve sudur; bu üçünde tasarruf toplam ağırlığı belirgin düşürür.",
          "Çok amaçlı eşya tercih edin: buff (bere/boyunluk), trekking pole (kazık desteği), tencere-kapak kombinasyonu. Her gramın gerekçesi olmalıdır.",
        ],
        links: [
          { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
        ],
      },
      {
        id: "backpacking-kamp-kurulum",
        heading: "Yürüyüş Kampında Kurulum ve LNT",
        paragraphs: [
          "Backpacking kampında iz bırakmama (Leave No Trace) ilkesi zorunludur: çadırı belirlenmiş alana kurun, yeni iz açmayın, tüm atıkları geri götürün. Vahşi kamp izin gerektirebilir; önceden araştırın.",
          "Hafif kurulum hız kazandırır: trekking pole ile hızlı çadır, şişme mat ve mumya tulum kombinasyonu 10 dakika altında kurulum hedefler. Gece varış planlamayın; son ışıkta kurulum streslidir.",
          "Komşu mesafe backpacking alanlarında daha geniştir; gece sessizliği ve kafa lambası yönlendirmesi komşu uyku kalitesini korur.",
        ],
      },
      {
        id: "backpacking-guvenlik",
        heading: "Sırt Çantası Kampında Güvenlik",
        paragraphs: [
          "Yalnız backpacking deneyimli kampçılar içindir; ilk rotalarda grup veya en az bir partner tercih edin. Acil durum planı: rota, varış saati, dönüş tarihi bir yakına bildirilmeli.",
          "Telefon çekimi zayıf bölgelerde offline harita, düdük ve powerbank zorunludur. Hava ani değişiminde çadırı sağlamlaştırın; ultralight çadırlar fırtınada erken sökülebilir.",
          "Yaban hayvanı riskinde yiyecek asma torbası kullanın; çadır içinde gıda bulundurmayın. Kene ve böcek kontrolünü günlük yapın.",
        ],
      },
      {
        id: "backpacking-ekipman-optimizasyon",
        heading: "Ekipman Optimizasyonu ve Deneyim Döngüsü",
        paragraphs: [
          "Her backpacking turundan sonra üç soru sorun: hangi eşya hiç kullanılmadı, hangisi eksik kaldı, toplam ağırlık hedefin altında mıydı? Bu döngü bir sonraki rotayı iyileştirir.",
          "Çadır, uyku sistemi ve su üçlüsü toplam ağırlığın büyük bölümünü oluşturur; tasarruf burada en çok kazandırır. Ultralight herkes için şart değildir; güvenli minimum ağırlık kişisel kondisyona göre belirlenir.",
          "Trekking pole hem yokuş inişinde denge hem çadır kurulum desteği sağlar. Buff, eldiven ve bere gibi küçük parçalar konforu belirgin artırır; ağırlık maliyeti düşüktür.",
          "Site rehberimizdeki ekipman sayfaları sırt çantası, mat ve tulum seçiminde genel karşılaştırma sunar; spesifik marka önerisi yerine segment farklarını okuyun.",
          "İlk backpacking deneyiminde rotayı kısa tutun ve hava durumunu günlük kontrol edin; ani yağmur ultralight ekipmanı zorlar.",
        ],
        links: [
          { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
        ],
      },
    ],
    relatedGuides: [
      { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
    ],
  },

  "aile-ile-kamp-rehberi": {
    extraIntro: [
      "Aile kampı yetişkin kampından farklı tempo, güvenlik katmanı ve ekipman listesi gerektirir; çocukların yaş grubu planın merkezinde olmalıdır.",
      "Güvenlik, eğlence aktiviteleri ve yaş gruplarına göre paketleme genel ilkelerle açıklanır.",
      "Altyapılı tesis seçimi ilk aile kampında stresi belirgin azaltır.",
    ],
    sections: [
      {
        id: "aile-aktivite-fikirleri",
        heading: "Kampta Eğlence ve Doğa Aktiviteleri",
        paragraphs: [
          "Doğa gözlemi (kuş, bitki, böcek tanıma) çocuklar için eğitici ve düşük ekipmanlı bir aktivitedir. Basit skor kartları veya fotoğraf listesi oyunu ilgiyi artırır.",
          "Gün batımı ve yıldız gözlemi aile bağını güçlendirir; kırmızı ışıklı kafa lambası gece görüşünü korur. Gündüz kısa yürüyüş rotaları (1–3 km) çocukların enerjisini tüketir.",
          "Elektronik cihaz kullanımını sınırlamak doğa deneyimini zenginleştirir; kamp günlüğü, harita okuma ve basit pişirme görevleri paylaşımı çocuklara sorumluluk verir.",
        ],
      },
      {
        id: "aile-guvenlik-plani",
        heading: "Aile Acil Durum ve İletişim Planı",
        paragraphs: [
          "Çocuklara tesis sınırlarını, toplanma noktasını ve acil durumda kime başvuracaklarını önceden öğretin. Kaybolma durumunda çocuk yerinde kalmalı ve yüksek sesle yardım istemelidir.",
          "Her aile üyesinin kafa lambası, düdük ve yansıtıcı öğe taşıması gece güvenliğini artırır. İlk yardım çantasında çocuk dozajlı ilaçlar bulunmalıdır.",
          "Tesis yönetimi numarası telefona kaydedilmelidir. Aile kampında grup halinde hareket etmek daha güvenlidir.",
        ],
        links: [
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
          { label: "İlk Yardım Çantası", href: "/kamp-ekipmanlari/ilk-yardim" },
        ],
      },
      {
        id: "aile-paketleme-yas",
        heading: "Yaş Gruplarına Göre Paketleme ve Tempo",
        paragraphs: [
          "0–3 yaş: bebek taşıyıcı, ekstra bez, ıslak mendil, güneş koruması ve altyapılı tesis zorunludur. Gece uyanmaları plana dahil edilmeli; kısa mesafe rotalar tercih edilmelidir.",
          "4–7 yaş: kısa yürüyüş, plaj oyunu, basit görevler (torba taşıma). Ekstra kıyafet, atıştırmalık ve gece lambası. Çocuk uyku tulumu konfor derecesi yetişkinden 5°C yüksek seçilmelidir.",
          "8–12 yaş: harita okuma, doğa gözlemi, hafif ekipman taşıma sorumluluğu verilebilir. Tempo yetişkin rotasının %60–70'i kadar planlanmalıdır.",
          "Tüm yaş gruplarında altyapılı tesis (tuvalet, duş, market) ilk aile kampında stresi azaltır. Site rehberimizdeki il sayfalarından aile uygun tesisleri karşılaştırabilirsiniz.",
        ],
        links: [{ label: "Kamp Alanları", href: "/kamp-alanlari" }],
      },
      {
        id: "aile-konfor-rutin",
        heading: "Aile Kamp Rutini ve Konfor İpuçları",
        paragraphs: [
          "Çocuklar rutin sever: sabah kahvaltı, gündüz aktivite, akşam hikâye veya yıldız gözlemi ritüeli güvenlik hissi verir. Uyku saatini evdeki düzene yakın tutmak ertesi gün yorgunluğunu azaltır.",
          "Gece tuvalet ihtiyacı için kafa lambası ve ayakkabı çadır girişinde hazır bulundurulmalıdır. Çocuklar için tanıdık yastık veya battaniye konforu artırır.",
          "Aile kampında görev paylaşımı (çadır kurma, yemek, toparlama) çocuklara sorumluluk öğretir; yaş grubuna uygun görevler seçilmelidir.",
        ],
      },
      {
        id: "aile-kamp-degerlendirme",
        heading: "Kamp Sonrası Değerlendirme ve Gelişim",
        paragraphs: [
          "Aile kampı sonrası kısa bir değerlendirme yapın: çocuklar neyi sevdi, ne zor geldi, bir sonraki sefer ne değişmeli? Olumlu anıları vurgulamak motivasyonu korur.",
          "Ekipman listesini güncelleyin: çocuk uyku tulumu yeterli miydi, oyun malzemesi fazla mı geldi, ilaç stoğu tam mıydı? Bir sonraki paketleme bu notlara göre sadeleşir.",
          "Tempo bir sonraki sefer için ayarlanabilir: ilk kamp kısa mesafe ve altyapılı tesisle sınırlı kalmalı; olumlu deneyim sonrası süre ve doğallık kademeli artırılır.",
          "Site rehberimizdeki il sayfalarından aile uygun tesisleri karşılaştırabilir; spesifik tesis iddiası yerine mevcut listeye bağlantı verilir.",
          "Yağmur planı hazırlamak aile moralini korur: kapalı aktiviteler, sıcak içecek ve esnek uyku saati stresi azaltır.",
          "Çocuklara kamp kurallarını basit dille anlatın; toplanma noktası ve gece lambası kullanımı güvenlik alışkanlığı oluşturur.",
        ],
        links: [
          { label: "Kamp Alanları", href: "/kamp-alanlari" },
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
        ],
      },
    ],
    relatedGuides: [
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
    ],
  },
};
