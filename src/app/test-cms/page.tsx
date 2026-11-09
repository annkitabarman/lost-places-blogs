import { getPlaces } from "@/lib/cms/sanity";

export default async function TestCMSPage() {
  const places = await getPlaces();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Sanity CMS Test</h1>

      <p className="mb-6">Places retrieved: {places.length}</p>

      {places.map((place) => (
        <article key={place.slug} className="mb-8">
          <h2 className="text-2xl font-semibold">{place.name}</h2>

          <p>{place.location}</p>
          <p>{place.period}</p>
          <p>{place.description}</p>

          <p>Theme: {place.themeSlug}</p>

          <p>Civilization: {place.civilization || "None"}</p>

          <p>
            Coordinates: {place.coordinates.lat}, {place.coordinates.lng}
          </p>
        </article>
      ))}
    </main>
  );
}
