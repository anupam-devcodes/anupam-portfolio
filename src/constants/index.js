export const myProjects = [
  {
    id: 1,
    title: "FinSentry",
    description: "AI-powered personal finance intelligence platform.",
    subDescription: [
      "Built a full-stack finance platform with authentication, transaction management, CSV import, recurring transactions, and analytics dashboards.",
      "Integrated Gemini AI and Cloudinary to scan receipt images and extract merchant, date, line items, and category-wise expenses.",
      "Implemented protected REST APIs, Zod validation, scheduled monthly reports, email delivery, and backend rate limiting.",
    ],
    href: "https://finsentry-eta.vercel.app",
    logo: "",
    image: "/assets/projects/finsentry.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "JWT Auth",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 6,
        name: "Gemini AI",
        path: "/assets/logos/gemini.svg",
      },
    ],
    github: "https://github.com/anupam-devcodes/finsentry",
  },
  {
    id: 2,
    title: "PrepPilot",
    description: "AI-powered interview preparation platform.",
    subDescription: [
      "Developed a full-stack platform that analyzes resumes against job descriptions to identify skill gaps.",
      "Used Google Gemini to generate technical and behavioral interview questions, resume suggestions, and ATS-focused improvements.",
      "Implemented JWT authentication, protected routes, PDF resume parsing, and automated PDF resume generation using Puppeteer.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/preppilot.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "JWT",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 5,
        name: "Puppeteer",
        path: "/assets/logos/puppeter.svg",
      },
    ],
    github: "https://github.com/anupam-devcodes/preppilot",
  },
  {
    id: 3,
    title: "VendorIQ",
    description: "Retail vendor performance and profitability analysis.",
    subDescription: [
      "Built an analytics project to evaluate vendor performance, profitability, inventory efficiency, purchasing patterns, and low-margin brands.",
      "Created SQL summary tables to support structured business analysis and reporting.",
      "Designed a Power BI dashboard with insights for pricing, bulk purchasing, inventory turnover, and vendor dependency.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/vendoriq.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "SQL",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 4,
        name: "Power BI",
        path: "/assets/logos/powerbi.svg",
      },
    ],
    github:
      "https://github.com/anupam-devcodes/vendoriq-retail-vendor-performance-analysis",
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anupam-choubey-8a7514296",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/anupam-devcodes",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/AnupamChoubey/",
    icon: "/assets/socials/leetcode.svg",
  },
  {
    name: "Email",
    href: "mailto:anupamchoubey0722@gmail.com",
    icon: "/assets/socials/email.svg",
  },
];

export const experiences = [
  {
    title: "Team Captain",
    job: "ZS Campus Beats GenAI Challenge",
    date: "GenAI Challenge",
    contents: [
      "Led a team to design a workflow automation solution for a real-world business use case.",
      "Coordinated problem analysis, task distribution, and final presentation.",
    ],
  },
  {
    title: "Backend Developer",
    job: "RaiseIt, Technovate 3.0 Hackathon",
    date: "Finalist — Top 8 Teams",
    contents: [
      "Led backend development for an AI-powered campus issue management platform.",
      "Built REST APIs, authentication workflows, issue-management logic, and Gemini AI-based spam detection.",
    ],
  },
];

export const reviews = [
  {
    name: "Full-Stack Development",
    username: "React • Node.js • Express • MongoDB",
    body: "I build database-driven web applications with clean APIs, authentication, and responsive user interfaces.",
    img: "https://robohash.org/fullstack",
  },
  {
    name: "AI-Enabled Applications",
    username: "Gemini AI • Cloudinary • Automation",
    body: "I integrate AI features into practical products, including receipt scanning, resume analysis, and intelligent suggestions.",
    img: "https://robohash.org/aiapps",
  },
  {
    name: "Data Analytics",
    username: "Python • SQL • Pandas • Power BI",
    body: "I work on analytics projects that turn raw data into structured insights, dashboards, and business recommendations.",
    img: "https://robohash.org/dataanalytics",
  },
  {
    name: "Problem Solving",
    username: "DSA • LeetCode • GeeksforGeeks",
    body: "I have solved 400+ DSA problems across coding platforms to strengthen algorithmic thinking and fundamentals.",
    img: "https://robohash.org/problemsolving",
  },
];