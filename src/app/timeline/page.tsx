"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { places } from "@/data/places";
import type { TimelineEvent } from "@/data/places";

type EventType = TimelineEvent["type"];

const filters: { label: string; value: EventType | "all" }[] = [
  { label: "All events", value: "all" },
  { label: "Settlements", value: "settlement" },
  { label: "Disasters", value: "disaster" },
  { label: "Abandonments", value: "abandonment" },
  { label: "Rediscoveries", value: "rediscovery" },
  { label: "Excavations", value: "excavation" },
];

export default function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState<EventType | "all">("all");

  const events = useMemo(() => {
    return places
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
  }, []);

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.type === activeFilter);

  return (
    <main className="min-h-screen bg-[#171715] px-6 py-16 text-[#e8e0d0]">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-[#c6a76a] transition hover:text-[#e4c991]"
        >
          ← Back to the atlas
        </Link>

        <header className="mb-12 mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
            Chronological archive
          </p>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">The Timeline</h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa397]">
            Trace the events that shaped lost places, from their earliest
            settlements to their rediscovery by the modern world.
          </p>
        </header>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={`border px-4 py-2 text-xs uppercase tracking-widest transition ${
                  activeFilter === filter.value
                    ? "border-[#c6a76a] bg-[#c6a76a] text-[#171715]"
                    : "border-white/15 text-[#aaa397] hover:border-[#c6a76a] hover:text-[#c6a76a]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#858176]" aria-live="polite">
            Showing {filteredEvents.length} of {events.length} events
          </p>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="relative ml-2 border-l border-[#62533a] sm:ml-4">
            {filteredEvents.map((event) => (
              <article
                key={event.eventId}
                className="relative pb-12 pl-8 sm:pl-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-[#171715] bg-[#c6a76a] ring-4 ring-[#171715]"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-medium tracking-wider text-[#c6a76a]">
                    {event.year}
                  </p>

                  <span className="rounded-full border border-[#62533a] px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#aaa397]">
                    {event.type}
                  </span>
                </div>

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
                  <span className="text-[#817b70]">
                    · {event.placeLocation}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-[#aaa397]">
            No events in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
