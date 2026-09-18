"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Flame, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { restaurante } from "@/data/restaurante";
import { NAV_LINKS } from "@/components/navbar/nav-links";
import { Button } from "@/components/ui/button";

export function MobileMenu({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Abrir menú de navegación"
          className={cn(
            "relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden",
            scrolled ? "text-cream-50" : "text-cream-50"
          )}
        >
          <span className="h-px w-5 bg-current transition-transform" />
          <span className="h-px w-5 bg-current transition-transform" />
          <span className="h-px w-3.5 self-end bg-current transition-transform" />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-carbon-950/70 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-carbon-900 px-6 py-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title asChild>
                    <span className="flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
                      <Flame className="h-5 w-5 text-ember-400" aria-hidden />
                      {restaurante.nombreCorto}
                    </span>
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Cerrar menú"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-cream-50 transition-colors hover:bg-cream-50/10"
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="mt-12 flex flex-1 flex-col gap-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    >
                      <Dialog.Close asChild>
                        <Link
                          href={link.href}
                          className="block border-b border-cream-50/10 py-4 font-display text-2xl text-cream-50 transition-colors hover:text-ember-400"
                        >
                          {link.label}
                        </Link>
                      </Dialog.Close>
                    </motion.div>
                  ))}
                </nav>

                <Dialog.Close asChild>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/reservas">Reservar mesa</Link>
                  </Button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
