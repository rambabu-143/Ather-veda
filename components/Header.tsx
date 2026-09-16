"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mark } from "./Icons";
import { Button } from "./Button";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-stone transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/20 bg-stone/95 backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <Mark className="h-7 w-6 text-brass" />
          <span className="font-display text-lg font-semibold">AetherVeda</span>
        </Link>

        <nav className="hidden gap-8 text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors duration-200 hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/donate" className="!px-5 !py-2.5">
            Donate
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
            className="h-0.5 w-6 rounded-full bg-ink"
          />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-6 rounded-full bg-ink" />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
            className="h-0.5 w-6 rounded-full bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-stone border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 text-ink">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-base hover:bg-stone-2"
                >
                  {l.label}
                </Link>
              ))}
              <Button href="/donate" className="mt-2">
                Donate
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
