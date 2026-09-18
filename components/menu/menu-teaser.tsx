"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { categoriasMenu, menu } from "@/data/menu";
import { cn, formatearPrecio } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeUp } from "@/lib/motion";
import type { CategoriaId, ProductoMenu } from "@/types";

const CATEGORIAS_TEASER: CategoriaId[] = ["parrilla", "carnes", "postres"];

function MenuCardLight({ producto, delay = 0 }: { producto: ProductoMenu; delay?: number }) {
  return (
    <AnimatedSection
      variants={fadeUp}
      delay={delay}
      className="group flex gap-4 rounded-2xl border border-ink-900/8 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4"
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
          <h3 className="font-display text-lg font-medium leading-tight text-ink-900">
            {producto.nombre}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
            {producto.descripcion}
          </p>
        </div>
        <p className="mt-3 font-display text-base font-semibold text-ember-600">
          {formatearPrecio(producto.precio)}
        </p>
      </div>
    </AnimatedSection>
  );
}

export function MenuTeaser() {
  const [activa, setActiva] = useState<CategoriaId>("parrilla");
  const productos = menu.filter((p) => p.categoriaId === activa).slice(0, 4);

  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionTitle
            kicker="Nuestra carta"
            title="Un adelanto del menú"
            description="Elegí una categoría y descubrí algunos de nuestros platos. La carta completa te espera en el menú digital."
          />
          <Button asChild variant="ghost" className="shrink-0">
            <Link href="/menu" className="inline-flex items-center gap-1.5">
              Ver menú completo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categoriasMenu
            .filter((c) => CATEGORIAS_TEASER.includes(c.id))
            .map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiva(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  activa === cat.id
                    ? "bg-ink-900 text-cream-50"
                    : "bg-ink-900/5 text-stone-600 hover:bg-ink-900/10"
                )}
              >
                {cat.nombre}
              </button>
            ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {productos.map((producto, i) => (
            <MenuCardLight producto={producto} delay={i * 0.06} key={producto.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
