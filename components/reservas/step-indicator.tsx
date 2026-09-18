"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const PASOS = ["Fecha", "Personas", "Horario", "Tus datos"];

export function StepIndicator({ pasoActual }: { pasoActual: number }) {
  return (
    <ol className="flex items-center justify-between gap-2">
      {PASOS.map((paso, i) => {
        const numero = i + 1;
        const completado = numero < pasoActual;
        const activo = numero === pasoActual;
        return (
          <li key={paso} className="flex flex-1 items-center gap-2 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <motion.span
                animate={{
                  scale: activo ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 sm:h-10 sm:w-10",
                  completado && "bg-ember-500 text-carbon-950",
                  activo && !completado && "bg-ember-500/15 text-ember-400 ring-2 ring-ember-500",
                  !activo && !completado && "bg-cream-50/8 text-stone-400"
                )}
              >
                {completado ? <Check className="h-4 w-4" /> : numero}
              </motion.span>
              <span
                className={cn(
                  "hidden text-xs font-medium sm:block",
                  activo || completado ? "text-cream-50" : "text-stone-500"
                )}
              >
                {paso}
              </span>
            </div>
            {numero < PASOS.length ? (
              <div className="h-px flex-1 bg-cream-50/10">
                <motion.div
                  className="h-px bg-ember-500"
                  initial={false}
                  animate={{ width: completado ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
