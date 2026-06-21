import type { GuideSupplement } from "@/lib/content/guides/merge";

export const safetySupplements: Record<string, GuideSupplement> = {
  "kamp-guvenligi-rehberi": {
    extraIntro: [
      "Türkiye'de kamp güvenliği orman yangını riski, ani hava değişimi ve izole alanlarda iletişim kesintisi gibi bölgesel faktörlerle şekillenir; aşağıda her risk kategorisini somut rotalarla ele alıyoruz.",
    ],
    sections: [
      {
        id: "hava-firtina-detay",
        heading: "Hava Koşulları, Fırtına ve Sıcaklık Yönetimi",
        paragraphs: [
          "Kamp öncesi ve kamp sırasında hava durumunu günlük kontrol edin. Ani fırtına, dolu ve şimşek çadır kurulu alanlarda ciddi risk oluşturur; açık alanda yüksek ağaç altından uzaklaşın ve düşük profilli bir noktaya geçin.",
          "Ege meltemi ve Akdeniz fırtınaları çadır stabilitesini test eder; sağlam kazık ve gerdirme sistemi şarttır. Assos, Kaş ve Datça rotalarında meltem gecelerinde çadır sabitleme kritiktir; kum torbası ağırlık sistemi kullanın.",
          "Dağ rotalarında gece sıcaklığı gündüze göre 15°C+ düşebilir; Yusufeli ve Abant'ta yaz ortasında bile gece 5°C'nin altına inilebilir. Katmanlı giyim hayati önem taşır; ıslak giysi hemen değiştirilmelidir.",
        ],
        links: [
          {
            label: "Yaz Kampı vs Kış Kampı",
            href: "/rehberler/yaz-kampi-vs-kis-kampi",
          },
        ],
        subsections: [
          {
            id: "simsek-firtina",
            heading: "Şimşek ve Fırtına Anında Yapılacaklar",
            paragraphs: [
              "Şimşek riski yüksek hava koşullarında çadırda kalmayın; araç içi veya düşük profilli, ağaçsız bir nokta daha güvenlidir. Metal kazık ve gerdirme direkleri şimşek riskini artırır; fırtına yaklaşırken çadırı sökmek gerekebilir.",
              "Kartepe ve Olympos orman rotalarında yüksek ağaç altında kamp kurmak fırtına anında düşen dal riski taşır. Açık alanda düşük profilli bir nokta tercih edin.",
            ],
          },
          {
            id: "hipotermi-onleme",
            heading: "Hipotermi Önleme ve Sıcaklık Yönetimi",
            paragraphs: [
              "Abant kış kampında gece sıcaklığı -15°C'ye kadar inebilir; hipotermi belirtileri (titreme, konuşma güçlüğü, uyuşukluk) ciddi sağlık riski taşır. Termos sıcak içecek, ekstra katman ve kuru giysi zorunlu ekipmandır.",
              "Deniz kenarında gün batımından sonra kıyı sıcaklığı hızla düşer; termal içlik ve rüzgâr kesici katman gece konforunu belirgin artırır. Islak giysi hemen değiştirilmeli; nem vücut ısısı kaybını hızlandırır.",
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
        id: "yangin-guvenligi-detay",
        heading: "Orman Yangını ve Ateş Güvenliği",
        paragraphs: [
          "Orman yangını riski yüksek dönemlerde (haziran-eylüm kuraklığı) açık ateş çoğu bölgede yasaktır. Gaz ocak kullanımı hem güvenli hem yasal açıdan tercih edilir. Ateş yakılan izinli alanlarda bile tamamen söndürülmeden terk edilmemelidir.",
          "Olympos, Kazdağı ve Yusufeli gibi orman içi rotalarda sigara ve cam şişe atıkları yangın riskini artırır. Çöp toplama ve alanı temiz bırakma güvenlik zincirinin parçasıdır; kuru ot ve yaprak birikimi yangın hızını artırır.",
          "Orman yangını ihbar hattı 177'dir; telefona kaydedin. Yangın riski yüksek günlerde kamp planını ertelemek hem güvenli hem sorumlu bir karardır.",
        ],
        links: [
          {
            label: "Yusufeli Çoruh Nehri Kampı",
            href: "/kamp-alanlari/artvin/yusufeli/yusufeli-coruh-nehri-kampi",
          },
          {
            label: "Olympos Adrasan Koyu Kampı",
            href: "/kamp-alanlari/antalya/olympos/olympos-adrasan-koyu-kampi",
          },
        ],
      },
      {
        id: "yaban-hayati-detay",
        heading: "Yaban Hayatı, Böcekler ve Gıda Güvenliği",
        paragraphs: [
          "Yiyecekleri çadır dışında, kapalı kapta ve mümkünse ağaçta asılı saklayın; domuz, tilki ve köpekbalığı kuşu kamp alanlarına yiyecek kokusuyla gelir. Olympos vadisinde domuz ziyaretleri gece saatlerinde sık görülür.",
          "Böcek kovucu ve kene kontrolü orman rotalarında (Kartepe, Yusufeli, Kazdağı) önemlidir; kamp dönüşünde vücut taraması yapın. Yılan ve akrep riski taşlık ve kurak alanlarda (Assos, Kaş kayalıkları) artar; çadır kurmadan önce zemini kontrol edin.",
          "Karşılaşmada uzaklaşın; müdahale etmeyin. Yılan ısırığı ve akrep sokması durumunda 112'yi arayın ve hareket etmeyin; ilk yardım çantasında antihistamin bulundurun.",
        ],
      },
      {
        id: "gece-iletisim-detay",
        heading: "Gece Güvenliği, İletişim ve Acil Durum Planı",
        paragraphs: [
          "Değerli eşyaları çadırda görünür bırakmayın; araçta kilitli bölmede saklayın. Gece tek başına uzak alanlara gitmeyin; kafa lambası ve düdük acil durum sinyali için taşınmalıdır.",
          "Telefon şarjı ve offline harita izole alanlarda (Yusufeli, Datça iç koyları, Gökçeada kuzey koyları) kritiktir. Acil durum numaralarını (112, 177 orman yangını) kayıtlı tutun. Tesisli alanlarda gece güvenlik devriyesi avantaj sağlar.",
          "Kamp planını bir yakına bildirin: rota, varış saati, dönüş tarihi. İletişim kesintisi durumunda (Yusufeli yaylaları, Datça Palamutbükü) en geç 24 saat sonra haber verilmemesi durumunda arama başlatılması için bu bilgi hayati önem taşır.",
        ],
        links: [
          {
            label: "İlk Yardım Çantası Rehberi",
            href: "/kamp-ekipmanlari/ilk-yardim",
          },
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "deniz-kenari-guvenlik-detay",
        heading: "Deniz Kenarı ve Caretta Caretta Güvenlik Kuralları",
        paragraphs: [
          "Caretta caretta yumurtlama alanlarında (Adrasan, Çıralı) gece ışık kısıtlaması uygulanır; kırmızı ışık ve sessizlik kurallarına uyum zorunludur. Plastik atık deniz canlıları için doğrudan tehdit oluşturur.",
          "Deniz kenarında gelgit etkisi bazı koylarda (Gökçeada, Datça) çadır kurulum alanını gece saatlerinde daraltabilir; yüksek tabanlı mat ve hafif eğimli zemin tercih edilmelidir. Deniz suyuyla temas sonrası tatlı su stoku kritiktir.",
          "Kıyıda yürürken kayalık ve deniz kestanesi riskine dikkat edin; Kaş ve Kaputaş kayalık zeminli rotalardır. Yüzme yeteneği olmayanlar korunaklı koylarda kalmalı; açık deniz akıntısı (Kaş Kaputaş) tehlikelidir.",
        ],
        links: [
          {
            label: "Deniz Kenarı Kamp Rehberi",
            href: "/rehberler/deniz-kenari-kamp-rehberi",
          },
          {
            label: "Datça Palamutbükü Kamp",
            href: "/kamp-alanlari/mugla/datca/datca-palamutbuku-kamp",
          },
        ],
      },
      {
        id: "acil-durum-plan",
        heading: "Acil Durum Planı ve İletişim Protokolü",
        paragraphs: [
          "Kamp planını bir yakına bildirin: rota, varış saati, dönüş tarihi ve acil durum numaraları. Yusufeli yaylaları, Datça Palamutbükü ve Gökçeada kuzey koyları gibi izole alanlarda telefon çekimi zayıftır; 24 saat haber verilmemesi durumunda arama başlatılması için bu bilgi hayati önem taşır.",
          "112 acil hattı, 177 orman yangını hattı ve en yakın jandarma karakolu numaralarını telefona kaydedin. Offline harita (Maps.me, Gaia GPS) indirin; Datça ve Yusufeli rotalarında GPS sinyali bile kesilebilir.",
          "Acil durum çantasında düdük, ayna (sinyal), powerbank, ilk yardım, acil battaniye ve yedek ilaçlar bulunmalıdır. Tesisli alanlarda (Kartepe, Abant) gece güvenlik devriyesi avantaj sağlar; izole rotalarda grup halinde kamp güvenliği artırır.",
        ],
      },
      {
        id: "yangin-yasagi-donemleri",
        heading: "Yangın Güvenliği ve Yangın Yasağı Dönemleri",
        paragraphs: [
          "Türkiye'de orman yangını riski yaz ve sonbahar kuraklığında belirgin artar; birçok ilde haziran–eylül arasında açık ateş, mangal ve sigara orman içinde yasaklanır. Resmi yasak dönemlerini kamp öncesi il orman müdürlüğü veya tesis yönetiminden teyit edin; yasak günlerde planı ertelemek hem yasal hem güvenli bir karardır.",
          "Ateş yakılmasına izin verilen alanlarda bile gaz ocak tercih edin; açık alev rüzgârla saniyeler içinde kontrolden çıkar. Mangal ve ocak alevi çadırdan, kuru ot yığınından ve ağaç gölgelerinden en az üç metre uzakta olmalıdır. Kullanım sonrası kömür ve kül soğuyana kadar bekleyin; su veya toprakla tamamen söndürmeden alanı terk etmeyin.",
          "Orman yangını ihbar hattı 177'dir; telefona kaydedin ve konumunuzu mümkünse GPS koordinatıyla birlikte bildirin. Kamp alanında cam şişe, sigara izmariti ve yanıcı atık bırakmak yangın riskini artırır; tüm çöpleri kapalı torbalarda geri götürün. Rüzgârlı günlerde ateş yasağı olsa bile ocak kullanımında ekstra dikkat gösterin.",
        ],
        links: [
          {
            label: "Kamp Alanları",
            href: "/kamp-alanlari",
          },
        ],
      },
      {
        id: "yaban-hayvani-karsilasma",
        heading: "Yaban Hayvanı Karşılaşmaları: Ayı, Yılan ve Böcek",
        paragraphs: [
          "Türkiye'de kamp alanlarında en sık karşılaşılan büyük yaban hayvanları domuz, tilki, kurt ve bazı dağlık bölgelerde boz ayıdır. Yiyecekleri çadır dışında, kapalı kapta ve mümkünse ağaçta asılı saklayın; açık atıştırmalık ve çöp kokusu hayvanları gece kamp alanına çeker. Ayı veya domuz gördüğünüzde yavaşça geri çekilin, koşmayın ve hayvanı beslemeyin.",
          "Yılan ve akrep riski taşlık, kurak ve sıcak zeminlerde artar; çadır kurmadan önce alanı taş ve çalı altında kontrol edin. Karşılaşmada hayvanı kışkırtmayın; yılan ısırığı veya akrep sokması durumunda 112'yi arayın, ısırılan bölgeyi hareket ettirmeyin ve mümkünse hayvanı tanımlamak için fotoğraf çekin. Orman rotalarında kene, arı ve sivrisinek yoğundur; uzun kollu giysi, böcek kovucu ve kamp dönüşünde vücut taraması alışkanlık haline getirin.",
          "Zehirli böcek ısırığında antihistamin ve soğuk kompres ilk yardım çantasında bulunmalıdır. Alerjik reaksiyon belirtileri (nefes darlığı, yüzde şişme) acil tıbbi müdahale gerektirir. Gece tuvalet ve su kaynağına giderken kafa lambası kullanın; karanlıkta yılan ve akrep aktivitesi artabilir.",
        ],
      },
      {
        id: "ilk-yardim-cantasi-mudahale",
        heading: "İlk Yardım Çantası İçeriği ve Temel Müdahale",
        paragraphs: [
          "Her kampçı çantasında yara bandı, steril gazlı bez, antiseptik, elastik bandaj, makas, yanık kremi, ağrı kesici, antihistamin, eldiven ve acil battaniye bulunmalıdır. Kişisel ilaçlar (astım spreyi, insülin, kalp ilacı) ayrı su geçirmez torbada taşınmalı; son kullanma tarihleri kamp öncesi kontrol edilmelidir.",
          "Kesik ve sıyrıklarda önce kanamayı durdurun, sonra antiseptik uygulayıp bandajlayın. Yanık müdahalesinde buz doğrudan cilde değdirilmemeli; soğuk su veya nemli bez tercih edilir. Burkulma ve incinmede RICE protokolü (dinlenme, buz, bandaj, yükseltme) uygulanır; şiddetli ağrı ve hareket kısıtlılığında 112 aranmalıdır.",
          "Isı çarpması belirtilerinde (baş dönmesi, bulantı, aşırı terleme) kişiyi gölgeye alın, sıvı verin ve vücudu serinletin. Hipotermi şüphesinde (titreme, konuşma güçlüğü) ıslak giysiyi çıkarın, kuru katman ve acil battaniye ile ısıtın. İlk yardım bilgisi tazelenmemişse temel eğitim alınması önerilir.",
        ],
        links: [
          {
            label: "İlk Yardım Çantası",
            href: "/kamp-ekipmanlari/ilk-yardim",
          },
          {
            label: "Kamp Ekipmanları Kontrol Listesi",
            href: "/rehberler/kamp-ekipmanlari-kontrol-listesi",
          },
        ],
      },
      {
        id: "sinyal-yok-acil-iletisim",
        heading: "Sinyal Yok İse Acil İletişim",
        paragraphs: [
          "Türkiye'nin dağ, yayla ve iç koy rotalarında mobil şebeke kesintisi sık görülür; kamp planını bir yakına bildirmek (rota, varış ve dönüş tarihi) sinyal olmasa bile en temel güvenlik adımıdır. Offline harita indirin; GPS çoğu zaman şebeke olmadan da konum gösterir.",
          "Sinyal yokken acil durumda 112'yi aramayı deneyin; birçok operatörde acil çağrılar zayıf sinyalle bile yönlendirilir. Başarısız olursa yüksek noktaya çıkın, düdük ve ayna ile görsel-işitsel sinyal verin. Grup halinde kamp yapıyorsanız bir kişi yardım aramaya giderken diğerleri yaralıyı sıcak ve hareketsiz tutmalıdır.",
          "Uydu acil cihazı (PLB/inReach) uzun ve izole rotalarda hayati avantaj sağlar; bütçe elverişliyse dağ kampı planlayanlar için değerlendirilmelidir. Powerbank ve telefonu uçak modunda saklamak pil ömrünü uzatır; acil anında şarj kalmaması sık yapılan bir hatadır.",
        ],
      },
      {
        id: "cocuklu-aile-guvenlik",
        heading: "Çocuklu Ailelerde Ekstra Güvenlik",
        paragraphs: [
          "Çocuklu aileler ilk kamp deneyiminde altyapılı tesis tercih etmelidir: tuvalet, duş, aydınlatma ve güvenli oyun alanı gece konforunu ve güvenliği artırır. Çocuklara kamp alanı sınırlarını ve gece tek başına uzaklaşmama kuralını kurulum sırasında gösterin; kafa lambası ve düdük her çocuğun erişebileceği yerde olmalıdır.",
          "Su kenarı, kayalık zemin ve dik yamaçlarda çocukları sürekli gözetim altında tutun; can yeleği göl ve deniz kenarında zorunlu sayılmalıdır. Çocuk uyku tulumu konfor derecesi yetişkinle aynı mantıkla seçilmeli; gece üşümesi hipotermi riskini artırır. İlk yardım çantasına çocuk dozunda ateş düşürücü, yara bandı ve böcek kovucu ekleyin.",
          "Gece sessizliği ve komşu çadırlara saygı çocuklu ailelerde daha zor olsa da kamp etiğinin parçasıdır. Acil durum planını çocuk yaşına uygun basit cümlelerle anlatın: 'Kaybolursan çadırda kal, düdük çal.' Kamp alanları sayfasından aile dostu tesisleri filtreleyerek başlangıç rotanızı seçebilirsiniz.",
        ],
        links: [
          {
            label: "İlk Kez Kamp Rehberi",
            href: "/rehberler/ilk-kez-kamp-rehberi",
          },
          {
            label: "Kamp Alanları",
            href: "/kamp-alanlari",
          },
        ],
      },
    ],
    relatedGuides: [
      {
        label: "Yaz Kampı vs Kış Kampı",
        href: "/rehberler/yaz-kampi-vs-kis-kampi",
      },
      {
        label: "Deniz Kenarı Kamp Rehberi",
        href: "/rehberler/deniz-kenari-kamp-rehberi",
      },
    ],
  },
};
