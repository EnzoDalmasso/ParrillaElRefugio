import { cortesEspecialidad } from "@/data/menu";
import { SectionTitle } from "@/components/ui/section-title";
import { CutCard } from "@/components/specialty/cut-card";

export function SpecialtySection() {
  return (
    <section className="bg-carbon-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Nuestra especialidad"
          title="Directo de la parrilla a tu mesa"
          description="Cada corte se cocina a fuego de leña, con el tiempo justo para lograr el punto exacto de jugosidad y sabor."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cortesEspecialidad.map((corte, i) => (
            <CutCard corte={corte} key={corte.id} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
