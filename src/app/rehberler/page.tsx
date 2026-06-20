import type { Metadata } from "next";
import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  guides,
  GUIDE_CATEGORY_LABELS,
  type GuideCategory,
} from "@/data/guides";
import { getGuideContent } from "@/lib/content/guides";
import { guideIndexContent } from "@/lib/content/guides/index-content";
import { PLACE } from "@/data/media/place-images";
import { buildMetadata, metaDescription } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildItemListJsonLd,
} from "@/lib/seo/json-ld";
import { canonicalUrl } from "@/lib/seo";
import { headers } from "next/headers";

export const metadata: Metadata = buildMetadata({
  title: "Kamp Rehberleri",
  description: metaDescription(
    `${guideIndexContent.intro} Ücretsiz kamp alanları, İstanbul yakını rotalar, ekipman ve güvenlik rehberleri.`
  ),
  path: "/rehberler",
  image: PLACE.kabakBeach,
});

const categoryOrder: GuideCategory[] = [
  "kamp-alanlari",
  "baslangic",
  "ekipman",
  "guvenlik",
];

export default async function GuidesIndexPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Rehberler" },
  ];

  const guideListItems = guides.map((guide) => ({
    name: guide.title,
    url: canonicalUrl(`/rehberler/${guide.slug}`),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, "/rehberler"),
          buildCollectionPageJsonLd({
            name: "Kamp Rehberleri",
            description: guideIndexContent.intro,
            path: "/rehberler",
          }),
          buildItemListJsonLd(guideListItems, "Kamp Rehberleri"),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <ContentGrid
        main={
          <>
            <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
              <PlaceImage
                src={PLACE.kabakBeach}
                alt="Kabak Koyu — kamp rehberleri"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-3xl" aria-hidden="true">
                  📚
                </span>
                <h1 className="mt-2 font-display text-3xl font-bold text-cream lg:text-4xl">
                  Kamp Rehberleri
                </h1>
                <p className="mt-1 text-forest-200">
                  {guides.length} rehber — planlama, ekipman ve rota önerileri
                </p>
              </div>
            </div>

            <section className="prose-seo">
              <p className="text-lg font-medium text-forest-800">
                {guideIndexContent.intro}
              </p>
              {guideIndexContent.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>

            {categoryOrder.map((category) => {
              const categoryGuides = guides.filter(
                (g) => g.category === category
              );
              if (categoryGuides.length === 0) return null;

              return (
                <section
                  key={category}
                  className="mt-10"
                  aria-labelledby={`guide-cat-${category}`}
                >
                  <h2
                    id={`guide-cat-${category}`}
                    className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block"
                  >
                    {GUIDE_CATEGORY_LABELS[category]}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {categoryGuides.map((guide) => {
                      const content = getGuideContent(guide.slug);
                      return (
                        <Link
                          key={guide.slug}
                          href={`/rehberler/${guide.slug}`}
                          className="group flex gap-4 overflow-hidden rounded-xl border border-forest-100 bg-white p-4 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
                        >
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                            {content && (
                              <PlaceImage
                                src={content.image}
                                alt={guide.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="80px"
                              />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span aria-hidden="true">{guide.icon}</span>
                              <h3 className="font-semibold text-forest-800 group-hover:text-amber-700 transition-colors line-clamp-2">
                                {guide.title}
                              </h3>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                              {guide.description}
                            </p>
                            <span className="mt-2 inline-block text-sm font-medium text-forest-600 group-hover:text-amber-600">
                              Rehberi oku →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            <section className="mt-10 rounded-xl bg-forest-50 border border-forest-100 p-6">
              <h2 className="font-display text-xl font-bold text-forest-800">
                Kamp alanı arıyor musunuz?
              </h2>
              <p className="mt-2 text-gray-600">
                Rehberlerimizi okuduktan sonra il ve ilçe bazında kamp
                alanlarını keşfedin.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/kamp-alanlari"
                  className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-medium text-cream hover:bg-forest-600 transition-colors"
                >
                  Kamp Alanları
                </Link>
                <Link
                  href="/kamp-ekipmanlari"
                  className="rounded-lg border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 transition-colors"
                >
                  Kamp Ekipmanları
                </Link>
              </div>
            </section>
          </>
        }
        sidebar={<SearchWidget />}
      />
    </div>
  );
}
