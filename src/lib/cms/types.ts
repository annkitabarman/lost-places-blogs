import type { LostPlace } from "@/data/places";
import type { PortableTextBlock } from "@portabletext/types";

export type SanityArticleImage = {
  _type: "image";
  _key: string;
  url?: string;
  alt?: string;
};

export type SanityArticleContent = (PortableTextBlock | SanityArticleImage)[];
export type SanityRichText = PortableTextBlock[];

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
  discovery?: string | SanityRichText;
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
  image?: SanityImage;
  sources?: LostPlace["sources"];
  timeline?: LostPlace["timeline"];
  articleBody?: SanityArticleContent;
};

export type SanityTheme = {
  _id: string;
  title: string;
  slug: string;
  number: string;
  description: string;
  symbol: string;
};

export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  url?: string;
  metadata?: {
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    lqip?: string;
    palette?: {
      dominant?: {
        background?: string;
        foreground?: string;
      };
    };
  };
};

export type CMSPlace = LostPlace;
