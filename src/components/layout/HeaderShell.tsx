"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MobileNavData } from "@/components/layout/header-types";

interface HeaderShellProps {
  logo: ReactNode;
  nav: ReactNode;
  mobileNav: MobileNavData;
}

export function HeaderShell({ logo, nav, mobileNav }: HeaderShellProps) {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/arama?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  }

  return (
    <header className="border-b border-forest-100 bg-cream shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex shrink-0 items-center">{logo}</div>

          <div className="hidden flex-1 justify-center lg:flex">{nav}</div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-2 rounded-full border border-forest-200 bg-white px-3 py-2 text-sm font-medium text-forest-700 shadow-sm transition-colors hover:border-forest-300 hover:bg-forest-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              aria-label="Site içi arama"
              aria-expanded={searchOpen}
              aria-controls="header-search-panel"
            >
              <svg
                className="h-4 w-4"
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
              <span className="hidden sm:inline">Ara</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-forest-700 transition-colors hover:bg-forest-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 lg:hidden"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
              aria-controls="header-mobile-panel"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div
          id="header-search-panel"
          className="border-t border-forest-100 bg-cream-dark px-4 py-3"
        >
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-xl gap-2"
            role="search"
          >
            <label htmlFor="header-search-input" className="sr-only">
              Kamp alanı ara
            </label>
            <input
              id="header-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kamp alanı ara..."
              aria-label="Kamp alanı ara"
              className="flex-1 rounded-lg border border-forest-200 bg-white px-4 py-2 text-forest-800 placeholder:text-forest-400 focus:border-amber-500 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-forest-900 transition-colors hover:bg-amber-400"
            >
              Ara
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <div
          id="header-mobile-panel"
          className="border-t border-forest-100 bg-white px-4 py-4 shadow-inner lg:hidden"
        >
          <nav className="space-y-5" aria-label="Mobil navigasyon">
            <MobileNavSection
              section={mobileNav.equipment}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileNavSection
              section={mobileNav.guides}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileNavSection
              section={mobileNav.categories}
              onNavigate={() => setMobileOpen(false)}
            />
            <div className="rounded-xl border border-forest-100 bg-cream p-4">
              <p className="text-sm font-semibold text-forest-800">
                Kamp Alanları
              </p>
              <Link
                href={mobileNav.hubLink.href}
                className="mb-3 mt-2 inline-block text-sm font-medium text-forest-700 hover:text-amber-700"
                onClick={() => setMobileOpen(false)}
              >
                {mobileNav.hubLink.label} →
              </Link>
              {mobileNav.provinces.map((province) => (
                <div key={province.href} className="mb-3 last:mb-0">
                  <Link
                    href={province.href}
                    className="block font-medium text-forest-800 break-words hover:text-amber-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {province.label}
                  </Link>
                  {province.districts.length > 0 && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-forest-100 pl-3">
                      {province.districts.map((district) => (
                        <li key={district.href}>
                          <Link
                            href={district.href}
                            className="text-sm text-forest-600 break-words hover:text-forest-800"
                            onClick={() => setMobileOpen(false)}
                          >
                            {district.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavSection({
  section,
  onNavigate,
}: {
  section: MobileNavData["equipment"];
  onNavigate: () => void;
}) {
  return (
    <div className="rounded-xl border border-forest-100 bg-cream p-4">
      <p className="text-sm font-semibold text-forest-800">{section.title}</p>
      <ul className="mt-2 space-y-1">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center gap-2 text-sm text-forest-600 hover:text-forest-800"
              onClick={onNavigate}
            >
              {link.icon && <span aria-hidden="true">{link.icon}</span>}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
