import { getPlaces } from "@/lib/cms/sanity";
import TimelineView from "@/components/timeline-view";

export const metadata = {
  title: "Timeline | Atlas of Lost Places",
  description:
    "Trace the events that shaped lost places, from their earliest settlements to their rediscovery by the modern world.",
};

export default async function TimelinePage() {
  const places = await getPlaces();

  return <TimelineView places={places} />;
}
