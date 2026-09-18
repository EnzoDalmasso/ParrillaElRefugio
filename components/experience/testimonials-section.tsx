import { Quote, Star } from "lucide-react";

import { reseñasDestacadas, restaurante } from "@/data/restaurante";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeUp } from "@/lib/motion";

export function TestimonialsSection() {
  return (
    <section className="bg-carbon-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          variants={fadeUp}
          className="mb-12 flex flex-col items-center gap-2 text-center"
        >
          <div className="flex items-center gap-1 text-ember-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
            ))}
          </div>
          <p className="font-display text-2xl text-cream-50">
            {restaurante.rating} sobre 5 · {restaurante.totalResenas} reseñas en Google
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reseñasDestacadas.map((reseña, i) => (
            <AnimatedSection
              key={reseña.texto}
              variants={fadeUp}
              delay={i * 0.1}
              className="rounded-2xl border border-cream-50/8 bg-carbon-950/50 p-6"
            >
              <Quote className="h-5 w-5 text-ember-500/60" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                &ldquo;{reseña.texto}&rdquo;
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-stone-500">
                {reseña.fuente}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
