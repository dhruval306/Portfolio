import React from "react";
import Project from "./APIs/ProjectList.js";
import ProjectCard from "./Cards/ProjectCard.js";
import Reveal from "./Reveal";

const Projects = () => {
  const featured = Project.filter((p) => p.featured && p.group !== "power-bi");
  const powerBi = Project.filter((p) => p.group === "power-bi");
  const rest = Project.filter((p) => !p.featured && p.group !== "power-bi");

  const showPowerBi = powerBi.length > 0;
  const totalCount = Project.length;

  return (
    <section id="work" className="section-screen scroll-mt-28 px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="section-label">Selected work</p>
          <div className="mt-3 flex flex-wrap items-baseline gap-4">
            <h2 className="font-display text-4xl font-black tracking-[-0.03em] text-[var(--text-highlight)] sm:text-5xl">
              Solutions I&apos;ve shipped
            </h2>
            <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-sm font-bold text-[var(--accent)]">
              {totalCount} projects
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-primary)]">
            Built for real operations—each card covers the problem it solves, the leverage it creates, and the stack underneath. Source links where available.
          </p>
        </Reveal>

        {featured.length > 0 && (
          <>
            <Reveal className="mt-10 sm:mt-12" delay={40}>
              <div className="flex items-center gap-4">
                <span className="h-px w-6 bg-[var(--accent)]/40" aria-hidden />
                <span className="section-label text-[var(--text-info)]">Featured</span>
              </div>
            </Reveal>
            <div className="mt-5 grid grid-cols-1 gap-7 lg:grid-cols-2">
              {featured.map((val, index) => (
                <Reveal key={val.id} delay={index * 85} duration={760}>
                  <ProjectCard val={val} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {showPowerBi && (
          <>
            <Reveal
              className={`max-w-2xl ${featured.length > 0 ? "mt-12 sm:mt-16" : "mt-10 sm:mt-12"}`}
              delay={40}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-6 bg-[var(--violet)]/40" aria-hidden />
                <span className="section-label" style={{ color: "var(--violet)" }}>Analytics portfolio</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--text-highlight)] sm:text-3xl">
                Power BI · dashboards by domain
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-primary)] sm:text-base">
                Four domains—sales &amp; inventory, finance, people, and production—each with a distinct modeling focus and Power Platform depth where workflows matter. Visuals use representative sample data (NDA-safe); live ERP feeds slot into the same models.
              </p>
            </Reveal>
            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">
              {powerBi.map((val, index) => (
                <Reveal key={val.id} delay={index * 70} duration={720}>
                  <ProjectCard val={val} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            <Reveal
              className={featured.length > 0 || showPowerBi ? "mt-12 sm:mt-16" : "mt-10 sm:mt-12"}
              delay={40}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-6 bg-white/20" aria-hidden />
                <span className="section-label text-[var(--text-info)]">More projects</span>
              </div>
            </Reveal>
            <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((val, index) => (
                <Reveal key={val.id} delay={index * 70} duration={740}>
                  <ProjectCard val={val} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
