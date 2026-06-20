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
