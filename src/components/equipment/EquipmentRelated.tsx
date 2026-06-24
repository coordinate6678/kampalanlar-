import Link from "next/link";
import type { EquipmentRelatedItem } from "@/lib/utils/equipment-page";

interface EquipmentRelatedProps {
  items: EquipmentRelatedItem[];
}

export function EquipmentRelated({ items }: EquipmentRelatedProps) {
  if (items.length === 0) return null;

  return (
    <section
      className="mt-12 border-t border-forest-100 pt-10"
      aria-labelledby="equipment-related-heading"
    >
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-forest-100" aria-hidden="true" />
        <h2
          id="equipment-related-heading"
          className="shrink-0 text-xs font-bold uppercase tracking-wider text-forest-500"
        >
          Diğer Donanımları Keşfet
        </h2>
        <div className="h-px flex-1 bg-forest-100" aria-hidden="true" />
      </div>

      <div
        className={`grid gap-4 ${
          items.length === 1
            ? "sm:grid-cols-1"
            : items.length === 2
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col items-center rounded-xl border border-forest-100 bg-white px-4 py-6 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-forest-50 text-3xl transition-colors group-hover:bg-amber-50"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-forest-800 transition-colors group-hover:text-amber-700">
              {item.label}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
