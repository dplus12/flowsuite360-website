import type { PublicPrice } from "./types";

export function isPublishedPriceUsable(price: PublicPrice, region?: string) {
  if (!price.published || !price.version || !price.currency) return false;
  if (region && price.region !== region && price.region !== "global") return false;

  const now = Date.now();
  if (price.startDate && Date.parse(price.startDate) > now) return false;
  if (price.endDate && Date.parse(price.endDate) < now) return false;

  return typeof price.price === "number";
}
