import Link from "next/link";
import { ArrowUpRightIcon, CompassIcon } from "@/components/icons";

export const metadata = {
  title: "About the Atlas | Atlas of Lost Places",
  description:
    "Learn what the Atlas of Lost Places documents and how to read its historical records.",
};

export default async function AboutPage() {
  return (
    <main className="min-h-screen bg-[#11120f] text-[#e9e2d2]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
              The idea
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-tight sm:text-5xl">
              What does it mean for a place to be lost?
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-base leading-8 text-[#aaa69b]">
            <p>
              “Lost” does not always mean undiscovered. A place may be buried
              beneath newer ground, left behind as people move elsewhere, or
              known by a different name than the one history remembers.
            </p>
            <p>
              These places are not empty. Their remains hold evidence of daily
              life, exchange, belief, ingenuity, and change. The atlas brings
              those fragments together without pretending that every question
              has a final answer.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-20">
        <div className="flex items-start gap-4">
          <CompassIcon
            size={28}
            weight="light"
            className="mt-1 shrink-0 text-[#c6a76a]"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c6a76a]">
              Keep exploring
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              The past is still taking shape.
            </h2>
          </div>
        </div>
        <Link
          href="/atlas"
          className="inline-flex items-center gap-3 self-start border border-[#c6a76a]/50 px-6 py-3.5 text-sm transition hover:bg-[#c6a76a] hover:text-[#11120f] sm:self-auto"
        >
          Explore the atlas
          <ArrowUpRightIcon size={17} />
        </Link>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="font-serif text-base text-[#d7cebd]">
            Atlas of Lost Places
          </p>
          <p className="text-[#858176]">
            Created by <span className="text-[#c6a76a]">Ankita Barman</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
