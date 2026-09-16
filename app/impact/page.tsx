import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { StatTile } from "@/components/StatTile";
import { programs, siteStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impact | The AetherVeda Foundation",
  description: "Stories, stats, and financial transparency from The AetherVeda Foundation.",
};

const allocation = [
  { label: "Animal Welfare", pct: 38 },
  { label: "Poverty & Medical Aid", pct: 31 },
  { label: "Heritage Restoration", pct: 18 },
  { label: "Sustainability", pct: 13 },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="What the numbers stand for"
        lede="Every figure here maps back to a specific meal, animal, or restored wall, not a marketing rollup."
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/impact", label: "Impact" }]}
      />

      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {siteStats.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-on-paper">
            [ Figures illustrative: replace with audited totals before launch. ]
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line-soft bg-paper-2">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Fund Utilization
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
              Where a rupee actually goes
            </h2>
            <div className="mt-8 space-y-5">
              {allocation.map((a) => (
                <div key={a.label}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-ink-on-paper">{a.label}</span>
                    <span className="tabular-nums text-muted-on-paper">{a.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-line-soft">
                    <div
                      className="h-full rounded-full bg-ember transition-all duration-700 ease-out"
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md border border-brass px-4 py-2 text-sm font-semibold text-brass transition-colors hover:bg-brass/10"
              >
                Download Annual Report [ PDF ]
              </a>
              <a
                href="#"
                className="rounded-md border border-brass px-4 py-2 text-sm font-semibold text-brass transition-colors hover:bg-brass/10"
              >
                Download 80G Certificate [ PDF ]
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            Stories
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink-on-paper">
            One story from each program
          </h2>
        </Reveal>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <RevealItem key={p.slug}>
              <div className="flex flex-col gap-3 rounded-xl border border-line-soft p-5">
                <div className="aspect-video rounded-md bg-[repeating-linear-gradient(135deg,var(--color-line-soft)_0_1px,transparent_1px_10px)] border border-line-soft" />
                <span className="text-xs font-semibold uppercase tracking-wide text-ember">
                  {p.title}
                </span>
                <p className="text-sm text-muted-on-paper">
                  [ A short, specific story: one animal, one family, one restored wall. ]
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
