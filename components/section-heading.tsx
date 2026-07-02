import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black tracking-normal text-midnight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
