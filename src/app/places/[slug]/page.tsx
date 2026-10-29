import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CompassIcon,
} from "@/components/icons";
import { places } from "@/data/places";

type PlacePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = places.find((item) => item.slug === slug);

  if (!place) {
    return { title: "Place not found | Atlas of Lost Places" };
  }

  return {
    title: `${place.name} | Atlas of Lost Places`,
    description: place.overview,
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = places.find((item) => item.slug === slug);

  if (!place) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#11120f] text-[#e9e2d2]">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <CompassIcon size={28} weight="light" className="text-[#c6a76a]" />
            <span className="font-serif text-lg">Atlas of Lost Places</span>
          </Link>

          <Link
            href="/atlas"
            className="text-sm text-[#aaa69b] transition hover:text-[#c6a76a]"
          >
            Explore atlas ↗
          </Link>
        </nav>
      </header>

      {/* Article header */}
      <article>
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
          <Link
            href="/places"
            className="inline-flex items-center gap-2 text-sm text-[#aaa69b] transition hover:text-[#c6a76a]"
          >
            <ArrowLeftIcon size={17} />
            Browse the archive
          </Link>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                {place.category} · Field record
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-[1.1] sm:text-7xl lg:text-8xl">
                {place.name}
              </h1>

              <p className="mt-6 text-sm tracking-wide text-[#aaa69b]">
                {place.location} <span className="mx-2 text-[#c6a76a]">/</span>
                {place.period}
              </p>

              <p className="mt-7 max-w-3xl font-serif text-xl leading-9 text-[#c9c1b1] sm:text-2xl">
                {place.overview}
              </p>
            </div>

            <aside className="border-l border-[#c6a76a]/40 pl-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#858176]">
                Civilization
              </p>
              <p className="mt-2 font-serif text-xl">{place.civilization}</p>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#858176]">
                Present status
              </p>
              <p className="mt-2 text-sm text-[#c9c1b1]">{place.status}</p>
            </aside>
          </div>

          {/* Hero image */}
          <div
            role="img"
            aria-label={`Landscape representing ${place.name}`}
            className="relative mt-12 h-[300px] overflow-hidden border border-white/10 bg-[#202119] bg-cover bg-center sm:h-[440px] lg:h-[540px]"
            style={{ backgroundImage: `url("${place.image}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#11120f]/70 via-transparent to-black/10" />

            <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-white/80">
              {place.location}
            </p>
          </div>
        </section>

        {/* Article contents navigation */}
        <nav
          aria-label="On this page"
          className="border-y border-white/10 bg-[#171813]"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-3 px-6 py-5 text-xs uppercase tracking-widest text-[#aaa69b] lg:px-10">
            <a href="#history" className="transition hover:text-[#c6a76a]">
              History
            </a>
            <a href="#evidence" className="transition hover:text-[#c6a76a]">
              Evidence
            </a>
            <a href="#unresolved" className="transition hover:text-[#c6a76a]">
              The unresolved
            </a>
            <a href="#timeline" className="transition hover:text-[#c6a76a]">
              Timeline
            </a>
            <a href="#sources" className="transition hover:text-[#c6a76a]">
              Sources
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:px-10 lg:py-20">
          {/* Main article */}
          <div className="min-w-0">
            {/* History */}
            <section id="history" className="scroll-mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                01 / The historical record
              </p>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                The story of {place.name}
              </h2>

              <div className="mt-8 space-y-6">
                {place.history.map((paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.slice(0, 20)}`}
                    className="text-base leading-8 text-[#b9b3a6]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Discovery */}
            <section className="mt-16 border-t border-white/10 pt-12">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                02 / Rediscovery
              </p>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                Beneath the surface
              </h2>

              <p className="mt-6 text-base leading-8 text-[#b9b3a6]">
                {place.discovery}
              </p>
            </section>

            {/* Archaeological evidence */}
            <section
              id="evidence"
              className="mt-16 scroll-mt-8 border-t border-white/10 pt-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                03 / Material evidence
              </p>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                What remains
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#aaa69b]">
                Physical remains offer a way to reconstruct the past. These
                findings help researchers understand the place beyond legend and
                speculation.
              </p>

              <div className="mt-8 space-y-0">
                {place.archaeologicalFindings.map((finding, index) => (
                  <div
                    key={finding}
                    className="flex gap-5 border-t border-white/10 py-5"
                  >
                    <span className="pt-1 font-serif text-lg text-[#c6a76a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-[#b9b3a6]">
                      {finding}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mysteries */}
            <section
              id="unresolved"
              className="relative mt-20 scroll-mt-8 overflow-hidden border border-[#c6a76a]/20 bg-[#171813] p-6 sm:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#c6a76a]/[0.04] blur-3xl"
              />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                  04 / Questions without easy answers
                </p>

                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                  The Unresolved
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aaa69b]">
                  History leaves gaps. Here, unanswered questions sit alongside
                  the evidence available to investigate them. An unresolved
                  question is not, by itself, evidence of something
                  supernatural.
                </p>

                <div className="mt-10 space-y-5">
                  {place.mysteries.map((mystery, index) => (
                    <section
                      key={mystery.title}
                      className="border-t border-white/10 pt-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="font-serif text-2xl">
                          <span className="mr-3 text-[#c6a76a]">
                            0{index + 1}
                          </span>
                          {mystery.title}
                        </h3>

                        <span className="border border-[#c6a76a]/30 px-3 py-1 text-[10px] uppercase tracking-widest text-[#c6a76a]">
                          {mystery.status}
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-[#b9b3a6]">
                        {mystery.description}
                      </p>

                      <div className="mt-5 border-l-2 border-[#c6a76a]/40 pl-4">
                        <p className="text-xs uppercase tracking-widest text-[#858176]">
                          What the evidence tells us
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#aaa69b]">
                          {mystery.evidence}
                        </p>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section
              id="timeline"
              className="mt-20 scroll-mt-8 border-t border-white/10 pt-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                05 / Passage of time
              </p>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                A brief chronology
              </h2>

              <div className="relative mt-10 space-y-0">
                {place.timeline.map((event, index) => (
                  <div
                    key={`${event.year}-${event.title}`}
                    className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-5 pb-10 last:pb-0"
                  >
                    <div className="relative flex justify-center">
                      {index !== place.timeline.length - 1 && (
                        <div className="absolute bottom-[-2px] top-2 w-px bg-white/10" />
                      )}
                      <div className="relative mt-1.5 h-2.5 w-2.5 rounded-full border border-[#c6a76a] bg-[#11120f]" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#c6a76a]">
                        {event.year}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#aaa69b]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sources */}
            <section
              id="sources"
              className="mt-20 scroll-mt-8 border-t border-white/10 pt-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
                06 / Further reading
              </p>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                Sources & records
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#aaa69b]">
                Explore these references to learn more about the site and
                examine the historical record.
              </p>

              <div className="mt-8 space-y-0">
                {place.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-5 border-t border-white/10 py-5 transition hover:border-[#c6a76a]/40"
                  >
                    <div>
                      <p className="text-xs text-[#858176]">
                        {source.publisher}
                      </p>
                      <h3 className="mt-2 font-serif text-xl transition group-hover:text-[#c6a76a]">
                        {source.title}
                      </h3>
                    </div>

                    <ArrowUpRightIcon
                      size={20}
                      className="shrink-0 text-[#c6a76a]"
                    />
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Field record sidebar */}
          <aside className="h-fit border border-white/10 bg-[#171813] p-6 lg:sticky lg:top-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c6a76a]">
              Field record
            </p>

            <h2 className="mt-3 font-serif text-2xl">At a glance</h2>

            <dl className="mt-7 space-y-6 text-sm">
              <div>
                <dt className="text-[#858176]">Location</dt>
                <dd className="mt-1 leading-6">{place.location}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Historical period</dt>
                <dd className="mt-1 leading-6">{place.period}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Civilization</dt>
                <dd className="mt-1 leading-6">{place.civilization}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Classification</dt>
                <dd className="mt-1 leading-6">{place.category}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Present status</dt>
                <dd className="mt-1 leading-6">{place.status}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Coordinates</dt>
                <dd className="mt-1 tabular-nums">
                  {place.coordinates.lat}, {place.coordinates.lng}
                </dd>
              </div>
            </dl>

            <a
              href={`https://www.openstreetmap.org/?mlat=${place.coordinates.lat}&mlon=${place.coordinates.lng}#map=12/${place.coordinates.lat}/${place.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm text-[#c6a76a] transition hover:text-[#e4c991]"
            >
              View coordinates on map
              <ArrowUpRightIcon size={17} />
            </a>

            <Link
              href="/atlas"
              className="mt-5 flex items-center justify-between gap-3 border border-[#c6a76a]/40 px-4 py-3 text-xs uppercase tracking-widest text-[#c6a76a] transition hover:bg-[#c6a76a] hover:text-[#11120f]"
            >
              Explore the atlas
              <ArrowUpRightIcon size={16} />
            </Link>
          </aside>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs text-[#858176]">
          <Link href="/" className="transition hover:text-[#c6a76a]">
            Atlas of Lost Places
          </Link>
          <p>A living archive of places the world almost forgot.</p>
        </div>
      </footer>
    </main>
  );
}
