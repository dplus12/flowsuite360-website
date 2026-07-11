import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/asa",
  "/assistance",
  "/conditions",
  "/confidentialite",
  "/contact",
  "/demo",
  "/devenir-partenaire",
  "/donnees",
  "/faq",
  "/modules",
  "/modules/brickflow",
  "/modules/smartpos",
  "/organisations",
  "/partenaires",
  "/plans"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.flowsuite360.com${route}`,
    lastModified: new Date()
  }));
}
