import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";

interface SectionTitleProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  kicker,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <AnimatedSection
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker ? (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-ember-400" : "text-ember-600"
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden />
          {kicker}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-4xl font-medium leading-[1.1] sm:text-5xl",
          light ? "text-cream-50" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-stone-300" : "text-stone-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimatedSection>
  );
}
