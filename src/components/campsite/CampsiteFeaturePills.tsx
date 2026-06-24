import type { CampsiteFeature } from "@/lib/types";

interface CampsiteFeaturePillsProps {
  features: CampsiteFeature[];
}

export function CampsiteFeaturePills({ features }: CampsiteFeaturePillsProps) {
  if (features.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {features.map((feature) => (
        <span
          key={feature.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-cream px-3 py-1.5 text-sm font-medium text-forest-700"
        >
          <span aria-hidden="true">{feature.icon}</span>
          {feature.label}
        </span>
      ))}
    </div>
  );
}
