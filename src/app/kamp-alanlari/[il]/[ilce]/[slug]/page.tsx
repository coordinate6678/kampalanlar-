import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { NearbyCampsites } from "@/components/campsite/NearbyCampsites";
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
import { getCampsiteFullContent } from "@/lib/content/get-page-content";
import { VideoSection } from "@/components/media/VideoSection";
import { getVideoForCampsite } from "@/data/media/videos";
import {
  buildBreadcrumbJsonLd,
  buildCampsiteJsonLd,
  buildVideoJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo/json-ld";
import { getKampAlaniLinkText } from "@/lib/utils/seoText";

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
  const province = getProvinceBySlug(il);
  const district = getDistrictBySlug(il, ilce);

  if (!campsite) return {};

  return buildMetadata({
    title: buildCampsitePageTitle(campsite.name, district?.name ?? ""),
    description: buildCampsitePageDescription(
      campsite.name,
      district?.name ?? "",
      province?.name ?? "",
      campsite.shortDescription
    ),
    path: `/kamp-alanlari/${il}/${ilce}/${slug}`,
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
            <SearchWidget />
            <div className="rounded-xl bg-white p-5 shadow-sm border border-forest-100">
              <h2 className="mb-3 font-semibold text-forest-800">Hızlı Bilgi</h2>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Kategori</dt>
                  <dd className="font-medium text-forest-800 text-right capitalize">
                    {campsite.category.replace(/-/g, " ")}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Puan</dt>
                  <dd className="font-medium text-amber-600">
                    ★ {campsite.rating}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Konum</dt>
                  <dd className="font-medium text-forest-800 text-right">
                    {district.name}, {province.name}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        }
        main={
          <>
          <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
            {campsite.name}
          </h1>

          <p className="mt-2 text-gray-600">
            {getKampAlaniLinkText(district.name)} · {province.name}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="font-medium text-amber-600">
              ★ {campsite.rating} ({campsite.reviewCount} değerlendirme)
            </span>
            <span>·</span>
            <span className="capitalize">{campsite.category.replace(/-/g, " ")}</span>
          </div>

          <PageUpdatedBar updatedAt={updatedAt} />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {campsite.images.map((image, i) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? "sm:col-span-2 aspect-[21/9]" : "aspect-[16/10]"}`}
              >
                <PlaceImage
                  src={image}
                  alt={`${campsite.name} kamp alanı — ${district.name}, ${province.name} — fotoğraf ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? "100vw" : "50vw"}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <VideoSection
            video={campsiteVideo}
            heading={`${campsite.name} Tanıtım Videosu`}
            className="mt-8"
          />

          <section className="mt-8 prose-seo">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              {campsite.name} Hakkında
            </h2>
            {content.mainParagraphs.map((paragraph, i) => (
              <p key={`main-${i}`}>{paragraph}</p>
            ))}
            {content.extraParagraphs.map((paragraph, i) => (
              <p key={`extra-${i}`}>{paragraph}</p>
            ))}
          </section>

          {content.campType && (
            <section className="mt-8 prose-seo">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                Kamp Türü ve Konsept
              </h2>
              <p>{content.campType}</p>
            </section>
          )}

          <section className="mt-8 prose-seo">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              En İyi Kamp Sezonu
            </h2>
            <p>{content.bestSeason}</p>
          </section>

          {content.suitableFor && (
            <section className="mt-8 prose-seo">
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
              Kamp Alanı Özellikleri
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {campsite.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 border border-forest-100"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <span className="font-medium text-forest-800">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              Ulaşım Bilgileri
            </h2>
            <p className="prose-seo">{content.transport}</p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              {campsite.name} Konumu
            </h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-forest-100">
              <iframe
                src={campsite.googleMapsEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                title={`${campsite.name} kamp alanı haritası — ${district.name}`}
                allowFullScreen
              />
            </div>
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
