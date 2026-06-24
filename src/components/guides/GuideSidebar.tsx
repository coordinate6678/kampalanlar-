import { GuideTableOfContents } from "@/components/guides/GuideTableOfContents";

interface TocEntry {
  id: string;
  heading: string;
  level: 2 | 3;
}

interface GuideSidebarProps {
  entries: TocEntry[];
  readingMinutes: number;
}

export function GuideSidebar({ entries, readingMinutes }: GuideSidebarProps) {
  return (
    <aside className="space-y-6">
      <GuideTableOfContents entries={entries} />
      <div className="rounded-xl border border-forest-100 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest-500">
          Tahmini Okuma
        </p>
        <p className="mt-1 font-display text-2xl font-bold text-forest-800">
          {readingMinutes} Dakika
        </p>
      </div>
    </aside>
  );
}
