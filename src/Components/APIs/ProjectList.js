/** Projects — solution-first blurbs; stack lives in Technology + highlights. */
const Projects = [
  {
    id: 8,
    Name: "Aweigh — By Flourish",
    role: "Electron · ERP integration",
    year: "2024–present",
    ImageLink:
      "https://images.unsplash.com/photo-1684695747561-9372850cf165?auto=format&fit=crop&w=1600&q=85",
    Technology:
      "Electron, React, PostgreSQL, Node.js, IPC, REST, electron-builder, NSIS",
    highlights: [
      "Accurate weigh capture tied to orders · billing UOM conversion into Spire",
      "Floor-ready tickets · admin oversight · installer-friendly Windows deploy",
    ],
    Description:
      "Operations teams weigh goods once and trust the numbers in ERP—no duplicate spreadsheets. Tickets, printing, and controlled pushes keep the warehouse and finance aligned.",
    WebsiteLink: "",
    GithubCode: "",
    featured: true,
  },
  {
    id: 9,
    Name: "STO — By Flourish",
    role: "React Native + Electron · Spire ERP",
    year: "2024–present",
    /** Distinct from Aweigh — field / tablet ops; not duplicate warehouse stock */
    ImageLink:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=85",
    Technology:
      "React Native, TypeScript, Electron, React, SQLite, PostgreSQL, Spire REST, JWT, Microsoft Graph, Google APIs, OAuth, NSIS",
    highlights: [
      "Crews stay productive offline; changes sync when connectivity returns",
      "Office hub for approvals, reporting, calendar/mail intake · safe Spire posts",
    ],
    Description:
      "Field staff log time and orders where the work happens; the desktop app closes the loop with admins and ERP rules intact. One permission model across mobile and Windows.",
    WebsiteLink: "",
    GithubCode: "",
    featured: true,
  },
  {
    id: 11,
    Name: "InvoiceTracker",
    role: "Electron · AI extraction · finance ops",
    year: "2024–present",
    ImageLink:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    Technology:
      "Azure AI Document Intelligence, Google Vision AI, Python, Electron, PostgreSQL, JavaScript, PyMuPDF, Pillow, psycopg2, electron-builder, NSIS",
    highlights: [
      "Cloud AI reads invoices into structured fields · confidence scores · layout-aware models",
      "Tiered review (auto / soft / full) · Azure or Google under your keys · auditable pipeline",
    ],
    Description:
      "Cuts AP busywork with AI-driven extraction from PDFs—not manual OCR toggling. Teams review exceptions only; approved data exports or lands in Postgres for reporting.",
    WebsiteLink: "",
    GithubCode: "",
    featured: true,
  },
  {
    id: 12,
    Name: "Sales & inventory analytics",
    role: "Power BI · manufacturing intelligence",
    year: "2024–2025",
    group: "power-bi",
    ImageLink: "/Images/Sales%20.png",
    ImageLinkSecondary: "/Images/Inventory%20Utilization.png",
    imageCaptionPrimary: "Sales performance",
    imageCaptionDivider: "Inventory utilization",
    Technology:
      "Power BI, DAX, Azure SQL, data modeling, custom connectors, manufacturing KPIs",
    highlights: [
      "Demand signals & inventory utilization tied to production reality—not flat stock counts",
      "Parameterized visuals · replicate across plants · connector-ready for ERP feeds",
    ],
    Description:
      "Answers whether sales, stock, and shop capacity line up before shortages bite. Built on modeled facts with DAX; showcase data proves layout—plug in live manufacturing sources when ready.",
    WebsiteLink: "",
    GithubCode: "",
    featured: false,
  },
  {
    id: 13,
    Name: "Financial reporting dashboard",
    role: "Power BI · FP&A visibility",
    year: "2024–2025",
    group: "power-bi",
    ImageLink: "/Images/Screenshot%202025-08-23%20182120.png",
    Technology:
      "Power BI, DAX, Azure SQL, GL-style modeling, API integrations",
    highlights: [
      "Income statement · balance sheet · AP/AR · COGS · expenses · net profit in one narrative",
      "Executive-ready drill paths · audit-friendly grain · extend to live finance systems",
    ],
    Description:
      "Leadership sees cash and performance without waiting on month-end packs. Layered financial logic in DAX; representative datasets demonstrate connectors before wiring production ledgers.",
    WebsiteLink: "",
    GithubCode: "",
    featured: false,
  },
  {
    id: 14,
    Name: "HRIS workforce dashboard",
    role: "Power BI · people analytics",
    year: "2024–2025",
    group: "power-bi",
    ImageLink: "/Images/Communication.png",
    Technology:
      "Power BI, DAX, HR data modeling, Azure SQL, compliance-oriented visuals",
    highlights: [
      "Leave · benefits · onboarding · promotions · performance signals in governed views",
      "Privacy-conscious aggregations · scalable as headcount grows",
    ],
    Description:
      "HR and managers stop juggling spreadsheets for workforce risk and coverage. Role-friendly dashboards from modeled HR facts—pattern validated on sample HR structures first.",
    WebsiteLink: "",
    GithubCode: "",
    featured: false,
  },
  {
    id: 15,
    Name: "Production tracker",
    role: "Power BI · Power Apps · automation",
    year: "2024–2025",
    group: "power-bi",
    ImageLink: "/Images/Tracker.png",
    ImageLinkSecondary: "/Images/Tracker%202.png",
    imageCaptionPrimary: "Production dashboard",
    imageCaptionDivider: "Workflows & automation",
    Technology:
      "Power BI, Power Apps, Power Automate, DAX, Azure SQL, workflow integrations",
    highlights: [
      "Structured production models · shop-floor signals paired with controlled workflows",
      "Automate + Apps for handoffs · reduces manual status chasing between shifts",
    ],
    Description:
      "Operations gets a single pulse on runs, bottlenecks, and follow-ups—not tribal knowledge. Combines analytics with Power Platform automation so updates flow without duplicate entry.",
    WebsiteLink: "",
    GithubCode: "",
    featured: false,
  },
  {
    id: 1,
    Name: "Microservices platform",
    role: "Java · distributed systems",
    year: "2023",
    ImageLink: "https://i.ibb.co/V2b88hd/microservice.png",
    Technology:
      "Java 17, Spring Boot, Kafka, Keycloak, Spring Cloud, Eureka, Docker, MySQL, MongoDB",
    highlights: [
      "Gateway + discovery + Kafka for scalable service boundaries",
      "Keycloak-secured APIs · Dockerized services · SQL + document stores",
    ],
    Description:
      "A blueprint for splitting a monolith: authenticated services, async messaging, and deployment you can reproduce locally. Useful when traffic or teams outgrow a single deployable.",
    WebsiteLink: "",
    GithubCode: "https://github.com/dhruval306/Spring_boot-Microservices",
    featured: false,
  },
  {
    id: 2,
    Name: "Uber-Clone",
    role: "Next.js · maps",
    year: "2023",
    ImageLink: "https://i.ibb.co/qgqM00b/uber.png",
    Technology: "Next.js, React, Mapbox, Tailwind CSS, REST",
    highlights: [
      "End-to-end map UX: places, routes, distance and fare estimates",
      "Live demo on Vercel · responsive layouts · production-minded structure",
    ],
    Description:
      "Demonstrates how location products feel in the browser—search, map interactions, and pricing logic wired together. A credible reference for mobility or delivery-style experiences.",
    WebsiteLink: "https://uber-clone-ghdrdrlis-dhruval306.vercel.app",
    GithubCode: "https://github.com/dhruval306/uber_Clone",
    featured: false,
  },
  {
    id: 4,
    Name: "SpringAuth",
    role: "Spring Security · APIs",
    year: "2022",
    ImageLink: "https://i.ibb.co/4M4Dsx6/spring.png",
    Technology: "Java, Spring Boot, Spring Security, PostgreSQL",
    highlights: [
      "Account lifecycle with email verification",
      "JWT-ready Spring Security patterns · relational persistence",
    ],
    Description:
      "Backend starter for anything that needs real users: registration, login, and verified email before full access. Saves weeks compared to bolting auth onto each new API.",
    WebsiteLink: "",
    GithubCode: "https://github.com/dhruval306/UserAuthentication",
    featured: false,
  },
  {
    id: 3,
    Name: "MechTech",
    role: "MERN stack",
    year: "2022",
    ImageLink: "https://i.ibb.co/TgCJrH3/MERN.png",
    Technology: "React, Node.js, Express, MongoDB, REST, Bootstrap",
    highlights: [
      "Customer booking flows · shop-facing dashboards",
      "REST APIs over MongoDB · operational CRUD without fragile sheets",
    ],
    Description:
      "Independent shops run appointments and customer touchpoints from one web app instead of scattered messages. Owners see workload; customers get a clear path to book.",
    WebsiteLink: "",
    GithubCode: "https://github.com/dhruval306/Mechtech",
    featured: false,
  },
  {
    id: 5,
    Name: "One Stop Jewel",
    role: "Java · POS",
    year: "2021",
    ImageLink: "https://i.ibb.co/khDLZK9/onestop.png",
    Technology: "Java, Spring, Hibernate, JSP, MySQL, JavaScript",
    highlights: [
      "Wholesale jewelry workflows · inventory and settlement paths",
      "Spring/Hibernate core · browser UI suited to counter speed",
    ],
    Description:
      "Built for wholesale jewelers—not generic retail: inventory depth, payment flows, and operations tuned to how those businesses actually sell.",
    WebsiteLink: "",
    GithubCode: "https://github.com/dhruval306/OneStopJewel",
    featured: false,
  },
];

export default Projects;
