import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  MapPin,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";
import { business, pickupWhatsappHref } from "@/lib/business";
import { services } from "@/lib/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="bg-[linear-gradient(135deg,#03244f_0%,#06376e_48%,#032b59_100%)] text-white">
      <div className="site-container py-10 lg:py-12">
        <div className="grid gap-9 border-b border-white/[0.15] pb-9 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.2fr_0.9fr] lg:gap-7">
          <div>
            <Link
              href="/"
              aria-label="UJALA Dry Clean home"
              className="inline-block rounded-xl bg-white px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Image
                src="/brand/ujala-logo.png"
                width={1000}
                height={436}
                alt="UJALA Dry Clean"
                className="h-auto w-[170px]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/[0.72]">
              Professional laundry and dry-cleaning care with convenient pickup support in Prayagraj.
            </p>
            <a
              href={pickupWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.08] px-4 py-2.5 text-xs font-extrabold transition hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircleMore className="h-4 w-4 text-[#62e5ff]" />
              WhatsApp UJALA
            </a>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Our Services">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href="/services"
                className="footer-link"
              >
                {service.name}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact Us">
            <a href={business.phone.href} className="footer-contact-link">
              <PhoneCall className="h-4 w-4 shrink-0 text-[#78e9ff]" />
              <span>{business.phone.display}</span>
            </a>
            <a
              href={pickupWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link"
            >
              <MessageCircleMore className="h-4 w-4 shrink-0 text-[#78e9ff]" />
              <span>Book pickup on WhatsApp</span>
            </a>
            <a
              href={business.maps.href}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link items-start"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#78e9ff]" />
              <span>{business.address.full}</span>
            </a>
          </FooterColumn>

          <FooterColumn title="Working Hours">
            <div className="flex items-start gap-2.5 text-sm leading-6 text-white/[0.72]">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#78e9ff]" />
              <span>
                Open daily
                <br />
                <strong className="font-bold text-white">{business.hours.display}</strong>
              </span>
            </div>
            <a
              href={business.maps.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/[0.10] px-3.5 py-2 text-xs font-bold transition hover:bg-white/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-white/[0.55] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 UJALA Dry Clean. All rights reserved.</p>
          <p>Fresh Clothes. Expert Care.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-extrabold tracking-[0.01em] text-white">{title}</h2>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
