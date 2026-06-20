import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, "..");

// Load compiled/transpiled data via dynamic import of built modules is hard;
// parse source files and JSON directly.

const { regions } = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/iller.json"), "utf8")
);

function countWords(text) {
  return text
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function normalizeForCompare(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(text) {
  return new Set(normalizeForCompare(text).split(" ").filter((w) => w.length > 3));
}

function jaccard(a, b) {
  const A = tokenSet(a);
  const B = tokenSet(b);
  if (A.size === 0 && B.size === 0) return 1;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function extractRecordBlocks(source, exportName) {
  const file = fs.readFileSync(path.join(root, source), "utf8");
  const start = file.indexOf(`export const ${exportName}`);
  if (start === -1) throw new Error(`Missing ${exportName} in ${source}`);
  const slice = file.slice(start);
  const blocks = {};
  const re = /^\s{2}(["'`][^"'`]+["'`]):\s*\{([\s\S]*?)\n\s{2}\},?\n/gm;
  let m;
  while ((m = re.exec(slice))) {
    const key = m[1].replace(/^["'`]|["'`]$/g, "");
    const body = m[2];
    const paragraphs = [...body.matchAll(/"((?:\\.|[^"\\])*)"/g)]
      .map((x) => x[1].replace(/\\n/g, "\n"))
      .filter((_, i, arr) => {
        const context = body.slice(0, body.indexOf(`"${arr[i]}`));
        return context.includes("paragraphs") || context.includes("intro") || context.includes("extraParagraphs") || context.includes("tips") || context.includes("nearbyAttractions") || context.includes("bestSeason");
      });
    blocks[key] = body;
    blocks[`__text__${key}`] = paragraphs.join(" ");
  }
  return blocks;
}

// Simpler: eval-like extraction for paragraph arrays
function parseTsParagraphMap(filePath, exportName) {
  const file = fs.readFileSync(path.join(root, filePath), "utf8");
  const exportIdx = file.indexOf(`export const ${exportName}`);
  const mapStart = file.indexOf("{", exportIdx);
  let depth = 0;
  let end = mapStart;
  for (let i = mapStart; i < file.length; i++) {
    if (file[i] === "{") depth++;
    if (file[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  const objText = file.slice(mapStart, end);
  const entries = {};
  const entryRe = /(["'`])([^"'`]+)\1\s*:\s*\{([\s\S]*?)\n\s{2}\}/g;
  let m;
  while ((m = entryRe.exec(objText))) {
    const key = m[2];
    const body = m[3];
    const grab = (field) => {
      const fieldRe = new RegExp(`${field}:\\s*\\[([\\s\\S]*?)\\]`, "m");
      const fm = body.match(fieldRe);
      if (!fm) return [];
      return [...fm[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) =>
        x[1].replace(/\\n/g, "\n").replace(/\\"/g, '"')
      );
    };
    const grabString = (field) => {
      const sm = body.match(new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`));
      return sm ? sm[1].replace(/\\n/g, "\n").replace(/\\"/g, '"') : null;
    };
    entries[key] = {
      paragraphs: grab("paragraphs"),
      intro: grabString("intro"),
      tips: grab("tips"),
      extraParagraphs: grab("extraParagraphs"),
      bestSeason: grabString("bestSeason"),
      nearbyAttractions: grab("nearbyAttractions"),
    };
  }
  return entries;
}

function parseCampsiteFiles() {
  const regions = ["marmara", "ege", "akdeniz", "karadeniz"];
  const campsites = [];
  for (const region of regions) {
    const file = fs.readFileSync(
      path.join(root, `src/data/campsites/${region}.ts`),
      "utf8"
    );
    const blocks = file.match(/\{[^{}]*slug:\s*"[^"]+"[^{}]*\}/gs) || [];
    for (const block of blocks) {
      const slug = block.match(/slug:\s*"([^"]+)"/)?.[1];
      const name = block.match(/name:\s*"([^"]+)"/)?.[1];
      const provinceSlug = block.match(/provinceSlug:\s*"([^"]+)"/)?.[1];
      const districtSlug = block.match(/districtSlug:\s*"([^"]+)"/)?.[1];
      const shortDescription = block.match(/shortDescription:\s*"([^"]+)"/)?.[1];
      const descMatch = block.match(/description:\s*"((?:\\.|[^"\\])*)"/s);
      const description = descMatch
        ? descMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"')
        : "";
      const transportMatch = block.match(/transport:\s*"((?:\\.|[^"\\])*)"/s);
      const transport = transportMatch
        ? transportMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"')
        : "";
      const rating = block.match(/rating:\s*([\d.]+)/)?.[1];
      const reviewCount = block.match(/reviewCount:\s*(\d+)/)?.[1];
      const category = block.match(/category:\s*"([^"]+)"/)?.[1];
      if (slug) {
        campsites.push({
          slug,
          name,
          provinceSlug,
          districtSlug,
          shortDescription,
          description,
          transport,
          rating,
          reviewCount,
          category,
        });
      }
    }
  }
  return campsites;
}

const provinceContent = parseTsParagraphMap(
  "src/lib/content/province-content.ts",
  "provinceExtendedContent"
);
const districtContent = parseTsParagraphMap(
  "src/lib/content/district-content.ts",
  "districtExtendedContent"
);
const categoryContent = parseTsParagraphMap(
  "src/lib/content/category-content.ts",
  "categoryContent"
);
const campsiteSeoContent = parseTsParagraphMap(
  "src/lib/content/campsite-content.ts",
  "campsiteSeoContent"
);

const campsites = parseCampsiteFiles();

function provinceFaq(name, count) {
  return [
    `${name} genelinde devlet ormanı, milli park ve belirlenmiş mesire alanlarında ücretsiz kamp mümkün olabilir; ancak alan bazında kurallar değişir. Yangın dönemlerinde yasaklar sıkılaşır. Gitmeden önce Orman Genel Müdürlüğü veya yerel belediye duyurularını kontrol edin.`,
    `Rehberimizde ${name} için ${count > 0 ? `${count} kamp noktası` : "ilçe bazlı rotalar"} listeleniyor. Deniz kenarı, orman veya yayla tercihinize göre ilçe sayfalarından detaylı listeye ulaşabilirsiniz.`,
    `Ulaşım ilçeden ilçeye değişir. Özel araç en yaygın seçenektir; toplu taşıma sınırlı olabilir. Her kamp sayfasında ulaşım notları ve harita bağlantısı bulunur.`,
  ];
}

function districtFaq(district, province, count) {
  return [
    `${district}, ${province} sınırlarında deniz, orman veya yayla karakterine göre farklı sezonlar sunar. İlkbahar ve sonbahar genelde daha sakin ve ılımandır; yaz aylarında rezervasyon veya erken varış önerilir.`,
    count > 0
      ? `Şu an ${district} bölgesinde ${count} kamp alanı listelenmektedir. Her tesisin özellikleri, fiyat bilgisi ve ulaşım detayları ilgili sayfada yer alır.`
      : `${district} için kamp alanı verilerimiz güncelleniyor. Bölge rehberi ve komşu ilçe önerileri sayfada mevcuttur.`,
    `Karavan uygunluğu tesise göre değişir. ${district} sayfasındaki listelerde karavan parkı veya geniş alan sunan tesisleri filtreleyerek planlama yapabilirsiniz.`,
  ];
}

function categoryFaq(name, count) {
  return [
    `Mevsim koşulları, ulaşım, su/elektrik imkânı, güvenlik ve alan kuralları temel kriterlerdir. ${name} kategorisinde ${count > 0 ? `${count} tesis` : "rehber ve bölge önerileri"} ile karşılaştırma yapabilirsiniz.`,
    `Temel çadır veya karavan setine ek olarak kategoriye özel ekipman değişir. Deniz kenarında güneş koruma, dağ/ormanda katmanlı giyim ve navigasyon araçları önemlidir. Kamp ekipmanları rehberimizden detaylı listeye ulaşabilirsiniz.`,
    `Özel tesislerde yoğun sezonda rezervasyon önerilir. Kamuya açık alanlarda genelde rezervasyon yoktur; erken gitmek avantaj sağlar.`,
  ];
}

function genericCampsiteExtra(c) {
  const match = regions
    .flatMap((r) => r.provinces)
    .flatMap((p) => p.districts?.map((d) => ({ p, d })) || [])
    .find((x) => x.p.slug === c.provinceSlug && x.d.slug === c.districtSlug);
  const provinceName =
    regions.flatMap((r) => r.provinces).find((p) => p.slug === c.provinceSlug)?.name ||
    c.provinceSlug;
  const districtName = match?.d?.name || c.districtSlug;
  return {
    extraParagraphs: [
      `${c.name}, ${districtName} (${provinceName}) bölgesinde ${c.category.replace(/-/g, " ")} kategorisinde listelenen kamp alanlarından biridir. ${c.shortDescription}`,
      `${districtName} kamp alanları arasında ${c.rating} puan ve ${c.reviewCount} değerlendirme ile öne çıkan ${c.name}; ulaşım, tesis özellikleri ve konum bilgileri bu sayfada güncel olarak sunulmaktadır.`,
    ],
    bestSeason: `${districtName} bölgesinde kamp için mayıs-haziran ve eylül-ekim ayları genellikle en dengeli dönemlerdir. Yaz aylarında deniz suyu sıcaklığı yüksektir; hafta sonları yoğunluk artabilir.`,
    tips: [
      "Rezervasyon ve güncel fiyat bilgisi için gitmeden önce tesisle iletişime geçin.",
      "Gece sıcaklığı düşebileceğinden katmanlı giyim ve uyku tulumu seçimine dikkat edin.",
      "Çöpünüzü geri götürün; doğaya saygılı kamp kurallarına uyun.",
      "Harita ve ulaşım bilgilerini yola çıkmadan kontrol edin.",
    ],
    nearbyAttractions: [
      `${districtName} çevresindeki doğal ve tarihî noktalar`,
      `${provinceName} ilindeki diğer kamp alanları`,
      "Yürüyüş rotaları ve seyir terasları",
    ],
  };
}

function splitDescription(text) {
  const parts = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [text];
}

const pages = [];

for (const region of regions) {
  for (const il of region.provinces) {
    const ext = provinceContent[il.slug];
    const paragraphs = ext?.paragraphs?.length ? ext.paragraphs : [il.description];
    const districtCount = il.districts?.length || 0;
    const provinceCampsites = campsites.filter((c) => c.provinceSlug === il.slug);
    const campsiteCount = provinceCampsites.length;
    const indexable = districtCount > 0 || campsiteCount > 0;

    const templateParts = [];
    if (campsiteCount > 0) {
      templateParts.push(
        `${il.name} genelinde ${campsiteCount} kamp alanı listelenmektedir. Detaylı özellikler, harita ve ulaşım bilgileri için ilgili sayfayı ziyaret edin.`
      );
      templateParts.push(
        `${il.name} genelinde listelediğimiz ${campsiteCount} kamp alanı; çadır, karavan, bungalov ve deniz kenarı seçenekleriyle farklı ihtiyaçlara hitap eder. İlçe sayfalarından her bölgenin detaylı rehberine ulaşabilirsiniz.`
      );
    }
    const faq = provinceFaq(il.name, campsiteCount);
    const editorial = paragraphs.join(" ");
    const fullText = [editorial, ...templateParts, ...faq].join(" ");
    const editorialWords = countWords(editorial);
    const totalWords = countWords(fullText);
    const usesFallback = !ext?.paragraphs?.length;
    const templateRatio =
      countWords(templateParts.join(" ") + faq.join(" ")) / Math.max(totalWords, 1);

    pages.push({
      type: "province",
      path: `/kamp-alanlari/${il.slug}`,
      name: il.name,
      indexable,
      editorialWords,
      totalWords,
      usesFallback,
      templateRatio,
      editorialText: editorial,
      hasListOnlyRisk: editorialWords < 120 && campsiteCount > 0,
      missing: [],
      sections: {
        editorial: paragraphs.length,
        faq: 3,
        campsiteList: campsiteCount,
        districtList: districtCount,
      },
    });

    for (const ilce of il.districts || []) {
      const key = `${il.slug}/${ilce.slug}`;
      const dext = districtContent[key];
      const dParagraphs = dext?.paragraphs?.length
        ? dext.paragraphs
        : [ilce.description];
      const dCampsites = campsites.filter(
        (c) => c.provinceSlug === il.slug && c.districtSlug === ilce.slug
      );
      const dCount = dCampsites.length;
      const dIndexable = dCount > 0;
      const dTemplate = [];
      if (dCount > 0) {
        dTemplate.push(
          `${ilce.name} bölgesinde ${dCount} kamp alanı listelenmektedir.`
        );
        dTemplate.push(
          `${ilce.name} kamp alanları arasında çadır, karavan ve bungalov seçenekleri bulunmaktadır. Her tesisin detay sayfasında ulaşım, harita ve özellik bilgileri yer alır.`
        );
      }
      const dFaq = districtFaq(ilce.name, il.name, dCount);
      const dEditorial = dParagraphs.join(" ");
      const dFull = [dEditorial, ...dTemplate, ...dFaq].join(" ");
      const dEditorialWords = countWords(dEditorial);
      const dTotalWords = countWords(dFull);

      pages.push({
        type: "district",
        path: `/kamp-alanlari/${il.slug}/${ilce.slug}`,
        name: `${ilce.name} (${il.name})`,
        indexable: dIndexable,
        editorialWords: dEditorialWords,
        totalWords: dTotalWords,
        usesFallback: !dext?.paragraphs?.length,
        templateRatio:
          countWords(dTemplate.join(" ") + dFaq.join(" ")) / Math.max(dTotalWords, 1),
        editorialText: dEditorial,
        hasListOnlyRisk: dEditorialWords < 100 && dCount > 0,
        missing: [],
        sections: {
          editorial: dParagraphs.length,
          faq: 3,
          campsiteList: dCount,
        },
      });
    }
  }
}

for (const [slug, content] of Object.entries(categoryContent)) {
  const catCampsites = campsites.filter((c) => c.category === slug);
  const editorial = [content.intro, ...(content.paragraphs || [])].filter(Boolean).join(" ");
  const tips = (content.tips || []).join(" ");
  const faq = categoryFaq(
    slug.replace(/-/g, " "),
    catCampsites.length
  );
  const full = [editorial, tips, faq.join(" ")].join(" ");
  const editorialWords = countWords(editorial);
  const totalWords = countWords(full);
  pages.push({
    type: "category",
    path: `/kategori/${slug}`,
    name: slug,
    indexable: true,
    editorialWords,
    totalWords,
    usesFallback: false,
    templateRatio: countWords(tips + faq.join(" ")) / Math.max(totalWords, 1),
    editorialText: editorial,
    hasListOnlyRisk: editorialWords < 150 && catCampsites.length > 3,
    missing: [],
    sections: {
      editorial: (content.paragraphs || []).length + (content.intro ? 1 : 0),
      tips: (content.tips || []).length,
      faq: 3,
      campsiteList: catCampsites.length,
    },
  });
}

for (const c of campsites) {
  const seo = campsiteSeoContent[c.slug];
  const generic = genericCampsiteExtra(c);
  const mainParagraphs = splitDescription(c.description);
  const extraParagraphs = seo?.extraParagraphs?.length
    ? seo.extraParagraphs
    : generic.extraParagraphs;
  const bestSeason = seo?.bestSeason || generic.bestSeason;
  const tips = seo?.tips?.length ? seo.tips : generic.tips;
  const nearby = seo?.nearbyAttractions?.length
    ? seo.nearbyAttractions
    : generic.nearbyAttractions;
  const editorial = [
    ...mainParagraphs,
    ...extraParagraphs,
    bestSeason,
    ...tips,
    ...nearby,
    c.transport,
  ]
    .filter(Boolean)
    .join(" ");
  const editorialWords = countWords(
    [...mainParagraphs, ...extraParagraphs, bestSeason, c.transport].join(" ")
  );
  const totalWords = countWords(editorial);
  const usesGenericSeo = !seo;
  const descWords = countWords(c.description);
  const transportWords = countWords(c.transport || "");

  const missing = [];
  if (descWords < 80) missing.push("kısa ana açıklama");
  if (transportWords < 40) missing.push("yetersiz ulaşım metni");
  if (!seo) missing.push("özel SEO extras yok (generic fallback)");
  if (mainParagraphs.length < 2) missing.push("tek paragraflık açıklama");

  pages.push({
    type: "campsite",
    path: `/kamp-alanlari/${c.provinceSlug}/${c.districtSlug}/${c.slug}`,
    name: c.name,
    indexable: true,
    editorialWords,
    totalWords,
    usesFallback: usesGenericSeo,
    templateRatio: usesGenericSeo ? 0.35 : 0.15,
    editorialText: [...mainParagraphs, ...extraParagraphs].join(" "),
    hasListOnlyRisk: descWords < 60,
    missing,
    sections: {
      mainParagraphs: mainParagraphs.length,
      extraParagraphs: extraParagraphs.length,
      tips: tips.length,
      nearby: nearby.length,
      transportWords,
    },
  });
}

function riskLevel(page) {
  let score = 0;
  if (page.editorialWords < 150) score += 3;
  else if (page.editorialWords < 250) score += 2;
  else if (page.editorialWords < 300) score += 1;

  if (page.totalWords < 300) score += 2;
  else if (page.totalWords < 400) score += 1;

  if (page.templateRatio > 0.45) score += 2;
  else if (page.templateRatio > 0.3) score += 1;

  if (page.usesFallback) score += 2;
  if (page.hasListOnlyRisk) score += 2;
  if (!page.indexable) score += 1;
  if (page.missing.length >= 2) score += 1;

  if (score >= 7) return "yüksek";
  if (score >= 4) return "orta";
  return "düşük";
}

function minContent(page) {
  switch (page.type) {
    case "province":
      return page.indexable ? 350 : 200;
    case "district":
      return 300;
    case "category":
      return 400;
    case "campsite":
      return 350;
    default:
      return 300;
  }
}

for (const p of pages) {
  p.risk = riskLevel(p);
  p.minRecommended = minContent(p);
  p.wordGap = Math.max(0, p.minRecommended - p.editorialWords);
}

// Similarity pairs among same type editorial text
const similarPairs = [];
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    if (pages[i].type !== pages[j].type) continue;
    const sim = jaccard(pages[i].editorialText, pages[j].editorialText);
    if (sim >= 0.45) {
      similarPairs.push({
        a: pages[i].path,
        b: pages[j].path,
        similarity: Math.round(sim * 100),
        type: pages[i].type,
      });
    }
  }
}

const indexablePages = pages.filter((p) => p.indexable);
const under300 = pages.filter((p) => p.totalWords < 300);
const under300Editorial = pages.filter((p) => p.editorialWords < 300);
const highTemplate = pages.filter((p) => p.templateRatio > 0.35);
const listOnly = pages.filter((p) => p.hasListOnlyRisk);
const thinGoogle = pages.filter(
  (p) =>
    p.indexable &&
    (p.editorialWords < 200 || p.templateRatio > 0.4 || p.hasListOnlyRisk)
);

const report = {
  summary: {
    totalPages: pages.length,
    indexablePages: indexablePages.length,
    under300TotalWords: under300.length,
    under300EditorialWords: under300Editorial.length,
    highTemplateUsage: highTemplate.length,
    similarPairs: similarPairs.length,
    listOnlyRisk: listOnly.length,
    thinContentRisk: thinGoogle.length,
    byRisk: {
      yüksek: pages.filter((p) => p.risk === "yüksek").length,
      orta: pages.filter((p) => p.risk === "orta").length,
      düşük: pages.filter((p) => p.risk === "düşük").length,
    },
  },
  under300TotalWords: under300.map((p) => ({
    path: p.path,
    type: p.type,
    totalWords: p.totalWords,
    editorialWords: p.editorialWords,
    risk: p.risk,
  })),
  under300Editorial: under300Editorial
    .sort((a, b) => a.editorialWords - b.editorialWords)
    .map((p) => ({
      path: p.path,
      type: p.type,
      editorialWords: p.editorialWords,
      totalWords: p.totalWords,
      risk: p.risk,
      missing: p.missing,
      minRecommended: p.minRecommended,
    })),
  highTemplatePages: highTemplate
    .sort((a, b) => b.templateRatio - a.templateRatio)
    .map((p) => ({
      path: p.path,
      templateRatio: Math.round(p.templateRatio * 100),
      editorialWords: p.editorialWords,
      risk: p.risk,
    })),
  similarPairs: similarPairs.sort((a, b) => b.similarity - a.similarity).slice(0, 30),
  listOnlyPages: listOnly.map((p) => ({
    path: p.path,
    editorialWords: p.editorialWords,
    risk: p.risk,
  })),
  thinContentPages: thinGoogle
    .sort((a, b) => a.editorialWords - b.editorialWords)
    .map((p) => ({
      path: p.path,
      type: p.type,
      name: p.name,
      risk: p.risk,
      editorialWords: p.editorialWords,
      totalWords: p.totalWords,
      templateRatio: Math.round(p.templateRatio * 100),
      missing: p.missing,
      minRecommended: p.minRecommended,
      wordGap: p.wordGap,
      usesFallback: p.usesFallback,
    })),
  allPages: pages
    .sort((a, b) => {
      const order = { yüksek: 0, orta: 1, düşük: 2 };
      return order[a.risk] - order[b.risk] || a.editorialWords - b.editorialWords;
    })
    .map((p) => ({
      path: p.path,
      type: p.type,
      name: p.name,
      indexable: p.indexable,
      risk: p.risk,
      editorialWords: p.editorialWords,
      totalWords: p.totalWords,
      templateRatio: Math.round(p.templateRatio * 100),
      minRecommended: p.minRecommended,
      wordGap: p.wordGap,
      missing: p.missing,
      usesFallback: p.usesFallback,
    })),
};

fs.writeFileSync(
  path.join(root, "scripts/content-analysis-report.json"),
  JSON.stringify(report, null, 2)
);

console.log(JSON.stringify(report.summary, null, 2));
console.log("\nTOP RISK (first 15):");
for (const p of report.thinContentPages.slice(0, 15)) {
  console.log(`- [${p.risk}] ${p.path} (${p.editorialWords} ed / ${p.totalWords} total)`);
}
