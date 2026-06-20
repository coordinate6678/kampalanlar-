import Link from "next/link";
import {
  homepageSeoIntro,
  homepageSeoOutro,
  homepageSeoSections,
} from "@/lib/content/homepage-content";

export function HomeSeoContent() {
  return (
    <section className="prose-seo" aria-labelledby="seo-content-heading">
      <h2
        id="seo-content-heading"
        className="mb-6 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block"
      >
        Türkiye&apos;de Kamp Rehberi
      </h2>

      <p className="mb-8 text-gray-700 leading-relaxed">{homepageSeoIntro}</p>

      {homepageSeoSections.map((section) => (
        <div key={section.heading} className="mb-10">
          <h2 className="mb-4 font-display text-xl font-bold text-forest-800">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="text-sm">
            <span className="text-gray-500">İlgili bölgeler: </span>
            {section.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 && ", "}
                <Link
                  href={link.href}
                  className="font-medium text-forest-700 underline decoration-amber-400/60 underline-offset-2 hover:text-amber-700 transition-colors"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      ))}

      <p className="text-gray-700 leading-relaxed">{homepageSeoOutro}</p>
    </section>
  );
}
