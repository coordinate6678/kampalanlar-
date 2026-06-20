export function splitDescription(text: string): string[] {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim());
  if (paragraphs.length > 1) return paragraphs;
  return [text];
}
