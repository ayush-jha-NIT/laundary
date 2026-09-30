import type { Metadata } from "next";
import { MobileBookPickup } from "@/components/layout/MobileBookPickup";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UJALA Dry Clean",
    template: "%s | UJALA Dry Clean",
  },
  description:
    "Professional laundry and dry cleaning services with convenient pickup support in Prayagraj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileBookPickup />
      </body>
    </html>
  );
}
