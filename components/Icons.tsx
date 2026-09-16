import type { ReactElement } from "react";
import type { IconName } from "@/lib/content";

export function Mark({ className = "", flicker = false }: { className?: string; flicker?: boolean }) {
  return (
    <svg viewBox="0 0 70 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M10,74 L10,38 Q10,8 35,8 Q60,8 60,38 L60,74"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line x1="4" y1="74" x2="66" y2="74" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path
        className={flicker ? "origin-[35px_40px] motion-safe:animate-[flicker_3.4s_ease-in-out_infinite]" : ""}
        d="M35,20 C29,30 26,37 31,44 C33,47 37,47 39,44 C44,37 41,30 35,20 Z"
        fill="url(#markFlame)"
      />
      <defs>
        <linearGradient id="markFlame" x1="35" y1="20" x2="35" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F7C97A" />
          <stop offset="1" stopColor="#E0902F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Paw({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="15" r="5.2" />
      <circle cx="5.5" cy="8.5" r="2.2" />
      <circle cx="18.5" cy="8.5" r="2.2" />
      <circle cx="9" cy="4.5" r="2" />
      <circle cx="15" cy="4.5" r="2" />
    </svg>
  );
}

function Bowl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4,12 Q4,19 12,19 Q20,19 20,12 Z" />
      <rect x="10.5" y="3" width="3" height="8" rx="1" />
      <rect x="8" y="5.5" width="8" height="3" rx="1" />
    </svg>
  );
}

function Arch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M10,74 L10,38 Q10,8 35,8 Q60,8 60,38 L60,74"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line x1="4" y1="74" x2="66" y2="74" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <circle cx="35" cy="34" r="4.5" fill="currentColor" />
    </svg>
  );
}

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12,3 C5,9 5,14 9,18 C13,21.5 17,19.5 17,15.5 C17,11.5 14,9.5 12,3 Z" />
    </svg>
  );
}

const ICONS: Record<IconName, (props: { className?: string }) => ReactElement> = {
  paw: Paw,
  bowl: Bowl,
  arch: Arch,
  leaf: Leaf,
};

export function ProgramIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const Cmp = ICONS[name];
  return <Cmp className={className} />;
}
