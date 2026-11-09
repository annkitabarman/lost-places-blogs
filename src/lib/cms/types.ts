import type { LostPlace } from "@/data/places";

export type SanityPlace = {
  _id: string;
  name: string;
  slug: string;
  location: string;
  period?: string;
  category?: string;
  description: string;
  status?: string;
  coordinates?: {
    lat?: number;
    lng?: number;
  };
  overview?: string;
  history?: string[];
  discovery?: string;
  archaeologicalFindings?: string[];
  mysteries?: LostPlace["mysteries"];
  theme?: {
    title: string;
    slug: string;
    description?: string;
    symbol?: string;
  };
  civilizations?: {
    name: string;
    slug: string;
  }[];
  image?: string;
  sources?: LostPlace["sources"];
  timeline?: LostPlace["timeline"];
};

export type CMSPlace = LostPlace;
