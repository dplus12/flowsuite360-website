"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const businessTypes = [
  "Boutique / magasin",
  "Pharmacie",
  "Restaurant / café",
  "Garage",
  "Église / organisation",
  "Dépôt / grossiste",
  "Quincaillerie",
  "Services",
  "Autre"
];

const needs = [
  "Caisse / ventes",
  "Stock",
  "Produits",
  "Clients / crédits",
  "Employés",
  "Rapports",
  "Plusieurs succursales",
  "Formation / accompagnement",
  "Autre"
];

const requestTypes = [
  "Je veux une démo",
  "Je veux participer au programme pilote",
  "Je veux être rappelé",
  "Je veux plus d’informations"
];

export function DemoForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet" name="name" required />
        <Field label="Téléphone / WhatsApp" name="phone" required />
        <Field label="Email" name="email" type="email" />
        <Field label="Pays" name="country" />
        <Field label="Ville" name="city" />
        <Field label="Nom de l’entreprise" name="company" />
        <SelectField label="Type d’activité" name="businessType" options={businessTypes} />
        <Field label="Nombre approximatif de produits" name="productsCount" type="number" />
        <Field label="Nombre d’employés" name="employeesCount" type="number" />
        <Field label="Nombre de caisses ou points de vente" name="posCount" type="number" />
        <SelectField label="Besoin principal" name="need" options={needs} />
        <SelectField label="Souhaitez-vous une démo ou participer au programme pilote ?" name="requestType" options={requestTypes} />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-bold text-midnight">Message</span>
        <textarea
          name="message"
          rows={compact ? 4 : 5}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-midnight outline-none transition focus:border-brand focus:ring-4 focus:ring-indigo-100"
        />
      </label>
      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-growth px-5 py-3 font-bold text-white shadow-glow sm:w-auto">
        Envoyer la demande
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-lg bg-emerald-50 p-4 font-semibold text-growth">
          Merci. Votre demande a bien été reçue. Notre équipe vous contactera pour planifier une démonstration ou vérifier votre admissibilité au programme pilote.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-midnight">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-midnight outline-none transition focus:border-brand focus:ring-4 focus:ring-indigo-100"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-midnight">{label}</span>
      <select
        name={name}
        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-midnight outline-none transition focus:border-brand focus:ring-4 focus:ring-indigo-100"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
