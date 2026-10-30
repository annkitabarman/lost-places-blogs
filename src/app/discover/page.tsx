import Link from "next/link";
import { themes } from "@/data/places";

export const metadata = {
  title: "Discover | Atlas of Lost Places",
  description:
    "Explore collections of buried cities, reclaimed ruins, and vanished civilizations.",
};

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-[#11110f] text-[#e8e0d0]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <Link
          href="/"
          className="text-sm text-[#aaa397] transition hover:text-[#c6a76a]"
        >
          ← Return to the atlas
        </Link>

        <header className="border-b border-[#39352d] py-16 md:py-24">
          <p className="mb-5 text-sm tracking-[0.3em] text-[#c6a76a]">
            THE COLLECTIONS
          </p>

          <h1 className="font-serif text-4xl md:text-6xl">
            Discover the lost world.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aaa397]">
            Explore places shaped by catastrophe, forgotten by history, or
            slowly reclaimed by the natural world.
          </p>
        </header>

        <section className="grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/discover/${theme.slug}`}
              className="group flex min-h-64 flex-col justify-between border border-[#39352d] p-7 transition hover:border-[#c6a76a] hover:bg-[#191815]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.25em] text-[#c6a76a]">
                  COLLECTION {theme.number}
                </span>

                <span aria-hidden="true" className="text-2xl text-[#c6a76a]">
                  {theme.symbol}
                </span>
              </div>

              <div className="mt-12">
                <h2 className="font-serif text-2xl transition group-hover:text-[#c6a76a]">
                  {theme.title}
                </h2>

                <p className="mt-3 leading-7 text-[#aaa397]">
                  {theme.description}
                </p>

                <span className="mt-6 inline-block text-sm text-[#c6a76a]">
                  Explore collection →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
