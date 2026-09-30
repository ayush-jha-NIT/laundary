import {
  Clock3,
  Headphones,
  Shirt,
  Truck,
} from "lucide-react";
import { business } from "@/lib/business";

const trustItems = [
  {
    icon: Truck,
    title: "Pickup & Delivery",
    subtitle: "At your doorstep",
  },
  {
    icon: Shirt,
    title: "Professional Fabric Care",
    subtitle: "Care for everyday & special wear",
  },
  {
    icon: Clock3,
    title: "Open Daily",
    subtitle: business.hours.display,
  },
  {
    icon: Headphones,
    title: "Customer Support",
    subtitle: business.phone.display,
    href: business.phone.href,
  },
] as const;

export function TopBar() {
  return (
    <div className="hidden bg-[linear-gradient(90deg,#07366f_0%,#064d96_52%,#06366d_100%)] text-white lg:block">
      <div className="site-container grid min-h-11 grid-cols-4 items-stretch">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <div className="flex min-h-11 items-center justify-center gap-2.5 px-4 py-1.5">
              <Icon className="h-5 w-5 shrink-0 text-[#9de9ff]" strokeWidth={1.8} />
              <div className="min-w-0 leading-tight">
                <p className="truncate text-[11px] font-extrabold tracking-[0.01em]">
                  {item.title}
                </p>
                <p className="mt-0.5 truncate text-[9px] font-medium text-white/70">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );

          return (
            <div
              key={item.title}
              className={index === 0 ? "" : "border-l border-white/[0.12]"}
            >
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  className="block transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
