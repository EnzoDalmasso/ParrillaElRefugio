"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { ImagenGaleria } from "@/types";
import { AnimatedSection } from "@/components/ui/animated-section";
import { scaleIn } from "@/lib/motion";

export function GalleryGrid({ imagenes }: { imagenes: ImagenGaleria[] }) {
  const [indiceActivo, setIndiceActivo] = useState<number | null>(null);

  const cerrar = useCallback(() => setIndiceActivo(null), []);
  const anterior = useCallback(
    () =>
      setIndiceActivo((i) => (i === null ? null : (i - 1 + imagenes.length) % imagenes.length)),
    [imagenes.length]
  );
  const siguiente = useCallback(
    () => setIndiceActivo((i) => (i === null ? null : (i + 1) % imagenes.length)),
    [imagenes.length]
  );

  useEffect(() => {
    if (indiceActivo === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [indiceActivo, anterior, siguiente]);

  const activa = indiceActivo === null ? null : imagenes[indiceActivo];

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {imagenes.map((img, i) => (
          <AnimatedSection
            key={img.id}
            variants={scaleIn}
            delay={(i % 6) * 0.06}
            className="group relative block w-full cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setIndiceActivo(i)}
              className="relative block w-full"
              aria-label={`Ver imagen: ${img.alt}`}
              style={{ aspectRatio: `${img.ancho} / ${img.alto}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 32vw, 48vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-carbon-950/0 transition-colors duration-300 group-hover:bg-carbon-950/20" />
            </button>
          </AnimatedSection>
        ))}
      </div>

      <Dialog.Root open={activa !== null} onOpenChange={(open) => !open && cerrar()}>
        <AnimatePresence>
          {activa ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-carbon-950/95 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount aria-describedby={undefined}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-10"
                >
                  <Dialog.Title className="sr-only">{activa.alt}</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Cerrar galería"
                      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>

                  <button
                    type="button"
                    onClick={anterior}
                    aria-label="Imagen anterior"
                    className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 sm:left-6"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="relative h-full max-h-[80vh] w-full max-w-4xl">
                    <Image
                      src={activa.src}
                      alt={activa.alt}
                      fill
                      sizes="90vw"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <button
                    type="button"
                    onClick={siguiente}
                    aria-label="Imagen siguiente"
                    className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 sm:right-6"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <p className="mt-4 text-sm text-stone-400">{activa.alt}</p>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
