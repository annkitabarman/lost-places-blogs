import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  MagnifyingGlass,
  MapTrifoldIcon,
} from "@/components/icons";
import { places, themes } from "@/data/places";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11120f] text-[#e9e2d2]">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Compass size={30} weight="light" className="text-[#c6a76a]" />
            <span className="font-serif text-xl tracking-wide">
              Atlas of Lost Places
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-[#c4bdae] md:flex">
            <Link href="/atlas" className="transition hover:text-[#d6b779]">
              Explore Atlas
            </Link>
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
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(137,111,65,0.16),transparent_55%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-36">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c6a76a]">
              A digital atlas of forgotten worlds
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Some places
              <br />
              were never meant
              <br />
              <span className="text-[#c6a76a] italic">to disappear.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#aaa69b]">
              Explore vanished cities, abandoned settlements, and civilizations
              that left their stories behind in stone, sand, and silence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/atlas"
                className="inline-flex items-center gap-3 bg-[#c6a76a] px-6 py-3.5 text-sm font-medium text-[#171711] transition hover:bg-[#dfc18a]"
              >
                <MapTrifoldIcon size={20} weight="regular" />
                Explore the atlas
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/places"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 text-sm transition hover:border-[#c6a76a]/60"
              >
                Browse all places
              </Link>
            </div>

            <div className="mt-16 flex gap-10 border-t border-white/10 pt-6">
              <div>
                <p className="font-serif text-3xl text-[#e9e2d2]">01</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#858176]">
                  Lost worlds
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#e9e2d2]">∞</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#858176]">
                  Untold stories
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#e9e2d2]">01</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#858176]">
                  Shared atlas
                </p>
              </div>
            </div>
          </div>

          {/* Atmospheric illustration */}
          <div className="relative min-h-[380px] overflow-hidden border border-white/10 bg-[#1b201a] sm:min-h-[480px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(164,139,83,0.23),transparent_60%)]" />

            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(198,167,106,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,106,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="absolute inset-8 border border-[#c6a76a]/20 sm:inset-12" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Compass
                size={110}
                weight="thin"
                className="mb-8 text-[#c6a76a]/80"
              />
              <p className="text-xs uppercase tracking-[0.4em] text-[#c6a76a]">
                Beyond the known
              </p>
              <p className="mt-4 max-w-xs font-serif text-3xl leading-snug sm:text-4xl">
                Here lie the remnants of other worlds.
              </p>
              <div className="mt-8 h-px w-16 bg-[#c6a76a]/60" />
              <p className="mt-5 text-xs tracking-widest text-[#858176]">
                35° 00&apos; N — UNKNOWN TERRITORY
              </p>
            </div>

            <p className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.25em] text-[#858176]">
              Field notes · No. 001
            </p>
          </div>
        </div>
      </section>

      {/* Featured places */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
              The archive
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl">
              Places that remain
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#aaa69b]">
              Each ruin is a fragment of a much larger story. Begin with these
              entries from our growing collection.
            </p>
          </div>

          <Link
            href="/places"
            className="inline-flex items-center gap-2 pb-1 text-sm text-[#c6a76a] hover:text-[#e4c991]"
          >
            View the archive
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place, index) => (
            <article
              key={place.name}
              className="group border border-white/10 bg-[#171813] transition hover:border-[#c6a76a]/40"
            >
              <Link href={`/places/${place.slug}`}>
                <div className="relative h-64 overflow-hidden bg-[#28291f]">
                  <div
                    role="img"
                    aria-label={`Landscape representing ${place.name}`}
                    className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    style={{ backgroundImage: `url("${place.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11120f] via-transparent to-black/10" />
                  <span className="absolute left-5 top-5 border border-white/20 bg-[#11120f]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">
                    {place.category}
                  </span>
                  <span className="absolute bottom-5 right-5 font-serif text-3xl text-white/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-[#a59b83]">
                    {place.location} · {place.period}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl">{place.name}</h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-[#c6a76a] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#aaa69b]">
                    {place.description}
                  </p>
                  <span className="mt-6 inline-block border-t border-white/10 pt-4 text-xs uppercase tracking-widest text-[#c6a76a]">
                    Read the field notes
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Browse by theme */}
      <section className="border-y border-white/10 bg-[#171813]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
            Follow a thread
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl">
            Choose your descent
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#aaa69b]">
            Some places disappear beneath the earth. Others disappear from
            memory. Explore the archive through its recurring mysteries.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {themes.map((theme) => (
              <Link
                key={theme.number}
                href={`/discover/${theme.slug}`}
                className="group flex min-h-64 flex-col border border-white/10 p-7 transition hover:border-[#c6a76a]/50 hover:bg-[#1d1e17]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-4xl text-[#c6a76a]/70">
                    {theme.symbol}
                  </span>
                  <span className="text-xs tracking-widest text-[#77776b]">
                    {theme.number}
                  </span>
                </div>
                <h3 className="mt-10 font-serif text-2xl">{theme.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#aaa69b]">
                  {theme.description}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-xs uppercase tracking-widest text-[#c6a76a]">
                  Explore collection
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <MagnifyingGlass
          size={32}
          weight="light"
          className="mx-auto mb-6 text-[#c6a76a]"
        />
        <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
          Your next discovery awaits
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          The past is not empty.
          <br />
          It is waiting to be found.
        </h2>
        <Link
          href="/atlas"
          className="mt-9 inline-flex items-center gap-3 border border-[#c6a76a]/50 px-6 py-3.5 text-sm transition hover:bg-[#c6a76a] hover:text-[#11120f]"
        >
          Enter the atlas
          <ArrowUpRight size={17} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-[#858176] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link href="/" className="font-serif text-base text-[#d7cebd]">
            Atlas of Lost Places
          </Link>
          <p>A living archive of places the world almost forgot.</p>
          <p>Built for the curious.</p>
        </div>
      </footer>
    </main>
  );
}
