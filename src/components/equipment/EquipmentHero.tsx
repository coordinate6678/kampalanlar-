interface EquipmentHeroProps {
  name: string;
  purpose: string;
  featureTags?: string[];
}

export function EquipmentHero({
  name,
  purpose,
  featureTags = [],
}: EquipmentHeroProps) {
  return (
    <header className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
          Ekipman Rehberi
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-forest-800 lg:text-4xl">
          {name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-forest-600">
          {purpose}
        </p>
      </div>

      {featureTags.length > 0 && (
        <ul className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
          {featureTags.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-forest-200 bg-white px-3 py-1.5 text-sm text-forest-700"
            >
              {feature}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
