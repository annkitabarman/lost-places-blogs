import Link from "next/link";
import { ArrowLeftIcon, CompassIcon } from "@/components/icons";
import AtlasMap from "@/components/atlas-map";
import { places } from "@/data/places";

export const metadata = {
  title: "Explore the Atlas | Atlas of Lost Places",
  description:
    "Explore the locations of lost cities, ancient civilizations, and abandoned settlements on an interactive world map.",
};

export default function AtlasPage() {
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

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
          Geographic index
        </p>

        <h1 className="mt-4 font-serif text-5xl sm:text-7xl">
          The world, remembered.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa69b]">
          Every marker is a fragment of history. Explore the locations of
          vanished civilizations and places transformed by time.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-5">
          <p className="text-sm text-[#aaa69b]">
            Explore the collection geographically
          </p>

          <p className="font-serif text-xl">
            {places.length.toString().padStart(2, "0")}
            <span className="ml-2 font-sans text-xs uppercase tracking-widest text-[#858176]">
              mapped places
            </span>
          </p>
        </div>

        <div className="mt-8 overflow-hidden border border-white/10">
          <AtlasMap />
        </div>

        <p className="mt-4 text-xs leading-6 text-[#858176]">
          Map data © OpenStreetMap contributors. Coordinates are approximate and
          intended for exploration, not navigation.
        </p>

        <div className="mt-12">
          <h2 className="font-serif text-3xl">Explore the entries</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
              <Link
                key={place.slug}
                href={`/places/${place.slug}`}
                className="flex items-center justify-between gap-4 border border-white/10 p-5 transition hover:border-[#c6a76a]/50"
              >
                <div>
                  <h3 className="font-serif text-xl">{place.name}</h3>
                  <p className="mt-1 text-sm text-[#aaa69b]">
                    {place.location}
                  </p>
                </div>

                <span className="text-[#c6a76a]" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-[#858176]">
        A living archive of places the world almost forgot.
      </footer>
    </main>
  );
}
