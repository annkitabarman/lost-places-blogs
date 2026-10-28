"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@/components/icons";
import { places } from "@/data/places";
import PlaceCard from "@/components/place-card";

export default function PlaceArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(places.map((place) => place.category))];

  const filteredPlaces = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return places.filter((place) => {
      const matchesSearch =
        place.name.toLowerCase().includes(searchTerm) ||
        place.location.toLowerCase().includes(searchTerm) ||
        place.description.toLowerCase().includes(searchTerm);

      const matchesCategory = category === "All" || place.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto]">
        <label className="flex items-center gap-3 border border-white/15 bg-[#171813] px-4 py-3 focus-within:border-[#c6a76a]">
          <MagnifyingGlassIcon
            size={20}
            weight="light"
            className="text-[#c6a76a]"
          />

          <span className="sr-only">Search places</span>

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by place or location..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#77776b]"
          />
        </label>

        <label className="flex items-center gap-3 border border-white/15 bg-[#171813] px-4 py-3">
          <span className="text-xs uppercase tracking-widest text-[#aaa69b]">
            Category
          </span>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="max-w-48 bg-[#171813] text-sm outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-[#858176]" aria-live="polite">
        Showing {filteredPlaces.length}{" "}
        {filteredPlaces.length === 1 ? "place" : "places"}
      </p>

      {filteredPlaces.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlaces.map((place, index) => (
            <PlaceCard key={place.slug} place={place} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-white/10 p-10 text-center">
          <h2 className="font-serif text-2xl">No places found</h2>
          <p className="mt-3 text-sm text-[#aaa69b]">
            Try another search term or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-5 border border-[#c6a76a]/50 px-5 py-2 text-sm text-[#c6a76a] hover:bg-[#c6a76a] hover:text-[#11120f]"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
