"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode, FormEvent } from "react";

export function StubForm({
  children,
  successMessage = "Thanks! We'll be in touch shortly.",
  submitLabel = "Submit",
}: {
  children: ReactNode;
  successMessage?: string;
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-tulsi/40 bg-tulsi/10 px-5 py-4 text-sm font-medium text-tulsi"
        >
          {successMessage}
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {children}
          <button
            type="submit"
            className="mt-1 self-start rounded-md bg-ember px-6 py-3 text-sm font-semibold text-stone transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30"
          >
            {submitLabel}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
