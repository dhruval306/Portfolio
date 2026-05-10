import React, { useCallback, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/** Same media strip height on every card so thumbnails align in the grid */
const MEDIA_FRAME = "h-[220px] sm:h-[240px]";

const ProjectCard = ({ val }) => {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = useCallback(
    (e) => {
      if (reducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rx: py * -9, ry: px * 11 });
    },
    [reducedMotion]
  );

  const handleLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  const tiltStyle =
    reducedMotion || (tilt.rx === 0 && tilt.ry === 0)
      ? undefined
      : {
          transform: `perspective(960px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        };

  const stack = val.Technology.split(",").map((s) => s.trim()).filter(Boolean);
  const pills = stack.slice(0, 5);
  const more = stack.length - pills.length;

  const dualStaticGallery = val.ImageLinkSecondary && (
    <div className="grid h-full min-h-0 grid-cols-1 gap-3 px-3 py-3 sm:grid-cols-2 sm:gap-4">
      <div className="flex min-h-0 flex-col items-center justify-center">
        {val.imageCaptionPrimary && (
          <span className="mb-1 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-info)]">
            {val.imageCaptionPrimary}
          </span>
        )}
        <img
          loading="lazy"
          decoding="async"
          src={val.ImageLink}
          alt={`${val.Name} — ${val.imageCaptionPrimary || "screenshot"}`}
          className="max-h-full min-h-0 w-full flex-1 object-contain object-center"
        />
      </div>
      <div className="flex min-h-0 flex-col items-center justify-center border-t border-white/[0.06] pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
        {val.imageCaptionDivider && (
          <span className="mb-1 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-info)]">
            {val.imageCaptionDivider}
          </span>
        )}
        <img
          loading="lazy"
          decoding="async"
          src={val.ImageLinkSecondary}
          alt={`${val.Name} — ${val.imageCaptionDivider || "screenshot"}`}
          className="max-h-full min-h-0 w-full flex-1 object-contain object-center"
        />
      </div>
    </div>
  );

  const dualMarqueeGallery = val.ImageLinkSecondary && (
    <div className="relative h-full min-h-0 overflow-hidden py-2">
      {/* Soft edges so motion feels contained */}
      <div
        className="pointer-events-none absolute inset-y-2 left-0 z-10 w-10 bg-gradient-to-r from-[#0a090f] via-[#0a090f]/90 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-2 right-0 z-10 w-10 bg-gradient-to-l from-[#0a090f] via-[#0a090f]/90 to-transparent"
        aria-hidden
      />

      <div className="flex h-full w-[400%] shrink-0 motion-safe:animate-dual-image-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <React.Fragment key={dup}>
            <div className="flex h-full min-h-0 w-1/4 shrink-0 flex-col items-center justify-center px-4 py-2">
              {val.imageCaptionPrimary && (
                <span className="mb-1 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-info)]">
                  {val.imageCaptionPrimary}
                </span>
              )}
              <img
                loading="lazy"
                decoding="async"
                src={val.ImageLink}
                alt=""
                className="max-h-full min-h-0 w-full flex-1 object-contain object-center"
              />
            </div>
            <div className="flex h-full min-h-0 w-1/4 shrink-0 flex-col items-center justify-center border-l border-white/[0.06] px-4 py-2">
              {val.imageCaptionDivider && (
                <span className="mb-1 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[var(--text-info)]">
                  {val.imageCaptionDivider}
                </span>
              )}
              <img
                loading="lazy"
                decoding="async"
                src={val.ImageLinkSecondary}
                alt=""
                className="max-h-full min-h-0 w-full flex-1 object-contain object-center"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <span className="sr-only">
        Auto-scrolling screenshots: {val.imageCaptionPrimary || "first view"},{" "}
        {val.imageCaptionDivider || "second view"}.
      </span>
    </div>
  );

  return (
    <article
      ref={cardRef}
      className="group h-full cursor-default [perspective:1100px]"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-primary)] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:border-[rgba(34,197,94,0.2)] hover:shadow-[0_32px_64px_-28px_rgba(0,0,0,0.85),0_0_0_1px_rgba(34,197,94,0.05)] motion-reduce:hover:translate-y-0"
        style={tiltStyle}
      >
      {/* Image area */}
      <div
        className={`relative flex w-full shrink-0 overflow-hidden border-b border-white/[0.05] bg-[#0a090f] ${MEDIA_FRAME}`}
      >
        {!val.ImageLinkSecondary ? (
          <div className="relative flex h-full min-h-0 w-full flex-col items-center justify-center px-4 py-3">
            <img
              loading="lazy"
              decoding="async"
              src={val.ImageLink}
              alt={val.Name}
              className="max-h-full max-w-full object-contain object-center transition-transform duration-500 motion-safe:group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[12] overflow-hidden opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100 motion-reduce:hidden"
              aria-hidden
            >
              <div className="absolute inset-0 card-media-scan opacity-50" />
            </div>
          </div>
        ) : reducedMotion ? (
          dualStaticGallery
        ) : (
          dualMarqueeGallery
        )}

        {val.featured && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--bg-primary)] shadow-[0_0_12px_rgba(34,197,94,0.4)]">
            Flagship
          </span>
        )}
        {val.representativeImagery && (
          <span className="absolute right-3 top-3 z-20 max-w-[55%] rounded-full border border-white/10 bg-[#0a090f]/90 px-2 py-1 text-[9px] font-semibold uppercase leading-tight tracking-wide text-[var(--text-info)] backdrop-blur-sm">
            Representative visuals · NDA
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[var(--text-highlight)]">
            {val.Name}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-[var(--text-info)]">
            {val.role}
            {val.year && val.year !== "—" ? ` · ${val.year}` : ""}
          </p>
          {val.showcase && (
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--violet)]">
              Open-source demo
            </p>
          )}
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-primary)]">{val.Description}</p>

        <ul className="space-y-2 border-t border-white/[0.07] pt-3">
          {val.highlights.map((line, i) => (
            <li key={i} className="flex gap-2 text-xs leading-snug text-[var(--text-secondary)]">
              <ChevronRightIcon
                className="mt-0.5 shrink-0 text-[var(--accent)]"
                sx={{ fontSize: 15 }}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {pills.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
          {more > 0 && (
            <span className="rounded-lg border border-dashed border-white/10 px-2.5 py-1 text-[10px] text-[var(--text-info)]">
              +{more}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-white/[0.07]">
          {val.GithubCode ? (
            <a
              href={val.GithubCode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-[var(--text-highlight)] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] min-[420px]:flex-none cursor-pointer"
            >
              <GitHubIcon sx={{ fontSize: 16 }} />
              Source
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-dashed border-white/10 px-4 py-2.5 text-xs text-[var(--text-info)] min-[420px]:flex-none">
              Private / NDA
            </span>
          )}
          {val.WebsiteLink ? (
            <a
              href={val.WebsiteLink}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-[var(--bg-primary)] transition-all duration-200 hover:brightness-110 min-[420px]:flex-none cursor-pointer"
            >
              <LaunchIcon sx={{ fontSize: 16 }} />
              Live demo
            </a>
          ) : val.GithubCode ? (
            <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/[0.08] px-4 py-2.5 text-xs text-[var(--text-info)] min-[420px]:flex-none">
              Local demo
            </span>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/[0.08] px-4 py-2.5 text-xs text-[var(--text-info)] min-[420px]:flex-none">
              On request
            </span>
          )}
        </div>
      </div>
      </div>
    </article>
  );
};

export default ProjectCard;
