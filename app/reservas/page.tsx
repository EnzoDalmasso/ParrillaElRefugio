import type { Metadata } from "next";

import { restaurante } from "@/data/restaurante";
import { ReservaWizard } from "@/components/reservas/reserva-wizard";

export const metadata: Metadata = {
  title: "Reservar mesa",
  description: `Reservá tu mesa online en ${restaurante.nombre}, ${restaurante.localidad}. Elegí fecha, horario y cantidad de personas en simples pasos.`,
};

export default function ReservasPage() {
  return (
    <div className="min-h-[100svh] bg-carbon-950 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-500">
          Reservas online
        </span>
        <h1 className="mt-3 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
          Reservá tu mesa
        </h1>
        <p className="mt-3 text-sm text-stone-400 sm:text-base">
          En simples pasos, sin llamadas ni esperas.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <ReservaWizard />
      </div>
    </div>
  );
}
