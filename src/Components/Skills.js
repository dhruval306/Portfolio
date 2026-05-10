import React from "react";
import SkillList from "./APIs/SkillList";
import SkillCard from "./Cards/SkillCard";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-screen scroll-mt-28 relative flex flex-col justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12"
    >
      {/* Subtle section mesh */}
      <div className="pointer-events-none absolute inset-0 section-mesh" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="section-label">Toolkit</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] text-[var(--text-highlight)] sm:text-5xl">
            How I ship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-primary)]">
            Languages through cloud—Python, Java, TypeScript, Spring, React, Angular, Electron, Power BI, data stores, automation, and DevOps tooling.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SkillList.map((val, index) => (
            <Reveal key={val.category} delay={index * 70} duration={700}>
              <SkillCard val={val} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
