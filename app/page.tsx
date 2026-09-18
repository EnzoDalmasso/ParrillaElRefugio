import { Hero } from "@/components/hero/hero";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SpecialtySection } from "@/components/specialty/specialty-section";
import { TestimonialsSection } from "@/components/experience/testimonials-section";
import { MenuTeaser } from "@/components/menu/menu-teaser";
import { GallerySection } from "@/components/galeria/gallery-section";
import { ReservaCtaBanner } from "@/components/reservas/reserva-cta-banner";
import { ContactSection } from "@/components/contacto/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <SpecialtySection />
      <TestimonialsSection />
      <MenuTeaser />
      <GallerySection />
      <ReservaCtaBanner />
      <ContactSection />
    </>
  );
}
