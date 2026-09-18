"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { crearReservaAction } from "@/lib/reservas/actions";
import type { DatosClienteInput } from "@/lib/reservas/schema";
import type { ReservaFormData } from "@/types";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/reservas/step-indicator";
import { StepFecha } from "@/components/reservas/step-fecha";
import { StepPersonas } from "@/components/reservas/step-personas";
import { StepHorario } from "@/components/reservas/step-horario";
import { StepDatos } from "@/components/reservas/step-datos";
import { ReservaConfirmation } from "@/components/reservas/reserva-confirmation";

const VARIANTES = {
  enter: (direccion: number) => ({ x: direccion > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direccion: number) => ({ x: direccion > 0 ? -40 : 40, opacity: 0 }),
};

export function ReservaWizard() {
  const [paso, setPaso] = useState(1);
  const [direccion, setDireccion] = useState(1);
  const [fecha, setFecha] = useState<string | null>(null);
  const [personas, setPersonas] = useState<number | null>(null);
  const [horario, setHorario] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [reservaConfirmada, setReservaConfirmada] = useState<ReservaFormData | null>(null);

  function avanzar() {
    setDireccion(1);
    setPaso((p) => Math.min(p + 1, 4));
  }

  function retroceder() {
    setDireccion(-1);
    setPaso((p) => Math.max(p - 1, 1));
  }

  async function handleSubmitDatos(datos: DatosClienteInput) {
    if (!fecha || !personas || !horario) return;
    setEnviando(true);
    const reserva: ReservaFormData = { ...datos, fecha, personas, horario };
    const resultado = await crearReservaAction(reserva);
    setEnviando(false);
    if (resultado.ok) {
      setReservaConfirmada(reserva);
    }
  }

  if (reservaConfirmada) {
    return <ReservaConfirmation reserva={reservaConfirmada} />;
  }

  const puedeAvanzar =
    (paso === 1 && !!fecha) || (paso === 2 && !!personas) || (paso === 3 && !!horario);

  return (
    <div className="mx-auto max-w-3xl">
      <StepIndicator pasoActual={paso} />

      <div className="relative mt-10 min-h-[380px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direccion}>
          <motion.div
            key={paso}
            custom={direccion}
            variants={VARIANTES}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {paso === 1 ? (
              <StepFecha fechaSeleccionada={fecha} onSeleccionar={setFecha} />
            ) : null}
            {paso === 2 ? (
              <StepPersonas personasSeleccionadas={personas} onSeleccionar={setPersonas} />
            ) : null}
            {paso === 3 && fecha ? (
              <StepHorario fecha={fecha} horarioSeleccionado={horario} onSeleccionar={setHorario} />
            ) : null}
            {paso === 4 && fecha && personas && horario ? (
              <StepDatos
                fecha={fecha}
                personas={personas}
                horario={horario}
                valoresIniciales={{}}
                enviando={enviando}
                onSubmit={handleSubmitDatos}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      {paso < 4 ? (
        <div className="mt-10 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={retroceder}
            disabled={paso === 1}
            className="text-stone-300 hover:text-cream-50 disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Atrás
          </Button>
          <Button type="button" onClick={avanzar} disabled={!puedeAvanzar} size="lg">
            Continuar
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      ) : (
        <div className="mt-6">
          <Button
            type="button"
            variant="ghost"
            onClick={retroceder}
            className="text-stone-300 hover:text-cream-50"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Atrás
          </Button>
        </div>
      )}
    </div>
  );
}
