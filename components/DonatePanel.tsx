"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { programs } from "@/lib/content";

const AMOUNTS = [500, 1000, 2500, 5000];

export function DonatePanel({ initialProgram }: { initialProgram?: string }) {
  const [amount, setAmount] = useState(2500);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [allocation, setAllocation] = useState(initialProgram ?? "general");

  const effectiveAmount = custom ? Number(custom) || 0 : amount;

  return (
    <div className="rounded-2xl border border-ember/40 bg-paper-2 p-6 sm:p-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {AMOUNTS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => {
              setAmount(a);
              setCustom("");
            }}
            className={`rounded-md border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
              !custom && amount === a
                ? "border-ember bg-ember text-stone"
                : "border-line-soft text-ink-on-paper hover:border-ember/60"
            }`}
          >
            ₹{a.toLocaleString("en-IN")}
          </button>
        ))}
      </div>

      <input
        id="donate-custom-amount"
        type="number"
        min={1}
        placeholder="Custom amount (₹)"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        className="mt-3 w-full rounded-md border border-line-soft bg-paper px-4 py-3 text-sm outline-none focus-visible:border-ember"
      />

      <div className="mt-5 flex gap-2 rounded-md border border-line-soft p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`relative flex-1 rounded px-4 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
              frequency === f ? "text-stone" : "text-muted-on-paper"
            }`}
          >
            {frequency === f && (
              <motion.span
                layoutId="freq-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded bg-ember"
              />
            )}
            <span className="relative">{f === "once" ? "One-time" : "Monthly"}</span>
          </button>
        ))}
      </div>

      <label htmlFor="donate-allocation" className="mt-5 block text-xs font-semibold uppercase tracking-wide text-muted-on-paper">
        Allocate to
      </label>
      <select
        id="donate-allocation"
        value={allocation}
        onChange={(e) => setAllocation(e.target.value)}
        className="mt-2 w-full rounded-md border border-line-soft bg-paper px-4 py-3 text-sm outline-none focus-visible:border-ember"
      >
        <option value="general">Wherever needed most</option>
        {programs.map((p) => (
          <option key={p.slug} value={p.slug}>
            {p.title}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="mt-6 w-full rounded-md bg-ember py-3.5 text-sm font-bold text-stone transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30"
      >
        Proceed to pay ₹{effectiveAmount.toLocaleString("en-IN")} →
      </button>
      <p className="mt-3 text-center text-xs text-muted-on-paper">
        Secured by Razorpay. UPI, cards, and net banking accepted.
      </p>
    </div>
  );
}
