/** Ulaşım metninden km/dk/saat ifadesi çıkarır; yoksa null */
export function extractTransportDistance(text: string): string | null {
  const km =
    text.match(/(\d+)\s*[-–]?\s*km\b/i) ??
    text.match(/(\d+)\.?\s*kilometre/i);
  if (km) return `${km[1]} km`;

  const dk =
    text.match(/(\d+)\s*dk\b/i) ?? text.match(/(\d+)\s*dakika/i);
  if (dk) return `${dk[1]} dk`;

  const saat = text.match(/(\d+)\s*saat/i);
  if (saat) return `${saat[1]} saat`;

  return null;
}

/** Özetleyici paragraf seçimi — mevcut metinden, yeni cümle üretmez */
export function pickHighlightParagraph(paragraphs: string[]): string | null {
  if (paragraphs.length === 0) return null;

  let best = paragraphs[0];
  let bestScore = -1;

  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    let score = 0;
    const len = p.length;
    if (len >= 90 && len <= 280) score += 3;
    else if (len >= 60 && len <= 350) score += 1;
    if (/eşsiz|benzersiz|sadece|unutulmaz|eşsiz/i.test(p)) score += 2;
    if (i === 1) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = p;
    }
  }

  return best;
}
