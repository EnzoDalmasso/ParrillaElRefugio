"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import type { CategoriaMenu, ProductoMenu } from "@/types";
import { cn } from "@/lib/utils";
import { MenuCard } from "@/components/menu/menu-card";

interface MenuExplorerProps {
  categorias: CategoriaMenu[];
  productos: ProductoMenu[];
}

export function MenuExplorer({ categorias, productos }: MenuExplorerProps) {
  const [activa, setActiva] = useState(categorias[0]?.id);
  const [busqueda, setBusqueda] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const clickScroll = useRef(false);

  const productosFiltrados = useMemo(() => {
    if (!busqueda.trim()) return null;
    const q = busqueda.trim().toLowerCase();
    return productos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q)
    );
  }, [busqueda, productos]);

  useEffect(() => {
    if (productosFiltrados) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiva(entry.target.id as CategoriaMenu["id"]);
          }
        });
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    categorias.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categorias, productosFiltrados]);

  function irACategoria(id: string) {
    setActiva(id as CategoriaMenu["id"]);
    clickScroll.current = true;
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 128;
      window.scrollTo({ top, behavior: "smooth" });
    }
    window.setTimeout(() => {
      clickScroll.current = false;
    }, 700);
  }

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 border-b border-cream-50/10 bg-carbon-950/95 px-4 py-4 backdrop-blur-md sm:top-18 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
              aria-hidden
            />
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar en el menú…"
              aria-label="Buscar plato"
              className="w-full rounded-full border border-cream-50/15 bg-carbon-900/70 py-2.5 pl-10 pr-10 text-sm text-cream-50 placeholder:text-stone-500 focus:border-ember-400/60 focus:outline-none focus:ring-2 focus:ring-ember-400/30"
            />
            {busqueda ? (
              <button
                type="button"
                onClick={() => setBusqueda("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 hover:text-cream-50"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          {!productosFiltrados ? (
            <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => irACategoria(cat.id)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    activa === cat.id
                      ? "bg-ember-500 text-carbon-950"
                      : "bg-cream-50/5 text-stone-300 hover:bg-cream-50/10 hover:text-cream-50"
                  )}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {productosFiltrados ? (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-stone-400">
            {productosFiltrados.length} resultado
            {productosFiltrados.length === 1 ? "" : "s"} para &ldquo;{busqueda}&rdquo;
          </p>
          {productosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {productosFiltrados.map((p) => (
                <MenuCard producto={p} key={p.id} />
              ))}
            </div>
          ) : (
            <p className="text-stone-400">No encontramos platos que coincidan.</p>
          )}
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {categorias.map((cat) => {
            const items = productos.filter((p) => p.categoriaId === cat.id);
            if (items.length === 0) return null;
            return (
              <section
                key={cat.id}
                id={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                className="scroll-mt-36 py-8 first:pt-0"
              >
                <h2 className="font-display text-2xl font-medium text-cream-50 sm:text-3xl">
                  {cat.nombre}
                </h2>
                <p className="mt-1.5 text-sm text-stone-400">{cat.descripcion}</p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {items.map((p, i) => (
                    <MenuCard producto={p} key={p.id} delay={(i % 4) * 0.05} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
