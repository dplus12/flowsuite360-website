import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/modules", label: "Modules" },
  { href: "/modules/smartpos", label: "SmartPOS" },
  { href: "/demo", label: "Devenir entreprise pilote" },
  { href: "/demo", label: "Démo" },
  { href: "/autoformation/flowsuite360-autoformation-client-cartes.html", label: "Auto-formation", external: true },
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
              width={520}
              height={150}
              className="h-20 w-auto max-w-[330px] object-contain"
            />
          </Link>
          <p className="mt-4 max-w-md leading-7 text-muted">
            La suite intelligente pour gérer, vendre, encaisser et développer votre entreprise avec un accompagnement adapté au terrain.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-midnight">Navigation</h2>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
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
            Démonstrations accompagnées, tests pilotes et configuration progressive pour commerces, PME et organisations.
          </p>
          <a href="mailto:contact@flowsuite360.com" className="mt-4 inline-flex font-bold text-brand hover:text-passion">
            contact@flowsuite360.com
          </a>
          <p className="mt-6 text-sm text-muted">
            © {new Date().getFullYear()} FlowSuite360. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
