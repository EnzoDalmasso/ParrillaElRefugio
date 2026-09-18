"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { restaurante } from "@/data/restaurante";
import { Button } from "@/components/ui/button";
import { EmberParticles } from "@/components/hero/ember-particles";
import { staggerChildren, fadeUp } from "@/lib/motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2400&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-carbon-950">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Costillar a las brasas en la parrilla de El Refugio"
          fill
          priority
          sizes="100vw"
          className="motion-safe:animate-slow-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/55 to-carbon-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/70 via-transparent to-carbon-950/40" />
        <EmberParticles />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.15)}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:px-8"
      >
        <motion.span
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-ember-400/40 bg-carbon-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-ember-300 backdrop-blur-sm"
        >
          {restaurante.localidad}, {restaurante.provincia}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-balance font-display text-5xl font-medium leading-[1.05] text-cream-50 sm:text-6xl md:text-7xl"
        >
          {restaurante.eslogan}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-stone-300 sm:text-lg"
        >
          {restaurante.descripcionCorta}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg">
            <Link href="/reservas">Reservar una mesa</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/menu">Ver el menú</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-cream-50/70"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  );
}
