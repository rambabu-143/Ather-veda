import Link from "next/link";
import { ProgramIcon } from "./Icons";
import type { Program } from "@/lib/content";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/our-work/${program.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-line-soft bg-paper-2/60 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ember/50 hover:bg-paper-2 hover:shadow-xl hover:shadow-ember/10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone text-brass transition-colors duration-300 group-hover:bg-ember group-hover:text-stone">
        <ProgramIcon name={program.icon} className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-ink-on-paper">{program.title}</h3>
        <p className="mt-1 text-sm text-muted-on-paper">{program.subtitle}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ember">
        Learn more
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
