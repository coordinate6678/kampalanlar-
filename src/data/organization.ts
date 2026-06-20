import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const ORGANIZATION = {
  legalName: "Kamp Alanları Rehberi",
  brandName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/globe.svg`,
  email: "info@kampalanlari.co",
  foundingDate: "2025",
  description:
    "Türkiye genelinde kamp alanları, karavan parkları ve doğa tesisleri hakkında bağımsız rehber içerik sunan dijital yayıncı.",
  contactPagePath: "/iletisim",
  aboutPagePath: "/hakkimizda",
  editorialPolicyPath: "/editorial-politika",
  locale: "tr-TR",
  areaServed: "TR",
  knowsAbout: [
    "kamp alanları",
    "karavan parkları",
    "çadır kampı",
    "doğa turizmi",
    "kamp ekipmanları",
  ],
  sameAs: [] as string[],
} as const;

export const DEFAULT_EDITOR = {
  name: "Kamp Alanları Editörü",
  role: "Kamp ve doğa rehberi editörü",
  bio: "Türkiye'de kamp alanı araştırması, saha doğrulama ve editoryal içerik üretimi alanında uzmanlaşmış editoryal ekip.",
} as const;
