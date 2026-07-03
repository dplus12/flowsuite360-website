"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { GradientButton } from "./gradient-button";

const navItems = [
  { href: "/modules", label: "Modules" },
  { href: "/modules/smartpos", label: "SmartPOS" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:min-h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/branding/flowsuite360/logo.png"
            alt="FlowSuite360"
            width={520}
            height={150}
            className="h-10 w-auto max-w-[210px] object-contain sm:h-12 sm:max-w-[280px] lg:h-14 lg:max-w-[340px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/demo" className="text-sm font-bold text-brand hover:text-passion">
            Devenir entreprise pilote
          </Link>
          <GradientButton href="/demo" className="min-h-10 px-4 py-2">
            Demander une démo
          </GradientButton>
          <Link
            href="/autoformation/flowsuite360-autoformation-client-cartes.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-black text-midnight shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white"
          >
            <GraduationCap className="h-4 w-4 text-amber-600" aria-hidden="true" />
            Auto-formation
          </Link>
        </div>

        <button
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-midnight lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden">
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
                Demander une démo
              </Link>
              <Link
                href="/demo"
                className="rounded-full border border-slate-200 px-4 py-3 text-center font-bold text-midnight"
                onClick={() => setIsOpen(false)}
              >
                Devenir entreprise pilote
              </Link>
              <Link
                href="/autoformation/flowsuite360-autoformation-client-cartes.html"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-amber-300 bg-amber-50 px-4 py-3 text-center font-black text-midnight"
                onClick={() => setIsOpen(false)}
              >
                Auto-formation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
