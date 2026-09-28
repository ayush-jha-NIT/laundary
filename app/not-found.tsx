import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--brand-surface)] px-6 text-center">
      <div>
        <p className="text-sm font-extrabold tracking-[0.16em] text-[var(--brand-blue)] uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--brand-navy)]">
          This page is not here.
        </h1>
        <p className="mt-4 text-[var(--brand-muted)]">
          The route may have moved or does not exist yet.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
