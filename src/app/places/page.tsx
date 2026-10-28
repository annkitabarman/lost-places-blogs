import Link from "next/link";
import { ArrowLeftIcon, CompassIcon } from "@/components/icons";
import PlaceArchive from "@/components/place-archive";

export const metadata = {
  title: "Explore the Archive | Atlas of Lost Places",
  description:
    "Explore lost cities, abandoned settlements, and vanished civilizations from around the world.",
};

export default function PlacesPage() {
  return (
    <main className="min-h-screen bg-[#11120f] text-[#e9e2d2]">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <CompassIcon size={28} weight="light" className="text-[#c6a76a]" />
            <span className="font-serif text-xl">Atlas of Lost Places</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#aaa69b] hover:text-[#c6a76a]"
          >
            <ArrowLeftIcon size={17} />
            Home
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
          The archive
        </p>

        <h1 className="mt-4 font-serif text-5xl sm:text-7xl">Lost places</h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa69b]">
          An evolving collection of forgotten cities, buried worlds, and
          civilizations that left traces of their existence behind. Every place
          holds a fragment of a larger story.
        </p>

        <PlaceArchive />
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-[#858176]">
        A living archive of places the world almost forgot.
      </footer>
    </main>
  );
}
