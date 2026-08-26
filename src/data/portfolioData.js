// Senior Frontend Data Module - Steven Amin Portfolio

export const initialProfileData = {
  name: "Steven Amin",
  role: "Full-Stack Software Engineer & .NET Specialist",
  location: "Cairo, Egypt",
  email: "stevenameen02@gmail.com",
  github: "https://github.com/Steven-Amin02",
  linkedin: "https://linkedin.com/in/steven-amin02",
  bio: "I am a dedicated Full-Stack Software Engineer specializing in building practical web applications, scalable RESTful APIs, and robust backend architectures with C#, ASP.NET Core, SQL Server, and modern frontend frameworks. With a solid Computer Science background from Ain Shams University and hands-on deployment experience at the National Bank of Egypt (NBE) alongside DEPI training, I focus on writing clean, maintainable, and efficient software.",
  snippet: "Steven's exceptional full-stack & backend systems ensure application success. Highly Recommended",
  cgpa: "3.22",
  featuredCount: "8+",
  internshipsCount: "2+",
  certifiedStatus: "NBE & DEPI",
  educationDegree: "B.Sc. Computer Science (Ain Shams)"
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
    description: "TaskRabbit-inspired service marketplace connecting clients & technicians. Built with layered architecture, EF Core Code-First, role auth, & notifications.",
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
    description: "Enterprise-style RPA solution automating multi-channel publishing. Features Dispatcher-Performer architecture & queue-based processing.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Social-Media-Automation-System-SMAS-",
    isBuilding: false
  },
  {
    id: "proj-ams",
    title: "AMS — Airline Management System",
    tag: "ASP.NET Core 8 MVC & Identity",
    category: "dotnet",
    description: "Full airline booking platform with flight search, pricing, role authentication, and English + Arabic RTL localization.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Airline-Management-System-AMS-",
    isBuilding: false
  },
  {
    id: "proj-ml",
    title: "Smart Phone Price Predictor",
    tag: "Python, Scikit-learn, Streamlit",
    category: "ai",
    description: "Supervised machine learning web application predicting smartphone pricing with 95.55% classification accuracy.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02/Smart-Phone-Price-Predictor",
    isBuilding: false
  },
  {
    id: "proj-exovista",
    title: "ExoVista — NASA Space Apps Challenge",
    tag: "Interactive Web Visualization",
    category: "frontend",
    description: "Web application creating immersive exoplanet exploration experiences and data storytelling for NASA's challenge.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02",
    isBuilding: false
  },
  {
    id: "proj-magnisnap",
    title: "MagniSnap — Intelligent Scissors Desktop App",
    tag: "C#, WinForms, .NET Graph Algorithms",
    category: "dotnet",
    description: "Interactive desktop image segmentation tool implementing Dijkstra graph algorithms for magnetic contour snapping.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Steven-Amin02",
    isBuilding: false
  },
  {
    id: "proj-accessibility",
    title: "AI Accessibility Assistant",
    tag: "Vodafone AI Hackathon (ITIDA & ALX)",
    category: "ai",
    description: "AI assistant helping individuals with disabilities using PDF-to-speech, image description, & conversational NLP.",
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
    period: "2026",
    description: "Gained practical experience with deployment workflows, SIT/UAT environments, CI/CD pipelines, IIS hosting, production environments, and change requests."
  },
  {
    id: "exp-depi",
    title: "Full-Stack .NET Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2026",
    description: "Training in C#, SQL Server, HTML, CSS, JavaScript, ASP.NET Core Web API, MVC, Git/GitHub, Docker, testing, and full-stack development."
  },
  {
    id: "exp-route",
    title: "Front-End Development Diploma",
    company: "Route Academy",
    period: "2026",
    description: "Practical training in modern front-end web development, including HTML, CSS, JavaScript, and related development tools."
  },
  {
    id: "exp-sprints",
    title: "Software Development Intern",
    company: "SprintsUp",
    period: "",
    description: "Practical experience with Python and software development fundamentals."
  },
  {
    id: "exp-usaid",
    title: "Scholar",
    company: "USAID Egyptian Pioneers Program",
    period: "",
    description: "Professional and technical development through the Egyptian Pioneers scholarship program."
  },
  {
    id: "exp-auc",
    title: "English Program",
    company: "AUC Continuing Education",
    period: "",
    description: "Long-term English language and communication training."
  }
];


export const educationData = [
  {
    id: "edu-asu",
    degree: "B.Sc. Computer Science",
    institution: "Ain Shams University (CGPA: 3.22 / 4.0)",
    period: "2023 — 2027"
  },
  {
    id: "edu-uel",
    degree: "B.Sc. Software Engineering",
    institution: "University of East London (Dual Degree)",
    period: "2024 — 2027"
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
