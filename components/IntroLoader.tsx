"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("intro-played")) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- visibility depends on browser-only APIs unavailable during SSR
    setVisible(true);
  }, []);

  function dismiss() {
    sessionStorage.setItem("intro-played", "1");
    setFading(true);
    window.setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper transition-opacity duration-300 ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={dismiss}
        onError={dismiss}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
