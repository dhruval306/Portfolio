import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * Subtle magnetic pull toward cursor (desktop pointer only).
 * strength: fraction of offset toward cursor (0.15–0.35 typical)
 */
const MagneticWrap = ({ children, className = "", strength = 0.22 }) => {
  const zoneRef = useRef(null);
  const innerRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (!zoneRef.current || !innerRef.current) return;
    const zone = zoneRef.current;
    const inner = innerRef.current;
    const cap = 14;

    const move = (e) => {
      const r = zone.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let dx = (e.clientX - cx) * strength;
      let dy = (e.clientY - cy) * strength;
      dx = Math.max(-cap, Math.min(cap, dx));
      dy = Math.max(-cap, Math.min(cap, dy));
      inner.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const leave = () => {
      inner.style.transform = "";
    };

    zone.addEventListener("mousemove", move);
    zone.addEventListener("mouseleave", leave);
    return () => {
      zone.removeEventListener("mousemove", move);
      zone.removeEventListener("mouseleave", leave);
    };
  }, [reduced, strength]);

  return (
    <span ref={zoneRef} className={`inline-block ${className}`.trim()}>
      <span
        ref={innerRef}
        className="inline-flex transition-[transform] duration-150 ease-out will-change-transform"
      >
        {children}
      </span>
    </span>
  );
};

export default MagneticWrap;
