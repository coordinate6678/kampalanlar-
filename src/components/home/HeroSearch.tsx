"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/arama?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="mx-auto mt-8 flex max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg"
    >
      <label htmlFor="hero-search-input" className="sr-only">
        Şehir, ilçe veya kamp alanı ara
      </label>
      <div className="flex flex-1 items-center gap-3 px-4">
        <svg
          className="h-5 w-5 shrink-0 text-forest-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          id="hero-search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bir şehir veya kamp alanı ara..."
          aria-label="Şehir, ilçe veya kamp alanı ara"
          className="w-full border-0 bg-transparent py-4 text-forest-800 placeholder:text-forest-400 focus:outline-none focus:ring-0"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 bg-amber-500 px-6 py-4 font-semibold text-forest-900 transition-colors hover:bg-amber-400"
      >
        Keşfet
      </button>
    </form>
  );
}
