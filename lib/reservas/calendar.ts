import { restaurante } from "@/data/restaurante";
import type { ReservaFormData } from "@/types";

function formatearFechaGoogle(fecha: Date) {
  return fecha.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function construirUrlGoogleCalendar(data: ReservaFormData) {
  const inicio = new Date(`${data.fecha}T${data.horario}:00`);
  const fin = new Date(inicio.getTime() + 2 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Reserva en ${restaurante.nombre}`,
    dates: `${formatearFechaGoogle(inicio)}/${formatearFechaGoogle(fin)}`,
    details: `Reserva para ${data.personas} personas a nombre de ${data.nombre} ${data.apellido}.`,
    location: `${restaurante.direccion}, ${restaurante.localidad}, ${restaurante.provincia}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
