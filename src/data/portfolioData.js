// Senior Frontend Data Module - Steven Amin Portfolio

export const initialProfileData = {
  name: "Steven Amin",
  fullName: "Steven Amin Ramzy Nashed",
  role: "Full-Stack Software Engineer & .NET Specialist",
  location: "Cairo, Egypt",
  email: "stevenameen02@gmail.com",
  phone: "+20 120 304 2189",
  github: "https://github.com/Steven-Amin02",
  linkedin: "https://linkedin.com/in/steven-amin02",
  availability: "Open to Full-Time & Freelance Roles",
  status: "Available for Hire",
  bio: "I am a Software Engineering student specializing in C#, .NET, ASP.NET Core, SQL Server, and full-stack web development, with additional experience in RPA, machine learning, and enterprise deployment. Through my internship at the National Bank of Egypt (NBE) and DEPI training, I focus on building reliable, maintainable, and user-focused software solutions.",
  snippet: "Steven's exceptional full-stack & backend systems ensure application success. Highly Recommended",
  cgpa: "3.22 / 4.0",
  featuredCount: "8 Projects",
  internshipsCount: "NBE & DEPI",
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
    headline: "Engineering Scalable, Production-Ready Solutions",
    text: "Dual-degree Software Engineering scholar with deep expertise across the Microsoft .NET ecosystem, ASP.NET Core, SQL Server, and modern frontend frameworks. Experienced in enterprise SIT/UAT/Production deployment pipelines at the National Bank of Egypt and trained in high-performance application architectures through DEPI."
  },
  dualDegree: {
    title: "Dual Degree Scholar",
    primaryUni: "Ain Shams University (B.Sc. Computer Science)",
    dualUni: "University of East London (B.Sc. Software Engineering)",
    cgpa: "3.22 / 4.0",
    grade: "Excellent / First Class Honours",
    timeline: "2023 – 2027"
  },
  enterprise: {
    company: "National Bank of Egypt (NBE)",
    role: "Deployment & Release Intern",
    timeline: "July 2026",
    details: "Hands-on exposure to SIT ➔ UAT ➔ Production promotion flows, IIS server hosting, Change Requests (CRs), and enterprise release management."
  },
  metrics: [
    { value: "3.22", label: "Dual Degree CGPA", note: "Ain Shams & UEL" },
    { value: "8+", label: "Architected Projects", note: "Full-Stack, RPA & AI" },
    { value: "~25%", label: "Query Optimization", note: "SQL Server & EF Core" },
    { value: "95.5%", label: "ML Accuracy", note: "Phone Price Predictor" }
  ]
};

export const servicesData = [
  {
    id: "service-1",
    title: "Full-Stack Web Dev",
    description: "Complete web applications with structured backend architectures, database integration, & responsive UIs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "ASP.NET Core", "C#"]
  },
  {
    id: "service-2",
    title: "Backend & Web APIs",
    description: "RESTful Web APIs using ASP.NET Core, EF Core, SQL Server, and Clean Architecture principles.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tags: ["RESTful API", "EF Core", "Clean Architecture"]
  },
  {
    id: "service-3",
    title: "UiPath RPA Workflows",
    description: "Automated workflow architectures using UiPath Studio & Orchestrator (Dispatcher-Performer & Queues).",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["UiPath", "Orchestrator", "RPA"]
  },
  {
    id: "service-4",
    title: "Enterprise Deployment",
    description: "Hands-on exposure to SIT/UAT releases, IIS web server hosting, CI/CD pipelines, and Change Requests.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
    tags: ["IIS", "CI/CD", "DevOps"]
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
      { name: "ASP.NET Core Web API", level: "Advanced" },
      { name: "ASP.NET Core MVC", level: "Advanced" },
      { name: "Entity Framework Core", level: "Advanced" },
      { name: "Clean & Layered Architecture", level: "Practicing" },
      { name: "SOLID Principles & Design Patterns", level: "Core Principle" },
      { name: "RESTful API & Auth (JWT)", level: "Advanced" }
    ]
  },
  {
    id: "database",
    category: "Database & Data Systems",
    icon: "Database",
    skills: [
      { name: "SQL Server (T-SQL)", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "EF Core Code-First & Migrations", level: "Advanced" },
      { name: "LINQ Querying & ORM", level: "Advanced" },
      { name: "Database Design & Relational Models", level: "Solid" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend & Web Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & Vanilla CSS3", level: "Advanced" },
      { name: "Vite & Responsive Layouts", level: "Advanced" }
    ]
  },
  {
    id: "devops",
    category: "DevOps, RPA & Tools",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub Workflows", level: "Advanced" },
      { name: "Docker Container Basics", level: "Intermediate" },
      { name: "IIS Hosting & Server Deployment", level: "Practical Exp (NBE)" },
      { name: "CI/CD Pipeline Exposure", level: "Practical Exp (NBE)" },
      { name: "UiPath RPA Automation", level: "Certified/Trained" }
    ]
  }
];

export const projectsData = [
  {
    id: "proj-sany3y",
    title: "Sany3y — Service Marketplace Platform",
    tag: "ASP.NET Core MVC & SQL Server",
    category: "dotnet",
    featured: true,
    description: "TaskRabbit-like full-featured service marketplace connecting clients with skilled technicians. Built with clean layered architecture, EF Core Code-First, role-based authorization, and real-time appointment tracking.",
    image: "/sany3y_banner4.png",
    link: "https://github.com/Steven-Amin02/Sany3y",
    techStack: ["ASP.NET Core 8", "EF Core", "SQL Server", "MVC", "Layered Architecture"],
    isBuilding: false,
    containImage: true
  },
  {
    id: "proj-hero",
    title: "AI-Powered Support & Ticketing Platform",
    tag: "Flagship / Full-Stack & AI",
    category: "dotnet",
    featured: true,
    description: "Enterprise ticketing ecosystem built with React, TypeScript, Vite, ASP.NET Core Web API, PostgreSQL, and LLM-assisted ticket triage with JWT authentication.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "#contact",
    techStack: ["React", "TypeScript", "ASP.NET Core API", "PostgreSQL", "JWT", "AI"],
    isBuilding: true
  },
  {
    id: "proj-smas",
    title: "SMAS — Social Media Automation System",
    tag: "UiPath Studio & Orchestrator",
    category: "rpa",
    description: "Industrial-grade RPA pipeline automating cross-platform social media distribution. Features robust Dispatcher–Performer architecture and UiPath Orchestrator queue transaction management.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Social-Media-Automation-System-SMAS-",
    techStack: ["UiPath Studio", "Orchestrator", "Queues", "Dispatcher-Performer"],
    isBuilding: false
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
    isBuilding: false
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
    isBuilding: false
  },
  {
    id: "proj-exovista",
    title: "ExoVista — NASA Space Apps Challenge",
    tag: "Interactive Web Visualization",
    category: "frontend",
    description: "Award-nominated interactive educational web application creating immersive exoplanet exploration experiences and space data storytelling for NASA Space Apps Challenge.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/ExoVista",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS Animations", "NASA API"],
    isBuilding: false
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
    isBuilding: false
  },
  {
    id: "proj-accessibility",
    title: "AI Accessibility Assistant",
    tag: "Vodafone AI Hackathon (ITIDA & ALX)",
    category: "ai",
    description: "Accessibility AI solution designed for visually and physically impaired users, featuring automated PDF narration, vision-based scene description, and conversational NLP.",
    image: "/vodafone-egypt.webp",
    link: "#contact",
    techStack: ["Python", "NLP", "Computer Vision", "Speech Synthesis"],
    isBuilding: false,
    containImage: true
  }
];

export const experienceData = [
  {
    id: "exp-nbe",
    title: "Deployment Intern",
    company: "National Bank of Egypt (NBE)",
    period: "July 2026",
    description: "Learned software release processes from SIT to UAT and Production. Practical experience with deployment pipelines, artifact management, IIS hosting, Change Requests (CRs), and ticketing workflows."
  },
  {
    id: "exp-depi",
    title: "Full Stack .NET Developer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "June 2025 – Dec 2025",
    description: "Developed 3+ data-driven web applications using ASP.NET Core MVC & SQL Server. Applied layered architecture & SOLID principles, integrated REST APIs, and optimized database queries by ~25%."
  },
  {
    id: "exp-sprints",
    title: "Programming with Python Trainee",
    company: "Sprints",
    period: "Training",
    description: "Developed Python programming skills through practical training covering fundamentals, data structures, and algorithm implementation."
  }
];

export const educationData = [
  {
    id: "edu-asu",
    degree: "Bachelor of Computer Science (Software Engineering Major)",
    institution: "Ain Shams University — CGPA: 3.22 / 4.0 (General Grade: Excellent)",
    period: "June 2023 – June 2027"
  },
  {
    id: "edu-uel",
    degree: "Bachelor of Software Engineering (Dual Degree Program)",
    institution: "University of East London",
    period: "June 2024 – June 2027"
  }
];

export const testimonialsData = [
  {
    id: "test-nbe",
    author: "Deployment Department",
    role: "National Bank of Egypt (NBE)",
    icon: "Building2",
    rating: 5.0,
    quote: "Steven demonstrated professionalism, reliability, and a strong commitment to learning during his internship. He gained practical exposure to CI/CD pipelines, artifact management, Change Requests (CRs), Red Hat OpenShift, and WebSphere. His curiosity and commitment make him a valuable addition to any software engineering & DevOps team."
  },
  {
    id: "test-depi",
    author: "DEPI Program Supervisors",
    role: "Digital Egypt Pioneers Initiative",
    icon: "Code",
    rating: 5.0,
    quote: "Steven consistently demonstrated technical rigor and a strong grasp of layered architecture and SOLID principles. He engineered robust ASP.NET Core MVC systems and worked seamlessly across team Agile sprints."
  },
  {
    id: "test-academic",
    author: "Academic Faculty",
    role: "Ain Shams & UEL Dual Degree",
    icon: "GraduationCap",
    rating: 5.0,
    quote: "Steven excels in combining core computer science concepts with modern full-stack development. His analytical problem-solving, ML model design, and algorithmic thinking stand out across both coursework and project deliverables."
  }
];

export const blogPostsData = [
  {
    id: "blog-1",
    title: "Building Scalable ASP.NET Core APIs with Clean Architecture & EF Core",
    tag: "Backend & Architecture",
    date: "10 Nov, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-2",
    title: "Enterprise RPA Workflows: Dispatcher-Performer Architecture in UiPath",
    tag: "Automation & RPA",
    date: "09 Oct, 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    title: "Machine Learning Classification & Interactive Web Apps with Streamlit",
    tag: "AI & Machine Learning",
    date: "13 Aug, 2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  }
];
