"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { obtenerProximosDias } from "@/lib/reservas/fechas";

interface StepFechaProps {
  fechaSeleccionada: string | null;
  onSeleccionar: (fecha: string) => void;
}

export function StepFecha({ fechaSeleccionada, onSeleccionar }: StepFechaProps) {
  const dias = useMemo(() => obtenerProximosDias(), []);

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-cream-50 sm:text-3xl">
        ¿Qué día querés venir?
      </h2>
      <p className="mt-2 text-sm text-stone-400">
        Elegí una fecha disponible para tu reserva.
      </p>

      <div className="scrollbar-none mt-8 flex gap-2.5 overflow-x-auto pb-2 sm:grid sm:grid-cols-7 sm:gap-3">
        {dias.map((dia) => {
          const activo = fechaSeleccionada === dia.iso;
          return (
            <button
              key={dia.iso}
              type="button"
              onClick={() => onSeleccionar(dia.iso)}
              aria-pressed={activo}
              className={cn(
                "flex shrink-0 flex-col items-center gap-1 rounded-2xl border px-4 py-3.5 transition-all duration-300 sm:shrink",
                activo
                  ? "border-ember-500 bg-ember-500 text-carbon-950 shadow-[0_8px_24px_-8px_rgba(219,138,63,0.6)]"
                  : "border-cream-50/12 bg-carbon-900/50 text-cream-100 hover:border-ember-400/50 hover:bg-carbon-900"
              )}
            >
              <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">
                {dia.diaSemana}
              </span>
              <span className="font-display text-xl font-semibold">{dia.diaMes}</span>
              <span className="text-[10px] uppercase tracking-wide opacity-70">{dia.mes}</span>
              {dia.esHoy ? (
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide">
                  Hoy
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
