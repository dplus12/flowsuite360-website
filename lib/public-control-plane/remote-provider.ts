import { LocalPublicControlPlaneProvider } from "./local-provider";

export class RemotePublicControlPlaneProvider extends LocalPublicControlPlaneProvider {
  // Dormant in the website mission. A future server-only implementation can
  // read FLOWSUITE_PUBLIC_CONTROL_PLANE_URL and validate published content.
}
