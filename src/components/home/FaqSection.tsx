import { Accordion } from "@/components/ui/Accordion";
import { homepageFaqItems } from "@/lib/content/faq-content";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto">
      <h2
        id="faq-heading"
        className="mb-8 text-center font-display text-2xl font-bold text-forest-800 lg:text-3xl"
      >
        Sıkça Sorulan Sorular
      </h2>
      <Accordion items={homepageFaqItems} />
    </section>
  );
}
