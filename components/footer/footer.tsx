import Link from "next/link";
import { Flame, MapPin, Phone } from "lucide-react";

import { restaurante } from "@/data/restaurante";
import { NAV_LINKS } from "@/components/navbar/nav-links";

export function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-50/10 bg-carbon-950 pt-16">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500/15 text-ember-400 ring-1 ring-ember-500/30">
                <Flame className="h-4.5 w-4.5" aria-hidden />
              </span>
              {restaurante.nombreCorto}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              {restaurante.descripcionCorta}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-300 transition-colors hover:text-ember-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservas"
                  className="text-sm text-stone-300 transition-colors hover:text-ember-400"
                >
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Horarios
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-300">
              {restaurante.horarios.map((h) => (
                <li key={h.dia} className="flex justify-between gap-4">
                  <span>{h.etiqueta}</span>
                  <span className="text-right text-stone-400">
                    {h.turnos ? h.turnos.join(" · ") : "Cerrado"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" aria-hidden />
                <span>
                  {restaurante.direccion}, {restaurante.localidad}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-ember-400" aria-hidden />
                <span>{restaurante.telefonoDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-6 sm:flex-row">
          <p className="text-xs text-stone-500">
            © {año} {restaurante.nombre}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-stone-600">Demo comercial desarrollada para presentación.</p>
        </div>
      </div>
    </footer>
  );
}
