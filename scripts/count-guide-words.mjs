import { getGuideContent } from "../src/lib/content/guides/index.ts";
import { guides } from "../src/data/guides.ts";

function countWords(content) {
  const parts = [];
  if (content.intro) parts.push(content.intro);
  for (const s of content.sections || []) {
    parts.push(s.heading);
    parts.push(...(s.paragraphs || []));
    if (s.checklist) parts.push(...s.checklist);
    for (const sub of s.subsections || []) {
      parts.push(sub.heading);
      parts.push(...(sub.paragraphs || []));
    }
  }
  return parts
    .join(" ")
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

const newSlugs = new Set([
  "kamp-atesi-rehberi",
  "kampta-yemek-pisirme-rehberi",
  "sirt-cantasiyla-kamp-rehberi",
  "aile-ile-kamp-rehberi",
]);

let failed = 0;
for (const g of guides) {
  const c = getGuideContent(g.slug);
  const w = countWords(c);
  const target = newSlugs.has(g.slug) ? 1200 : 1500;
  const ok = w >= target;
  if (!ok) failed++;
  console.log(`${g.slug}: ${w} (target ${target}) ${ok ? "OK" : "FAIL"}`);
}
process.exit(failed > 0 ? 1 : 0);
