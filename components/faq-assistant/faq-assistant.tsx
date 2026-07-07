"use client";

import { useState } from "react";
import { FaqAssistantButton } from "./faq-assistant-button";
import { FaqAssistantPanel } from "./faq-assistant-panel";

export function FaqAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end sm:bottom-5 sm:right-5">
      {isOpen ? <FaqAssistantPanel onClose={() => setIsOpen(false)} /> : null}
      <FaqAssistantButton isOpen={isOpen} onClick={() => setIsOpen((value) => !value)} />
    </div>
  );
}
