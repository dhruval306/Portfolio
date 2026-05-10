import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Reveal from "./Reveal";
import ProjectList from "./APIs/ProjectList.js";

const portfolioProjectCount = ProjectList.length;

const stats = [
  { value: "5+", label: "Years building" },
  { value: String(portfolioProjectCount), label: "Projects showcased" },
  { value: "3", label: "Flourish products" },
  { value: "AI", label: "In delivery" },
];

const chips = ["Java", "Spring Boot", "React", "Electron", "Power Platform", "ERP", "AI-assisted", "PostgreSQL"];

const Intro = () => {
  return (
    <section
      id="top"
      className="section-screen relative flex flex-col justify-center overflow-hidden px-4 pb-10 pt-[5.5rem] sm:px-6 sm:pb-12 sm:pt-28 lg:pt-32"
    >
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 hero-mesh" aria-hidden />

      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -right-32 top-16 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.07] blur-[100px] motion-safe:animate-float motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-16 h-[400px] w-[400px] rounded-full bg-[var(--violet)]/[0.07] blur-[100px] motion-safe:animate-float motion-reduce:animate-none [animation-delay:-8s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.04] blur-[80px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:items-center lg:gap-14">
        {/* Left content */}
        <div className="min-w-0">
          {/* Eyebrow */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-label">Halifax, NS</span>
              <span className="h-px w-6 bg-white/15" aria-hidden />
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-primary)]">
                <span
                  className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] motion-safe:animate-pulse-glow motion-reduce:animate-none"
                  aria-hidden
                />
                Available for projects
              </span>
            </div>
          </Reveal>

          {/* Main headline */}
          <Reveal className="mt-4 sm:mt-5" delay={80} duration={720}>
            <h1
              className="font-display font-black leading-[1.05] tracking-[-0.03em] text-[var(--text-highlight)]"
              style={{ fontSize: "clamp(2rem, 6vw, 4.25rem)" }}
            >
              I build software
              <br />
              that makes{" "}
              <span className="accent-word">businesses</span>
              <br />
              <span className="accent-word">work.</span>
            </h1>
          </Reveal>

          {/* Sub-headline — single compact block */}
          <Reveal className="mt-3 sm:mt-4" delay={130} duration={680}>
            <p className="max-w-xl text-base font-medium leading-snug text-[var(--text-primary)] sm:text-lg">
              ERP consultant &amp; developer — <span className="text-[var(--text-highlight)]">5+ years</span> in ERP,
              automation, integration, and analytics. End-to-end apps, APIs, and operational insights across finance,
              sales, and operations.
            </p>
            <p className="mt-2 text-xs text-[var(--text-info)] sm:text-sm">
              Halifax · Flourish Management Consulting · Open to freelance · Full-stack · Power Platform · AI-ready
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal className="mt-5 sm:mt-6" delay={180} duration={640}>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#work"
                className="btn-glow inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--bg-primary)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] motion-reduce:active:scale-100 cursor-pointer"
              >
                View my work
                <ArrowDownwardIcon sx={{ fontSize: 16 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvalsoni/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-[var(--text-highlight)] backdrop-blur-sm transition-all duration-200 hover:border-[var(--accent)]/30 hover:bg-white/[0.07] active:scale-[0.98] motion-reduce:active:scale-100 cursor-pointer"
              >
                <LinkedInIcon sx={{ fontSize: 17 }} className="text-[var(--accent)]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/dhruval306"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-[var(--text-highlight)] backdrop-blur-sm transition-all duration-200 hover:border-[var(--accent)]/30 hover:bg-white/[0.07] active:scale-[0.98] motion-reduce:active:scale-100 cursor-pointer"
              >
                <GitHubIcon sx={{ fontSize: 17 }} className="text-[var(--accent)]" />
                GitHub
              </a>
            </div>
          </Reveal>

          {/* Tech chips */}
          <Reveal className="mt-5 sm:mt-6" delay={220} duration={600}>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] sm:px-3 sm:text-[10px]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Stats strip */}
          <Reveal className="mt-6 sm:mt-7" delay={260} duration={580}>
            <div className="intro-stats-strip inline-flex max-w-full flex-wrap gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 backdrop-blur-sm sm:gap-8 sm:px-6 sm:py-4">
              {stats.map((s) => (
                <div key={s.label} className="flex min-w-[4.5rem] flex-col items-center gap-0.5">
                  <span className="stat-number">{s.value}</span>
                  <span className="text-center text-[9px] font-medium uppercase tracking-wider text-[var(--text-info)] sm:text-[10px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Portrait — desktop only so hero fits one viewport on phones */}
        <Reveal
          className="relative mx-auto hidden w-full max-w-[380px] lg:mx-0 lg:block lg:justify-self-end"
          delay={100}
          duration={800}
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--violet)]/15 opacity-80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[var(--card-primary)] p-2 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(34,197,94,0.18)] motion-reduce:hover:translate-y-0 cursor-default">
            <img
              alt="Dhruval Soni"
              decoding="async"
              loading="eager"
              src="https://i.ibb.co/KcTJt0T5/1000017273.jpg"
              className="aspect-square w-full rounded-[1.65rem] object-cover"
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-info)]">
              Dhruval Soni
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Intro;
