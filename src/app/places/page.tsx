import PlaceArchive from "@/components/place-archive";
import { getPlaces } from "@/lib/cms/sanity";

export const metadata = {
  title: "Explore the Archive | Atlas of Lost Places",
  description:
    "Explore lost cities, abandoned settlements, and vanished civilizations from around the world.",
};

export default async function PlacesPage() {
  const places = await getPlaces();

  return (
    <main className="min-h-screen bg-[#11120f] text-[#e9e2d2]">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-14 ">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
          The archive
        </p>

        <h1 className="mt-4 font-serif text-5xl sm:text-7xl">Lost places</h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa69b]">
          An evolving collection of forgotten cities, buried worlds, and
          civilizations that left traces of their existence behind. Every place
          holds a fragment of a larger story.
        </p>

        <PlaceArchive places={places} />
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-[#858176]">
        A living archive of places the world almost forgot.
      </footer>
    </main>
  );
}
