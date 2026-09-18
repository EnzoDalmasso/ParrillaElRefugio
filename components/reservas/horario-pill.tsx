import { cn } from "@/lib/utils";
import type { FranjaHoraria } from "@/types";

const ESTADO_LABEL: Record<FranjaHoraria["estado"], string> = {
  disponible: "Disponible",
  "pocos-lugares": "Últimos lugares",
  completo: "Completo",
};

interface HorarioPillProps {
  franja: FranjaHoraria;
  activo: boolean;
  onSeleccionar: (hora: string) => void;
}

export function HorarioPill({ franja, activo, onSeleccionar }: HorarioPillProps) {
  const disabled = franja.estado === "completo";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSeleccionar(franja.hora)}
      aria-pressed={activo}
      className={cn(
        "flex flex-col items-center gap-1 rounded-2xl border px-3 py-3.5 transition-all duration-300 disabled:pointer-events-none disabled:opacity-40",
        activo && !disabled
          ? "border-ember-500 bg-ember-500 text-carbon-950 shadow-[0_8px_24px_-8px_rgba(219,138,63,0.6)]"
          : "border-cream-50/12 bg-carbon-900/50 text-cream-100 hover:border-ember-400/50 hover:bg-carbon-900"
      )}
    >
      <span className="font-display text-base font-semibold">{franja.hora}</span>
      <span
        className={cn(
          "text-[10px] font-medium uppercase tracking-wide",
          activo && !disabled ? "text-carbon-950/70" : "text-stone-500",
          franja.estado === "pocos-lugares" && !activo && "text-ember-400",
          franja.estado === "completo" && "text-stone-600"
        )}
      >
        {ESTADO_LABEL[franja.estado]}
      </span>
    </button>
  );
}
