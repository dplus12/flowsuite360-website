import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FlowModule } from "@/data/modules";
import { cn } from "@/lib/utils";
import { BadgeStatus } from "./badge-status";

const colorStyles = {
  brand: "bg-indigo-50 text-brand",
  passion: "bg-orange-50 text-passion",
  growth: "bg-emerald-50 text-growth",
  skyflow: "bg-sky-50 text-skyflow",
  midnight: "bg-slate-100 text-midnight"
};

export function ModuleCard({ module }: { module: FlowModule }) {
  const Icon = module.icon;

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        {module.logoSrc ? (
          <div className="flex h-24 min-w-0 flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white p-4">
            <Image
              src={module.logoSrc}
              alt={`${module.name} logo`}
              width={220}
              height={96}
              className="max-h-20 w-full object-contain"
            />
          </div>
        ) : (
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg", colorStyles[module.color])}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        )}
        <BadgeStatus status={module.status} />
      </div>
      <h3 className="mt-6 text-xl font-black text-midnight">{module.name}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{module.description}</p>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-passion"
        href={module.href}
      >
        Découvrir
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
