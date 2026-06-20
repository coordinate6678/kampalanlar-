import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { GuideMetaBar } from "@/components/guides/GuideMetaBar";
import { GuideSectionBlock } from "@/components/guides/GuideSectionBlock";
import { GuideTableOfContents } from "@/components/guides/GuideTableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { guides, getGuideBySlug } from "@/data/guides";
import {
  getGuideContent,
  getGuidePath,
  getGuideTocEntries,
  resolveRelatedCampsites,
} from "@/lib/content/guides";
import { buildMetadata, metaDescription } from "@/lib/seo";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const content = getGuideContent(slug);

  if (!guide || !content) return {};

  const meta = buildMetadata({
    title: guide.title,
    description: metaDescription(`${guide.description} ${content.intro}`),
    path: getGuidePath(slug),
    skipOgImage: true,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: content.publishedAt,
      modifiedTime: content.updatedAt,
      authors: [content.author.name],
    },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const content = getGuideContent(slug);

  if (!guide || !content) {
    notFound();
  }

  const guidePath = getGuidePath(slug);
  const relatedCampsites = resolveRelatedCampsites(content.relatedCampsites);
  const tocEntries = getGuideTocEntries(content.sections);
  const otherGuides = guides.filter((g) => g.slug !== slug);

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Rehberler", href: "/rehberler" },
    { label: guide.title },
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, guidePath),
          buildArticleJsonLd({
            headline: guide.title,
            description: guide.description,
            path: guidePath,
            image: content.image,
            datePublished: content.publishedAt,
            dateModified: content.updatedAt,
            authorName: content.author.name,
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
                alt={guide.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-3xl" aria-hidden="true">
                  {guide.icon}
                </span>
                <h1 className="mt-2 font-display text-3xl font-bold text-cream lg:text-4xl">
                  {guide.title}
                </h1>
                <p className="mt-1 text-forest-200">{guide.description}</p>
              </div>
            </div>

            <GuideMetaBar
              author={content.author}
              publishedAt={content.publishedAt}
              updatedAt={content.updatedAt}
            />

            <GuideTableOfContents entries={tocEntries} />

            <section className="prose-seo mb-8">
              <p className="text-lg font-medium text-forest-800">
                {content.intro}
              </p>
            </section>

            <div className="space-y-8">
              {content.sections.map((section) => (
                <GuideSectionBlock key={section.id} section={section} />
              ))}
            </div>

            {relatedCampsites.length > 0 && (
              <section
                className="mt-10"
                aria-labelledby="guide-related-campsites-heading"
              >
                <h2
                  id="guide-related-campsites-heading"
                  className="mb-4 font-display text-xl font-bold text-forest-800"
                >
                  Rehberde Geçen Kamp Alanları
                </h2>
                <div className="space-y-4">
                  {relatedCampsites.map((campsite) => (
                    <CampsiteCard key={campsite.slug} campsite={campsite} />
                  ))}
                </div>
              </section>
            )}

            {content.relatedGuides.length > 0 && (
              <section className="mt-10">
                <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                  İlgili Rehberler
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {content.relatedGuides.map((link) => (
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
            )}

            <section className="mt-10">
              <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
                Diğer Rehberler
              </h2>
              <div className="flex flex-wrap gap-2">
                {otherGuides.map((g) => (
                    <Link
                      key={g.slug}
                      href={getGuidePath(g.slug)}
                      className="inline-flex items-center gap-2 rounded-lg border border-forest-100 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
                    >
                      <span aria-hidden="true">{g.icon}</span>
                      {g.title}
                    </Link>
                  ))}
              </div>
            </section>

            <PageFaqSection items={content.faq} />
          </>
        }
        sidebar={<SearchWidget />}
      />
    </article>
  );
}
