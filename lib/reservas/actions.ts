"use server";

import type { ReservaFormData } from "@/types";

/**
 * Punto de integración para producción: reemplazar el cuerpo de esta acción
 * por la escritura en Supabase (tabla `reservas`) y, opcionalmente, el envío
 * de una notificación al restaurante. Por ahora es un mock: no persiste datos
 * en ningún backend, solo simula latencia de red para la demo.
 */
export async function crearReservaAction(data: ReservaFormData) {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    ok: true as const,
    reservaId: `demo-${Date.now()}`,
    data,
  };
}
