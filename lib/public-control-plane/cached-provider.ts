import { LocalPublicControlPlaneProvider } from "./local-provider";
import type { PublicControlPlaneProvider } from "./provider";

export function createPublicControlPlaneProvider(): PublicControlPlaneProvider {
  return new LocalPublicControlPlaneProvider();
}
