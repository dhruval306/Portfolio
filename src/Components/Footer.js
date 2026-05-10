import React, { useCallback, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Reveal from "./Reveal";
import ConnectHandshake from "./ConnectHandshake";
import MagneticWrap from "./MagneticWrap";

const Footer = () => {
  const [mailHandshakeDone, setMailHandshakeDone] = useState(false);
  const onHandshakeComplete = useCallback(() => setMailHandshakeDone(true), []);

  return (
    <footer
      id="contact"
      className="section-screen relative flex flex-col justify-start overflow-hidden border-t border-white/[0.06] pb-[max(3rem,env(safe-area-inset-bottom))] lg:justify-center"
    >
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden
        style={{
          background: "radial-gradient(1000px 500px at 50% 0%, rgba(34,197,94,0.07), transparent 60%), radial-gradient(600px 400px at 100% 100%, rgba(139,92,246,0.06), transparent 60%)"
        }}
      />

      {/* Main CTA block */}
      <div className="relative mx-auto max-w-6xl py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:py-16 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
        <Reveal className="text-center">
          <p className="section-label text-center">Get in touch</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,7vw,3.75rem)] font-black tracking-[-0.03em] text-[var(--text-highlight)] sm:text-5xl lg:text-6xl">
            Let&apos;s fix the system.
            <br />
            <span className="accent-word">Not the spreadsheet.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-primary)]">
            Freelance and consulting: full-stack builds, automation, dashboards, and ERP integrations.
            Share what you&apos;re trying to ship—the stack, timeline, and constraints—and I&apos;ll respond straight.
          </p>
          <p className="mx-auto mt-4 text-sm text-[var(--text-info)]">
            Halifax, NS
          </p>

          <Reveal className="mt-8" delay={40}>
            <ConnectHandshake onComplete={onHandshakeComplete} />
          </Reveal>

          {/* Primary CTA */}
          <Reveal className="mt-2" delay={80}>
            <MagneticWrap className="mx-auto block max-w-[calc(100vw-2rem)] sm:max-w-none" strength={0.24}>
              <a
                href="mailto:dhruval.soni306@gmail.com"
                className={`btn-glow mx-auto inline-flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-4 py-4 text-sm font-bold text-[var(--bg-primary)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] motion-reduce:active:scale-100 sm:max-w-none sm:gap-3 sm:px-8 sm:text-base cursor-pointer ${
                  mailHandshakeDone ? "mail-ready-glow" : ""
                }`}
              >
                <EmailOutlinedIcon sx={{ fontSize: 20 }} />
                <span className="min-w-0 max-w-full break-all text-center sm:text-left">
                  dhruval.soni306@gmail.com
                </span>
                <ArrowForwardIcon sx={{ fontSize: 18 }} aria-hidden />
              </a>
            </MagneticWrap>
          </Reveal>
        </Reveal>

        {/* Secondary links */}
        <Reveal className="mt-10" delay={120} duration={700}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+16475486045"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[var(--text-highlight)] transition-all duration-200 hover:border-[rgba(34,197,94,0.3)] hover:bg-white/[0.07] cursor-pointer"
            >
              <PhoneOutlinedIcon sx={{ fontSize: 18 }} className="text-[var(--accent)]" />
              (647) 548-6045
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[var(--text-highlight)] transition-all duration-200 hover:border-[rgba(34,197,94,0.3)] hover:bg-white/[0.07] cursor-pointer"
            >
              <ArticleOutlinedIcon sx={{ fontSize: 18 }} className="text-[var(--accent)]" />
              Résumé (PDF)
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvalsoni/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[var(--text-highlight)] transition-all duration-200 hover:border-[rgba(34,197,94,0.3)] hover:bg-white/[0.07] cursor-pointer"
            >
              <LinkedInIcon sx={{ fontSize: 18 }} className="text-[var(--accent)]" />
              LinkedIn
            </a>
            <a
              href="https://github.com/dhruval306"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[var(--text-highlight)] transition-all duration-200 hover:border-[rgba(34,197,94,0.3)] hover:bg-white/[0.07] cursor-pointer"
            >
              <GitHubIcon sx={{ fontSize: 18 }} className="text-[var(--accent)]" />
              GitHub
            </a>
          </div>
        </Reveal>

        {/* Bottom strip */}
        <Reveal className="mt-16" delay={80}>
          <div className="flex flex-col gap-2 border-t border-white/[0.07] pt-8 text-xs text-[var(--text-info)] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Dhruval Soni · Built with React &amp; Tailwind</span>
            <a
              href="#top"
              className="font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-highlight)] cursor-pointer"
            >
              Back to top ↑
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
