import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  mongodb,
  git,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: mobile,
  },
  {
    title: "ML Explorer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: backend,
  },
  {
    name: "Python",
    icon: creator,
  },
  {
    name: "C",
    icon: threejs,
  },
  {
    name: "SQL",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Wireshark",
    icon: mobile,
  },
  {
    name: "Burp Suite",
    icon: web,
  },
  {
    name: "VS Code",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "Sales Development Intern",
    company_name: "AlphaAxis Business Services",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Assisted in lead generation and client outreach, supporting a sales pipeline of 50+ prospects.",
      "Organized and maintained client interaction data, improving follow-up efficiency and tracking.",
    ],
  },
  {
    title: "Social Intern",
    company_name: "Bharat Vikas Parishad",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Designed 10+ presentations and documents, improving teaching and content delivery quality.",
      "Taught 25+ underprivileged students, enhancing engagement and learning consistency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ankur proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ankur does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ankur optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zomato Sentiment Analysis",
    description:
      "Processed 10,000+ customer reviews and trained a sentiment classification model with ~85% accuracy using Python and Machine Learning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AnkurSingla780",
  },
  {
    name: "ATM Machine Simulation",
    description:
      "Developed a console-based ATM system with PIN authentication, deposit, withdrawal, and balance management using Java and OOP concepts.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AnkurSingla780",
  },
  {
    name: "WAF & Attack Detection",
    description:
      "Developing a hybrid intrusion detection system combining signature-based and machine learning techniques for SYN Flood and Brute Force attacks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AnkurSingla780",
  },
];

export { services, technologies, experiences, testimonials, projects };
