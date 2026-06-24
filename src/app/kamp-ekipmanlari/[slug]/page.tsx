import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EquipmentHero } from "@/components/equipment/EquipmentHero";
import { EquipmentBuyingGuide } from "@/components/equipment/EquipmentBuyingGuide";
import { EquipmentExpertTip } from "@/components/equipment/EquipmentExpertTip";
import { EquipmentRelated } from "@/components/equipment/EquipmentRelated";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  equipmentItems,
  getEquipmentBySlug,
} from "@/data/equipment";
import { getEquipmentContent } from "@/lib/content/equipment-content";
import { buildMetadata, metaDescription } from "@/lib/seo";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { resolveEquipmentRelatedItems } from "@/lib/utils/equipment-page";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return equipmentItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  const content = getEquipmentContent(slug);

  if (!item || !content) return {};

  const description = metaDescription(
    `${item.name} rehberi. ${content.purpose} ${content.paragraphs[0]}`
  );

  return buildMetadata({
    title: `${item.name} — Kamp Ekipmanları Rehberi`,
    description,
    path: `/kamp-ekipmanlari/${slug}`,
    skipOgImage: true,
  });
}

export default async function EquipmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  const content = getEquipmentContent(slug);

  if (!item || !content) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kamp Ekipmanları", href: "/kamp-ekipmanlari" },
    { label: item.name },
  ];

  const equipmentPath = `/kamp-ekipmanlari/${slug}`;
  const relatedItems = resolveEquipmentRelatedItems(content.related);
  const remainingTips = content.tips.slice(1);

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 lg:px-6">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, equipmentPath),
          buildArticleJsonLd({
            headline: `${item.name} — Kamp Ekipmanları Rehberi`,
            description: content.purpose,
            path: equipmentPath,
            image: content.image,
          }),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <EquipmentHero
        name={item.name}
        purpose={content.purpose}
        featureTags={content.features.slice(0, 2)}
      />

      <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
        <PlaceImage
          src={content.image}
          alt={`${item.name} — kamp ekipmanı rehberi`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <section className="prose-seo">
        <p className="text-lg font-medium text-forest-800">{content.intro}</p>
        {content.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {content.buyingGuide ? (
        <EquipmentBuyingGuide text={content.buyingGuide} />
      ) : null}

      {content.tips[0] ? <EquipmentExpertTip tip={content.tips[0]} /> : null}

      {remainingTips.length > 0 && (
        <section className="mt-8" aria-labelledby="equipment-more-tips-heading">
          <h2
            id="equipment-more-tips-heading"
            className="mb-4 font-display text-xl font-bold text-forest-800"
          >
            Seçim ve Kullanım İpuçları
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-forest-700">
            {remainingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      <EquipmentRelated items={relatedItems} />
    </article>
  );
}
