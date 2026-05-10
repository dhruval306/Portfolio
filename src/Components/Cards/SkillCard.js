import React from "react";

const THEMES = [
  {
    label: "Frontend",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.18)",
    tagBg: "rgba(34,197,94,0.08)",
    tagBorder: "rgba(34,197,94,0.2)",
    tagColor: "rgba(34,197,94,0.9)",
  },
  {
    label: "Backend",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.12)",
    border: "rgba(56,189,248,0.18)",
    tagBg: "rgba(56,189,248,0.07)",
    tagBorder: "rgba(56,189,248,0.2)",
    tagColor: "rgba(56,189,248,0.85)",
  },
  {
    label: "Data & cloud",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.18)",
    tagBg: "rgba(167,139,250,0.07)",
    tagBorder: "rgba(167,139,250,0.2)",
    tagColor: "rgba(167,139,250,0.85)",
  },
  {
    label: "Business systems",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.18)",
    tagBg: "rgba(251,146,60,0.07)",
    tagBorder: "rgba(251,146,60,0.2)",
    tagColor: "rgba(251,146,60,0.85)",
  },
  {
    label: "AI & automation",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.18)",
    tagBg: "rgba(244,114,182,0.07)",
    tagBorder: "rgba(244,114,182,0.2)",
    tagColor: "rgba(244,114,182,0.85)",
  },
];

const SkillCard = ({ val, index }) => {
  const theme = THEMES[index % THEMES.length];

  return (
    <div
      className="group flex h-full flex-col rounded-2xl border bg-[var(--card-primary)] transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 cursor-default overflow-hidden"
      style={{
        borderColor: "var(--card-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.border;
        e.currentTarget.style.boxShadow = `0 24px 48px -20px rgba(0,0,0,0.7), 0 0 0 1px ${theme.border}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--card-border)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Colored category header bar */}
      <div
        className="flex items-center gap-3 border-b px-5 py-4"
        style={{
          borderColor: theme.border,
          background: theme.glow,
        }}
      >
        {/* Colored dot */}
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: theme.accent, boxShadow: `0 0 8px ${theme.accent}` }}
          aria-hidden
        />
        <span
          className="font-display text-sm font-bold uppercase tracking-wider"
          style={{ color: theme.accent }}
        >
          {val.category}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-1 flex-wrap gap-2 p-5">
        {val.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150"
            style={{
              background: theme.tagBg,
              border: `1px solid ${theme.tagBorder}`,
              color: theme.tagColor,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
