import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2";

const VARIANTS = {
  primary: "bg-ember text-stone hover:bg-[#ea9d3f] hover:shadow-lg hover:shadow-ember/30 focus-visible:outline-ember",
  secondary:
    "border border-brass text-brass hover:bg-brass/10 focus-visible:outline-brass",
  ghost: "text-ink hover:text-ember focus-visible:outline-ember",
} as const;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}
