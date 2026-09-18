"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { restaurante } from "@/data/restaurante";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/components/navbar/nav-links";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cream-50/10 bg-carbon-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-lg font-semibold text-cream-50"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500/15 text-ember-400 ring-1 ring-ember-500/30 transition-colors group-hover:bg-ember-500/25">
            <Flame className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="leading-none">
            {restaurante.nombreCorto}
            <span className="block text-[10px] font-normal uppercase tracking-[0.3em] text-stone-400">
              Parrilla
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const [base] = link.href.split("#");
            const active = base === "/" ? pathname === "/" : pathname.startsWith(base);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium text-cream-100/80 transition-colors hover:text-cream-50",
                    active && "text-cream-50"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-0 bg-ember-400 transition-all duration-300 group-hover:w-full",
                      active && "w-full"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/reservas">Reservar mesa</Link>
          </Button>
        </div>

        <MobileMenu scrolled={scrolled} />
      </nav>
      {!scrolled ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-carbon-950/60 to-transparent lg:hidden"
        />
      ) : null}
    </header>
  );
}
