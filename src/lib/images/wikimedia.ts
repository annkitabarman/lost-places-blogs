import type { ExternalImage } from "@/types/external-image";

const WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php";

type WikimediaPage = {
  pageid: number;
  title: string;
  imageinfo?: {
    url: string;
    thumburl?: string;
    width?: number;
    height?: number;
    descriptionurl?: string;
    extmetadata?: Record<
      string,
      {
        value?: string;
        source?: string;
      }
    >;
  }[];
};

type WikimediaResponse = {
  query?: {
    pages?: WikimediaPage[];
  };
};

function getMetadata(
  metadata: Record<string, { value?: string; source?: string }> | undefined,
  key: string,
): string | undefined {
  return cleanMetadata(metadata?.[key]?.value);
}

function cleanMetadata(value?: string): string | undefined {
  if (!value) return undefined;

  return (
    value
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
      .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
        String.fromCodePoint(parseInt(code, 16)),
      )
      .replace(/\s+/g, " ")
      .trim() || undefined
  );
}

function cleanImageTitle(title: string): string {
  return title
    .replace(/^File:/i, "")
    .replace(/\.[a-z0-9]{2,5}$/i, "")
    .replace(/_/g, " ")
    .replace(/\s+-\s+/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanDescription(value?: string): string | undefined {
  const description = cleanMetadata(value);

  if (!description) return undefined;

  // Hide catalogue-style descriptions containing bibliographic metadata.
  if (
    /\b(identifier|authors|publisher|publication|subjects|catalogue)\s*:/i.test(
      description,
    )
  ) {
    return undefined;
  }

  // Avoid excessively long descriptions.
  if (description.length > 220) {
    return `${description.slice(0, 217).trimEnd()}...`;
  }

  return description;
}

async function fetchWikimediaImages(
  searchTerm: string,
  limit: number,
): Promise<ExternalImage[]> {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `filetype:bitmap ${searchTerm}`,
    gsrnamespace: "6",
    gsrlimit: String(limit),
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "1000",
    format: "json",
    formatversion: "2",
  });

  const response = await fetch(`${WIKIMEDIA_API}?${params.toString()}`, {
    headers: {
      "User-Agent": "AtlasOfLostPlaces/1.0 (Next.js image gallery)",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Wikimedia API error: ${response.status}`);
  }

  const data = (await response.json()) as WikimediaResponse;
  const pages = data.query?.pages ?? [];

  return pages.flatMap((page) => {
    const info = page.imageinfo?.[0];

    if (!info?.url || !info.thumburl) return [];

    const metadata = info.extmetadata;

    return [
      {
        id: page.pageid,
        title: cleanImageTitle(page.title),
        imageUrl: info.url,
        thumbnailUrl: info.thumburl,
        pageUrl:
          info.descriptionurl ??
          `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
        description: cleanDescription(
          getMetadata(metadata, "ImageDescription"),
        ),
        artist: getMetadata(metadata, "Artist"),
        credit: getMetadata(metadata, "Credit"),
        license: getMetadata(metadata, "LicenseShortName"),
        licenseUrl: getMetadata(metadata, "LicenseUrl"),
        width: info.width,
        height: info.height,
      },
    ];
  });
}

export async function searchWikimediaImages(
  searchTerm: string,
  limit = 12,
): Promise<ExternalImage[]> {
  const safeLimit = Math.min(Math.max(limit, 1), 30);

  const searchQueries = [
    `${searchTerm} archaeological site`,
    `${searchTerm} architecture ruins`,
    `${searchTerm} artefacts museum`,
    `${searchTerm} frescoes mosaics`,
  ];

  const results = await Promise.all(
    searchQueries.map((query) => fetchWikimediaImages(query, 8)),
  );

  // Merge results and remove duplicate files.
  const uniqueImages = new Map<number, ExternalImage>();

  for (const group of results) {
    for (const image of group) {
      if (!uniqueImages.has(image.id)) {
        uniqueImages.set(image.id, image);
      }
    }
  }

  return Array.from(uniqueImages.values()).slice(0, safeLimit);
}
