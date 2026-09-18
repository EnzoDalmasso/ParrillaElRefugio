import { DIAS_ANTICIPACION_MAXIMA } from "@/data/reservas";

export interface DiaDisponible {
  iso: string;
  diaSemana: string;
  diaMes: number;
  mes: string;
  esHoy: boolean;
}

export function obtenerProximosDias(cantidad = DIAS_ANTICIPACION_MAXIMA): DiaDisponible[] {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  return Array.from({ length: cantidad }, (_, i) => {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() + i);
    return {
      iso: fecha.toISOString().slice(0, 10),
      diaSemana: new Intl.DateTimeFormat("es-AR", { weekday: "short" }).format(fecha),
      diaMes: fecha.getDate(),
      mes: new Intl.DateTimeFormat("es-AR", { month: "short" }).format(fecha),
      esHoy: i === 0,
    };
  });
}
