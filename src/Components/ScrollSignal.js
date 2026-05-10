import React, { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** Left-edge scroll progress “signal” — data-flow metaphor. */
const ScrollSignal = () => {
  const reduced = useReducedMotion();
  const [p, setP] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - el.clientHeight;
      const t = h > 0 ? window.scrollY / h : 0;
      setP(Math.min(1, Math.max(0, t)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[35] h-[100svh] w-1 sm:w-1.5"
      aria-hidden
    >
      <div
        className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-transparent via-[var(--accent)] to-[var(--violet)] opacity-90 shadow-[0_0_24px_var(--accent-glow)] transition-[height] duration-150 ease-out"
        style={{ height: `${p * 100}%` }}
      />
    </div>
  );
};

export default ScrollSignal;
