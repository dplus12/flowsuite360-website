import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/modules", label: "Solutions" },
  { href: "/modules/smartpos", label: "SmartPOS" },
  { href: "/plans", label: "Plans et prix" },
  { href: "/demo", label: "Démonstration" },
  { href: "/demo", label: "Programme pilote" },
  { href: "/autoformation/flowsuite360-autoformation-client-cartes.html", label: "Autoformation", external: true },
  { href: "/asa", label: "ASA" },
  { href: "/assistance", label: "Assistance" },
  { href: "/faq", label: "FAQ" },
  { href: "/devenir-partenaire", label: "Devenir partenaire" },
  { href: "/organisations", label: "Organisations" },
  { href: "/about", label: "À propos" },
  { href: "/donnees", label: "Données" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/conditions", label: "Conditions" },
  { href: "/contact", label: "Contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/branding/flowsuite360/logo.png"
              alt="FlowSuite360"
              width={1080}
              height={312}
              className="h-28 w-auto max-w-[520px] object-contain sm:h-32"
            />
          </Link>
          <p className="mt-4 max-w-md leading-7 text-muted">
            Une suite simple pour gérer, vendre, encaisser et développer votre entreprise avec un accompagnement adapté
            au terrain.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-midnight">Navigation</h2>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-sm font-semibold text-muted hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-midnight">Contact</h2>
          <p className="mt-4 leading-7 text-muted">
            Démonstrations accompagnées, programme pilote et configuration progressive pour commerces, PME et
            organisations.
          </p>
          <a href="mailto:contact@flowsuite360.com" className="mt-4 inline-flex font-bold text-brand hover:text-passion">
            contact@flowsuite360.com
          </a>
          <p className="mt-6 text-sm text-muted">© {new Date().getFullYear()} FlowSuite360. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
