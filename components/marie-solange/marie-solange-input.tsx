"use client";

import { Send } from "lucide-react";
import { type KeyboardEvent, useState } from "react";
import { marieSolangeCopy } from "@/data/marie-solange/conversation-copy";

export function MarieSolangeInput({ onSend, disabled = false }: { onSend: (value: string) => void; disabled?: boolean }) {
  const [value, setValue] = useState("");

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  };

  return (
    <div className="border-t border-slate-200 bg-white p-3">
      <label className="sr-only" htmlFor="marie-solange-input">
        Message pour Marie-Solange
      </label>
      <div className="flex items-end gap-2">
        <textarea
          id="marie-solange-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder={marieSolangeCopy.inputPlaceholder}
          rows={1}
          className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10"
        />
        <button
          type="button"
          onClick={submit}
          aria-label="Envoyer le message"
          disabled={disabled}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition hover:bg-passion"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
