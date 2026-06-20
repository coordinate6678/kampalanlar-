import { EQUIPMENT_IMAGES } from "@/data/media/equipment-images";

export interface EquipmentContent {
  image: string;
  intro: string;
  purpose: string;
  paragraphs: string[];
  features: string[];
  tips: string[];
  related: { label: string; href: string }[];
}

export const equipmentIndexContent = {
  intro:
    "Doğru kamp ekipmanı, konforlu ve güvenli bir kamp deneyiminin temelidir. İlk kez kamp yapacaklar için çadırdan uyku tulumuna, ocaktan ilk yardım çantasına kadar her parçanın ne işe yaradığını ve nasıl seçileceğini bu rehberde bulabilirsiniz.",
  paragraphs: [
    "Kamp ekipmanı seçerken önce kamp türünüzü netleştirin: deniz kenarı, orman, dağ veya karavan kampı farklı ihtiyaçlar doğurur. Yaz kıyı kampında hafif çadır ve ince uyku tulumu yeterliyken, Kazdağı veya Kaçkar rotalarında su geçirmez çadır, yüksek R-değerli mat ve dört mevsim tulum şarttır. Ekipmanı tek seferde almak yerine temel setle başlayıp deneyim arttıkça tamamlamak bütçe ve öğrenme açısından daha mantıklıdır.",
    "Temel kamp seti; çadır, uyku matı, uyku tulumu, ocak, mutfak gereçleri, su matarası, aydınlatma ve ilk yardım çantasından oluşur. Bu liste hafta sonu kaçamakları için minimum gereksinimdir. Uzun süreli veya uzak rotalarda navigasyon, su arıtma, katmanlı giyim ve yedek güç kaynağı listeye eklenmelidir. Kaliteli ekipman pahalı görünse de yıllarca kullanılabilir; uyku tulumu ve mat konfor ile uyku kalitesini doğrudan belirler.",
    "Aşağıdaki rehberlerde her ekipmanın işlevi, seçim kriterleri ve pratik kullanım ipuçlarını bulacaksınız. Ekipman rehberlerimizi okuduktan sonra Türkiye'deki kamp alanları listemize göz atarak rotanızı planlayabilirsiniz.",
  ],
};

export const equipmentContent: Record<string, EquipmentContent> = {
  cadir: {
    image: EQUIPMENT_IMAGES.cadir,
    intro:
      "Çadır, kampın en temel barınma ekipmanıdır; rüzgâr, yağmur, güneş ve böceklerden korunarak geceyi güvenle geçirmenizi sağlar.",
    purpose:
      "Çadır; dış ortam koşullarından izole bir yaşam alanı oluşturur, eşyalarınızı korur ve uyku konforunu artırır.",
    paragraphs: [
      "Kamp çadırları kişi kapasitesine (2, 3, 4 kişilik), mevsime (3 mevsim / 4 mevsim) ve kurulum tipine (pop-up, tünel, kubbe) göre ayrılır. 3 mevsim çadırlar ilkbahar–yaz–sonbahar için uygundur; hafif ve havalandırmalıdır. 4 mevsim modeller kış kampı ve yüksek rakımda kar, rüzgâr ve yoğun yağışa dayanıklıdır, ağırlıkları daha fazladır. Deniz kenarında rüzgâra karşı sağlam kazık ve gerdirme ipleri kritik önem taşır.",
      "Çadır seçerken su sütunu değeri (mm) yağmur geçirmezliğini gösterir; 2000 mm ve üzeri Türkiye koşulları için yeterli kabul edilir. Havalandırma pencereleri yaz sıcaklarında içerideki nemi azaltır; çift katmanlı (iç + flysheet) yapı yoğuşmayı önler. Kurulum alanı düz, taşsız ve hafif eğimli olmalı; vadi tabanlarında ani su birikimine dikkat edin.",
      "Olympos, Kabak Koyu ve Assos gibi popüler noktalarda çadır kurulum kuralları tesis yönetimince belirlenir; izin verilen alana kurun ve komşu çadırlara saygılı mesafe bırakın.",
    ],
    features: [
      "Su geçirmez dış örtü (flysheet)",
      "Havalandırma mesh paneller",
      "Kazık, gerdirme ipi ve çadır torbası",
      "Su sütunu değeri ve rüzgâr direnci etiketi",
    ],
    tips: [
      "İlk kurulumu evde deneyin; sahilde gece pratik yapmaktan kaçının.",
      "Zemin örtüsü (footprint) çadır tabanını çizilmeye karşı korur.",
      "Yağmurlu havada flysheet ile iç çadır arasına dokunmayın; su sızıntısı olur.",
      "Kuru çadırı iyice havalandırıp evde saklayın; küf oluşumunu önler.",
    ],
    related: [
      { label: "Uyku Matı", href: "/kamp-ekipmanlari/uyku-mati" },
      { label: "Uyku Tulumu", href: "/kamp-ekipmanlari/uyku-tulumu" },
      { label: "Orman Kamp Alanları", href: "/kategori/orman" },
    ],
  },
  "uyku-tulumu": {
    image: EQUIPMENT_IMAGES["uyku-tulumu"],
    intro:
      "Uyku tulumu, gece vücut ısınızı koruyarak soğukta uyumanızı sağlayan izolasyon ekipmanıdır.",
    purpose:
      "Uyku tulumu vücut ısısını hapseder; dış ortam sıcaklığına göre konfor veya hayati sıcaklık sınırı sunar.",
    paragraphs: [
      "Uyku tulumları konfor sıcaklığı (comfort rating) etiketiyle satılır; bu değer o tulumla rahat uyuyabileceğiniz minimum dereceyi gösterir. Limit sıcaklığı (limit rating) hayatta kalma sınırıdır, konfor için değil. Türkiye'de yaz kampında +5°C veya +10°C tulum yeterliyken, ilkbahar/sonbahar dağ kampında 0°C veya -5°C modeller tercih edilir.",
      "Dolgu malzemesi sentetik veya kuş tüyü (down) olabilir. Sentetik tulum nemde performansını korur ve uygun fiyatlıdır; down tulum hafif ve sıkıştırılabilir ancak ıslanınca ısı yalıtımını kaybeder. Mummy (mumya) kesim ısı verimliliği yüksektir; dikdörtgen kesim daha ferah hareket alanı sunar.",
      "Tulumu çıplak veya ince içlikle kullanmak izolasyonu artırır; aşırı kalın giyinmek terlemeye ve ıslaklığa yol açabilir. Mat kalitesi tulum performansını doğrudan etkiler; soğuk zemin tulumu yetersiz kılar.",
    ],
    features: [
      "Konfor ve limit sıcaklık etiketi",
      "Sentetik veya down dolgu",
      "Sıkıştırma torbası",
      "YKK fermuar ve iç taslak (draft collar)",
    ],
    tips: [
      "Gece minimum sıcaklığının 5°C altında konfor derecesi seçin.",
      "Nemli iklimde sentetik, kuru ve soğuk rotalarda down tercih edin.",
      "Tulumu gün içinde havalandırın; biriken nemi kurutun.",
      "Uzun boy için 'long' versiyonları kontrol edin.",
    ],
    related: [
      { label: "Uyku Matı", href: "/kamp-ekipmanlari/uyku-mati" },
      { label: "Katmanlı Giyim", href: "/kamp-ekipmanlari/giyim" },
      { label: "Kışlık Kamp Alanları", href: "/kategori/kislik" },
    ],
  },
  "uyku-mati": {
    image: EQUIPMENT_IMAGES["uyku-mati"],
    intro:
      "Uyku matı (izolasyon matı), zeminden gelen soğuğu keserek uyku konforunu ve tulum verimliliğini artırır.",
    purpose:
      "Mat hem yalıtım (R-değeri) hem de yastıklama sağlar; sert ve soğuk zeminle vücut arasında tampon oluşturur.",
    paragraphs: [
      "R-değeri (thermal resistance) matın yalıtım gücünü ölçer; R 3–4 yaz kampı, R 5+ kış ve yüksek rakım için uygundur. Köpük matlar ucuz ve dayanıklıdır ancak hacimlidir. Şişme matlar (air pad) konfor ve sıkıştırılabilirlik sunar; delinme riskine karşı yama kiti taşıyın. Self-inflating (kendiliğinden şişen) modeller köpük ve hava dengesi kurar.",
      "Kamp alanında çakıl, taş ve kökler matı deler; zemin temizliği önemlidir. Çadır içinde matın üzerine ince battaniye veya yaprak birikimi mat ömrünü uzatır. Side sleeper (yandan yatan) kampçılar için kalın ve geniş mat konfor farkı yaratır.",
      "Hafif trekking rotalarında ultralight şişme mat tercih edilir; araçla kamp ve karavan parklarında kalın köpük veya yüksek R-değerli mat rahatlık sağlar.",
    ],
    features: [
      "R-değeri veya sıcaklık aralığı etiketi",
      "Köpük, hava veya hibrit yapı",
      "Tamir kiti (şişme matlar için)",
      "Sıkıştırma askısı veya sarma kayışı",
    ],
    tips: [
      "Çadır alanı kurmadan önce zeminde taş ve dal temizleyin.",
      "Şişme matı yavaşça şişirin; aşırı basınç dikişlere zarar verir.",
      "Köpük matı dışarıda oturma minderi olarak da kullanabilirsiniz.",
      "Kış kampında mat üzerine yansıtıcı acil battaniye ekleyin.",
    ],
    related: [
      { label: "Uyku Tulumu", href: "/kamp-ekipmanlari/uyku-tulumu" },
      { label: "Çadır", href: "/kamp-ekipmanlari/cadir" },
      { label: "Dağ Kamp Alanları", href: "/kategori/dag" },
    ],
  },
  "ocak-mangal": {
    image: EQUIPMENT_IMAGES["ocak-mangal"],
    intro:
      "Kamp ocağı ve mangal, açık havada yemek pişirmenin ve sıcak içecek hazırlamanın temel aracıdır.",
    purpose:
      "Ocak kontrollü alevle tencere ve tavada pişirme imkânı verir; gaz, alkol veya katı yakıt modelleri farklı senaryolara uyar.",
    paragraphs: [
      "Gaz ocaklar (kartuşlu veya tüplü) hızlı, temiz ve ayarlanabilir alev sunar; Türkiye'deki kampçılar arasında en yaygın tercihtir. Alkol ocakları hafif ve sessizdir, trekking için uygundur. Katı yakıt tabletleri acil durum setlerinde kullanılır. Mangal alanları olan tesislerde sabit mangal veya taşınabilir kömür mangalı tercih edilir.",
      "Milli park ve orman alanlarında açık ateş yasağı dönemlerini mutlaka kontrol edin; yalnızca izin verilen mangal alanlarında pişirin. Rüzgârlı kıyı kampında rüzgâr kesici (windscreen) ocak verimini artırır ve gaz tüketimini azaltır.",
      "Pişirme seti (tencere, tava, kapak) tek pakette taşınır; çok kişilik gruplarda büyük tencere ve ikinci ocak süreyi kısaltır. Yemek sonrası bulaşık suyunu çevreye dökmeyin; biyobozunur deterjan kullanın.",
    ],
    features: [
      "Gaz, alkol veya çok yakıtlı ocak seçeneği",
      "Rüzgâr kesici ve ocak taşıma çantası",
      "Piezo ateşleme veya çakmak",
      "Pişirme tencere seti",
    ],
    tips: [
      "Yedek gaz kartuşu veya tüp bulundurun.",
      "Ocakı düz, sabit zeminde kullanın; devrilme yangın riski yaratır.",
      "Tüpü ocaktan ayırarak taşıyın; vanadan sızıntı kontrolü yapın.",
      "Yangın yasağı dönemlerinde soğuk yemek ve termos planlayın.",
    ],
    related: [
      { label: "Kamp Mutfak Seti", href: "/kamp-ekipmanlari/mutfak-gerecleri" },
      { label: "Kamp Soğutucusu", href: "/kamp-ekipmanlari/sogutucu" },
      { label: "Deniz Kenarı Kamp", href: "/kategori/deniz-kenari" },
    ],
  },
  aydinlatma: {
    image: EQUIPMENT_IMAGES.aydinlatma,
    intro:
      "Kafa lambası ve el feneri, gece kamp alanında hareket, yemek hazırlama ve acil durumlar için vazgeçilmezdir.",
    purpose:
      "Eller serbest çalışmayı sağlayan kafa lambası ve uzak mesafe aydınlatması için el feneri gece güvenliğini artırır.",
    paragraphs: [
      "Kafa lambası (headlamp) çadır kurulumu, gece tuvalet yürüyüşü ve harita okuma sırasında ellerinizi serbest bırakır. Lumen değeri parlaklığı gösterir; kamp alanı içi 100–200 lumen yeterli, gece yürüyüşü için 300+ tercih edilir. Kırmızı ışık modu gece görüşünü korur ve çadır içinde diğer uyuyanları rahatsız etmez.",
      "El feneri yedek veya grup kullanımı için uygundur. Şarj edilebilir modeller powerbank ile desteklenir; uzun rotalarda yedek pil veya solar şarj düşünün. Su geçirmez (IPX4 ve üzeri) modeller yağmurlu kamp için güven verir.",
      "Gece yürüyüşü yapanlar reflektör veya fosforlu eleman taşımalı; kamp alanında parlak ışığı diğer çadırlara doğru tutmaktan kaçının.",
    ],
    features: [
      "Ayarlanabilir lumen ve kırmızı ışık modu",
      "Pil veya USB şarjlı seçenek",
      "Su geçirmezlik sınıfı (IPX)",
      "Eğilebilir kafa bandı veya klips",
    ],
    tips: [
      "Her zaman yedek pil veya şarjlı powerbank bulundurun.",
      "Gece tuvalet rotasını gündüz keşfedin.",
      "Çadır içinde kırmızı mod kullanın.",
      "Feneri çadır direğine asarak gece lambası yapabilirsiniz.",
    ],
    related: [
      { label: "Powerbank ve Solar", href: "/kamp-ekipmanlari/guc-kaynagi" },
      { label: "Harita ve Navigasyon", href: "/kamp-ekipmanlari/navigasyon" },
      { label: "Orman Kamp Alanları", href: "/kategori/orman" },
    ],
  },
  sogutucu: {
    image: EQUIPMENT_IMAGES.sogutucu,
    intro:
      "Kamp soğutucusu (cooler), yiyecek ve içecekleri güvenli sıcaklıkta tutarak gıda zehirlenmesini önler.",
    purpose:
      "İzole gövde ve buz paketleri ile iç sıcaklığı düşük tutar; taze et, süt ürünleri ve soğuk içecekler için gereklidir.",
    paragraphs: [
      "Hard cooler (sert gövdeli) ve soft cooler (yumuşak termal çanta) seçenekleri vardır. Kapasite litreye göre belirlenir; 2 kişilik hafta sonu için 20–30 litre, aile kampı için 40+ litre uygundur. Buz paketi veya kırık buz kullanımı gıdaları daha uzun süre soğuk tutar; buzu üstte, gıdayı altta konumlandırın.",
      "Soğutucuyu gölgede tutmak ve açılış sıklığını azaltmak performansı artırır. Deniz kenarı kampında kum içine gömülü soğutucu ekstra izolasyon sağlar. Gıdaları hava geçirmez poşetlerde saklayın; eriyen buz suyu çapraz bulaşmayı önler.",
      "Uzun kamp sürelerinde taze gıda yerine kuru gıda, konserve ve yerel market alışverişi planı yapılabilir.",
    ],
    features: [
      "Litrelik kapasite ve taşıma kulpları",
      "Sızdırmaz kapak contası",
      "Buz paketi veya jel buz uyumu",
      "Drain plug (su boşaltma vanası)",
    ],
    tips: [
      "Soğutucuyu evden buz dolu çıkarın; yolculuk süresini hesaba katın.",
      "Sık açılan üst rafa günlük atıştırmalıkları koyun.",
      "Çiğ et ve sebzeyi ayrı poşetlerde saklayın.",
      "Soft cooler kısa süreli plaj ve piknik için yeterlidir.",
    ],
    related: [
      { label: "Kamp Mutfak Seti", href: "/kamp-ekipmanlari/mutfak-gerecleri" },
      { label: "Ocak ve Mangal", href: "/kamp-ekipmanlari/ocak-mangal" },
      { label: "Çeşme Kamp Alanları", href: "/kamp-alanlari/izmir/cesme" },
    ],
  },
  "mutfak-gerecleri": {
    image: EQUIPMENT_IMAGES["mutfak-gerecleri"],
    intro:
      "Kamp mutfak seti; tencere, tava, tabak, bardak ve mutfak araçlarından oluşur ve açık havada düzenli yemek pişirmeyi mümkün kılar.",
    purpose:
      "Hafif ve dayanıklı malzemelerle yemek hazırlama, servis etme ve temizlik işlevlerini yerine getirir.",
    paragraphs: [
      "Titan veya alüminyum tencere setleri hafif ve hızlı ısınır; paslanmaz çelik daha dayanıklıdır. Katlanır sap ve iç içe geçen tencere setleri sırt çantasında az yer kaplar. Spork (kaşık-çatal bıçak birleşik), kesme tahtası ve küçük bıçak temel mutfak üçlüsüdür.",
      "Tek kullanımlık plastik yerine dayanıklı plastik veya emaye tabak tercih edin; çevreye atık bırakmayın. Bulaşık yıkama için biyobozunur deterjan ve sünger taşıyın; yıkama suyunu toprak ve su kaynaklarından uzakta dökün.",
      "Kahvaltıda yumurta, peynir ve domates; akşam makarna veya ızgara et klasik kamp menüleridir. Önceden evde doğranmış malzemeler sahilde zamandan tasarruf sağlar.",
    ],
    features: [
      "Tencere, tava ve kapak seti",
      "Tabak, bardak, kase",
      "Spork, bıçak ve kesme tahtası",
      "Taşıma torbası veya mesh çanta",
    ],
    tips: [
      "Yapışmaz tava temizliği kolaylaştırır.",
      "Her kişi için renkli bardak karışıklığı önler.",
      "Tencere setini ocakla birlikte deneyerek uyumu kontrol edin.",
      "Baharatları küçük doldurulabilir kutularda taşıyın.",
    ],
    related: [
      { label: "Ocak ve Mangal", href: "/kamp-ekipmanlari/ocak-mangal" },
      { label: "Kamp Soğutucusu", href: "/kamp-ekipmanlari/sogutucu" },
      { label: "Su Matarası", href: "/kamp-ekipmanlari/su-matri" },
    ],
  },
  giyim: {
    image: EQUIPMENT_IMAGES.giyim,
    intro:
      "Katmanlı giyim sistemi, kamp sırasında vücut ısısını mevsim ve aktiviteye göre ayarlamanızı sağlar.",
    purpose:
      "Taban (nem taşıma), orta (ısı yalıtımı) ve dış (rüzgâr/yağmur koruma) katmanlar birlikte konfor ve güvenlik sunar.",
    paragraphs: [
      "Taban katman (base layer) teri vücuttan uzaklaştırır; sentetik veya merino yün tercih edilir, pamuklu tişört teri tuttuğu için uygun değildir. Orta katman (mid layer) polar veya yün ile ısı tutar. Dış katman (shell) rüzgâr geçirmez ve su geçirmez ceket yağmurdan korur.",
      "Dağ kampında gece serinliği gündüze göre 10–15°C düşebilir; fazla katman taşımak, eksik katmandan iyidir. Deniz kenarında UV korumalı tişört ve geniş kenarlı şapka güneş yanığını önler. Yedek çorap ve içlik nemli ayak ve terlemeden kaynaklanan soğuk algınlığını azaltır.",
      "Mevsim dışı rotalarda yağmurluk veya hardshell pantolon ani yağışa hazırlıklı olmanızı sağlar.",
    ],
    features: [
      "Nem yöneten base layer",
      "Polar veya yün mid layer",
      "Su geçirmez / rüzgâr geçirmez shell",
      "Şapka, eldiven ve buff (boyunluk)",
    ],
    tips: [
      "Pamuklu kıyafetleri kamp listesinden çıkarın.",
      "Terledikçe katman açın; durunca tekrar giyin.",
      "Yağmurlu havada dış kabuğu hemen giyin.",
      "Yedek çorap ve kuru içlik her zaman çantada olsun.",
    ],
    related: [
      { label: "Uyku Tulumu", href: "/kamp-ekipmanlari/uyku-tulumu" },
      { label: "Sırt Çantası", href: "/kamp-ekipmanlari/sirt-cantasi" },
      { label: "Dağ Kamp Alanları", href: "/kategori/dag" },
    ],
  },
  "sirt-cantasi": {
    image: EQUIPMENT_IMAGES["sirt-cantasi"],
    intro:
      "Sırt çantası, kamp ekipmanını taşımanın ve dağıtmanın merkezidir; doğru boyut ve sırt uyumu konforu belirler.",
    purpose:
      "Ekipmanı omuz ve belden dengeli taşır; trekking rotalarında günlük ihtiyaçlara erişim sağlar.",
    paragraphs: [
      "Kapasite litre cinsinden ölçülür: 30–40 L günübirlik ve hafta sonu, 50–65 L çok günlük trekking, 70+ L kış veya uzun süreli rotalar için uygundur. Sırt uzunluğu (back length) omuz ve bel kemeri uyumu için kritiktir; mağazada ağırlıklı deneme yapın.",
      "Kalça kemeri ağırlığın büyük kısmını belden taşır; omuz askıları ince ayar gerektirir. Göğüs kemeri ve stabilizer kayışlar yükü sabitler. Su geçirmez iç torbalar (dry bag) yağmurda içeriği korur.",
      "Ağır eşyalar sırta yakın ve omuz hizasında; hafif eşyalar altta ve dış ceplerde konumlandırılır. Sık kullanılanlar (su, harita, atıştırmalık) yan ceplerde olmalı.",
    ],
    features: [
      "Ayarlanabilir omuz ve kalça kemeri",
      "Göğüs kemeri ve stabilizer",
      "Yağmur kılıfı (rain cover)",
      "Çoklu bölme ve dış cepler",
    ],
    tips: [
      "Çanta ağırlığının %25'ini geçmemeye çalışın (vücut ağırlığına göre).",
      "İlk paketlemede listeyle kontrol edin.",
      "Ağır eşyayı orta-yüksek konuma yerleştirin.",
      "Yağmur kılıfını dış cebe kolay erişilebilir koyun.",
    ],
    related: [
      { label: "Uyku Tulumu", href: "/kamp-ekipmanlari/uyku-tulumu" },
      { label: "Harita ve Navigasyon", href: "/kamp-ekipmanlari/navigasyon" },
      { label: "Yusufeli Trekking", href: "/kamp-alanlari/artvin/yusufeli" },
    ],
  },
  "su-matri": {
    image: EQUIPMENT_IMAGES["su-matri"],
    intro:
      "Su matarası ve arıtma sistemi, kamp ve trekking sırasında güvenli hidrasyonun temelidir.",
    purpose:
      "Yeterli su taşıma kapasitesi sağlar; arıtma tabletleri veya filtreler doğal kaynaklardan güvenli içme suyu üretir.",
    paragraphs: [
      "Kişi başı günde en az 2–3 litre su planlayın; sıcak ve aktif günlerde 4 litreye çıkın. Plastik matara ucuzdur; paslanmaz çelik veya Tritan dayanıklıdır. Su matarası kemeri veya çanta yan cebi erişimi kolaylaştırır.",
      "Doğal kaynaklardan su içmeden önce mutlaka arıtın veya kaynatın. Pompalı filtre, UV sterilizatör veya iyot/klor tabletleri farklı senaryolara uyar. Likya Yolu ve Kaçkar rotalarında su noktalarını önceden haritadan işaretleyin.",
      "Susuzluk yorgunluk, baş ağrısı ve oryantasyon bozukluğuna yol açar; düzenli su molası alın.",
    ],
    features: [
      "0,5–1 L matara veya hidrasyon blazeri",
      "Su arıtma tableti veya filtre",
      "Matara temizleme fırçası",
      "Isıya dayanıklı termos (kış)",
    ],
    tips: [
      "Her gün matarayı yıkayıp kurulayın.",
      "Trekking öncesi su noktalarını rotaya işleyin.",
      "Arıtma tableti bekleme süresine uyun.",
      "Acil durumda minimum 1 L yedek su ayırın.",
    ],
    related: [
      { label: "Kamp Mutfak Seti", href: "/kamp-ekipmanlari/mutfak-gerecleri" },
      { label: "İlk Yardım", href: "/kamp-ekipmanlari/ilk-yardim" },
      { label: "Kabak Koyu Kamp", href: "/kamp-alanlari/mugla/fethiye/kabak-koyu-kamp" },
    ],
  },
  navigasyon: {
    image: EQUIPMENT_IMAGES.navigasyon,
    intro:
      "Harita, pusula ve GPS cihazları, özellikle dağ ve orman kampında rotadan sapmamak için gereklidir.",
    purpose:
      "Konum belirleme, rota planlama ve acil durumda yön bulma işlevlerini yerine getirir.",
    paragraphs: [
      "Kağıt harita ve manyetik pusula pil gerektirmez; telefon sinyali olmayan vadilerde güvenilir yedektir. Telefon GPS uygulamaları (offline harita indirilmiş) pratik sunar ancak batarya tüketir. Altimeter (yükseklik ölçer) dağ rotalarında faydalıdır.",
      "Rotaya çıkmadan önce hava durumu, mesafe ve su noktalarını planlayın. Birine varış ve dönüş saatinizi bildirin. Kaybolduğunuzda panik yerine durun, haritayı kontrol edin ve geri iz takibi yapın.",
      "Türkiye'de birçok kamp alanında mobil şebeke zayıftır; fiziksel harita taşımak akıllıcadır.",
    ],
    features: [
      "Bölge topografik veya trekking haritası",
      "Manyetik pusula",
      "Offline GPS uygulaması",
      "Düdük ve acil reflektör",
    ],
    tips: [
      "Harita okuma becerisini evde pratik yapın.",
      "Telefona offline harita indirin.",
      "Powerbank ile GPS kullanımını destekleyin.",
      "Grup halinde yürürken aralığı koruyun.",
    ],
    related: [
      { label: "Powerbank ve Solar", href: "/kamp-ekipmanlari/guc-kaynagi" },
      { label: "Fener", href: "/kamp-ekipmanlari/aydinlatma" },
      { label: "Kaş Kamp Alanları", href: "/kamp-alanlari/antalya/kas" },
    ],
  },
  "ilk-yardim": {
    image: EQUIPMENT_IMAGES["ilk-yardim"],
    intro:
      "İlk yardım çantası, küçük kesiklerden böcek sokmasına kadar kamp sırasında karşılaşılabilecek sağlık sorunlarına müdahale eder.",
    purpose:
      "Temel tıbbi malzemelerle yaralanmayı stabilize eder ve profesyonel yardım gelene kadar zaman kazandırır.",
    paragraphs: [
      "Temel çanta: yara bandı, steril gazlı bez, elastik bandaj, antiseptik, ağrı kesici, alerji ilacı, cımbız, makas ve eldiven içermelidir. Orman kampında kene ve böcek spreyi, deniz kenarında güneş yanığı kremi eklenir. Kişisel reçeteli ilaçlar ayrı poşette taşınmalıdır.",
      "İlk yardım eğitimi almak çanta kadar önemlidir. Ciddi yaralanmada 112'yi arayın; uzak vadilerde uydu telefonu veya acil iletişim planı düşünün. Yılan sokması ve ciddi alerjide hızlı müdahale hayati olabilir.",
      "Çanta içeriğini sezon başında kontrol edin; son kullanma tarihi geçmiş malzemeleri yenileyin.",
    ],
    features: [
      "Yara bandı ve steril gazlı bez",
      "Antiseptik ve ağrı kesici",
      "Elastik bandaj ve sport tape",
      "Kene pensi ve acil iletişim kartı",
    ],
    tips: [
      "Kişisel ilaçlarınızı ayrı etiketli poşette taşıyın.",
      "Her sezon çantayı kontrol edin.",
      "Alerjiniz varsa epinefrin/auto-injector planlayın.",
      "112 ve en yakın sağlık merkezi numarasını kaydedin.",
    ],
    related: [
      { label: "Su Matarası", href: "/kamp-ekipmanlari/su-matri" },
      { label: "Katmanlı Giyim", href: "/kamp-ekipmanlari/giyim" },
      { label: "Mudurnu Kamp", href: "/kamp-alanlari/bolu/mudurnu" },
    ],
  },
  "guc-kaynagi": {
    image: EQUIPMENT_IMAGES["guc-kaynagi"],
    intro:
      "Powerbank ve taşınabilir solar panel, kamp sırasında telefon, GPS, kafa lambası ve diğer cihazları şarj eder.",
    purpose:
      "Elektrik erişimi olmayan alanlarda iletişim ve navigasyon cihazlarının çalışır kalmasını sağlar.",
    paragraphs: [
      "10.000 mAh powerbank birkaç telefon şarjı sunar; çok günlük rotalarda 20.000+ tercih edilir. Solar panel güneşli günlerde sürekli şarj sağlar; verim panel boyutu ve güneş açısına bağlıdır. Karavan parklarında 220V priz genellikle mevcuttur.",
      "Soğuk havada lityum piller hızla boşalır; powerbank'i uyku tulumunda veya ceket içinde sıcak tutmak kapasiteyi korur. Uçak yolculuğunda powerbank kabinde taşınmalı, kapasite sınırına dikkat edilmelidir.",
      "Acil durumda telefon bataryasını sadece iletişim için ayırın; fotoğraf ve sosyal medya tüketimi azaltın.",
    ],
    features: [
      "10.000–20.000 mAh powerbank",
      "USB-C / Lightning kablolar",
      "Katlanır solar panel (opsiyonel)",
      "Su geçirmez taşıma kılıfı",
    ],
    tips: [
      "Yolculuk öncesi powerbank'i tam şarj edin.",
      "Solar paneli öğle saatlerinde dik açıda konumlandırın.",
      "Gereksiz uygulamaları kapatın; uçak modu batarya tasarrufu sağlar.",
      "Karavan kampında uzatma kablosu ve adaptör taşıyın.",
    ],
    related: [
      { label: "Fener", href: "/kamp-ekipmanlari/aydinlatma" },
      { label: "Navigasyon", href: "/kamp-ekipmanlari/navigasyon" },
      { label: "Karavan Kamp", href: "/kategori/karavan" },
    ],
  },
  "kamp-mobilyasi": {
    image: EQUIPMENT_IMAGES["kamp-mobilyasi"],
    intro:
      "Kamp sandalyesi ve masa, uzun süre oturmak, yemek yemek ve ekipman düzenlemek için konfor sağlar.",
    purpose:
      "Yerden yüksek oturma ve düz yüzey sunarak bel-boyun yorgunluğunu azaltır ve kamp alanını düzenler.",
    paragraphs: [
      "Katlanır kamp sandalyeleri hafif alüminyum veya çelik iskeletle taşınır; kumaş oturak nefes alır. Alçak sandalye (beach chair) deniz kenarı için uygundur. Kamp masası ocak ve mutfak setini sabit yükseklikte tutar.",
      "Minimalist kampçılar oturak minderi (sit pad) ile hafiflik tercih eder. Ağır mobilya araç kampı ve karavan parkları için mantıklıdır; sırt çantası trekkinginde genellikle atlanır.",
      "Sandalye kurulumunda dengeli zemin seçin; rüzgârlı kıyıda devrilme riskine dikkat edin.",
    ],
    features: [
      "Katlanır sandalye ve taşıma torbası",
      "Alüminyum veya çelik iskelet",
      "Katlanır masa (opsiyonel)",
      "Bardak tutucu ve yan cepler",
    ],
    tips: [
      "Sandalyeyi çadır dışında kullanın; iç hacmi kirletmez.",
      "Ağırlık limitine dikkat edin; kaliteli iskelet uzun ömür verir.",
      "Deniz kenarında alçak sandalye rüzgâra daha dayanıklıdır.",
      "Minimal trekking için oturak minderi yeterli olabilir.",
    ],
    related: [
      { label: "Kamp Mutfak Seti", href: "/kamp-ekipmanlari/mutfak-gerecleri" },
      { label: "Kamp Soğutucusu", href: "/kamp-ekipmanlari/sogutucu" },
      { label: "Assos Kamp", href: "/kamp-alanlari/canakkale/assos" },
    ],
  },
};

export function getEquipmentContent(slug: string): EquipmentContent | undefined {
  return equipmentContent[slug];
}
