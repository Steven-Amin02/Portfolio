// Senior Frontend Data Module - Steven Amin Portfolio

export const initialProfileData = {
  name: "Steven Amin",
  fullName: "Steven Amin Ramzy Nashed",
  role: "Software Engineer | Backend & Full-Stack .NET Developer",
  location: "Cairo, Egypt",
  email: "stevenameen02@gmail.com",
  phone: "+20 120 304 2189",
  github: "https://github.com/Steven-Amin02",
  linkedin: "https://linkedin.com/in/steven-amin02",
  availability: "Open to 2027 Graduate Roles, Internships & Freelance Projects",
  status: "Open to Opportunities",
  bio: "Final-year Software Engineering student at Ain Shams University in a dual-degree program with the University of East London (expected 2027). I develop backend and full-stack applications using C#, ASP.NET Core, React, and SQL Server. My NBE internship gave me exposure to enterprise SIT, UAT, and production release workflows.",
  snippet: "Backend engineering, full-stack development, and practical deployment experience.",
  cgpa: "3.22 / 4.0",
  featuredCount: "10 Projects",
  internshipsCount: "NBE Internship",
  certifiedStatus: "Ain Shams & UEL",
  educationDegree: "B.Sc. CS & Software Engineering"
};

export const heroTechBadges = [
  { label: ".NET 8 / C#", color: "#FF6B2C" },
  { label: "ASP.NET Core Web API", color: "#10B981" },
  { label: "Entity Framework Core", color: "#3B82F6" },
  { label: "SQL Server (T-SQL)", color: "#EC4899" },
  { label: "UiPath RPA Workflows", color: "#F59E0B" },
  { label: "Clean Architecture & SOLID", color: "#8B5CF6" },
  { label: "React & TypeScript", color: "#06B6D4" }
];

export const bentoCardsData = {
  bio: {
    headline: "Building Reliable Software for Real-World Problems",
    text: "Software Engineering student focused on ASP.NET Core, REST APIs, databases, and full-stack development. My NBE internship introduced me to enterprise deployment workflows, alongside practical training through DEPI."
  },
  dualDegree: {
    title: "Dual Degree Scholar",
    primaryUni: "Ain Shams University (B.Sc. Computer Science)",
    dualUni: "University of East London (B.Sc. Software Engineering)",
    cgpa: "3.22 / 4.0",
    grade: "Degree in progress — Expected 2027",
    timeline: "2023 – 2027"
  },
  enterprise: {
    company: "National Bank of Egypt (NBE)",
    role: "Deployment Intern",
    timeline: "July 2026",
    details: "Exposure to enterprise SIT, UAT, and production release workflows, deployment coordination, and change management."
  },
  metrics: [
    { value: "3.22", label: "Dual Degree CGPA", note: "Ain Shams & UEL" },
    { value: "10", label: "Portfolio Projects", note: "Full-Stack, RPA & AI" },
    { value: "2026", label: "NBE Internship", note: "SQL Server & EF Core" },
    { value: "2027", label: "Expected Graduation", note: "Phone Price Predictor" }
  ]
};

export const servicesData = [
  {
    id: "service-1",
    title: "Full-Stack Web Dev",
    description: "Complete web applications with structured backend architectures, database integration, & responsive UIs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "ASP.NET Core", "C#"],
    targetSection: "projects",
    filterCategory: "dotnet",
    actionLabel: "Explore .NET & Full-Stack Projects"
  },
  {
    id: "service-2",
    title: "Backend & Web APIs",
    description: "RESTful Web APIs using ASP.NET Core, EF Core, SQL Server, and Clean Architecture principles.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tags: ["RESTful API", "EF Core", "Clean Architecture"],
    targetSection: "projects",
    filterCategory: "dotnet",
    actionLabel: "View Backend Architectures"
  },
  {
    id: "service-3",
    title: "UiPath RPA Workflows",
    description: "Automated workflow architectures using UiPath Studio & Orchestrator (Dispatcher-Performer & Queues).",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["UiPath", "Orchestrator", "RPA"],
    targetSection: "projects",
    filterCategory: "rpa",
    actionLabel: "Inspect RPA Pipelines"
  },
  {
    id: "service-4",
    title: "Enterprise Deployment",
    description: "Exposure to enterprise release stages, change requests, and deployment tooling during an NBE internship.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
    tags: ["IIS", "CI/CD", "DevOps"],
    targetSection: "resume",
    filterCategory: null,
    actionLabel: "View Enterprise Experience"
  }
];

export const skillsData = [
  "C# / .NET Core",
  "ASP.NET Core Web API",
  "ASP.NET Core MVC",
  "Entity Framework Core",
  "SQL Server / PostgreSQL",
  "RESTful APIs",
  "React / TypeScript",
  "HTML5 / CSS3 / JavaScript",
  "Git / GitHub / Docker",
  "IIS Hosting & CI/CD",
  "SOLID & Clean Architecture"
];

export const categorizedSkillsData = [
  {
    id: "backend",
    category: "Backend & Architecture",
    icon: "Server",
    skills: [
      { name: "C# / .NET 8", level: "Core Stack" },
      { name: "ASP.NET Core Web API", level: "Project experience" },
      { name: "ASP.NET Core MVC", level: "Project experience" },
      { name: "Entity Framework Core", level: "Project experience" },
      { name: "Clean & Layered Architecture", level: "Practicing" },
      { name: "SOLID Principles & Design Patterns", level: "Core Principle" },
      { name: "RESTful API & Auth (JWT)", level: "Project experience" }
    ]
  },
  {
    id: "database",
    category: "Database & Data Systems",
    icon: "Database",
    skills: [
      { name: "SQL Server (T-SQL)", level: "Project experience" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "EF Core Code-First & Migrations", level: "Project experience" },
      { name: "LINQ Querying & ORM", level: "Project experience" },
      { name: "Database Design & Relational Models", level: "Solid" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend & Web Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Project experience" },
      { name: "JavaScript (ES6+)", level: "Project experience" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & Vanilla CSS3", level: "Project experience" },
      { name: "Vite & Responsive Layouts", level: "Project experience" }
    ]
  },
  {
    id: "devops",
    category: "DevOps, RPA & Tools",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub Workflows", level: "Project experience" },
      { name: "Docker Container Basics", level: "Intermediate" },
      { name: "IIS Hosting & Server Deployment", level: "Internship exposure" },
      { name: "CI/CD Pipeline Exposure", level: "Internship exposure" },
      { name: "UiPath RPA Automation", level: "Certified/Trained" }
    ]
  }
];

export const projectsData = [
  {
    id: "proj-movemint",
    title: "MoveMint — Sustainable Mobility Platform",
    tag: "Graduation Project • Deloitte-Sponsored",
    category: "ai",
    featured: true,
    description: "Ongoing graduation project exploring emissions-aware trip planning, public-transit verification, and rewards for Cairo.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    link: "",
    techStack: ["Flutter", "Routing", "PostgreSQL / PostGIS (Planned)", "Backend APIs (Planned)", "On-device ML (Planned)"],
    isBuilding: true,
    architecture: "Proposed system with mobile trip planning, routing and emissions services, transit verification, and rewards.",
    impact: "Goal: help users discover lower-emission travel options and verify public-transit journeys in Cairo.",
    highlights: [
      "Designing emissions-aware routes and sustainable mobility analytics.",
      "Exploring GPS and transit-route checks alongside activity recognition.",
      "Planning backend services and geospatial data integration.",
      "Deloitte-sponsored graduation project; implementation ongoing."
    ]
  },
  {
    id: "proj-sany3y",
    title: "Sany3y — Service Marketplace Platform",
    tag: "ASP.NET Core MVC & SQL Server",
    category: "dotnet",
    featured: true,
    description: "TaskRabbit-like full-featured service marketplace connecting clients with skilled technicians. Built with clean layered architecture, EF Core Code-First, role-based authorization, and real-time appointment tracking.",
    image: "/sany3y_banner4.webp",
    fallbackImage: "/sany3y_banner4.png",
    link: "https://github.com/Steven-Amin02/Sany3y",
    techStack: ["ASP.NET Core 8", "EF Core", "SQL Server", "MVC", "Layered Architecture"],
    isBuilding: false,
    containImage: true,
    architecture: "N-Tier Layered Architecture (Presentation MVC ➔ Business Logic Services ➔ Repository & Unit of Work ➔ EF Core SQL Server)",
    impact: "Optimized LINQ & SQL Server relational queries for technician discovery and booking workflows, reducing response latency by ~25%.",
    highlights: [
      "Engineered role-based authentication and authorization flows separating Client, Technician, and Admin portals.",
      "Designed normalized relational database schema using Entity Framework Core Code-First migrations.",
      "Implemented end-to-end service request lifecycle, technician rating aggregation, and status notifications.",
      "Applied Repository Pattern and SOLID principles to decouple domain logic from data access."
    ]
  },
  {
    id: "proj-hero",
    title: "AI-Powered Support & Ticketing Platform",
    tag: "Flagship / Full-Stack & AI",
    category: "dotnet",
    featured: true,
    description: "In-development support ticketing project exploring React, TypeScript, ASP.NET Core Web API, PostgreSQL, and AI-assisted triage.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "",
    techStack: ["React", "TypeScript", "ASP.NET Core API", "PostgreSQL", "JWT", "AI"],
    isBuilding: true,
    architecture: "Clean Architecture Web API + React TypeScript SPA + LLM Classification Worker + PostgreSQL",
    impact: "Automates initial ticket categorization, priority scoring, and suggested agent responses with strict SLA tracking.",
    highlights: [
      "Decoupled RESTful backend engineered with ASP.NET Core 8 Web API, MediatR/CQRS patterns, and FluentValidation.",
      "Stateless JWT authentication with refresh token rotation and fine-grained Role-Based Access Control (RBAC).",
      "AI triage pipeline that classifies incoming support tickets by urgency, sentiment, and department.",
      "Reactive TypeScript & React dashboard featuring real-time SLA timers and audit logs."
    ]
  },
  {
    id: "proj-smas",
    title: "SMAS — Social Media Automation System",
    tag: "UiPath Studio & Orchestrator",
    category: "rpa",
    description: "RPA pipeline automating cross-platform social media distribution. Features robust Dispatcher–Performer architecture and UiPath Orchestrator queue transaction management.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Social-Media-Automation-System-SMAS-",
    techStack: ["UiPath Studio", "Orchestrator", "Queues", "Dispatcher-Performer"],
    isBuilding: false,
    architecture: "Enterprise REFramework Dispatcher–Performer Pattern with UiPath Orchestrator Queues",
    impact: "Eliminates repetitive manual cross-posting across X/Twitter, Reddit, and Quora with automated retry & exception handling.",
    highlights: [
      "Separated ingestion (Dispatcher) from execution (Performer) for horizontal scalability and fault isolation.",
      "Leveraged UiPath Orchestrator Transaction Queues with automatic retry policies on transient UI/network failures.",
      "Automated multi-platform publishing, asset synchronization, and execution status reporting.",
      "Structured state-machine exception handling to distinguish Business Rule Exceptions from System Exceptions."
    ]
  },
  {
    id: "proj-ams",
    title: "AMS — Airline Management System",
    tag: "ASP.NET Core 8 MVC & Identity",
    category: "dotnet",
    description: "Comprehensive airline operations platform featuring flight schedules, dynamic pricing, ticket booking, role-based admin controls, and English/Arabic bilingual RTL support.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Airline-Management-System-AMS-",
    techStack: ["ASP.NET Core 8", "Identity", "SQL Server", "LINQ", "i18n / RTL"],
    isBuilding: false,
    architecture: "ASP.NET Core 8 MVC + ASP.NET Core Identity + SQL Server + IStringLocalizer i18n Engine",
    impact: "Delivers full bilingual English (LTR) and Arabic (RTL) reservation and fleet operations management.",
    highlights: [
      "Built multi-criteria flight search, seat inventory allocation, and dynamic fare calculation.",
      "Integrated ASP.NET Core Identity for secure passenger authentication and administrative role management.",
      "Engineered seamless runtime localization switching between English LTR and Arabic RTL layouts.",
      "Designed transactional booking workflows preventing double-booking under concurrent requests."
    ]
  },
  {
    id: "proj-ml",
    title: "Smart Phone Price Predictor",
    tag: "Python, Scikit-learn, Streamlit",
    category: "ai",
    description: "Machine learning application classifying smartphone price tiers based on hardware specs, achieving 95.55% classification accuracy with interactive Streamlit GUI.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Smart-phones-prices",
    techStack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy"],
    isBuilding: false,
    architecture: "Data Preprocessing & SMOTE Balancing Pipeline ➔ Random Forest Classifier ➔ Interactive Streamlit Web App",
    impact: "Achieved 95.55% test classification accuracy across multi-class smartphone price tiers.",
    highlights: [
      "Applied SMOTE (Synthetic Minority Over-sampling Technique) to eliminate class imbalance across price tiers.",
      "Evaluated and benchmarked Random Forest, SVM, KNN, and Decision Tree models with cross-validation.",
      "Engineered feature scaling, outlier removal, and correlation analysis using Pandas and NumPy.",
      "Deployed an interactive real-time Streamlit web interface for instant hardware-to-price-tier inference."
    ]
  },
  {
    id: "proj-route-posts",
    title: "Route Posts — Social Media Web App",
    tag: "React 19, TypeScript & Tailwind CSS",
    category: "frontend",
    featured: true,
    description: "Modern single-page social media platform featuring interactive newsfeeds, user profiles, real-time notifications, authentication flows, and a modular service layer.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Route-posts-Assignment2/tree/main/Route-posts",
    techStack: ["React 19", "TypeScript", "Tailwind CSS 4", "HeroUI", "React Router", "Axios"],
    isBuilding: false,
    architecture: "React 19 + TypeScript SPA ➔ Nested Layout Router (AuthLayout / MainLayout) ➔ Modular Axios Service Layer (auth & profile services)",
    impact: "Delivers a responsive, component-driven social networking experience with strict TypeScript type safety and reusable UI primitives.",
    highlights: [
      "Architected nested client-side routing using React Router v8 separating AuthLayout (Login/Register) and MainLayout (Newsfeed, Profile, Notifications).",
      "Abstracted REST API communication into dedicated TypeScript service modules (auth.service.ts and profile.service.ts) powered by Axios.",
      "Built an accessible, responsive interface combining Tailwind CSS v4, HeroUI components, and Gravity UI icons.",
      "Implemented modular feed posts, sidebar navigation, user profile views, and notification streams."
    ]
  },
  {
    id: "proj-exovista",
    title: "ExoVista — NASA Space Apps Challenge",
    tag: "Interactive Web Visualization",
    category: "frontend",
    description: "Interactive educational web application creating immersive exoplanet exploration experiences and space data storytelling for NASA Space Apps Challenge.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/ExoVista",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS Animations", "NASA API"],
    isBuilding: false,
    architecture: "Interactive Client-Side Visualization Engine + NASA Exoplanet Data Storytelling",
    impact: "Transformed complex astrophysical datasets into an intuitive, accessible educational journey for students.",
    highlights: [
      "Created interactive visual simulations of exoplanet orbits, habitability zones, and atmospheric compositions.",
      "Designed progressive storytelling UX that guides learners from basic astronomy to real NASA telemetry.",
      "Optimized HTML5 Canvas and CSS keyframe animations for smooth 60fps rendering across devices."
    ]
  },
  {
    id: "proj-magnisnap",
    title: "MagniSnap — Intelligent Scissors Tool",
    tag: "C#, WinForms, Graph Algorithms",
    category: "dotnet",
    description: "High-performance desktop computer vision utility implementing Dijkstra's shortest-path Livewire / Intelligent Scissors algorithm for precise magnetic contour tracing.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/MagniSnap-Algorithm",
    techStack: ["C#", ".NET", "WinForms", "Dijkstra Algorithm", "Image Processing"],
    isBuilding: false,
    architecture: "Pixel-Grid Weighted Graph Construction ➔ Sobel Edge Energy Matrix ➔ Priority-Queue Dijkstra Shortest Path",
    impact: "Sub-second real-time contour snapping on high-resolution images using O((V + E) log V) min-heap optimization.",
    highlights: [
      "Modeled 2D images as weighted directed graphs where edge weights are inversely proportional to gradient magnitude.",
      "Implemented a custom binary min-heap priority queue in C# for real-time Dijkstra shortest-path tree calculation.",
      "Added automatic anchor point freezing and live cursor path preview for interactive object segmentation."
    ]
  },
  {
    id: "proj-accessibility",
    title: "AI Accessibility Assistant",
    tag: "Vodafone AI Hackathon (ITIDA & ALX)",
    category: "ai",
    description: "Accessibility AI solution designed for visually and physically impaired users, featuring automated PDF narration, vision-based scene description, and conversational NLP.",
    image: "/vodafone-egypt.webp",
    link: "",
    techStack: ["Python", "NLP", "Computer Vision", "Speech Synthesis"],
    isBuilding: false,
    containImage: true,
    architecture: "Multimodal Assistive Pipeline (OCR & Document Parser + Computer Vision Scene Captioning + TTS Voice Engine)",
    impact: "Built during the Vodafone AI Hackathon (mentored by ITIDA & ALX Africa) to empower visually impaired users.",
    highlights: [
      "Automated PDF and document extraction paired with natural Text-to-Speech (TTS) audio narration.",
      "Integrated computer vision scene description to verbally describe surroundings and images on demand.",
      "Designed voice-first conversational guidance to minimize screen navigation barriers for impaired users."
    ]
  }
];

export const experienceData = [
  {
    id: "exp-nbe",
    title: "Deployment Intern",
    company: "National Bank of Egypt (NBE)",
    period: "July 2026",
    description: "Learned about enterprise release processes in SIT, UAT, and production environments, including deployment coordination and change requests."
  },
  {
    id: "exp-depi",
    title: "Full Stack .NET Developer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "June 2025 – Dec 2025",
    description: "Completed training in ASP.NET Core, SQL Server, REST APIs, and layered architecture through hands-on projects."
  },
  {
    id: "exp-sprints",
    title: "Programming with Python Trainee",
    company: "Sprints",
    period: "Completed Training",
    description: "Developed Python programming skills through practical training covering fundamentals, data structures, and algorithm implementation."
  }
];

export const educationData = [
  {
    id: "edu-asu",
    degree: "Bachelor of Computer Science (Software Engineering Major)",
    institution: "Ain Shams University — Current CGPA: 3.22 / 4.0",
    period: "June 2023 – June 2027"
  },
  {
    id: "edu-uel",
    degree: "Bachelor of Software Engineering (Dual Degree Program)",
    institution: "University of East London",
    period: "June 2024 – June 2027"
  }
];

export const certificationsData = [
  {"id":"cert-nbe","title":"NBE Internship Programme 2026","issuer":"National Bank of Egypt","date":"July 2026","highlight":"Deployment internship","status":"Completed","skills":["Release Processes"]},
  {"id":"cert-depi","title":"Full-Stack .NET Training","issuer":"DEPI","date":"2025","highlight":"ASP.NET Core training","status":"Completed","skills":["C#","SQL Server"]},
  {"id":"cert-innov","title":"InnovEgypt","issuer":"ITIDA / TIEC","date":"Completed","highlight":"45-hour training","status":"Completed","skills":["Innovation"]},
  {"id":"cert-nasa","title":"NASA Space Apps Challenge","issuer":"NASA Space Apps","date":"Participation","highlight":"ExoVista","status":"Participated","skills":["Web Development"]},
  {"id":"cert-vodafone","title":"Vodafone AI Hackathon","issuer":"Vodafone","date":"Participation","highlight":"Accessibility AI","status":"Participated","skills":["AI"]},
  {"id":"cert-orange","title":"Orange Digital Center Bootcamp","issuer":"Orange Digital Center","date":"Participation","highlight":"Bootcamp","status":"Participated","skills":["Development"]},
  {"id":"cert-eureca","title":"Eureca Program","issuer":"Eureca","date":"Completed","highlight":"Program participation","status":"Completed","skills":["Innovation"]},
  {
    id: "cert-nti",
    title: "MEAN-Stack Web Development",
    issuer: "NTI & ITIDA",
    date: "Feb 2025",
    highlight: "120 Hours • 93% Score",
    status: "Completed",
    skills: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript"]
  },
  {
    id: "cert-route-fullstack",
    title: "Full-Stack Web Development Diploma",
    issuer: "Route Academy",
    date: "Apr 2026",
    highlight: "Comprehensive Diploma",
    status: "Accredited Diploma",
    skills: ["Frontend", "Backend APIs", "Database Engineering", "Architecture"]
  },
  {
    id: "cert-route-devops",
    title: "DevOps & Cloud Computing Diploma",
    issuer: "Route Academy",
    date: "In Progress",
    highlight: "Cloud & CI/CD Track",
    status: "In Progress",
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Architecture", "Linux"]
  },
  {
    id: "cert-ielts",
    title: "IELTS Academic Certificate",
    issuer: "British Council",
    date: "Jul 2024",
    highlight: "Overall Band 6.0",
    status: "Certified",
    skills: ["Academic English", "Professional Communication", "Technical Writing"]
  },
  {
    id: "cert-ibm",
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "Coursera & IBM",
    date: "In Progress",
    highlight: "Professional Specialization",
    status: "In Progress",
    skills: ["Cloud Computing", "DevOps", "Microservices", "React", "Python"]
  },
  {
    id: "cert-sprints",
    title: "Programming with Python",
    issuer: "Sprints",
    date: "Completed",
    highlight: "Algorithms & OOP",
    status: "Certified",
    skills: ["Python", "Data Structures", "Problem Solving"]
  },
  {
    id: "cert-usaid",
    title: "USAID Egyptian Pioneers Scholarship",
    issuer: "USAID & AUC",
    date: "Selected Scholar",
    highlight: "Leadership & Tech",
    status: "Scholarship",
    skills: ["Leadership", "Entrepreneurship", "Innovation"]
  },
  {
    id: "cert-datacamp",
    title: "DataCamp Data Science Scholarship",
    issuer: "DataCamp",
    date: "Scholarship",
    highlight: "Data Science Track",
    status: "Scholarship",
    skills: ["Data Analysis", "Python", "Machine Learning"]
  }
];

// Testimonials appear only after exact quotes are verified and permission is obtained.
export const testimonialsData = [];

export const faqData = [
  {
    id: "faq-1",
    question: "Who is Steven Amin?",
    answer: "Steven Amin (Steven Amin Ramzy Nashed) is a Full-Stack Software Engineer and .NET Specialist based in Cairo, Egypt. He is a Dual Degree Scholar studying Computer Science at Ain Shams University and Software Engineering at the University of East London (UEL), with enterprise training at the National Bank of Egypt (NBE) and DEPI."
  },
  {
    id: "faq-2",
    question: "What technologies and frameworks does Steven Amin specialize in?",
    answer: "Steven's core backend stack centers on C#, .NET 8, ASP.NET Core Web API, ASP.NET Core MVC, Entity Framework Core, and SQL Server (T-SQL). On the frontend, he builds reactive user interfaces with React.js, TypeScript, JavaScript (ES6+), HTML5, and CSS3. He also architects automated business workflows using UiPath Studio & Orchestrator."
  },
  {
    id: "faq-3",
    question: "What enterprise software and industry experience does Steven Amin have?",
    answer: "Steven completed an enterprise Deployment & Release internship at the National Bank of Egypt (NBE), where he worked with SIT to UAT and Production release promotion flows, IIS server hosting, Change Requests (CRs), and enterprise artifact pipelines. He also underwent intensive full-stack .NET training through the Digital Egypt Pioneers Initiative (DEPI)."
  },
  {
    id: "faq-4",
    question: "What degree and academic honors does Steven Amin hold?",
    answer: "Steven is pursuing a prestigious dual degree: B.Sc. in Computer Science from Ain Shams University and B.Sc. in Software Engineering from the University of East London (2023–2027), holding a cumulative GPA of 3.22 / 4.0 with an academic grade of Degree in progress — Expected 2027."
  },
  {
    id: "faq-5",
    question: "Is Steven Amin available for hire, internships, or freelance work?",
    answer: "Yes! Steven is interested in 2027 graduate software engineering roles, internships, and freelance projects. He is available for on-site, hybrid (Cairo, Egypt), and remote positions globally. You can contact him directly at stevenameen02@gmail.com."
  }
];
