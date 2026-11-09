import { client } from "@/sanity/lib/client";
import { allPlacesQuery, placeBySlugQuery } from "./queries";
import { normalizePlace } from "./normalize";
import type { SanityPlace } from "./types";

export async function getPlaces() {
  const places = await client.fetch(allPlacesQuery);

  return (places as SanityPlace[]).map(normalizePlace);
}

export async function getPlaceBySlug(slug: string) {
  const place = await client.fetch(placeBySlugQuery, { slug });

  return place ? normalizePlace(place as SanityPlace) : null;
}
