import Link from "next/link";
import type { GuideAuthor } from "@/lib/content/guides/types";

interface GuideAuthorBoxProps {
  author: GuideAuthor;
}

export function GuideAuthorBox({ author }: GuideAuthorBoxProps) {
  const initial = author.name.trim().charAt(0).toUpperCase() || "K";

  return (
    <aside
      className="mt-10 rounded-xl border border-forest-100 bg-white p-6 shadow-sm"
      aria-label="Yazar bilgisi"
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-700 font-display text-xl font-bold text-amber-300"
          aria-hidden="true"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Yazar
          </p>
          <p className="mt-1 font-display text-lg font-bold text-forest-800">
            {author.name}
          </p>
          {author.role && (
            <p className="mt-1 text-sm text-forest-600">{author.role}</p>
          )}
          {author.bio && (
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              {author.bio}
            </p>
          )}
          <Link
            href="/editorial-politika"
            className="mt-3 inline-flex text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            İçerik ilkelerimizi okuyun →
          </Link>
        </div>
      </div>
    </aside>
  );
}
