import Link from "next/link";
import type { GuideAuthor } from "@/lib/content/guides/types";

interface GuideMetaBarProps {
  author: GuideAuthor;
  publishedAt: string;
  updatedAt: string;
}

function formatGuideDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function GuideMetaBar({
  author,
  publishedAt,
  updatedAt,
}: GuideMetaBarProps) {
  return (
    <aside
      className="mb-6 rounded-xl border border-forest-100 bg-forest-50/60 p-5"
      aria-label="Yazar ve güncelleme bilgisi"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-700 text-lg text-cream"
            aria-hidden="true"
          >
            ✍️
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-forest-600">
              Yazar
            </p>
            <p className="font-medium text-forest-800" itemProp="author">
              {author.name}
            </p>
            {author.role && (
              <p className="text-sm text-gray-600">{author.role}</p>
            )}
            {author.bio && (
              <p className="mt-1 text-sm text-gray-600">{author.bio}</p>
            )}
            <Link
              href="/hakkimizda"
              className="mt-2 inline-block text-sm font-medium text-forest-700 underline decoration-amber-400 underline-offset-2 hover:text-amber-700"
            >
              Editöryal ekibimiz
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 sm:text-right">
          <time dateTime={publishedAt} itemProp="datePublished">
            <span className="font-medium text-forest-700">Yayın: </span>
            {formatGuideDate(publishedAt)}
          </time>
          <time dateTime={updatedAt} itemProp="dateModified">
            <span className="font-medium text-forest-700">Son güncelleme: </span>
            {formatGuideDate(updatedAt)}
          </time>
        </div>
      </div>
    </aside>
  );
}
