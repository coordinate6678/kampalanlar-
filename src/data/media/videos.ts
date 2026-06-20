import type { Campsite } from "@/lib/types";
import { HERO_IMAGE } from "@/data/media/place-images";

export type VideoSource = "mp4" | "youtube";

export interface VideoMedia {
  type: VideoSource;
  src: string;
  poster?: string;
  title: string;
  description?: string;
}

interface LocationVideo {
  id: string;
  title: string;
  description: string;
}

function yt(
  { id, title, description }: LocationVideo,
  poster?: string
): VideoMedia {
  return {
    type: "youtube",
    src: id,
    poster: poster ?? `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    title,
    description,
  };
}

/** Bölge/ilçe/kamp için lokasyon temalı YouTube videoları */
const LOCATION_VIDEOS = {
  hero: {
    id: "Faow3SKIzq0",
    title: "Türkiye'de kamp ve doğa deneyimi",
    description: "Kamp alanları, çadır ve karavan rotalarından genel görüntüler",
  },
  canakkale: {
    id: "HPQiAeet7Cs",
    title: "Çanakkale Assos kamp ve antik kent gezisi",
    description:
      "Assos Behramkale, Kadırga Koyu ve Çanakkale kıyı kamp rotaları",
  },
  assos: {
    id: "HPQiAeet7Cs",
    title: "Assos kamp alanları ve Behramkale manzarası",
    description: "Antik Athena Tapınağı manzaralı Assos koy kamp noktaları",
  },
  gokceada: {
    id: "x6zUnowKlq0",
    title: "Gökçeada ada kampı ve plaj rotası",
    description:
      "Türkiye'nin en büyük adasında Aydıncık, Kaleköy ve koy kamp alanları",
  },
  kartepe: {
    id: "x5dFcLQ-Sek",
    title: "Kartepe Kuzuyayla karavan ve çadır kampı",
    description:
      "Kocaeli Kartepe Kuzuyayla Tabiat Parkı'nda İstanbul'a yakın kamp alanları",
  },
  cesme: {
    id: "-v7V7uZm1NI",
    title: "Çeşme kıyı kampı — Ilıca ve sahil rotası",
    description: "Çeşme Yarımadası'nda deniz kenarı kamp ve karavan alanları",
  },
  alacati: {
    id: "5OUWVAm9cxc",
    title: "Alaçatı Delikli Koy kamp alanı",
    description: "Alaçatı kıyısında çadır kampı ve Delikli Koy manzarası",
  },
  urla: {
    id: "FJbxbY5hR9I",
    title: "Urla sahil kampı ve bağ yolları",
    description: "Barbaros Koyu manzaralı Urla kıyı kamp noktaları",
  },
  seferihisar: {
    id: "Ejer1Y1k47s",
    title: "Seferihisar Sığacık koy kampı",
    description: "Cittaslow Seferihisar'da koy ve zeytinlik kamp alanları",
  },
  dikili: {
    id: "Xgjij0Hl-BQ",
    title: "Dikili sahil çadır kampı",
    description: "Nebiler Şelalesi ve Bademli Koyu çevresinde deniz kampı",
  },
  fethiye: {
    id: "vwkforUgj74",
    title: "Fethiye Kabak Koyu kamp rehberi",
    description: "Likya kıyısında Kabak Koyu ve Fethiye kamp alanları",
  },
  kabak: {
    id: "vwkforUgj74",
    title: "Kabak Koyu kamp alanları ve Likya rotası",
    description: "Fethiye Kabak Koyu'nda deniz-orman arası kamp deneyimi",
  },
  datca: {
    id: "IMFON_EzW5I",
    title: "Datça Palamutbükü kamp alanı",
    description: "Palamutbükü ve Datça yarımadası kıyı kamp noktaları",
  },
  hayitbuku: {
    id: "WRd6s0DJbK0",
    title: "Datça Hayıtbükü ve koy kamp rotası",
    description:
      "Hayıtbükü, Ovabükü ve Eski Datça çevresinde aile kamp tatili",
  },
  marmaris: {
    id: "wvo-PzxRL_o",
    title: "Marmaris Gökova kıyı kampı",
    description: "Çiftlik Koyu ve Bozburun yarımadası kamp rotaları",
  },
  edremit: {
    id: "IMGYCcitHoQ",
    title: "Edremit Akçay Altınkum kamp alanı",
    description: "Edremit körfezinde ücretsiz çadır ve karavan park alanı",
  },
  ayvalik: {
    id: "4e9AFk6GM1Q",
    title: "Ayvalık Cunda Adası kamp rotası",
    description: "Cunda ve Sarımsaklı plaj çevresinde Ege kamp noktaları",
  },
  kas: {
    id: "t4nxsOCSxAc",
    title: "Kaş Kaputaş ve Patara kamp rotası",
    description: "Kaputaş üstü koylar ve Kaş yarımadası kamp alanları",
  },
  kalkan: {
    id: "KqCP8dWcXSs",
    title: "Kalkan Kalamar Koyu kamp alanı",
    description: "Bezirgan Yaylası ve Kalkan Kalamar kıyı kamp noktaları",
  },
  olympos: {
    id: "IEz9RXvWARs",
    title: "Olympos ve Çıralı — antik kent, plaj ve kamp rotası",
    description:
      "Olympos Antik Kenti kalıntıları, Çıralı sahili, Yanartaş ve Likya kıyısı kamp görüntüleri",
  },
  cirali: {
    id: "IEz9RXvWARs",
    title: "Çıralı ve Olympos — Likya kıyısı kamp gezisi",
    description:
      "Çıralı plajı, Olympos antik kent harabeleri ve Yanartaş (Chimera) rotası",
  },
  yusufeli: {
    id: "XP6xRZCFDYU",
    title: "Yusufeli Çoruh vadisi dağ kampı",
    description: "Kaçkar eteklerinde nehir kenarı ve yayla kamp rotaları",
  },
  mudurnu: {
    id: "yqgDj2Jtv68",
    title: "Mudurnu ve Abant Gölü karavan kampı",
    description: "Abant Gölü çevresinde İstanbul'a yakın orman kamp alanları",
  },
  orman: {
    id: "IEz9RXvWARs",
    title: "Olympos çam ormanı kamp alanları",
    description:
      "Antik kent çevresindeki Olympos çam ormanında çadır ve ağaç ev kampı",
  },
  "deniz-kenari": {
    id: "qBXfT8G8Y-8",
    title: "Deniz kenarı kamp alanları",
    description: "Ege ve Akdeniz kıyısında plaj kampı",
  },
  dag: {
    id: "XP6xRZCFDYU",
    title: "Dağ kampı ve trekking",
    description: "Yayla ve dağ rotalarında kamp deneyimi",
  },
  karavan: {
    id: "Scxs7L0vhZ4",
    title: "Karavan ile kamp yolculuğu",
    description: "Karavan parkı ve mobil kamp rotaları",
  },
  bungalov: {
    id: "2eplAmjurKo",
    title: "Doğa içinde bungalov konaklama",
    description: "Orman ve kıyı bungalov kamp tesisleri",
  },
  kislik: {
    id: "viRgJhJR32c",
    title: "Kış kampı manzarası",
    description: "Karlı dağ ve kış kamp görüntüleri",
  },
} as const satisfies Record<string, LocationVideo>;

type LocationVideoKey = keyof typeof LOCATION_VIDEOS;

function makeVideo(key: LocationVideoKey, poster?: string): VideoMedia {
  return yt(LOCATION_VIDEOS[key], poster);
}

const PROVINCE_VIDEO: Record<string, LocationVideoKey> = {
  izmit: "kartepe",
  canakkale: "canakkale",
  izmir: "cesme",
  mugla: "fethiye",
  balikesir: "edremit",
  antalya: "kas",
  artvin: "yusufeli",
  bolu: "mudurnu",
};

const DISTRICT_VIDEO: Record<string, LocationVideoKey> = {
  kartepe: "kartepe",
  assos: "assos",
  gokceada: "gokceada",
  cesme: "cesme",
  urla: "urla",
  seferihisar: "seferihisar",
  dikili: "dikili",
  fethiye: "fethiye",
  datca: "datca",
  marmaris: "marmaris",
  edremit: "edremit",
  ayvalik: "ayvalik",
  kas: "kas",
  kalkan: "kalkan",
  olympos: "olympos",
  yusufeli: "yusufeli",
  mudurnu: "mudurnu",
};

const CATEGORY_VIDEO: Record<string, LocationVideoKey> = {
  orman: "orman",
  "deniz-kenari": "deniz-kenari",
  dag: "dag",
  karavan: "karavan",
  bungalov: "bungalov",
  kislik: "kislik",
};

const CAMPSITE_VIDEO: Record<string, LocationVideoKey> = {
  "kartepe-orman-kampi": "kartepe",
  "kartepe-yayla-karavan-kampi": "kartepe",
  "assos-kadirga-kamp": "assos",
  "assos-zeus-ormani-kampi": "assos",
  "gokceada-aydincik-kampi": "gokceada",
  "gokceada-kuzu-koyu-kampi": "gokceada",
  "alacati-doga-kampi": "alacati",
  "cesme-ilica-sahil-kampi": "cesme",
  "urla-sahil-kampi": "urla",
  "urla-bademler-bag-kampi": "urla",
  "sigacik-koy-kampi": "seferihisar",
  "seferihisar-urla-koyu-kampi": "seferihisar",
  "dikili-bademli-koyu-kampi": "dikili",
  "dikili-nebiler-dere-kampi": "dikili",
  "kabak-koyu-kamp": "kabak",
  "fethiye-katranci-koyu-kampi": "fethiye",
  "datca-palamutbuku-kamp": "datca",
  "datca-hayitbuku-kampi": "hayitbuku",
  "marmaris-ciftlik-koyu-kampi": "marmaris",
  "marmaris-bozburun-yarimadasi-kampi": "marmaris",
  "kazdagi-edremit-kamp": "edremit",
  "edremit-altinoluk-sahil-kampi": "edremit",
  "ayvalik-cunda-adasi-kampi": "ayvalik",
  "ayvalik-sarimsakli-kampi": "ayvalik",
  "kas-peninsula-kamp": "kas",
  "kas-kaputas-koyu-kampi": "kas",
  "kalkan-kalamar-koyu-kampi": "kalkan",
  "kalkan-bezirgan-yayla-kampi": "kalkan",
  "olympos-agac-ev-kamp": "olympos",
  "olympos-adrasan-koyu-kampi": "olympos",
  "yusufeli-coruh-nehri-kampi": "yusufeli",
  "yusufeli-altiparmak-dag-kampi": "yusufeli",
  "mudurnu-lake-abant-kampi": "mudurnu",
  "mudurnu-tarihi-kent-kampi": "mudurnu",
};

function withCampsiteContext(
  base: VideoMedia,
  campsite: Campsite,
  districtName: string
): VideoMedia {
  return {
    ...base,
    title: `${campsite.name} — ${districtName} kamp videosu`,
    description: `${districtName} bölgesinde ${campsite.name}: ${campsite.shortDescription}`,
  };
}

export function getHeroVideo(): VideoMedia {
  return makeVideo("hero", HERO_IMAGE);
}

export function getVideoForCampsite(
  campsite: Campsite,
  districtName?: string
): VideoMedia {
  const district = districtName ?? campsite.districtSlug;
  const key =
    CAMPSITE_VIDEO[campsite.slug] ??
    DISTRICT_VIDEO[campsite.districtSlug] ??
    PROVINCE_VIDEO[campsite.provinceSlug] ??
    CATEGORY_VIDEO[campsite.category] ??
    "orman";
  const base = makeVideo(key, campsite.images[0]);
  return withCampsiteContext(base, campsite, district);
}

export function getVideoForProvince(provinceSlug: string): VideoMedia | null {
  const key = PROVINCE_VIDEO[provinceSlug];
  if (!key) return null;
  return makeVideo(key);
}

export function getVideoForDistrict(
  provinceSlug: string,
  districtSlug: string,
  districtName?: string
): VideoMedia | null {
  const key =
    DISTRICT_VIDEO[districtSlug] ?? PROVINCE_VIDEO[provinceSlug] ?? null;
  if (!key) return null;
  const base = makeVideo(key);
  if (districtName) {
    return {
      ...base,
      title: `${districtName} — ${base.title}`,
      description: `${districtName} kamp alanları rehberi. ${base.description}`,
    };
  }
  return base;
}

export const HOMEPAGE_VIDEOS: VideoMedia[] = [
  makeVideo("canakkale"),
  makeVideo("gokceada"),
  makeVideo("kabak"),
  makeVideo("olympos"),
];
