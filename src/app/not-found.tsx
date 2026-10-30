import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#11110f] px-6 py-20 text-[#e8e0d0]">
      <div className="max-w-xl text-center">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#c6a76a]">
          ARCHIVE RECORD 404
        </p>

        <p
          aria-hidden="true"
          className="mb-4 font-serif text-8xl text-[#c6a76a]/40"
        >
          ∅
        </p>

        <h1 className="font-serif text-3xl md:text-4xl">
          This place has been lost.
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-7 text-[#aaa397]">
          The record you seek cannot be found in the atlas. It may have moved,
          or perhaps it was never catalogued.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="border border-[#c6a76a] px-6 py-3 text-sm text-[#c6a76a] transition hover:bg-[#c6a76a] hover:text-[#11110f]"
          >
            Return home
          </Link>

          <Link
            href="/places"
            className="border border-[#39352d] px-6 py-3 text-sm transition hover:border-[#c6a76a]"
          >
            Explore the archive
          </Link>
        </div>
      </div>
    </main>
  );
}
