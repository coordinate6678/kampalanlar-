function formatGuideDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface GuideMetaBarProps {
  publishedAt: string;
}

export function GuideMetaBar({ publishedAt }: GuideMetaBarProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-forest-600">
      <span className="rounded-md bg-amber-400 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-forest-900">
        Rehber
      </span>
      <span aria-hidden="true">·</span>
      <time dateTime={publishedAt} itemProp="datePublished">
        {formatGuideDate(publishedAt)}
      </time>
    </div>
  );
}
