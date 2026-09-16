"use client";

import { motion } from "framer-motion";
import { Mark } from "./Icons";
import { Button } from "./Button";
import { dedication } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-stone text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(224,144,47,0.18),transparent_60%)]" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-16 text-center"
      >
        <motion.div variants={item} className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-[-24px] rounded-full bg-[radial-gradient(circle,rgba(224,144,47,0.35),transparent_70%)]" />
          <Mark className="relative h-16 w-14 text-brass" flicker />
        </motion.div>

        <motion.h1 variants={item} className="text-4xl font-bold sm:text-6xl">
          The AetherVeda Foundation
        </motion.h1>

        <motion.span
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-brass sm:text-sm"
        >
          Nourishing Lives. Preserving Legacies.
        </motion.span>

        <motion.p variants={item} className="max-w-xl text-base text-muted sm:text-lg">
          Gaushalas and dog shelters, free food and medical aid, temple restoration, and biogas from
          every shelter we run. One foundation, four promises kept.
        </motion.p>

        <motion.div variants={item} className="mt-2 flex flex-wrap justify-center gap-4">
          <Button href="/donate">Donate Now</Button>
          <Button href="/our-work" variant="secondary">
            See Our Work
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-md font-display text-sm italic text-muted">
          {dedication.line}
        </motion.p>
      </motion.div>
    </section>
  );
}
