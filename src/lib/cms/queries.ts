import { defineQuery } from "next-sanity";

export const allPlacesQuery = defineQuery(`
  *[_type == "lostPlace" && defined(slug.current)] {
    _id,
    name,
    "slug": slug.current,
    location,
    period,
    category,
    description,
    status,
    coordinates,
    overview,
    history,
    discovery,
    archaeologicalFindings,
    mysteries,

    "theme": theme->{
      title,
      "slug": slug.current,
      description,
      symbol
    },

    "civilizations": civilizations[]->{
      name,
      "slug": slug.current
    },

    "image": heroImage.asset->url,

    "sources": sources[]->{
      title,
      publisher,
      url
    },

   "timeline": timeline[]->{
  year,
  title,
  description,
  sortYear,
  "type": eventType
} | order(sortYear asc),

    gallery[]{
      title,
      mediaType,
      creator,
      sourceName,
      sourceUrl,
      license,
      attribution,
      caption,
      "image": image.asset->url
    },

    articleBody
  }
`);

export const placeBySlugQuery = defineQuery(`
  *[_type == "lostPlace" && defined(slug.current) && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    location,
    period,
    category,
    description,
    status,
    coordinates,
    overview,
    history,
    discovery,
    archaeologicalFindings,
    mysteries,

    "theme": theme->{
      title,
      "slug": slug.current,
      description,
      symbol
    },

    "civilizations": civilizations[]->{
      name,
      "slug": slug.current
    },

    "image": heroImage.asset->url,

    "sources": sources[]->{
      title,
      publisher,
      url
    },

   "timeline": timeline[]->{
  year,
  title,
  description,
  sortYear,
  "type": eventType
} | order(sortYear asc),

    gallery[]{
      title,
      mediaType,
      creator,
      sourceName,
      sourceUrl,
      license,
      attribution,
      caption,
      "image": image.asset->url
    },

    articleBody
  }
`);

export const allThemesQuery = defineQuery(`
  *[_type == "theme"] | order(number asc) {
    _id,
    title,
    "slug": slug.current,
    number,
    description,
    symbol
  }
`);

export const themeBySlugQuery = defineQuery(`
  *[_type == "theme" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    number,
    description,
    symbol
  }
`);
