interface TocEntry {
  id: string;
  heading: string;
  level: 2 | 3;
}

interface GuideTableOfContentsProps {
  entries: TocEntry[];
}

export function GuideTableOfContents({ entries }: GuideTableOfContentsProps) {
  if (entries.length === 0) return null;

  let h2Index = 0;

  return (
    <nav
      aria-label="İçindekiler"
      className="mb-8 rounded-xl border border-forest-100 bg-forest-50 p-5"
    >
      <h2 className="mb-3 font-display text-lg font-bold text-forest-800">
        İçindekiler
      </h2>
      <ol className="space-y-2 text-sm">
        {entries.map((entry) => {
          if (entry.level === 2) h2Index += 1;
          const prefix = entry.level === 2 ? `${h2Index}.` : "–";

          return (
            <li
              key={entry.id}
              className={entry.level === 3 ? "ml-5" : undefined}
            >
              <a
                href={`#${entry.id}`}
                className="flex gap-2 text-forest-700 hover:text-amber-700 transition-colors"
              >
                <span
                  className="shrink-0 font-semibold text-forest-400"
                  aria-hidden="true"
                >
                  {prefix}
                </span>
                {entry.heading}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
