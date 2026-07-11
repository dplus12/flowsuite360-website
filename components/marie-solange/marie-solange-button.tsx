"use client";

import { MessageCircle } from "lucide-react";
import { marieSolangeCopy } from "@/data/marie-solange/conversation-copy";

export function MarieSolangeButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="marie-solange-panel"
      onClick={onClick}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-midnight px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand focus:outline-none focus:ring-4 focus:ring-brand/20"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {marieSolangeCopy.openButton}
    </button>
  );
}
