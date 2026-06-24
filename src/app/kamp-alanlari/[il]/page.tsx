import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getProvinceBySlug,
  getDistrictsByProvince,
  getCampsitesByProvince,
  getCampsiteCountByProvince,
  getProvinceStaticParams,
} from "@/lib/data";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { ProvinceDistrictLinks } from "@/components/content/RelatedLinks";
import { DistrictAvatarRow } from "@/components/province/DistrictAvatarRow";
import { ProvinceCampsiteGrid } from "@/components/province/ProvinceCampsiteGrid";
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
  const province = getProvinceBySlug(il);

  if (!province) {
    notFound();
  }

  const districts = getDistrictsByProvince(il);
  const provinceCampsites = getCampsitesByProvince(il);
  const campsiteCount = getCampsiteCountByProvince(il);
  const provinceParagraphs = getProvinceContent(il, province.description);
  const provinceVideo = getVideoForProvince(il);
  const provinceLinkText = getKampAlaniLinkText(province.name);

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
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, provincePath),
          buildCollectionPageJsonLd({
            name: provinceLinkText,
            description: provinceParagraphs[0] ?? province.description,
            path: provincePath,
          }),
          ...(districtListItems.length > 0
            ? [
                buildItemListJsonLd(districtListItems, provinceLinkText),
              ]
            : []),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <section className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
            {provinceLinkText}
          </h1>
          <p className="mt-2 text-sm font-medium text-forest-600">
            {districts.length} ilçe · {campsiteCount} kamp alanı
          </p>
          {provinceParagraphs[0] && (
            <p className="mt-4 leading-relaxed text-forest-600">
              {provinceParagraphs[0]}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {provinceCampsites.length > 0 && (
              <Link
                href="#kamp-alanlari"
                className="rounded-lg bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-700"
              >
                Keşfetmeye Başla
              </Link>
            )}
            <Link
              href="#harita"
              className="rounded-lg border border-forest-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 transition-colors hover:border-forest-300 hover:bg-forest-50"
            >
              Haritada Gör
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md lg:aspect-[3/4]">
          <PlaceImage
            src={province.image}
            alt={provinceLinkText}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {districts.length > 0 ? (
        <>
          <DistrictAvatarRow
            districts={districts}
            provinceSlug={il}
            provinceName={province.name}
          />
          <ProvinceDistrictLinks
            provinceSlug={il}
            provinceName={province.name}
            districts={districts
              .filter((d) => isDistrictIndexable(il, d.slug))
              .map((d) => ({ slug: d.slug, name: d.name }))}
          />
        </>
      ) : (
        <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-amber-800">
            {province.name} için ilçe rehberi yakında eklenecek. Bölge
            hakkında genel bilgiyi aşağıda bulabilirsiniz.
          </p>
        </div>
      )}

      <ProvinceCampsiteGrid
        campsites={provinceCampsites}
        provinceName={province.name}
      />

      {provinceVideo && (
        <VideoSection
          video={provinceVideo}
          heading={`${province.name} Bölge Videosu`}
          className="mb-10"
        />
      )}

      <section className="prose-seo mb-10">
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

      <section id="harita" className="mb-10">
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
        items={getProvinceFaqItems(il, province.name, campsiteCount)}
        centered
        className="mx-auto mt-16 max-w-3xl"
      />

      <div className="mx-auto mt-10 max-w-md">
        <SearchWidget />
      </div>
    </div>
  );
}
