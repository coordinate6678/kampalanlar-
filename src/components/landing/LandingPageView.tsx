import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import type { LandingPageDefinition } from "@/data/landing-pages";
import type { LandingPageContent } from "@/lib/landing-pages/content";
import { buildMetadata, metaDescription } from "@/lib/seo";
import { canonicalUrl } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildItemListJsonLd,
} from "@/lib/seo/json-ld";
import type { Campsite } from "@/lib/types";

interface LandingPageViewProps {
  def: LandingPageDefinition;
  content: LandingPageContent;
  campsites: Campsite[];
  nonce?: string;
}

export function buildLandingPageMetadata(
  def: LandingPageDefinition,
  _content: LandingPageContent,
  count: number
) {
  return buildMetadata({
    title: def.title,
    description: metaDescription(`${def.metaDescription} ${count} tesis listeleniyor.`),
    path: `/${def.slug}`,
    canonicalOverride: def.canonicalPath,
    skipOgImage: true,
  });
}

export function LandingPageView({
  def,
  content,
  campsites,
  nonce,
}: LandingPageViewProps) {
  const path = `/${def.slug}`;
  const schemaPath = def.canonicalPath ?? path;
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kamp Alanları", href: "/kamp-alanlari" },
    { label: def.h1 },
  ];

  const campsiteListItems = campsites.map((campsite) => ({
    name: campsite.name,
    url: canonicalUrl(
      `/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}/${campsite.slug}`
    ),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, path),
          buildCollectionPageJsonLd({
            name: def.h1,
            description: content.intro,
            path: schemaPath,
          }),
          buildItemListJsonLd(campsiteListItems, def.h1),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <ContentGrid
        main={
          <>
            <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
              <PlaceImage
                src={content.image}
                alt={def.h1}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-3xl" aria-hidden="true">
                  {def.icon}
                </span>
                <h1 className="mt-2 font-display text-3xl font-bold text-cream lg:text-4xl">
                  {def.h1}
                </h1>
                <p className="mt-1 text-forest-200">
                  {campsites.length} tesis — veritabanından canlı liste
                </p>
              </div>
            </div>

            <section className="prose-seo">
              <p className="text-lg font-medium text-forest-800">{content.intro}</p>
              {content.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>

            <section className="mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                Planlama İpuçları
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {content.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="landing-campsites-heading">
              <h2
                id="landing-campsites-heading"
                className="mb-4 font-display text-xl font-bold text-forest-800"
              >
                {def.h1} — Tesis Listesi
              </h2>
              <p className="mb-6 text-gray-600">
                Aşağıdaki {campsites.length} kamp noktası veritabanımızdaki gerçek
                tesis kayıtlarından oluşur. Detay, ulaşım ve harita için tesis
                sayfasına gidin.
              </p>
              <div className="space-y-4">
                {campsites.map((campsite) => (
                  <CampsiteCard key={campsite.slug} campsite={campsite} />
                ))}
              </div>
            </section>

            <section className="mt-10 rounded-xl bg-forest-50 border border-forest-100 p-6">
              <h2 className="font-display text-lg font-bold text-forest-800">
                Daha fazla keşfet
              </h2>
              <p className="mt-2 text-gray-600">
                İl ve ilçe bazında kamp rehberlerimizi veya kategori sayfalarını
                inceleyebilirsiniz.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/kamp-alanlari"
                  className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-medium text-cream hover:bg-forest-600 transition-colors"
                >
                  Tüm kamp alanları
                </Link>
                <Link
                  href="/rehberler"
                  className="rounded-lg border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 transition-colors"
                >
                  Kamp rehberleri
                </Link>
              </div>
            </section>

            <PageFaqSection items={content.faq} nonce={nonce} />
          </>
        }
        sidebar={<SearchWidget />}
      />
    </div>
  );
}
