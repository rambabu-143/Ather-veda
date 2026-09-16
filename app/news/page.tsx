import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "News | The AetherVeda Foundation",
  description: "Updates from The AetherVeda Foundation.",
};

const posts = [
  {
    title: "[ Headline of a recent camp, rescue, or restoration milestone ]",
    date: "[ Date ]",
    excerpt: "[ One or two sentences summarizing what happened and why it mattered. ]",
  },
  {
    title: "[ Headline of a recent camp, rescue, or restoration milestone ]",
    date: "[ Date ]",
    excerpt: "[ One or two sentences summarizing what happened and why it mattered. ]",
  },
  {
    title: "[ Headline of a recent camp, rescue, or restoration milestone ]",
    date: "[ Date ]",
    excerpt: "[ One or two sentences summarizing what happened and why it mattered. ]",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog / News"
        title="Updates from the ground"
        breadcrumb={[{ href: "/", label: "Home" }, { href: "/news", label: "News" }]}
      />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <RevealGroup className="flex flex-col divide-y divide-line-soft">
          {posts.map((post) => (
            <RevealItem key={post.title} className="py-8 first:pt-0">
              <span className="text-xs font-semibold uppercase tracking-wide text-ember">{post.date}</span>
              <h2 className="mt-2 font-display text-xl font-bold text-ink-on-paper">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-on-paper">{post.excerpt}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
