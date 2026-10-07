import type { FranjaHoraria } from "@/types";

// Disponibilidad de prueba hasta que haya una base de datos
export const HORARIOS_BASE = [
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
] as const;

export const PERSONAS_OPCIONES = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const DIAS_ANTICIPACION_MAXIMA = 30;

// Usa la fecha como semilla para que el mismo día muestre siempre lo mismo
export function obtenerDisponibilidadMock(fechaISO: string): FranjaHoraria[] {
  const semilla = fechaISO
    .split("-")
    .reduce((acc, part) => acc + Number(part), 0);

  return HORARIOS_BASE.map((hora, index) => {
    const valor = (semilla + index * 7) % 10;
    let estado: FranjaHoraria["estado"] = "disponible";
    if (valor >= 8) estado = "completo";
    else if (valor >= 6) estado = "pocos-lugares";
    return { hora, estado };
  });
}
