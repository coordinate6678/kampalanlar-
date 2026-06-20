"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MobileNavData } from "@/components/layout/header-types";

interface HeaderShellProps {
  mobileNav: MobileNavData;
  children: ReactNode;
}

export function HeaderShell({ mobileNav, children }: HeaderShellProps) {
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
    <header className="bg-forest-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-2">{children}</div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-lg p-2 text-cream hover:bg-forest-700 transition-colors"
              aria-label="Site içi arama"
              aria-expanded={searchOpen}
              aria-controls="header-search-panel"
            >
              <svg
                className="h-5 w-5"
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
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-cream hover:bg-forest-700 transition-colors lg:hidden"
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
          className="border-t border-forest-700 bg-forest-900 px-4 py-3"
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
              className="flex-1 rounded-lg border border-forest-600 bg-forest-800 px-4 py-2 text-cream placeholder-forest-400 focus:border-amber-500 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-forest-900 hover:bg-amber-400"
            >
              Ara
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <div
          id="header-mobile-panel"
          className="border-t border-forest-700 bg-forest-900 px-4 py-4 lg:hidden"
        >
          <nav className="space-y-4" aria-label="Mobil navigasyon">
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
            <div>
              <p className="text-sm font-semibold text-amber-400 pt-2">
                Kamp Alanları
              </p>
              <Link
                href={mobileNav.hubLink.href}
                className="mb-3 mt-2 inline-block text-sm font-medium text-cream"
                onClick={() => setMobileOpen(false)}
              >
                {mobileNav.hubLink.label} →
              </Link>
              {mobileNav.provinces.map((province) => (
                <div key={province.href} className="mb-3">
                  <Link
                    href={province.href}
                    className="block font-medium text-cream break-words"
                    onClick={() => setMobileOpen(false)}
                  >
                    {province.label}
                  </Link>
                  {province.districts.length > 0 && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {province.districts.map((district) => (
                        <li key={district.href}>
                          <Link
                            href={district.href}
                            className="text-sm text-forest-300 break-words"
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
    <div>
      <p className="text-sm font-semibold text-amber-400">{section.title}</p>
      <ul className="mt-2 space-y-1">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center gap-2 text-sm text-forest-300"
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
