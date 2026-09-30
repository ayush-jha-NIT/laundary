import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";

export const metadata: Metadata = {
  title: "Laundry & Dry Cleaning in Prayagraj",
  description:
    "UJALA Dry Clean provides professional laundry and dry-cleaning care in Prayagraj with convenient pickup support.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <HomeHero />
    </main>
  );
}
