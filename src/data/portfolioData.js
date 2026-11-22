// Senior Frontend Data Module - Steven Amin Portfolio

export const initialProfileData = {
  name: "Steven Amin",
  fullName: "Steven Amin Ramzy Nashed",
  role: "Software Engineer | Backend & Full-Stack .NET Developer",
  heroHeadline: "Building Reliable Software for Real-World Problems",
  location: "Cairo, Egypt",
  email: "stevenameen02@gmail.com",
  phone: "+20 120 304 2189",
  github: "https://github.com/Steven-Amin02",
  linkedin: "https://linkedin.com/in/steven-amin02",
  availability: "Interested in 2027 graduate software engineering roles, internships, and suitable freelance projects.",
  status: "Open to 2027 Roles, Internships & Freelance",
  bio: "I am a final-year Software Engineering student at Ain Shams University in a dual-degree program with the University of East London (expected graduation: 2027). I develop backend and full-stack applications using C#, ASP.NET Core, React, and SQL Server. My National Bank of Egypt deployment internship provided exposure to enterprise SIT, UAT, and production release workflows.",
  snippet: "Backend engineering, full-stack .NET & React development, relational databases, and enterprise release workflow exposure.",
  cgpa: "3.22 / 4.0",
  featuredCount: "10 Projects",
  internshipsCount: "NBE Internship",
  certifiedStatus: "Ain Shams & UEL",
  educationDegree: "B.Sc. CS & Software Engineering (In Progress)"
};

export const heroTechBadges = [
  { label: "C# & .NET", color: "#FF6B2C" },
  { label: "ASP.NET Core API & MVC", color: "#10B981" },
  { label: "Entity Framework Core", color: "#3B82F6" },
  { label: "SQL Server (T-SQL)", color: "#EC4899" },
  { label: "UiPath RPA Workflows", color: "#F59E0B" },
  { label: "Layered Architecture & SOLID", color: "#8B5CF6" },
  { label: "React & TypeScript", color: "#06B6D4" }
];

export const bentoCardsData = {
  bio: {
    headline: "Building Reliable Software for Real-World Problems",
    text: "I focus on backend engineering, full-stack development, relational databases, and software architecture. My academic and practical experience includes ASP.NET Core APIs, MVC applications, Entity Framework Core, SQL Server, React, TypeScript, UiPath automation, and Python projects. Through the National Bank of Egypt internship and the Digital Egypt Pioneers Initiative (DEPI), I gained exposure to enterprise software delivery and strengthened my application-development skills. I enjoy solving real-world problems, learning deployment and cloud technologies, and developing maintainable software."
  },
  dualDegree: {
    title: "Dual-Degree Software Engineering",
    primaryUni: "Ain Shams University — B.Sc. in Computer Science, Software Engineering Major (in progress)",
    dualUni: "University of East London — B.Sc. in Software Engineering, Dual-Degree Program (in progress)",
    cgpa: "3.22 / 4.0",
    grade: "In Progress • Expected 2027",
    timeline: "2023–2027 (expected)"
  },
  enterprise: {
    company: "National Bank of Egypt (NBE)",
    role: "Deployment Intern",
    timeline: "5–30 July 2026",
    details: "Gained internship exposure to the enterprise release lifecycle and differences between SIT, UAT, and production environments, learning about deployment coordination, change requests, and operational release processes."
  },
  metrics: [
    { value: "3.22", label: "Current CGPA (/ 4.0)", note: "Ain Shams University" },
    { value: "2027", label: "Expected Graduation", note: "Ain Shams & UEL (In Progress)" },
    { value: "10", label: "Portfolio Projects", note: ".NET, React, RPA & Python" },
    { value: "Jul '26", label: "NBE Internship", note: "5–30 July 2026 • Release Exposure" }
  ]
};

export const servicesData = [
  {
    id: "service-1",
    title: "Full-Stack Web Development",
    description: "Web applications combining ASP.NET Core MVC/APIs, relational databases, and responsive React/TypeScript interfaces.",
    image: "/diagrams/route-posts-arch.svg",
    tags: ["React", "ASP.NET Core", "C#"],
    targetSection: "projects",
    filterCategory: "dotnet",
    actionLabel: "Explore .NET & Full-Stack Projects"
  },
  {
    id: "service-2",
    title: "Backend & REST APIs",
    description: "REST APIs and backend services built with C#, ASP.NET Core, Entity Framework Core, SQL Server, and layered architecture.",
    image: "/diagrams/ai-ticketing-arch.svg",
    tags: ["REST APIs", "EF Core", "Layered Architecture"],
    targetSection: "projects",
    filterCategory: "dotnet",
    actionLabel: "View Backend Projects"
  },
  {
    id: "service-3",
    title: "UiPath RPA Workflows",
    description: "Automated workflows using UiPath Studio and Orchestrator with Dispatcher–Performer queues and exception handling.",
    image: "/diagrams/smas-rpa-arch.svg",
    tags: ["UiPath Studio", "Orchestrator", "Queues"],
    targetSection: "projects",
    filterCategory: "rpa",
    actionLabel: "View RPA Project"
  },
  {
    id: "service-4",
    title: "Release & Deployment Exposure",
    description: "Internship exposure to SIT, UAT, and production release stages, change requests, and deployment coordination at NBE.",
    image: "/diagrams/ams-airline-arch.svg",
    tags: ["SIT / UAT / Prod", "IIS Exposure", "Release Lifecycle"],
    targetSection: "experience",
    filterCategory: null,
    actionLabel: "View Experience"
  }
];

export const skillsData = [
  "C# & .NET",
  "ASP.NET Core Web API & MVC",
  "Entity Framework Core & LINQ",
  "SQL Server (T-SQL) & PostgreSQL",
  "REST APIs & JWT Concepts",
  "React & TypeScript",
  "HTML5, CSS3 & Vite",
  "Git, GitHub & Docker Basics",
  "Release Processes & IIS Exposure",
  "UiPath Studio & Orchestrator",
  "Layered Architecture & SOLID"
];

export const categorizedSkillsData = [
  {
    id: "backend",
    category: "Primary Backend",
    icon: "Server",
    skills: [
      { name: "C# and .NET", level: "Core Stack" },
      { name: "ASP.NET Core Web API and MVC", level: "Project Experience" },
      { name: "Entity Framework Core and LINQ", level: "Project Experience" },
      { name: "REST APIs and JWT Authentication Concepts", level: "Project Experience" },
      { name: "Layered Architecture, SOLID Principles & Design Patterns", level: "Applied in Projects" }
    ]
  },
  {
    id: "database",
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "SQL Server / T-SQL", level: "Project Experience" },
      { name: "PostgreSQL", level: "Practical Exposure" },
      { name: "Relational Database Design, EF Core Migrations & Querying", level: "Project Experience" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: "Project Experience" },
      { name: "JavaScript and TypeScript", level: "Project Experience" },
      { name: "HTML5, CSS3 & Responsive Web Layouts", level: "Project Experience" },
      { name: "Vite", level: "Project Experience" }
    ]
  },
  {
    id: "devops",
    category: "DevOps, Automation & Tools",
    icon: "Cpu",
    skills: [
      { name: "Git and GitHub", level: "Project Experience" },
      { name: "Docker and Linux Fundamentals", level: "Learning / Practical Exposure" },
      { name: "Enterprise Release Processes & IIS Exposure", level: "NBE Internship Exposure" },
      { name: "CI/CD Concepts and Exposure", level: "Learning / Exposure" },
      { name: "UiPath Studio, Orchestrator & RPA Workflows", level: "Project Experience" }
    ]
  },
  {
    id: "interests",
    category: "Additional Technical Interests",
    icon: "Code2",
    skills: [
      { name: "Python and Machine Learning", level: "Academic & Project Work" },
      { name: "Java and Node.js", level: "Academic & Training Exposure" },
      { name: "Cloud and Microservices Architecture", level: "Exploring" },
      { name: "Flutter / Mobile Application Development", level: "Ongoing Graduation Project" }
    ]
  }
];

export const projectsData = [
  {
    id: "proj-movemint",
    title: "MoveMint — Sustainable Mobility Platform",
    tag: "Graduation Project • Deloitte-Sponsored",
    statusLabel: "In Progress",
    category: "ai",
    featured: true,
    description: "A sustainable mobility platform focused on Cairo, exploring emissions-aware trip planning, public-transit verification, analytics, and rewards.",
    image: "/deloitte-movemint.webp",
    link: "",
    techStack: [
      "Flutter (In Progress)",
      "Routing Integration (Planned)",
      "Backend Services (Planned)",
      "PostgreSQL / PostGIS (Planned)",
      "GPS Verification (Planned)",
      "Transport Classification (Planned)"
    ],
    isBuilding: true,
    containImage: true,
    architecture: "Planned & Explored Architecture: Flutter Mobile App + Routing & Emissions Services + PostgreSQL/PostGIS Geospatial Backend + GPS/Sensor Transit Verification",
    impact: "Ongoing graduation project sponsored by Deloitte (graduation-project sponsor). Planned modules are currently in design and active development.",
    highlights: [
      "Concept & Goal: Help users discover lower-emission travel options across Cairo.",
      "Planned Verification: Explore transit validation through location, routes, and mobile sensors.",
      "Planned Workflows: Design emissions information, analytics, and user rewards workflows.",
      "Planned Backend: Develop backend services and PostgreSQL/PostGIS geospatial data integration."
    ]
  },
  {
    id: "proj-sany3y",
    title: "Sany3y — Service Marketplace Platform",
    tag: "ASP.NET Core 8 MVC & SQL Server",
    statusLabel: "Completed",
    category: "dotnet",
    featured: true,
    description: "A marketplace that connects clients with skilled technicians and supports service discovery, requests, bookings, and role-based workflows.",
    image: "/sany3y_banner4.webp",
    link: "https://github.com/Steven-Amin02/Sany3y",
    techStack: ["ASP.NET Core 8 MVC", "Entity Framework Core", "SQL Server", "Layered Architecture"],
    isBuilding: false,
    containImage: true,
    architecture: "Layered MVC Architecture (Presentation MVC ➔ Business Logic Services ➔ Data Access & Repositories ➔ EF Core & SQL Server)",
    impact: "Engineering focus: MVC layering, relational database design, role-based access control, EF Core migrations, and booking business logic.",
    highlights: [
      "Implemented role-based access control separating Client, Technician, and Admin workflows.",
      "Designed relational database tables and managed schema changes using Entity Framework Core migrations.",
      "Built service discovery, service requests, booking management, and status tracking workflows.",
      "Structured application logic using layered MVC architecture to separate presentation from data access."
    ]
  },
  {
    id: "proj-hero",
    title: "AI-Powered Support & Ticketing Platform",
    tag: "In Development • Full-Stack & AI",
    statusLabel: "In Development",
    category: "dotnet",
    featured: true,
    description: "A support ticketing application in development exploring ticket routing, prioritization, SLA visibility, and AI-assisted classification.",
    image: "/diagrams/ai-ticketing-arch.svg",
    link: "",
    techStack: [
      "React",
      "TypeScript",
      "ASP.NET Core Web API",
      "PostgreSQL",
      "JWT",
      "LLM Ticket Triage (Planned)"
    ],
    isBuilding: true,
    containImage: false,
    architecture: "In-Development & Planned Architecture: React + TypeScript Frontend + ASP.NET Core Web API + PostgreSQL + Planned LLM Triage Module",
    impact: "Engineering focus: API design, authorization, frontend/backend integration, validation, and audit-friendly workflows (currently in development).",
    highlights: [
      "In Development — API & Authorization: Designing ASP.NET Core Web API endpoints with input validation and JWT-based role authorization.",
      "In Development — Frontend Integration: Building React and TypeScript views for ticket creation, routing, and SLA status visibility.",
      "Planned Module — AI-Assisted Triage: Exploring LLM-assisted classification to suggest ticket categories and priority levels.",
      "Planned Module — Audit Workflows: Designing structured ticket history and SLA tracking rules."
    ]
  },
  {
    id: "proj-smas",
    title: "SMAS — Social Media Automation System",
    tag: "UiPath Studio & Orchestrator",
    statusLabel: "Completed",
    category: "rpa",
    featured: true,
    description: "RPA workflows for distributing content across supported social platforms with queue management and exception handling.",
    image: "/diagrams/smas-rpa-arch.svg",
    link: "https://github.com/Steven-Amin02/Social-Media-Automation-System-SMAS-",
    techStack: ["UiPath Studio", "UiPath Orchestrator", "Queues", "Dispatcher–Performer Pattern"],
    isBuilding: false,
    containImage: false,
    architecture: "Dispatcher–Performer RPA Architecture with UiPath Orchestrator Queues",
    impact: "Engineering focus: Separating content ingestion from execution, queue orchestration, retry handling, and automation logging.",
    highlights: [
      "Separated ingestion (Dispatcher) from publishing execution (Performer) across modular UiPath workflows.",
      "Used UiPath Orchestrator queues to track transaction items and apply retry rules.",
      "Implemented structured exception handling and execution logging for automated runs."
    ]
  },
  {
    id: "proj-ams",
    title: "AMS — Airline Management System",
    tag: "ASP.NET Core 8 MVC & Identity",
    statusLabel: "Completed",
    category: "dotnet",
    featured: false,
    description: "Airline administration and reservations application with flight-search, booking, and Arabic/English interface support.",
    image: "/diagrams/ams-airline-arch.svg",
    link: "https://github.com/Steven-Amin02/Airline-Management-System-AMS-",
    techStack: ["ASP.NET Core 8 MVC", "ASP.NET Identity", "SQL Server", "Localization (AR/EN)"],
    isBuilding: false,
    containImage: false,
    architecture: "ASP.NET Core 8 MVC + ASP.NET Identity + SQL Server + Arabic/English Localization",
    impact: "Engineering focus: Relational booking data, role-based access, Arabic/English localization, and reservation workflows.",
    highlights: [
      "Designed relational database tables for flight schedules, seat availability, and bookings in SQL Server.",
      "Integrated ASP.NET Identity for authentication and role-based access across passenger and admin views.",
      "Implemented bilingual interface localization supporting both English (LTR) and Arabic (RTL) layouts."
    ]
  },
  {
    id: "proj-ml",
    title: "Smart Phone Price Predictor",
    tag: "Python, scikit-learn & Streamlit",
    statusLabel: "Completed",
    category: "ai",
    featured: false,
    description: "A machine-learning project for smartphone price-tier classification from device specifications, with a project-reported 95.55% classification accuracy.",
    image: "/diagrams/phone-ml-arch.svg",
    link: "https://github.com/Steven-Amin02/Smart-phones-prices",
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Streamlit"],
    isBuilding: false,
    containImage: false,
    architecture: "Data Preprocessing (Pandas/NumPy) ➔ Multi-Class Classification (scikit-learn) ➔ Interactive Streamlit UI",
    impact: "Project-reported result: 95.55% classification accuracy on the evaluated dataset, presented with a Streamlit interface.",
    highlights: [
      "Performed data cleaning, feature selection, and preprocessing on device specifications using Pandas and NumPy.",
      "Trained and evaluated classification models in scikit-learn (project-reported 95.55% accuracy on the test split).",
      "Built an interactive Streamlit web app to test price-tier predictions from hardware inputs."
    ]
  },
  {
    id: "proj-route-posts",
    title: "Route Posts — Social Media Web App",
    tag: "React 19, TypeScript & Tailwind CSS",
    statusLabel: "Completed",
    category: "frontend",
    featured: false,
    description: "Single-page social media web application featuring newsfeeds, user profiles, notifications, authentication flows, and a modular service layer.",
    image: "/diagrams/route-posts-arch.svg",
    link: "https://github.com/Steven-Amin02/Route-posts-Assignment2/tree/main/Route-posts",
    techStack: ["React 19", "TypeScript", "Tailwind CSS 4", "HeroUI", "React Router", "Axios"],
    isBuilding: false,
    containImage: false,
    architecture: "React 19 + TypeScript SPA ➔ Nested Layout Router (AuthLayout / MainLayout) ➔ Modular Axios Service Layer",
    impact: "Engineering focus: Component-driven React architecture, TypeScript service modules, nested routing, and responsive UI design.",
    highlights: [
      "Configured nested client-side routing with React Router separating authentication views (AuthLayout) and main feed views (MainLayout).",
      "Structured API calls into dedicated TypeScript service modules (auth.service.ts and profile.service.ts) using Axios.",
      "Built responsive newsfeed, profile, and notification components using Tailwind CSS and HeroUI."
    ]
  },
  {
    id: "proj-exovista",
    title: "ExoVista — NASA Space Apps Challenge",
    tag: "NASA Space Apps Challenge",
    statusLabel: "Completed",
    category: "frontend",
    featured: false,
    description: "Interactive educational exoplanet visualization and astronomy storytelling web application created for the NASA Space Apps Challenge.",
    image: "/diagrams/exovista-nasa-arch.svg",
    link: "https://github.com/Steven-Amin02/ExoVista",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS Animations", "NASA-Related Data"],
    isBuilding: false,
    containImage: false,
    architecture: "Client-Side HTML5 Canvas & JavaScript Visualization + Educational Astronomy Storytelling",
    impact: "Engineering focus: Interactive browser rendering, educational data visualization, and astronomy storytelling.",
    highlights: [
      "Developed interactive visual representations of exoplanet concepts using JavaScript, HTML5 Canvas, and CSS animations.",
      "Structured educational astronomy storytelling modules to explain exoplanet characteristics to students.",
      "Built as a project submission for the NASA Space Apps Challenge."
    ]
  },
  {
    id: "proj-magnisnap",
    title: "MagniSnap — Intelligent Scissors Tool",
    tag: "C#, WinForms & Dijkstra's Algorithm",
    statusLabel: "Completed",
    category: "dotnet",
    featured: false,
    description: "A desktop image-contour tracing application using weighted graph paths and edge information implemented in C# WinForms.",
    image: "/diagrams/magnisnap-arch.svg",
    link: "https://github.com/Steven-Amin02/MagniSnap-Algorithm",
    techStack: ["C#", "WinForms", "Dijkstra's Algorithm", "Image Processing"],
    isBuilding: false,
    containImage: false,
    architecture: "Pixel-Grid Weighted Graph Representation ➔ Edge Gradient Costs ➔ Priority-Queue Dijkstra Shortest Path",
    impact: "Engineering focus: Graph representation of 2D images, shortest-path calculation with Dijkstra's algorithm, and desktop contour tracing.",
    highlights: [
      "Modeled 2D images as weighted graphs where edge weights reflect pixel gradient information.",
      "Implemented Dijkstra's algorithm with a priority queue in C# to find minimum-cost paths between user anchor points.",
      "Built a WinForms desktop interface supporting anchor placement and interactive contour tracing."
    ]
  },
  {
    id: "proj-accessibility",
    title: "AI Accessibility Assistant — Vodafone AI Hackathon",
    tag: "Vodafone AI Hackathon • Prototype",
    statusLabel: "Hackathon Prototype",
    category: "ai",
    featured: false,
    description: "Accessibility-oriented hackathon prototype involving document narration, image/scene description, and voice interaction.",
    image: "/vodafone-egypt.webp",
    link: "",
    techStack: ["Python", "Natural Language Processing", "Computer Vision", "Speech Synthesis"],
    isBuilding: false,
    containImage: true,
    architecture: "Hackathon Prototype: Document Text Extraction + Image/Scene Description + Speech Synthesis Narration",
    impact: "Developed as a hackathon prototype during the Vodafone AI Hackathon exploring accessibility tools for visually impaired users.",
    highlights: [
      "Prototyped document text extraction paired with speech synthesis for audio narration.",
      "Explored computer-vision scene and image description workflows in Python.",
      "Demonstrated voice-assisted interaction concepts as part of the Vodafone AI Hackathon."
    ]
  }
];

export const experienceData = [
  {
    id: "exp-nbe",
    title: "Deployment Intern",
    company: "National Bank of Egypt (NBE)",
    period: "5–30 July 2026",
    note: "Internship Exposure",
    description: "Gained exposure to the enterprise release lifecycle and differences between SIT, UAT, and production environments.",
    bullets: [
      "Gained exposure to the enterprise release lifecycle and differences between SIT, UAT, and production environments.",
      "Learned about deployment coordination, change requests, and operational processes that support software releases.",
      "Developed an interest in release engineering, DevOps, and reliable production systems."
    ]
  },
  {
    id: "exp-depi",
    title: "Full-Stack .NET Developer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "June–December 2025",
    note: "Practical Training",
    description: "Completed practical training in C#, ASP.NET Core, SQL Server, REST APIs, and layered application design.",
    bullets: [
      "Completed practical training in C#, ASP.NET Core, SQL Server, REST APIs, and layered application design.",
      "Applied software development concepts through exercises and projects."
    ]
  },
  {
    id: "exp-sprints",
    title: "Python Programming Trainee",
    company: "Sprints",
    period: "Completed Training",
    note: "Technical Training",
    description: "Practiced Python fundamentals, object-oriented programming, data structures, and algorithms.",
    bullets: [
      "Practiced Python fundamentals, object-oriented programming, data structures, and algorithms."
    ]
  }
];

export const educationData = [
  {
    id: "edu-asu",
    degree: "B.Sc. in Computer Science, Software Engineering Major (in progress)",
    institution: "Ain Shams University",
    period: "2023–2027 (expected)",
    details: "Current CGPA: 3.22 / 4.0 • Undergraduate degree in progress"
  },
  {
    id: "edu-uel",
    degree: "B.Sc. in Software Engineering, Dual-Degree Program (in progress)",
    institution: "University of East London",
    period: "2024–2027 (expected)",
    details: "Dual-degree academic program with Ain Shams University • Undergraduate degree in progress"
  }
];

export const scholarshipsData = [
  {
    id: "sch-usaid",
    title: "USAID Egyptian Pioneers Scholarship",
    issuer: "USAID / AUC",
    status: "Selected Scholar",
    description: "Selected scholar in the USAID Egyptian Pioneers Scholarship program administered in partnership with the American University in Cairo (AUC)."
  },
  {
    id: "sch-datacamp",
    title: "DataCamp Data Science Scholarship",
    issuer: "DataCamp",
    status: "Scholarship Recipient",
    description: "Awarded access to DataCamp data science, Python, and machine learning tracks."
  }
];

export const certificationsData = [
  {
    id: "cert-nbe",
    title: "National Bank of Egypt Internship Programme 2026",
    issuer: "National Bank of Egypt (NBE)",
    date: "Completed July 2026",
    highlight: "Deployment Intern (5–30 July 2026)",
    status: "Completed",
    curated: true,
    skills: ["SIT / UAT / Prod Exposure", "Release Coordination", "Change Requests"]
  },
  {
    id: "cert-depi",
    title: "DEPI Full-Stack .NET Training",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "Completed (June–Dec 2025)",
    highlight: "C#, ASP.NET Core, SQL Server & REST APIs",
    status: "Completed",
    curated: true,
    skills: ["C#", "ASP.NET Core", "SQL Server", "Layered Architecture"]
  },
  {
    id: "cert-usaid",
    title: "USAID Egyptian Pioneers Scholarship",
    issuer: "USAID / AUC",
    date: "Selected Scholar",
    highlight: "Selected Scholar (USAID / AUC)",
    status: "Scholarship",
    curated: true,
    skills: ["Scholarship", "Leadership", "Software Engineering"]
  },
  {
    id: "cert-nti",
    title: "NTI MEAN Stack Web Development",
    issuer: "NTI & ITIDA",
    date: "Completed",
    highlight: "MEAN Stack Web Development Training",
    status: "Completed",
    curated: true,
    skills: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript"]
  },
  {
    id: "cert-nasa",
    title: "NASA Space Apps Challenge",
    issuer: "NASA Space Apps",
    date: "Participation",
    highlight: "Participation • ExoVista Project",
    status: "Participated",
    curated: true,
    skills: ["JavaScript", "HTML5 Canvas", "Data Visualization"]
  },
  {
    id: "cert-vodafone",
    title: "Vodafone AI Hackathon",
    issuer: "Vodafone",
    date: "Participation",
    highlight: "Participation • AI Accessibility Assistant",
    status: "Participated",
    curated: true,
    skills: ["Python", "NLP", "Computer Vision", "Accessibility Prototype"]
  },
  {
    id: "cert-innov",
    title: "ITIDA / TIEC InnovEgypt",
    issuer: "ITIDA / TIEC",
    date: "Completed",
    highlight: "45-hour entrepreneurship & innovation training",
    status: "Completed",
    curated: false,
    skills: ["Innovation", "Technology Entrepreneurship"]
  },
  {
    id: "cert-sprints",
    title: "Sprints Python Programming Training",
    issuer: "Sprints",
    date: "Completed",
    highlight: "Python Fundamentals, OOP & Data Structures",
    status: "Completed",
    curated: false,
    skills: ["Python", "OOP", "Data Structures", "Algorithms"]
  },
  {
    id: "cert-orange",
    title: "Orange Digital Center Bootcamp",
    issuer: "Orange Digital Center",
    date: "Participation",
    highlight: "Software Development Bootcamp Participation",
    status: "Participated",
    curated: false,
    skills: ["Software Development", "Bootcamp"]
  },
  {
    id: "cert-eureca",
    title: "Eureca Program",
    issuer: "Eureca",
    date: "Completed / Participation",
    highlight: "Program participation & completion",
    status: "Completed",
    curated: false,
    skills: ["Problem Solving", "Innovation"]
  },
  {
    id: "cert-route-fullstack",
    title: "Route Academy Full-Stack Web Development Diploma",
    issuer: "Route Academy",
    date: "Completed Training",
    highlight: "Full-Stack Web Development Track",
    status: "Completed",
    curated: false,
    skills: ["Frontend", "Backend APIs", "SQL Server", "React"]
  },
  {
    id: "cert-route-devops",
    title: "Route Academy DevOps & Cloud Computing Diploma",
    issuer: "Route Academy",
    date: "In Progress",
    highlight: "DevOps, Linux & Cloud Track",
    status: "In Progress",
    curated: false,
    skills: ["Linux", "Docker", "CI/CD Concepts", "Cloud Fundamentals"]
  },
  {
    id: "cert-ibm",
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "Coursera / IBM",
    date: "In Progress",
    highlight: "Online Specialization (In Progress)",
    status: "In Progress",
    curated: false,
    skills: ["Cloud Concepts", "React", "Python", "Containers"]
  },
  {
    id: "cert-ielts",
    title: "IELTS Academic",
    issuer: "British Council",
    date: "July 2024",
    highlight: "Overall Band 6.0 (Listed in portfolio records)",
    status: "Completed",
    curated: false,
    skills: ["Academic English", "Technical Communication"]
  },
  {
    id: "cert-datacamp",
    title: "DataCamp Data Science Scholarship",
    issuer: "DataCamp",
    date: "Scholarship",
    highlight: "Data Science & Python Learning Track",
    status: "Scholarship",
    curated: false,
    skills: ["Python", "Data Analysis", "Machine Learning"]
  }
];

// Testimonials are omitted unless exact, permission-backed quotations from identifiable recommenders are provided.
export const testimonialsData = [];

export const faqData = [
  {
    id: "faq-1",
    question: "Who is Steven Amin?",
    answer: "Steven Amin (Steven Amin Ramzy Nashed) is a final-year Software Engineering student at Ain Shams University in a dual-degree program with the University of East London (expected graduation: 2027), based in Cairo, Egypt. He develops backend and full-stack applications using C#, ASP.NET Core, React, and SQL Server."
  },
  {
    id: "faq-2",
    question: "What technologies and frameworks does Steven Amin work with?",
    answer: "Steven's primary backend stack includes C#, .NET, ASP.NET Core Web API and MVC, Entity Framework Core, LINQ, and SQL Server (T-SQL), alongside PostgreSQL exposure. On the frontend, he builds with React, JavaScript, TypeScript, HTML5, CSS3, and Vite. He also has practical experience with UiPath RPA workflows and Python projects."
  },
  {
    id: "faq-3",
    question: "What industry experience and training does Steven Amin have?",
    answer: "Steven completed a Deployment Intern program at the National Bank of Egypt (5–30 July 2026), gaining internship exposure to the enterprise release lifecycle across SIT, UAT, and production environments, deployment coordination, and change requests. He also completed Full-Stack .NET Developer training through the Digital Egypt Pioneers Initiative (DEPI) and Python training with Sprints."
  },
  {
    id: "faq-4",
    question: "What is Steven Amin's educational background?",
    answer: "Steven is currently pursuing a B.Sc. in Computer Science (Software Engineering Major) at Ain Shams University (2023–2027 expected, current CGPA: 3.22 / 4.0) alongside a dual-degree B.Sc. in Software Engineering with the University of East London (2024–2027 expected). Both degrees are currently in progress."
  },
  {
    id: "faq-5",
    question: "What roles is Steven Amin available for?",
    answer: "Steven is interested in 2027 graduate software engineering roles, internships, and suitable freelance projects (on-site or hybrid in Cairo, Egypt, as well as remote roles). He can be reached directly at stevenameen02@gmail.com."
  }
];
