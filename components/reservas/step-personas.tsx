"use client";

import { Users } from "lucide-react";

import { PERSONAS_OPCIONES } from "@/data/reservas";
import { cn } from "@/lib/utils";

interface StepPersonasProps {
  personasSeleccionadas: number | null;
  onSeleccionar: (personas: number) => void;
}

export function StepPersonas({ personasSeleccionadas, onSeleccionar }: StepPersonasProps) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-cream-50 sm:text-3xl">
        ¿Cuántos son?
      </h2>
      <p className="mt-2 text-sm text-stone-400">Elegí la cantidad de personas para tu mesa.</p>

      <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-8">
        {PERSONAS_OPCIONES.map((n) => {
          const activo = personasSeleccionadas === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onSeleccionar(n)}
              aria-pressed={activo}
              className={cn(
                "flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl border transition-all duration-300",
                activo
                  ? "border-ember-500 bg-ember-500 text-carbon-950 shadow-[0_8px_24px_-8px_rgba(219,138,63,0.6)]"
                  : "border-cream-50/12 bg-carbon-900/50 text-cream-100 hover:border-ember-400/50 hover:bg-carbon-900"
              )}
            >
              <Users className="h-4 w-4 opacity-70" aria-hidden />
              <span className="font-display text-lg font-semibold">{n}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-stone-500">¿Sos más de 8? Contanos en los comentarios del último paso.</p>
    </div>
  );
}
