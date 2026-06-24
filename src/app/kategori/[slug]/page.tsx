import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { CategoryCampsiteExplorer } from "@/components/category/CategoryCampsiteExplorer";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getCampsitesByCategory, getProvinceBySlug } from "@/lib/data";
import { getCategoryContent } from "@/lib/content/category-content";
import { buildMetadata, canonicalUrl } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildItemListJsonLd,
} from "@/lib/seo/json-ld";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { getCategoryFaqItems } from "@/lib/content/page-faq-content";
import {
  buildCategoryPageDescription,
  buildCategoryPageTitle,
} from "@/lib/seo/page-metadata";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const content = getCategoryContent(slug);

  if (!category || !content) return {};

  return buildMetadata({
    title: buildCategoryPageTitle(category.name),
    description: buildCategoryPageDescription(
      category.name,
      content.intro,
      getCampsitesByCategory(slug).length
    ),
    path: `/kategori/${slug}`,
    skipOgImage: true,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const content = getCategoryContent(slug);

  if (!category || !content) {
    notFound();
  }

  const campsites = getCampsitesByCategory(slug);
  const provinceOptions = [...new Set(campsites.map((c) => c.provinceSlug))]
    .map((provinceSlug) => {
      const province = getProvinceBySlug(provinceSlug);
      return province
        ? { slug: province.slug, name: province.name }
        : null;
    })
    .filter((province): province is { slug: string; name: string } => province !== null)
    .sort((a, b) => a.name.localeCompare(b.name, "tr"));

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kategoriler" },
    { label: category.name },
  ];

  const categoryPath = `/kategori/${slug}`;
  const campsiteListItems = campsites.map((campsite) => ({
    name: campsite.name,
    url: canonicalUrl(
      `/kamp-alanlari/${campsite.provinceSlug}/${campsite.districtSlug}/${campsite.slug}`
    ),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, categoryPath),
          buildCollectionPageJsonLd({
            name: `${category.name} Kamp Alanları`,
            description: content.intro,
            path: categoryPath,
          }),
          ...(campsiteListItems.length > 0
            ? [
                buildItemListJsonLd(
                  campsiteListItems,
                  `${category.name} Kamp Alanları`
                ),
              ]
            : []),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <header className="mb-10">
        <div className="flex gap-4">
          <div
            className="w-1 shrink-0 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <div>
            <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
              {category.name} Kamp Alanları
            </h1>
            <p className="mt-3 max-w-3xl text-lg italic text-forest-600">
              {content.intro}
            </p>
          </div>
        </div>
      </header>

      {campsites.length > 0 ? (
        <CategoryCampsiteExplorer
          campsites={campsites}
          categoryName={category.name}
          provinceOptions={provinceOptions}
        />
      ) : (
        <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="font-semibold text-amber-800">
            Bu kategoride henüz listelenen tesis yok
          </h2>
          <p className="mt-2 text-amber-700">
            {category.name} kategorisine uygun kamp alanları yakında
            eklenecek. Aşağıdaki rehber ve öne çıkan bölgelere göz
            atabilirsiniz.
          </p>
        </div>
      )}

      <section className="prose-seo mb-8">
        {content.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
          {category.name} Kamp İpuçları
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {content.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
          Öne Çıkan Bölgeler
        </h2>
        <ul className="flex flex-wrap gap-2">
          {content.bestRegions.map((region) => (
            <li key={region.href}>
              <Link
                href={region.href}
                className="rounded-full border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-700 transition-colors hover:border-amber-400 hover:text-amber-700"
              >
                {region.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
          Diğer Kategoriler
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories
            .filter((c) => c.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-forest-100 bg-white px-4 py-2 text-sm font-medium text-forest-700 transition-colors hover:border-amber-300 hover:text-amber-700"
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
        </div>
      </section>

      <PageFaqSection
        items={getCategoryFaqItems(
          category.slug,
          category.name,
          campsites.length
        )}
        centered
        className="mx-auto max-w-3xl"
      />
    </div>
  );
}
