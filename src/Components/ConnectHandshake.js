import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const LINES = [
  "> SPIRE_ROUTE ................ OK",
  "> POWER_BI_SYNC ............. OK",
  "> MAIL_HANDSHAKE ............ READY",
];

/**
 * Footer “system handshake” — terminal lines, then calls onComplete for mail CTA pulse.
 */
const ConnectHandshake = ({ onComplete }) => {
  const reduced = useReducedMotion();
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [line0, setLine0] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const completedRef = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active || completedRef.current) return;

    if (reduced) {
      setLine0(LINES[0]);
      setLine1(LINES[1]);
      setLine2(LINES[2]);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    let cancelled = false;
    const setters = [setLine0, setLine1, setLine2];

    const typeLine = (idx) => {
      if (idx >= LINES.length || cancelled) {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.();
        }
        return;
      }
      const full = LINES[idx];
      let pos = 0;
      const tick = () => {
        if (cancelled) return;
        pos += 1;
        setters[idx](full.slice(0, pos));
        if (pos < full.length) {
          window.setTimeout(tick, 11 + Math.floor(Math.random() * 10));
        } else {
          window.setTimeout(() => typeLine(idx + 1), 220);
        }
      };
      tick();
    };

    typeLine(0);
    return () => {
      cancelled = true;
    };
  }, [active, reduced, onComplete]);

  return (
    <div
      ref={containerRef}
      className="mx-auto mb-8 max-w-lg rounded-xl border border-white/[0.08] bg-[var(--bg-primary)]/80 px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-5"
      aria-hidden
    >
      <div className="font-mono text-[10px] leading-relaxed text-[var(--accent)] sm:text-[11px]">
        <div className="min-h-[1.25rem] whitespace-pre-wrap">{line0}</div>
        <div className="mt-1 min-h-[1.25rem] whitespace-pre-wrap text-[var(--violet)]">{line1}</div>
        <div className="mt-1 min-h-[1.25rem] whitespace-pre-wrap text-[var(--text-highlight)]">{line2}</div>
      </div>
    </div>
  );
};

export default ConnectHandshake;
