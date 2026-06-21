import { PLACE } from "@/data/media/place-images";
import {
  DEFAULT_GUIDE_AUTHOR,
  GUIDE_PUBLISHED_AT,
  GUIDE_UPDATED_AT,
} from "@/lib/content/guides/constants";
import type { GuideContent } from "@/lib/content/guides/types";

export const advancedGuides: Record<string, GuideContent> = {
  "kamp-atesi-rehberi": {
    image: PLACE.olymposBeach,
    intro:
      "Kamp ateşi hem ısınma hem yemek pişirme hem de sosyal bir merkez sunar; ancak yanlış kullanım orman yangını, yanık ve yasal sorunlara yol açabilir. Türkiye'de özellikle yaz kuraklığı dönemlerinde açık ateş kısıtlamaları sıkılaşır; izinli alanlarda bile kontrollü yakma ve tam söndürme zorunludur. Bu rehber ateş çukuru kurulumundan söndürme protokolüne kadar güvenli kamp ateşi prensiplerini özetler.",
    sections: [
      {
        id: "ates-guvenligi-temelleri",
        heading: "Kamp Ateşi Güvenliği: Temel Kurallar",
        paragraphs: [
          "Ateş yakmadan önce bulunduğunuz alanın güncel kurallarını mutlaka öğrenin. Orman içi, milli park, koruma altındaki alan ve kıyı şeridinde ateş yasağı sık görülür; tesis yönetimi veya yerel orman işletmesi bilgi verebilir. Rüzgârlı günlerde açık ateşten kaçının; kıvılcım onlarca metre uzağa savrulabilir.",
          "Ateşi asla çadıra, ağaç dallarına, kuru ot yığınına veya rüzgâr yönündeki eşyalara yakın kurmayın. Çocuklar ve evcil hayvanlar ateş çevresinde sürekli gözetim altında tutulmalıdır. Alkol tüketimi ateş güvenliğini ciddi biçimde azaltır; gece ateş başında dikkat dağıtıcı unsurlardan uzak durun.",
          "Yan yana kullanılan malzemeleri ayırın: yakıt, kıvılcım çıkaran aletler ve söndürme ekipmanı farklı torbalarda taşınmalıdır. Islak veya yeşil odun duman üretir ve verimsiz yanar; kuru odun stokunu kamp alanına varmadan önce planlayın.",
        ],
      },
      {
        id: "ates-cukuru-kurulumu",
        heading: "Ateş Çukuru ve Güvenli Kurulum",
        paragraphs: [
          "İzin verilen alanlarda ateş çukuru en güvenli yöntemdir. Mevcut çukur varsa onu kullanın; yeni açacaksanız en az 30 cm derinlikte, çevresinde en az 1,5 metre taş halkası bırakın. Zemin kuru ot, yaprak veya kök sisteminden arındırılmalıdır.",
          "Ateş çukurunun üzerine ızgara veya tencere desteği yerleştirin; açık alevde pişirme sıçrama riski taşır. Rüzgâr kesici taş veya alçak duvar ateşin kontrolünü kolaylaştırır. Kamp alanından ayrılırken çukuru toprakla doldurup düzleştirin; iz bırakmamak hem etik hem güvenlik gereğidir.",
          "Taş halkası ısı biriktirir ve patlama riski taşıyan ıslak veya nehir taşlarını kullanmayın. Ateş boyutunu ihtiyacınızla sınırlayın; büyük ateş hem yakıt israfı hem kontrol zorluğu demektir.",
        ],
        links: [
          { label: "Ocak ve Mangal Rehberi", href: "/kamp-ekipmanlari/ocak-mangal" },
        ],
      },
      {
        id: "yangin-yasagi-donemleri",
        heading: "Orman Yangını Sezonu ve Ateş Yasağı",
        paragraphs: [
          "Türkiye'de orman yangını riski genellikle haziran sonundan eylül başına kadar en yüksek seviyededir; kuraklık, sıcak hava dalgaları ve kuvvetli rüzgârlar bu dönemi kritik kılar. Bu süreçte birçok ilde açık ateş tamamen yasaklanır; sadece gaz veya sıvı yakıtlı portatif ocaklar belirli koşullarda izinli olabilir.",
          "Yasak dönemler resmi duyurularla ilan edilir; kamp öncesi il orman müdürlüğü web sitesi veya 177 orman yangını hattı güncel bilgi sağlar. Yasak ihlali hem para cezası hem yangın sorumluluğu doğurur; «burada herkes yakıyor» gerekçesi geçerli değildir.",
          "Kurak ot, düşük nem ve yüksek rüzgâr üçlüsü varsa ateşten tamamen vazgeçin. Gece ateşi görünür mesafeden fark edilir; izole alanlarda dahi yasağa uyulmalıdır. Alternatif olarak termos sıcak içecek, katmanlı giyim ve gaz ocak yemek pişirme tercih edilmelidir.",
        ],
      },
      {
        id: "sondurme-protokolu",
        heading: "Ateş Söndürme Protokolü",
        paragraphs: [
          "Ateşi terk etmeden önce tamamen söndüğünden emin olun; «soğuk ve ıslak» testi standart yöntemdir. Kül ve kömürlerin üzerine bol su dökün, karıştırın, tekrar su ekleyin. Elle dokunulduğunda ısı hissedilmemelidir.",
          "Kum veya toprak tek başına yeterli değildir; alttaki kömürler saatler sonra yeniden alevlenebilir. Söndürme suyunu yakındaki dere veya gölde değil, taşıdığınız stoktan veya tesis musluğundan alın; doğal su kaynaklarını kirletmeyin.",
          "Gece uyumadan önce son kontrol yapın; rüzgâr kül yığınlarını yeniden tutuşturabilir. Yağmurlu havada bile söndürme adımını atlamayın; nemli odun yavaş yanar ancak tamamen sönmez.",
        ],
        checklist: [
          "Alev tamamen söndürüldü; kıvılcım kalmadı",
          "Bol su ile kömürler ıslatıldı ve karıştırıldı",
          "El ile ısı testi yapıldı (soğuk olmalı)",
          "Kül çevreye saçılmadan çukurda bırakıldı veya toplandı",
          "Çukur toprakla kapatıldı ve düzleştirildi",
        ],
      },
      {
        id: "gaz-ocak-alternatifi",
        heading: "Gaz Ocak: Güvenli Alternatif",
        paragraphs: [
          "Açık ateş yasak veya riskli dönemlerde portatif gaz ocak en pratik çözümdür. Düz, rüzgârsız bir zemin üzerinde kurun; çadır içinde asla kullanmayın. Kartuş ve ocak bağlantısını her kullanımdan önce kontrol edin.",
          "Ocak etrafında yanıcı malzeme bulundurmayın; tencere sapı stabil olmalıdır. Kullanım sonrası ocak soğuyana kadar dokunmayın; taşıma çantasına sıcak ocak koymak yangın riski yaratır.",
          "Yakıt stokunu orijinal ambalajında, güneşten uzak ve çocukların erişemeyeceği yerde saklayın. Boş kartuşları kamp alanında bırakmayın; geri dönüşüm veya tesis atık noktasına teslim edin.",
        ],
        links: [
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
          { label: "Ocak ve Mangal Ekipmanı", href: "/kamp-ekipmanlari/ocak-mangal" },
        ],
      },
      {
        id: "acil-durum-yangin",
        heading: "Yangın Acil Durumunda Yapılacaklar",
        paragraphs: [
          "Kontrol dışı alevi büyütmeye çalışmayın; önce kendinizi ve grubunuzu güvenli mesafeye alın. 177 orman yangını hattını ve 112 acil hattını arayın; konumunuzu mümkün olduğunca net tarif edin.",
          "Küçük başlangıç yangınlarında toprak, kum veya ıslak örtü ile müdahale mümkün olabilir; ancak rüzgârlı ve hızla yayılan alevlerde uzaklaşmak önceliklidir. Araç yolu veya açık alan yangından kaçış için en güvenli koridor olabilir.",
          "Yangın sonrası bölgeye geri dönmeyin; dumansız görünen alanlarda bile sıcak kök ve kül yanık riski taşır. Tanık olduğunuz ihlalleri yetkililere bildirmek toplumsal sorumluluğun parçasıdır.",
        ],
      },
      {
        id: "ates-planlama-genel",
        heading: "Kamp Öncesi Ateş Planlaması",
        paragraphs: [
          "Kamp planına ateş kararını en başta ekleyin: yasak var mı, alternatif ocak var mı, söndürme suyu stoku yeterli mi? Bu üç soru yanıtlanmadan açık ateş planlamayın. Yangın riski yüksek günlerde planı ertelemek hem güvenli hem sorumlu bir karardır.",
          "Grup büyüklüğü ateş boyutunu belirler; kalabalık gruplarda tek sorumlu kişi alev kontrolünü yönetmelidir. Çocuklar ve alkol tüketimi ateş başında ekstra gözetim gerektirir.",
          "Kamp sonrası değerlendirmede ateş izi bırakıp bırakmadığınızı kontrol edin; çukur, kül ve taş halkası restore edilmelidir. Bir sonraki ziyaretçi ve doğa ekosistemi için iz bırakmama kuralı geçerlidir.",
          "Site rehberimizdeki güvenlik rehberi ve ekipman sayfaları ocak alternatifleri için bağlantı sunar; spesifik tesis iddiası yerine genel güvenlik prensiplerine odaklanın.",
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
        provinceSlug: "izmit",
        districtSlug: "kartepe",
        slug: "kartepe-orman-kampi",
      },
    ],
    relatedGuides: [
      { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
    ],
    faq: [
      {
        question: "Kamp alanında ateş yakmak her zaman yasak mı?",
        answer:
          "Hayır; ancak orman yangını riski dönemlerinde çoğu bölgede yasaktır. İzinli alanlarda bile kontrollü ateş ve tam söndürme zorunludur; güncel yasağı kamp öncesi kontrol edin.",
      },
      {
        question: "Ateşi nasıl tam söndürmeliyim?",
        answer:
          "Bol su dökün, karıştırın, tekrar su ekleyin ve el ile soğukluk testi yapın. Kum veya toprak tek başına yeterli değildir.",
      },
      {
        question: "Yasak dönemde yemek nasıl pişirilir?",
        answer:
          "Portatif gaz ocak izinli alanlarda güvenli alternatiftir. Çadır içinde ocak kullanmak asla önerilmez.",
      },
      {
        question: "Orman yangını sezonu ne zaman başlar?",
        answer:
          "Türkiye'de risk genellikle haziran sonu–eylül arasında zirve yapar; resmi yasaklar il bazında duyurulur. 177 hattı ve yerel orman müdürlüğü güncel bilgi verir.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "kampta-yemek-pisirme-rehberi": {
    image: PLACE.fethiye,
    intro:
      "Kampta yemek pişirmek ev mutfağından farklı planlama, ekipman ve hijyen disiplini gerektirir. Su stoku sınırlı, soğutma imkânı kısıtlı ve yiyecek kokusu yaban hayvanlarını cezbedebilir. Doğru ocak seçimi, güvenli saklama ve basit menü planı hem konforu hem güvenliği artırır.",
    sections: [
      {
        id: "kamp-mutfagi-temelleri",
        heading: "Kamp Mutfağı Temelleri",
        paragraphs: [
          "Kamp mutfağı minimum ekipmanla çalışır: ocak, tek tencere veya tava, kesici alet, su matarası ve yıkama kabı. Menüyü karmaşık tariflerden kaçınarak planlayın; tek tencerede pişen yemekler yakıt ve bulaşık tasarrufu sağlar.",
          "Yiyecekleri evden porsiyonlayarak taşıyın; açılmış büyük paketler hem bozulma hem yaban hayvanı riskini artırır. Baharat, yağ ve tuz küçük kaplarda yeterlidir; ağırlık ve hacim sınırlıdır.",
          "Kamp alanına varmadan önce öğün listesini yazın; «orada ne pişiririz» sorusu alışveriş eksikliğine yol açar. Vejetaryen, alerji ve çocuk tercihlerini grupta önceden netleştirin.",
          "Kahvaltıyı hafif ve hızlı planlayın; yürüyüş ve kurulum günlerinde ağır sabah yemeği enerjiyi erken tüketir. Akşam yemeği tek tencerede hazırlanan çorba, pilav veya makarna tabanlı menülerle sadeleştirilebilir.",
        ],
      },
      {
        id: "ocak-kullanimi",
        heading: "Ocak Kullanımı ve Yakıt Planlaması",
        paragraphs: [
          "Portatif ocak düz, sabit bir yüzeyde kurulmalı; rüzgâr alevin sönmesine veya dağılmasına neden olur. Rüzgâr kesici panel hem ocak hem açık ateş için faydalıdır. Kartuş stokunu günlük öğün sayısına göre hesaplayın; yedek kartuş uzun rotalarda zorunludur.",
          "Tencere tabanı ocak çapına uygun olmalıdır; küçük ocakta büyük tencere verimsiz ısınır. Pişirme sonrası ocak tamamen soğuyana kadar demontaj yapmayın.",
          "Yüksek rakımda kaynama süresi uzar; pilav ve baklagil gibi yemekler için ek süre ve su planlayın. Kış kampında kartuş performansı düşebilir; sıcak tutma kapağı veya rüzgâr koruması fark yaratır.",
        ],
        links: [
          { label: "Ocak ve Mangal Rehberi", href: "/kamp-ekipmanlari/ocak-mangal" },
        ],
      },
      {
        id: "mangal-izgara",
        heading: "Mangal ve Izgara Kullanımı",
        paragraphs: [
          "Mangal ve ızgara izinli alanlarda ve yasak dönem dışında kullanılabilir. Kömür veya odun ateşi tamamen kıvılcımsız hale gelene kadar bekleyin; yağ damlayan etler alev yükseltir. Izgara yüksekliğini ayarlayarak yanma riskini azaltın.",
          "Pişirme sonrası ızgara ve mangal soğuyana kadar temas etmeyin; taşıma için eldiven kullanın. Gıda artıklarını ateşe atmayın; çekirdek, kemik ve yağlı kalıntılar yoğun duman ve koku üretir.",
          "Açık ateş yasağı dönemlerinde mangal da yasak kapsamına girebilir; güncel kuralları kontrol edin. Alternatif olarak gaz ocak üzerinde tava veya ızgara plakası kullanılabilir.",
        ],
        links: [
          { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
        ],
      },
      {
        id: "yiyecek-saklama",
        heading: "Yiyecek Saklama ve Soğutma",
        paragraphs: [
          "Et, süt ürünleri ve hazır salatalar soğuk zincirde tutulmalıdır. Termos buz aküsü ve yalıtımlı soğutucu çanta yaz kampında minimum gereksinimdir. Buz aküsünü dondurucuda önceden hazırlayın; kamp alanında buz temini her zaman mümkün olmayabilir.",
          "Kuru gıdalar (makarna, pirinç, kuruyemiş) hava geçirmez torbalarda nemden korunmalıdır. Konserve ve cam kavanoz ağırlık taşır; uzun sırt çantası rotalarında tercih edilmez.",
          "Artan yemeği açıkta bırakmayın; kilitli kapta veya asılı çantada saklayın. Bozulmuş gıdayı kamp alanında bırakmak hem hijyen hem yaban hayvanı sorunu yaratır.",
        ],
        checklist: [
          "Et ve süt ürünleri buz aküsü ile paketlendi",
          "Kuru gıdalar su geçirmez torbada",
          "Artan yemek kapalı kapta saklandı",
          "Çöp ve organik atık ayrı torbada toplandı",
          "Yiyecek çadır dışında, mümkünse asılı veya kilitli alanda",
        ],
      },
      {
        id: "yaban-hayati-onleme",
        heading: "Yaban Hayvanı Cezbeden Kokuları Önleme",
        paragraphs: [
          "Yiyecek kokusu domuz, tilki, sincap ve kuşları kamp alanına çeker. Yemek pişirme alanını uyku çadırından en az 50 metre uzağa kurun; mümkünse rüzgâr yönünde çadırın arka tarafında kalın.",
          "Parfüm, diş macunu ve atıştırmalık ambalajları da çekicidir; bunları uyku alanından uzak tutun. Gece tüm yiyecek ve çöp torbalarını asılı çanta veya araç bagajında kilitli bölümde saklayın.",
          "Hayvanlarla temas etmeyin; beslemek alışkanlık yaratır ve saldırgan davranışa yol açabilir. Sabah çadır çevresinde gece bırakılmış artık olup olmadığını kontrol edin.",
        ],
      },
      {
        id: "temizlik-hijyen",
        heading: "Bulaşık, Atık ve Hijyen",
        paragraphs: [
          "Bulaşık suyunu dere veya göle dökmeyin; biyobozunur deterjan kullanılsa bile doğal su kaynaklarını kirletir. Su alıp uzaklaşın, bulaşığı burada yıkayın, gri suyu toprakta filtreleyerek dökün.",
          "Organik atıkları mümkünse geri götürün; yerel yasak varsa tesis çöp noktasını kullanın. Plastik ve metal ambalaj asla yakılmamalıdır.",
          "Eller yemek öncesi ve sonrası temiz su veya hijyen mendili ile silinmelidir. Kamp mutfağında çapraz bulaşmayı önlemek için çiğ et ve sebze tahtasını ayırın.",
        ],
        links: [
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
        ],
      },
      {
        id: "yemek-menu-planlama",
        heading: "Menü Planlama ve Alışveriş Stratejisi",
        paragraphs: [
          "Kamp mutfağında menüyü basit tutun: kahvaltıda pişirme gerektirmeyen gıdalar, öğle ve akşamda tek tencere yemekleri. Alışverişi evden yapın; kırsal tesislerde seçenek sınırlı ve pahalı olabilir.",
          "Protein, karbonhidrat ve atıştırmalık dengesini koruyun; uzun yürüyüş günlerinde kalori ihtiyacı artar. Baharat ve yağ küçük şişelerde taşınır; lezzet katmanı moral açısından önemlidir.",
          "Alerji ve diyet kısıtlamalarını grup planına dahil edin; çapraz bulaşma riski ortak mutfak setinde artar. Etiket okuma ve ayrı saklama alerjik reaksiyonları önler.",
          "Kamp sonrası kalan gıdaları değerlendirin: hangi miktar fazla geldi, hangi tarif pratikti? Bu geri bildirim bir sonraki alışveriş listesini iyileştirir.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "mugla",
        districtSlug: "fethiye",
        slug: "kabak-koyu-kamp",
      },
      {
        provinceSlug: "canakkale",
        districtSlug: "assos",
        slug: "assos-kadirga-kamp",
      },
      {
        provinceSlug: "mugla",
        districtSlug: "datca",
        slug: "datca-palamutbuku-kamp",
      },
    ],
    relatedGuides: [
      { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
      { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
    ],
    faq: [
      {
        question: "Kampta yemek pişirmek için minimum ekipman nedir?",
        answer:
          "Ocak, tencere veya tava, kesici alet, su matarası ve yıkama kabı temel settir. Tek tencere menüler yakıt ve bulaşık tasarrufu sağlar.",
      },
      {
        question: "Et ve süt ürünleri nasıl saklanır?",
        answer:
          "Buz aküsü ve yalıtımlı soğutucu çantada taşınmalıdır. Kamp alanına varmadan önce buz aküsü dondurulmuş olmalıdır.",
      },
      {
        question: "Yiyecekleri çadırda saklamak güvenli mi?",
        answer:
          "Hayır. Yiyecek ve kokulu ürünler çadır dışında kapalı kapta veya asılı çantada, uyku alanından uzak tutulmalıdır.",
      },
      {
        question: "Kamp bulaşığı nerede yıkanmalı?",
        answer:
          "Su kaynağından en az 50 metre uzakta, biyobozunur deterjanla yıkayın. Gri suyu dereye dökmeyin.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "sirt-cantasiyla-kamp-rehberi": {
    image: PLACE.yusufeliCoruh,
    intro:
      "Sırt çantasıyla kamp, ekipmanı taşıyarak doğal alanlara ulaşmayı ve birkaç gün boyunca kendi kaynaklarınızla yaşamayı içerir. Ağırlık sınırı, su planlaması ve rota seçimi bu kamp türünün temel taşlarıdır. Ultralight yaklaşım deneyimli yürüyüşçüler için konforu artırır; yeni başlayanlar ise önce güvenli ve kısa rotalarla temel becerileri kazanmalıdır.",
    sections: [
      {
        id: "sirt-cantasi-kampina-giris",
        heading: "Sırt Çantası Kampına Giriş",
        paragraphs: [
          "Sırt çantası kampı otomobille ulaşılan tesis kampından farklıdır: tüm barınma, mutfak ve uyku ekipmanı omuzlarınızda taşınır. İlk denemeler için 1 gece 2 gün, işaretli patika ve su kaynağı olan rotalar seçilmelidir.",
          "Toplam paket ağırlığı vücut ağırlığının yaklaşık %20'sini aşmamalıdır; aksi halde diz ve bel yükü artar, yürüyüş keyfi azalır. Ağırlığı tartarak çıkın; «hafif hissediyor» öznel bir yanılgı olabilir.",
          "Grup halinde ekipman paylaşımı (çadır, ocak, su arıtıcı) kişi başı yükü düşürür. Solo kamp deneyim kazandıktan sonra planlanmalıdır.",
        ],
        links: [
          { label: "Sırt Çantası Rehberi", href: "/kamp-ekipmanlari/sirt-cantasi" },
        ],
      },
      {
        id: "ultralight-felsefe",
        heading: "Ultralight Felsefe ve Ağırlık Yönetimi",
        paragraphs: [
          "Ultralight kamp «gereksiz her gramı» elemeyi hedefler; ancak güvenlik ekipmanından (ilk yardım, aydınlatma, yağmurluk) asla vazgeçilmez. Çok hafif çadır ve ince mat konforu düşürür; dengeyi kendi deneyiminize göre kurun.",
          "Çok amaçlı eşya tercih edin: buff bere ve boyunluk, katlanır tencere-kapak kombinasyonu, trekking batonu çadır direği olarak kullanılabilir. Lüks eşyalar (kamp sandalyesi, büyük yastık) kısa rotalarda bile yükü artırır.",
          "Her kamp sonrası kullanılmayan eşyayı bir sonraki sefer çıkarın; «belki lazım olur» listesi yıllar içinde şişer. Tartı ve liste ultralight disiplininin pratik araçlarıdır.",
        ],
        subsections: [
          {
            id: "agirlik-dagilimi",
            heading: "Sırt Çantasında Ağırlık Dağılımı",
            paragraphs: [
              "En ağır eşyalar (su, ocak, tencere) sırt çantasının orta bölümüne ve kalçaya yakın yerleştirilir. Sık kullanılan eşyalar (yağmurluk, harita, atıştırmalık) üst ceplere konur.",
              "Çadır genellikle dış bağlantı noktasına veya alt kemerle sabitlenir; mat karşı tarafta denge sağlar. Asimetrik yük omuz ağrısına yol açar.",
            ],
          },
        ],
      },
      {
        id: "su-aritma",
        heading: "Su Planlaması ve Arıtma",
        paragraphs: [
          "Sırt çantası rotalarında su en ağır ve en kritik yük kalemidir. Rota boyunca güvenilir su kaynağı haritasını önceden işaretleyin; yaz kuraklığında dere yatakları secce kalabilir.",
          "Taşınan suya ek olarak filtre, tablet veya UV arıtma yöntemlerinden en az biri bulunmalıdır. Kaynak suyu görünüşte berrak olsa bile arıtılmadan içilmemelidir.",
          "Günde kişi başı 2–3 litre tüketim planlayın; sıcak hava ve yüksek rakım ihtiyacı artırır. Su noktaları arası mesafeyi aşmayın; son suyu erken tüketmek acil durum yaratır.",
          "Arıtma yöntemini rotaya göre seçin: tablet hafif ve pratiktir; filtre çoklu kullanım sunar; kaynatma ek yakıt gerektirir ancak en güvenilir yöntemlerden biridir. Farklı yöntemleri evde test ederek kamp alanına gitmeden önce alışın.",
        ],
      },
      {
        id: "rota-planlama",
        heading: "Rota Planlama İlkeleri",
        paragraphs: [
          "Günlük mesafe deneyime göre 10–20 km arasında planlanmalıdır; yükselti profili mesafeden daha belirleyicidir. 500 metre tırmanışlı 10 km, düz 15 km'den yorucu olabilir.",
          "Offline harita veya basılı topoğrafya haritası telefon şarjına bağımlı kalmadan navigasyon sağlar. Rota alternatifi (Plan B) hava bozulması veya sakatlık durumunda güvenlik ağıdır.",
          "Gün batımından en az 2 saat önce kamp kurulumunu tamamlayacak şekilde saat planlayın. Gece patikada yürümek düşme ve kaybolma riskini artırır.",
          "Patika üzerindeki son kullanıcı yorumları ve mevsimsel kapalı bölümler hakkında güncel bilgi toplayın. Resmi yasak veya restorasyon nedeniyle kapanmış rotalara alternatif plan hazırlayın.",
        ],
      },
      {
        id: "gece-duzeni",
        heading: "Gece Düzeni ve Uyku Konforu",
        paragraphs: [
          "Kamp yerini rüzgârdan korunaklı, düz ve drenajlı zeminde seçin; vadi tabanı gece soğuk hava birikimine açıktır. Çadır kapısını sabah güneşine değil rüzgâra bakacak şekilde konumlandırın.",
          "Uyku matının R-değeri zeminden gelen soğuğu keser; ince mat yaz dağ gecelerinde yetersiz kalır. Uyku tulumu konfor derecesi gece minimum sıcaklığının 5°C altında seçilmelidir.",
          "Gece tuvalet ihtiyacı için kafa lambası ve ayakkabı hazır bulundurun. Yiyecek ve kokulu ürünleri uyku alanından uzak tutun.",
        ],
      },
      {
        id: "guvenlik-iletisim",
        heading: "Güvenlik ve İletişim",
        paragraphs: [
          "Rota planınızı birine bildirin; dönüş saati ve son iletişim noktasını paylaşın. İzole alanlarda telefon çekmeyebilir; acil durum planı önceden yapılmalıdır.",
          "Hava değişimine karşı yağmurluk ve ekstra katman her zaman erişilebilir cepte olmalıdır. Yıldırım riskinde açık tepe ve tek ağaç altından uzaklaşın.",
          "İlk yardım bilgisi sırt çantası kampında daha kritiktir; en yakın sağlık birimine mesafeyi bilin. Küçük yaralanmaları ihmal etmeyin; enfeksiyon uzak alanda ciddi sorun olur.",
        ],
        links: [
          { label: "Kamp Çantası Hazırlama Rehberi", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
          { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
        ],
      },
      {
        id: "backpacking-ileri-ipuclari",
        heading: "Deneyim Kazandıkça Geliştirme",
        paragraphs: [
          "İlk sırt çantası kampından sonra ekipman listenizi gözden geçirin: hangi parça kullanılmadı, hangisi eksik kaldı? Bu pratik geri bildirim bir sonraki rotayı planlamanın en değerli girdisidir.",
          "Mesafeyi kademeli artırın; hafta sonu 10 km yürüyüşten sonra bir haftalık 50 km rotaya geçmek mantıklı bir ilerlemedir. Vücut adaptasyonu ekipmandan daha kritiktir.",
          "Harita okuma ve pusula kullanımını pratik yapın; telefon GPS'i pil tüketir ve sinyal kaybında güvenilmez kalabilir. Kağıt harita yedek olarak taşınmalıdır.",
          "Grup dinamiği rotayı etkiler; en yavaş üyenin hızına uyum sağlamak güvenli ilerlemenin temelidir. Solo kamp deneyimli yürüyüşçüler için ayrı bir disiplindir.",
        ],
      },
    ],
    relatedCampsites: [
      {
        provinceSlug: "artvin",
        districtSlug: "yusufeli",
        slug: "yusufeli-altiparmak-dag-kampi",
      },
      {
        provinceSlug: "artvin",
        districtSlug: "yusufeli",
        slug: "yusufeli-coruh-nehri-kampi",
      },
      {
        provinceSlug: "izmit",
        districtSlug: "kartepe",
        slug: "kartepe-orman-kampi",
      },
    ],
    relatedGuides: [
      { label: "Kamp Çantası Hazırlama", href: "/rehberler/kamp-cantasi-hazirlama-rehberi" },
      { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
    ],
    faq: [
      {
        question: "Sırt çantası kampı için kaç litrelik çanta yeterli?",
        answer:
          "2–3 günlük rotalar için 50–65 litre genellikle yeterlidir. Kış ekipmanı ve uzun rotalar 65–75 litre gerektirebilir.",
      },
      {
        question: "Ne kadar ağırlık taşınmalı?",
        answer:
          "Toplam paket ağırlığı vücut ağırlığının yaklaşık %20'sini aşmamalıdır. İlk denemelerde daha hafif rota ve kısa süre tercih edin.",
      },
      {
        question: "Dere suyu içilebilir mi?",
        answer:
          "Hayır; kaynak suyu mutlaka filtre, tablet veya kaynatma ile arıtılmalıdır. Görünüşte berrak su bile patojen taşıyabilir.",
      },
      {
        question: "Solo sırt çantası kampı güvenli mi?",
        answer:
          "Deneyim kazandıktan sonra planlanabilir. İlk rotalar kısa mesafe, işaretli patika ve grup veya partnerle yapılmalıdır.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },

  "aile-ile-kamp-rehberi": {
    image: PLACE.sarimsakli,
    intro:
      "Aile kampı çocukların doğayla tanışması ve birlikte vakit geçirmek için ideal bir fırsattır; ancak güvenlik, uyku düzeni ve yaşa uygun aktivite planı yetişkin kampından farklı yaklaşım gerektirir. Altyapılı bir tesisle başlamak tuvalet, duş ve güvenli oyun alanı sunarak ilk deneyimi kolaylaştırır. Doğru hazırlık hem ebeveyn hem çocuk için keyifli bir hafta sonu yaratır.",
    sections: [
      {
        id: "aile-kampi-planlama",
        heading: "Aile Kampı Planlama",
        paragraphs: [
          "İlk aile kampı için 1 gece 2 gün ve araçla ulaşılabilir, tesisli bir alan ideal başlangıçtır. Uzun yol ve gece yarısı varış çocuklarda yorgunluk ve huysuzluk yaratır; Cumartesi sabah erken çıkış Pazar öğleden dönüş planı genellikle yeterlidir.",
          "Çocukların yaş ve ilgi düzeyine göre rota seçin: küçük çocuklar için kısa yürüyüş ve güvenli kıyı; ergenler için daha uzun patika ve fotoğraf molaları uygun olabilir. Hava durumunu çocuklara uygun katmanlı giyimle planlayın.",
          "Rezervasyon, giriş saati ve tesis kurallarını (sessizlik saati, ateş yasağı, evcil hayvan) önceden öğrenin. Beklenmedik kural değişikliği çocuklu ailelerde stres yaratır.",
        ],
      },
      {
        id: "guvenlik-onlemleri",
        heading: "Aile Kampında Güvenlik",
        paragraphs: [
          "Çocukları sürekli görüş alanında tutun; kamp alanları trafik, su kenarı ve yabani bitki riski taşıyabilir. Gece kafa lambası ve yansıtıcı aksesuar çadır ile tuvalet arası yürüyüşte faydalıdır.",
          "İlk yardım çantasında çocuklara uygun ilaç (ateş düşürücü, bandaj, kene pensi) bulundurun. Böcek kovucu ve güneş kremi küçük yaş gruplarında özellikle önemlidir.",
          "Acil toplanma noktasını ailece belirleyin; kalabalık tesislerde çocuk kaybolma riski vardır. Telefon numarasını çocuğun cebine veya bilekliğine yazın.",
        ],
        subsections: [
          {
            id: "kucuk-cocuk-guvenligi",
            heading: "0–6 Yaş Güvenlik Notları",
            paragraphs: [
              "Bu yaş grubunda su kenarı ve ateş çevresi sürekli yetişkin gözetimi gerektirir. Uyku düzeni evdeki rutine yakın tutulmalı; tanıdık yastık veya battaniye uykuyu kolaylaştırır.",
              "Bez, ıslak mendil ve yedek giysi stoğu yetişkin kampından fazla olmalıdır. Gürültü ve gece ışığı komşu çadırlara saygı çerçevesinde sınırlandırılmalıdır.",
            ],
          },
          {
            id: "okul-cagi-guvenligi",
            heading: "7–12 Yaş Güvenlik Notları",
            paragraphs: [
              "Temel güvenlik kurallarını (ateşe uzak dur, yabani meyve yeme, kaybolursan bekle) kamp öncesi anlatın. Kısa keşif yürüyüşlerinde çocuğa basit harita ve düdük verilebilir.",
              "Grup oyunlarında sorumluluk paylaşımı (çöp toplama, su taşıma) güvenlik bilincini destekler. Gece karanlığı korkusu için kafa lambasını düşük modda çadırda bırakmak yardımcı olabilir.",
            ],
          },
        ],
      },
      {
        id: "aktiviteler",
        heading: "Yaşa Uygun Kamp Aktiviteleri",
        paragraphs: [
          "Doğa gözlemi, taş boyama, yıldız sayma ve kısa patika yürüyüşü tüm yaş gruplarına uyarlanabilir. Rekabet yerine keşif odaklı oyunlar kamp ruhunu destekler.",
          "Plaj ve göl kenarında can yeleği ve güneş tentesi küçük çocuklar için zorunlu sayılır. Su aktivitelerinde yetişkin-yüzücü oranına dikkat edin.",
          "Akşam ateşi etrafında hikâye anlatma ve sıcak içecek aile bağını güçlendirir; ateş yasağı dönemlerinde gaz ocak veya termos alternatifi kullanın. Elektronik ekran süresini minimumda tutmak doğa deneyimini zenginleştirir.",
        ],
      },
      {
        id: "yas-grubuna-gore-paketleme",
        heading: "Yaş Grubuna Göre Paketleme",
        paragraphs: [
          "Bebek ve küçük çocuk için yedek giysi, bez, mama ve ilaç stoğu yetişkin ihtiyacının önüne geçer. Uyku tulumu yerine evde alışık olduğu uyku düzenini taşıyan eşyalar gece konforunu artırır.",
          "Okul çağı çocuklar kendi küçük sırt çantalarında su matarası, yağmurluk ve atıştırmalık taşıyabilir; sorumluluk duygusu geliştirir. Ergenler kendi ekipman listesini hazırlamaya teşvik edilebilir.",
          "Ortak aile çadırı veya bitişik iki kişilik çadırlar gece güvenliği sağlar. Her çocuğun kendi kafa lambası gece tuvalet yürüyüşünde bağımsızlık kazandırır.",
        ],
        checklist: [
          "Yaşa uygun uyku tulumu veya battaniye",
          "Yedek giysi (en az bir tam set / çocuk)",
          "Böcek kovucu ve güneş kremi",
          "İlk yardım: bandaj, kene pensi, ateş düşürücü",
          "Atıştırmalık ve bol su (çocuk başına ekstra)",
          "Yağmurluk ve sıcak katman",
          "Gece aydınlatması (kafa lambası / fener)",
        ],
      },
      {
        id: "uyku-duzeni",
        heading: "Gece Uykusu ve Rutin",
        paragraphs: [
          "Kamp alanında uyku düzeni evden farklıdır; gürültü, ışık ve sıcaklık değişimi uykuyu etkiler. Yatmadan önce sakin aktivite (kitap, hafif sohbet) uyarıcı ekranlardan daha etkilidir.",
          "Gece sıcaklığı gündüze göre düşer; çocuklar için +5°C konfor tulumu yaz kıyısında bile güvenli seçimdir. Mat kalınlığı soğuk zeminden izolasyon sağlar.",
          "Sabah erken güneş ve kuş sesi uyku süresini kısaltabilir; öğleden sonra kısa dinlenme molaları gün boyu enerjiyi dengeler.",
        ],
      },
      {
        id: "ilk-aile-kampi-ipuclari",
        heading: "İlk Aile Kampı İpuçları",
        paragraphs: [
          "Mükemmel kamp beklentisinden kaçının; yağmur, eksik uyku ve küçük aksaklıklar normaldir. Esnek plan ve iyi niyetli iletişim aile moralini korur.",
          "Komşu çadırlara saygılı mesafe bırakın; gece ağlayan bebek veya koşan çocuk doğal seslerdir ancak sessizlik saatlerine uyun. Ayrılırken alanı temiz bırakmak çocuklara örnek teşkil eder.",
          "İlk deneyim olumlu geçerse bir sonraki sefer daha uzun süre ve daha doğal alanlar denenebilir. Her çocuğun hazır olma hızı farklıdır; zorlamayın.",
        ],
        links: [
          { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
        ],
      },
      {
        id: "aile-kamp-rutinleri",
        heading: "Günlük Rutin ve Esneklik",
        paragraphs: [
          "Aile kampında sabit bir günlük akış çocuklar için güven vericidir: kahvaltı, kısa aktivite, öğle dinlenmesi, akşam yemeği ve uyku saati. Rutin esnek tutulmalı; hava veya yorgunluk planı değiştirebilir.",
          "Yağmur günü planı önceden hazırlayın: kart oyunları, kitap, kısa yürüyüş veya tesis içi aktiviteler moral düşüşünü önler. Çocukların katılımıyla plan yapmak sahiplenmeyi artırır.",
          "Ebeveynler arasında görev paylaşımı yapın; tek kişinin tüm yükü taşıması tükenmişliğe yol açar. Çadır kurma, yemek ve çocuk gözetimi dönüşümlü üstlenilebilir.",
          "Kamp sonrası aile değerlendirmesi yapın: neyi tekrar ederiz, neyi değiştiririz? Olumlu anıları vurgulamak bir sonraki sefer için motivasyon oluşturur.",
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
    ],
    relatedGuides: [
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
      { label: "Kamp Güvenliği Rehberi", href: "/rehberler/kamp-guvenligi-rehberi" },
    ],
    faq: [
      {
        question: "Aile kampına kaç yaşında başlanabilir?",
        answer:
          "Altyapılı tesislerde birkaç aylık bebekle bile mümkün olsa da 3–4 yaş sonrası aktivite katılımı artar. İlk deneme kısa süreli olmalıdır.",
      },
      {
        question: "Çocuklar için hangi kamp alanı uygun?",
        answer:
          "Tuvalet, duş, güvenli oyun alanı ve araçla kolay ulaşım sunan tesisli alanlar ilk aile kampı için idealdir. Deneyim kazandıkça daha doğal rotalar denenebilir.",
      },
      {
        question: "Çocuklu kampta ne kadar ekipman gerekir?",
        answer:
          "Yetişkin setine ek olarak yedek giysi, yaşa uygun uyku düzeni, böcek kovucu, ekstra su ve atıştırmalık planlanmalıdır.",
      },
      {
        question: "Yağmurlu havada aile kampı iptal edilmeli mi?",
        answer:
          "Hafif yağmur katmanlı giyimle yönetilebilir. Fırtına, sel veya aşırı sıcaklık gibi risklerde ertelemek güvenli seçimdir.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },
};
