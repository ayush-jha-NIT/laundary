import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";

export const metadata: Metadata = {
  title: "Laundry & Dry Cleaning in Prayagraj",
  description:
    "UJALA Dry Clean provides professional laundry and dry-cleaning care in Prayagraj with convenient pickup support.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <HomeHero />
      <HomeServices />
    </main>
  );
}
