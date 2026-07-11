export function getPublicControlPlaneConfig() {
  return {
    enabled: process.env.FLOWSUITE_PUBLIC_CONTROL_PLANE_ENABLED === "true",
    url: process.env.FLOWSUITE_PUBLIC_CONTROL_PLANE_URL
  };
}
