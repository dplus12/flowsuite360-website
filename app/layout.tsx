import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getWhatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flowsuite360.com"),
  title: "FlowSuite360 — Gestion simple pour commerces, PME et organisations",
  description:
    "FlowSuite360 aide les commerces, PME et organisations à gérer la caisse, les produits, le stock, les clients, les ventes, les employés et les rapports avec une solution simple et accompagnée.",
  keywords: [
    "POS",
    "caisse",
    "gestion commerce",
    "ERP PME",
    "SmartPOS",
    "BrickFlow",
    "FlowSuite360",
    "gestion stock",
    "crédit client"
  ],
  openGraph: {
    title: "FlowSuite360 — Gestion simple pour commerces, PME et organisations",
    description:
      "Caisse, produits, stock, clients, ventes, employés et rapports dans une plateforme simple et accompagnée.",
    images: ["/branding/flowsuite360/logo.png"]
  },
  icons: {
    icon: "/branding/flowsuite360/icon.png",
    shortcut: "/favicon.ico",
    apple: "/branding/flowsuite360/icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <SiteHeader />
        <main>{children}</main>
        <a
          href={getWhatsAppHref()}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-growth px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald-700"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <SiteFooter />
      </body>
    </html>
  );
}

