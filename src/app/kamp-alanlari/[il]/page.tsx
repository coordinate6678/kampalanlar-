import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DistrictCard } from "@/components/cards/DistrictCard";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getProvinceBySlug,
  getDistrictsByProvince,
  getCampsitesByProvince,
  getCampsiteCountByProvince,
  getProvinceStaticParams,
} from "@/lib/data";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { ProvinceDistrictLinks } from "@/components/content/RelatedLinks";
import { getProvinceFaqItems } from "@/lib/content/page-faq-content";
import {
  buildProvincePageDescription,
  buildProvincePageTitle,
} from "@/lib/seo/page-metadata";
import { buildMetadata, canonicalUrl } from "@/lib/seo";
import { getProvinceContent } from "@/lib/content/get-page-content";
import { isDistrictIndexable, isProvinceIndexable } from "@/lib/seo/indexability";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildItemListJsonLd,
} from "@/lib/seo/json-ld";
import { VideoSection } from "@/components/media/VideoSection";
import { getVideoForProvince } from "@/data/media/videos";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ il: string }>;
}

export async function generateStaticParams() {
  return getProvinceStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { il } = await params;
  const province = getProvinceBySlug(il);
  if (!province) return {};

  const districts = getDistrictsByProvince(il);
  const campsiteCount = getCampsiteCountByProvince(il);
  const paragraphs = getProvinceContent(il, province.description);
  const indexable = isProvinceIndexable(il);

  return buildMetadata({
    title: buildProvincePageTitle(province.name),
    description: buildProvincePageDescription(
      province.name,
      paragraphs[0],
      campsiteCount,
      districts.length
    ),
    path: `/kamp-alanlari/${il}`,
    noindex: !indexable,
  });
}

export default async function ProvincePage({ params }: PageProps) {
  const { il } = await params;
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const province = getProvinceBySlug(il);

  if (!province) {
    notFound();
  }

  const districts = getDistrictsByProvince(il);
  const provinceCampsites = getCampsitesByProvince(il);
  const campsiteCount = getCampsiteCountByProvince(il);
  const provinceParagraphs = getProvinceContent(il, province.description);
  const provinceVideo = getVideoForProvince(il);

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: province.name },
  ];

  const districtListItems = districts
    .filter((district) => isDistrictIndexable(il, district.slug))
    .map((district) => ({
    name: getKampAlaniLinkText(district.name),
    url: canonicalUrl(`/kamp-alanlari/${il}/${district.slug}`),
  }));

  const mapUrl = `https://maps.google.com/maps?q=${province.coordinates.lat},${province.coordinates.lng}&z=8&output=embed`;

  const provincePath = `/kamp-alanlari/${il}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, provincePath),
          buildCollectionPageJsonLd({
            name: getKampAlaniLinkText(province.name),
            description: provinceParagraphs[0] ?? province.description,
            path: provincePath,
          }),
          ...(districtListItems.length > 0
            ? [
                buildItemListJsonLd(
                  districtListItems,
                  getKampAlaniLinkText(province.name)
                ),
              ]
            : []),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <ContentGrid
        main={
          <>
          <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
            <PlaceImage
              src={province.image}
              alt={getKampAlaniLinkText(province.name)}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h1 className="font-display text-3xl font-bold text-white lg:text-4xl">
                {getKampAlaniLinkText(province.name)}
              </h1>
              <p className="mt-1 text-forest-200">
                {districts.length} ilçe · {campsiteCount} kamp alanı
              </p>
            </div>
          </div>

          {provinceCampsites.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                {province.name} Kamp Alanları Listesi
              </h2>
              <p className="mb-4 text-gray-600">
                {province.name} genelinde {provinceCampsites.length} kamp alanı
                listelenmektedir. Detaylı özellikler, harita ve ulaşım bilgileri
                için ilgili sayfayı ziyaret edin.
              </p>
              <div className="space-y-4">
                {provinceCampsites.map((campsite) => (
                  <CampsiteCard key={campsite.slug} campsite={campsite} />
                ))}
              </div>
            </section>
          )}

          {districts.length > 0 ? (
            <>
              <ProvinceDistrictLinks
                provinceSlug={il}
                provinceName={province.name}
                districts={districts
                  .filter((d) => isDistrictIndexable(il, d.slug))
                  .map((d) => ({ slug: d.slug, name: d.name }))}
              />
            <section className="mb-10">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                {province.name} İlçeleri
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {districts.map((district) => (
                  <DistrictCard
                    key={district.slug}
                    district={district}
                    provinceSlug={il}
                  />
                ))}
              </div>
            </section>
            </>
          ) : (
            <div className="mb-10 rounded-xl bg-amber-50 border border-amber-200 p-6">
              <p className="text-amber-800">
                {province.name} için ilçe rehberi yakında eklenecek. Bölge
                hakkında genel bilgiyi aşağıda bulabilirsiniz.
              </p>
            </div>
          )}

          {provinceVideo && (
            <VideoSection
              video={provinceVideo}
              heading={`${province.name} Bölge Videosu`}
              className="mb-10"
            />
          )}

          <section className="prose-seo">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              {province.name} Kamp Rehberi
            </h2>
            {provinceParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {campsiteCount > 0 && (
              <p>
                {province.name} genelinde listelediğimiz {campsiteCount} kamp
                alanı; çadır, karavan, bungalov ve deniz kenarı seçenekleriyle
                farklı ihtiyaçlara hitap eder. İlçe sayfalarından her bölgenin
                detaylı rehberine ulaşabilirsiniz.
              </p>
            )}
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              {province.name} Haritası
            </h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-forest-100">
              <iframe
                src={mapUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                title={`${province.name} kamp alanları haritası`}
                allowFullScreen
              />
            </div>
          </section>

          <PageFaqSection
            nonce={nonce}
            items={getProvinceFaqItems(il, province.name, campsiteCount)}
          />
          </>
        }
        sidebar={<SearchWidget />}
      />
    </div>
  );
}
