import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  tone?: "brand" | "passion" | "growth" | "skyflow" | "midnight";
};

const tones = {
  brand: "bg-indigo-50 text-brand",
  passion: "bg-orange-50 text-passion",
  growth: "bg-emerald-50 text-growth",
  skyflow: "bg-sky-50 text-skyflow",
  midnight: "bg-slate-100 text-midnight"
};

export function FeatureCard({ title, text, icon: Icon, tone = "brand" }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-lg", tones[tone])}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-midnight">{title}</h3>
      <p className="mt-2 leading-7 text-muted">{text}</p>
    </article>
  );
}
