"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ExternalImage } from "@/types/external-image";

type PlaceGalleryProps = {
  slug: string;
};

export default function PlaceGallery({ slug }: PlaceGalleryProps) {
  const [images, setImages] = useState<ExternalImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/places/${encodeURIComponent(slug)}/images`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load gallery images.");
        }

        const data: { images: ExternalImage[] } = await response.json();
        setImages(data.images ?? []);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchImages();

    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return (
      <p className="mt-8 text-sm text-[#aaa69b]">
        Searching the historical image archives...
      </p>
    );
  }

  if (error) {
    return <p className="mt-8 text-sm text-[#aaa69b]">{error}</p>;
  }

  if (images.length === 0) {
    return (
      <p className="mt-8 text-sm text-[#aaa69b]">
        No gallery images found for this place.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {images.map((image) => (
        <figure
          key={image.id}
          className="overflow-hidden border border-white/10 bg-[#171813]"
        >
          <a
            href={image.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative aspect-[4/3] bg-[#202119]">
              <Image
                src={image.thumbnailUrl}
                alt={image.description || image.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </a>

          <figcaption className="p-5">
            <h3 className="font-serif text-xl leading-snug">{image.title}</h3>

            {image.description && (
              <p className="mt-2 text-sm leading-6 text-[#aaa69b]">
                {image.description}
              </p>
            )}

            {image.artist && (
              <p className="mt-3 text-xs text-[#858176]">
                Creator: {image.artist}
              </p>
            )}

            {image.license && (
              <p className="mt-2 text-xs text-[#858176]">
                Licence: {image.license}
              </p>
            )}

            <a
              href={image.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-[#c6a76a] hover:text-[#e4c991]"
            >
              View original on Wikimedia ↗
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
