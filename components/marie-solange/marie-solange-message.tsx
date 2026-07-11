import Link from "next/link";
import { createMarieSolangeKnowledgeProvider } from "@/lib/marie-solange/provider-factory";
import type { MarieSolangeMessage as Message } from "@/lib/marie-solange/types";

export function MarieSolangeMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const provider = createMarieSolangeKnowledgeProvider();

  return (
    <div className={`grid gap-2 ${isUser ? "justify-items-end" : "justify-items-start"}`}>
      <div
        className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser ? "bg-brand text-white" : "border border-slate-200 bg-slate-50 text-slate-700"
        }`}
      >
        {message.text}
      </div>
      {!isUser && message.actions?.length ? (
        <div className="flex max-w-[86%] flex-wrap gap-2">
          {message.actions.map((action) => {
            const href = action.routeId ? provider.getRoute(action.routeId).href : undefined;
            return href ? (
              <Link
                key={action.label}
                href={href}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-brand shadow-sm hover:border-brand"
              >
                {action.label}
              </Link>
            ) : null;
          })}
        </div>
      ) : null}
    </div>
  );
}
