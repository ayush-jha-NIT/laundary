import { CalendarDays, ChevronRight } from "lucide-react";
import { pickupWhatsappHref } from "@/lib/business";

export function MobileBookPickup() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/20 bg-[rgba(3,42,87,0.94)] px-3 pt-2 shadow-[0_-12px_30px_rgba(6,45,99,0.22)] backdrop-blur-xl xl:hidden [padding-bottom:max(0.5rem,env(safe-area-inset-bottom))]">
      <a
        href={pickupWhatsappHref}
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex min-h-12 max-w-lg items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#0c83e8,#0868f2)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-navy)]"
        aria-label="Book a pickup with UJALA Dry Clean on WhatsApp"
      >
        <CalendarDays className="h-5 w-5" />
        Book Pickup
        <ChevronRight className="h-5 w-5" />
      </a>
    </div>
  );
}
