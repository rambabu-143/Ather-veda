import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ProgramIcon } from "@/components/Icons";
import { programs } from "@/lib/content";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/our-work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.title} | The AetherVeda Foundation`,
    description: program.summary,
  };
}

export default async function ProgramPage(props: PageProps<"/our-work/[slug]">) {
  const { slug } = await props.params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <PageHero
        eyebrow={program.subtitle}
        title={program.title}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/our-work", label: "Our Work" },
          { href: `/our-work/${program.slug}`, label: program.title },
        ]}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-2 text-brass">
          <ProgramIcon name={program.icon} className="h-6 w-6" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-10">
            <Reveal>
              <blockquote className="border-l-2 border-brass/60 pl-5 font-display text-lg italic leading-relaxed text-ink-on-paper">
                “{program.quote}”
              </blockquote>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl font-bold text-ink-on-paper">What we do</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-on-paper">{program.summary}</p>
              <ul className="mt-6 space-y-3">
                {program.whatWeDo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-on-paper">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-ink-on-paper">Active projects</h2>
              <div className="mt-4 divide-y divide-line-soft rounded-lg border border-line-soft">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 text-sm">
                    <span className="font-medium text-ink-on-paper">[ Project / site name ]</span>
                    <span className="text-muted-on-paper">[ Location ]</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:sticky md:top-24 md:h-fit">
            <div className="flex flex-col gap-4 rounded-xl border border-ember/40 bg-paper-2 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ember">
                Support this program
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-ink-on-paper">
                  {program.stat.value}
                </p>
                <p className="text-xs text-muted-on-paper">{program.stat.label}</p>
              </div>
              <Button href={`/donate?program=${program.slug}`}>Give to this program</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line-soft bg-paper-2">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Reveal className="mb-8">
            <h2 className="font-display text-2xl font-bold text-ink-on-paper">The other three objects</h2>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {others.map((p) => (
              <RevealItem key={p.slug}>
                <a
                  href={`/our-work/${p.slug}`}
                  className="flex flex-col gap-2 rounded-lg border border-line-soft bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ember/50"
                >
                  <ProgramIcon name={p.icon} className="h-5 w-5 text-ember" />
                  <span className="font-semibold text-ink-on-paper">{p.title}</span>
                  <span className="text-xs text-muted-on-paper">{p.subtitle}</span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
