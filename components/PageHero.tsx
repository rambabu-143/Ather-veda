"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: { href: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-stone text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(224,144,47,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-5 flex flex-wrap items-center justify-center gap-1.5 text-xs text-muted"
          >
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                <Link href={b.href} className="hover:text-ink">
                  {b.label}
                </Link>
              </span>
            ))}
          </motion.div>
        )}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brass"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-4xl font-bold sm:text-5xl"
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg"
          >
            {lede}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
