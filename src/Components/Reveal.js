import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * Scroll-triggered fade + slide-up. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 720,
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [reduced]);

  const motionClasses = reduced
    ? ""
    : `transform-gpu transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"
      }`;

  return (
    <Tag
      ref={ref}
      className={`${motionClasses} ${className}`.trim()}
      style={
        reduced
          ? undefined
          : {
              transitionDuration: `${duration}ms`,
              transitionDelay: visible ? `${delay}ms` : "0ms",
            }
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
