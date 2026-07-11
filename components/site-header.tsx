"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { GradientButton } from "./gradient-button";

const navItems = [
  { href: "/modules", label: "Solutions" },
  { href: "/modules", label: "Modules" },
  { href: "/modules/smartpos", label: "Fonctionnalités" },
  { href: "/plans", label: "Plans et prix" },
  { href: "/demo", label: "Démonstration" },
  { href: "/devenir-partenaire", label: "Devenir partenaire" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-28 max-w-7xl items-center justify-between gap-3 px-3 sm:min-h-32 sm:px-5 lg:min-h-32 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none" onClick={() => setIsOpen(false)}>
          <Image
            src="/branding/flowsuite360/logo.png"
            alt="FlowSuite360"
            width={1080}
            height={312}
            className="h-24 w-auto max-w-[360px] object-contain sm:h-28 sm:max-w-[500px] lg:h-28 lg:max-w-[560px] xl:max-w-[620px]"
            priority
          />
        </Link>

        <div className="hidden min-w-0 items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-brand xl:px-3"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 2xl:flex">
          <Link href="/demo" className="text-sm font-bold text-brand hover:text-passion">
            Programme pilote
          </Link>
          <GradientButton href="/demo" className="min-h-10 px-4 py-2">
            Trouver ma solution
          </GradientButton>
          <Link
            href="/autoformation/flowsuite360-autoformation-client-cartes.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-black text-midnight shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white"
          >
            <GraduationCap className="h-4 w-4 text-amber-600" aria-hidden="true" />
            Autoformation
          </Link>
        </div>

        <button
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-midnight xl:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 font-semibold text-midnight hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              <Link
                href="/demo"
                className="rounded-full bg-brand px-4 py-3 text-center font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                Trouver ma solution
              </Link>
              <Link
                href="/demo"
                className="rounded-full border border-slate-200 px-4 py-3 text-center font-bold text-midnight"
                onClick={() => setIsOpen(false)}
              >
                Programme pilote
              </Link>
              <Link
                href="/autoformation/flowsuite360-autoformation-client-cartes.html"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-amber-300 bg-amber-50 px-4 py-3 text-center font-black text-midnight"
                onClick={() => setIsOpen(false)}
              >
                Autoformation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
