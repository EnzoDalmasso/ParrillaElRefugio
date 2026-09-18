"use client";

import Link from "next/link";
import { CalendarPlus, CalendarDays, CheckCircle2, Clock, Users } from "lucide-react";
import { motion } from "motion/react";

import { formatearFechaLarga } from "@/lib/utils";
import { construirUrlReservaWhatsApp } from "@/lib/whatsapp";
import { construirUrlGoogleCalendar } from "@/lib/reservas/calendar";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { ReservaFormData } from "@/types";

export function ReservaConfirmation({ reserva }: { reserva: ReservaFormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-lg rounded-3xl border border-ember-500/20 bg-carbon-900/70 p-6 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-10"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 14 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember-500/15 text-ember-400"
      >
        <CheckCircle2 className="h-8 w-8" aria-hidden />
      </motion.span>

      <h2 className="mt-6 font-display text-3xl font-medium text-cream-50">
        ¡Reserva confirmada!
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-stone-400">
        Guardamos los datos de tu mesa. Para que el restaurante la reciba, confirmala por WhatsApp.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl bg-carbon-950/60 p-5 text-left sm:grid-cols-2">
        <div className="flex items-center gap-2.5 text-sm text-stone-200">
          <CalendarDays className="h-4 w-4 shrink-0 text-ember-400" aria-hidden />
          <span className="capitalize">{formatearFechaLarga(reserva.fecha)}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-stone-200">
          <Clock className="h-4 w-4 shrink-0 text-ember-400" aria-hidden />
          {reserva.horario} hs
        </div>
        <div className="flex items-center gap-2.5 text-sm text-stone-200">
          <Users className="h-4 w-4 shrink-0 text-ember-400" aria-hidden />
          {reserva.personas} {reserva.personas === 1 ? "persona" : "personas"}
        </div>
        <div className="flex items-center gap-2.5 text-sm text-stone-200">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-ember-400" aria-hidden />
          {reserva.nombre} {reserva.apellido}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <WhatsAppButton href={construirUrlReservaWhatsApp(reserva)} className="w-full" size="lg" />
        <Button asChild variant="secondary" size="lg" className="w-full">
          <Link
            href={construirUrlGoogleCalendar(reserva)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarPlus className="h-4 w-4" aria-hidden />
            Agregar al calendario
          </Link>
        </Button>
        <Button asChild variant="ghost" className="w-full text-stone-300 hover:text-cream-50">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </motion.div>
  );
}
