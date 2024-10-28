import Icon from "@/app/icon.png";
import MobileNavLink from "@/components/MobileNavLink";
import NavLink from "@/components/NavLink";
import OpenToWorkBadge from "@/components/ui/OpenToWorkBadge";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import site from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between px-4 py-10 sm:px-0">
      <div className="align-center flex flex-row items-center">
        <Link href="/" aria-label={site.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={Icon}
                alt={site.headerTitle}
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {site.headerTitle}
            </div>
          </div>
        </Link>

        {site.isOpenToWork && <OpenToWorkBadge />}
      </div>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <NavLink />
        <ThemeSwitch />
        <MobileNavLink />
      </div>
    </header>
  );
}
