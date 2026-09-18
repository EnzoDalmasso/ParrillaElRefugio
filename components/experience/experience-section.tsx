import Image from "next/image";

import { restaurante } from "@/data/restaurante";
import { SectionTitle } from "@/components/ui/section-title";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StatItem } from "@/components/experience/stat-item";
import { fadeUp, scaleIn } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-carbon-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionTitle
            kicker="Nuestra esencia"
            title="Tradición que se siente en cada brasa"
            light
          />
          <AnimatedSection variants={fadeUp} delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              {restaurante.descripcionLarga}
            </p>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            <StatItem valor={`${restaurante.rating}★`} etiqueta="En Google" delay={0.15} />
            <StatItem valor={`${restaurante.totalResenas}+`} etiqueta="Reseñas" delay={0.2} />
            <StatItem valor="100%" etiqueta="A las brasas" delay={0.25} />
            <StatItem valor="Familiar" etiqueta="Ambiente" delay={0.3} />
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
          <AnimatedSection
            variants={scaleIn}
            className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl sm:mt-16"
          >
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop"
              alt="Salón principal de la parrilla con mesas de madera"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </AnimatedSection>
          <AnimatedSection
            variants={scaleIn}
            delay={0.15}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop"
              alt="Comensales disfrutando de una mesa compartida"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </AnimatedSection>
          <div
            className="absolute -bottom-6 left-1/2 hidden w-44 -translate-x-1/2 rounded-xl border border-cream-50/10 bg-carbon-900/90 px-5 py-4 text-center shadow-2xl backdrop-blur sm:block"
            aria-hidden
          >
            <p className="font-display text-lg text-ember-400">Fuego lento</p>
            <p className="text-xs text-stone-400">El secreto de cada corte</p>
          </div>
        </div>
      </div>
    </section>
  );
}
