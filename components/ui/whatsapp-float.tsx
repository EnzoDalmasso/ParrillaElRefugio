"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

import { construirUrlContactoWhatsApp } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 480);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <a
            href={construirUrlContactoWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 [animation-duration:2.4s]" />
            <MessageCircle className="h-7 w-7" aria-hidden />
          </a>
          <AnimatePresence>
            {hovered ? (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-carbon-900 px-4 py-2 text-sm font-medium text-cream-50 shadow-lg sm:block"
              >
                Escribinos por WhatsApp
              </motion.span>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
