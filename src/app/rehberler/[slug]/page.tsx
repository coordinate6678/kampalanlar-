import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { PageFaqSection } from "@/components/content/PageFaqSection";
import { GuideMetaBar } from "@/components/guides/GuideMetaBar";
import { GuideSectionBlock } from "@/components/guides/GuideSectionBlock";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { GuideAuthorBox } from "@/components/guides/GuideAuthorBox";
import { GuideKeepReading } from "@/components/guides/GuideKeepReading";
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
import {
  estimateGuideReadingMinutes,
  getKeepReadingItems,
  pickGuideHighlightParagraph,
} from "@/lib/utils/guide-page";

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
  const readingMinutes = estimateGuideReadingMinutes(content);
  const highlightParagraph = pickGuideHighlightParagraph(content);
  const keepReadingItems = getKeepReadingItems(
    slug,
    content.relatedGuides,
    guides
  );

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

      <div className="lg:grid lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-10">
        <div className="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
          <GuideSidebar
            entries={tocEntries}
            readingMinutes={readingMinutes}
          />
        </div>

        <div className="min-w-0">
          <GuideMetaBar publishedAt={content.publishedAt} />

          <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
            {guide.title}
          </h1>

          <div className="relative my-8 aspect-[21/9] overflow-hidden rounded-xl">
            <PlaceImage
              src={content.image}
              alt={guide.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 960px"
            />
          </div>

          {highlightParagraph === content.intro ? (
            <blockquote className="prose-seo mb-8 border-l-4 border-amber-400 bg-amber-50/60 px-5 py-4 text-lg font-medium italic text-forest-800">
              {content.intro}
            </blockquote>
          ) : (
            <>
              <section className="prose-seo mb-8">
                <p className="text-lg font-medium text-forest-800">
                  {content.intro}
                </p>
              </section>
              {highlightParagraph && (
                <blockquote className="mb-8 border-l-4 border-amber-400 bg-amber-50/60 px-5 py-4 font-display text-lg italic text-forest-700">
                  {highlightParagraph}
                </blockquote>
              )}
            </>
          )}

          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <GuideSectionBlock
                key={section.id}
                section={section}
                excludedParagraph={
                  index === 0 ? highlightParagraph ?? undefined : undefined
                }
              />
            ))}
          </div>

          <GuideAuthorBox author={content.author} />

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

          <GuideKeepReading items={keepReadingItems} />

          <PageFaqSection items={content.faq} className="mt-10" />
        </div>
      </div>
    </article>
  );
}
