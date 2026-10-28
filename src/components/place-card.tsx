import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { LostPlace } from "@/data/places";

type PlaceCardProps = {
  place: LostPlace;
  index: number;
};

export default function PlaceCard({ place, index }: PlaceCardProps) {
  return (
    <article className="group border border-white/10 bg-[#171813] transition hover:border-[#c6a76a]/40">
      <Link href={`/places/${place.slug}`}>
        <div className="relative h-64 overflow-hidden bg-[#28291f]">
          <div
            role="img"
            aria-label={`Landscape representing ${place.name}`}
            className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
            style={{ backgroundImage: `url("${place.image}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11120f] via-transparent to-black/10" />

          <span className="absolute left-5 top-5 border border-white/20 bg-[#11120f]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">
            {place.category}
          </span>

          <span className="absolute bottom-5 right-5 font-serif text-3xl text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-[#a59b83]">
            {place.location} · {place.period}
          </p>

          <div className="mt-3 flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl">{place.name}</h3>
            <ArrowUpRightIcon
              size={20}
              className="shrink-0 text-[#c6a76a] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>

          <p className="mt-3 text-sm leading-7 text-[#aaa69b]">
            {place.description}
          </p>

          <span className="mt-6 inline-block border-t border-white/10 pt-4 text-xs uppercase tracking-widest text-[#c6a76a]">
            Read the field notes
          </span>
        </div>
      </Link>
    </article>
  );
}
