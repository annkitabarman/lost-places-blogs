import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceCard from "@/components/place-card";
import { places, themes } from "@/data/places";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return themes.map((theme) => ({
    slug: theme.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const theme = themes.find((item) => item.slug === slug);

  if (!theme) {
    return { title: "Theme Not Found | Atlas of Lost Places" };
  }

  return {
    title: `${theme.title} | Atlas of Lost Places`,
    description: theme.description,
  };
}

export default async function DiscoveryPage({ params }: Props) {
  const { slug } = await params;
  const theme = themes.find((item) => item.slug === slug);

  if (!theme) {
    notFound();
  }

  const themePlaces = places.filter((place) => place.themeSlug === theme.slug);

  return (
    <main className="min-h-screen bg-[#11110f] text-[#e8e0d0]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <Link
          href="/discover"
          className="text-sm text-[#aaa397] transition hover:text-[#c6a76a]"
        >
          ← All collections
        </Link>

        <section className="border-b border-[#39352d] py-16 md:py-24">
          <p className="mb-5 text-sm tracking-[0.3em] text-[#c6a76a]">
            COLLECTION {theme.number}
          </p>

          <div className="mb-6 flex items-start gap-5">
            <span className="text-4xl text-[#c6a76a]" aria-hidden="true">
              {theme.symbol}
            </span>

            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              {theme.title}
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#aaa397]">
            {theme.description}
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#777166]">
            {themePlaces.length} {themePlaces.length === 1 ? "place" : "places"}{" "}
            documented
          </p>
        </section>

        <section className="py-12">
          {themePlaces.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {themePlaces.map((place, index) => (
                <PlaceCard key={place.slug} place={place} index={index} />
              ))}
            </div>
          ) : (
            <div className="max-w-xl py-12">
              <p className="mb-3 font-serif text-2xl">
                This collection is still being uncovered.
              </p>

              <p className="leading-7 text-[#aaa397]">
                No places have been catalogued in this collection yet. As the
                atlas grows, new discoveries will appear here.
              </p>

              <Link
                href="/places"
                className="mt-6 inline-block text-sm text-[#c6a76a] transition hover:text-[#e8e0d0]"
              >
                Explore the existing archive →
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
