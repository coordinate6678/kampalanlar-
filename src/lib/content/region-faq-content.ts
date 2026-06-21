import type { FaqItem } from "@/lib/types";

export const provinceFaqOverrides: Record<string, FaqItem[]> = {
  izmit: [
    {
      question: "Kocaeli (İzmit) bölgesinde Sapanca Gölü ve Kartepe çevresinde kamp yapılabilir mi?",
      answer:
        "Sapanca Gölü kıyısındaki mesire alanları ve Kartepe yamaçlarında belirlenmiş noktalarda kamp mümkündür; ancak göl kenarında çadır kurulumu her noktada serbest değildir. Kartepe'de kış aylarında kar kampı tercih edilirken yazın serin yayla havası sunar. Orman yangını dönemlerinde bölge genelinde geçici yasaklar uygulanabilir; gitmeden önce Kocaeli Orman Bölge Müdürlüğü duyurularını kontrol edin.",
    },
    {
      question: "İstanbul'a yakın hafta sonu kampı için İzmit rotası nasıl planlanır?",
      answer:
        "İzmit, TEM ve D-100 otoyolları üzerinden İstanbul'dan 1–1,5 saat mesafededir; bu nedenle Cuma akşamı çıkışlı hafta sonu kampı için en pratik Marmara rotalarından biridir. Kartepe ve Maşukiye hattında tesisli kamp alanları yoğun talep görür; bayram ve yaz sonu dönemlerinde erken rezervasyon şarttır. Özel araç dışında Sapanca'ya trenle ulaşıp son kilometreyi taksi veya servisle tamamlamak mümkündür.",
    },
    {
      question: "İzmit'te karavan ve çadır kampı için hangi tesis türleri yaygın?",
      answer:
        "Bölgede karavan parkı, elektrik/su bağlantılı tesisler ve geleneksel çadır alanları bir arada bulunur. Kartepe yamaçlarında rüzgâra karşı korunaklı kurulum önemlidir; göl kenarı tesislerinde nem ve sabah sisine karşı uygun çadır seçimi gerekir. Rehberimizdeki İzmit kamp listesinden tesis tipine göre filtreleme yapabilirsiniz.",
    },
    {
      question: "İzmit kamp alanlarına ulaşım ve park imkânları nasıl?",
      answer:
        "Ana ulaşım otoyol ve il yolu ağı üzerinden sağlanır; Kartepe yönünde virajlı dağ yolları kışın kar zinciri gerektirebilir. Popüler tesislerde otopark genelde mevcuttur, ancak hafta sonları doluluk erken saatlerde başlar. Her kamp sayfasında harita bağlantısı ve ulaşım notları yer alır.",
    },
  ],
  canakkale: [
    {
      question: "Çanakkale'de Assos ve Gökçeada'da kamp yapmak için izin gerekir mi?",
      answer:
        "Assos antik liman çevresinde ve Gökçeada sahillerinde kamp kuralları alandan alana değişir. Gökçeada'da belirlenmiş kamp alanları dışında izinsiz çadır kurmak yasaktır; ada feribot seferlerine bağlı planlama yapılmalıdır. Assos'ta özel tesisler ve sınırlı kamu alanları mevcuttur; antik sit alanına yakın bölgelerde ek kısıtlamalar uygulanabilir.",
    },
    {
      question: "Gelibolu Yarımadası'nda tarihi rota ile kamp birleştirilebilir mi?",
      answer:
        "Gelibolu'da anıt ve şehitlik ziyaretleri günübirlik yoğun geçer; konaklama için Eceabat ve Bigali çevresindeki tesisler tercih edilir. Tarihi alanların hemen bitişiğinde çadır kurulumu genelde mümkün değildir; rehberli turlarla gündüz gezisi, akşam belirlenmiş kamp alanında konaklama modeli en uygunudur.",
    },
    {
      question: "Çanakkale'de deniz kenarı kampı için en uygun mevsim hangisi?",
      answer:
        "Ege kıyısı Assos ve Bozcaada hattında haziran–eylül arası en ideal dönemdir; meltem rüzgârı çadır kurulumunu etkileyebilir. Gökçeada'da yaz sonu kalabalık artar; ilkbahar ve erken sonbahar daha sakin alternatifler sunar. Kış aylarında rüzgâr ve yağış nedeniyle deniz kenarı kampı sınırlıdır.",
    },
    {
      question: "Çanakkale kamp rotalarına feribot ve araç ulaşımı nasıl organize edilir?",
      answer:
        "Gökçeada ve Bozcaada'ya Kabatepe ve Geyikli iskelelerinden feribotla geçilir; yaz sezonunda rezervasyon ve erken saat kalkış önerilir. Ana karada otoyol ağı iyi durumdadır; Assos yönünde dar virajlı yollar dikkat gerektirir. Araçsız ziyaretçiler için ada içi minibüs ve taksi seçenekleri sınırlıdır.",
    },
  ],
  istanbul: [
    {
      question: "İstanbul'da Belgrad Ormanı ve Şile-Ağva hattında kamp yapılabilir mi?",
      answer:
        "Belgrad Ormanı'nda belirlenmiş mesire ve kamp alanları mevcuttur; orman yangını riski nedeniyle yaz aylarında sıkı denetim uygulanır ve gece kalış izinleri dönemsel değişebilir. Şile ve Ağva'da nehir kenarı tesisler hafta sonu yoğun talep görür. İstanbul sınırları içinde izinsiz orman kampı yasaktır; mutlaka resmi tesis veya izinli alan tercih edilmelidir.",
    },
    {
      question: "İstanbul'dan günübirlik veya hafta sonu kampı için en pratik çıkış noktaları neresi?",
      answer:
        "Şile kuzey sahil, Ağva-Göksu nehir birleşimi ve Belgrad Ormanı girişleri İstanbul'un en erişilebilir doğa kaçışlarıdır. Trafik yoğunluğu Cuma akşamı ve cumartesi sabahı ciddi gecikme yaratabilir; erken çıkış veya hafta içi planlama avantaj sağlar. Toplu taşımayla Şile'ye otobüs, Ağva'ya aktarmalı ulaşım mümkündür.",
    },
    {
      question: "İstanbul kamp alanlarında güvenlik ve altyapı beklentisi nasıl olmalı?",
      answer:
        "Metropol yakınında elektrik, duş ve market erişimi genelde iyidir; ancak alanlar kalabalık olabilir. Gece güvenliği için tesisli alanlar tercih edilmeli, değerli eşyalar araçta bırakılmamalıdır. Orman alanlarında telefon çekimi değişkendir; acil durum planı yapılmalıdır.",
    },
    {
      question: "İstanbul'da karavan parkı bulmak mümkün mü?",
      answer:
        "Şehir sınırları içinde karavan parkı seçenekleri sınırlıdır; çoğu tesis Şile, Silivri veya Tuzla çevresinde konumlanır. Elektrik ve atık su bağlantısı sunan tesislerde önceden rezervasyon şarttır. Rehberimizdeki İstanbul listesinden karavan uyumlu tesisleri inceleyebilirsiniz.",
    },
  ],
  bursa: [
    {
      question: "Bursa'da Uludağ'da kamp ve yayla konaklaması nasıl planlanır?",
      answer:
        "Uludağ'da kış sezonunda kayak tesisleri, yaz aylarında ise yayla ve trekking rotaları öne çıkar. Yüksek rakımda gece sıcaklıkları düşer; dört mevsim uyku tulumu şarttır. Uludağ Milli Parkı sınırlarında belirlenmiş alanlar dışında kamp yasaktır; park giriş kurallarını önceden öğrenin.",
    },
    {
      question: "Cumalıkızık ve Orhaneli hattında doğa kampı tercih edilebilir mi?",
      answer:
        "Cumalıkızık çevresinde tarihi doku nedeniyle çadır kurulumu kısıtlıdır; konaklama genelde butik pansiyon veya yakın mesire alanları üzerinden planlanır. Orhaneli ve Sadağı Kanyonu yönünde orman içi tesisler mevcuttur. Sonbahar yaprak döneminde talep artar; hafta sonu rezervasyonu önerilir.",
    },
    {
      question: "Bursa kamp alanlarına İzmir veya İstanbul'dan ulaşım ne kadar sürer?",
      answer:
        "İstanbul'dan Osmangazi Köprüsü veya feribot+otoyol kombinasyonuyla yaklaşık 2–2,5 saat; İzmir yönünden Bursa-İzmir otoyolu ile 3–4 saat sürer. Uludağ yönünde son virajlı yol kışın zincir gerektirebilir. Bursa şehir merkezinden ilçelere dolmuş hatları mevcuttur.",
    },
    {
      question: "Bursa'da termal kaplıca ile kamp kombinasyonu mümkün mü?",
      answer:
        "Çekirge ve Gemlik hattında termal tesisler kamp sonrası dinlenme için ideal tamamlayıcıdır. Bazı kamp işletmeleri kaplıca anlaşmalı paket sunar. Rehberimizdeki Bursa tesislerinin sunduğu ek hizmetleri karşılaştırabilirsiniz.",
    },
  ],
  tekirdag: [
    {
      question: "Tekirdağ Şarköy ve Mürefte bağ rotasında kamp yapılabilir mi?",
      answer:
        "Şarköy-Mürefte sahil şeridinde deniz kenarı tesisler ve zeytinlik içi kamp alanları bulunur. Bağ bozumu döneminde (eylül–ekim) bölge canlanır; yazın meltem rüzgârı çadır kurulumunu zorlaştırabilir. Sahil bandında bazı noktalarda kamp yasağı uygulanır; tesis onaylı alanları tercih edin.",
    },
    {
      question: "Tekirdağ'da Marmara Denizi kıyısında ücretsiz kamp mümkün mü?",
      answer:
        "Kamuya açık plaj ve mesire alanlarında gece kalış çoğunlukla yasaktır veya sınırlıdır. Ücretsiz seçenekler genelde günübirlik piknik alanlarıyla sınırlı kalır. Konaklama için uygun fiyatlı sahil tesisleri veya Ergene yakını orman alanları araştırılmalıdır.",
    },
    {
      question: "Tekirdağ kamp rotası İstanbul'dan nasıl planlanır?",
      answer:
        "Tekirdağ, İstanbul'un batısında yaklaşık 1,5–2 saat mesafededir; hafta sonu kaçışı için uygundur. Şarköy yönünde sahil yolu manzaralı ancak yaz trafiğinde yavaşlayabilir. Toplu taşımayla Tekirdağ merkeze otobüs, ilçelere aktarmalı ulaşım mümkündür.",
    },
    {
      question: "Tekirdağ'da karavan kampı için hangi tesisler uygun?",
      answer:
        "Sahil bandında elektrik bağlantılı karavan parkları artmaktadır; yaz sezonunda doluluk yüksektir. Rüzgâra dayanıklı sabitleme ve deniz tuzu korozyonuna karşı ekipman kontrolü önemlidir. Rehberimizdeki Tekirdağ karavan uyumlu tesisleri inceleyin.",
    },
  ],
  izmir: [
    {
      question: "İzmir'de Çeşme meltemi rüzgârı kamp planlamasını nasıl etkiler?",
      answer:
        "Çeşme yarımadasında öğleden sonra güçlenen meltem, yaz aylarında çadır stabilitesini ciddi şekilde etkiler. Rüzgâra dayanıklı çadır, sağlam kazık ve korunaklı koy seçimi şarttır. Alaçatı ve Ilıca'da rüzgâr sörfü sezonuyla kamp talebi birlikte artar; temmuz-ağustos'ta erken rezervasyon gerekir.",
    },
    {
      question: "Urla ve Seferihisar'da sakin koy kampı için en iyi dönem hangisi?",
      answer:
        "Urla yarımadası ve Seferihisar (Türkiye'nin ilk Cittaslow ilçesi) ilkbahar ve erken sonbaharda daha sakin ve ılımandır. Seferihisar'da Sığacık Kalesi çevresi günübirlik yoğun geçer; konaklama için koy içi tesisler tercih edilmelidir. Yaz ortasında kalabalık ve fiyatlar artar.",
    },
    {
      question: "İzmir kamp alanlarına Adnan Menderes Havalimanı'ndan ulaşım nasıl?",
      answer:
        "Havalimanından Çeşme yönüne otobüs ve transfer hatları mevcuttur; araç kiralama kıyı ilçelerine esneklik sağlar. Dikili ve Bergama gibi kuzey ilçeleri daha uzun mesafededir. Metro ve İZBAN ile merkeze ulaşıp ilçe dolmuşlarına aktarma yapılabilir.",
    },
    {
      question: "İzmir'de antik kent yakınında kamp yapılabilir mi?",
      answer:
        "Efes, Bergama ve Teos çevresinde konaklama genelde belirlenmiş tesislerle sınırlıdır; sit alanı içinde çadır kurmak yasaktır. Antik kent ziyaretini gündüz, akşam yakın mesafedeki kamp tesisinde konaklama modeli en doğru yaklaşımdır.",
    },
    {
      question: "İzmir'de kamp yaparken meltem için minimum ekipman nedir?",
      answer:
        "3 mevsim çadır, ekstra gerdirme ipi ve kum/ağırlık sistemi meltem gecelerinde stabilite sağlar. Korunaklı koy seçimi uyku kalitesini artırır.",
    },
    {
      question: "İzmir kamp alanlarında ücretsiz plaj kampı mümkün mü?",
      answer:
        "Kamuya açık plajlarda gece kalış çoğunlukla yasaktır veya sınırlıdır. Konaklama için tesis onaylı alanlar tercih edilmelidir.",
    },
    {
      question: "İzmir bölgesindeki kamp alanları listesine nereden bakabilirim?",
      answer:
        "İzmir il rehber sayfamızdan ilçe filtreleriyle mevcut tesis kayıtlarına ulaşabilirsiniz.",
    },
  ],
  mugla: [
    {
      question: "Muğla'da Datça yarımadasında kamp yapmak için nelere dikkat edilmeli?",
      answer:
        "Datça yarımadası rüzgârlı ve su kaynağı sınırlı olabilen koylar sunar; su ve gıda stokunu önceden planlayın. Knidos antik limanı çevresinde belirlenmiş alanlar dışında kamp yasaktır. Yazın feribot ve yol trafiği yoğundur; Reşadiye ve Palamutbükü gibi koylarda erken varış avantaj sağlar.",
    },
    {
      question: "Fethiye Ölüdeniz ve Kelebekler Vadisi rotasında kamp kuralları neler?",
      answer:
        "Kelebekler Vadisi'ne deniz yolu veya yürüyüş rotasıyla ulaşılır; vadide tesisli konaklama ve sınırlı çadır alanları vardır. Ölüdeniz çevresinde yamaç paraşütü sezonuyla birlikte talep zirve yapar. Milli park ve koruma alanı kurallarına uyum zorunludur; ateş yakma yasakları sıkı denetlenir.",
    },
    {
      question: "Muğla'da mavi yolculuk ile kamp kombinasyonu nasıl planlanır?",
      answer:
        "Fethiye, Göcek ve Marmaris çıkışlı tekne turları koy kampına alternatif sunar; ancak çadır kampı isteyenler karadan ulaşılabilen koy tesislerini tercih eder. Kabak Koyu gibi popüler noktalarda yaz sezonunda kalabalık ve sınırlı alan sorunu yaşanır.",
    },
    {
      question: "Muğla kamp alanlarında yaz su ve elektrik altyapısı yeterli mi?",
      answer:
        "Bodrum ve Marmaris gibi turistik merkezlerde altyapı güçlüdür; Datça ve köy içi tesislerde elektrik ve duş imkânı sınırlı olabilir. Güneş enerjili şarj cihazı ve su stoğu taşımak faydalıdır. Rehberimizdeki tesis özelliklerini karşılaştırın.",
    },
  ],
  balikesir: [
    {
      question: "Balıkesir Kaz Dağları'nda yayla kampı için en uygun dönem ve rota hangisi?",
      answer:
        "Kaz Dağları (Mount Ida) Haziran–Eylül arası yayla kampı için idealdir; Hasanboğuldu ve Sütuven Şelalesi çevresi popüler rotalardır. Rakım 1500 metreyi aşan noktalarda gece sıcaklığı düşer; katmanlı giyim ve yağmurluk şarttır. Orman yangını yasağı yaz aylarında sıkı uygulanır; açık ateş çoğu alanda yasaktır. Edremit kıyısından dağa çıkış 45–60 dakika sürer; virajlı yolda gece sürüşünden kaçının.",
    },
    {
      question: "Ayvalık ve Edremit kıyısında deniz kenarı kamp alanları nasıl seçilir?",
      answer:
        "Ayvalık adalar manzaralı koyları, Edremit ise Altınkum ve Akçay sahil bandıyla öne çıkar. Cunda Adası'na feribotla geçiş planlanmalı; adada araç trafiği yazın yoğundur. Rüzgârlı kıyılarda çadır yönünü melteme göre ayarlayın. Korunan koylarda gece kamp yasağı olabilir; belediye ve tesis onaylı alanları tercih edin. Zeytin hasat döneminde (kasım) kırsal yollar traktör trafiğiyle yavaşlar.",
    },
    {
      question: "Balıkesir'de ücretsiz orman kampı mümkün mü?",
      answer:
        "Kaz Dağları Milli Parkı ve çevre ormanlarında belirlenmiş mesire alanları dışında izinsiz kamp yasaktır. Ücretsiz seçenekler sınırlı ve genelde günübirlik kullanıma açıktır. Konaklama için Edremit ve Ayvalık hattındaki uygun fiyatlı tesisler veya Kaz Dağları eteklerindeki yayla işletmeleri araştırılmalıdır.",
    },
    {
      question: "Balıkesir kamp rotası İzmir veya Çanakkale'den nasıl birleştirilir?",
      answer:
        "Balıkesir, Ege ve Marmara arasında köprü konumundadır; Ayvalık–Bergama–Kaz Dağları üçgeni çok günlük rota için uygundur. İzmir'den Edremit otoyolu yaklaşık 2 saat; Çanakkale'den Assos üzerinden Ayvalık'a geçiş manzaralı bir alternatiftir. Araç dışında ilçeler arası ulaşım sınırlıdır; özel araç veya kiralama önerilir.",
    },
  ],
  aydin: [
    {
      question: "Aydın Dilek Yarımadası Milli Parkı'nda kamp kuralları neler?",
      answer:
        "Dilek Yarımadası-Büyük Menderes Deltası Milli Parkı'nda belirlenmiş kamp ve piknik alanları mevcuttur; koruma statüsü nedeniyle ateş yakma, çöp bırakma ve gece dışı alanlara giriş yasaktır. Yaban hayvanı gözlemi için ideal olan parkta telefon çekimi zayıf olabilir. Giriş saatleri ve kontenjan yaz sezonunda sınırlandırılabilir.",
    },
    {
      question: "Kuşadası ve Didim'de deniz kenarı kampı yoğun sezonda nasıl planlanır?",
      answer:
        "Kuşadası millî park koyları ve Didim Altınkum çevresi temmuz-ağustos'ta aşırı kalabalıktır. Haziran başı veya eylül sonu daha sakin alternatifler sunar. Didim'de rüzgârlı kıyılarda çadır sabitlemesi önemlidir; Kuşadası'nda marina ve şehir gürültüsüne uzak koy tesisleri tercih edilmelidir.",
    },
    {
      question: "Aydın'da antik kent ziyareti ile kamp rotası nasıl kurulur?",
      answer:
        "Afrodisias, Priene ve Milet antik kentleri gündüz gezisi, akşam yakın mesafedeki tesislerde konaklama modeliyle birleştirilir. Sit alanlarında çadır kurmak yasaktır. Aydın merkezden antik kentlere ulaşım özel araç veya tur organizasyonuyla kolaylaşır.",
    },
    {
      question: "Aydın kamp alanlarına İzmir'den ulaşım ne kadar sürer?",
      answer:
        "İzmir–Aydın otoyolu ile Kuşadası yaklaşık 1 saat, Didim 1,5 saat mesafededir. Nazilli ve Söke üzerinden iç kesim rotaları daha sakin seyahat sunar. Otobüs hatları yaz sezonunda sıklaşır; kırsal kamp noktalarına son kilometre genelde taksi veya yürüyüş gerektirir.",
    },
  ],
  manisa: [
    {
      question: "Manisa Spil Dağı Milli Parkı'nda kamp yapılabilir mi?",
      answer:
        "Spil Dağı'nda belirlenmiş mesire ve kamp alanları mevcuttur; yüksek rakımda gece serinliği beklenmelidir. Manisa Mesir Festivali döneminde (Nisan) şehir merkezi kalabalıklaşır; dağ rotası daha sakin kalır. Orman yangını döneminde giriş kısıtlamaları uygulanabilir.",
    },
    {
      question: "Sardes antik kenti yakınında kamp konaklaması nasıl planlanır?",
      answer:
        "Sardes (Sart) çevresinde sınırlı tesis seçeneği vardır; Salihli ilçesinden günlük ziyaret, akşam Spil eteğindeki tesislerde konaklama yaygın modeldir. Antik alan içinde çadır kurulumu yasaktır. Arkeolojik alan ziyaret saatlerini önceden kontrol edin.",
    },
    {
      question: "Manisa'da üzüm bağları ve kırsal kamp rotası birleştirilebilir mi?",
      answer:
        "Alaşehir ve Sarıgöl bağ yolları sonbahar hasat döneminde (eylül–ekim) fotoğraf ve kamp rotası için caziptir. Bağ sahiplerinin izni olmadan özel arazide kamp yapmak yasaktır. Organize bağ evi konaklamaları veya yakın mesire alanları tercih edilmelidir.",
    },
    {
      question: "Manisa kamp alanlarına İzmir ve Bursa'dan ulaşım nasıl?",
      answer:
        "İzmir'e yakın konumu nedeniyle otoyol ile 45–60 dakikada ulaşılır. Bursa yönünden Turgutlu geçişi alternatif rota sunar. Spil Dağı yolları virajlıdır; kışın kar yağışı olabilir. Toplu taşımayla Manisa merkeze ulaşım kolay; dağ eteklerine dolmuş hatları sınırlıdır.",
    },
  ],
  antalya: [
    {
      question: "Antalya'da Olympos ve Çıralı'da ağaç ev ve çadır kampı arasındaki fark nedir?",
      answer:
        "Olympos ve Çıralı, Likya Yolu üzerinde Türkiye'nin en ünlü doğa kamp destinasyonlarındandır. Ağaç ev (treehouse) tesisler elektrik ve ortak duş sunarken, çadır alanları daha ekonomik ve doğrudur. Caretta caretta yumurtlama döneminde (mayıs–ağustos) sahil ışık kısıtlaması uygulanır. Yanartaş gece ziyareti için el feneri taşıyın; tesisler arası yürüyüş mesafesi 2–5 km olabilir.",
    },
    {
      question: "Kaş ve Kalkan'da dalış turizmi ile kamp planlaması nasıl yapılır?",
      answer:
        "Kaş, Türkiye'nin en önemli dalış merkezlerinden biridir; Meis Adası manzaralı koylarda kamp tesisleri dalış okullarıyla aynı hatta konumlanır. Kalkan yamaç konumu nedeniyle dar arazi ve park sorunu yaşar; yaz sezonunda erken rezervasyon şarttır. Kekova batık şehir turu sabah erken saatlerde planlanmalı; öğleden sonra tekne trafiği artar.",
    },
    {
      question: "Antalya'da Saklıkent Kanyonu ve yayla kampı için en iyi dönem hangisi?",
      answer:
        "Saklıkent'in buz gibi suyu yaz sıcağında ferahlatıcıdır; kanyon içi kayalık ve kaygan olduğundan uygun ayakkabı şarttır. Gömbe ve Elmalı yaylaları yaz ortasında serin kaçış sunar; gece sıcaklığı 10°C'nin altına düşebilir. Yayla yolları dar ve virajlıdır; karavan için bazı rotalar uygun değildir.",
    },
    {
      question: "Antalya Havalimanı'ndan kamp alanlarına ulaşım seçenekleri neler?",
      answer:
        "Havalimanından Lara ve Kundu hattına yakın tesisler kısa mesafededir. Olympos, Kaş ve Side gibi noktalara transfer, kiralık araç veya otobüs kombinasyonu gerekir. Kaş yönü virajlı sahil yolu 3–4 saat sürebilir; mola noktalarını önceden planlayın.",
    },
    {
      question: "Antalya'da deniz kenarı kampında caretta caretta kuralları neler?",
      answer:
        "Yumurtlama sezonunda gece ışık kısıtlaması ve sessizlik uygulanır; kırmızı ışık kullanın. Plastik atık bırakmayın.",
    },
    {
      question: "Antalya kamp alanlarında yaz ortasında rezervasyon gerekir mi?",
      answer:
        "Popüler kıyı tesislerinde temmuz-ağustos döneminde erken rezervasyon önerilir. Geçiş mevsimleri daha sakin alternatifler sunar.",
    },
    {
      question: "Antalya ilindeki kamp tesislerini nasıl karşılaştırırım?",
      answer:
        "Antalya il sayfamızdaki ilçe listelerinden tesis özelliklerini, harita ve ulaşım notlarını yan yana inceleyebilirsiniz.",
    },
  ],
  mersin: [
    {
      question: "Mersin Anamur ve Kızkalesi hattında deniz kenarı kampı nasıl planlanır?",
      answer:
        "Anamur'un muz bahçeleri arası sahil şeridi ve Kızkalesi (Korykos) manzaralı koylar uzun kamp sezonu sunar; bölge Türkiye'nin en sıcak kıyılarındandır. Yaz aylarında gölge ve su tüketimi kritiktir. Kızkalesi çevresinde tarihi kalıntılar nedeniyle bazı noktalarda kamp kısıtlaması vardır.",
    },
    {
      question: "Mersin'de Toros Dağları eteklerinde yayla kampı mümkün mü?",
      answer:
        "Silifke Uzuncaburç antik kenti çevresi ve Gülnar yaylaları yaz sıcağından kaçış sunar. Rakım arttıkça gece serinliği artar; Haziran–Eylül arası idealdir. Dağ yolları bakımsız olabilir; SUV veya dikkatli sürüş önerilir.",
    },
    {
      question: "Mersin kamp rotası Adana ve Antalya arasında nasıl birleştirilir?",
      answer:
        "Mersin, Akdeniz sahil yolunun orta noktasında yer alır; Silifke–Taşucu feribotu Kıbrıs bağlantısı sunar. Adana'dan Mersin merkeze otoyol ile 1 saat; Antalya yönüne doğru Anamur rotası manzaralı ancak uzundur. Tarsus şehir merkezi kamp tesislerinden uzaktır; ilçe bazlı planlama yapın.",
    },
    {
      question: "Mersin'de yaz sıcağında kamp yaparken nelere dikkat edilmeli?",
      answer:
        "Gündüz sıcaklığı 40°C'yi aşabilir; sabah erken ve akşamüstü aktivite planlayın. Güneş koruma, bol su ve gölge tulumu şarttır. Deniz kenarında nem çadır içinde yoğunlaşır; havalandırmaya özen gösterin.",
    },
  ],
  hatay: [
    {
      question: "Hatay Samandağ ve Çevlik sahilinde kamp yapılabilir mi?",
      answer:
        "Samandağ'ın uzun kumsalları ve Çevlik kumsal kaplumbağaları (Caretta caretta) nedeniyle yaz aylarında koruma altındadır; ışık ve kamp kısıtlamaları uygulanır. Vadi kuşları gözlem alanları yakınında sessizlik kuralları geçerlidir. Hatay'ın çok kültürlü yapısı kamp sonrası gastronomi rotası için zengin fırsat sunar.",
    },
    {
      question: "Hatay'da St. Pierre Kilisesi ve antakya rotası kamp ile birleştirilebilir mi?",
      answer:
        "Antakya merkez tarihi dokusu nedeniyle çadır kampına uygun değildir; konaklama Harbiye şelaleleri veya Samandağ sahil tesislerinde planlanmalıdır. St. Pierre ve Habib-i Neccar ziyaretleri gündüz yapılır. Deprem sonrası altyapı ve yol durumunu gitmeden önce teyit edin.",
    },
    {
      question: "Hatay kamp alanlarına Gaziantep ve Adana'dan ulaşım nasıl?",
      answer:
        "Gaziantep'ten O-52 otoyolu ile yaklaşık 2 saat; Adana'dan sahil yolu ile benzer mesafe. Hatay Havalimanı yaz sezonunda charter trafiği alır. İlçeler arası ulaşımda dolmuş hatları mevcuttur; kırsal kamp noktalarına özel araç avantaj sağlar.",
    },
    {
      question: "Hatay'da kış aylarında kamp için hava koşulları nasıldır?",
      answer:
        "Hatay kışları ılıman geçer; sahil bandında yağış ve rüzgâr artabilir. Amanos Dağları eteklerinde kar yağışı nadiren görülür. Kış kampı için hafif yağmurluk ve nem yalıtımlı uyku tulumu yeterli olabilir.",
    },
  ],
  artvin: [
    {
      question: "Artvin Yusufeli ve Çoruh Nehri kanyonunda kamp ve rafting rotası nasıl planlanır?",
      answer:
        "Yusufeli, Türkiye'nin en dramatik kanyon manzaralarından birine sahiptir; Çoruh Nehri kıyısında belirlenmiş kamp noktaları rafting sezonuyla (Nisan–Ekim) birlikte canlanır. Baraj gölü nedeniyle eski köy yolları değişmiş olabilir; güncel rota haritası şarttır. Telefon çekimi birçok vadide yoktur; acil planınızı önceden paylaşın. Gece sıcaklığı rakıma göre 5–8°C'ye düşebilir.",
    },
    {
      question: "Artvin yaylalarında (Yusufeli, Şavşat, Borçka) yayla kampı için en iyi dönem hangisi?",
      answer:
        "Karadeniz yaylaları Temmuz–Ağustos'ta açılır; bu dönemde sis, yağmur ve ani hava değişimi sık görülür. Kackar Dağları eteklerinde çadır yalıtımı ve su geçirmez ekipman kritiktir. Yayla yolları çamur ve kaygan olabilir; 4x4 veya yürüyüş kombinasyonu tercih edilir. Yerel yayla şenlikleri döneminde konaklama zorlaşır.",
    },
    {
      question: "Artvin'de Karagöl-Sahara Milli Parkı kamp kuralları neler?",
      answer:
        "Karagöl ve Sahara Ormanı'nda belirlenmiş mesire alanları mevcuttur; göl kenarında nem yüksektir ve sabah sisi yoğundur. Milli parkta yaban hayvanı gözlemi yapılır; yiyecekleri çadır dışında bırakmayın. Giriş ücreti ve saat kısıtlamaları mevsime göre değişir.",
    },
    {
      question: "Artvin'e Trabzon ve Erzurum'dan ulaşım kamp planlamasını nasıl etkiler?",
      answer:
        "Trabzon Havalimanı'ndan Artvin merkeze karayolu 2,5–3 saat sürer; Yusufeli yönü ek 1–1,5 saat ekler. Erzurum üzerinden Ovit Dağı geçidi kışın kapalı olabilir. Virajlı dağ yollarında gece sürüşünden kaçının; yol yapım çalışmaları gecikme yaratabilir.",
    },
  ],
  bolu: [
    {
      question: "Bolu Abant Gölü ve Yedigöller'de kamp yapmak için rezervasyon gerekir mi?",
      answer:
        "Abant Gölü Tabiat Parkı'nda tesisli konaklama ve sınırlı çadır alanları mevcuttur; bayram ve yaz sonu dönemlerinde kontenjan dolabilir. Yedigöller Milli Parkı'nda belirlenmiş kamp alanları dışında izinsiz çadır kurmak yasaktır. Göl kenarında nem yüksektir; sabah don noktasına yakın sıcaklıklar görülebilir. Hafta sonu İstanbul trafiği giriş kapılarında kuyruk oluşturur; erken varış veya hafta içi planlama önerilir.",
    },
    {
      question: "Bolu Mudurnu tarihi evleri ve orman kampı rotası nasıl birleştirilir?",
      answer:
        "Mudurnu, Osmanlı dönemi ahşap evleriyle ünlü sakin bir ilçedir; şehir merkezinde kamp yerine butik konaklama tercih edilir. Çevre ormanlarında mesire alanları mevcuttur. Mudurnu–Göynük–Bolu üçgeni sonbahar yaprak döneminde fotoğraf rotası olarak popülerdir. Kış aylarında kar yağışı yolları kapatmayabilir ancak zincir bulundurmak gerekir.",
    },
    {
      question: "Bolu'da kış kampı ve kar aktiviteleri için hangi bölgeler uygundur?",
      answer:
        "Kartalkaya kayak merkezi kış kampına alternatif sunar; yüksek rakımda sıcaklık -15°C'ye düşebilir. Abant'ta kış göl manzarası eşsizdir ancak tesisler sınırlı açıktır. Dört mevsim uyku tulumu, kar botu ve eldiven şarttır.",
    },
    {
      question: "Bolu kamp alanlarına İstanbul'dan ulaşım ne kadar sürer?",
      answer:
        "İstanbul'dan TEM otoyolu ile Bolu merkeze yaklaşık 2–2,5 saat; Abant yönü ek 30 dakika ekler. Ankara yönünden de benzer mesafededir. Hafta sonu sabah erken çıkış trafik sıkışıklığını azaltır. Toplu taşımayla Bolu'ya otobüs, Abant'a aktarmalı ulaşım mümkündür.",
    },
  ],
  trabzon: [
    {
      question: "Trabzon Uzungöl'de kamp yapmak için en uygun dönem ve beklenti nedir?",
      answer:
        "Uzungöl yıl boyunca ziyaret edilir; yaz aylarında aşırı kalabalık ve otopark sorunu yaşanır. Göl kenarında nem yüksektir; çadır içinde yoğuşma olabilir. Belirlenmiş tesisler dışında çadır kurmak yasaktır. Hafta içi veya ilkbahar/sonbahar daha sakin deneyim sunar.",
    },
    {
      question: "Trabzon Ayder Yaylası'na kamp rotası nasıl planlanır?",
      answer:
        "Ayder'e Rize sınırından ulaşılır; yayla yolu virajlı ve sis nedeniyle gece sürüşü risklidir. Temmuz–Ağustos'ta yayla şenlikleri konaklamayı zorlaştırır. Teleferik ve tesis fiyatları sezonluk değişir; önceden rezervasyon şarttır.",
    },
    {
      question: "Trabzon'da Hamsi Festivali döneminde kamp alanları doluluk yaşar mı?",
      answer:
        "Aralık–Ocak hamsi sezonu ve Sümela Manastırı ziyaretleri şehir merkezini canlandırır; kıyı tesisleri sınırlıdır. Dağ rotaları kışın kar ve buz nedeniyle zorlaşır. Kış kampı için uygun ekipman şarttır.",
    },
    {
      question: "Trabzon Havalimanı'ndan kamp alanlarına ulaşım seçenekleri neler?",
      answer:
        "Havalimanından Uzungöl'e transfer yaklaşık 1,5 saat sürer. Şehir merkezinden ilçelere dolmuş hatları mevcuttur. Karadeniz sahil yolu yağmurlu havalarda kaygan olabilir; lastik durumunu kontrol edin.",
    },
  ],
  rize: [
    {
      question: "Rize çay tarlaları manzaralı kamp rotası nasıl kurulur?",
      answer:
        "Rize'nin yamaç çay bahçeleri arasında yürüyüş rotaları zengindir; çay fabrikası ziyareti gündüz, akşam yayla veya sahil tesisinde konaklama yaygın modeldir. Özel arazide izinsiz kamp yasaktır. Sis ve yağmur yıl boyunca sık görülür; su geçirmez ekipman şarttır.",
    },
    {
      question: "Rize Ayder ve Pokut yaylalarında kamp için en iyi dönem hangisi?",
      answer:
        "Yaylalar Temmuz–Ağustos'ta açılır; Pokut ve Gito gibi yüksek yaylalarda gece sıcaklığı düşük olabilir. Yol durumu yağmur sonrası çamurlaşır; 4x4 veya yürüyüş tercih edilir. Yayla evlerinde konaklama çadır alternatifidir.",
    },
    {
      question: "Rize'de Fırtına Deresi rafting ile kamp birleştirilebilir mi?",
      answer:
        "Fırtına Vadisi rafting sezonu (Nisan–Ekim) boyunca aktiftir; Çamlıhemşin çevresinde tesisler rafting paketleri sunar. Nehir kenarında belirlenmiş alanlar dışında kamp yasaktır. Su seviyesi yağmur sonrası hızla yükselir; güvenlik brifingine uyun.",
    },
    {
      question: "Rize kamp alanlarına Trabzon'dan ulaşım ne kadar sürer?",
      answer:
        "Trabzon–Rize sahil yolu yaklaşık 1,5 saat sürer; ilçelere dağılmak ek zaman gerektirir. Havalimanı Trabzon'dadır. Otobüs hatları sıktır; yayla yollarına özel araç veya organize tur önerilir.",
    },
  ],
  ankara: [
    {
      question: "Ankara'da Eymir Gölü ve Mogan Gölü çevresinde kamp yapılabilir mi?",
      answer:
        "ODTÜ Eymir Gölü çevresinde belirlenmiş mesire alanları günübirlik kullanıma açıktır; gece kalış çoğunlukla yasaktır veya sınırlıdır. Mogan Park'ta benzer kurallar geçerlidir. Başkent yakınında tesisli kamp için Kızılcahamam ve Soğuksu Milli Parkı yönü tercih edilir.",
    },
    {
      question: "Ankara'da Kızılcahamam kaplıca ve orman kampı rotası nasıl planlanır?",
      answer:
        "Kızılcahamam, Ankara'ya 80 km mesafede orman ve termal imkân sunar; hafta sonu İstanbul ve Ankara trafiği birleşir. Soğuksu Milli Parkı'nda belirlenmiş alanlar mevcuttur. Kış aylarında kar yağışı ve soğuk hava kamp ekipmanını zorlar.",
    },
    {
      question: "Ankara'dan Kapadokya veya Bolu'ya kamp rotası birleştirilebilir mi?",
      answer:
        "Ankara, İç Anadolu kamp rotalarının merkezindedir; Bolu'ya otoyol ile 2 saat, Nevşehir'e 3 saat mesafe vardır. Çok günlü rota planlamak mantıklıdır. Ankara çıkışlı hafta sonu trafiği Cuma akşamı yoğundur.",
    },
    {
      question: "Ankara kamp alanlarında su kaynağı ve altyapı beklentisi nasıl?",
      answer:
        "Başkent çevresinde iklim kurak ve yaz sıcağı yüksektir; bol su taşıyın. Orman alanlarında elektrik ve duş imkânı sınırlı olabilir. Rüzgâr açık platolarda çadır stabilitesini etkiler.",
    },
    {
      question: "Ankara'da kamp yaparken hangi mevsim daha uygundur?",
      answer:
        "İlkbahar ve sonbahar gündüz sıcaklığı ve gece soğuğu dengesi açısından idealdir. Yaz ortasında açık alanlarda sıcaklık yüksektir; gölge ve su stoku planlayın.",
    },
    {
      question: "Ankara kamp alanlarında yangın yasağı döneminde ne yapılmalı?",
      answer:
        "Yaz kuraklığında orman girişleri kısıtlanabilir; açık ateş yerine gaz ocak kullanın. Orman Genel Müdürlüğü duyurularını gitmeden kontrol edin.",
    },
    {
      question: "Ankara'daki kamp alanları listesine nasıl ulaşırım?",
      answer:
        "Site rehberimizdeki Ankara il sayfasından ilçe bazlı listeye erişebilirsiniz; yalnızca doğrulanmış tesis kayıtları gösterilir.",
    },
  ],
  konya: [
    {
      question: "Konya Tuz Gölü kıyısında kamp yapılabilir mi?",
      answer:
        "Tuz Gölü kıyısında manzara etkileyicidir ancak gölge, su ve rüzgâr koruması sınırlıdır. Yaz sıcağı 40°C'yi aşabilir; sabah erken kurulum önerilir. Göl çevresinde belirlenmiş mesire alanları dışında kamp kuralları değişkendir; yerel bilgi alın.",
    },
    {
      question: "Konya Meke Krater Gölü ve Karapınar kumulları kamp rotası nasıl?",
      answer:
        "Meke Gölü kuruma riski taşıyan eşsiz bir krater gölüdür; çevresi açık arazidir ve yaz sıcağında korunaksız kalır. Karapınar kumulları fotoğraf rotası olarak ilgi çeker; gece kampı için rüzgâr sabitlemesi kritiktir. Su ve gölge planlaması şarttır.",
    },
    {
      question: "Konya'da Mevlana kültür rotası ile kamp birleştirilebilir mi?",
      answer:
        "Konya merkez tarihi ve dini mekânları nedeniyle çadır kampına uygun değildir. Şehir ziyareti gündüz, akşam Tuz Gölü veya Beyşehir yönündeki tesislerde konaklama modeli uygundur. Ramazan ve Şeb-i Arus dönemlerinde şehir kalabalıklaşır.",
    },
    {
      question: "Konya kamp alanlarına ulaşım ve araç ihtiyacı nasıl?",
      answer:
        "Konya Havalimanı ve yüksek hızlı tren merkeze bağlar; kırsal kamp noktalarına özel araç şarttır. İç Anadolu düz arazisi uzun mesafe sürüş gerektirir; yakıt ve su stoğu planlayın.",
    },
  ],
  nevsehir: [
    {
      question: "Kapadokya'da (Nevşehir) vadilerde çadır kampı yasal mı?",
      answer:
        "Göreme, Ihlara ve Zelve çevresinde sit alanı statüsü nedeniyle vadilerde izinsiz çadır kurmak yasaktır. Konaklama mağara otel, pansiyon veya belirlenmiş glamping tesisleriyle sınırlıdır. Balon turu sabah erken kalkış gerektirir; gece konaklaması yakın köylerde planlanmalıdır.",
    },
    {
      question: "Kapadokya'da Ihlara Vadisi yürüyüşü ile konaklama nasıl planlanır?",
      answer:
        "Ihlara Vadisi 14 km'lik yürüyüş rotası sunar; giriş ve çıkış noktaları farklı olabilir, araç transferi planlayın. Vadide gölge ve su kaynağı mevcuttur ancak gece kalış yasaktır. Selime ve Belisırma köylerinde konaklama seçenekleri vardır.",
    },
    {
      question: "Nevşehir'de yaz ve kış kamp koşulları nasıl farklılaşır?",
      answer:
        "Yaz gündüz sıcağı 35°C'ye çıkarken gece serinler; kış aylarında kar yağışı vadileri beyaz örtüyle kaplar. Kış kampı fotoğrafçılar için cazip ancak yol kapanmaları olabilir. Rüzgâr erozyonlu arazide çadır sabitlemesi zordur.",
    },
    {
      question: "Kapadokya kamp rotasına Kayseri Havalimanı'ndan ulaşım nasıl?",
      answer:
        "Kayseri Erkilet Havalimanı Göreme'ye yaklaşık 1 saat mesafededir. Nevşehir Havalimanı daha yakın ancak sefer sayısı sınırlı olabilir. Göreme merkezden vadilere yürüyüş veya ATV turları organize edilir.",
    },
  ],
  erzurum: [
    {
      question: "Erzurum Palandöken'de kış kampı ve yüksek rakım koşulları nasıldır?",
      answer:
        "Palandöken 3200 metreye kadar çıkar; kış aylarında sıcaklık -20°C'nin altına düşebilir. Kar kampı deneyimi için dört mevsim uyku tulumu, kar botu ve kar gözlüğü şarttır. Yüksek irtifa hipoksisi (rakım etkisi) hafif baş ağrısı yapabilir; su tüketimini artırın.",
    },
    {
      question: "Erzurum Tortum Şelalesi ve Çoruh Vadisi rotasında yaz kampı mümkün mü?",
      answer:
        "Tortum Şelalesi yaz aylarında yeşil vadiler arasında konumlanır; şelale çevresinde belirlenmiş mesire alanları mevcuttur. Çoruh Vadisi rafting ve trekking rotaları sunar. Gece serinliği yüksektir; katmanlı giyim gerekir.",
    },
    {
      question: "Erzurum'da yayla kampı için en uygun dönem hangisi?",
      answer:
        "Yaylalar Haziran–Eylül arası açılır; Temmuz–Ağustos kısa yaz sezonudur. Ani yağmur ve dolu görülebilir. Ovit ve Kop dağ geçitleri kışın kapalı olabilir; rota durumunu kontrol edin.",
    },
    {
      question: "Erzurum kamp alanlarına ulaşım ve kış lastiği ihtiyacı var mı?",
      answer:
        "Erzurum Havalimanı ve tren istasyonu merkeze bağlıdır; Palandöken'e kısa mesafe vardır. Kasım–Mart arası kar lastiği ve zincir bulundurmak gerekir. İlçelere ulaşımda dolmuş hatları sınırlıdır.",
    },
  ],
  van: [
    {
      question: "Van Gölü kıyısında kamp yapmak için en uygun noktalar neresi?",
      answer:
        "Van Gölü'nün turkuaz rengi ve soda içeriği eşsizdir; Edremit (Van) kıyısı ve Çarpanak Adası manzaralı noktalar sunar. Göl kenarında rüzgâr güçlü olabilir; çadır yönünü ayarlayın. Yüksek rakım (1700 m) gece serinliği yaratır.",
    },
    {
      question: "Van'da Akdamar Adası ve Tuşba rotası kamp planlaması nasıl?",
      answer:
        "Akdamar Adası'na tekne ile gidilir; adada konaklama yoktur, günübirlik ziyaret planlanır. Konaklama Gevaş veya Van merkez kıyı tesislerinde yapılır. Holy Cross Kilisesi ziyaret saatlerini önceden kontrol edin.",
    },
    {
      question: "Van kahvaltısı kültürü ile kamp rotası birleştirilebilir mi?",
      answer:
        "Van merkez kahvaltı kültürü ünlüdür; kamp öncesi veya sonrası şehir molası planlanabilir. Van kedisi ve Van Gölü incisi hakkında bilgi almak için müze ziyareti eklenebilir. Doğu Ekspresi ile gelen ziyaretçiler için tren takvimi planlamayı etkiler.",
    },
    {
      question: "Van'a ulaşım ve sınır bölgesi kamp planlamasında nelere dikkat edilmeli?",
      answer:
        "Van Havalimanı ve karayolu bağlantıları mevcuttur; kış aylarında yoğun kar yağışı yolları kapatabilir. İran sınırına yakınlık nedeniyle güncel güvenlik duyurularını takip edin. Telefon çekimi kırsal alanlarda zayıftır.",
    },
  ],
  sanliurfa: [
    {
      question: "Şanlıurfa Göbeklitepe ziyareti ile kamp rotası nasıl planlanır?",
      answer:
        "Göbeklitepe dünyanın en eski tapınak kompleksidir; ziyaret gündüz planlanır, konaklama Harran veya Halfeti yönündeki tesislerde yapılır. Arkeolojik alanda kamp yasaktır. Yaz sıcağı 45°C'ye çıkabilir; sabah erken ziyaret şarttır.",
    },
    {
      question: "Halfeti batık cami manzaralı kamp alanları nasıl seçilir?",
      answer:
        "Halfeti'de tekne turları batık Savaşan Köyü manzarası sunar; kıyı tesisleri sınırlıdır. Fırat Nehri kıyısında nem ve sıcaklık yüksektir. Baraj gölü seviyesi mevsime göre değişir; tekne turu rezervasyonu önerilir.",
    },
    {
      question: "Şanlıurfa'da Harran kümbet evleri yakınında konaklama nasıl?",
      answer:
        "Harran'ın tarihi kümbet evleri fotoğraf rotası olarak popülerdir; çadır kampı yerine Harran otelleri veya Urfa merkez pansiyonları tercih edilir. Çöl iklimi gölge ve su tüketimini kritik kılar.",
    },
    {
      question: "Şanlıurfa kamp alanlarına Güneydoğu rotası nasıl birleştirilir?",
      answer:
        "Şanlıurfa, Mardin ve Gaziantep üçgeni gastronomi ve tarih rotası için idealdir. Otoyol ağı iyileşmiştir; yaz sıcağında araç klimaları ve su stoğu önemlidir. Urfa Havalimanı charter seferler alır.",
    },
  ],
  mardin: [
    {
      question: "Mardin taş evleri manzaralı kamp yapılabilir mi?",
      answer:
        "Mardin'in UNESCO adaylığındaki taş mimarisi dar sokakları nedeniyle şehir içinde çadır kampına uygun değildir. Konaklama butik otellerde planlanır; Deyrulzafaran ve Midyat rotası günübirlik eklenir. Mezopotamya ovası manzarası gün doğumunda en etkileyicidir.",
    },
    {
      question: "Mardin Midyat ve Dara antik kenti rotasında konaklama nasıl?",
      answer:
        "Midyat Süryani mimarisi ve gümüşçülük atölyeleriyle ünlüdür; konaklama Midyat otellerinde veya Mardin merkezde yapılır. Dara antik su sarnıçları günübirlik ziyaret edilir. Sıcak yaz günlerinde mağara benzeri taş evler doğal serinlik sunar.",
    },
    {
      question: "Mardin'de yaz sıcağında kamp ve gezi planlaması nasıl yapılır?",
      answer:
        "Güneydoğu yazları çok sıcaktır; geziyi sabah erken ve akşamüstü planlayın. Gölge, bol su ve hafif giysi şarttır. Kırsal alanlarda telefon çekimi değişkendir.",
    },
    {
      question: "Mardin kamp rotasına Diyarbakır ve Şanlıurfa'dan ulaşım nasıl?",
      answer:
        "Diyarbakır–Mardin karayolu yaklaşık 1,5 saat; Şanlıurfa yönü 2 saat sürer. Mardin Havalimanı yaz sezonunda turist trafiği alır. Eski Mardin sokakları araç trafiğine kapalıdır; otopark planlaması yapın.",
    },
  ],
  gaziantep: [
    {
      question: "Gaziantep gastronomi rotası ile kamp planlaması birleştirilebilir mi?",
      answer:
        "Gaziantep UNESCO gastronomi şehiridir; baklava, katmer ve kebap rotası şehir merkezinde planlanır. Kamp için Nizip ve Rumkale yönündeki Fırat kıyısı tesisleri tercih edilir. Şehir içinde çadır kampı mümkün değildir.",
    },
    {
      question: "Gaziantep Zeugma Mozaik Müzesi ve Rumkale rotasında konaklama nasıl?",
      answer:
        "Zeugma Müzesi dünyanın en büyük mozaik koleksiyonlarından birine sahiptir; ziyaret yarım gün sürer. Rumkale'ye tekne ile gidilir; kalıntılar üzerinde kamp yasaktır. Halfeti (Şanlıurfa) veya Nizip tesisleri konaklama için uygundur.",
    },
    {
      question: "Gaziantep'te yaz sıcağında kamp için hangi bölgeler tercih edilir?",
      answer:
        "Şehir merkezi yazın aşırı sıcaktır; Fırat kıyısı ve yükseltisi olan ilçeler nispeten serindir. Dülük antik kent çevresi günübirlik rotadır. Su tüketimi ve güneş koruma kritiktir.",
    },
    {
      question: "Gaziantep kamp alanlarına Adana ve Şanlıurfa'dan ulaşım ne kadar sürer?",
      answer:
        "Adana'ya otoyol ile yaklaşık 2,5 saat; Şanlıurfa'ya 2 saat mesafe vardır. Gaziantep Havalimanı merkeze yakındır. Güneydoğu rotasında çoklu il planlamak verimlidir.",
    },
  ],
};

export const districtFaqOverrides: Record<string, FaqItem[]> = {
  "izmit/kartepe": [
    {
      question: "Kartepe'de kışın kar kampı mı, yazın yayla kampı mı tercih edilmeli?",
      answer:
        "Kartepe kış aylarında kar yağışı ve kayak altyapısıyla kar kampına uygundur; zincir ve kar botu şarttır. Yaz aylarında serin yayla havası sunar ancak hafta sonu kalabalık artar. Maşukiye şelaleleri günübirlik ziyaret rotasına eklenebilir.",
    },
    {
      question: "Kartepe kamp alanlarına Sapanca Gölü rotası nasıl birleştirilir?",
      answer:
        "Kartepe zirvesi ile Sapanca kıyısı 20–30 dakika mesafededir; sabah göl manzarası, akşam dağ kampı planlanabilir. Otoyol çıkışları hafta sonu sıkışabilir. Göl kenarı tesislerinde nem yüksektir; çadır havalandırmasına dikkat edin.",
    },
    {
      question: "Kartepe'de rüzgâr ve sis kamp kurulumunu nasıl etkiler?",
      answer:
        "Yüksek rakımda ani sis ve rüzgâr çadır stabilitesini zorlar; sağlam kazık ve rüzgâr yönüne göre kurulum yapın. Gece sıcaklığı yaz aylarında bile 10°C'nin altına düşebilir. Hava durumunu çıkmadan kontrol edin.",
    },
    {
      question: "Kartepe'ye İstanbul'dan hafta sonu kampı için ulaşım ne kadar sürer?",
      answer:
        "İstanbul'dan TEM otoyolu ile yaklaşık 1–1,5 saat; Cuma akşamı trafik gecikmesi yaşanabilir. Toplu taşımayla Kartepe'ye doğrudan hat sınırlıdır; Sapanca istasyonundan taksi alternatiftir.",
    },
  ],
  "canakkale/assos": [
    {
      question: "Assos antik tiyatro manzaralı kamp alanları nasıl seçilir?",
      answer:
        "Assos (Behramkale) antik limanı ve Athena Tapınağı manzaralı tesisler eşsizdir; yamaç konumu rüzgâra açıktır. Meltem sezonunda çadır sabitlemesi kritiktir. Antik sit alanına yakın noktalarda ek kısıtlamalar olabilir.",
    },
    {
      question: "Assos'ta Kadırga Koyu ve çevre plajlarda kamp kuralları neler?",
      answer:
        "Kadırga ve diğer koylarda özel tesisler dışında gece kamp yasağı uygulanabilir. Yaz sezonunda kalabalık artar; haziran başı ve eylül daha sakindir. Deniz suyu kaynağı yoktur; su stoğu taşıyın.",
    },
    {
      question: "Assos'a feribot veya karayolu ile ulaşım nasıl planlanır?",
      answer:
        "Ayvacık üzerinden virajlı yamaç yolu Assos'a ulaştırır; araç dışında Ayvacık dolmuşları mevcuttur. Bozcaada feribotu Ayvacık iskelesinden kalkar; çoklu ada rotası planlanabilir. Son 5 km dar sokaktır; büyük karavanlar için park alanı sorulmalıdır.",
    },
    {
      question: "Assos'ta antik kent ziyareti ile kamp günü nasıl organize edilir?",
      answer:
        "Behramkale köyü yokuşu yürüyüş gerektirir; antik tiyatro gün batımında en güzel manzarayı sunar. Konaklama liman çevresi tesislerde planlanır. Gece aydınlatma sınırlıdır; el feneri taşıyın.",
    },
  ],
  "canakkale/gokceada": [
    {
      question: "Gökçeada'da kamp yapmak için feribot rezervasyonu şart mı?",
      answer:
        "Gökçeada'ya Kabatepe ve Geyikli iskelelerinden feribotla geçilir; yaz sezonunda araç kontenjanı dolabilir. Erken saat seferleri ve önceden bilet almak şarttır. Ada içi ulaşımda araç veya kiralık bisiklet avantaj sağlar.",
    },
    {
      question: "Gökçeada Aydıncık Plajı ve Laz Koyu kamp kuralları neler?",
      answer:
        "Aydıncık (Aydıncık Plajı) altın kumlu uzun plajıyla ünlüdür; belirlenmiş kamp alanları dışında çadır kurmak yasaktır. Laz Koyu rüzgâra karşı daha korunaklıdır. Ada genelinde su kaynağı sınırlı olabilir; stok planlayın.",
    },
    {
      question: "Gökçeada'da rüzgâr sörfü sezonu kamp talebini nasıl etkiler?",
      answer:
        "Gökçeada Türkiye'nin önemli rüzgâr sörfü merkezlerindendir; Aydıncık'ta sörf okulları sezon boyunca aktiftir. Rüzgârlı günlerde çadır kurulumu zorlaşır; korunaklı koy tercih edin.",
    },
    {
      question: "Gökçeada'da kış aylarında kamp mümkün mü?",
      answer:
        "Kış aylarında ada sakinleşir; feribot seferleri azalabilir. Rüzgâr ve yağış kamp konforunu düşürür. Altyapı kısıtlı tesisler kışın kapalı olabilir; gitmeden teyit edin.",
    },
  ],
  "izmir/cesme": [
    {
      question: "Çeşme Ilıca ve Alaçatı'da meltem rüzgârına karşı kamp nasıl kurulur?",
      answer:
        "Çeşme yarımadasında öğleden sonra güçlenen meltem, yaz aylarında çadır stabilitesini ciddi etkiler. Rüzgâra dayanıklı çadır, ekstra kazık ve ağır sabitleme malzemesi şarttır. Ilıca'da termal su kaynakları yakınındaki tesisler rüzgâra nispeten korunaklı olabilir.",
    },
    {
      question: "Çeşme'de rüzgâr sörfü sezonu kamp rezervasyonunu nasıl etkiler?",
      answer:
        "Alaçatı Pirlanta Plajı ve sörf okulları Temmuz–Ağustos'ta zirve yapar; tesisler haftalar öncesinden dolabilir. Sörf ekipmanı depolama imkânı sunan tesisleri tercih edin.",
    },
    {
      question: "Çeşme'ye İzmir merkezden ve havalimanından ulaşım nasıl?",
      answer:
        "Adnan Menderes Havalimanı'ndan Çeşme otoyolu yaklaşık 45 dakika sürer. İzmir merkezden otobüs hatları sıktır. Yaz trafiği Cumartesi sabahları yoğundur; erken çıkış önerilir.",
    },
    {
      question: "Çeşme'de Sakız Adası feribotu ile kamp rotası birleştirilebilir mi?",
      answer:
        "Çeşme iskelesinden Sakız Adası (Yunanistan) feribotu günübirlik veya çok günlü planlama sunar; pasaport gerekir. Dönüş saatine göre Çeşme tesislerinde konaklama planlayın.",
    },
  ],
  "izmir/urla": [
    {
      question: "Urla bağ yolları ve sahil kamp rotası nasıl planlanır?",
      answer:
        "Urla yarımadası bağ evleri ve sakin koylarıyla öne çıkar; Barbaros ve Özbek koyları popülerdir. Bağ bozumu döneminde (eylül) bölge canlanır. Özel arazide izinsiz kamp yasaktır; tesis onaylı alanları tercih edin.",
    },
    {
      question: "Urla'da Cittaslow yaşam tarzı kamp deneyimini nasıl etkiler?",
      answer:
        "Urla sakin tempolu bir ilçedir; gürültü kısıtlamaları ve doğal yaşam koruma bilinci yüksektir. Yerel pazar ve balık restoranları kamp rotasına eklenebilir. Yaz ortasında Alaçatı'ya göre daha sakin kalır.",
    },
    {
      question: "Urla'ya İzmir'den ulaşım ve otopark durumu nasıl?",
      answer:
        "Karşıyaka feribotu ve otoyol bağlantısı mevcuttur; merkeze 35–45 dakika mesafededir. Koy yolları dar olabilir; hafta sonu otopark sınırlıdır. Bisiklet turu bağ yollarında popülerdir.",
    },
    {
      question: "Urla'da deniz kenarı kampı için en uygun mevsim hangisi?",
      answer:
        "Mayıs–haziran ve eylül–ekim en ideal dönemlerdir; yaz ortasında sıcaklık yüksektir. Kış aylarında rüzgâr artar ancak kalabalık azalır. Deniz suyu sıcaklığı hazirandan itibaren yüzmeye uygundur.",
    },
  ],
  "izmir/seferihisar": [
    {
      question: "Seferihisar Sığacık Kalesi çevresinde kamp yapılabilir mi?",
      answer:
        "Sığacık, Cittaslow statüsüyle sakin bir liman kasabasıdır; kale çevresi günübirlik yoğun geçer. Konaklama koy içi tesislerde planlanmalı; kale surları içinde çadır kurulumu mümkün değildir. Pazar günleri organik pazar ziyareti eklenebilir.",
    },
    {
      question: "Seferihisar Akkum ve Ürkmez koylarında kamp kuralları neler?",
      answer:
        "Akkum ve Ürkmez sakin koylardır; yaz sezonunda aile ziyaretçileri artar. Korunan alanlarda gece kamp yasağı uygulanabilir. Meltem rüzgârı Çeşme'ye göre daha hafiftir.",
    },
    {
      question: "Seferihisar'da termal ve doğa kampı birleştirilebilir mi?",
      answer:
        "Seferihisar termal kaynakları sınırlıdır; yakın termal tesisler İzmir ve Aydın yönündedir. Doğa kampı için orman içi tesisler tercih edilir. Türkiye'nin ilk Cittaslow ilçesi olarak gürültü ve ışık kirliliği düşüktür.",
    },
    {
      question: "Seferihisar'a İzmir'den ulaşım ne kadar sürer?",
      answer:
        "İzmir merkezden otoyol ile yaklaşık 45–50 dakika. Toplu taşımayla Seferihisar otobüsleri mevcuttur. Sığacık'a son kilometre yürüyüş veya dolmuş gerekebilir.",
    },
  ],
  "izmir/dikili": [
    {
      question: "Dikili Bademli ve Nebiler Kanyonu rotasında kamp nasıl planlanır?",
      answer:
        "Dikili, Kaz Dağları eteklerinde zeytinlikler ve sakin koylarla Ege'nin en sakin kıyı ilçelerinden biridir. Nebiler Kanyonu yürüyüş rotası günübirlik planlanır; kanyon içi kayalık ve kaygandır. Bademli koyu rüzgâra nispeten korunaklıdır; yaz ortasında bile kalabalık sınırlı kalır.",
    },
    {
      question: "Dikili'de Çandarlı Kalesi ve antik Pitane rotası kamp ile birleştirilebilir mi?",
      answer:
        "Çandarlı Kalesi günübirlik ziyaret edilir; Pitane antik kent kalıntıları sahil yakınındadır. Konaklama Dikili sahil tesislerinde planlanır. Antik alanlarda çadır kurmak yasaktır.",
    },
    {
      question: "Dikili'ye Bergama ve Ayvalık rotasından ulaşım nasıl?",
      answer:
        "Ayvalık'tan kuzey sahil yolu ile yaklaşık 1 saat; Bergama'dan dağ eteği yolu ile 45 dakika sürer. Toplu taşıma sınırlıdır; özel araç önerilir. Dar sahil yolu yaz trafiğinde yavaşlar.",
    },
    {
      question: "Dikili'de zeytin hasat döneminde kamp planlaması nasıl yapılır?",
      answer:
        "Kasım–aralık zeytin hasat döneminde kırsal yollar traktör trafiğiyle yoğunlaşır. Hasat atmosferi fotoğraf rotası için caziptir. Tesisler açık kalır; rezervasyon genelde gerekmez.",
    },
  ],
  "mugla/fethiye": [
    {
      question: "Fethiye Ölüdeniz ve Kelebekler Vadisi kamp rotası nasıl kurulur?",
      answer:
        "Kelebekler Vadisi'ne deniz yolu veya Likya Yolu yürüyüşüyle ulaşılır; vadide tesisli konaklama ve sınırlı çadır alanları vardır. Ölüdeniz yamaç paraşütü sezonuyla kalabalıklaşır. Kabak Koyu alternatif sakin koy sunar.",
    },
    {
      question: "Fethiye Saklıkent Kanyonu günübirlik ziyareti kamp planına nasıl eklenir?",
      answer:
        "Saklıkent buz gibi suyu ve dar kanyonuyla ünlüdür; ziyaret yarım gün sürer. Kanyon içi kaygan; su ayakkabısı şarttır. Akşam Fethiye veya Ölüdeniz tesislerinde konaklama planlanır.",
    },
    {
      question: "Fethiye'de mavi yolculuk ile karadan ulaşılabilen koy kampı arasındaki fark nedir?",
      answer:
        "Tekne turları ulaşılamayan koylara erişim sağlar; karadan ulaşılan Kabak ve Butterfly Valley tesisleri bağımsız kampçılar için uygundur. Yaz sezonunda her iki seçenek de erken rezervasyon gerektirir.",
    },
    {
      question: "Fethiye Havalimanı'ndan (Dalaman) kamp alanlarına ulaşım ne kadar sürer?",
      answer:
        "Dalaman Havalimanı Fethiye merkeze yaklaşık 45 dakika mesafededir. Transfer ve kiralık araç seçenekleri mevcuttur. Ölüdeniz yönü ek 20 dakika ekler.",
    },
  ],
  "mugla/datca": [
    {
      question: "Datça yarımadasında Knidos antik limanı kamp rotası nasıl planlanır?",
      answer:
        "Knidos, yarımadanın en batı ucunda antik liman kalıntıları sunar; gün batımı manzarası eşsizdir. Antik alan içinde çadır kurmak yasaktır; yakın tesislerde konaklama planlanır. Yarımada boyunca su ve market stoğu sınırlı olabilir.",
    },
    {
      question: "Datça'da Palamutbükü ve Hayıtbükü koylarında kamp kuralları neler?",
      answer:
        "Palamutbükü ve Hayıtbükü sakin koylardır; yaz sezonunda erken varış otopark avantajı sağlar. Rüzgârlı günlerde meltem çadır kurulumunu zorlaştırır. Bazı koylarda tesis dışı kamp yasaktır.",
    },
    {
      question: "Datça yarımadasına Marmaris ve Bodrum'dan ulaşım ne kadar sürer?",
      answer:
        "Marmaris'ten virajlı yarımada yolu yaklaşık 1,5–2 saat; Bodrum'dan feribot alternatifi mevcuttur. Yarımada trafiği yazın yoğundur. Yakıt ve su stoğu taşımak önerilir.",
    },
    {
      question: "Datça'da bal arıcılığı ve badem çiçeği döneminde kamp nasıl planlanır?",
      answer:
        "Şubat–mart badem çiçeği festivali döneminde yarımada fotoğraf rotası olarak popülerdir. Bal ürünleri yerel pazarlarda satılır. Bu dönemde hava ılıman ancak gece serin olabilir.",
    },
  ],
  "mugla/marmaris": [
    {
      question: "Marmaris Hisarönü Körfezi kamp rotası nasıl planlanır?",
      answer:
        "Hisarönü Körfezi sakin koylar ve mavi yolculuk rotaları sunar; Selimiye ve Bozburun yönü daha sakin alternatiflerdir. Marmaris merkez yaz sezonunda aşırı kalabalıktır; körfez tesisleri tercih edilmelidir.",
    },
    {
      question: "Marmaris'te tekne turu ile koy kampı birleştirilebilir mi?",
      answer:
        "Günübirlik ve çok günlük tekne turları ulaşılamayan koylara erişim sağlar. Karadan ulaşılan tesisler elektrik ve duş imkânı sunar. Temmuz–ağustos'ta her iki seçenek de doludur.",
    },
    {
      question: "Marmaris'e Dalaman Havalimanı'ndan ulaşım ne kadar sürer?",
      answer:
        "Dalaman Havalimanı Marmaris'e yaklaşık 1–1,5 saat mesafededir. Transfer servisleri ve otobüs hatları mevcuttur. Merkez trafiği yaz akşamları yoğundur.",
    },
    {
      question: "Marmaris'te orman yangını döneminde kamp kısıtlamaları var mı?",
      answer:
        "Muğla ormanları yaz aylarında yangın riski taşır; açık ateş yasaktır ve giriş kısıtlamaları uygulanabilir. Orman Genel Müdürlüğü duyurularını takip edin. Sigara ve mangal kullanımına dikkat edin.",
    },
  ],
  "balikesir/edremit": [
    {
      question: "Edremit Altınkum ve Akçay sahilinde kamp alanı seçerken nelere dikkat edilmeli?",
      answer:
        "Edremit körfezi Altınkum plajı ve Akçay sahil bandıyla Türkiye'nin en popüler yaz kamp destinasyonlarındandır. Meltem rüzgârı öğleden sonra güçlenir; çadır yönünü kuzey-güney ekseninde planlayın. Zeytin hasat döneminde (kasım) kırsal yollar traktör trafiğiyle yavaşlar. Kaz Dağları eteğine 30 dakikada çıkılarak deniz-kamp ve yayla-kamp kombinasyonu yapılabilir.",
    },
    {
      question: "Edremit'ten Kaz Dağları yayla kampına günübirlik geçiş mümkün mü?",
      answer:
        "Edremit merkezden Hasanboğuldu ve Sütuven Şelalesi yönüne otoyol ve dağ yolu ile 45–60 dakikada ulaşılır. Yaylada gece sıcaklığı deniz kıyısından 10–15°C düşük olabilir; katmanlı giyim taşıyın. Orman yangını yasağı yaz aylarında sıkı denetlenir.",
    },
    {
      question: "Edremit körfezinde karavan parkı ve çadır tesisleri arasındaki fark nedir?",
      answer:
        "Sahil bandında elektrik/su bağlantılı karavan parkları ve geleneksel çadır alanları bir arada bulunur. Temmuz–ağustos'ta karavan kontenjanı haftalar öncesinden dolabilir. Deniz tuzu ve nem ekipman bakımını etkiler.",
    },
    {
      question: "Edremit'e İzmir ve Bursa'dan ulaşım ne kadar sürer?",
      answer:
        "İzmir'den otoyol ile yaklaşık 2 saat; Bursa yönünden Bandırma feribotu veya karayolu alternatifleri mevcuttur. Bayram dönemlerinde sahil yolu trafiği ciddi gecikme yaratabilir.",
    },
  ],
  "balikesir/ayvalik": [
    {
      question: "Ayvalık Cunda Adası'na feribotla kamp rotası nasıl planlanır?",
      answer:
        "Cunda Adası'na Ayvalık iskelesinden feribotla geçilir; araç kontenjanı yaz sezonunda sınırlıdır. Adada dar sokaklar ve sınırlı otopark nedeniyle erken varış şarttır. Taksiyarhis Kilisesi ve taş evler günübirlik gezi rotasına eklenir. Ada rüzgârı meltem sezonunda güçlüdür.",
    },
    {
      question: "Ayvalık zeytin rotası ve Şeytan Sofrası manzarası kamp gününe nasıl eklenir?",
      answer:
        "Ayvalık zeytinyağı fabrika ziyaretleri ve Şeytan Sofrası gün batımı manzarası ünlüdür. Sarımsaklı ve Altınova plajları kamp tesisleriyle çevrilidir. Korunan koylarda gece kamp yasağı uygulanabilir; tesis onaylı alanları tercih edin.",
    },
    {
      question: "Ayvalık'ta Midilli Adası (Yunanistan) feribotu ile kamp rotası birleştirilebilir mi?",
      answer:
        "Ayvalık iskelesinden Midilli feribotu günübirlik veya çok günlü planlama sunar; pasaport ve vize gerekir. Dönüş saatine göre Ayvalık veya Cunda tesislerinde konaklama planlayın.",
    },
    {
      question: "Ayvalık'a Çanakkale Assos rotasından ulaşım ne kadar sürer?",
      answer:
        "Assos üzerinden sahil yolu manzaralı bir rota sunar; yaklaşık 1–1,5 saat sürer. Bergama antik kenti rotaya eklenebilir. Toplu taşıma sınırlıdır; özel araç önerilir.",
    },
  ],
  "antalya/kas": [
    {
      question: "Kaş'ta dalış turizmi ile kamp konaklaması nasıl birleştirilir?",
      answer:
        "Kaş, Türkiye'nin en önemli dalış merkezlerinden biridir; Üçağız, Kekova ve Meis Adası manzaralı koylarda tesisler dalış okullarıyla aynı hattadır. Dalış sonrası çadır kurulumu için rüzgârsız koy tercih edin. Kekova batık şehir turu sabah erken planlanmalıdır.",
    },
    {
      question: "Kaş Patara Kumlu Plajı ve Kaputaş Koyu rotasında kamp kuralları neler?",
      answer:
        "Patara antik kent ve Caretta caretta yumurtlama alanı nedeniyle yaz aylarında ışık kısıtlaması uygulanır. Kaputaş Koyu günübirlik aşırı kalabalıklaşır; konaklama Kaş merkez veya Üçağız tesislerinde planlanır. Likya Yolu yürüyüşçüleri için Kaş önemli bir durak noktasıdır.",
    },
    {
      question: "Kaş'ta Meis Adası (Megisti) günübirlik turu kamp planına nasıl eklenir?",
      answer:
        "Kaş limanından Meis feribotu 20 dakika sürer; pasaport gerekir. Günübirlik tur sabah çıkış, akşam dönüş modeliyle Kaş tesislerinde konaklama birleştirilir.",
    },
    {
      question: "Kaş'a Antalya Havalimanı'ndan ulaşım ne kadar sürer?",
      answer:
        "Antalya Havalimanı'ndan virajlı sahil yolu ile 3–4 saat sürer. Dalaman üzerinden alternatif rota mevcuttur. Gece sürüşü virajlı yolda risklidir; mola planlayın.",
    },
  ],
  "antalya/kalkan": [
    {
      question: "Kalkan yamaç konumu kamp alanı seçimini nasıl etkiler?",
      answer:
        "Kalkan, dik yamaç üzerine kurulu olduğundan tesisler sınırlı arazi ve otopark sunar. Çadır alanları genelde merkez dışındadır; yürüyüş mesafesi planlayın. Kaputaş ve Patara yakınlığı günübirlik rotalar sunar.",
    },
    {
      question: "Kalkan'da Kaputaş Koyu ve Patara rotası kamp gününe nasıl eklenir?",
      answer:
        "Kaputaş 200 basamaklı iniş gerektirir; günübirlik ziyaret yoğundur. Patara antik tiyatro ve kumul plajı yarım gün sürer. Akşam Kalkan tesislerinde konaklama planlanır.",
    },
    {
      question: "Kalkan'da yaz sezonunda rezervasyon ne kadar önceden yapılmalı?",
      answer:
        "Temmuz–ağustos'ta tesisler haftalar öncesinden dolabilir. Erken rezervasyon veya haziran/eylül alternatifi önerilir. Likya Yolu yürüyüşçüleri için kontenjan ayrılabilir.",
    },
    {
      question: "Kalkan'a Kaş ve Fethiye arasında ulaşım nasıl?",
      answer:
        "Kaş'a 25 km, Fethiye'ye 80 km mesafe vardır. Minibüs hatları mevcuttur ancak seyrektir. Özel araç veya kiralama esneklik sağlar.",
    },
  ],
  "antalya/olympos": [
    {
      question: "Olympos ağaç ev ve çadır kampı arasında nasıl seçim yapılır?",
      answer:
        "Olympos, Likya Yolu üzerinde Türkiye'nin en ikonik doğa kamp destinasyonlarındandır. Ağaç ev tesisler ortak duş ve elektrik sunarken çadır alanları daha ekonomiktir. Yanartaş (Chimaera) gece ziyareti için el feneri şarttır; tesisler arası 2–5 km yürüyüş olabilir.",
    },
    {
      question: "Olympos'ta Caretta caretta yumurtlama döneminde kamp kuralları neler?",
      answer:
        "Çıralı ve Olympos sahilleri caretta caretta alanıdır; mayıs–ağustos arası ışık kısıtlaması uygulanır. Gece plaj ışığı kullanmayın. Ateş yakma yasakları sıkı denetlenir.",
    },
    {
      question: "Olympos antik kent kalıntıları kamp rotasına nasıl eklenir?",
      answer:
        "Antik tiyatro ve nekropolis kalıntıları tesisler arasında yürüyüş mesafesindedir. Sabah erken ziyaret kalabalıktan kaçınmanızı sağlar. Likya Yolu rotası Olympos'tan Adrasan veya Beydağları yönüne devam eder.",
    },
    {
      question: "Olympos'a Antalya merkezden ulaşım ne kadar sürer?",
      answer:
        "Antalya merkezden sahil yolu ile yaklaşık 1,5–2 saat. Son kilometre tesis girişlerinden yürüyüş veya servis gerekebilir. Otobüs hatları yaz sezonunda sıklaşır.",
    },
  ],
  "artvin/yusufeli": [
    {
      question: "Yusufeli Çoruh Nehri kanyonunda rafting ve kamp rotası nasıl planlanır?",
      answer:
        "Yusufeli, Türkiye'nin en dramatik kanyon manzaralarından birine sahiptir; Çoruh Nehri kıyısında belirlenmiş kamp noktaları Nisan–Ekim rafting sezonuyla birlikte canlanır. Baraj gölü nedeniyle eski köy yolları değişmiş olabilir; güncel rota haritası şarttır. Telefon çekimi birçok vadide yoktur; varış ve dönüş planınızı birine bildirin. Gece sıcaklığı rakıma göre 5–8°C'ye düşebilir; dört mevsim uyku tulumu taşıyın.",
    },
    {
      question: "Yusufeli Barhal ve Demirkent yaylalarında kamp için en uygun dönem hangisi?",
      answer:
        "Yusufeli yaylaları Temmuz–Ağustos'ta açılır; sis, yağmur ve ani hava değişimi yıl boyunca sık görülür. Barhal Yaylası fotoğraf rotası olarak popülerdir. Yol durumu yağmur sonrası çamurlaşır; 4x4 veya yürüyüş kombinasyonu tercih edilir.",
    },
    {
      question: "Yusufeli'de baraj gölü ve yeni yerleşim alanları kamp planlamasını nasıl etkiler?",
      answer:
        "Yusufeli Barajı nedeniyle eski ilçe merkezi ve bazı köy yolları su altında kalmıştır. Yeni yerleşim alanları ve güncel karayolu güzergâhı gitmeden teyit edilmelidir. Eski fotoğraflardaki rota bilgileri güncel olmayabilir.",
    },
    {
      question: "Yusufeli'ye Artvin merkezden ulaşım ne kadar sürer?",
      answer:
        "Artvin merkezden Yusufeli yönü yaklaşık 1–1,5 saat sürer; virajlı dağ yolları gece sürüşünden kaçının. Erzurum üzerinden alternatif rota kışın Ovit geçidi nedeniyle kapalı olabilir. Yol yapım çalışmaları gecikme yaratabilir.",
    },
  ],
  "bolu/mudurnu": [
    {
      question: "Mudurnu Osmanlı ahşap evleri ve orman kampı rotası nasıl birleştirilir?",
      answer:
        "Mudurnu, iyi korunmuş Osmanlı dönemi ahşap evleriyle ünlü sakin bir ilçedir; şehir merkezinde çadır kampı yerine butik konaklama tercih edilir. Çevre ormanlarında mesire alanları mevcuttur. Sonbahar yaprak döneminde Abant ve Yedigöller rotasına eklenebilir.",
    },
    {
      question: "Mudurnu'dan Abant Gölü ve Yedigöller'e kamp rotası ne kadar sürer?",
      answer:
        "Mudurnu'dan Abant Gölü yaklaşık 45–60 dakika; Yedigöller Milli Parkı benzer mesafededir. Hafta sonu İstanbul trafiği giriş kapılarında kuyruk oluşturur; erken varış veya hafta içi planlama önerilir.",
    },
    {
      question: "Mudurnu'da kış aylarında kar kampı mümkün mü?",
      answer:
        "Mudurnu kışın kar yağışı alır; yollar kapanmayabilir ancak zincir bulundurmak gerekir. Orman alanlarında gece sıcaklığı -10°C'ye düşebilir. Tesisler kışın sınırlı açıktır; önceden teyit edin.",
    },
    {
      question: "Mudurnu'ya İstanbul ve Ankara'dan ulaşım ne kadar sürer?",
      answer:
        "İstanbul'dan TEM otoyolu ile yaklaşık 2,5–3 saat; Ankara yönünden Bolu geçişiyle benzer mesafe. Mudurnu merkez dar sokaklara sahiptir; otopark planlaması yapın.",
    },
  ],
};
