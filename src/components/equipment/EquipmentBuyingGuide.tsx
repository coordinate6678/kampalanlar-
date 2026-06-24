interface EquipmentBuyingGuideProps {
  text: string;
}

export function EquipmentBuyingGuide({ text }: EquipmentBuyingGuideProps) {
  return (
    <section
      className="my-10 rounded-2xl border border-amber-100 bg-amber-50/70 px-6 py-8 sm:px-8"
      aria-labelledby="equipment-buying-guide-heading"
    >
      <h2
        id="equipment-buying-guide-heading"
        className="text-center font-display text-2xl font-bold italic text-forest-800"
      >
        Satın Alma Rehberi
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-forest-700">
        {text}
      </p>
    </section>
  );
}
