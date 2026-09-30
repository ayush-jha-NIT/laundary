"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";
import { business, pickupWhatsappHref } from "@/lib/business";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
] as const;

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce9f5]/90 bg-white/95 shadow-[0_8px_28px_rgba(6,45,99,0.06)] backdrop-blur-xl">
      <div className="site-container flex min-h-[76px] items-center justify-between gap-5 py-2 xl:min-h-[84px]">
        <Link
          href="/"
          aria-label="UJALA Dry Clean home"
          className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
        >
          <Image
            src="/brand/ujala-logo.png"
            width={1000}
            height={436}
            priority
            alt="UJALA Dry Clean"
            className="h-auto w-[152px] sm:w-[170px] xl:w-[184px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-[13px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 ${
                  active
                    ? "text-[var(--brand-blue)]"
                    : "text-[var(--brand-navy)] hover:text-[var(--brand-blue)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[var(--brand-blue)] transition-transform ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1.5 xl:flex">
          <a
            href={business.maps.href}
            target="_blank"
            rel="noreferrer"
            className="header-action-link"
            aria-label="Open UJALA Dry Clean location in Google Maps"
          >
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </a>
          <a
            href={business.phone.href}
            className="header-action-link"
            aria-label={`Call UJALA Dry Clean at ${business.phone.display}`}
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <a
            href={pickupWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#0878d1,#0868f2)] px-4 py-2.5 text-[13px] font-extrabold text-white shadow-[0_10px_24px_rgba(8,120,209,0.26)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(8,120,209,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
          >
            <CalendarDays className="h-4 w-4" />
            Book Pickup
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--brand-border)] bg-white text-[var(--brand-navy)] shadow-sm transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 xl:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full border-t border-[var(--brand-border)] bg-white shadow-[0_24px_44px_rgba(6,45,99,0.14)] transition-[opacity,transform,visibility] duration-200 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="site-container max-h-[calc(100dvh-76px)] overflow-y-auto py-5">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-extrabold transition-colors ${
                    active
                      ? "bg-[var(--brand-sky)] text-[var(--brand-blue)]"
                      : "text-[var(--brand-navy)] hover:bg-[var(--brand-surface)]"
                  }`}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a
              href={business.maps.href}
              target="_blank"
              rel="noreferrer"
              className="mobile-info-card"
            >
              <MapPin className="h-5 w-5 text-[var(--brand-blue)]" />
              <span>
                <strong>Location</strong>
                <small>Open in Maps</small>
              </span>
            </a>
            <a href={business.phone.href} className="mobile-info-card">
              <PhoneCall className="h-5 w-5 text-[var(--brand-blue)]" />
              <span>
                <strong>Call Now</strong>
                <small>{business.phone.display}</small>
              </span>
            </a>
            <div className="mobile-info-card">
              <Clock3 className="h-5 w-5 text-[var(--brand-blue)]" />
              <span>
                <strong>Open Daily</strong>
                <small>{business.hours.display}</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
