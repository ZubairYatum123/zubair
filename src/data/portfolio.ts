import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiMongodb, SiFirebase, SiTypescript, SiTailwindcss, SiExpress } from "react-icons/si";
import { TbTestPipe, TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

export const profile = {
  name: "Muhammad Zubair Shehzad",
  shortName: "Zubair",
  initials: "MZ",
  role: "MERN Stack Developer | QA Engineer",
  longRole: "MERN Stack Developer | QA Engineer | Next.js and Backend Specialist",
  location: "Faisalabad, Punjab, Pakistan",
  education: "University of Agriculture Faisalabad (2022-2026)",
  email: "itxzubair45@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-zubair-shehzad-b392062aa",
  intro:
    "I build scalable, high-performance web apps and ensure product quality through rigorous testing. I help startups and businesses launch platforms that are fast, secure and a joy to use.",
  longIntro:
    "I'm a passionate MERN stack developer and QA tester. I specialize in React, Next.js, Node.js, MongoDB, NestJS, Python backends, Firebase, and automated/functional testing, shipping products that hold up in production.",
  stats: [
    { label: "Projects shipped", value: "20+" },
    { label: "QA experience", value: "6+ mo" },
    { label: "Tech stack", value: "MERN" },
    { label: "Client focus", value: "100%" },
  ],
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "MERN Stack Web Development",
    description: "End-to-end full-stack apps built with MongoDB, Express, React and Node.",
    bullets: ["Full-stack apps", "REST APIs", "Auth & authorization", "Dashboards & admin panels", "E-commerce systems"],
    icon: FaReact,
  },
  {
    title: "Next.js Frontend Development",
    description: "SEO-first Next.js builds with server components, dynamic routing and API routes.",
    bullets: ["Server components", "SEO-optimized pages", "Dynamic routing", "API routes"],
    icon: SiNextdotjs,
  },
  {
    title: "Backend Development",
    description: "Reliable backends in Node.js, NestJS and Python with clean architecture.",
    bullets: ["Node.js / Express", "NestJS", "Python backend", "Firebase integration"],
    icon: FaNodeJs,
  },
  {
    title: "Quality Assurance (QA Testing)",
    description: "Catch bugs before users do, from manual testing to end-to-end coverage.",
    bullets: ["Manual testing", "Test cases creation", "End-to-end testing", "Bug reporting & docs", "Error-free UI/UX"],
    icon: TbTestPipe,
  },
];

export const techStack: { name: string; icon: IconType }[] = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "Python", icon: FaPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "REST APIs", icon: TbApi },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
  accent: string;
  liveDemo?: string;
};

export const projects: Project[] = [
  {
    slug: "Dialiffy",
    title: "Dialiffy",
    tagline: "Turn every call into a customer with a professional business phone system",
    category: "SaaS | Full Stack",
    description:
      "A cloud-based business phone system that helps companies manage calls, track conversations, and collaborate with their teams. Dialiffy provides HD calling, smart call routing, business messaging, contact management, and real-time call analytics, all in one unified platform that works seamlessly across desktop, mobile, and web.",
    highlights: [
      "HD business calling with crystal clear voice quality",
      "Smart call routing and team extensions",
      "Business SMS and messaging",
      "Call analytics and activity insights",
      "Multi-platform sync (iOS, Android, Desktop, Web)",
      "Virtual phone numbers with 100+ countries coverage",
      "/dialiffy.png",
    ],
    liveDemo: "https://dialiffy.com/",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Twilio", "Tailwind CSS"],
    year: "2026",
    accent: "from-blue-200 to-indigo-200",
  },
  {
    slug: "Mentor AI Platform",
    title: "Mentor AI Platform",
    tagline: "Learn from verified mentors with AI-powered matching and course discovery",
    category: "SaaS | Full Stack",
    description:
      "An AI-powered mentorship platform that connects students with verified mentors validated through LinkedIn and GitHub. Using a RAG-based matching system, the platform intelligently recommends mentors and courses aligned to each student's career goals, while offering direct mentor chat, course discovery, flexible enrollment, and a progress dashboard to track enrolled courses and completed sessions, all in one seamless experience.",
    highlights: [
      "RAG-based AI matching for mentors and courses",
      "Verified mentor network with LinkedIn & GitHub validation",
      "Mentor-led course discovery and flexible enrollment",
      "Direct mentor-student chat and session planning",
      "Progress dashboard with milestone tracking",
      "Dual role registration for mentors and students",
      "/mentor.png",
    ],
    liveDemo: "https://mentor-ai-platform.vercel.app",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
    year: "2026",
    accent: "from-blue-200 to-cyan-200",
  },
  {
    slug: "Stock Management System",
    title: "Stock Management System",
    tagline: "Efficient inventory tracking and management solution",
    category: "MERN | Backend",
    description:
      "A comprehensive stock management system designed to streamline inventory processes, track real-time stock levels, and provide actionable insights for better decision-making.",
    highlights: [
      "Real-time inventory tracking",
      "Automated stock alerts",
      "Comprehensive reporting",
      "User-friendly interface",
      "/Sm.png",
    ],
    liveDemo: "https://stock-management-system-zeta.vercel.app",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    year: "2025",
    accent: "from-green-200 to-teal-200",
  },
  {
    slug: "ecommerce-guider",
    title: "E-Commerce Guider",
    tagline: "Admin + vendor system with smart product-to-vendor recommendations",
    category: "MERN | Admin Panel",
    description:
      "A complete e-commerce recommendation system. Admins can dynamically onboard vendors and link them to product categories, and the platform then suggests the right vendors based on what shoppers are looking for. Built with secure auth and protected routes.",
    highlights: [
      "Powerful admin panel",
      "Dynamic vendor onboarding",
      "Vendor to product linking logic",
      "Authentication & protected routes",
      "/Eg1.png",
    ],
    liveDemo: "https://dummy-live-demo-link.com",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    year: "2024",
    accent: "from-emerald-200 to-teal-200",
  },
  {
    slug: "watch-store",
    title: "Nova Tech E-Commerce Watch Store",
    tagline: "Full watch e-commerce site with admin panel and cart",
    category: "MERN | E-commerce",
    description:
      "A complete watch e-commerce experience: an admin panel for managing products, a polished storefront with filtering, add-to-cart functionality and a secure backend. Fully responsive across every device.",
    highlights: [
      "Admin panel for products",
      "Add-to-cart & checkout flow",
      "Product filtering & search",
      "Secure backend & API",
      "/Nt.png",
    ],
    liveDemo: "https://nova-tech-nu.vercel.app/",
    stack: ["MongoDB", "Express", "React", "Node.js", "Stripe-ready"],
    year: "2024",
    accent: "from-sky-200 to-violet-200",
  },
];

export const qa = {
  company: "Voltic Inc",
  duration: "6 months",
  summary:
    "I worked as a QA Engineer at Voltic Inc, where I owned manual testing, test planning and bug documentation across multiple product releases. My job was simple: make sure nothing broken reaches the user.",
  why: "Testing isn't a phase, it's a mindset. A great product looks beautiful and never embarrasses the user. I bring that mindset into every project I build or test.",
  bullets: [
    "Manual Testing",
    "Cross-browser testing",
    "Test planning & execution",
    "Functional testing",
    "Bug report documentation",
    "Delivering error-free products",
  ],
  tools: ["Jira", "TestRail", "Postman", "Chrome DevTools"],
};
