"use client";

import { useMemo, useState } from "react";
import { ModuleCard } from "@/components/module-card";
import { SectionHeading } from "@/components/section-heading";
import { modules } from "@/data/modules";

const filters = ["Tous", "Disponible", "Bêta", "Bientôt", "Métier"];

export default function ModulesPage() {
  const [filter, setFilter] = useState("Tous");
  const filteredModules = useMemo(
    () => (filter === "Tous" ? modules : modules.filter((module) => module.category === filter)),
    [filter]
  );

  return (
    <section className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Modules"
          title="Une suite prête à grandir avec votre entreprise."
          description="Explorez les modules disponibles, en bêta ou en préparation pour les réalités du Canada et de l’Afrique francophone."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter === item ? "bg-brand text-white" : "bg-white text-midnight hover:bg-slate-100"
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredModules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}
