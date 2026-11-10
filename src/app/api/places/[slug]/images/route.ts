import { NextResponse } from "next/server";
import { getPlaceBySlug } from "@/lib/cms/sanity";
import { searchWikimediaImages } from "@/lib/images/wikimedia";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);

    const requestedLimit = Number(searchParams.get("limit") ?? 12);
    const limit = Number.isFinite(requestedLimit)
      ? Math.min(Math.max(requestedLimit, 1), 30)
      : 12;

    const place = await getPlaceBySlug(slug);

    if (!place) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    const searchTerm = `${place.name} ${place.location}`;

    const images = await searchWikimediaImages(searchTerm, limit);

    return NextResponse.json({
      place: place.name,
      total: images.length,
      images,
    });
  } catch (error) {
    console.error("Failed to fetch Wikimedia images:", error);

    return NextResponse.json(
      { error: "Unable to fetch gallery images" },
      { status: 500 },
    );
  }
}
