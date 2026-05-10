import React from "react";
import Reveal from "./Reveal";

const experience = [
  {
    role: "ERP Consultant & Developer",
    org: "Flourish Consulting",
    place: "Halifax, NS",
    period: "Oct 2024 – Present",
    bullets: [
      "Manage ERP systems for 50+ clients: standardized processes, data transformation, automation, and actionable insights.",
      "Advanced Power BI for Finance, Sales, and Accounting—ERP data turned into high-impact reports.",
      "End-to-end business apps with Python and React—workflow automation and efficiency for clients.",
    ],
  },
  {
    role: "Power Platform Developer",
    org: "Toronto Business College",
    place: "Toronto, ON",
    period: "Jan 2023 – Sep 2023",
    bullets: [
      "SharePoint Framework (SPFx) Academic Portal—streamlined administration and UX.",
      "Azure-to-SharePoint migration with integrity, security, and access controls.",
      "Reusable web parts with Angular and TypeScript—modularity and scale.",
    ],
  },
  {
    role: "Java Full-Stack Developer",
    org: "HN Techno Pvt. Ltd",
    place: "Gujarat, India",
    period: "Sep 2019 – Jul 2021",
    bullets: [
      "Spring Boot microservices for performance and maintainability.",
      "Spring Cloud Gateway for API routing, authentication, and security.",
      "Apache Kafka for real-time streaming and async processing.",
    ],
  },
  {
    role: "Java Developer",
    org: "Ionic Infotech",
    place: "Gujarat, India",
    period: "Jun 2018 – Aug 2019",
    bullets: [
      "Secure Spring Boot + React apps on REST principles.",
      "REST APIs for reliable system-to-system data exchange.",
      "Responsive, cross-browser UI with HTML, CSS, and JavaScript.",
    ],
  },
];

const education = [
  {
    school: "Loyalist College",
    detail: "Post-graduation — Computer Software & Database Development",
    place: "Ontario, Canada (Toronto delivery)",
    period: "Sep 2021 – Apr 2023",
  },
  {
    school: "Kalol Institute of Technology & Research Center",
    detail: "Bachelor of Engineering — Information Technology",
    place: "Gujarat, India",
    period: "Jun 2016 – Aug 2020",
  },
];

const Background = () => {
  return (
    <section
      id="about"
      className="section-screen scroll-mt-28 border-t border-white/[0.06] px-4 py-10 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="section-label">Background</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] text-[var(--text-highlight)] sm:text-5xl">
            Experience &amp; education
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-primary)]">
            ERP consultant and developer with{" "}
            <span className="font-semibold text-[var(--text-highlight)]">5+ years</span> in ERP implementation, business process automation, system integration, and data analytics—shipping end-to-end apps, API-led integrations, and insights across finance, sales, and operations.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal delay={40}>
              <h3 className="font-display text-lg font-bold tracking-tight text-[var(--text-highlight)]">
                Work experience
              </h3>
            </Reveal>
            <div className="mt-6 space-y-8">
              {experience.map((job, index) => (
                <Reveal key={job.role + job.period} delay={index * 45} duration={680}>
                  <div className="border-l-2 border-[var(--accent)]/35 pl-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-display text-base font-bold text-[var(--text-highlight)]">
                        {job.role}
                      </span>
                      <span className="text-xs font-medium text-[var(--accent)]">{job.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {job.org} · {job.place}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--text-primary)]">
                      {job.bullets.map((b) => (
                        <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[var(--text-info)]">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={80}>
              <h3 className="font-display text-lg font-bold tracking-tight text-[var(--text-highlight)]">
                Education
              </h3>
            </Reveal>
            <div className="mt-6 space-y-6">
              {education.map((edu, index) => (
                <Reveal key={edu.school} delay={60 + index * 50} duration={660}>
                  <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-primary)] p-5 transition hover:border-[rgba(34,197,94,0.15)]">
                    <p className="font-display text-base font-bold text-[var(--text-highlight)]">{edu.school}</p>
                    <p className="mt-2 text-sm text-[var(--text-primary)]">{edu.detail}</p>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--text-info)]">
                      <span>{edu.place}</span>
                      <span aria-hidden className="text-[var(--text-info)]/50">
                        ·
                      </span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
