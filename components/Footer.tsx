import Link from "next/link";
import { Mark } from "./Icons";

const COLUMNS = [
  {
    heading: "Our Work",
    links: [
      { href: "/our-work/animal-welfare", label: "Animal Welfare" },
      { href: "/our-work/poverty-relief", label: "Poverty & Medical Aid" },
      { href: "/our-work/heritage", label: "Heritage Restoration" },
      { href: "/our-work/sustainability", label: "Sustainability" },
    ],
  },
  {
    heading: "Foundation",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/impact", label: "Impact & Reports" },
      { href: "/gallery", label: "Gallery" },
      { href: "/news", label: "Blog / News" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/get-involved#volunteer", label: "Volunteer" },
      { href: "/get-involved#partner", label: "Partner / CSR" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-stone text-muted">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-ink">
              <Mark className="h-7 w-6 text-brass" />
              <span className="font-display text-lg font-semibold">AetherVeda</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Nourishing Lives. Preserving Legacies. Established in eternal memory of Late Sh. Bankey
              Bihari Gaur &amp; Late Smt. Chanda Gaur.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.14em] text-brass uppercase">
                {col.heading}
              </span>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-ink">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} The AetherVeda Foundation. Reg. No. [ ]. 80G [ ]
          </span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
            <span className="text-muted">EN / हिं</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
