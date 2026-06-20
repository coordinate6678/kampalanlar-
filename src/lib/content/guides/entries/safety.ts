import { PLACE } from "@/data/media/place-images";
import {
  DEFAULT_GUIDE_AUTHOR,
  GUIDE_PUBLISHED_AT,
  GUIDE_UPDATED_AT,
} from "@/lib/content/guides/constants";
import type { GuideContent } from "@/lib/content/guides/types";

export const safetyGuides: Record<string, GuideContent> = {
  "kamp-guvenligi-rehberi": {
    image: PLACE.yusufeliCoruh,
    intro:
      "Kamp güvenliği doğru planlama, hava koşullarına uyum, yangın önlemleri ve yaban hayatına saygıdan geçer. Türkiye'de kamp yaparken orman yangını riski, ani hava değişimi ve izole alanlarda iletişim kesintisi en sık karşılaşılan risklerdir.",
    sections: [
      {
        id: "hava-kosullari",
        heading: "Hava Koşulları ve Fırtına",
        paragraphs: [
          "Kamp öncesi ve kamp sırasında hava durumunu günlük kontrol edin. Ani fırtına, dolu ve şimşek çadır kurulu alanlarda ciddi risk oluşturur; açık alanda yüksek ağaç altından uzaklaşın.",
          "Ege meltemi ve Akdeniz fırtınaları çadır stabilitesini test eder; sağlam kazık ve gerdirme sistemi şarttır. Dağ rotalarında gece sıcaklığı gündüze göre 15°C+ düşebilir; katmanlı giyim hayati önem taşır.",
        ],
      },
      {
        id: "yangin-guvenligi",
        heading: "Ateş ve Yangın Güvenliği",
        paragraphs: [
          "Orman yangını riski yüksek dönemlerde (yaz kuraklığı) açık ateş çoğu bölgede yasaktır. Gaz ocak kullanımı hem güvenli hem yasal açıdan tercih edilir. Ateş yakılan izinli alanlarda bile tamamen söndürülmeden terk edilmemelidir.",
          "Olympos, Kazdağı ve Yusufeli gibi orman içi rotalarda sigara ve cam şişe atıkları yangın riskini artırır. Çöp toplama ve alanı temiz bırakma güvenlik zincirinin parçasıdır.",
        ],
        links: [
          {
            label: "Yusufeli Çoruh Nehri Kampı",
            href: "/kamp-alanlari/artvin/yusufeli/yusufeli-coruh-nehri-kampi",
          },
        ],
      },
      {
        id: "yaban-hayati",
        heading: "Yaban Hayatı ve Böcekler",
        paragraphs: [
          "Yiyecekleri çadır dışında, kapalı kapta ve ağaçta asılı saklayın; domuz, tilki ve köpekbalığı kuşu kamp alanlarına yiyecek kokusuyla gelir. Böcek kovucu ve kene kontrolü orman rotalarında önemlidir.",
          "Yılan ve akrep riski taşlık ve kurak alanlarda artar; çadır kurmadan önce zemini kontrol edin. Karşılaşmada uzaklaşın; müdahale etmeyin.",
        ],
      },
      {
        id: "gece-guvenligi",
        heading: "Gece Güvenliği ve İletişim",
        paragraphs: [
          "Değerli eşyaları çadırda görünür bırakmayın; araçta kilitli bölmede saklayın. Gece tek başına uzak alanlara gitmeyin; kafa lambası ve düdük acil durum sinyali için taşınmalıdır.",
          "Telefon şarjı ve offline harita izole alanlarda (Yusufeli, Datça iç koyları) kritiktir. Acil durum numaralarını (112, 177 orman yangını) kayıtlı tutun. Tesisli alanlarda gece güvenlik devriyesi avantaj sağlar.",
        ],
        links: [
          { label: "İlk Yardım Çantası Rehberi", href: "/kamp-ekipmanlari/ilk-yardim" },
          { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
        ],
      },
    ],
    relatedCampsites: [
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
      {
        provinceSlug: "mugla",
        districtSlug: "datca",
        slug: "datca-palamutbuku-kamp",
      },
    ],
    relatedGuides: [
      { label: "İlk Kez Kamp Rehberi", href: "/rehberler/ilk-kez-kamp-rehberi" },
      { label: "Kamp Ekipmanları Kontrol Listesi", href: "/rehberler/kamp-ekipmanlari-kontrol-listesi" },
    ],
    faq: [
      {
        question: "Kamp alanında ateş yakmak yasak mı?",
        answer:
          "Orman yangını riski dönemlerinde çoğu bölgede yasaktır. İzinli alanlarda bile kontrollü ateş ve tam söndürme zorunludur; gaz ocak tercih edilmelidir.",
      },
      {
        question: "Yıldırım riskinde ne yapmalıyım?",
        answer:
          "Açık alanda çadırdan çıkın, yüksek noktalardan ve tek ağaçlardan uzaklaşın, çömelip ayak tabanlarını birleştirin.",
      },
      {
        question: "Kamp alanında yaban hayvan riski var mı?",
        answer:
          "Yiyecek düzgün saklandığında risk düşüktür. Orman rotalarında kene ve böcek kovucu kullanın; büyük memelilerden uzak durun.",
      },
      {
        question: "Acil durumda kampa en yakın yardım nasıl bulunur?",
        answer:
          "112 acil hattını arayın. Tesisli alanlarda yönetime bildirin; izole rotalarda offline harita ve powerbank şarttır.",
      },
    ],
    author: DEFAULT_GUIDE_AUTHOR,
    publishedAt: GUIDE_PUBLISHED_AT,
    updatedAt: GUIDE_UPDATED_AT,
  },
};
