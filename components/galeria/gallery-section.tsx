import { galeria } from "@/data/galeria";
import { SectionTitle } from "@/components/ui/section-title";
import { GalleryGrid } from "@/components/galeria/gallery-grid";

export function GallerySection() {
  return (
    <section id="galeria" className="bg-carbon-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Galería"
          title="Un vistazo a la experiencia"
          description="Fuego, cortes y el ambiente que nos identifica. Fotografías de referencia — se reemplazan por producciones propias del local."
          light
        />
        <div className="mt-12">
          <GalleryGrid imagenes={galeria} />
        </div>
      </div>
    </section>
  );
}
