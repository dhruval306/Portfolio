import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[env(safe-area-inset-top)] motion-safe:animate-fade-in-down motion-reduce:animate-none">
      <header
        className={`w-full max-w-5xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[var(--bg-primary)]/92 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/6 bg-[var(--bg-primary)]/70 backdrop-blur-lg"
        }`}
      >
        <nav className="flex items-center justify-between gap-4 px-5 py-2.5">
          <a
            href="#top"
            className="font-display text-base font-bold tracking-tight text-[var(--text-highlight)] transition hover:text-[var(--accent)]"
            onClick={() => setOpen(false)}
          >
            DS
            <span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:bg-white/[0.06] hover:text-[var(--text-highlight)] cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://www.linkedin.com/in/dhruvalsoni/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl p-2 text-[var(--text-secondary)] transition-all duration-200 hover:bg-white/[0.06] hover:text-[var(--accent)] cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 18 }} />
            </a>
            <a
              href="https://github.com/dhruval306"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl p-2 text-[var(--text-secondary)] transition-all duration-200 hover:bg-white/[0.06] hover:text-[var(--accent)] cursor-pointer"
              aria-label="GitHub"
            >
              <GitHubIcon sx={{ fontSize: 18 }} />
            </a>
            <a
              href="#contact"
              className="btn-glow ml-1 rounded-xl bg-[var(--accent)] px-4 py-2 text-xs font-bold text-[var(--bg-primary)] transition-all duration-200 hover:brightness-110 cursor-pointer"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-[var(--text-highlight)] transition hover:bg-white/[0.06] md:hidden cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon sx={{ fontSize: 20 }} /> : <MenuIcon sx={{ fontSize: 20 }} />}
          </button>
        </nav>

        {open && (
          <div className="motion-safe:animate-fade-in motion-reduce:animate-none border-t border-white/[0.06] px-4 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-3.5 text-base font-medium text-[var(--text-primary)] transition hover:bg-white/[0.05] hover:text-[var(--text-highlight)] cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-3">
                <a
                  href="https://www.linkedin.com/in/dhruvalsoni/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-[var(--text-secondary)] transition hover:bg-white/[0.06] hover:text-[var(--accent)] cursor-pointer"
                  aria-label="LinkedIn"
                  onClick={() => setOpen(false)}
                >
                  <LinkedInIcon sx={{ fontSize: 22 }} />
                </a>
                <a
                  href="https://github.com/dhruval306"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-[var(--text-secondary)] transition hover:bg-white/[0.06] hover:text-[var(--accent)] cursor-pointer"
                  aria-label="GitHub"
                  onClick={() => setOpen(false)}
                >
                  <GitHubIcon sx={{ fontSize: 22 }} />
                </a>
              </div>
              <a
                href="#contact"
                className="mt-2 rounded-xl bg-[var(--accent)] px-3 py-3.5 text-center text-base font-bold text-[var(--bg-primary)] transition hover:brightness-110 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
