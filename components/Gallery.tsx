"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { programs } from "@/lib/content";

const CATEGORIES = ["All", ...programs.map((p) => p.title)];

const ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category: programs[i % programs.length].title,
}));

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
              filter === c ? "text-ink" : "text-muted-on-paper hover:text-ink-on-paper"
            }`}
          >
            {filter === c && (
              <motion.span
                layoutId="gallery-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-ember"
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {visible.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group aspect-square overflow-hidden rounded-lg border border-line-soft bg-paper-2"
            >
              <div className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,var(--color-line-soft)_0_1px,transparent_1px_10px)] text-[10px] uppercase tracking-wide text-muted-on-paper transition-transform duration-500 ease-out group-hover:scale-110">
                {item.category}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
