"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Leaf,
  ShieldCheck,
  Shirt,
  Sparkles,
} from "lucide-react";

const serviceCards = [
  {
    title: "Dry Cleaning",
    description:
      "Professional care for formal, delicate and special garments with attention to fabric needs.",
    icon: Shirt,
    visual: "dry-cleaning",
  },
  {
    title: "Wash & Fold",
    description:
      "Everyday laundry carefully washed, dried and folded so it comes back fresh and organised.",
    icon: Sparkles,
    visual: "wash-fold",
  },
  {
    title: "Steam Ironing",
    description:
      "Crisp finishing and wrinkle removal for clothing that needs a clean, polished presentation.",
    icon: ShieldCheck,
    visual: "steam-ironing",
  },
  {
    title: "Saree & Ethnic Wear",
    description:
      "Thoughtful garment care for sarees, suits, lehengas and other traditional clothing.",
    icon: Sparkles,
    visual: "ethnic-wear",
  },
  {
    title: "Blankets & Bedsheets",
    description:
      "Laundry care for larger household fabrics including bedsheets, quilts and blankets.",
    icon: Leaf,
    visual: "household-linen",
  },
  {
    title: "Curtain Cleaning",
    description:
      "Careful cleaning for fabric curtains and household furnishings that need a fresher finish.",
    icon: CalendarDays,
    visual: "curtain-care",
  },
] as const;

export function HomeServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="home-services-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(21,197,243,0.09),transparent_62%)]"
        aria-hidden="true"
      />

      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Our Services
          </p>
          <h2
            id="home-services-title"
            className="mt-3 text-3xl font-black tracking-[-0.035em] text-[var(--brand-navy)] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08]"
          >
            Complete Care for All Your Clothes
            <span className="text-[var(--brand-blue-strong)]"> & More</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[var(--brand-muted)] sm:text-base">
            From daily wear to delicate garments and household fabrics, UJALA provides practical cleaning care without unnecessary complexity.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-6">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.46,
                  delay: reduceMotion ? 0 : index * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex min-h-full flex-col overflow-hidden rounded-[1.15rem] border border-[#dcebf6] bg-white shadow-[0_14px_35px_rgba(6,45,99,0.065)] transition duration-300 hover:-translate-y-1 hover:border-[#b8dcf5] hover:shadow-[0_20px_44px_rgba(6,45,99,0.11)]"
              >
                <ServiceVisual type={service.visual} icon={Icon} />

                <div className="flex flex-1 flex-col p-4 sm:p-5 xl:p-4">
                  <h3 className="text-[15px] font-black leading-5 text-[var(--brand-navy)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs font-medium leading-5 text-[var(--brand-muted)]">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-extrabold text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Know More
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.46, delay: 0.08 }}
          className="mt-9 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#acd4ef] bg-[var(--brand-surface)] px-5 py-3 text-sm font-extrabold text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)] hover:bg-[var(--brand-sky)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

type ServiceVisualProps = {
  type: (typeof serviceCards)[number]["visual"];
  icon: typeof Shirt;
};

function ServiceVisual({ type, icon: Icon }: ServiceVisualProps) {
  const visualClasses: Record<ServiceVisualProps["type"], string> = {
    "dry-cleaning":
      "from-[#eef8ff] via-[#dcefff] to-[#cce8fb] before:left-[64%] before:top-[15%] before:h-20 before:w-20",
    "wash-fold":
      "from-[#f5fbff] via-[#dff2ff] to-[#c6e7fb] before:left-[12%] before:top-[52%] before:h-24 before:w-24",
    "steam-ironing":
      "from-[#edf8ff] via-[#d8efff] to-[#c4e5fa] before:left-[58%] before:top-[48%] before:h-24 before:w-24",
    "ethnic-wear":
      "from-[#f8fbff] via-[#e5f4ff] to-[#d0ebfb] before:left-[10%] before:top-[12%] before:h-20 before:w-20",
    "household-linen":
      "from-[#f3fbff] via-[#def2ff] to-[#c8e8fb] before:left-[62%] before:top-[10%] before:h-24 before:w-24",
    "curtain-care":
      "from-[#f8fcff] via-[#e4f3ff] to-[#cde9fb] before:left-[15%] before:top-[48%] before:h-24 before:w-24",
  };

  return (
    <div
      className={`relative isolate h-40 overflow-hidden bg-gradient-to-br ${visualClasses[type]} before:absolute before:-z-10 before:rounded-full before:bg-white/60 before:blur-xl xl:h-36`}
    >
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,120,209,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(8,120,209,0.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute -bottom-8 -right-7 h-28 w-28 rounded-full border-[18px] border-white/55" aria-hidden="true" />
      <div className="absolute -bottom-12 -right-1 h-24 w-24 rounded-full border-[13px] border-[#87d8f4]/25" aria-hidden="true" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[86px] w-[86px] items-center justify-center rounded-[1.6rem] border border-white/85 bg-white/80 text-[var(--brand-blue)] shadow-[0_16px_35px_rgba(6,45,99,0.12)] backdrop-blur-sm transition duration-300 group-hover:scale-[1.04] group-hover:-rotate-1">
          <Icon className="h-10 w-10" strokeWidth={1.7} aria-hidden="true" />
          <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-4 border-white bg-[var(--brand-cyan)] shadow-sm" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute bottom-3 left-3 rounded-full border border-white/80 bg-white/78 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.11em] text-[var(--brand-blue)] shadow-sm backdrop-blur">
        UJALA Care
      </div>
    </div>
  );
}
