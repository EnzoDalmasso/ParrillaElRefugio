import Image from "next/image";

import type { ProductoMenu } from "@/types";
import { cn, formatearPrecio } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeUp } from "@/lib/motion";

const ETIQUETA_STYLES: Record<NonNullable<ProductoMenu["etiqueta"]>, string> = {
  "Más pedido": "bg-ember-500/15 text-ember-400 ring-ember-500/30",
  Nuevo: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
  "Para compartir": "bg-wood-500/20 text-cream-100 ring-wood-500/30",
  Casa: "bg-brasa-600/20 text-orange-300 ring-brasa-600/40",
};

interface MenuCardProps {
  producto: ProductoMenu;
  delay?: number;
}

export function MenuCard({ producto, delay = 0 }: MenuCardProps) {
  return (
    <AnimatedSection
      variants={fadeUp}
      delay={delay}
      className="group flex gap-4 rounded-2xl border border-cream-50/8 bg-carbon-900/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/30 hover:bg-carbon-900 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] sm:p-4"
    >
      {producto.imagen ? (
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            sizes="112px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-medium leading-tight text-cream-50 sm:text-xl">
              {producto.nombre}
            </h3>
            {producto.etiqueta ? (
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ring-1",
                  ETIQUETA_STYLES[producto.etiqueta]
                )}
              >
                {producto.etiqueta}
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-400">
            {producto.descripcion}
          </p>
        </div>
        <p className="mt-3 font-display text-base font-semibold text-ember-400">
          {formatearPrecio(producto.precio)}
        </p>
      </div>
    </AnimatedSection>
  );
}
