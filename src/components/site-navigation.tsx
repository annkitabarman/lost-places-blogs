"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon, CompassIcon } from "@/components/icons";

export default function SiteNavigation() {
  const pathname = usePathname();

  if (pathname === "/studio" || pathname.startsWith("/studio/")) {
    return null;
  }

  return (
    <header className="border-b border-white/10 bg-[#11120f] text-[#e9e2d2]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <CompassIcon size={30} weight="light" className="text-[#c6a76a]" />
          <span className="font-serif text-xl tracking-wide">
            Atlas of Lost Places
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#c4bdae] md:flex">
          <Link href="/places" className="transition hover:text-[#d6b779]">
            Places
          </Link>
          <Link href="/timeline" className="transition hover:text-[#d6b779]">
            Timeline
          </Link>
          <Link href="/about" className="transition hover:text-[#d6b779]">
            About
          </Link>
        </div>

        <Link
          href="/atlas"
          className="flex items-center gap-2 border border-[#c6a76a]/50 px-4 py-2 text-sm transition hover:bg-[#c6a76a] hover:text-[#11120f]"
        >
          Start exploring
          <ArrowUpRightIcon size={16} />
        </Link>
      </nav>
    </header>
  );
}
