"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { business, pickupWhatsappHref } from "@/lib/business";

const trustItems = [
  {
    icon: Sparkles,
    title: "Hygienic Cleaning",
    copy: "Fresh, careful garment care",
  },
  {
    icon: ShieldCheck,
    title: "Fabric-Safe Care",
    copy: "Attention for every fabric",
  },
  {
    icon: Clock3,
    title: "Convenient Service",
    copy: business.hours.display,
  },
  {
    icon: Leaf,
    title: "Professional Finish",
    copy: "Clean, crisp and ready to wear",
  },
] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--brand-border)] bg-[linear-gradient(115deg,#f8fcff_0%,#eef8ff_45%,#dff2ff_100%)]">
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.95), transparent 31%), radial-gradient(circle at 88% 20%, rgba(21,197,243,0.18), transparent 28%), linear-gradient(rgba(8,120,209,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(8,120,209,0.025) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 34px 34px, 34px 34px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#15c5f3]/15 blur-3xl md:h-96 md:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-36 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#0878d1]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container grid min-h-[620px] items-center gap-10 py-12 sm:py-14 lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:py-16 xl:min-h-[690px] xl:gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b9ddf7] bg-white/78 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--brand-blue)] shadow-[0_8px_24px_rgba(6,45,99,0.06)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Premium laundry & dry-cleaning service
          </div>

          <h1 className="mt-6 max-w-[760px] text-[clamp(3rem,7vw,5.9rem)] font-black leading-[0.94] tracking-[-0.055em] text-[var(--brand-navy)]">
            Fresh Clothes,
            <span className="block text-[var(--brand-blue-strong)]">Expert Care.</span>
            <span className="block">Delivered.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] font-medium leading-7 text-[var(--brand-muted)] sm:text-base sm:leading-8">
            Professional laundry and dry-cleaning care for everyday clothing and special outfits, with convenient pickup support in Prayagraj.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pickupWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(135deg,#0878d1,#0868f2)] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(8,104,242,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(8,104,242,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
            >
              <CalendarDays className="h-4.5 w-4.5" aria-hidden="true" />
              Book a Pickup
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <Link
              href="/services"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl border border-[#9bcdf0] bg-white/85 px-6 py-3.5 text-sm font-extrabold text-[var(--brand-navy)] shadow-[0_10px_24px_rgba(6,45,99,0.06)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
            >
              View Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-[var(--brand-navy)]/75">
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-[var(--brand-blue)]" aria-hidden="true" />
              Pickup support
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#8fbddd] sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--brand-blue)]" aria-hidden="true" />
              Professional fabric care
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.68, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[720px] lg:mx-0 lg:max-w-none"
        >
          <div className="absolute left-[6%] top-[8%] h-[72%] w-[72%] rounded-full bg-white/75 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/30 p-2 shadow-[0_32px_75px_rgba(6,45,99,0.16)] backdrop-blur-sm sm:p-3 lg:rounded-[2.4rem]">
            <div className="overflow-hidden rounded-[1.55rem] bg-[linear-gradient(140deg,#f8fdff,#dff3ff)] lg:rounded-[1.95rem]">
              <Image
                src="/images/home/hero-laundry.svg"
                width={900}
                height={700}
                priority
                alt="Illustration of clean laundry, a washing machine and hanging garments"
                className="h-auto w-full"
              />
            </div>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 left-4 hidden max-w-[240px] rounded-2xl border border-white/90 bg-white/92 p-4 shadow-[0_18px_38px_rgba(6,45,99,0.15)] backdrop-blur sm:block xl:left-1"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-sky)] text-[var(--brand-blue)]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-sm font-extrabold text-[var(--brand-navy)]">Care at every step</strong>
                <small className="mt-1 block text-[11px] font-medium leading-5 text-[var(--brand-muted)]">Cleaning, finishing and quality-focused handling.</small>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-[#cfe5f5] bg-white/86 backdrop-blur-md">
        <div className="site-container grid sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex min-h-[92px] items-center gap-3 px-3 py-4 sm:px-5 ${
                  index > 0 ? "border-t border-[#e0edf6] sm:border-t-0" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-[#e0edf6]" : ""} ${
                  index >= 2 ? "lg:border-l lg:border-[#e0edf6]" : ""
                }`}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#e8f6ff,#d8efff)] text-[var(--brand-blue)] ring-1 ring-[#c6e5f8]">
                  <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-xs font-extrabold text-[var(--brand-navy)] sm:text-[13px]">{item.title}</strong>
                  <small className="mt-1 block text-[10px] font-medium leading-4 text-[var(--brand-muted)] sm:text-[11px]">{item.copy}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
