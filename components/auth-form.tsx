import Link from "next/link";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";

  return (
    <section className="mesh-bg py-20">
      <div className="mx-auto grid min-h-[calc(100vh-16rem)] max-w-md content-center px-4 sm:px-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {isSignup ? "Inscription" : "Connexion"}
          </p>
          <h1 className="mt-3 text-3xl font-black text-midnight">
            {isSignup ? "Créer un compte FlowSuite 360" : "Connexion à FlowSuite 360"}
          </h1>
          <p className="mt-3 leading-7 text-muted">
            Interface V1 préparée pour Supabase Auth. Redirection future : app.flowsuite360.com.
          </p>
          <form className="mt-6 grid gap-4">
            <label>
              <span className="text-sm font-bold text-midnight">Email</span>
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-brand focus:ring-4 focus:ring-indigo-100"
              />
            </label>
            <label>
              <span className="text-sm font-bold text-midnight">Mot de passe</span>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-brand focus:ring-4 focus:ring-indigo-100"
              />
            </label>
            <button
              className="rounded-full bg-gradient-to-r from-brand to-growth px-5 py-3 font-bold text-white"
              type="button"
            >
              {isSignup ? "Créer compte" : "Connexion"}
            </button>
          </form>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold">
            <Link href="/" className="text-muted hover:text-brand">
              Retour accueil
            </Link>
            <Link href={isSignup ? "/login" : "/signup"} className="text-brand hover:text-passion">
              {isSignup ? "Déjà un compte ?" : "Créer un compte"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
