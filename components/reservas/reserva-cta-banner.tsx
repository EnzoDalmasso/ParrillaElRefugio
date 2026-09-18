import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

export function ReservaCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-carbon-950 py-24 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"
          alt="Interior cálido del salón por la noche"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/80 to-carbon-950/60" />
      </div>

      <AnimatedSection
        variants={fadeUp}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
      >
        <h2 className="text-balance font-display text-3xl font-medium text-cream-50 sm:text-4xl">
          Reservá tu mesa y viví la experiencia El Refugio
        </h2>
        <p className="mt-4 text-base text-stone-300 sm:text-lg">
          En menos de un minuto elegís día, horario y cantidad de personas. Confirmamos por WhatsApp.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/reservas">Reservar una mesa</Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
