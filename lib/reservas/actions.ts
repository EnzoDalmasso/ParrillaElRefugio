"use server";

import { reservaSchema } from "@/lib/reservas/schema";
import type { ReservaFormData } from "@/types";

/**
 * Punto de integración para producción: reemplazar el cuerpo de esta acción
 * por la escritura en Supabase (tabla `reservas`) y, opcionalmente, el envío
 * de una notificación al restaurante. Por ahora es un mock: no persiste datos
 * en ningún backend, solo simula latencia de red para la demo.
 *
 * Las Server Actions se pueden invocar con un POST directo, así que los datos
 * se validan de nuevo acá aunque el formulario ya los haya validado.
 */
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
