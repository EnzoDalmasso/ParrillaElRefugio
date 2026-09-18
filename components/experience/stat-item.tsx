import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeUp } from "@/lib/motion";

interface StatItemProps {
  valor: string;
  etiqueta: string;
  delay?: number;
}

export function StatItem({ valor, etiqueta, delay = 0 }: StatItemProps) {
  return (
    <AnimatedSection variants={fadeUp} delay={delay} className="border-l border-cream-50/15 pl-4">
      <p className="font-display text-3xl font-medium text-cream-50 sm:text-4xl">
        {valor}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">
        {etiqueta}
      </p>
    </AnimatedSection>
  );
}
