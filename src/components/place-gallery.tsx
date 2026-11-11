"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ExternalImage } from "@/types/external-image";

type PlaceGalleryProps = {
  slug: string;
};

export default function PlaceGallery({ slug }: PlaceGalleryProps) {
  const [images, setImages] = useState<ExternalImage[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);
        setCurrentIndex(0);

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

  const changeImage = (direction: "next" | "previous") => {
    if (images.length <= 1 || isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((index) =>
        direction === "next"
          ? (index + 1) % images.length
          : (index - 1 + images.length) % images.length,
      );

      setIsTransitioning(false);
    }, 180);
  };

  const goToPrevious = () => changeImage("previous");
  const goToNext = () => changeImage("next");

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

  const currentImage = images[currentIndex];

  return (
    <div className="mt-10">
      {/* Main image */}
      <div className="relative overflow-hidden border border-white/10 bg-[#171813]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#202119]">
          <Image
            key={currentImage.id}
            src={currentImage.imageUrl}
            alt={currentImage.description || currentImage.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className={`object-cover transition-all duration-500 ease-in-out ${
              isTransitioning
                ? "scale-[1.02] opacity-0"
                : "scale-100 opacity-100"
            }`}
          />

          {/* Previous button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white backdrop-blur-sm transition hover:bg-black/90"
            >
              ‹
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white backdrop-blur-sm transition hover:bg-black/90"
            >
              ›
            </button>
          )}
        </div>
      </div>

      {/* Image information */}
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="font-serif text-2xl leading-snug">
            {currentImage.title}
          </h3>

          {currentImage.description && (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#aaa69b]">
              {currentImage.description}
            </p>
          )}

          {currentImage.artist && (
            <p className="mt-3 text-xs text-[#858176]">
              Creator: {currentImage.artist}
            </p>
          )}

          {currentImage.license && (
            <p className="mt-1 text-xs text-[#858176]">
              Licence: {currentImage.license}
            </p>
          )}

          <a
            href={currentImage.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs text-[#c6a76a] hover:text-[#e4c991]"
          >
            View original on Wikimedia ↗
          </a>
        </div>

        {/* Image counter */}
        <div className="shrink-0 text-sm text-[#aaa69b] tabular-nums">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>
      </div>

      {/* Navigation progress */}
      {images.length > 1 && (
        <div className="mt-6 flex gap-1">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => {
                if (isTransitioning || index === currentIndex) return;

                setIsTransitioning(true);

                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 180);
              }}
              aria-label={`Go to image ${index + 1}`}
              className={`h-1 flex-1 transition-colors ${
                index === currentIndex
                  ? "bg-[#c6a76a]"
                  : "bg-white/15 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
