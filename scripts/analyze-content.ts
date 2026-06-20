import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function countWords(text: string): number {
  return text
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function normalizeForCompare(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(text: string): Set<string> {
  return new Set(
    normalizeForCompare(text)
      .split(" ")
      .filter((w) => w.length > 3)
  );
}

function jaccard(a: string, b: string): number {
  const A = tokenSet(a);
  const B = tokenSet(b);
  if (A.size === 0 && B.size === 0) return 1;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

// Dynamic import via tsx path aliases - use relative imports
async function loadData() {
  const [
    { regions },
    { campsites },
    { categories },
    { provinceExtendedContent },
    { districtExtendedContent },
    { categoryContent },
    { campsiteSeoContent },
    data,
    { getProvinceContent, getDistrictContent, getCampsiteFullContent },
    { getCategoryContent },
    { getProvinceFaqItems, getDistrictFaqItems, getCategoryFaqItems },
    { isProvinceIndexable, isDistrictIndexable },
  ] = await Promise.all([
    import("../src/data/iller.json"),
    import("../src/data/campsites/index"),
    import("../src/data/categories"),
    import("../src/lib/content/province-content"),
    import("../src/lib/content/district-content"),
    import("../src/lib/content/category-content"),
    import("../src/lib/content/campsite-content"),
    import("../src/lib/data"),
    import("../src/lib/content/get-page-content"),
    import("../src/lib/content/category-content"),
    import("../src/lib/content/page-faq-content"),
    import("../src/lib/seo/indexability"),
  ]);

  return {
    regions,
    campsites,
    categories,
    provinceExtendedContent,
    districtExtendedContent,
    categoryContent,
    campsiteSeoContent,
    data,
    getProvinceContent,
    getDistrictContent,
    getCampsiteFullContent,
    getCategoryContent,
    getProvinceFaqItems,
    getDistrictFaqItems,
    getCategoryFaqItems,
    isProvinceIndexable,
    isDistrictIndexable,
  };
}

interface PageAnalysis {
  type: "province" | "district" | "category" | "campsite";
  path: string;
  name: string;
  indexable: boolean;
  editorialWords: number;
  totalWords: number;
  usesFallback: boolean;
  templateRatio: number;
  editorialText: string;
  hasListOnlyRisk: boolean;
  missing: string[];
  sections: Record<string, number>;
  risk: "yüksek" | "orta" | "düşük";
  minRecommended: number;
  wordGap: number;
}

function riskLevel(page: Omit<PageAnalysis, "risk" | "minRecommended" | "wordGap">): "yüksek" | "orta" | "düşük" {
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

function minContent(type: PageAnalysis["type"], indexable: boolean): number {
  switch (type) {
    case "province":
      return indexable ? 350 : 200;
    case "district":
      return 300;
    case "category":
      return 400;
    case "campsite":
      return 350;
  }
}

async function main() {
  const ctx = await loadData();
  const pages: PageAnalysis[] = [];

  for (const region of ctx.regions) {
    for (const il of region.provinces) {
      const paragraphs = ctx.getProvinceContent(il.slug, il.description);
      const provinceCampsites = ctx.campsites.filter((c) => c.provinceSlug === il.slug);
      const campsiteCount = provinceCampsites.length;
      const districtCount = il.districts?.length || 0;
      const indexable = ctx.isProvinceIndexable(il.slug);

      const templateParts: string[] = [];
      if (campsiteCount > 0) {
        templateParts.push(
          `${il.name} genelinde ${campsiteCount} kamp alanı listelenmektedir. Detaylı özellikler, harita ve ulaşım bilgileri için ilgili sayfayı ziyaret edin.`
        );
        templateParts.push(
          `${il.name} genelinde listelediğimiz ${campsiteCount} kamp alanı; çadır, karavan, bungalov ve deniz kenarı seçenekleriyle farklı ihtiyaçlara hitap eder. İlçe sayfalarından her bölgenin detaylı rehberine ulaşabilirsiniz.`
        );
      }
      const faq = ctx
        .getProvinceFaqItems(il.slug, il.name, campsiteCount)
        .flatMap((f) => [f.question, f.answer]);
      const editorial = paragraphs.join(" ");
      const fullText = [editorial, ...templateParts, ...faq].join(" ");
      const editorialWords = countWords(editorial);
      const totalWords = countWords(fullText);
      const usesFallback = !ctx.provinceExtendedContent[il.slug]?.paragraphs?.length;

      pages.push({
        type: "province",
        path: `/kamp-alanlari/${il.slug}`,
        name: il.name,
        indexable,
        editorialWords,
        totalWords,
        usesFallback,
        templateRatio:
          countWords(templateParts.join(" ") + faq.join(" ")) / Math.max(totalWords, 1),
        editorialText: editorial,
        hasListOnlyRisk: editorialWords < 120 && campsiteCount > 0,
        missing: usesFallback ? ["JSON fallback açıklama kullanılıyor"] : [],
        sections: {
          editorialParagraphs: paragraphs.length,
          faqItems: 3,
          campsiteList: campsiteCount,
          districtList: districtCount,
        },
        risk: "düşük",
        minRecommended: 0,
        wordGap: 0,
      });

      for (const ilce of il.districts || []) {
        const dParagraphs = ctx.getDistrictContent(il.slug, ilce.slug, ilce.description);
        const dCampsites = ctx.campsites.filter(
          (c) => c.provinceSlug === il.slug && c.districtSlug === ilce.slug
        );
        const dCount = dCampsites.length;
        const dIndexable = ctx.isDistrictIndexable(il.slug, ilce.slug);
        const dTemplate: string[] = [];
        if (dCount > 0) {
          dTemplate.push(
            `${ilce.name} bölgesinde ${dCount} kamp alanı listelenmektedir. Detaylı özellikler, harita ve ulaşım bilgileri için ilgili sayfayı ziyaret edin.`
          );
          dTemplate.push(
            `${ilce.name} genelinde listelediğimiz ${dCount} kamp alanı; çadır, karavan, bungalov ve deniz kenarı seçenekleriyle farklı ihtiyaçlara hitap eder.`
          );
        }
        const dFaq = ctx
          .getDistrictFaqItems(
            `${il.slug}/${ilce.slug}`,
            ilce.name,
            il.name,
            dCount
          )
          .flatMap((f) => [f.question, f.answer]);
        const dEditorial = dParagraphs.join(" ");
        const dFull = [dEditorial, ...dTemplate, ...dFaq].join(" ");
        const dEditorialWords = countWords(dEditorial);
        const dTotalWords = countWords(dFull);
        const dUsesFallback =
          !ctx.districtExtendedContent[`${il.slug}/${ilce.slug}`]?.paragraphs?.length;

        pages.push({
          type: "district",
          path: `/kamp-alanlari/${il.slug}/${ilce.slug}`,
          name: `${ilce.name} (${il.name})`,
          indexable: dIndexable,
          editorialWords: dEditorialWords,
          totalWords: dTotalWords,
          usesFallback: dUsesFallback,
          templateRatio:
            countWords(dTemplate.join(" ") + dFaq.join(" ")) / Math.max(dTotalWords, 1),
          editorialText: dEditorial,
          hasListOnlyRisk: dEditorialWords < 100 && dCount > 0,
          missing: dUsesFallback ? ["JSON fallback açıklama kullanılıyor"] : [],
          sections: {
            editorialParagraphs: dParagraphs.length,
            faqItems: 3,
            campsiteList: dCount,
          },
          risk: "düşük",
          minRecommended: 0,
          wordGap: 0,
        });
      }
    }
  }

  for (const cat of ctx.categories) {
    const content = ctx.getCategoryContent(cat.slug);
    if (!content) continue;
    const catCampsites = ctx.campsites.filter((c) => c.category === cat.slug);
    const editorial = [content.intro, ...content.paragraphs].join(" ");
    const tips = content.tips.join(" ");
    const faq = ctx
      .getCategoryFaqItems(cat.slug, cat.name, catCampsites.length)
      .flatMap((f) => [f.question, f.answer]);
    const full = [editorial, tips, faq.join(" ")].join(" ");
    const editorialWords = countWords(editorial);
    const totalWords = countWords(full);

    pages.push({
      type: "category",
      path: `/kategori/${cat.slug}`,
      name: cat.name,
      indexable: true,
      editorialWords,
      totalWords,
      usesFallback: false,
      templateRatio: countWords(faq.join(" ")) / Math.max(totalWords, 1),
      editorialText: editorial,
      hasListOnlyRisk: editorialWords < 150 && catCampsites.length > 3,
      missing: editorialWords < 250 ? ["kategori rehberi genişletilebilir"] : [],
      sections: {
        editorialParagraphs: content.paragraphs.length + 1,
        tips: content.tips.length,
        faqItems: 3,
        campsiteList: catCampsites.length,
      },
      risk: "düşük",
      minRecommended: 0,
      wordGap: 0,
    });
  }

  for (const c of ctx.campsites) {
    const province = ctx.data.getProvinceBySlug(c.provinceSlug);
    const district = ctx.data.getDistrictBySlug(c.provinceSlug, c.districtSlug);
    const content = ctx.getCampsiteFullContent(
      c,
      province?.name ?? c.provinceSlug,
      district?.name ?? c.districtSlug
    );
    const hasCustomSeo = !!ctx.campsiteSeoContent[c.slug];
    const mainText = content.mainParagraphs.join(" ");
    const extraText = content.extraParagraphs.join(" ");
    const editorial = [
      mainText,
      extraText,
      content.bestSeason ?? "",
      content.transport,
      content.campType ?? "",
      content.suitableFor ?? "",
    ]
      .filter(Boolean)
      .join(" ");
    const full = [
      editorial,
      content.tips.join(" "),
      content.nearbyAttractions.join(" "),
    ].join(" ");
    const editorialWords = countWords(editorial);
    const totalWords = countWords(full);
    const descWords = countWords(c.description);
    const transportWords = countWords(content.transport);

    const missing: string[] = [];
    if (descWords < 100) missing.push("kısa ana açıklama (<100 kelime)");
    if (transportWords < 30) missing.push("yetersiz ulaşım metni");
    if (!hasCustomSeo) missing.push("generic SEO extras (bestSeason/tips/nearby)");
    if (content.mainParagraphs.length < 2) missing.push("tek paragraflık açıklama");

    pages.push({
      type: "campsite",
      path: `/kamp-alanlari/${c.provinceSlug}/${c.districtSlug}/${c.slug}`,
      name: c.name,
      indexable: true,
      editorialWords,
      totalWords,
      usesFallback: !hasCustomSeo,
      templateRatio: hasCustomSeo ? 0.12 : 0.35,
      editorialText: [mainText, extraText].join(" "),
      hasListOnlyRisk: descWords < 80,
      missing,
      sections: {
        mainParagraphs: content.mainParagraphs.length,
        extraParagraphs: content.extraParagraphs.length,
        tips: content.tips.length,
        nearby: content.nearbyAttractions.length,
        transportWords,
        descWords,
      },
      risk: "düşük",
      minRecommended: 0,
      wordGap: 0,
    });
  }

  for (const p of pages) {
    p.risk = riskLevel(p);
    p.minRecommended = minContent(p.type, p.indexable);
    p.wordGap = Math.max(0, p.minRecommended - p.editorialWords);
  }

  const similarPairs: Array<{
    a: string;
    b: string;
    similarity: number;
    type: string;
  }> = [];

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      if (pages[i].type !== pages[j].type) continue;
      const sim = jaccard(pages[i].editorialText, pages[j].editorialText);
      if (sim >= 0.35) {
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
  const under300Total = pages.filter((p) => p.totalWords < 300);
  const under300Editorial = pages.filter((p) => p.editorialWords < 300);
  const highTemplate = pages.filter((p) => p.templateRatio > 0.35);
  const listOnly = pages.filter((p) => p.hasListOnlyRisk);
  const thinGoogle = pages.filter(
    (p) =>
      p.indexable &&
      (p.editorialWords < 250 ||
        p.totalWords < 350 ||
        p.templateRatio > 0.38 ||
        p.hasListOnlyRisk)
  );

  const report = {
    summary: {
      totalPages: pages.length,
      indexablePages: indexablePages.length,
      under300TotalWords: under300Total.length,
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
      byType: {
        province: pages.filter((p) => p.type === "province").length,
        district: pages.filter((p) => p.type === "district").length,
        category: pages.filter((p) => p.type === "category").length,
        campsite: pages.filter((p) => p.type === "campsite").length,
      },
    },
    under300TotalWords: under300Total
      .sort((a, b) => a.totalWords - b.totalWords)
      .map((p) => ({
        path: p.path,
        type: p.type,
        totalWords: p.totalWords,
        editorialWords: p.editorialWords,
        risk: p.risk,
        indexable: p.indexable,
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
        wordGap: p.wordGap,
      })),
    highTemplatePages: highTemplate
      .sort((a, b) => b.templateRatio - a.templateRatio)
      .map((p) => ({
        path: p.path,
        templateRatio: Math.round(p.templateRatio * 100),
        editorialWords: p.editorialWords,
        totalWords: p.totalWords,
        risk: p.risk,
      })),
    similarPairs: similarPairs.sort((a, b) => b.similarity - a.similarity),
    listOnlyPages: listOnly.map((p) => ({
      path: p.path,
      type: p.type,
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
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
