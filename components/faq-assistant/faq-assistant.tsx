"use client";

import { useState } from "react";
import { MarieSolangeButton } from "@/components/marie-solange/marie-solange-button";
import { MarieSolangePanel } from "@/components/marie-solange/marie-solange-panel";

export function FaqAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-2 z-50 flex max-w-[calc(100vw-1rem)] flex-col items-end sm:bottom-5 sm:right-5">
      {isOpen ? <MarieSolangePanel onClose={() => setIsOpen(false)} /> : null}
      <MarieSolangeButton isOpen={isOpen} onClick={() => setIsOpen((value) => !value)} />
    </div>
  );
}
