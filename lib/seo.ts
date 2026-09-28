import type { Metadata } from "next";

export const siteConfig = {
  name: "UJALA Dry Clean",
  shortName: "UJALA",
  defaultTitle: "UJALA Dry Clean",
  defaultDescription:
    "Professional laundry and dry cleaning services with convenient pickup support in Prayagraj.",
} as const;

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
  };
}
