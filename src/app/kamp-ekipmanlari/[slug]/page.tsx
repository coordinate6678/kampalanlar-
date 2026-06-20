import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  equipmentItems,
  getEquipmentBySlug,
} from "@/data/equipment";
import { getEquipmentContent } from "@/lib/content/equipment-content";
import { buildMetadata, metaDescription } from "@/lib/seo";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";

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
  const nonce = (await headers()).get("x-nonce") ?? undefined;
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
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

      <ContentGrid
        main={
          <>
          <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
            <PlaceImage
              src={content.image}
              alt={`${item.name} — kamp ekipmanı rehberi`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-cream lg:text-4xl">
                {item.name}
              </h1>
              <p className="mt-1 text-forest-200">{item.description}</p>
            </div>
          </div>

          <section className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-8">
            <h2 className="font-display text-lg font-bold text-amber-900">
              Ne İşe Yarar?
            </h2>
            <p className="mt-2 text-amber-800">{content.purpose}</p>
          </section>

          <section className="prose-seo">
            <p className="text-lg font-medium text-forest-800">{content.intro}</p>
            {content.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              Temel Özellikler
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {content.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-lg bg-white border border-forest-100 px-4 py-3 text-sm text-gray-700"
                >
                  <span className="text-amber-500 shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              Seçim ve Kullanım İpuçları
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {content.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              İlgili Rehberler
            </h2>
            <ul className="flex flex-wrap gap-2">
              {content.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
              Diğer Kamp Ekipmanları
            </h2>
            <div className="flex flex-wrap gap-2">
              {equipmentItems
                .filter((e) => e.slug !== slug)
                .map((e) => (
                  <Link
                    key={e.slug}
                    href={`/kamp-ekipmanlari/${e.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-forest-100 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
                  >
                    <span aria-hidden="true">{e.icon}</span>
                    {e.name}
                  </Link>
                ))}
            </div>
          </section>
          </>
        }
        sidebar={<SearchWidget />}
      />
    </div>
  );
}
