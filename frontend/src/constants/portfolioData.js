export const assetUrl = (path) => {
  const cleanPath = path.replace(/^\/+/, "");
  const base =
    import.meta.env.BASE_URL === "./" ? "/" : import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  return `${normalizedBase}${cleanPath}`;
};

export const RESUME_URL = assetUrl("Aman_Deep_MERN_Developer_Resume.pdf");

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript ES6+",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Socket.io",
  "WebRTC",
];

export const services = [
  {
    icon: "</>",
    name: "MERN Stack Web Development",
    desc: "Responsive full-stack applications with React, Node.js, Express, and MongoDB.",
  },
  {
    icon: "API",
    name: "Backend APIs & Authentication",
    desc: "CRUD systems, REST APIs, secure auth, authorization, and server-side validation.",
  },
  {
    icon: "UI",
    name: "Frontend Interfaces",
    desc: "Clean dashboards, clone UIs, and reusable component-based React screens.",
  },
];

export const projects = [
  {
    name: "PackagingBazaar",
    subtitle: "Packaging Products Marketplace",
    tags: ["React", "Tailwind CSS", "E-commerce", "UI/UX", "Responsive"],
    desc: "Created a polished packaging marketplace with product browsing, category navigation, and responsive layouts for seamless buyer engagement.",
    image: assetUrl("images/projects/packagingbazaar.png"),
    liveLink: "https://packagingbazaar.co.in/",
    githubLink: "https://github.com/amandeep954/PackagingBazaar",
  },
  {
    name: "Airbnb Clone",
    subtitle: "Full-Stack Web Application",
    tags: ["MongoDB", "Express.js", "Node.js", "EJS", "MVC", "Authentication"],
    desc: "Engineered a full-stack listings and reviews application with complete CRUD flows, secure user authentication, role-based authorization, MVC architecture, responsive pages, and robust server-side validation.",
    image: assetUrl("images/projects/airbnb-clone.png"),
    liveLink: "https://airbnb-n49p.onrender.com/listings",
    githubLink: "https://github.com/amandeep954/airbnb-fullstack-clone",
  },
  {
    name: "WebRTC Video Call Application",
    subtitle: "Real-Time P2P Communication",
    tags: ["MERN", "WebRTC", "Socket.io", "Node.js", "React"],
    desc: "Built a real-time peer-to-peer video calling app using WebRTC and Socket.io signaling, with optimized media streams, connection states, and stable low-latency audio-video communication.",
    image: assetUrl("images/projects/webrtc-video-call.png"),
    liveLink: "https://webrtc-frontend-9scg.onrender.com/",
    githubLink: "https://github.com/amandeep954/MERN-WebRTC-Call",
  },
  {
    name: "Zerodha Clone",
    subtitle: "Trading Platform UI",
    tags: ["React", "CSS", "State Management", "Component Architecture"],
    desc: "Developed an interactive React frontend clone of the Zerodha trading dashboard, recreating financial layouts with clean UI patterns, reusable components, and efficient rendering.",
    image: assetUrl("images/projects/zerodha-clone.png"),
    liveLink: "https://zerodha-frontend-gfs1.onrender.com/",
    githubLink: "https://github.com/amandeep954/amandeep954-zerodha-clone",
  },
  {
    name: "TaskFlow",
    subtitle: "Task Management Dashboard",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    desc: "Launched a secure task management dashboard with user authentication, responsive workflows, CRUD task boards, and polished UI for organizing work and tracking progress.",
    image: assetUrl("images/projects/TaskFlow.png"),
    liveLink: "https://taskflow-client-0400.onrender.com/",
    githubLink: "https://github.com/amandeep954/taskflow",
  },
];

export const education = [
  "Diploma, Information Technology - Government Polytechnic Ghaziabad - Expected 2026",
  "Class XII (Science) - Janta College, Bakewar (Etawah) - 2023",
  "Class X - Janta College, Bakewar (Etawah) - 2021",
];

export const languages = [
  "Hindi: Native / First Language",
  "English: Intermediate (B1)",
];
