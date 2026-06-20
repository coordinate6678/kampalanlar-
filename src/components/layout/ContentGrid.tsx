import type { ReactNode } from "react";
import { AdSlot } from "@/components/ads/AdSlot";

interface ContentGridProps {
  main: ReactNode;
  sidebar?: ReactNode;
  mainClassName?: string;
  sidebarClassName?: string;
}

export function ContentGrid({
  main,
  sidebar,
  mainClassName = "",
  sidebarClassName = "space-y-6 lg:sticky lg:top-24 lg:self-start",
}: ContentGridProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute right-full top-0 bottom-0 mr-5 hidden min-[1600px]:block w-[min(300px,max(168px,calc((100vw-80rem)/2-1.25rem)))]">
        <div className="pointer-events-auto sticky top-24 w-full">
          <AdSlot slot="left-skyscraper" />
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className={`lg:col-span-2 ${mainClassName}`.trim()}>{main}</div>
        <aside className={sidebarClassName}>
          {sidebar}
          <AdSlot slot="sidebar-primary" />
        </aside>
      </div>
    </div>
  );
}
