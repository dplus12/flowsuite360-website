import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const questions = [
  ["Puis-je commencer simplement ?", "Oui. FlowSuite360 permet de commencer avec l'essentiel puis d'ajouter des fonctions."],
  ["SmartPOS est-il le point de départ ?", "Oui pour les activités centrées sur les ventes, la caisse, les clients et le stock."],
  ["Tous les modules sont-ils disponibles ?", "Non. Certains sont disponibles, d'autres en programme pilote, en préparation ou sur demande."],
  ["Puis-je demander une démonstration ?", "Oui. La démonstration sert à comprendre votre activité avant de choisir."],
  ["Les prix sont-ils fixes partout ?", "Les tarifs peuvent dépendre de la région et de la configuration choisie."]
];

export default function FaqPage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes" description="Des réponses simples pour comprendre FlowSuite360 avant de parler à l'équipe." />
        <div className="mt-10 grid gap-4">
          {questions.map(([question, answer]) => (
            <article key={question} className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="font-black text-midnight">{question}</h2>
              <p className="mt-2 leading-7 text-muted">{answer}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand px-5 py-3 font-black text-white">
          Poser une question
        </Link>
      </div>
    </section>
  );
}
