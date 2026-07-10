import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type AsaPublicShellProps = {
  title: string;
  codeLabel: string;
  code: string;
  children: ReactNode;
};

export function AsaPublicShell({ title, codeLabel, code, children }: AsaPublicShellProps) {
  return (
    <section className="min-h-screen bg-surface px-4 py-10 text-midnight sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3" href="/" aria-label="Retour à FlowSuite360">
            <Image
              src="/branding/flowsuite360/logo.png"
              alt="FlowSuite360"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg object-contain"
              priority
            />
            <span className="text-lg font-black">FlowSuite360</span>
          </Link>
          <Link className="text-sm font-semibold text-brand hover:text-midnight" href="/">
            Retour
          </Link>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">ASA Public Links</p>
          <h1 className="mt-3 text-3xl font-black tracking-normal text-midnight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm font-semibold text-muted">
            {codeLabel} <span className="text-midnight">{code}</span>
          </p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
