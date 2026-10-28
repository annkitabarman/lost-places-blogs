import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CompassIcon,
} from "@/components/icons";
import { places } from "@/data/places";

type PlacePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = places.find((item) => item.slug === slug);

  if (!place) {
    return { title: "Place not found | Atlas of Lost Places" };
  }

  return {
    title: `${place.name} | Atlas of Lost Places`,
    description: place.description,
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = places.find((item) => item.slug === slug);

  if (!place) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#11120f] text-[#e9e2d2]">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <CompassIcon size={28} weight="light" className="text-[#c6a76a]" />
            <span className="font-serif text-lg">Atlas of Lost Places</span>
          </Link>

          <Link
            href="/places"
            className="text-sm text-[#c6a76a] hover:text-[#e4c991]"
          >
            Browse archive
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#aaa69b] hover:text-[#c6a76a]"
        >
          <ArrowLeftIcon size={17} />
          Back to the atlas
        </Link>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
            {place.category}
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-7xl">
            {place.name}
          </h1>

          <p className="mt-5 text-sm tracking-wide text-[#aaa69b]">
            {place.location} · {place.period}
          </p>
        </div>

        <div
          role="img"
          aria-label={`Landscape representing ${place.name}`}
          className="mt-10 h-72 border border-white/10 bg-cover bg-center sm:h-[460px]"
          style={{ backgroundImage: `url("${place.image}")` }}
        />

        <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl">The remains of a story</h2>

            <p className="mt-5 text-base leading-8 text-[#b9b3a6]">
              {place.description}
            </p>

            <p className="mt-5 text-base leading-8 text-[#b9b3a6]">
              This entry is part of our growing archive of places shaped by
              time, changing landscapes, and human history. As the archive
              develops, this page will bring together historical context,
              archaeological evidence, maps, and further reading.
            </p>
          </div>

          <aside className="h-fit border border-white/10 bg-[#171813] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c6a76a]">
              Field record
            </p>

            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-[#858176]">Location</dt>
                <dd className="mt-1">{place.location}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Historical period</dt>
                <dd className="mt-1">{place.period}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Classification</dt>
                <dd className="mt-1">{place.category}</dd>
              </div>

              <div>
                <dt className="text-[#858176]">Coordinates</dt>
                <dd className="mt-1">
                  {place.coordinates.lat}, {place.coordinates.lng}
                </dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-white/10 pt-5">
              <Link
                href="/atlas"
                className="inline-flex items-center gap-2 text-sm text-[#c6a76a] hover:text-[#e4c991]"
              >
                Explore the atlas
                <ArrowUpRightIcon size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
