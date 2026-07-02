import { Check } from "lucide-react";
import { GradientButton } from "./gradient-button";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({ name, price, features, highlighted = false }: PricingCardProps) {
  return (
    <article className={`rounded-lg border p-6 shadow-sm ${highlighted ? "border-brand bg-indigo-50" : "border-slate-200 bg-white"}`}>
      <h3 className="text-xl font-black text-midnight">{name}</h3>
      <p className="mt-3 text-2xl font-black text-brand">{price}</p>
      <ul className="mt-6 grid gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 leading-7 text-muted">
            <Check className="mt-1 h-5 w-5 flex-none text-growth" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <GradientButton href="/demo" variant={highlighted ? "primary" : "secondary"} className="mt-6 w-full">
        Demander une démo
      </GradientButton>
    </article>
  );
}
