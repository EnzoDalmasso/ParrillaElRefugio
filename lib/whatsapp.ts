import { restaurante } from "@/data/restaurante";
import { formatearFechaCorta } from "@/lib/utils";
import type { ReservaFormData } from "@/types";

/**
 * Número centralizado de WhatsApp: se lee siempre desde data/restaurante.ts,
 * nunca hardcodeado en los componentes.
 */
export const WHATSAPP_NUMERO = restaurante.whatsappNumero;

export function construirUrlWhatsApp(mensaje: string) {
  const texto = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
}

export function construirMensajeReserva(data: ReservaFormData) {
  const lineas = [
    "Hola, quiero confirmar una reserva:",
    `Nombre: ${data.nombre} ${data.apellido}`,
    `Fecha: ${formatearFechaCorta(data.fecha)}`,
    `Horario: ${data.horario}`,
    `Personas: ${data.personas}`,
  ];

  if (data.comentarios) {
    lineas.push(`Comentarios: ${data.comentarios}`);
  }

  return lineas.join("\n");
}

export function construirUrlReservaWhatsApp(data: ReservaFormData) {
  return construirUrlWhatsApp(construirMensajeReserva(data));
}

export function construirUrlContactoWhatsApp() {
  return construirUrlWhatsApp(
    `Hola! Te escribo desde la web de ${restaurante.nombre}.`
  );
}
