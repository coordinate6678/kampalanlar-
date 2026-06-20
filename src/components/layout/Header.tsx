import Link from "next/link";
import { getAllProvinces } from "@/lib/data";
import { HeaderDesktopNav } from "@/components/layout/HeaderDesktopNav";
import { HeaderShell } from "@/components/layout/HeaderShell";
import { buildMobileNavData } from "@/components/layout/header-nav-data";

export function Header() {
  const provinces = getAllProvinces();
  const mobileNav = buildMobileNavData(provinces);

  return (
    <HeaderShell mobileNav={mobileNav}>
      <Link href="/" className="flex items-center gap-2.5 group">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg shadow-md transition-transform group-hover:scale-105">
          ⛺
        </span>
        <span className="font-display text-xl font-bold text-cream tracking-tight">
          kampalanlari.co
        </span>
      </Link>

      <HeaderDesktopNav provinces={provinces} />
    </HeaderShell>
  );
}
