import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Privacy Policy | The AetherVeda Foundation" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" breadcrumb={[{ href: "/", label: "Home" }, { href: "/privacy", label: "Privacy" }]} />
      <section className="mx-auto max-w-2xl px-5 py-20">
        <Reveal className="prose text-sm leading-relaxed text-muted-on-paper">
          <p>[ Insert the foundation&apos;s privacy policy: how donor and volunteer data is collected, stored, and used. Draft with legal counsel before launch. ]</p>
        </Reveal>
      </section>
    </>
  );
}
