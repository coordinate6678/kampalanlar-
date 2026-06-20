import type { Metadata } from "next";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { searchCampsites } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return buildMetadata({
    title: query ? `"${query}" Arama Sonuçları` : "Kamp Alanı Ara",
    description: query
      ? `"${query}" araması için kamp alanı sonuçları. Türkiye genelinde çadır, karavan ve bungalov kamp seçenekleri.`
      : "Türkiye'deki kamp alanlarında arama yapın. İl, ilçe veya kamp alanı adıyla arayın.",
    path: query ? `/arama?q=${encodeURIComponent(query)}` : "/arama",
    noindex: true,
  });
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query ? searchCampsites(query) : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <h1 className="font-display text-3xl font-bold text-forest-800">
        Kamp Alanı Ara
      </h1>

      <div className="mt-8">
        <ContentGrid
          main={
            <>
              {query && (
                <p className="mb-6 text-gray-600">
                  &quot;{query}&quot; için {results.length} sonuç bulundu
                </p>
              )}

              {!query && (
                <p className="text-gray-600">
                  Aramak istediğiniz kamp alanının adını yazın.
                </p>
              )}

              {query && results.length === 0 && (
                <div className="rounded-xl bg-forest-50 p-8 text-center border border-forest-100">
                  <p className="text-lg text-forest-700">
                    Aramanızla eşleşen kamp alanı bulunamadı.
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {results.map((campsite) => (
                  <CampsiteCard
                    key={`${campsite.provinceSlug}-${campsite.districtSlug}-${campsite.slug}`}
                    campsite={campsite}
                  />
                ))}
              </div>
            </>
          }
          sidebar={<SearchWidget />}
        />
      </div>
    </div>
  );
}
