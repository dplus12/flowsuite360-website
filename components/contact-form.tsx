"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
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
        <label className="block">
          <span className="text-sm font-bold text-midnight">Nom</span>
          <input className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-brand focus:ring-4 focus:ring-indigo-100" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-midnight">Email</span>
          <input
            type="email"
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-brand focus:ring-4 focus:ring-indigo-100"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-bold text-midnight">Message</span>
        <textarea
          rows={5}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-brand focus:ring-4 focus:ring-indigo-100"
        />
      </label>
      <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 font-bold text-white">
        Envoyer
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      {submitted ? (
        <p className="mt-4 font-semibold text-growth">Message reçu. L&apos;équipe vous répondra selon les informations fournies.</p>
      ) : null}
    </form>
  );
}
