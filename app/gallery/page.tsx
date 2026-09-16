import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | The AetherVeda Foundation",
  description: "Photos from our shelters, camps, and restoration sites.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="What the work actually looks like"
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/gallery", label: "Gallery" }]}
      />
      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <Gallery />
        </Reveal>
        <p className="mt-6 text-center text-xs text-muted-on-paper">
          [ Placeholder tiles: replace with real shelter, camp, and site photography. ]
        </p>
      </section>
    </>
  );
}
