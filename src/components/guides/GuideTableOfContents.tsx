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

  let counter = 0;
  const numbered = entries.map((entry) => ({
    ...entry,
    number: entry.level === 2 ? ++counter : null,
  }));

  return (
    <nav
      aria-label="İçindekiler"
      className="mb-8 rounded-xl border border-forest-100 bg-forest-50 p-5"
    >
      <h2 className="mb-3 font-display text-lg font-bold text-forest-800">
        İçindekiler
      </h2>
      <ol className="space-y-2 text-sm">
        {numbered.map((entry) => {
          const prefix = entry.level === 2 ? `${entry.number}.` : "–";

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
