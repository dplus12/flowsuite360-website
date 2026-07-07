"use client";

import { MessageCircle } from "lucide-react";

type FaqAssistantButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function FaqAssistantButton({ isOpen, onClick }: FaqAssistantButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="flowsuite360-assistant-panel"
      onClick={onClick}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-midnight px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand focus:outline-none focus:ring-4 focus:ring-brand/20"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Besoin d&apos;aide ?
    </button>
  );
}
