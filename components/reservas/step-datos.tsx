"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Users, Clock } from "lucide-react";
import { useForm } from "react-hook-form";

import { formatearFechaLarga } from "@/lib/utils";
import { datosClienteSchema, type DatosClienteInput } from "@/lib/reservas/schema";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/input";

interface StepDatosProps {
  fecha: string;
  personas: number;
  horario: string;
  valoresIniciales: Partial<DatosClienteInput>;
  enviando: boolean;
  onSubmit: (data: DatosClienteInput) => void;
}

export function StepDatos({
  fecha,
  personas,
  horario,
  valoresIniciales,
  enviando,
  onSubmit,
}: StepDatosProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DatosClienteInput>({
    resolver: zodResolver(datosClienteSchema),
    defaultValues: valoresIniciales,
  });

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-cream-50 sm:text-3xl">
        Tus datos
      </h2>
      <p className="mt-2 text-sm text-stone-400">
        Los usamos solo para confirmar tu reserva.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 rounded-2xl border border-cream-50/10 bg-carbon-900/50 p-4 text-sm text-stone-300">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-ember-400" aria-hidden />
          <span className="capitalize">{formatearFechaLarga(fecha)}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-ember-400" aria-hidden />
          {horario} hs
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4 text-ember-400" aria-hidden />
          {personas} {personas === 1 ? "persona" : "personas"}
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
        noValidate
      >
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            autoComplete="given-name"
            aria-invalid={!!errors.nombre}
            {...register("nombre")}
          />
          <FieldError>{errors.nombre?.message}</FieldError>
        </div>

        <div>
          <Label htmlFor="apellido">Apellido</Label>
          <Input
            id="apellido"
            autoComplete="family-name"
            aria-invalid={!!errors.apellido}
            {...register("apellido")}
          />
          <FieldError>{errors.apellido?.message}</FieldError>
        </div>

        <div>
          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input
            id="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="341 123 4567"
            aria-invalid={!!errors.whatsapp}
            {...register("whatsapp")}
          />
          <FieldError>{errors.whatsapp?.message}</FieldError>
        </div>

        <div>
          <Label htmlFor="email">Email (opcional)</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="comentarios">Comentarios (opcional)</Label>
          <Textarea
            id="comentarios"
            rows={3}
            placeholder="Alergias, mesa afuera, somos más de 8…"
            {...register("comentarios")}
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" size="lg" className="w-full" loading={enviando}>
            {enviando ? "Confirmando…" : "Confirmar reserva"}
          </Button>
        </div>
      </form>
    </div>
  );
}
