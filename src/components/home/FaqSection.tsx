import { Accordion } from "@/components/ui/Accordion";
import { homepageFaqItems } from "@/lib/content/faq-content";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block"
      >
        Sık Sorulan Sorular
      </h2>
      <Accordion items={homepageFaqItems} />
    </section>
  );
}
