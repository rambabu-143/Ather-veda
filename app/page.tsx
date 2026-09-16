import { HomeHero } from "@/components/HomeHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ProgramCard } from "@/components/ProgramCard";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { StubForm } from "@/components/StubForm";
import { programs, siteStats } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-xl border border-line-soft bg-paper-2/50 p-4 sm:grid-cols-4">
            {siteStats.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24">
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink-on-paper sm:text-4xl">
            Four promises, kept in one place
          </h2>
        </Reveal>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <RevealItem key={p.slug}>
              <ProgramCard program={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="border-y border-line-soft bg-paper-2">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-xl bg-[repeating-linear-gradient(135deg,var(--color-line-soft)_0_1px,transparent_1px_10px)] border border-line-soft" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold text-ink-on-paper">A gift, continued</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-on-paper">
              The AetherVeda Foundation was established in eternal memory of Late Sh. Bankey Bihari
              Gaur and Late Smt. Chanda Gaur, to carry forward the philanthropic vision they lived by.
              What began as their personal practice of caring for animals, feeding the hungry, and
              tending to the temples of their community is now a foundation built to do the same, at
              a scale they always hoped for.
            </p>
            <Button href="/about" variant="ghost" className="mt-5 !px-0">
              Read our full story →
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
            Get Involved
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink-on-paper sm:text-4xl">
            Three ways to help today
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "Donate",
              body: "One-time or monthly. Allocate it to a specific program, or let us direct it where it's needed most.",
              href: "/donate",
              cta: "Donate now",
            },
            {
              title: "Volunteer",
              body: "Shelter care, medical camps, and restoration drives all run on volunteer hours.",
              href: "/get-involved#volunteer",
              cta: "See openings",
            },
            {
              title: "Partner / CSR",
              body: "Corporate partnerships fund entire shelters, camps, and restoration projects.",
              href: "/get-involved#partner",
              cta: "Start a partnership",
            },
          ].map((c) => (
            <RevealItem key={c.title}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-line-soft p-6">
                <h3 className="font-display text-xl font-semibold text-ink-on-paper">{c.title}</h3>
                <p className="flex-1 text-sm text-muted-on-paper">{c.body}</p>
                <Button href={c.href} variant="secondary" className="self-start">
                  {c.cta}
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center text-ink">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Stay Close
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              One update a month, no more and no less
            </h2>
            <div className="mx-auto mt-7 max-w-md text-left">
              <StubForm submitLabel="Subscribe" successMessage="You're on the list.">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-line bg-stone-2 px-4 py-3 text-sm text-ink placeholder:text-muted outline-none focus-visible:border-ember"
                />
              </StubForm>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
