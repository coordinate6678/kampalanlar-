"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeNoop() {
  return () => {};
}

export function TopAdBanner() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const delay = prefersReduced ? 0 : 700;

    const timer = window.setTimeout(() => setOpen(true), delay);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-[60] flex flex-col items-center">
      <div
        id="top-ad-panel"
        className={`pointer-events-auto w-full overflow-hidden shadow-lg transition-[max-height,opacity] ease-out ${
          mounted && open
            ? "max-h-[114px] opacity-100 duration-1000"
            : "max-h-0 opacity-0 duration-500"
        }`}
      >
        <div
          className="bg-gradient-to-r from-earth-600 via-earth-500 to-earth-600 px-4 py-3"
          data-ad-slot="top-leaderboard"
        >
          <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-center rounded-lg border border-cream/20 bg-black/10">
            <div className="text-center" data-ad-placeholder>
              <p className="text-sm font-semibold text-cream">Reklam alanı</p>
              <p className="mt-1 text-xs text-cream/70">970 × 90 — üst banner</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="pointer-events-auto relative z-[70] flex h-7 w-14 items-center justify-center rounded-b-xl border border-t-0 border-forest-100 bg-white shadow-md transition-colors hover:bg-cream"
        aria-expanded={open}
        aria-controls="top-ad-panel"
        aria-label={open ? "Reklam alanını kapat" : "Reklam alanını aç"}
      >
        <svg
          className={`h-4 w-4 text-forest-700 transition-transform duration-500 ${
            open ? "rotate-0" : "rotate-180"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
