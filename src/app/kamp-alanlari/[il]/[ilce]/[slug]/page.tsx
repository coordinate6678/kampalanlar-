import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { NearbyCampsites } from "@/components/campsite/NearbyCampsites";
import { CampsiteGallery } from "@/components/campsite/CampsiteGallery";
import { CampsiteQuickInfo } from "@/components/campsite/CampsiteQuickInfo";
import { CampsiteShareButton } from "@/components/campsite/CampsiteShareButton";
import { CampsiteFeaturePills } from "@/components/campsite/CampsiteFeaturePills";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getProvinceBySlug,
  getDistrictBySlug,
  getCampsiteBySlug,
  getNearbyCampsites,
  getCampsiteStaticParams,
} from "@/lib/data";
import { CampsiteRelatedLinks } from "@/components/content/RelatedLinks";
import { PageUpdatedBar } from "@/components/content/PageUpdatedBar";
import { getCampsiteUpdatedAt } from "@/lib/campsite-utils";
import {
  buildCampsitePageDescription,
  buildCampsitePageTitle,
} from "@/lib/seo/page-metadata";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { getCampsiteFullContent } from "@/lib/content/get-page-content";
import { VideoSection } from "@/components/media/VideoSection";
import { getVideoForCampsite } from "@/data/media/videos";
import {
  buildBreadcrumbJsonLd,
  buildCampsiteJsonLd,
  buildVideoJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo/json-ld";
import {
  extractTransportDistance,
  pickHighlightParagraph,
} from "@/lib/utils/campsite-page";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ il: string; ilce: string; slug: string }>;
}

export async function generateStaticParams() {
  return getCampsiteStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { il, ilce, slug } = await params;
  const campsite = getCampsiteBySlug(il, ilce, slug);
  const district = getDistrictBySlug(il, ilce);

  if (!campsite) return {};

  return buildMetadata({
    title: buildCampsitePageTitle(campsite.name, district?.name ?? ""),
    description: buildCampsitePageDescription(
      campsite.name,
      district?.name ?? "",
      getProvinceBySlug(il)?.name ?? "",
      campsite.shortDescription
    ),
    path: `/kamp-alanlari/${il}/${ilce}/${slug}`,
    skipOgImage: true,
  });
}

export default async function CampsiteDetailPage({ params }: PageProps) {
  const { il, ilce, slug } = await params;
  const province = getProvinceBySlug(il);
  const district = getDistrictBySlug(il, ilce);
  const campsite = getCampsiteBySlug(il, ilce, slug);

  if (!province || !district || !campsite) {
    notFound();
  }

  const nearby = getNearbyCampsites(campsite);
  const path = `/kamp-alanlari/${il}/${ilce}/${slug}`;
  const content = getCampsiteFullContent(campsite, province.name, district.name);
  const campsiteVideo = getVideoForCampsite(campsite, district.name);
  const updatedAt = getCampsiteUpdatedAt(campsite);
  const shareUrl = `${SITE_URL}${path}`;
  const highlightParagraph = pickHighlightParagraph(content.mainParagraphs);
  const transportDistance = extractTransportDistance(content.transport);
  const galleryAlt = `${campsite.name} kamp alanı — ${district.name}, ${province.name}`;

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: province.name, href: `/kamp-alanlari/${il}` },
    { label: district.name, href: `/kamp-alanlari/${il}/${ilce}` },
    { label: campsite.name },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, path),
          buildWebPageJsonLd({
            name: campsite.name,
            description: campsite.shortDescription,
            path,
            dateModified: updatedAt,
          }),
          buildCampsiteJsonLd(campsite, province.name, district.name, path),
          buildVideoJsonLd(campsiteVideo, path, campsite.createdAt),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <ContentGrid
        sidebar={
          <>
            <CampsiteQuickInfo
              campsite={campsite}
              districtName={district.name}
              provinceName={province.name}
            />
            <SearchWidget />
          </>
        }
        main={
          <>
            <CampsiteGallery images={campsite.images} altBase={galleryAlt} />

            <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
                  {campsite.name}
                </h1>
                <p className="mt-2 flex items-center gap-1.5 text-forest-600">
                  <svg
                    className="h-4 w-4 shrink-0 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {district.name}, {province.name}
                </p>
              </div>
              <CampsiteShareButton title={campsite.name} url={shareUrl} />
            </div>

            <div className="mt-4">
              <CampsiteFeaturePills features={campsite.features} />
            </div>

            <PageUpdatedBar updatedAt={updatedAt} />

            <VideoSection
              video={campsiteVideo}
              heading={`${campsite.name} Tanıtım Videosu`}
              className="mt-8"
            />

            <section className="prose-seo mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                {campsite.name} Hakkında
              </h2>
              {content.mainParagraphs.map((paragraph, i) => (
                <div key={`main-${i}`}>
                  <p>{paragraph}</p>
                  {highlightParagraph === paragraph && (
                    <blockquote className="my-6 border-l-4 border-amber-400 bg-amber-50/60 px-5 py-4 text-forest-700 italic">
                      {paragraph}
                    </blockquote>
                  )}
                </div>
              ))}
              {content.extraParagraphs.map((paragraph, i) => (
                <p key={`extra-${i}`}>{paragraph}</p>
              ))}
            </section>

            {content.campType && (
              <section className="prose-seo mt-8">
                <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                  Kamp Türü ve Konsept
                </h2>
                <p>{content.campType}</p>
              </section>
            )}

            <section className="prose-seo mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                En İyi Kamp Sezonu
              </h2>
              <p>{content.bestSeason}</p>
            </section>

            {content.suitableFor && (
              <section className="prose-seo mt-8">
                <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                  Kimler İçin Uygun?
                </h2>
                <p>{content.suitableFor}</p>
              </section>
            )}

            <section className="mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                Kamp İpuçları
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {content.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                Yakın Gezilecek Yerler
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {content.nearbyAttractions.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                Konum ve Ulaşım
              </h2>
              <p className="prose-seo mb-4">{content.transport}</p>
              {campsite.googleMapsEmbed && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-forest-100">
                  {transportDistance && (
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-forest-800 shadow-md">
                      <svg
                        className="h-4 w-4 text-forest-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      {transportDistance}
                    </div>
                  )}
                  <iframe
                    src={campsite.googleMapsEmbed}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    title={`${campsite.name} kamp alanı haritası — ${district.name}`}
                    allowFullScreen
                  />
                </div>
              )}
            </section>

            <NearbyCampsites
              campsites={nearby}
              title={`${district.name} Yakınındaki Kamp Alanları`}
            />

            <CampsiteRelatedLinks
              campsite={campsite}
              provinceName={province.name}
              districtName={district.name}
            />
          </>
        }
      />
    </div>
  );
}
