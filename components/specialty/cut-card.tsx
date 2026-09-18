import Image from "next/image";

import type { CorteEspecialidad } from "@/types";
import { AnimatedSection } from "@/components/ui/animated-section";
import { scaleIn } from "@/lib/motion";

export function CutCard({ corte, delay = 0 }: { corte: CorteEspecialidad; delay?: number }) {
  return (
    <AnimatedSection
      variants={scaleIn}
      delay={delay}
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
    >
      <Image
        src={corte.imagen}
        alt={corte.nombre}
        fill
        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/35 to-transparent transition-opacity duration-500 group-hover:from-carbon-950/95" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ember-400">
          {corte.descripcion}
        </span>
        <h3 className="mt-1 font-display text-2xl font-medium text-cream-50">
          {corte.nombre}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-stone-300 opacity-0 transition-all duration-500 ease-out group-hover:max-h-20 group-hover:opacity-100">
          {corte.detalle}
        </p>
      </div>
    </AnimatedSection>
  );
}
