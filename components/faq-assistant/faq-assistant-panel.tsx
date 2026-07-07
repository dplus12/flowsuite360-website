"use client";

import Link from "next/link";
import { ArrowLeft, Check, Copy, ExternalLink, Search, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { getWhatsAppHref, WHATSAPP_NUMBER } from "@/lib/contact";
import {
  assistantCategories,
  assistantContent,
  demoOptions,
  objections,
  planRecommendations,
  popularQuestions,
  quickActions,
  searchableItems,
  searchSynonyms,
  sectorOptions,
  type AssistantAction,
  type AssistantCard,
  type AssistantContent,
  type AssistantView,
  type DemoOptionId,
  type ObjectionId,
  type SectorOptionId,
  welcomeMessage
} from "./faq-data";

type FaqAssistantPanelProps = {
  onClose: () => void;
};

type ContentViewId = Exclude<
  AssistantView,
  "home" | `demo:${DemoOptionId}` | `sector:${SectorOptionId}` | `objection:${ObjectionId}`
>;

type LeadDraft = {
  company: string;
  location: string;
  sector: string;
  need: string;
  users: string;
  products: string;
  urgency: string;
  wishes: string;
};

const initialLeadDraft: LeadDraft = {
  company: "",
  location: "",
  sector: "",
  need: "",
  users: "",
  products: "",
  urgency: "cette semaine",
  wishes: "dÃ©mo"
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function getDemoOptionId(view: AssistantView): DemoOptionId | null {
  return view.startsWith("demo:") ? (view.replace("demo:", "") as DemoOptionId) : null;
}

function getSectorOptionId(view: AssistantView): SectorOptionId | null {
  return view.startsWith("sector:") ? (view.replace("sector:", "") as SectorOptionId) : null;
}

function getObjectionId(view: AssistantView): ObjectionId | null {
  return view.startsWith("objection:") ? (view.replace("objection:", "") as ObjectionId) : null;
}

function isContentViewId(view: AssistantView): view is ContentViewId {
  return view !== "home" && !view.startsWith("demo:") && !view.startsWith("sector:") && !view.startsWith("objection:");
}

function expandSearchTerm(term: string) {
  const normalizedTerm = normalize(term);
  const pieces = [normalizedTerm];

  Object.entries(searchSynonyms).forEach(([key, values]) => {
    const normalizedKey = normalize(key);
    const normalizedValues = values.map(normalize);
    const isMatch =
      normalizedKey.includes(normalizedTerm) ||
      normalizedTerm.includes(normalizedKey) ||
      normalizedValues.some((value) => value.includes(normalizedTerm) || normalizedTerm.includes(value));

    if (isMatch) {
      pieces.push(normalizedKey, ...normalizedValues);
    }
  });

  return Array.from(new Set(pieces.filter(Boolean)));
}

function matchesSearch(item: AssistantCard, term: string) {
  const searchTerms = expandSearchTerm(term);
  const haystack = normalize([item.title, item.description, ...item.keywords].filter(Boolean).join(" "));
  return searchTerms.some((searchTerm) => haystack.includes(searchTerm));
}

function buildLeadSummary(draft: LeadDraft) {
  const company = draft.company || "Entreprise Ã  prÃ©ciser";
  const location = draft.location || "ville/pays Ã  prÃ©ciser";
  const sector = draft.sector || "secteur Ã  prÃ©ciser";
  const need = draft.need || "besoin Ã  prÃ©ciser";
  const users = draft.users || "nombre d'utilisateurs Ã  prÃ©ciser";
  const products = draft.products || "nombre d'articles Ã  prÃ©ciser";
  const urgency = draft.urgency || "urgence Ã  prÃ©ciser";

  return `Demande prÃ©parÃ©e : ${sector} Ã  ${location}, besoin ${need}, ${users} utilisateurs, ${products} articles, urgence ${urgency}. Entreprise : ${company}. Souhaite : ${draft.wishes || "dÃ©mo"}.`;
}

function buildWhatsAppMessage(draft: LeadDraft) {
  return [
    "Bonjour FlowSuite360, je souhaite une dÃ©mo.",
    `Entreprise : ${draft.company || ""}`,
    `Pays / ville : ${draft.location || ""}`,
    `Secteur : ${draft.sector || ""}`,
    `Besoin principal : ${draft.need || ""}`,
    `Nombre d'utilisateurs : ${draft.users || ""}`,
    `Nombre d'articles : ${draft.products || ""}`,
    `Urgence : ${draft.urgency || ""}`,
    `Souhaite : ${draft.wishes || ""}`
  ].join("\n");
}

function buildWhatsAppHref(message: string) {
  if (!WHATSAPP_NUMBER) {
    return null;
  }
  return getWhatsAppHref(message);
}

export function FaqAssistantPanel({ onClose }: FaqAssistantPanelProps) {
  const [view, setView] = useState<AssistantView>("home");
  const [query, setQuery] = useState("");
  const [leadDraft, setLeadDraft] = useState<LeadDraft>(initialLeadDraft);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "manual">("idle");

  const searchResults = useMemo(() => {
    const term = query.trim();
    if (term.length < 2) {
      return [];
    }

    return searchableItems.filter((item) => matchesSearch(item, term)).slice(0, 7);
  }, [query]);

  const hasSearch = query.trim().length >= 2;
  const demoOptionId = getDemoOptionId(view);
  const sectorOptionId = getSectorOptionId(view);
  const objectionId = getObjectionId(view);
  const selectedDemo = demoOptionId ? demoOptions.find((option) => option.id === demoOptionId) : null;
  const selectedSector = sectorOptionId ? sectorOptions.find((option) => option.id === sectorOptionId) : null;
  const selectedObjection = objectionId ? objections.find((item) => item.id === objectionId) : null;
  const content = selectedDemo
    ? {
        title: selectedDemo.title,
        description: selectedDemo.description,
        actions: selectedDemo.actions
      }
    : isContentViewId(view)
      ? assistantContent[view]
      : null;

  const leadSummary = buildLeadSummary(leadDraft);
  const whatsappMessage = buildWhatsAppMessage(leadDraft);
  const whatsappHref = buildWhatsAppHref(whatsappMessage);

  const navigate = (nextView: AssistantView) => {
    setView(nextView);
    setQuery("");
    setCopyStatus("idle");
  };

  const copyLead = async () => {
    try {
      await navigator.clipboard.writeText(`${leadSummary}\n\n${whatsappMessage}`);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("manual");
    }
  };

  return (
    <section
      id="flowsuite360-assistant-panel"
      aria-label="Assistant FlowSuite360"
      className="mb-3 flex max-h-[min(760px,calc(100vh-7.5rem))] w-[calc(100vw-1.5rem)] max-w-[430px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
    >
      <header className="border-b border-slate-200 bg-midnight px-4 py-4 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-200">Assistant FlowSuite360</p>
            <h2 className="mt-1 text-lg font-black">Besoin d&apos;aide ?</h2>
          </div>
          <button
            type="button"
            aria-label="Fermer l'assistant"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <label className="mt-4 flex min-h-11 items-center gap-2 rounded-lg bg-white px-3 text-slate-600 shadow-sm">
          <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="sr-only">Rechercher dans l&apos;assistant</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Prix, tarif, caisse, Excel, ASA..."
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        {hasSearch ? (
          <SearchResults results={searchResults} query={query} onSelect={navigate} onFallback={() => navigate("searchFallback")} />
        ) : selectedSector ? (
          <SectorDetail sector={selectedSector} onBack={() => navigate("sectorDemo")} onNavigate={navigate} />
        ) : selectedObjection ? (
          <ObjectionDetail objection={selectedObjection} onBack={() => navigate("objections")} onNavigate={navigate} />
        ) : view === "leadPrep" && content ? (
          <LeadPrepView
            content={content}
            draft={leadDraft}
            summary={leadSummary}
            whatsappHref={whatsappHref}
            onDraftChange={setLeadDraft}
            onBack={() => navigate("home")}
            onCopy={copyLead}
            onNavigate={navigate}
            copyStatus={copyStatus}
          />
        ) : content ? (
          <ContentView
            view={view}
            content={content}
            selectedDemo={Boolean(selectedDemo)}
            onBack={() => navigate("home")}
            onNavigate={navigate}
          />
        ) : (
          <HomeView onNavigate={navigate} />
        )}
      </div>
    </section>
  );
}

function HomeView({ onNavigate }: { onNavigate: (view: AssistantView) => void }) {
  return (
    <div className="space-y-5">
      <p className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">{welcomeMessage}</p>
      <CardGrid title="Actions rapides" items={quickActions} onNavigate={onNavigate} />
      <CardGrid title="Questions populaires" items={popularQuestions} compact onNavigate={onNavigate} />

      <div>
        <h3 className="text-sm font-black text-midnight">CatÃ©gories</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {assistantCategories.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => onNavigate(item.view)}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 transition hover:border-brand hover:text-brand"
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardGrid({
  title,
  items,
  compact,
  onNavigate
}: {
  title: string;
  items: AssistantCard[];
  compact?: boolean;
  onNavigate: (view: AssistantView) => void;
}) {
  return (
    <div>
      <h3 className="text-sm font-black text-midnight">{title}</h3>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <AssistantCardButton key={item.id} item={item} compact={compact} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function SearchResults({
  results,
  query,
  onSelect,
  onFallback
}: {
  results: AssistantCard[];
  query: string;
  onSelect: (view: AssistantView) => void;
  onFallback: () => void;
}) {
  if (results.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-sm font-semibold text-slate-500">Aucun rÃ©sultat pour &quot;{query}&quot;.</p>
        <button
          type="button"
          onClick={onFallback}
          className="w-full rounded-lg bg-midnight px-4 py-3 text-left text-sm font-black text-white transition hover:bg-brand"
        >
          Voir les options recommandÃ©es
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-sm font-black text-midnight">RÃ©sultats</h3>
      <div className="mt-3 grid gap-2">
        {results.map((item) => (
          <AssistantCardButton key={item.id} item={item} onNavigate={onSelect} />
        ))}
      </div>
    </div>
  );
}

function ContentView({
  view,
  content,
  selectedDemo,
  onBack,
  onNavigate
}: {
  view: AssistantView;
  content: AssistantContent;
  selectedDemo: boolean;
  onBack: () => void;
  onNavigate: (view: AssistantView) => void;
}) {
  return (
    <div className="space-y-4">
      <BackButton onClick={onBack} />
      <ContentHeader content={content} />

      {view === "planGuide" ? <PlanRecommendations /> : null}
      {view === "demo" ? <DemoList onNavigate={onNavigate} /> : null}
      {view === "sectorDemo" ? <SectorList onNavigate={onNavigate} /> : null}
      {view === "objections" ? <ObjectionList onNavigate={onNavigate} /> : null}

      {content.steps ? <StepList steps={content.steps} /> : null}
      {content.note ? <Note>{content.note}</Note> : null}

      {selectedDemo ? (
        <p className="rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-600">
          Si cette dÃ©monstration n&apos;est pas encore publiÃ©e en vidÃ©o, utilisez la page de dÃ©mo ou contactez l&apos;Ã©quipe pour
          choisir le meilleur format.
        </p>
      ) : null}

      <ActionList actions={content.actions} onNavigate={onNavigate} />
    </div>
  );
}

function ContentHeader({ content }: { content: AssistantContent }) {
  return (
    <div>
      <h3 className="text-xl font-black leading-tight text-midnight">{content.title}</h3>
      {content.description ? <p className="mt-3 text-sm leading-6 text-slate-600">{content.description}</p> : null}
    </div>
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-2">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-black text-white">
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-semibold leading-6 text-amber-900">
      {children}
    </p>
  );
}

function PlanRecommendations() {
  return (
    <div className="grid gap-2">
      {planRecommendations.map((plan) => (
        <article key={plan.name} className="rounded-xl border border-slate-200 bg-white p-3">
          <h4 className="text-sm font-black text-midnight">{plan.name}</h4>
          <p className="mt-1 text-xs leading-5 text-slate-600">{plan.description}</p>
        </article>
      ))}
    </div>
  );
}

function DemoList({ onNavigate }: { onNavigate: (view: AssistantView) => void }) {
  return (
    <div className="grid gap-2">
      {demoOptions.map((option) => (
        <button
          type="button"
          key={option.id}
          onClick={() => onNavigate(`demo:${option.id}`)}
          className="rounded-xl border border-slate-200 p-3 text-left transition hover:border-brand hover:bg-slate-50"
        >
          <span className="block text-sm font-black text-midnight">{option.title}</span>
          <span className="mt-1 block text-xs leading-5 text-slate-500">{option.description}</span>
        </button>
      ))}
    </div>
  );
}

function SectorList({ onNavigate }: { onNavigate: (view: AssistantView) => void }) {
  return (
    <div className="grid gap-2">
      {sectorOptions.map((sector) => (
        <button
          type="button"
          key={sector.id}
          onClick={() => onNavigate(`sector:${sector.id}`)}
          className="flex gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-brand hover:bg-slate-50"
        >
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <sector.icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-black text-midnight">{sector.title}</span>
            <span className="mt-1 block text-xs leading-5 text-slate-500">{sector.description}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

function SectorDetail({
  sector,
  onBack,
  onNavigate
}: {
  sector: (typeof sectorOptions)[number];
  onBack: () => void;
  onNavigate: (view: AssistantView) => void;
}) {
  return (
    <div className="space-y-4">
      <BackButton onClick={onBack} />
      <div>
        <h3 className="text-xl font-black leading-tight text-midnight">{sector.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{sector.description}</p>
      </div>
      <div className="rounded-xl bg-slate-50 p-3">
        <h4 className="text-sm font-black text-midnight">Modules recommandÃ©s</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {sector.modules.map((module) => (
            <span key={module} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700">
              {module}
            </span>
          ))}
        </div>
      </div>
      <p className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm font-semibold leading-6 text-sky-950">
        DÃ©mo recommandÃ©e : {sector.recommendedDemo}
      </p>
      <div className="grid gap-2">
        <Link href={sector.href} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-black text-white transition hover:bg-passion">
          Voir la page recommandÃ©e
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Link>
        <button type="button" onClick={() => onNavigate("leadPrep")} className="min-h-11 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-midnight transition hover:border-brand hover:text-brand">
          PrÃ©parer ma demande
        </button>
      </div>
    </div>
  );
}

function ObjectionList({ onNavigate }: { onNavigate: (view: AssistantView) => void }) {
  return (
    <div className="grid gap-2">
      {objections.map((objection) => (
        <button type="button" key={objection.id} onClick={() => onNavigate(`objection:${objection.id}`)} className="rounded-xl border border-slate-200 p-3 text-left text-sm font-black text-midnight transition hover:border-brand hover:bg-slate-50">
          {objection.question}
        </button>
      ))}
    </div>
  );
}

function ObjectionDetail({
  objection,
  onBack,
  onNavigate
}: {
  objection: (typeof objections)[number];
  onBack: () => void;
  onNavigate: (view: AssistantView) => void;
}) {
  return (
    <div className="space-y-4">
      <BackButton onClick={onBack} />
      <div>
        <h3 className="text-xl font-black leading-tight text-midnight">{objection.question}</h3>
        <p className="mt-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">{objection.answer}</p>
      </div>
      <ActionList
        actions={[
          { label: "Quel plan me convient ?", view: "planGuide" },
          { label: "PrÃ©parer ma demande", view: "leadPrep" },
          { label: "Contacter l'Ã©quipe", href: "/contact" }
        ]}
        onNavigate={onNavigate}
      />
    </div>
  );
}

function LeadPrepView({
  content,
  draft,
  summary,
  whatsappHref,
  onDraftChange,
  onBack,
  onCopy,
  onNavigate,
  copyStatus
}: {
  content: AssistantContent;
  draft: LeadDraft;
  summary: string;
  whatsappHref: string | null;
  onDraftChange: (draft: LeadDraft) => void;
  onBack: () => void;
  onCopy: () => void;
  onNavigate: (view: AssistantView) => void;
  copyStatus: "idle" | "copied" | "manual";
}) {
  const update = (key: keyof LeadDraft, value: string) => onDraftChange({ ...draft, [key]: value });

  return (
    <div className="space-y-4">
      <BackButton onClick={onBack} />
      <ContentHeader content={content} />
      <div className="grid gap-3">
        <LeadInput label="Nom ou entreprise" value={draft.company} onChange={(value) => update("company", value)} />
        <LeadInput label="Pays / ville" value={draft.location} onChange={(value) => update("location", value)} />
        <LeadInput label="Type d'entreprise" value={draft.sector} onChange={(value) => update("sector", value)} />
        <LeadInput label="Besoin principal" value={draft.need} onChange={(value) => update("need", value)} />
        <div className="grid gap-3 sm:grid-cols-2">
          <LeadInput label="Utilisateurs" value={draft.users} onChange={(value) => update("users", value)} />
          <LeadInput label="Articles" value={draft.products} onChange={(value) => update("products", value)} />
        </div>
        <LeadSelect label="Urgence" value={draft.urgency} options={["maintenant", "cette semaine", "ce mois-ci"]} onChange={(value) => update("urgency", value)} />
        <LeadSelect label="Souhaite" value={draft.wishes} options={["dÃ©mo", "prix", "installation", "formation", "importation articles"]} onChange={(value) => update("wishes", value)} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <h4 className="text-sm font-black text-midnight">RÃ©sumÃ©</h4>
        <p className="mt-2 text-sm leading-6 text-slate-700">{summary}</p>
      </div>

      {copyStatus === "copied" ? <p className="rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-800">Demande copiÃ©e.</p> : null}
      {copyStatus === "manual" ? <p className="rounded-lg bg-amber-50 p-3 text-sm font-bold text-amber-900">Copie automatique indisponible. Vous pouvez copier le rÃ©sumÃ© manuellement.</p> : null}

      <div className="grid gap-2">
        <button type="button" onClick={onCopy} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-midnight transition hover:border-brand hover:text-brand">
          {copyStatus === "copied" ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
          Copier ma demande
        </button>
        {whatsappHref ? (
          <Link href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-growth px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-700">
            <Send className="h-4 w-4" aria-hidden="true" />
            Envoyer sur WhatsApp
          </Link>
        ) : (
          <p className="rounded-lg bg-amber-50 p-3 text-sm font-bold text-amber-900">NumÃ©ro WhatsApp Ã  configurer â€” utilisez le formulaire de contact.</p>
        )}
        <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-black text-white transition hover:bg-passion">
          Aller au contact
        </Link>
        <button type="button" onClick={() => onNavigate("productsReady")} className="min-h-11 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-midnight transition hover:border-brand hover:text-brand">
          J&apos;ai beaucoup d&apos;articles
        </button>
      </div>
    </div>
  );
}

function LeadInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1 text-xs font-black text-slate-600">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} className="min-h-10 rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10" />
    </label>
  );
}

function LeadSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1 text-xs font-black text-slate-600">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="min-h-10 rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function AssistantCardButton({ item, compact, onNavigate }: { item: AssistantCard; compact?: boolean; onNavigate: (view: AssistantView) => void }) {
  return (
    <button type="button" onClick={() => onNavigate(item.view)} className="group flex min-h-14 w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-brand hover:bg-slate-50">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
        <item.icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black leading-5 text-midnight">{item.title}</span>
        {!compact && item.description ? <span className="mt-1 block text-xs leading-5 text-slate-500">{item.description}</span> : null}
      </span>
    </button>
  );
}

function ActionList({ actions, onNavigate }: { actions: AssistantAction[]; onNavigate: (view: AssistantView) => void }) {
  return (
    <div className="grid gap-2">
      {actions.map((action) => {
        if (action.href) {
          return (
            <Link key={action.label} href={action.href} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-center text-sm font-black text-white transition hover:bg-passion">
              {action.label}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          );
        }

        return (
          <button type="button" key={action.label} onClick={() => action.view && onNavigate(action.view)} className="min-h-11 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-midnight transition hover:border-brand hover:text-brand">
            {action.label}
          </button>
        );
      })}
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex min-h-9 items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 transition hover:border-brand hover:text-brand">
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Retour
    </button>
  );
}

