import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { dedication } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | The AetherVeda Foundation",
  description: "The story, legal standing, and people behind The AetherVeda Foundation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A vision continued"
        lede="Every object in our charter traces back to two people who practiced it long before it had a foundation's name attached."
      />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            Our Story
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
            In memory of Bankey Bihari &amp; Chanda Gaur
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-on-paper">
            <p>{dedication.line}</p>
            <p>
              Theirs was a philosophy less concerned with scale than with consistency: feeding the
              animals that came to the door, keeping the neighbourhood temple swept and standing,
              and never turning away a family that needed a meal or a doctor. The AetherVeda
              Foundation exists to take that same practice and give it the structure, staff, and
              reach to outlast any one generation.
            </p>
            <p>
              [ Expand with specific family history, photographs, and milestones the foundation
              would like told in their own words. ]
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line-soft bg-paper-2">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Legal &amp; Registration
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
              Registered, and accountable for it
            </h2>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                ["Entity type", "Section 8 Company (non-profit)"],
                ["Registration number", "[ ]"],
                ["12A registration", "[ ]"],
                ["80G registration", "[ ]"],
                ["PAN", "[ ]"],
                ["Registered office", "[ ]"],
              ].map(([term, value]) => (
                <div key={term} className="border-l-2 border-brass/60 pl-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-on-paper">{term}</dt>
                  <dd className="mt-1 font-medium text-ink-on-paper">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted-on-paper">
              Certificates and filings will be linked here and on the{" "}
              <a href="/impact" className="text-ember underline underline-offset-2">
                Impact &amp; Reports
              </a>{" "}
              page once issued.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            Leadership &amp; Trustees
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
            Who runs the foundation
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                <div className="h-24 w-24 rounded-full bg-[repeating-linear-gradient(135deg,var(--color-line-soft)_0_1px,transparent_1px_8px)] border border-line-soft" />
                <div>
                  <p className="font-semibold text-ink-on-paper">[ Trustee Name ]</p>
                  <p className="text-xs text-muted-on-paper">[ Role ]</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
