import { defineQuery } from "next-sanity";

export const allPlacesQuery = defineQuery(`
  *[_type == "lostPlace"] {
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
    },

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
  *[_type == "lostPlace" && slug.current == $slug][0] {
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
    },

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
