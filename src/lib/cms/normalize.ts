import type { LostPlace } from "@/data/places";
import type { SanityPlace } from "./types";
import { urlFor } from "@/sanity/lib/image";

export function normalizePlace(place: SanityPlace): LostPlace {
  return {
    slug: place.slug,
    name: place.name,
    location: place.location,
    period: place.period ?? "",
    category: place.category ?? "",
    themeSlug: place.theme?.slug ?? "",
    description: place.description,
    image: place.image
      ? urlFor(place.image).width(1600).auto("format").url()
      : "",
    coordinates: {
      lat: place.coordinates?.lat ?? 0,
      lng: place.coordinates?.lng ?? 0,
    },

    civilization:
      place.civilizations?.map((item) => item.name).join(", ") ?? "",

    status: place.status ?? "",
    overview: place.overview ?? "",
    discovery: place.discovery ?? "",
    articleBody: place.articleBody ?? [],
    archaeologicalFindings: place.archaeologicalFindings ?? [],
    mysteries: place.mysteries ?? [],
    timeline: place.timeline ?? [],
    sources: place.sources ?? [],
  };
}
