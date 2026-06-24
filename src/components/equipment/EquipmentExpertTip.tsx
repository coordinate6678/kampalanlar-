interface EquipmentExpertTipProps {
  tip: string;
}

export function EquipmentExpertTip({ tip }: EquipmentExpertTipProps) {
  return (
    <aside
      className="my-10 rounded-xl bg-forest-800 px-6 py-5"
      aria-label="Uzman ipucu"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
        Uzman İpucu
      </p>
      <p className="mt-3 text-sm leading-relaxed text-cream sm:text-base">
        {tip}
      </p>
    </aside>
  );
}
