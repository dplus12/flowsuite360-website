"use client";

import type { MarieSolangeAction } from "@/lib/marie-solange/types";

export function MarieSolangeSuggestions({
  suggestions,
  onPick
}: {
  suggestions: MarieSolangeAction[];
  onPick: (suggestion: MarieSolangeAction) => void;
}) {
  if (!suggestions.length) return null;

  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.label}
          type="button"
          onClick={() => onPick(suggestion)}
          className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 transition hover:border-brand hover:text-brand"
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );
}
