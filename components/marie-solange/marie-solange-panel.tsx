"use client";

import { RotateCcw, ShieldCheck, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { marieSolangeCopy } from "@/data/marie-solange/conversation-copy";
import { answerWithMarieSolange, createMarieSolangeMessage } from "@/lib/marie-solange/conversation-engine";
import { createMarieSolangeKnowledgeProvider } from "@/lib/marie-solange/provider-factory";
import { emptyMarieSolangeSession } from "@/lib/marie-solange/qualification-engine";
import {
  clearMarieSolangeState,
  createEmptyStoredState,
  loadMarieSolangeState,
  saveMarieSolangeState
} from "@/lib/marie-solange/session-store";
import type { MarieSolangeAction, MarieSolangeMessage as Message, MarieSolangeSession } from "@/lib/marie-solange/types";
import { MarieSolangeInput } from "./marie-solange-input";
import { MarieSolangeMessage } from "./marie-solange-message";
import { MarieSolangeSuggestions } from "./marie-solange-suggestions";

type MarieSolangePanelProps = {
  onClose: () => void;
};

const initialSuggestions: MarieSolangeAction[] = [
  { label: "Parler d'ASA", value: "Qu'est-ce qu'ASA peut faire aujourd'hui ?" },
  { label: "Devenir partenaire", value: "Je veux devenir partenaire" },
  { label: "Voir Modules", value: "Je veux uniquement voir Modules" },
  { label: "Continuer sans nom", value: "Je préfère ne pas donner mon nom" }
];

export function MarieSolangePanel({ onClose }: MarieSolangePanelProps) {
  const provider = useMemo(() => createMarieSolangeKnowledgeProvider(), []);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [session, setSession] = useState<MarieSolangeSession>(() => emptyMarieSolangeSession());
  const [messages, setMessages] = useState<Message[]>(() => [createMarieSolangeMessage(marieSolangeCopy.welcome)]);
  const [isPreparing, setIsPreparing] = useState(false);

  useEffect(() => {
    const saved = loadMarieSolangeState();
    if (saved?.messages.length) {
      setSession(saved.session);
      setMessages(saved.messages);
    } else {
      saveMarieSolangeState(createEmptyStoredState());
    }
  }, []);

  useEffect(() => {
    saveMarieSolangeState({ session, messages });
  }, [session, messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages, isPreparing]);

  const responseDelay = (value: string) => {
    const base = value.length < 18 ? 2600 : value.length > 120 ? 4100 : 3500;
    const variation = Math.min(900, value.length * 11);
    return Math.max(2500, Math.min(5000, base + variation));
  };

  const send = (value: string) => {
    if (isPreparing) return;
    const userMessage = createMarieSolangeMessage(value, "user");
    setMessages((current) => [...current, userMessage]);
    setIsPreparing(true);

    window.setTimeout(() => {
      const result = answerWithMarieSolange(value, session, provider);
      setSession(result.session);
      setMessages((current) => [...current, result.message]);
      setIsPreparing(false);
    }, responseDelay(value));
  };

  const clear = () => {
    clearMarieSolangeState();
    setSession(emptyMarieSolangeSession());
    setIsPreparing(false);
    setMessages([createMarieSolangeMessage("C'est fait. J'ai effacé les informations de cette session. Comment puis-je vous appeler ?")]);
  };

  const restart = () => {
    setSession(emptyMarieSolangeSession());
    setMessages((current) => [...current, createMarieSolangeMessage("Très bien, on reprend calmement. Comment puis-je vous appeler ?")]);
  };

  const showInitialSuggestions = messages.filter((message) => message.role === "user").length === 0;

  return (
    <section
      id="marie-solange-panel"
      aria-label="Marie-Solange, votre conseillère FlowSuite360"
      className="mb-3 flex max-h-[min(780px,calc(100vh-7rem))] w-[calc(100vw-1rem)] max-w-[450px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-[450px]"
    >
      <header className="border-b border-slate-200 bg-midnight px-4 py-4 text-white">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-black text-brand">
              MS
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-200">{marieSolangeCopy.subtitle}</p>
              <h2 className="mt-1 truncate text-xl font-black">{marieSolangeCopy.publicName}</h2>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-emerald-200">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {marieSolangeCopy.onlineLabel} · conseillère FlowSuite360
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Fermer Marie-Solange"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={restart} className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white hover:bg-white/20">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Recommencer
          </button>
          <button type="button" onClick={clear} className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white hover:bg-white/20">
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Effacer mes informations
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto py-4">
        <div className="grid gap-3 px-4">
          {messages.map((message) => (
            <MarieSolangeMessage key={message.id} message={message} />
          ))}
          {isPreparing ? (
            <div className="justify-self-start rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
              <span>Marie-Solange prépare sa réponse</span>
              <span className="ml-1 inline-flex gap-0.5 align-middle" aria-hidden="true">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
              </span>
            </div>
          ) : null}
        </div>
        <div ref={bottomRef} />
      </div>

      {showInitialSuggestions ? <MarieSolangeSuggestions suggestions={initialSuggestions} onPick={(suggestion) => suggestion.value && send(suggestion.value)} /> : null}
      <MarieSolangeInput onSend={send} disabled={isPreparing} />
    </section>
  );
}
