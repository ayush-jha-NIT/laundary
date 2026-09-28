import Link from "next/link";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageShell({ eyebrow, title, description }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[var(--brand-surface)] px-[var(--page-gutter)] py-16">
      <section className="mx-auto flex min-h-[70vh] max-w-[var(--page-max)] items-center">
        <div className="w-full rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-white p-8 shadow-[var(--shadow-soft)] md:p-12">
          <p className="mb-3 text-sm font-extrabold tracking-[0.16em] text-[var(--brand-blue)] uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-[var(--brand-navy)] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--brand-muted)] md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-[var(--brand-blue)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-navy)]"
            >
              Home
            </Link>
            <a
              href="https://wa.me/919415289581"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--brand-border)] bg-white px-5 py-3 text-sm font-bold text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)]"
            >
              WhatsApp UJALA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
