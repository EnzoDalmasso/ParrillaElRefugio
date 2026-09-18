"use client";

import { motion, type Variants } from "motion/react";
import * as React from "react";

import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends React.ComponentProps<"div"> {
  variants?: Variants;
  delay?: number;
  as?: "div" | "section";
}

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
  ...props
}: AnimatedSectionProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </MotionTag>
  );
}
