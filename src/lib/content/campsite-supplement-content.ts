export interface CampsiteSupplement {
  campType: string;
  suitableFor: string;
  transportExtended: string;
}

export const campsiteSupplementContent: Record<string, CampsiteSupplement> = {
  "kartepe-orman-kampi": {
    campType:
      "Maşukiye dere kenarında çam-kayın karışımı orman içi kamp alanı; çadır ve karavan parselleri, ortak duş-tuvalet ve mangal noktalarıyla hafta sonu doğa kampı konsepti sunar.",
    suitableFor:
      "İstanbul ve Kocaeli'den kısa kaçamak arayan aileler, çocuklu gruplar, Sapanca-Kartepe gezisi planlayanlar ve dere sesi eşliğinde orman kampı sevenler.",
    transportExtended:
      "İstanbul'dan TEM otoyolu (O-4) ile yaklaşık bir saatte ulaşılır; Kartepe veya Maşukiye çıkışını tercih edin. Sabiha Gökçen Havalimanı'na 80 km mesafededir. İzmit otogarından Maşukiye dolmuşları mevcuttur. Özel araçla Maşukiye yönü tabelalarını takip ettikten sonra dere kenarı kamp alanı levhaları sizi tesise yönlendirir. Hafta sonları park alanı dolabilir; erken giriş önerilir. Kış aylarında yüksek rakım yollarında zincir bulundurmanız faydalıdır. TEM üzerinde yoğun trafik saatlerinde alternatif olarak D-100 Sapanca güzergâhı değerlendirilebilir.",
  },
  "kartepe-yayla-karavan-kampi": {
    campType:
      "Kartepe yamaçlarında Sapanca Gölü panoramalı tam donanımlı karavan parkı; elektrik, su ve atık su bağlantılı parseller, ortak mutfak ve çamaşırhane ile dört mevsim yayla karavan konsepti.",
    suitableFor:
      "Uzun süreli karavan konaklaması planlayanlar, kış kar manzaralı kamp arayanlar, teleferik-kayak merkezine yakın konaklamak isteyen dağ severler ve panoramik manzara tutkunları.",
    transportExtended:
      "İstanbul'dan TEM otoyolu ile Kartepe yönüne yaklaşık 1,5 saatte ulaşılır. Sapanca merkezinden Kartepe yolu üzerinde karavan parkı tabelaları belirgindir. Sabiha Gökçen Havalimanı 75 km, İzmit otogarı 35 km mesafededir. Karavanla gelenler için geniş dönüş alanları mevcuttur; büyük karavanlarda giriş öncesi tesisle iletişim kurmanız önerilir. Kış aylarında yayla yolunda kar ve buz riski vardır; kış lastiği ve zincir şarttır. Otobüsle gelenler Sapanca'dan taksi veya yerel servis kullanabilir. Teleferik hattına 8 km mesafede olması kış sporları için stratejik bir konum sağlar.",
  },
  "assos-kadirga-kamp": {
    campType:
      "Behramkale'nin altında Kadırga Koyu kıyısında Athena Tapınağı manzaralı teraslı deniz kenarı kamp; çakıl plaja bitişik çadır ve karavan parselleriyle antik Assos atmosferinde kıyı kampı.",
    suitableFor:
      "Tarih ve deniz kampını birleştirmek isteyenler, gün batımı fotoğrafçıları, antik kent gezginleri, çiftler ve Assos'un organik zeytinyağı-şarap kültürünü keşfetmek isteyen gezginler.",
    transportExtended:
      "Çanakkale Havalimanı'na 90 km, Balıkesir Koca Seyit Havalimanı'na 45 km mesafededir. Çanakkale otogarından Ayvacık-Assos minibüsleri gün boyu sefer yapar. Özel araçla Çanakkale-Ayvacık karayolunu takip edip Behramkale tabelalarına yönelin; Kadırga Koyu'na inen dar ve virajlı yolda dikkatli sürüş gereklidir. Kamp alanı park alanı sınırlıdır; yaz sezonunda erken varış önerilir. Behramkale köy merkezine 1 km mesafede yürüyerek antik Assos limanına ulaşabilirsiniz. İstanbul'dan feribotla Çanakkale'ye geçip karayoluyla 2,5 saatte ulaşım mümkündür.",
  },
  "assos-zeus-ormani-kampi": {
    campType:
      "Assos'ta Zeus Altarı kalıntılarının bulunduğu zeytin-çam ormanında minimal altyapılı bushcraft tarzı orman kampı; sınırlı elektrik-su ile doğayla iç içe kamp deneyimi.",
    suitableFor:
      "Dijital detoks arayanlar, Zeus Altarı patika yürüyüşçüleri, bushcraft ve gerçek orman kampı sevenler, evcil hayvan sahipleri ve Behramkale kalabalığından uzak sakin kamp isteyenler.",
    transportExtended:
      "Çanakkale veya Balıkesir Koca Seyit havalimanlarından Ayvacık-Assos karayoluna ulaşıp Behramkale'ye varmadan önce Zeus Ormanı tabelasını takip edin. Çanakkale otogarından Ayvacık minibüsleri Assos yönünde seyreder; Behramkale öncesi iniş yapmanız gerekir. Özel araçla toprak yolun son bölümünde dikkatli ilerleyin; park alanı orman girişindedir. Otobüsle gelenler Ayvacık'tan taksi ayarlayabilir. Assos antik tiyatrosuna 3 km yürüyüş mesafesindedir. Kamp alanı cep telefonu çekiminin sınırlı olduğu bir bölgededir; navigasyon için önceden rota indirmeniz faydalıdır.",
  },
  "gokceada-aydincik-kampi": {
    campType:
      "Gökçeada'nın 2 km'lik altın kumlu Aydıncık Plajı arkasında rüzgâr sörfü odaklı deniz kenarı kamp; kum tepelerinin gerisinde rüzgârdan korunaklı çadır alanları ve plaj ateşi etkinlikleri.",
    suitableFor:
      "Rüzgâr sörfü ve kitesurf tutkunları, geniş plajda kamp yapmak isteyen aileler, ada bisiklet turları planlayanlar ve kalabalıktan uzak Ege adası deneyimi arayan gezginler.",
    transportExtended:
      "Kabatepe feribot iskelesinden Gökçeada feribotu ile adaya geçilir; sefer saatlerini önceden kontrol edin, yaz sezonunda araç rezervasyonu şarttır. Gelibolu yarımadasından Kabatepe'ye Çanakkale- Eceabat karayolu ile ulaşılır. İstanbul'dan otobüsle Eceabat'a gelip feribota aktarma yapılabilir. Adada merkeze indikten sonra Aydıncık yönüne 12 km sürüş yapılır; sahil yolu tabelaları net şekilde işaretlenmiştir. Kamp alanında araç park alanı kum tepelerinin gerisindedir. Çanakkale Havalimanı'ndan Kabatepe'ye yaklaşık 1,5 saat sürüş vardır. Bisiklet kiralayarak Zeytinli ve Bademli köylerine günlük turlar düzenleyebilirsiniz.",
  },
  "gokceada-kuzu-koyu-kampi": {
    campType:
      "Gökçeada'nın güneyinde Kuzu Koyu kıyısında zeytinlikler içinde butik deniz kampı; bungalov ve çadır seçenekleriyle sakin, dalgasız koy konseptinde küçük ölçekli konaklama.",
    suitableFor:
      "Sakin koyda huzurlu kamp arayan aileler, çocuklu gruplar, butik ada deneyimi isteyen çiftler, gün batımı fotoğrafçıları ve Aydıncık'ın rüzgârlı plajına alternatif arayanlar.",
    transportExtended:
      "Gökçeada'ya Kabatepe feribot iskelesinden geçildikten sonra ada merkezinden güney sahil yolunu takip edin. Kuzu Koyu tabelaları merkezden yaklaşık 15 km sonra başlar. Feribot seferleri mevsimsel değişir; yaz aylarında günde birden fazla sefer vardır. Özel araçla adada ulaşım en pratik yöntemdir; otobüs seçeneği sınırlıdır. Kamp alanı koy girişinde dar bir yol ile ulaşılır; park alanı butik tesis ölçeğindedir. Çanakkale'den Kabatepe'ye otobüs ve feribot kombinasyonu ile ulaşım mümkündür. Adanın en sakin koylarından biri olduğu için gece ulaşımında el feneri bulundurmanız önerilir.",
  },
  "alacati-doga-kampi": {
    campType:
      "Alaçatı'da yüzyıllık zeytinlikler arasında çadır-karavan uyumlu doğa kampı; elektrik, duş ve kamp ateşi alanıyla rüzgâr sörfü merkezine yürüme mesafesinde orman içi kamp konsepti.",
    suitableFor:
      "Rüzgâr sörfü ve kiteboard tutkunları, Alaçatı taş sokaklarını keşfetmek isteyen gezginler, evcil hayvan sahipleri, zeytinlik gölgesinde serin kamp arayanlar ve Çeşme plajlarına yakın konaklamak isteyenler.",
    transportExtended:
      "İzmir Adnan Menderes Havalimanı'ndan 80 km mesafededir; havalimanı servisleri veya araç kiralama ile Çeşme- Alaçatı yoluna bağlanabilirsiniz. İzmir otogarından Çeşme otobüsleri kalkar; Alaçatı'da inip kamp alanına taksi veya yürüyüşle ulaşırsınız. Özel araçla İzmir-Çeşme otoyolunu (O-31) takip edip Alaçatı çıkışından 2 km sonra zeytinlik içindeki kamp tabelalarını izleyin. Yaz sezonunda Alaçatı Ot Festivali döneminde trafik yoğundur; erken varış park yeri bulmayı kolaylaştırır. Çeşme merkez plajları ve Ilıca termal bölgesi araçla 15-20 dakika mesafededir.",
  },
  "cesme-ilica-sahil-kampi": {
    campType:
      "Ilıca Plajı kıyısında termal kaynaklara yakın kumlu sahil kampı; plaja sıfır çadır alanları ve tam donanımlı karavan parselleriyle deniz ve termal su deneyimini birleştiren sahil kamp konsepti.",
    suitableFor:
      "Aileler, termal suda yüzmek isteyenler, karavanlı gezginler, yelken ve su sporları meraklıları, Çeşme gece hayatına yakın ama plajda kamp yapmak isteyen genç gruplar.",
    transportExtended:
      "İzmir Adnan Menderes Havalimanı'ndan Çeşme yönüne yaklaşık 90 km; havalimanı transferleri veya araç kiralama ile ulaşım sağlanır. İzmir otogarından Çeşme'ye düzenli otobüs seferleri vardır; Ilıca'da inip plaj yönüne 2 km yürüyebilir veya taksi kullanabilirsiniz. Özel araçla İzmir-Çeşme otoyolunu takip edip Ilıca çıkışından plaj yönüne sapın; kamp alanı tabelaları sahil yolunda belirgindir. Karavan park alanı geniştir; yaz sezonunda rezervasyon önerilir. Çeşme marina ve merkez 5 km mesafede; bisiklet kiralama imkânı mevcuttur. Yaz aylarında Ilıca plajı yoğundur; sabah erken saatlerde termal suda yüzme daha sakin olur.",
  },
  "urla-sahil-kampi": {
    campType:
      "Urla Barbaros Koyu'na bakan teraslı deniz kenarı kamp; çadır ve deniz manzaralı bungalov seçenekleriyle bağ yolları arasında Cittaslow ruhunu yansıtan sakin sahil kamp konsepti.",
    suitableFor:
      "Çiftler, küçük gruplar, gün batımı izlemek isteyenler, Urla şarap rotası gezginleri, kano ve paddle board meraklıları ile sakin Ege kıyısı kampı arayanlar.",
    transportExtended:
      "İzmir merkezden Urla'ya 35 km; İzmir-Çeşme karayolu (D-300) üzerinde Urla çıkışını takip edin. İzmir Adnan Menderes Havalimanı'ndan 40 km mesafededir. İzmir otogarından Urla minibüsleri düzenli sefer yapar; Barbaros Koyu yönünde taksi ile kamp alanına ulaşılır. Özel araçla Urla merkezinden sahil yolunu izleyerek Barbaros Koyu tabelalarına yönelin; kamp alanı teraslı alanda konumlanmıştır, park alanı sınırlıdır. Bisikletle Urla bağ evlerine 10 dakikada ulaşabilirsiniz. Urla Enginar Festivali döneminde trafik artar; hafta içi ziyaret daha sakin bir deneyim sunar.",
  },
  "urla-bademler-bag-kampi": {
    campType:
      "Urla Bademler köyünde üzüm bağları ve zeytinlikler arasında butik bağ kampı; şarap tadımı, organik bahçe yemekleri ve gökyüzü gözlemi odaklı iç kesim doğa kamp konsepti.",
    suitableFor:
      "Şarap tutkunları, bağ bozumu deneyimi arayanlar, sessiz ortamda okuma-çalışma yapmak isteyenler, yıldız gözlemi meraklıları ve deniz kampına alternatif iç Anadolu-Ege bağ turizmi sevenler.",
    transportExtended:
      "İzmir Adnan Menderes Havalimanı'ndan Urla merkeze 40 km, Bademler köyüne 48 km mesafededir. İzmir otogarından Urla minibüsleri ile merkeze gelip Bademler yönüne taksi veya kiralık araçla 8 km yol alırsınız. Özel araçla Urla merkezinden Bademler köyü tabelalarını takip edin; bağ kampı levhası köy girişinde yer alır. Toprak köy yollarında dikkatli sürüş yapın; park alanı bağ sıraları arasındadır. Karaburun yarımadası günübirlik turları için stratejik bir üs noktasıdır. Otobüsle gelenler için Urla merkezden önceden taksi ayarlamak pratik olur. Gece ulaşımında köy yolları aydınlatması sınırlıdır.",
  },
  "sigacik-koy-kampi": {
    campType:
      "Seferihisar Sığacık Kalesi yanında mandalina bahçeleri arasında Cittaslow odaklı sürdürülebilir koy kampı; organik kahvaltı, bisiklet kiralama ve Teos antik kent turlarıyla tarihi-deniz kamp konsepti.",
    suitableFor:
      "Sürdürülebilir turizm destekleyenler, aileler, Teos antik kenti gezginleri, mandalina festivali ziyaretçileri, bisiklet turları sevenler ve sakin Cittaslow belde atmosferi arayan kampçılar.",
    transportExtended:
      "İzmir merkezden Seferihisar'a 45 km; İzmir- Sığacık karayolunu takip edin. İzmir Adnan Menderes Havalimanı'ndan 55 km mesafededir. İzmir otogarından Seferihisar otobüsleri kalkar; Sığacık yönü tabelalarını izleyerek kale yanındaki kamp alanına ulaşırsınız. Özel araçla Sığacık limanına kadar inen yol dar olabilir; yaz sezonunda park alanı sınırlıdır, erken varış önerilir. Teos antik kentine sabah erken yürüyüş veya bisikletle ulaşılabilir. Seferihisar merkeze 5 km mesafede market ve eczane imkânı vardır. Otobüsle gelenler Sığacık'ta inip kale yönüne kısa yürüyüş yapabilir.",
  },
  "seferihisar-urla-koyu-kampi": {
    campType:
      "Seferihisar Ürkmez sahilinde çam ormanı ile kumlu plaj arasında geniş aile kamp alanı; çocuk oyun parkı, güvenli yüzme bölgesi ve plaj voleybolu imkânlarıyla sahil-orman kamp konsepti.",
    suitableFor:
      "Çocuklu aileler, plaj aktivitesi isteyenler, geniş çadır alanı arayan gruplar, Cittaslow Seferihisar'ın sakin temposunu yaşamak isteyenler ve İzmir'e yakın sahil kampı planlayanlar.",
    transportExtended:
      "İzmir merkezden Seferihisar'a İzmir- Sığacık karayolu ile 50 km mesafededir. İzmir Adnan Menderes Havalimanı'ndan 60 km. İzmir otogarından Seferihisar otobüsleri düzenli sefer yapar; Ürkmez çıkışında inip sahil yolunu takip ederek kamp alanına ulaşırsınız. Özel araçla İzmir-Seferihisar karayolunda Ürkmez tabelasını izleyin; sahil yolu doğrudan kamp girişine çıkar. Plaj kenarı park alanı geniştir; yaz sezonunda hafta sonları yoğunluk artar. Seferihisar merkeze 10 km mesafede pazar ve market imkânı vardır. Ürkmez plajı mavi bayrak standartlarına yakın temizlik sunar; aileler için güvenli sığ sulardır.",
  },
  "dikili-bademli-koyu-kampi": {
    campType:
      "Dikili'nin bakir Bademli Koyu'nda zeytin ve çam ağaçları gölgesinde çadır odaklı deniz kampı; şnorkel ve kamp ateşi imkânlarıyla turizm baskısından uzak kuzey Ege koy kamp konsepti.",
    suitableFor:
      "Sakin kamp arayanlar, şnorkel meraklıları, yıldız gözlemi tutkunları, Nebiler Şelalesi gezisi planlayanlar ve Dikili'nin keşfedilmemiş koylarında doğal kamp deneyimi isteyenler.",
    transportExtended:
      "İzmir Adnan Menderes Havalimanı'ndan Dikili'ye 120 km; İzmir-Bergama karayolunda Dikili çıkışını takip edin. İzmir otogarından Bergama ve Dikili otobüsleri mevcuttur; Dikili merkezden Bademli Koyu yönüne 12 km taksi veya özel araç gereklidir. Özel araçla Dikili merkezinden koy yönü tabelalarını izleyin; son bölüm dar ve virajlı olabilir. Kamp alanında sınırlı park alanı vardır; erken varış önerilir. Çandarlı Kalesi ve Nebiler Şelalesi günübirlik geziler için Dikili merkez ideal üs noktasıdır. Otobüsle gelenler Dikili'den önceden taksi ayarlamalıdır; koy hattında düzenli toplu taşıma yoktur.",
  },
  "dikili-nebiler-dere-kampi": {
    campType:
      "Dikili'de Nebiler Şelalesi yakınında dere kenarı orman kampı; çam-meşe gölgesinde şelale havuzlarında serinleme imkânı sunan trekking odaklı serin orman kamp konsepti.",
    suitableFor:
      "Yaz sıcağından kaçmak isteyenler, şelale ve dere kenarı kamp sevenler, trekking meraklıları, evcil hayvan sahipleri ve hem orman hem denize yakın konaklamak isteyen doğa tutkunları.",
    transportExtended:
      "Dikili merkezinden Nebiler Şelalesi yönüne 6 km; son 1 km toprak yoldur, yağmurlu dönemlerde binek araçlarda dikkatli sürüş gerekir. İzmir'den Dikili'ye Bergama üzerinden 2 saat sürüş vardır. İzmir otogarından Dikili otobüsleri ile merkeze gelip kamp alanına taksi veya yürüyüşle ulaşabilirsiniz. Özel araçla Nebiler Şelalesi tabelalarını takip edin; dere kenarı kamp alanı şelale park alanının yakınındadır. Dikili sahiline 8 km mesafede olması deniz gezisi için uygundur. Elektrik bağlantısı sınırlıdır; taşınabilir güneş paneli veya powerbank getirmeniz faydalı olur. Hafta sonları şelale ziyaretçileri artabilir; hafta içi daha sakin kamp deneyimi sunar.",
  },
  "kabak-koyu-kamp": {
    campType:
      "Fethiye Kabak Koyu'nda deniz seviyesinden ormana uzanan teraslı kamp; Likya Yolu bağlantılı yoga alanı, organik mutfak ve alternatif yaşam kültürüyle deniz-orman teras kamp konsepti.",
    suitableFor:
      "Likya Yolu yürüyüşçüleri, yoga ve meditasyon grupları, alternatif yaşam tarzı meraklıları, doğa sporları tutkunları ve Ölüdeniz-Kelebekler Vadisi turları planlayan gezginler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Fethiye'ye 50 km, Kabak yönüne toplam 65 km mesafededir. Fethiye otogarından Ölüdeniz dolmuşları ile Faralya'ya gelip Kabak yönüne 15 km toprak yol takip edilir; son bölüm virajlı ve dar olduğundan dikkatli sürüş şarttır. Özel araçla Fethiye merkezden Ölüdeniz yolunu, ardından Faralya-Kabak patikasını izleyin. Otobüsle gelenler Faralya'dan kamp alanına yürüyüş veya yerel transfer kullanabilir. Kamp alanı park alanı terasların üst bölümündedir; eşyalarınızı plaja indirmek için patika yürüyüşü gerekebilir. Yaz sezonunda toprak yol yoğun trafik alır; sabah erken varış önerilir. Faralya köyünden Likya Yolu'na doğrudan bağlantı vardır.",
  },
  "fethiye-katranci-koyu-kampi": {
    campType:
      "Fethiye merkeze 15 km mesafede Katrancı Koyu çam ormanı içinde geniş aile kamp alanı; sığ ve sakin koy suları, çocuk oyun alanı ve market yakınlığıyla erişilebilir sahil-orman kamp konsepti.",
    suitableFor:
      "Aileler, çocuklu gruplar, Fethiye merkeze yakın kamp arayanlar, hafta sonu kaçamak planlayanlar, tekne turu ve yamaç paraşütü aktiviteleri isteyenler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Fethiye'ye 50 km; havalimanı servisleri veya araç kiralama ile ulaşım sağlanır. Fethiye otogarından Katrancı yönüne dolmuşlar mevcuttur. Özel araçla Fethiye merkezden Katrancı tabelalarını takip ederek 15 km sonra koy girişindeki kamp alanı levhasına ulaşırsınız. Kamp alanı park alanı geniştir; yaz sezonunda hafta sonları erken giriş önerilir. Fethiye çarşısı, antik Telmessos ve tekne turları 15-20 dakika mesafededir. Otobüsle gelenler Katrancı'da inip kısa yürüyüşle tesise ulaşabilir. Muğla'nın en erişilebilir kamp noktalarından biri olduğu için karavan ve büyük araçlar için uygun giriş yolu vardır.",
  },
  "datca-palamutbuku-kamp": {
    campType:
      "Datça yarımadası Palamutbükü koyunda zeytin-badem ağaçları arasında sakin deniz kampı; Knidos antik kent turlarına yakın, kristal berrak suda yüzme ve gökyüzü gözlemi odaklı koy kamp konsepti.",
    suitableFor:
      "Sakin koy kampı arayanlar, Knidos antik kenti gezginleri, paddle board ve yüzme tutkunları, badem-zeytin hasadı dönemi ziyaretçileri ve Datça yarımadasını keşfetmek isteyen doğa severler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Marmaris üzerinden Datça'ya 165 km; alternatif olarak Bodrum Havalimanı'ndan feribot ile Datça'ya geçilebilir. Datça otogarından Palamutbükü dolmuşları mevsimsel olarak sefer yapar. Özel araçla Datça merkezden Palamutbükü yönüne 25 km; Marmaris-Datça karayolu virajlıdır, dikkatli sürüş gereklidir. Kamp alanı koya birkaç adım mesafede; park alanı zeytinlik içindedir. Knidos antik kent turları için tekne kalkış noktalarına yakınsınız. Otobüsle gelenler Datça merkezden taksi veya günlük tur araçları kullanabilir. Yaz sezonunda Datça yarımadası yolu yoğundur; sabah erken hareket önerilir.",
  },
  "datca-hayitbuku-kampi": {
    campType:
      "Datça yarımadası güney ucunda üç koyun birleştiği Hayıtbükü manzarasında butik kamp; badem çiçeği döneminde romantik atmosfer, bungalov ve çadır seçenekleriyle patika erişimli koy kamp konsepti.",
    suitableFor:
      "Butik kamp deneyimi arayan çiftler, badem çiçeği festivali ziyaretçileri, Knidos gezginleri, patika yürüyüşü sevenler ve kalabalıktan uzak Datça koylarında konaklamak isteyenler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Datça merkeze 165 km; Datça merkezden Knidos yönüne 18 km sonra Hayıtbükü çıkışını takip edin. Özel araçla virajlı yarımada yolunda dikkatli sürüş yapın; son bölümde patika başlangıcına park edip 10 dakikalık yürüyüşle kampa ulaşırsınız. Datça otogarından Knidos hattı dolmuşları Hayıtbükü yakınında bırakabilir; taksi ile tam ulaşım sağlanır. Bodrum'dan feribot ile Datça'ya geçip karayoluyla ulaşım alternatif bir rotadır. Badem çiçeği festivali döneminde (nisan) konaklama yoğundur; önceden rezervasyon şarttır. Kamp eşyalarını taşımak için sırt çantası veya hafif bavul tercih edin; patika inişi rahat ayakkabı gerektirir.",
  },
  "marmaris-ciftlik-koyu-kampi": {
    campType:
      "Marmaris merkeze 12 km mesafede Çiftlik Koyu'nda zeytin-çam gölgesinde sakin deniz kampı; çadır-karavan parselleri, kano imkânı ve balıkçı barınağı yakınlığıyla koy kamp konsepti.",
    suitableFor:
      "Marmaris kalabalığından uzak kalmak isteyenler, kano ve tekne turu meraklıları, karavanlı gezginler, balıkçı barınağından taze av alıp mangal yapmak isteyenler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Marmaris'e 90 km; havalimanı transferleri veya araç kiralama ile ulaşım sağlanır. Marmaris otogarından Çiftlik yönüne dolmuş ve taksi mevcuttur. Özel araçla Marmaris merkezden Çiftlik tabelalarını takip ederek 12 km sonra koy girişindeki kamp levhasına ulaşırsınız. Karavan girişi için geniş park alanı vardır. Tekne turları ile çevre koylar ve Adalar keşfedilebilir; balıkçı barınağı yürüme mesafesindedir. Otobüsle gelenler Marmaris'ten taksi ile 20 dakikada ulaşır. Yaz sezonunda Çiftlik yolu trafik alabilir; hafta içi ziyaret daha sakin bir deneyim sunar. Marmaris marina ve çarşı 12 km mesafede temel ihtiyaçlar için ulaşılabilir.",
  },
  "marmaris-bozburun-yarimadasi-kampi": {
    campType:
      "Bozburun Yarımadası'nda mandalina-zeytin bahçeleri arasında bakir koylara yürüyüş mesafesinde kamp; gulet tersanesi ve balıkçı limanı kültürüyle yarımada koy kamp konsepti.",
    suitableFor:
      "Kalabalıktan uzak kamp arayanlar, yelken ve rüzgâr sörfü tutkunları, gulet ve denizcilik kültürü meraklıları, Datça-Knidos turları planlayanlar ve mandalina bahçeleri arasında yürüyüş sevenler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Marmaris'e 90 km, ardından Bozburun yönüne 45 km daha sürüş yapılır. Marmaris otogarından Bozburun otobüsleri günde birkaç sefer düzenler; yarımada yolu virajlı ve uzundur, yaklaşık 1,5 saat sürer. Özel araçla Marmaris'ten Bozburun tabelalarını takip edin; kamp alanı yarımada yolu üzerinde mandalina bahçeleri arasındadır. Yaz sezonunda dar yollarda karşılaşma dikkat gerektirir. Otobüsle gelenler Bozburun'da inip kamp alanına kısa taksi yolculuğu yapabilir. Datça ve Knidos turları için stratejik konumdadır. Feribot alternatifi olarak Rhodes veya Simi adalarına yakınlık denizciler için cazip bir üs noktası oluşturur.",
  },
  "kazdagi-edremit-kamp": {
    campType:
      "Kazdağı Milli Parkı eteklerinde Edremit Körfezi manzaralı zeytinlik içi kamp; Hasanboğuldu ve Sütuven şelalelerine yakın trekking rotalarıyla orman-deniz birleşimli dağ kamp konsepti.",
    suitableFor:
      "Trekking ve doğa yürüyüşçüleri, Kazdağı rotalarını keşfetmek isteyenler, zeytin hasadı ve zeytinyağı tadımı meraklıları, aileler ve termal kaplıca sonrası dinlenme planlayanlar. Hasanboğuldu şelalesi günübirlik ziyaretini kamp programına eklemek isteyenler için ideal bir üs noktasıdır.",
    transportExtended:
      "Balıkesir Koca Seyit Havalimanı (Edremit) kamp alanına 30 km mesafededir; havalimanı servisleri veya araç kiralama ile ulaşım sağlanır. İstanbul'dan Bandırma feribotu veya otobüs ile Edremit'e gelip Altınoluk çıkışından 5 km sonra zeytinlik içindeki kamp tabelalarını takip edin. Balıkesir-Edremit karayolu (D-550) üzerinde konumlanmıştır. Edremit otogarından Altınoluk dolmuşları mevcuttur. Özel araçla park alanı zeytin ağaçları arasındadır; yaz sezonunda erken varış önerilir. Altınoluk ve Akçay plajları 10 dakika mesafede. Kazdağı trekking rotalarına araçla 20 dakikada ulaşılır; rehberli turlar için Edremit merkezden organizasyon yapılabilir.",
  },
  "edremit-altinoluk-sahil-kampi": {
    campType:
      "Edremit Körfezi Altınoluk sahilinde kumlu plaja sıfır aile kamp alanı; geniş çadır parselleri, karavan alanları ve çocuk oyun alanıyla plaj-sahil kamp konsepti.",
    suitableFor:
      "Aileler, çocuklu gruplar, plaja sıfır kamp isteyenler, Kazdağı günübirlik turları planlayanlar, Edremit Havalimanı'na yakın konaklama arayanlar ve sahil yürüyüşü sevenler. Akşam saatlerinde körfez gün batımı manzarası izlemek isteyen fotoğraf tutkunları da bu tesise sık uğrar.",
    transportExtended:
      "Balıkesir Koca Seyit Havalimanı (Edremit) kamp alanına 25 km; havalimanı taksi ve servisleri mevcuttur. İstanbul'dan otobüs veya Bandırma feribotu ile Edremit'e gelip Altınoluk sahil yolunu takip edin. Edremit otogarından Altınoluk dolmuşları düzenli sefer yapar. Özel araçla plaj kenarındaki kamp alanı tabelası belirgindir; yaz sezonunda sahil yolu yoğundur. Karavan park alanı deniz manzaralıdır; rezervasyon önerilir. Kazdağı yürüyüş rotalarına 20 dakika sürüş mesafesindedir. Market, eczane ve restoranlar yürüme mesafesindedir. Akçay plajı komşu beldede olup bisiklet kiralama ile ulaşılabilir.",
  },
  "ayvalik-cunda-adasi-kampi": {
    campType:
      "Ayvalik körfezi Cunda Adası'nda taş evler ve zeytinlikler arasında ada kampı; geleneksel Ege mimarisi ve balık restoranları kültürüyle zeytin gölgesinde deniz kenarı ada kamp konsepti.",
    suitableFor:
      "Ada turizmi sevenler, tarih ve kültür gezginleri, zeytinyağlı meze ve balık restoranları tutkunları, gün batımı izleyicileri ve Ayvalık-Cunda sakin atmosferi arayan kampçılar.",
    transportExtended:
      "Balıkesir Koca Seyit Havalimanı'ndan Ayvalık'a 40 km mesafededir. İzmir veya İstanbul'dan otobüs ile Ayvalık otogarına gelip Cunda Adası'na köprü veya feribot ile geçilir; köprü geçişi ücretsizdir. Cunda merkezinden kamp alanına 2 km; yürüyüş, bisiklet veya taksi ile ulaşılır. Özel araçla adada park alanı sınırlıdır; yaz sezonunda erken varış önerilir. Ayvalık merkeze köprü ile 15 dakikada ulaşılır. Feribot alternatifi Ayvalik iskelesinden kalkar; sefer saatlerini kontrol edin. Taksiyarhis Kilisesi ve taş fırınları ada merkezinde yürüme mesafesindedir. Bisiklet kiralayarak adayı keşfetmek popüler bir ulaşım yöntemidir.",
  },
  "ayvalik-sarimsakli-kampi": {
    campType:
      "Ayvalık'ın 7 km'lik Sarımsaklı Plajı'nda çam ormanı ile deniz arasında geniş sahil kamp alanı; plaj aktiviteleri, bisiklet yolu ve aile dostu altyapıyla kumsal-orman kamp konsepti.",
    suitableFor:
      "Aileler, genç gruplar, uzun plajda koşu ve bisiklet sevenler, yaz festivalleri katılımcıları, Ayvalık merkeze yakın sahil kampı arayanlar ve çam gölgesinde serin kamp isteyenler.",
    transportExtended:
      "Balıkesir Koca Seyit Havalimanı'ndan Ayvalık'a 45 km; Ayvalık merkezden Sarımsaklı yönüne 8 km. Ayvalık otogarından Sarımsaklı dolmuşları düzenli sefer yapar. Özel araçla plaj girişindeki kamp alanı tabelasını takip edin; yaz sezonunda 7 km'lik plaj boyunca park alanları dolabilir, erken giriş önerilir. İstanbul'dan otobüs veya Bandırma feribotu ile Ayvalık'a ulaşım mümkündür. Cunda Adası günübirlik gezisi için merkeze 8 km mesafededir. Sahil boyunca bisiklet yolu mevcuttur; bisiklet kiralama noktaları plaj girişindedir. Karavan alanları geniştir; yaz festivalleri döneminde rezervasyon şarttır.",
  },
  "kas-peninsula-kamp": {
    campType:
      "Kaş Çukurbağ Yarımadası'nda Meis Adası manzaralı yüksek rakımlı dağ kampı; Likya Yolu bağlantılı teraslı çadır alanları, dalış merkezlerine yakınlık ve karanlık gökyüzü gözlemi odaklı.",
    suitableFor:
      "Likya Yolu yürüyüşçüleri, dalış tutkunları, yıldız fotoğrafçıları, Meis Adası manzarası arayanlar, trekking üs noktası arayan macera gezginleri. Çukurbağ yarımadasının yüksek konumu sayesinde gece ışık kirliliği minimumdur.",
    transportExtended:
      "Antalya Havalimanı'ndan Kaş'a 190 km; Dalaman Havalimanı'ndan 150 km mesafededir. Antalya veya Dalaman'dan Kaş otobüsleri günde düzenli sefer yapar. Kaş otogarından Çukurbağ Yarımadası'na taksi veya yürüyüş ile ulaşılır; yarımada yolu yokuşlu ve dar olabilir. Özel araçla Kaş merkezden yarımada tabelalarını takip edin; kamp alanı teraslı yüksek noktada konumlanmıştır, park alanı sınırlıdır. Dalış merkezleri 10 dakika mesafededir. Otobüsle gelenler Kaş merkezden taksi ayarlayabilir. Meis Adası manzarası gün batımında en güzel halini alır; akşam ulaşımında el feneri bulundurun. Likya Yolu patikalarına doğrudan bağlantı vardır.",
  },
  "kas-kaputas-koyu-kampi": {
    campType:
      "Kaş-Kalkan karayolu üzerinde ünlü Kaputaş Plajı'nın üst yamacında turkuaz koy manzaralı çadır kampı; 200 basamaklı merredenle plaja erişim ve Likya Yolu bağlantılı koy manzara kamp konsepti.",
    suitableFor:
      "Kaputaş Plajı tutkunları, şnorkel meraklıları, fotoğrafçılar, Kaş ve Kalkan'ı birlikte keşfetmek isteyenler, kalabalıktan uzak koy manzaralı kamp arayanlar.",
    transportExtended:
      "Antalya Havalimanı'ndan Kaş-Kalkan karayoluna 180 km; Dalaman Havalimanı'ndan 140 km. Kaş ve Kalkan arası otobüsler Kaputaş Plajı çıkışında durur. Özel araçla D-400 karayolunda Kaputaş Plajı tabelasını takip edin; kamp alanı yol üstünde, plaj otoparkının hemen üzerindedir. Yaz sezonunda Kaputaş otoparkı hızla dolar; sabah erken varış hem plaj hem kamp için avantaj sağlar. 200 basamaklı merdivenle plaja iniş yapılır; eşya taşımak için sırt çantası önerilir. Otobüsle gelenler karayolundan kısa yürüyüşle ulaşır. Kaş merkeze 20 km, Kalkan'a 15 km mesafededir; her iki beldeyi keşfetmek için stratejik konumdadır.",
  },
  "kalkan-kalamar-koyu-kampi": {
    campType:
      "Kalkan'ın sakin Kalamar Koyu'nda zeytin-çam gölgesinde butik deniz kampı; bungalov ve çadır seçenekleri, tekne turları ve Patara antik kent gezilerine yakın koy kamp konsepti.",
    suitableFor:
      "Kalkan'ın şık atmosferini sevenler, sakin koy kampı arayan çiftler, Patara antik kenti gezginleri, tekne turu meraklıları ve butik Akdeniz mimarisi deneyimi isteyenler. Kalamar Koyu'nun sakin suları çocuklu aileler için güvenli yüzme imkânı sunar.",
    transportExtended:
      "Dalaman Havalimanı'ndan Kalkan'a 120 km; Antalya Havalimanı'ndan 210 km mesafededir. Dalaman'dan Fethiye-Kaş-Kalkan otobüsleri D-400 üzerinde sefer yapar. Özel araçla Kaş-Kalkan karayolunda Kalkan çıkışını takip edip Kalamar Koyu yönüne 3 km sapın. Kalkan merkeze 3 km mesafede olması market ve restoran erişimini kolaylaştırır. Otobüsle gelenler Kalkan'da inip Kalamar yönüne taksi kullanabilir. Yaz sezonunda Kalkan yokuşları dar ve trafik alır; sabah erken hareket önerilir. Patara antik kenti ve Kaputaş Plajı günübirlik turlarla ulaşılabilir. Kamp alanı park alanı koy girişinde sınırlıdır.",
  },
  "kalkan-bezirgan-yayla-kampi": {
    campType:
      "Kalkan arkasında Bezirgan Yaylası'nda Likya Yolu üzerinde yüksek rakımlı yayla kampı; geniş çayırlık alanlar, sınırlı elektrik ve yıldız gökyüzü ile otantik yayla çadır kamp konsepti.",
    suitableFor:
      "Likya Yolu yürüyüşçüleri, yayla kampı arayanlar, yıldız gözlemi tutkunları, Xanthos ve Patara rotası planlayanlar, kırsal yayla yaşamı deneyimi isteyen doğa severler.",
    transportExtended:
      "Dalaman Havalimanı'ndan Kalkan'a 120 km; Kalkan merkezden Bezirgan köyü yönüne 12 km, yayla yolunun son 3 km'si topraktır. Özel araçla Bezirgan tabelalarını takip edin; yağmurlu dönemlerde toprak yol dikkat gerektirir. Kalkan otogarından Bezirgan dolmuşları sınırlı sefer yapar; taksi alternatifi mevcuttur. Likya Yolu yürüyüşçüleri Patara veya Xanthos yönünden yürüyerek ulaşabilir. Otobüsle gelenler Kalkan'dan taksi ayarlamalıdır. Gece sıcaklığı düşebilir; katmanlı giyim getirin. Bezirgan köyünden taze ekmek ve yayla peyniri temin edilebilir. Elektrik sınırlı olduğundan powerbank veya güneş paneli faydalıdır.",
  },
  "olympos-agac-ev-kamp": {
    campType:
      "Antik Olympos kentinde Melas Nehri kıyısında çam ormanı içi ağaç ev ve çadır kampı; Yanartaş gece yürüyüşü, antik kent keşfi ve alternatif yaşam kültürüyle orman-nehir kamp konsepti.",
    suitableFor:
      "Genç gezginler, antik kent meraklıları, Yanartaş (Chimera) efsanesi tutkunları, alternatif yaşam tarzı arayanlar, doğa ve tarih birleşimli kamp deneyimi isteyenler. Melas Nehri kıyısındaki konumu yaz sıcağında doğal serinlik sağlar.",
    transportExtended:
      "Antalya Havalimanı'ndan Kumluca yönüne 85 km; Antalya otogarından Olympos otobüsleri kalkar. Özel araçla D-400 üzerinde Olympos çıkışını takip edip 1 km içerideki nehir kenarı kamp alanına ulaşın; araç park alanı girişte, tesise yürüyüş veya servis ile geçilir. Otobüsle gelenler Olympos kavşağında inip kamp alanına yürüyerek ulaşabilir. Yanartaş gece yürüyüşü için el feneri ve sıcak giysi getirin. Adrasan koyuna tekne turları düzenlenir. Yaz sezonunda Olympos yolu yoğundur; sabah erken varış park yeri bulmayı kolaylaştırır. Kumluca otogarından alternatif ulaşım sağlanabilir.",
  },
  "olympos-adrasan-koyu-kampi": {
    campType:
      "Adrasan Koyu'nda 2 km kumsal ve çam ormanı arasında geniş aile kamp alanı; güvenli yüzme bölgesi, kano-paddle board ve Suluada tekne turlarıyla sahil-orman aile kamp konsepti.",
    suitableFor:
      "Aileler, çocuklu gruplar, plaj voleybolu ve kano meraklıları, Olympos-Yanartaş gezisi planlayanlar, Suluada tekne turu tutkunları ve geniş kumsalda kamp isteyenler.",
    transportExtended:
      "Antalya Havalimanı'ndan Kumluca yönüne 95 km; Kumluca'dan Olympos-Adrasan yolunu takip edip Adrasan çıkışına sapın. Antalya otogarından Adrasan otobüsleri mevcuttur. Özel araçla Adrasan koy girişindeki kamp alanı tabelasını izleyin; yaz sezonunda koy yolu yoğundur, erken varış önerilir. Olympos antik kenti ve Yanartaş'a 15 km mesafededir. Suluada tekne turları yaz sezonunda her gün düzenlenir; iskele yürüme mesafesindedir. Karavan park alanı geniştir; elektrik ve su tüm parsellerde mevcuttur. Otobüsle gelenler Adrasan'da inip plaj yönüne kısa yürüyüş yapabilir. Kumluca otogarı aktarma noktası olarak kullanılabilir.",
  },
  "yusufeli-coruh-nehri-kampi": {
    campType:
      "Artvin Yusufeli'nde Çoruh Nehri kıyısında macera turizmi odaklı nehir kampı; rafting üssü yakınlığı, nehir sesi eşliğinde çadır kampı ve dağ trekking rotalarıyla nehir kenarı dağ kamp konsepti.",
    suitableFor:
      "Rafting ve kano tutkunları, macera sporları meraklıları, dağ trekking ve dağ bisikleti gezginleri, Çoruh Vadisi keşfi planlayanlar, nehir kenarı kamp deneyimi arayanlar.",
    transportExtended:
      "Artvin Havalimanı'ndan Yusufeli'ne 60 km; Trabzon Havalimanı'ndan Artvin üzerinden 180 km mesafededir. Artvin otogarından Yusufeli otobüsleri günde birkaç sefer yapar. Özel araçla Artvin-Yusufeli karayolunu takip edip ilçe merkezine 5 km kala nehir kenarı tabelalarını izleyin. Nehir kenarı park alanı düz zemin sunar; yağmurlu dönemlerde nehir seviyesini takip edin. Otobüsle gelenler Yusufeli merkezden kısa taksi yolculuğu yapabilir. Rafting tur operatörleri yürüme mesafesindedir; sezon genellikle ilkbahar-yaz aylarındadır. Karadeniz yolları virajlıdır; dikkatli sürüş ve yağmurda kaymaz ayakkabı önerilir. Erzurum veya Trabzon üzerinden alternatif karayolu rotaları mevcuttur.",
  },
  "yusufeli-altiparmak-dag-kampi": {
    campType:
      "Yusufeli arkasında Altıparmak Dağları eteklerinde Kaçkar yakını yayla havasında yüksek rakımlı dağ kampı; çayırlık zemin, sınırlı elektrik ve yıldız gökyüzü ile otantik yayla çadır kamp konsepti.",
    suitableFor:
      "Kaçkar Dağları trekkingcileri, yayla kampı arayanlar, yıldız gözlemi tutkunları, yüksek rakımda serin hava isteyenler, yerel peynir-bal tadımı meraklıları.",
    transportExtended:
      "Artvin Havalimanı'ndan Yusufeli'ne 60 km; Yusufeli merkezden Altıparmak yayla yoluna 15 km, son 5 km toprak yoldur. Özel araçla toprak yolda dikkatli sürüş yapın; yağmurlu dönemlerde 4x4 araç tercih edilir. Artvin otogarından Yusufeli otobüsleri ile merkeze gelip taksi veya yerel araç ayarlayabilirsiniz. Kaçkar rotalarına çıkmadan önce hava durumunu kontrol edin. Otobüsle gelenler Yusufeli'den önceden transfer ayarlamalıdır; yayla yolunda toplu taşıma yoktur. Gece sıcaklığı düşük olabilir; kalın uyku tulumu şarttır. Yusufeli'nin tarihi taş köprüleri kamp sonrası gezilebilir. Trabzon Havalimanı alternatif ulaşım noktası olarak değerlendirilebilir.",
  },
  "mudurnu-lake-abant-kampi": {
    campType:
      "Bolu Mudurnu yakınında Abant Gölü kıyısında çam ormanı içi dört mevsim kamp; göl manzaralı çadır-karavan alanları, 5 km yürüyüş parkuru ve kış kar kampı imkânıyla göl-orman kamp konsepti.",
    suitableFor:
      "Aileler, hafta sonu kaçamak planlayan İstanbul ve Ankara sakinleri, bisiklet tutkunları, dört mevsim kamp arayanlar, Mudurnu tarihi gezisi planlayanlar.",
    transportExtended:
      "Ankara'dan 200 km, İstanbul'dan 280 km mesafededir. Ankara-İstanbul karayolunda (D-100) Mudurnu çıkışını takip edip göl yönüne 12 km sapın. Bolu otogarından Mudurnu otobüsleri mevcuttur; Abant Gölü için Bolu merkezden taksi veya tur araçları kullanılabilir. Özel araçla göl çevresi yolu tabelaları net şekilde işaretlenmiştir; kış aylarında kar lastiği şarttır. Otobüsle gelenler Bolu'dan Abant servisleri ile ulaşabilir. Kamp alanı park alanı göl kenarındadır; yaz sezonunda hafta sonları yoğundur. Mudurnu tarihi kent merkezi 20 km mesafede günübirlik gezi için uygundur. Ankara Esenboğa Havalimanı'ndan 180 km mesafededir.",
  },
  "mudurnu-tarihi-kent-kampi": {
    campType:
      "Bolu Mudurnu'da Osmanlı ahşap evleri arasında tarihi kent dokusu içinde butik kamp; çarşı yanı yeşil alanda çadır kurulumu ve kültür-doğa turizmini birleştiren tarihi kent kamp konsepti.",
    suitableFor:
      "Tarih ve kültür meraklıları, Osmanlı mimarisi tutkunları, Bolu mutfağı ve yerel peynir-bali keşfetmek isteyenler, Abant ve Yedigöller turları planlayanlar, farklı kamp deneyimi arayanlar.",
    transportExtended:
      "Bolu merkezden Mudurnu'ya 52 km; Ankara'dan 220 km, İstanbul'dan 300 km mesafededir. Bolu otogarından Mudurnu otobüsleri düzenli sefer yapar. Özel araçla Bolu-Mudurnu karayolunu takip edip tarihi kent merkezindeki kamp alanı tabelasını izleyin. Tarihi çarşı dar sokakları nedeniyle büyük karavanlarda giriş öncesi tesisle iletişim kurun. Otobüsle gelenler Mudurnu otogarından yürüyerek ulaşabilir. Abant Gölü 20 km, Yedigöller Milli Parkı 80 km mesafede günübirlik turlar için uygundur. Ankara Esenboğa Havalimanı'ndan 200 km mesafededir. Tarihi kent merkezinde park alanı sınırlıdır; hafta içi ziyaret daha rahat park imkânı sunar.",
  },
};
