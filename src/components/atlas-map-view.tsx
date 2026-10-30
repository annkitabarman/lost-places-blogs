"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import { MagnifyingGlassIcon } from "@/components/icons";
import { places } from "@/data/places";
import type { LostPlace } from "@/data/places";
import { LatLngBounds } from "leaflet";

type MapControllerProps = {
  selectedPlace: LostPlace | null;
  resetMap: boolean;
  fitAll: boolean;
  onResetComplete: () => void;
  onFitComplete: () => void;
};

function MapController({
  selectedPlace,
  resetMap,
  fitAll,
  onResetComplete,
  onFitComplete,
}: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (resetMap) {
      map.flyTo([20, 10], 2, { duration: 1.2 });
      onResetComplete();
      return;
    }

    if (fitAll && places.length > 0) {
      const bounds = new LatLngBounds(
        places.map((place) => [place.coordinates.lat, place.coordinates.lng]),
      );

      map.flyToBounds(bounds, {
        padding: [40, 40],
        maxZoom: 5,
        duration: 1.2,
      });

      onFitComplete();
      return;
    }

    if (selectedPlace) {
      map.flyTo(
        [selectedPlace.coordinates.lat, selectedPlace.coordinates.lng],
        Math.max(map.getZoom(), 6),
        { duration: 1.2 },
      );
    }
  }, [map, selectedPlace, resetMap, fitAll, onResetComplete, onFitComplete]);

  return null;
}

export default function AtlasMapView() {
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [resetMap, setResetMap] = useState(false);
  const [fitAll, setFitAll] = useState(false);

  const handleFitComplete = () => {
    setFitAll(false);
  };

  const filteredPlaces = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return places.filter((place) =>
      [
        place.name,
        place.location,
        place.period,
        place.category,
        place.description,
      ].some((value) => value.toLowerCase().includes(searchTerm)),
    );
  }, [query]);

  const selectedPlace =
    places.find((place) => place.slug === selectedSlug) ?? null;

  const handleResetComplete = () => {
    setResetMap(false);
  };

  function selectPlace(place: LostPlace) {
    setSelectedSlug(place.slug);
  }

  return (
    <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
      {/* Searchable place index */}
      <aside className="border-b border-white/10 bg-[#171813] lg:border-b-0 lg:border-r">
        <div className="border-b border-white/10 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c6a76a]">
            The archive
          </p>

          <h2 className="mt-2 font-serif text-2xl">Find a lost place</h2>

          <label className="mt-5 flex items-center gap-3 border border-white/15 px-3 py-3 focus-within:border-[#c6a76a]">
            <MagnifyingGlassIcon
              size={19}
              className="shrink-0 text-[#c6a76a]"
            />

            <span className="sr-only">Search the atlas</span>

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search places, eras..."
              className="w-full bg-transparent text-sm text-[#e9e2d2] outline-none placeholder:text-[#77776b]"
            />
          </label>

          <p className="mt-3 text-xs text-[#858176]" aria-live="polite">
            {filteredPlaces.length}{" "}
            {filteredPlaces.length === 1 ? "entry" : "entries"} found
          </p>
        </div>

        <div className="max-h-[350px] overflow-y-auto lg:max-h-[550px]">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <button
                key={place.slug}
                type="button"
                onClick={() => selectPlace(place)}
                aria-pressed={selectedSlug === place.slug}
                className={`w-full border-b border-white/10 p-5 text-left transition hover:bg-white/[0.04] focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-[-2px]
focus-visible:outline-[#c6a76a] ${
                  selectedSlug === place.slug
                    ? "border-l-2 border-l-[#c6a76a] bg-white/[0.04]"
                    : "border-l-2 border-l-transparent"
                }`}
              >
                <span className="block text-xs uppercase tracking-widest text-[#a59b83]">
                  {place.category}
                </span>

                <span className="mt-2 block font-serif text-xl text-[#e9e2d2]">
                  {place.name}
                </span>

                <span className="mt-1 block text-sm text-[#aaa69b]">
                  {place.location}
                </span>

                <span className="mt-2 block text-xs text-[#858176]">
                  {place.period}
                </span>
              </button>
            ))
          ) : (
            <div className="p-6">
              <p className="font-serif text-lg">No entries found</p>
              <p className="mt-2 text-sm leading-6 text-[#aaa69b]">
                Try a different name, location, era, or category.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-4 text-sm text-[#c6a76a] underline underline-offset-4"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Interactive map */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#171813] px-4 py-3">
          <p className="text-xs uppercase tracking-widest text-[#aaa69b]">
            World view
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedSlug(null);
                setFitAll(true);
                setResetMap(false);
              }}
              className="border border-[#c6a76a]/40 px-4 py-2 text-xs uppercase tracking-widest text-[#c6a76a] transition hover:bg-[#c6a76a] hover:text-[#11120f]"
            >
              Fit all markers
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedSlug(null);
                setFitAll(false);
                setResetMap(true);
              }}
              className="border border-[#c6a76a]/40 px-4 py-2 text-xs uppercase tracking-widest text-[#c6a76a] transition hover:bg-[#c6a76a] hover:text-[#11120f]"
            >
              Reset map ↺
            </button>
          </div>
        </div>

        <MapContainer
          center={[20, 10]}
          zoom={2}
          minZoom={2}
          scrollWheelZoom
          className="h-[500px] w-full bg-[#171813] lg:h-[650px]"
          style={{ background: "#171813" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController
            selectedPlace={selectedPlace}
            resetMap={resetMap}
            fitAll={fitAll}
            onResetComplete={handleResetComplete}
            onFitComplete={handleFitComplete}
          />

          {places.map((place) => (
            <CircleMarker
              key={place.slug}
              center={[place.coordinates.lat, place.coordinates.lng]}
              radius={selectedSlug === place.slug ? 10 : 7}
              pathOptions={{
                color: "#11120f",
                weight: 2,
                fillColor: "#c6a76a",
                fillOpacity: 1,
              }}
              eventHandlers={{
                click: () => selectPlace(place),
              }}
            >
              <Popup>
                <div className="min-w-40">
                  <p className="font-serif text-lg">{place.name}</p>
                  <p className="mt-1 text-sm">{place.location}</p>
                  <p className="mt-1 text-xs">{place.period}</p>
                  <Link
                    href={`/places/${place.slug}`}
                    className="mt-3 inline-block text-sm font-medium"
                  >
                    Explore this place →
                  </Link>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>

        {/* Selected place details */}
        <div
          className="border-t border-white/10 bg-[#171813] p-5 sm:p-7"
          aria-live="polite"
        >
          {selectedPlace ? (
            <>
              <p className="text-xs uppercase tracking-[0.25em] text-[#c6a76a]">
                Selected entry
              </p>

              <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-3xl">{selectedPlace.name}</h2>
                  <p className="mt-2 text-sm text-[#aaa69b]">
                    {selectedPlace.location} · {selectedPlace.period}
                  </p>
                </div>

                <Link
                  href={`/places/${selectedPlace.slug}`}
                  className="border border-[#c6a76a]/50 px-4 py-3 text-xs uppercase tracking-widest text-[#c6a76a] transition hover:bg-[#c6a76a] hover:text-[#11120f]"
                >
                  Read field notes ↗
                </Link>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#aaa69b]">
                {selectedPlace.description}
              </p>
            </>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.25em] text-[#c6a76a]">
                Geographic index
              </p>
              <h2 className="mt-2 font-serif text-2xl">
                Every marker holds a story.
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#aaa69b]">
                Select an entry from the archive or click a map marker to
                explore a place lost to time.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
