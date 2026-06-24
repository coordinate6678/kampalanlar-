import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd } from "@/lib/seo/json-ld";
import type { FaqItem } from "@/lib/types";

interface PageFaqSectionProps {
  items: FaqItem[];
  heading?: string;
  className?: string;
  centered?: boolean;
}

export function PageFaqSection({
  items,
  heading = "Sık Sorulan Sorular",
  className = "mt-10",
  centered = false,
}: PageFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className={className} aria-labelledby="page-faq-heading">
      <JsonLd data={buildFaqJsonLd(items)} />
      <h2
        id="page-faq-heading"
        className={`mb-4 font-display font-bold text-forest-800 ${
          centered
            ? "mb-8 text-center text-2xl lg:text-3xl"
            : "text-xl"
        }`}
      >
        {heading}
      </h2>
      <Accordion items={items} />
    </section>
  );
}
