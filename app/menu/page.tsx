import type { Metadata } from "next";
import Link from "next/link";

import { categoriasMenu, menu } from "@/data/menu";
import { restaurante } from "@/data/restaurante";
import { Button } from "@/components/ui/button";
import { MenuExplorer } from "@/components/menu/menu-explorer";

export const metadata: Metadata = {
  title: "Menú digital",
  description: `Explorá la carta completa de ${restaurante.nombre}: parrilla, carnes, guarniciones, ensaladas, bebidas y postres.`,
};

export default function MenuPage() {
  return (
    <div className="bg-carbon-950 pt-16 sm:pt-18">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-6 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-500">
          Carta completa
        </span>
        <h1 className="mt-3 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
          Nuestro menú
        </h1>
        <p className="mt-3 max-w-xl text-sm text-stone-400 sm:text-base">
          Pensado para pedirse desde la mesa: elegí una categoría o buscá el plato que tenés en mente.
        </p>
      </div>

      <MenuExplorer categorias={categoriasMenu} productos={menu} />

      <div className="border-t border-cream-50/10 bg-carbon-900/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="font-display text-2xl text-cream-50 sm:text-3xl">
            ¿Querés disfrutarlo acá?
          </p>
          <Button asChild size="lg">
            <Link href="/reservas">Reservar mesa</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
