"use server";

import { reservaSchema } from "@/lib/reservas/schema";
import type { ReservaFormData } from "@/types";

// Todavía no guarda nada: cuando haya base de datos, la reserva se inserta acá.
// Se valida de nuevo porque cualquiera puede llamar a la action con un POST.
export async function crearReservaAction(data: ReservaFormData) {
  const parsed = reservaSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false as const };
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    ok: true as const,
    reservaId: `demo-${Date.now()}`,
    data: parsed.data,
  };
}
