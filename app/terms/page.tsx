import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Terms | The AetherVeda Foundation" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" breadcrumb={[{ href: "/", label: "Home" }, { href: "/terms", label: "Terms" }]} />
      <section className="mx-auto max-w-2xl px-5 py-20">
        <Reveal className="prose text-sm leading-relaxed text-muted-on-paper">
          <p>[ Insert terms of use, including donation and refund policy. Draft with legal counsel before launch. ]</p>
        </Reveal>
      </section>
    </>
  );
}
