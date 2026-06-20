import { wikimedia } from "@/lib/media/wikimedia";

/** Wikimedia Commons — lokasyona özgü, 1920px thumb görseller */
export const PLACE = {
  olymposBeach: wikimedia("e/e8", "Olimpos_beach.jpg"),
  olymposBeachRiver: wikimedia(
    "4/40",
    "Olympos_Beach_at_end_of_river_2013_4025.jpg"
  ),
  olymposBeachAlt: wikimedia("3/3d", "OlimposBeach.jpg"),
  olymposAncientPeak: wikimedia("d/d7", "Ancient_City_of_Olympos_Peak.jpg"),
  olymposAntikKenti: wikimedia("7/7a", "Olympos_Antik_Kenti.jpg"),
  adrasanBay: wikimedia("7/7f", "Adrasan_Suluada.jpg"),

  assosCoast: wikimedia("6/60", "Assos, Turkey - 6452161411.jpg"),

  gokceadaKardamos: wikimedia(
    "8/8d",
    "20100524 Kardamos beach Imbros Gökçeada Turkey.jpg"
  ),

  sapancaLake: wikimedia("f/f7", "Sapanca_Lake.jpg"),
  lakeSapanca: wikimedia("d/d4", "Lake_Sapanca.jpg"),
  kartepe: wikimedia("8/83", "Kartepe.jpg"),

  alacati: wikimedia("6/6e", "Alaçatı 2016.jpg"),
  cesmeSquare: wikimedia("1/17", "Cesme-square4.JPG"),
  cesmeIlica: wikimedia("e/ec", "Cesme Ilica beach - panoramio.jpg"),
  urlaIskele: wikimedia("9/94", "İzmir Urla İskele.jpg"),
  sigacik: wikimedia("0/05", "Sığacık 02.jpg"),
  dikiliAtarna: wikimedia("0/0a", "Atarna(Atarneus) Dikili Turkey.jpg"),

  kabakBeach: wikimedia("3/37", "Kabak_Valley_beach.jpg"),
  fethiye: wikimedia("8/8a", "Fethiye_3.jpg"),
  datca: wikimedia("e/e5", "Datça.jpg"),
  palamutbuku: wikimedia("b/b7", "Palamutbükü.jpg"),
  marmarisHarbor: wikimedia(
    "d/d5",
    "Marmaris harbor (aerial view), Muğla Province, southwest Turkey, Mediterranean.jpg"
  ),

  altinoluk: wikimedia("5/57", "Altinoluk.jpg"),
  ayvalikIslands: wikimedia(
    "7/72",
    "Comet NEOWISE over Ayvalık Islands Nature Park.jpg"
  ),
  cundaWindmill: wikimedia("0/00", "Windmill_at_Cunda_Island.jpg"),
  sarimsakli: wikimedia("f/f0", "Sarimsakli beach (3974428806).jpg"),

  kas: wikimedia("5/55", "Antalya, Kaş 01.jpg"),
  kaputas: wikimedia("c/c9", "KAPUTAŞ BEACH - panoramio - Haluk Comertel.jpg"),
  kalkanHarbour: wikimedia("e/ef", "Turkey Harbour in Kalkan.JPG"),

  yusufeliCoruh: wikimedia("5/55", "Yusufeli Çoruh Valley 04.jpg"),
  mudurnu: wikimedia(
    "3/35",
    "Mudurnu Ovası 16 09 1981 Becken von Mudurnu.jpg"
  ),
  abantLake: wikimedia("0/0d", "Abant lake snowy.jpg"),
} as const;

export const HERO_SLIDES: { src: string; alt: string }[] = [
  { src: PLACE.kabakBeach, alt: "Kabak Koyu sahili, Fethiye" },
  { src: PLACE.olymposBeach, alt: "Olympos plajı, Antalya" },
  { src: PLACE.assosCoast, alt: "Assos kıyısı, Çanakkale" },
  { src: PLACE.kaputas, alt: "Kaputaş plajı, Kaş" },
  { src: PLACE.gokceadaKardamos, alt: "Gökçeada plajı" },
  { src: PLACE.olymposAntikKenti, alt: "Olympos Antik Kenti" },
  { src: PLACE.yusufeliCoruh, alt: "Yusufeli Çoruh vadisi, Artvin" },
  { src: PLACE.abantLake, alt: "Abant Gölü, Bolu" },
];

/** @deprecated HERO_SLIDES[0] kullanın */
export const HERO_IMAGE = PLACE.kabakBeach;

export const PROVINCE_IMAGES: Record<string, string> = {
  izmit: PLACE.sapancaLake,
  canakkale: PLACE.assosCoast,
  izmir: PLACE.cesmeIlica,
  mugla: PLACE.kabakBeach,
  balikesir: PLACE.ayvalikIslands,
  antalya: PLACE.olymposBeach,
  artvin: PLACE.yusufeliCoruh,
  bolu: PLACE.abantLake,
};

export const DISTRICT_IMAGES: Record<string, string> = {
  "izmit/kartepe": PLACE.sapancaLake,
  "canakkale/assos": PLACE.assosCoast,
  "canakkale/gokceada": PLACE.gokceadaKardamos,
  "izmir/cesme": PLACE.cesmeIlica,
  "izmir/urla": PLACE.urlaIskele,
  "izmir/seferihisar": PLACE.sigacik,
  "izmir/dikili": PLACE.dikiliAtarna,
  "mugla/fethiye": PLACE.kabakBeach,
  "mugla/datca": PLACE.datca,
  "mugla/marmaris": PLACE.marmarisHarbor,
  "balikesir/edremit": PLACE.altinoluk,
  "balikesir/ayvalik": PLACE.cundaWindmill,
  "antalya/kas": PLACE.kas,
  "antalya/kalkan": PLACE.kalkanHarbour,
  "antalya/olympos": PLACE.olymposAntikKenti,
  "artvin/yusufeli": PLACE.yusufeliCoruh,
  "bolu/mudurnu": PLACE.abantLake,
};

export const CATEGORY_IMAGES: Record<string, string> = {
  "deniz-kenari": PLACE.kaputas,
  dag: PLACE.yusufeliCoruh,
  orman: PLACE.olymposAntikKenti,
  kislik: PLACE.abantLake,
  festival: PLACE.alacati,
  karavan: PLACE.lakeSapanca,
  bungalov: PLACE.olymposBeachRiver,
};

export const CAMPSITE_IMAGES: Record<string, [string, string, string]> = {
  "kartepe-orman-kampi": [PLACE.sapancaLake, PLACE.kartepe, PLACE.lakeSapanca],
  "kartepe-yayla-karavan-kampi": [
    PLACE.lakeSapanca,
    PLACE.kartepe,
    PLACE.sapancaLake,
  ],
  "assos-kadirga-kamp": [
    PLACE.assosCoast,
    PLACE.assosCoast,
    PLACE.assosCoast,
  ],
  "assos-zeus-ormani-kampi": [
    PLACE.assosCoast,
    PLACE.assosCoast,
    PLACE.assosCoast,
  ],
  "gokceada-aydincik-kampi": [
    PLACE.gokceadaKardamos,
    PLACE.gokceadaKardamos,
    PLACE.gokceadaKardamos,
  ],
  "gokceada-kuzu-koyu-kampi": [
    PLACE.gokceadaKardamos,
    PLACE.gokceadaKardamos,
    PLACE.gokceadaKardamos,
  ],
  "alacati-doga-kampi": [PLACE.alacati, PLACE.cesmeSquare, PLACE.cesmeIlica],
  "cesme-ilica-sahil-kampi": [
    PLACE.cesmeIlica,
    PLACE.alacati,
    PLACE.cesmeSquare,
  ],
  "urla-sahil-kampi": [PLACE.urlaIskele, PLACE.urlaIskele, PLACE.urlaIskele],
  "urla-bademler-bag-kampi": [
    PLACE.urlaIskele,
    PLACE.urlaIskele,
    PLACE.urlaIskele,
  ],
  "sigacik-koy-kampi": [PLACE.sigacik, PLACE.sigacik, PLACE.sigacik],
  "seferihisar-urla-koyu-kampi": [
    PLACE.sigacik,
    PLACE.sigacik,
    PLACE.sigacik,
  ],
  "dikili-bademli-koyu-kampi": [
    PLACE.dikiliAtarna,
    PLACE.dikiliAtarna,
    PLACE.dikiliAtarna,
  ],
  "dikili-nebiler-dere-kampi": [
    PLACE.dikiliAtarna,
    PLACE.dikiliAtarna,
    PLACE.dikiliAtarna,
  ],
  "kabak-koyu-kamp": [PLACE.kabakBeach, PLACE.kabakBeach, PLACE.fethiye],
  "fethiye-katranci-koyu-kampi": [
    PLACE.fethiye,
    PLACE.kabakBeach,
    PLACE.fethiye,
  ],
  "datca-palamutbuku-kamp": [PLACE.palamutbuku, PLACE.datca, PLACE.palamutbuku],
  "datca-hayitbuku-kampi": [PLACE.datca, PLACE.palamutbuku, PLACE.datca],
  "marmaris-ciftlik-koyu-kampi": [
    PLACE.marmarisHarbor,
    PLACE.marmarisHarbor,
    PLACE.marmarisHarbor,
  ],
  "marmaris-bozburun-yarimadasi-kampi": [
    PLACE.marmarisHarbor,
    PLACE.datca,
    PLACE.marmarisHarbor,
  ],
  "kazdagi-edremit-kamp": [
    PLACE.altinoluk,
    PLACE.altinoluk,
    PLACE.ayvalikIslands,
  ],
  "edremit-altinoluk-sahil-kampi": [
    PLACE.altinoluk,
    PLACE.altinoluk,
    PLACE.sarimsakli,
  ],
  "ayvalik-cunda-adasi-kampi": [
    PLACE.cundaWindmill,
    PLACE.ayvalikIslands,
    PLACE.cundaWindmill,
  ],
  "ayvalik-sarimsakli-kampi": [
    PLACE.sarimsakli,
    PLACE.cundaWindmill,
    PLACE.ayvalikIslands,
  ],
  "kas-peninsula-kamp": [PLACE.kas, PLACE.kaputas, PLACE.kas],
  "kas-kaputas-koyu-kampi": [PLACE.kaputas, PLACE.kas, PLACE.kaputas],
  "kalkan-kalamar-koyu-kampi": [
    PLACE.kalkanHarbour,
    PLACE.kaputas,
    PLACE.kalkanHarbour,
  ],
  "kalkan-bezirgan-yayla-kampi": [
    PLACE.kalkanHarbour,
    PLACE.kas,
    PLACE.kaputas,
  ],
  "olympos-agac-ev-kamp": [
    PLACE.olymposAntikKenti,
    PLACE.olymposAncientPeak,
    PLACE.olymposBeachRiver,
  ],
  "olympos-adrasan-koyu-kampi": [
    PLACE.adrasanBay,
    PLACE.olymposBeach,
    PLACE.olymposBeachAlt,
  ],
  "yusufeli-coruh-nehri-kampi": [
    PLACE.yusufeliCoruh,
    PLACE.yusufeliCoruh,
    PLACE.yusufeliCoruh,
  ],
  "yusufeli-altiparmak-dag-kampi": [
    PLACE.yusufeliCoruh,
    PLACE.yusufeliCoruh,
    PLACE.yusufeliCoruh,
  ],
  "mudurnu-lake-abant-kampi": [
    PLACE.abantLake,
    PLACE.abantLake,
    PLACE.mudurnu,
  ],
  "mudurnu-tarihi-kent-kampi": [
    PLACE.mudurnu,
    PLACE.abantLake,
    PLACE.mudurnu,
  ],
};

export function getProvinceImage(
  provinceSlug: string,
  fallback: string
): string {
  return PROVINCE_IMAGES[provinceSlug] ?? fallback;
}

export function getDistrictImage(
  provinceSlug: string,
  districtSlug: string,
  provinceImage: string
): string {
  return (
    DISTRICT_IMAGES[`${provinceSlug}/${districtSlug}`] ??
    PROVINCE_IMAGES[provinceSlug] ??
    provinceImage
  );
}

export function getCategoryImage(slug: string, fallback: string): string {
  return CATEGORY_IMAGES[slug] ?? fallback;
}

export const GUIDE_IMAGES: Record<string, string> = {
  "en-iyi-ucretsiz-kamp-alanlari": PLACE.olymposBeach,
  "istanbul-yakin-kamp-alanlari": PLACE.sapancaLake,
  "karavanla-gidilebilecek-kamp-alanlari": PLACE.lakeSapanca,
  "deniz-kenari-kamp-rehberi": PLACE.kaputas,
  "ilk-kez-kamp-rehberi": PLACE.kabakBeach,
  "kamp-cantasi-hazirlama-rehberi": PLACE.fethiye,
  "kamp-guvenligi-rehberi": PLACE.yusufeliCoruh,
  "yaz-kampi-vs-kis-kampi": PLACE.abantLake,
  "cadir-secme-rehberi": PLACE.assosCoast,
  "kamp-ekipmanlari-kontrol-listesi": PLACE.kartepe,
};

export function getGuideImage(slug: string, fallback: string): string {
  return GUIDE_IMAGES[slug] ?? fallback;
}
