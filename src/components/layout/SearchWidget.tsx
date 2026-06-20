"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchWidget() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/arama?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-forest-100">
      <h3 className="mb-3 flex items-center gap-2 font-semibold text-forest-800">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Site içi arama
      </h3>
      <form onSubmit={handleSubmit} className="flex gap-2" role="search">
        <label htmlFor="sidebar-search-input" className="sr-only">
          Site içi arama
        </label>
        <input
          id="sidebar-search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ara..."
          aria-label="Site içi arama"
          className="flex-1 rounded-lg border border-forest-200 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-medium text-cream hover:bg-forest-600 transition-colors"
        >
          Ara
        </button>
      </form>
    </div>
  );
}
