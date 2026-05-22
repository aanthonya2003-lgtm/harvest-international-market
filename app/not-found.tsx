import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80dvh] flex items-center hero-radial pt-[120px] pb-20">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
        <p className="eyebrow text-[var(--color-saffron)] mb-6">⟢ Lost in the souk</p>
        <h1 className="display text-[clamp(3rem,10vw,9rem)] leading-none mb-6">
          404
        </h1>
        <p className="text-[17px] text-[var(--color-ink-dim)] max-w-[460px] mx-auto mb-10">
          That page doesn't exist — or we moved it. Try one of the routes below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[13px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--color-line)] text-[13px] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors rounded-sm"
          >
            Browse Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
