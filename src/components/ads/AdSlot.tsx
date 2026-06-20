interface AdSlotProps {
  slot?: string;
  className?: string;
}

export function AdSlot({
  slot = "sidebar-primary",
  className = "",
}: AdSlotProps) {
  return (
    <aside
      className={`overflow-hidden rounded-xl border border-forest-100 bg-white shadow-sm ${className}`}
      aria-label="Reklam alanı"
      data-ad-slot={slot}
    >
      <div className="border-b border-forest-100 bg-forest-50 px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wide text-forest-400">
          Reklam
        </span>
      </div>
      <div className="flex min-h-[560px] items-center justify-center bg-gradient-to-b from-cream to-forest-50/60 p-6">
        <div
          className="flex h-full w-full max-w-[300px] flex-col items-center justify-center rounded-lg border border-dashed border-forest-200 bg-white/70 px-4 py-8 text-center"
          data-ad-placeholder
        >
          <p className="text-sm font-medium text-forest-600">Reklam alanı</p>
          <p className="mt-2 text-xs leading-relaxed text-forest-400">
            300 × 600 — dikey banner
          </p>
        </div>
      </div>
    </aside>
  );
}
