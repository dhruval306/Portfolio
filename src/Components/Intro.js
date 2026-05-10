import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Reveal from "./Reveal";
import MagneticWrap from "./MagneticWrap";
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
      className="section-screen relative flex flex-col justify-start overflow-hidden pb-12 pt-[7.5rem] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:justify-center sm:pb-12 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-36 lg:justify-center lg:pt-44"
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

      <div className="relative mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:items-center lg:gap-14">
        {/* Left content */}
        <div className="min-w-0 flex flex-col gap-6 sm:gap-8">
          {/* Mobile: identity row — avoids a tall wall of text with no visual anchor */}
          <Reveal>
            <div className="flex items-center gap-4 sm:hidden">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--accent)]/35 to-[var(--violet)]/25 opacity-90 blur-md" aria-hidden />
                <img
                  alt="Dhruval Soni"
                  decoding="async"
                  loading="eager"
                  src="https://i.ibb.co/KcTJt0T5/1000017273.jpg"
                  className="relative h-[4.5rem] w-[4.5rem] rounded-2xl border border-white/[0.12] object-cover shadow-lg ring-2 ring-black/20"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-base font-bold tracking-tight text-[var(--text-highlight)]">
                  Dhruval Soni
                </p>
                <p className="mt-0.5 text-xs leading-snug text-[var(--text-secondary)]">
                  ERP consultant · Halifax · Available for projects
                </p>
              </div>
            </div>
          </Reveal>

          {/* Eyebrow — desktop / sm+ ; hidden on xs when mobile row carries context */}
          <Reveal className="hidden sm:block">
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

          {/* Main headline — flex column = consistent rhythm on all breakpoints */}
          <Reveal delay={80} duration={720}>
            <h1 className="font-display text-[clamp(1.75rem,9vw,4.25rem)] font-black leading-[1.12] tracking-[-0.035em] text-[var(--text-highlight)] md:text-[clamp(2.25rem,6vw,4.25rem)] md:leading-[1.06] md:tracking-[-0.03em] flex flex-col gap-1">
              <span>Software that</span>
              <span>
                fits the <span className="accent-word">business</span>,
              </span>
              <span className="accent-word">not the reverse.</span>
            </h1>
          </Reveal>

          {/* Sub-headline — single compact block */}
          <Reveal delay={130} duration={680}>
            <p className="max-w-xl text-[0.9375rem] font-medium leading-relaxed text-[var(--text-primary)] sm:text-lg sm:leading-snug">
              ERP consultant and developer with <span className="text-[var(--text-highlight)]">5+ years</span> delivering
              integrations, internal apps, automation, and analytics—end to end—for finance, sales, and operations.
            </p>
            <p className="mt-2 max-w-xl text-[11px] leading-relaxed text-[var(--text-info)] sm:text-sm">
              Halifax, NS · Flourish · ERP &amp; Power Platform · Consulting &amp; freelance
            </p>
          </Reveal>

          {/* CTAs — magnetic only on primary to keep grid aligned */}
          <Reveal delay={180} duration={640}>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3">
              <MagneticWrap className="w-full sm:w-auto sm:shrink-0" strength={0.22}>
                <a
                  href="#work"
                  className="btn-glow inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--bg-primary)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] motion-reduce:active:scale-100 sm:w-auto cursor-pointer"
                >
                  View my work
                  <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                </a>
              </MagneticWrap>
              <div className="grid min-w-0 grid-cols-2 gap-2 sm:flex sm:min-w-0 sm:flex-1 sm:gap-2">
                <a
                  href="https://www.linkedin.com/in/dhruvalsoni/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-[var(--text-highlight)] backdrop-blur-sm transition-all duration-200 hover:border-[var(--accent)]/30 hover:bg-white/[0.07] active:scale-[0.98] motion-reduce:active:scale-100 cursor-pointer"
                >
                  <LinkedInIcon sx={{ fontSize: 17 }} className="shrink-0 text-[var(--accent)]" />
                  <span className="truncate">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/dhruval306"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-[var(--text-highlight)] backdrop-blur-sm transition-all duration-200 hover:border-[var(--accent)]/30 hover:bg-white/[0.07] active:scale-[0.98] motion-reduce:active:scale-100 cursor-pointer"
                >
                  <GitHubIcon sx={{ fontSize: 17 }} className="shrink-0 text-[var(--accent)]" />
                  <span className="truncate">GitHub</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Tech chips */}
          <Reveal delay={220} duration={600}>
            <div className="flex flex-wrap gap-2 sm:gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] sm:px-3 sm:text-[10px] sm:tracking-widest"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Stats strip */}
          <Reveal delay={260} duration={580}>
            <div className="intro-stats-strip grid w-full grid-cols-2 gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 backdrop-blur-sm sm:inline-flex sm:max-w-full sm:flex-wrap sm:gap-8 sm:px-6 sm:py-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center gap-1 sm:min-w-[4.5rem]">
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
