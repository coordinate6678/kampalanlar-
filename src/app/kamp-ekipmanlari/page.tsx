import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { equipmentItems } from "@/data/equipment";
import {
  equipmentIndexContent,
  getEquipmentContent,
} from "@/lib/content/equipment-content";
import { buildMetadata, metaDescription } from "@/lib/seo";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/seo/json-ld";
import { EQUIPMENT_INDEX_IMAGE } from "@/data/media/equipment-images";
import { headers } from "next/headers";

export const metadata = buildMetadata({
  title: "Kamp Ekipmanları Rehberi",
  description: metaDescription(
    `${equipmentIndexContent.intro} Çadır, uyku tulumu, ocak, mat, aydınlatma ve ilk yardım dahil temel kamp ekipmanları rehberi.`
  ),
  path: "/kamp-ekipmanlari",
  image: EQUIPMENT_INDEX_IMAGE,
});

export default async function EquipmentIndexPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kamp Ekipmanları" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, "/kamp-ekipmanlari"),
          buildWebPageJsonLd({
            name: "Kamp Ekipmanları Rehberi",
            description: equipmentIndexContent.intro,
            path: "/kamp-ekipmanlari",
          }),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <ContentGrid
        main={
          <>
          <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
            <PlaceImage
              src={EQUIPMENT_INDEX_IMAGE}
              alt="Kamp çadırı — temel kamp ekipmanları rehberi"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-3xl" aria-hidden="true">
                🎒
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-cream lg:text-4xl">
                Kamp Ekipmanları Rehberi
              </h1>
              <p className="mt-1 text-forest-200">
                {equipmentItems.length} ekipman kategorisi — ne işe yarar, nasıl
                seçilir
              </p>
            </div>
          </div>

          <section className="prose-seo">
            <p className="text-lg font-medium text-forest-800">
              {equipmentIndexContent.intro}
            </p>
            {equipmentIndexContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="mt-10" aria-labelledby="equipment-list-heading">
            <h2
              id="equipment-list-heading"
              className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block"
            >
              Temel Kamp Ekipmanları
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {equipmentItems.map((item) => {
                const content = getEquipmentContent(item.slug);
                return (
                  <Link
                    key={item.slug}
                    href={`/kamp-ekipmanlari/${item.slug}`}
                    className="group flex gap-4 overflow-hidden rounded-xl border border-forest-100 bg-white p-4 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      {content && (
                        <PlaceImage
                          src={content.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="80px"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span aria-hidden="true">{item.icon}</span>
                        <h3 className="font-semibold text-forest-800 group-hover:text-amber-700 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {content?.purpose ?? item.description}
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

          <section className="mt-10 rounded-xl bg-forest-50 border border-forest-100 p-6">
            <h2 className="font-display text-xl font-bold text-forest-800">
              Ekipmanınız hazır mı?
            </h2>
            <p className="mt-2 text-gray-600">
              Temel setinizi tamamladıktan sonra Türkiye&apos;nin en güzel kamp
              alanlarını keşfedin.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-medium text-cream hover:bg-forest-600 transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/kategori/deniz-kenari"
                className="rounded-lg border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 transition-colors"
              >
                Deniz Kenarı Kamp
              </Link>
              <Link
                href="/kategori/orman"
                className="rounded-lg border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 transition-colors"
              >
                Orman Kamp
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
