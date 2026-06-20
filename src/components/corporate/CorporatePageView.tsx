import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import type { CorporatePage } from "@/data/corporate-pages";
import { getCorporatePagePath } from "@/data/corporate-pages";
import { ORGANIZATION } from "@/data/organization";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/seo/json-ld";

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function buildCorporatePageMetadata(page: CorporatePage) {
  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: getCorporatePagePath(page.slug),
  });
}

interface CorporatePageViewProps {
  page: CorporatePage;
  nonce?: string;
}

export function CorporatePageView({ page, nonce }: CorporatePageViewProps) {
  const path = getCorporatePagePath(page.slug);
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: page.h1 },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 lg:px-6">
      <JsonLd
        nonce={nonce}
        data={[
          buildBreadcrumbJsonLd(breadcrumbItems, path),
          buildWebPageJsonLd({
            name: page.h1,
            description: page.metaDescription,
            path,
            dateModified: page.updatedAt,
          }),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <header className="mb-8 border-b border-forest-100 pb-6">
        <h1 className="font-display text-3xl font-bold text-forest-800 lg:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-3 text-gray-600">{page.intro}</p>
        <p className="mt-3 text-sm text-gray-500">
          <time dateTime={page.updatedAt}>
            Son güncelleme: {formatDate(page.updatedAt)}
          </time>
        </p>
      </header>

      <div className="prose-seo space-y-8">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 font-display text-xl font-bold text-forest-800">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>
                {paragraph.includes(ORGANIZATION.email) ? (
                  <>
                    {paragraph.split(ORGANIZATION.email)[0]}
                    <a
                      href={`mailto:${ORGANIZATION.email}`}
                      className="font-medium text-forest-700 underline decoration-amber-400 underline-offset-2 hover:text-amber-700"
                    >
                      {ORGANIZATION.email}
                    </a>
                    {paragraph.split(ORGANIZATION.email)[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {page.slug === "iletisim" && (
        <div className="mt-10 rounded-xl border border-forest-100 bg-forest-50 p-6">
          <h2 className="font-display text-lg font-bold text-forest-800">
            Doğrudan İletişim
          </h2>
          <p className="mt-2 text-gray-600">
            E-posta:{" "}
            <a
              href={`mailto:${ORGANIZATION.email}`}
              className="font-medium text-forest-700 underline decoration-amber-400 underline-offset-2 hover:text-amber-700"
            >
              {ORGANIZATION.email}
            </a>
          </p>
        </div>
      )}

      <nav
        className="mt-10 flex flex-wrap gap-3 border-t border-forest-100 pt-6"
        aria-label="Kurumsal sayfalar"
      >
        <Link
          href="/hakkimizda"
          className="text-sm text-forest-600 hover:text-amber-700"
        >
          Hakkımızda
        </Link>
        <Link
          href="/editorial-politika"
          className="text-sm text-forest-600 hover:text-amber-700"
        >
          Editoryal Politika
        </Link>
        <Link
          href="/gizlilik-politikasi"
          className="text-sm text-forest-600 hover:text-amber-700"
        >
          Gizlilik
        </Link>
      </nav>
    </div>
  );
}
