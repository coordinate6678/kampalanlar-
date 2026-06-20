import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd } from "@/lib/seo/json-ld";
import type { FaqItem } from "@/lib/types";

interface PageFaqSectionProps {
  items: FaqItem[];
  heading?: string;
  className?: string;
  nonce?: string;
}

export function PageFaqSection({
  items,
  heading = "Sık Sorulan Sorular",
  className = "mt-10",
  nonce,
}: PageFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className={className} aria-labelledby="page-faq-heading">
      <JsonLd data={buildFaqJsonLd(items)} nonce={nonce} />
      <h2
        id="page-faq-heading"
        className="mb-4 font-display text-xl font-bold text-forest-800"
      >
        {heading}
      </h2>
      <Accordion items={items} />
    </section>
  );
}
