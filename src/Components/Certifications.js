import React from "react";
import CertiList from "./APIs/CertiList";
import Reveal from "./Reveal";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section-screen scroll-mt-28 flex flex-col justify-start py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:py-12 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] lg:justify-center"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="section-label">Credentials</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] text-[var(--text-highlight)] sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-primary)]">
            ERP (Spire), Spring, React, AWS, and IBM—credentialed depth alongside shipped work.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {CertiList.map((val, index) => (
            <Reveal key={val.category} delay={index * 60} duration={680}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-primary)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(34,197,94,0.2)] hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8),0_0_0_1px_rgba(34,197,94,0.06)] motion-reduce:hover:translate-y-0 cursor-default">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-[var(--accent)]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={val.image}
                    className="relative h-14 w-14 rounded-2xl border border-white/[0.08] bg-white/[0.04] object-contain p-1.5"
                    alt={val.category}
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="line-clamp-2 font-display text-sm font-bold leading-snug text-[var(--text-highlight)]">
                    {val.category}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[var(--text-info)]">{val.year}</div>
                </div>
                <div
                  className="h-8 w-0.5 shrink-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "var(--accent)" }}
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
