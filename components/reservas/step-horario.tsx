"use client";

import { useMemo } from "react";

import { obtenerDisponibilidadMock } from "@/data/reservas";
import { formatearFechaLarga } from "@/lib/utils";
import { HorarioPill } from "@/components/reservas/horario-pill";

interface StepHorarioProps {
  fecha: string;
  horarioSeleccionado: string | null;
  onSeleccionar: (hora: string) => void;
}

export function StepHorario({ fecha, horarioSeleccionado, onSeleccionar }: StepHorarioProps) {
  const franjas = useMemo(() => obtenerDisponibilidadMock(fecha), [fecha]);

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-cream-50 sm:text-3xl">
        Elegí un horario
      </h2>
      <p className="mt-2 text-sm capitalize text-stone-400">{formatearFechaLarga(fecha)}</p>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {franjas.map((franja) => (
          <HorarioPill
            key={franja.hora}
            franja={franja}
            activo={horarioSeleccionado === franja.hora}
            onSeleccionar={onSeleccionar}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cream-100/40" /> Disponible
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ember-400" /> Últimos lugares
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-stone-700" /> Completo
        </span>
      </div>
    </div>
  );
}
