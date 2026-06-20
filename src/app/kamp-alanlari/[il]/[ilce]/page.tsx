import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { NeighborDistricts } from "@/components/district/NeighborDistricts";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getProvinceBySlug,
  getDistrictBySlug,
  getCampsitesByDistrict,
  getCampsiteCountByDistrict,
  getNeighborDistricts,
  getDistrictStaticParams,
} from "@/lib/data";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { getDistrictFaqItems } from "@/lib/content/page-faq-content";
import {
  buildDistrictPageDescription,
  buildDistrictPageTitle,
} from "@/lib/seo/page-metadata";
import { buildMetadata, canonicalUrl } from "@/lib/seo";
import { getDistrictContent } from "@/lib/content/get-page-content";
import { isDistrictIndexable } from "@/lib/seo/indexability";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildItemListJsonLd,
} from "@/lib/seo/json-ld";
import { VideoSection } from "@/components/media/VideoSection";
import { getVideoForDistrict } from "@/data/media/videos";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ il: string; ilce: string }>;
}

export async function generateStaticParams() {
  return getDistrictStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { il, ilce } = await params;
  const province = getProvinceBySlug(il);
  const district = getDistrictBySlug(il, ilce);

  if (!province || !district) return {};

  const campsiteCount = getCampsiteCountByDistrict(il, ilce);
  const paragraphs = getDistrictContent(il, ilce, district.description);
  const indexable = isDistrictIndexable(il, ilce);

  return buildMetadata({
    title: buildDistrictPageTitle(district.name, province.name),
    description: buildDistrictPageDescription(
      district.name,
      province.name,
      paragraphs[0],
      campsiteCount
    ),
    path: `/kamp-alanlari/${il}/${ilce}`,
    noindex: !indexable,
  });
}

export default async function DistrictPage({ params }: PageProps) {
  const { il, ilce } = await params;
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const province = getProvinceBySlug(il);
  const district = getDistrictBySlug(il, ilce);

  if (!province || !district) {
    notFound();
  }

  const campsites = getCampsitesByDistrict(il, ilce);
  const neighbors = getNeighborDistricts(district);
  const isEmpty = campsites.length === 0;
  const districtParagraphs = getDistrictContent(il, ilce, district.description);
  const districtVideo = getVideoForDistrict(il, ilce, district.name);

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: province.name, href: `/kamp-alanlari/${il}` },
    { label: district.name },
  ];

  const campsiteListItems = campsites.map((campsite) => ({
    name: campsite.name,
    url: canonicalUrl(
      `/kamp-alanlari/${il}/${ilce}/${campsite.slug}`
    ),
  }));

  const mapUrl = `https://maps.google.com/maps?q=${district.coordinates.lat},${district.coordinates.lng}&z=11&output=embed`;

  const districtPath = `/kamp-alanlari/${il}/${ilce}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, districtPath),
          buildCollectionPageJsonLd({
            name: getKampAlaniLinkText(district.name),
            description: districtParagraphs[0] ?? district.description,
            path: districtPath,
          }),
          ...(campsiteListItems.length > 0
            ? [
                buildItemListJsonLd(
                  campsiteListItems,
                  getKampAlaniLinkText(district.name)
                ),
              ]
            : []),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
        <PlaceImage
          src={district.image}
          alt={`${district.name} kamp alanları`}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-sm text-forest-200">{province.name}</p>
          <p className="font-display text-2xl font-bold text-cream" aria-hidden="true">
            {district.name}
          </p>
        </div>
      </div>

      <ContentGrid
        main={
          <>
          <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
            {getKampAlaniLinkText(district.name)}
          </h1>
          <p className="mt-2 text-gray-600">
            {province.name} / {district.name} · {campsites.length} kamp alanı
          </p>

          {isEmpty ? (
            <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
              <h2 className="font-semibold text-amber-800 text-lg">
                Bu bölgede yakında kamp alanları eklenecek
              </h2>
              <p className="mt-2 text-amber-700">
                {district.name} bölgesi için kamp alanı verilerimizi
                güncelliyoruz. Aşağıda bölge hakkında bilgi bulabilirsiniz.
              </p>
            </div>
          ) : (
            <section className="mt-8" aria-labelledby="campsite-list-heading">
              <h2
                id="campsite-list-heading"
                className="mb-4 font-display text-xl font-bold text-forest-800"
              >
                {district.name} Kamp Alanları Listesi
              </h2>
              <div className="space-y-4">
                {campsites.map((campsite) => (
                  <CampsiteCard
                    key={`${campsite.provinceSlug}-${campsite.districtSlug}-${campsite.slug}`}
                    campsite={campsite}
                  />
                ))}
              </div>
            </section>
          )}

          {districtVideo && (
            <VideoSection
              video={{
                ...districtVideo,
                title: `${district.name} — ${districtVideo.title}`,
              }}
              heading={`${district.name} Bölge Görüntüleri`}
              className="mt-10"
            />
          )}

          <section className="mt-10 prose-seo">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              {district.name} Kamp Rehberi
            </h2>
            {districtParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {!isEmpty && (
              <p>
                {district.name} bölgesinde toplam {campsites.length} kamp alanı
                listelenmektedir. Her bir tesisin detaylı özellikleri, ulaşım
                bilgileri ve kullanıcı puanlarını ilgili sayfalardan
                inceleyebilirsiniz.
              </p>
            )}
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              {district.name} Haritası
            </h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-forest-100">
              <iframe
                src={mapUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                title={`${district.name} kamp alanları haritası`}
                allowFullScreen
              />
            </div>
          </section>

          <NeighborDistricts neighbors={neighbors} provinceSlug={il} />

          <PageFaqSection
            nonce={nonce}
            items={getDistrictFaqItems(
              `${il}/${ilce}`,
              district.name,
              province.name,
              campsites.length
            )}
          />
          </>
        }
        sidebar={<SearchWidget />}
      />
    </div>
  );
}
