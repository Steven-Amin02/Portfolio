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
  bio: "I am a Software Engineering student specializing in C#, .NET, ASP.NET Core, SQL Server, and full-stack web development, with additional experience in RPA, machine learning, and enterprise deployment. Through my internship at the National Bank of Egypt (NBE) and DEPI training, I focus on building reliable, maintainable, and user-focused software solutions.",
  snippet: "Steven's exceptional full-stack & backend systems ensure application success. Highly Recommended",
  cgpa: "3.22 / 4.0",
  featuredCount: "6 Projects",
  internshipsCount: "NBE & DEPI",
  certifiedStatus: "Ain Shams & UEL",
  educationDegree: "B.Sc. CS & Software Engineering"
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
    id: "proj-hero",
    title: "AI-Powered Support & Ticketing Platform",
    tag: "Hero Project / Full-Stack",
    category: "dotnet",
    description: "Modern support platform built with React, TypeScript, Vite, Tailwind, ASP.NET Core Web API, PostgreSQL, JWT authentication, and AI assistance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "#contact",
    isBuilding: true
  },
  {
    id: "proj-sany3y",
    title: "Sany3y — Service Marketplace Platform",
    tag: "ASP.NET Core MVC & SQL Server",
    category: "dotnet",
    description: "TaskRabbit-like service marketplace connecting clients with technicians. Built with layered architecture, EF Core Code-First, role auth, & notifications.",
    image: "/sany3y_banner4.png",
    link: "https://github.com/Steven-Amin02/Sany3y",
    isBuilding: false,
    containImage: true
  },
  {
    id: "proj-smas",
    title: "SMAS — Social Media Automation System",
    tag: "UiPath Studio & Orchestrator",
    category: "rpa",
    description: "Enterprise RPA solution automating social media publishing. Features Dispatcher–Performer architecture & UiPath Orchestrator queue-based processing.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Social-Media-Automation-System-SMAS-",
    isBuilding: false
  },
  {
    id: "proj-ams",
    title: "AMS — Airline Management System",
    tag: "ASP.NET Core 8 MVC & Identity",
    category: "dotnet",
    description: "Full airline booking platform supporting flight search, booking, pricing, role authentication, and English + Arabic RTL localization.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Airline-Management-System-AMS-",
    isBuilding: false
  },
  {
    id: "proj-ml",
    title: "Smart Phone Price Predictor",
    tag: "Python, Scikit-learn, Streamlit",
    category: "ai",
    description: "AI-powered web application predicting smartphone price categories based on device specifications with 95.55% classification accuracy.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Smart-phones-prices",
    isBuilding: false
  },
  {
    id: "proj-exovista",
    title: "ExoVista — NASA Space Apps Challenge",
    tag: "Interactive Web Visualization",
    category: "frontend",
    description: "Interactive educational web application creating immersive exoplanet exploration experiences and data storytelling for NASA Space Apps Challenge.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/ExoVista",
    isBuilding: false
  },
  {
    id: "proj-magnisnap",
    title: "MagniSnap — Intelligent Scissors Tool",
    tag: "C#, WinForms, .NET Graph Algorithms",
    category: "dotnet",
    description: "Interactive desktop image-segmentation application implementing Livewire / Intelligent Scissors algorithms for magnetic boundary detection.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/MagniSnap-Algorithm",
    isBuilding: false
  },
  {
    id: "proj-accessibility",
    title: "AI Accessibility Assistant",
    tag: "Vodafone AI Hackathon (ITIDA & ALX)",
    category: "ai",
    description: "Accessibility-focused AI assistant concept helping individuals with disabilities using PDF reading aloud, image description, & conversational NLP.",
    image: "/vodafone-egypt.webp",
    link: "#contact",
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
