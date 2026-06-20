import Link from "next/link";
import type { GuideSection } from "@/lib/content/guides/types";
import type { ContentLink } from "@/lib/types";

interface GuideSectionBlockProps {
  section: GuideSection;
}

function LinkList({ links }: { links: ContentLink[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => (
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
  );
}

export function GuideSectionBlock({ section }: GuideSectionBlockProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-forest-100 pt-8 first:border-t-0 first:pt-0"
      aria-labelledby={`${section.id}-heading`}
    >
      <h2
        id={`${section.id}-heading`}
        className="mb-4 font-display text-xl font-bold text-forest-800"
      >
        {section.heading}
      </h2>

      {section.paragraphs.length > 0 && (
        <div className="prose-seo">
          {section.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {section.subsections?.map((subsection) => (
        <div
          key={subsection.id}
          id={subsection.id}
          className="scroll-mt-24 mt-6 border-l-2 border-amber-200 pl-4"
          aria-labelledby={`${subsection.id}-heading`}
        >
          <h3
            id={`${subsection.id}-heading`}
            className="mb-3 font-display text-lg font-semibold text-forest-800"
          >
            {subsection.heading}
          </h3>
          <div className="prose-seo">
            {subsection.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {subsection.links && subsection.links.length > 0 && (
            <LinkList links={subsection.links} />
          )}
        </div>
      ))}

      {section.checklist && section.checklist.length > 0 && (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {section.checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-forest-100 bg-white px-4 py-3 text-sm text-gray-700"
            >
              <span className="text-amber-500 shrink-0" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.links && section.links.length > 0 && (
        <LinkList links={section.links} />
      )}
    </section>
  );
}
