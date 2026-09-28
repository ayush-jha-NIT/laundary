import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
