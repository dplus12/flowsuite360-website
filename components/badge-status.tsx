import { cn } from "@/lib/utils";
import type { ModuleStatus } from "@/data/modules";

const statusStyles: Record<ModuleStatus, string> = {
  Disponible: "bg-emerald-50 text-growth ring-emerald-100",
  "Disponible en programme pilote": "bg-indigo-50 text-brand ring-indigo-100",
  "En préparation": "bg-slate-100 text-midnight ring-slate-200",
  "Sur demande": "bg-sky-50 text-skyflow ring-sky-100"
};

export function BadgeStatus({ status, className }: { status: ModuleStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
