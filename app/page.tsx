import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--brand-surface)] px-[var(--page-gutter)] py-10">
      <section className="mx-auto grid min-h-[78vh] max-w-[var(--page-max)] items-center gap-10 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-white p-7 shadow-[var(--shadow-soft)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <p className="text-sm font-extrabold tracking-[0.16em] text-[var(--brand-blue)] uppercase">
            UJALA Dry Clean
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-extrabold tracking-tight text-[var(--brand-navy)] md:text-7xl">
            Fresh Clothes. Expert Care.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--brand-muted)] md:text-lg">
            The production foundation is ready. The full homepage design, navigation,
            booking flow and page sections will be implemented in the next parts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-navy)]"
            >
              Book Pickup
            </a>
            <Link
              href="/services"
              className="rounded-full border border-[var(--brand-border)] bg-white px-6 py-3 text-sm font-bold text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)]"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/brand/ujala-logo.png"
            width={1000}
            height={436}
            priority
            alt="UJALA Dry Clean logo"
            className="h-auto w-full max-w-xl"
          />
        </div>
      </section>
    </main>
  );
}
