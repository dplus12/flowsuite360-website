import Image from "next/image";
import { SectionHeading } from "./section-heading";

const screenshots = [
  { title: "Smart Login - Connexion", src: "/screenshots/smart-login.jpg" },
  { title: "Smart Login - Choix utilisateur", src: "/screenshots/smart-login-1.jpg" },
  { title: "Démarrage assisté - Configuration guidée", src: "/screenshots/demarrage-assiste.png" },
  { title: "Démarrage assisté - Recommandations", src: "/screenshots/demarrage-assiste-1.png" },
  { title: "SmartPOS - Caisse", src: "/screenshots/smartpos-caisse.jpg" },
  { title: "Tableau de bord", src: "/screenshots/tableau-de-bord.jpg" },
  { title: "Produits et stock", src: "/screenshots/produits-stock.jpg" },
  { title: "Clients", src: "/screenshots/clients.jpg" },
  { title: "Rapports", src: "/screenshots/rapports.jpg" }
];

export function InterfacePreviewSection() {
  return (
    <section id="interface" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Aperçus interface"
          title="Découvrez l'interface FlowSuite360"
          description="Une interface simple, claire et guidée pour aider les utilisateurs à démarrer rapidement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((screenshot) => (
            <article
              key={screenshot.src}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="border-b border-slate-200 bg-slate-950 p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black leading-7 text-midnight">{screenshot.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
