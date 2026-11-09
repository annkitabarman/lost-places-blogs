import type { LostPlace } from "@/data/places";
import type { SanityPlace } from "./types";

export function normalizePlace(place: SanityPlace): LostPlace {
  return {
    slug: place.slug,
    name: place.name,
    location: place.location,
    period: place.period ?? "",
    category: place.category ?? "",
    themeSlug: place.theme?.slug ?? "",
    description: place.description,
    image: place.image ?? "",
    coordinates: {
      lat: place.coordinates?.lat ?? 0,
      lng: place.coordinates?.lng ?? 0,
    },

    civilization:
      place.civilizations?.map((item) => item.name).join(", ") ?? "",

    status: place.status ?? "",
    overview: place.overview ?? "",
    history: place.history ?? [],
    discovery: place.discovery ?? "",
    archaeologicalFindings: place.archaeologicalFindings ?? [],
    mysteries: place.mysteries ?? [],
    timeline: place.timeline ?? [],
    sources: place.sources ?? [],
  };
}
