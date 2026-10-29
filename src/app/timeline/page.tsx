import Link from "next/link";
import { places } from "@/data/places";

export default function TimelinePage() {
  const events = places
    .flatMap((place) =>
      place.timeline.map((event, index) => ({
        ...event,
        placeName: place.name,
        placeSlug: place.slug,
        placeLocation: place.location,
        eventId: `${place.slug}-${index}`,
      })),
    )
    .sort((a, b) => a.sortYear - b.sortYear);

  return (
    <main className="min-h-screen bg-[#171715] px-6 py-16 text-[#e8e0d0]">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-[#c6a76a] transition hover:text-[#e4c991]"
        >
          ← Back to the atlas
        </Link>

        <header className="mb-16 mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
            Chronological archive
          </p>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">The Timeline</h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa397]">
            Trace the events that shaped lost places, from their earliest
            settlements to their rediscovery by the modern world.
          </p>
        </header>

        <div className="relative ml-2 border-l border-[#62533a] sm:ml-4">
          {events.map((event) => (
            <article
              key={event.eventId}
              className="relative pb-12 pl-8 sm:pl-12"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-[#171715] bg-[#c6a76a] ring-4 ring-[#171715]"
              />

              <p className="text-sm font-medium tracking-wider text-[#c6a76a]">
                {event.year}
              </p>

              <h2 className="mt-2 font-serif text-2xl">{event.title}</h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#aaa397]">
                {event.description}
              </p>

              <Link
                href={`/places/${event.placeSlug}`}
                className="mt-4 inline-flex flex-wrap items-center gap-2 text-sm text-[#e8e0d0] transition hover:text-[#c6a76a]"
              >
                {event.placeName}
                <span aria-hidden="true">↗</span>
                <span className="text-[#817b70]">· {event.placeLocation}</span>
              </Link>
            </article>
          ))}
        </div>

        {events.length === 0 && (
          <p className="text-[#aaa397]">
            No timeline events have been added yet.
          </p>
        )}
      </div>
    </main>
  );
}
