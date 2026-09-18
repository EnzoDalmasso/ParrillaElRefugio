import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Link from "next/link";

import { restaurante } from "@/data/restaurante";
import { SectionTitle } from "@/components/ui/section-title";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { construirUrlContactoWhatsApp } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Contacto"
          title="Te esperamos en El Refugio"
          description="Coordiná tu visita o escribinos ante cualquier consulta."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <AnimatedSection variants={fadeUp} className="space-y-6 lg:col-span-2">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-600">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-ink-900">Ubicación</p>
                <p className="mt-0.5 text-sm text-stone-600">
                  {restaurante.direccion}, {restaurante.localidad}, {restaurante.provincia}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-600">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div className="flex-1">
                <p className="font-medium text-ink-900">Horarios</p>
                <ul className="mt-1.5 space-y-1 text-sm text-stone-600">
                  {restaurante.horarios.map((h) => (
                    <li key={h.dia} className="flex justify-between gap-4">
                      <span>{h.etiqueta}</span>
                      <span className="text-right">
                        {h.turnos ? h.turnos.join(" · ") : "Cerrado"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-600">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-ink-900">Teléfono / WhatsApp</p>
                <p className="mt-0.5 text-sm text-stone-600">{restaurante.telefonoDisplay}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link href={restaurante.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" aria-hidden />
                  Cómo llegar
                </Link>
              </Button>
              <Button asChild variant="secondary" className="border-ink-900/15 text-ink-900 hover:bg-ink-900/5">
                <Link href={construirUrlContactoWhatsApp()} target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            variants={fadeUp}
            delay={0.15}
            className="overflow-hidden rounded-2xl border border-ink-900/10 lg:col-span-3"
          >
            <iframe
              src={restaurante.mapsEmbedUrl}
              title={`Mapa de ubicación de ${restaurante.nombre}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full sm:h-[460px] lg:h-full lg:min-h-[420px]"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
