import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work | The AetherVeda Foundation",
  description: "The four charter objects The AetherVeda Foundation exists to carry out.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Four objects, one charter"
        lede="Everything we run traces back to one of four founding objects, each with its own team, its own sites, and its own promise kept."
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/our-work", label: "Our Work" }]}
      />
      <section className="mx-auto max-w-5xl px-5 py-20">
        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          {programs.map((p) => (
            <RevealItem key={p.slug}>
              <ProgramCard program={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
