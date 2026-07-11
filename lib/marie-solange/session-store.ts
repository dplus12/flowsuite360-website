import type { MarieSolangeMessage, MarieSolangeSession } from "./types";
import { emptyMarieSolangeSession } from "./qualification-engine";

const key = "flowsuite360:marie-solange:v1";

export type MarieSolangeStoredState = {
  session: MarieSolangeSession;
  messages: MarieSolangeMessage[];
};

export function loadMarieSolangeState(): MarieSolangeStoredState | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MarieSolangeStoredState;
  } catch {
    return null;
  }
}

export function saveMarieSolangeState(state: MarieSolangeStoredState) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(key, JSON.stringify(state));
}

export function clearMarieSolangeState() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(key);
}

export function createEmptyStoredState(): MarieSolangeStoredState {
  return {
    session: emptyMarieSolangeSession(),
    messages: []
  };
}
