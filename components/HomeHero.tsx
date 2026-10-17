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
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-white text-ink-on-paper">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-5 py-24 text-center"
      >
        <motion.div variants={item}>
          <Mark className="h-20 w-28" />
        </motion.div>

        <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight text-[#1c1405] [text-shadow:0_2px_24px_rgba(255,255,255,0.9)] sm:text-6xl">
          The <span className="gold-text font-signature text-[1.2em]">AetherVeda</span> Foundation
        </motion.h1>

        <motion.span
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-ember sm:text-sm"
        >
          Nourishing Lives. Preserving Legacies.
        </motion.span>

        <motion.p variants={item} className="max-w-xl text-base font-medium text-[#2e2410] [text-shadow:0_1px_12px_rgba(255,255,255,0.9)] sm:text-lg">
          Gaushalas and dog shelters, free food and medical aid, temple restoration, and biogas from
          every shelter we run. One foundation, four promises kept.
        </motion.p>

        <motion.div variants={item} className="mt-2 flex flex-wrap justify-center gap-4">
          <Button href="/donate">Donate Now</Button>
          <Button href="/our-work" variant="secondary">
            See Our Work
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-md text-sm font-medium italic text-[#3a2f18]">
          {dedication.line}
        </motion.p>
      </motion.div>
    </section>
  );
}
