import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  target?: "_blank";
};

export function GradientButton({
  href,
  children,
  variant = "primary",
  className,
  target
}: GradientButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-brand via-skyflow to-growth text-white shadow-glow hover:translate-y-[-1px]",
    secondary:
      "border border-slate-200 bg-white text-midnight shadow-sm hover:border-brand hover:text-brand",
    light:
      "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/18"
  };

  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        styles[variant],
        className
      )}
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
