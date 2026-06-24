import Image from "next/image";
import Link from "next/link";
import { getAllProvinces } from "@/lib/data";
import { HeaderDesktopNav } from "@/components/layout/HeaderDesktopNav";
import { HeaderShell } from "@/components/layout/HeaderShell";
import { buildMobileNavData } from "@/components/layout/header-nav-data";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  const provinces = getAllProvinces();
  const mobileNav = buildMobileNavData(provinces);

  return (
    <HeaderShell
      mobileNav={mobileNav}
      logo={
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg shadow-sm transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-forest-800 sm:text-xl">
            {SITE_NAME}
          </span>
        </Link>
      }
      nav={<HeaderDesktopNav provinces={provinces} />}
    />
  );
}
