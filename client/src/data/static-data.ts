// Static data for the portfolio website
// This replaces the backend API calls with hardcoded data

import type { Project, Skill, Experience, Education, Certification, Publication } from "@shared/schema";

// Remove the locally defined interfaces since we're importing from shared schema
// export interface Project {
//   id: number;
//   title: string;
//   description: string;
//   tech: string[];
//   link?: string | null;
//   repoLink?: string | null;
//   imageUrl?: string;
// }

// export interface Skill {
//   id: number;
//   category: string;
//   items: string[];
// }

// export interface Experience {
//   id: number;
//   role: string;
//   company: string;
//   period: string;
//   description: string;
// }

// export interface Education {
//   id: number;
//   degree: string;
//   institution: string;
//   period: string;
// }

// export interface Certification {
//   id: number;
//   name: string;
//   issuer: string;
//   date: string;
// }

// export interface Publication {
//   id: number;
//   title: string;
//   journal: string;
//   link?: string | null;
//   date?: string | null;
// }

// Projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "Royal Enfield AI Demand Prediction Dashboard",
    description: "Machine learning web application that predicts bike demand based on weather inputs with real-time visualization.",
    tech: ["Python", "Flask", "Scikit-Learn", "Linear Regression", "NumPy", "Pandas", "HTML", "CSS", "JavaScript"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401"
  },
  {
    id: 2,
    title: "Traffic Flow Predictions",
    description: "Developed a CNN-LSTM model with Attention-based Mixture of Experts for traffic forecasting through transfer learning and domain adaptation..",
    tech: ["Python", "Deep Learning", "CNN", "LSTM", "Transfer Learning", "Mixture of Experts"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    id: 3,
    title: "ATM Management System",
    description: "Secure ATM system with robust user authentication and efficient database management for reliable transaction processing.",
    tech: ["Python", "MySQL", "Security", "Database Design"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Object-oriented library management application with efficient CRUD operations and structured data handling.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "OOP", "MySQL"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing data analytics projects, technical skills, and interactive visualizations.",
    tech: ["Flask", "HTML/CSS", "JavaScript", "React", "SQLite", "Responsive Design"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
  },
  {
    id: 6,
    title: "Secure Searchable Encryption System",
    description: "Secure cloud search system enabling keyword-based retrieval over encrypted data with fast and private performance.",
    tech: ["Python", "Cryptography", "Fernet", "Cloud Security", "Streamlit", "Searchable Encryption"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    id: 7,
    title: "Instagram Insights Dashboard",
    description: "Interactive Power BI dashboard for analyzing Instagram engagement metrics with KPI tracking and trend visualization.",
    tech: ["Power BI", "DAX", "Data Visualization", "Social Media Analytics", "KPI Dashboard"],
    link: null,
    repoLink: null,
    imageUrl: "/insta-prof-dash.jpg"
  },
  {
    id: 8,
    title: "Sales & Profit Performance Dashboard",
    description: "Interactive Power BI dashboard for tracking sales and profit performance with KPI monitoring and dynamic data visualization.",
    tech: ["Power BI", "DAX", "Business Intelligence", "KPI Dashboard", "Data Modeling"],
    link: null,
    repoLink: null,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  }
];

// Skills data
export const skills: Skill[] = [
  {
    id: 1,
    category: "Programming",
    items: ["Python", "HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 2,
    category: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Seaborn", "TensorFlow", "Keras"]
  },
  {
    id: 3,
    category: "Tools",
    items: ["Power BI", "Excel", "Flask","vs code"]
  },
  {
    id: 4,
    category: "Analytics",
    items: ["Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Dashboard Creation"]
  },
  {
    id: 5,
    category: "Databases",
    items: ["MySQL","SQLite"]
  },
  {
    id: 6,
    category: "Concepts",
    items: ["Basic Statistics", "Time Series Analysis", "Machine Learning Fundamentals"]
  }
];

// Experience data
export const experience: Experience[] = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "DigiDARA Technologies Pvt. Ltd., Tiruchirappalli, Tamil Nadu",
    period: "09/2025 – Present",
    description: "Collected, cleaned, and preprocessed data using Python and Excel. Performed exploratory data analysis (EDA) to identify patterns and insights. Created interactive dashboards in Power BI. Automated workflows, reducing data processing time by 15%. Supported predictive modeling and data-driven reports for business teams."
  },
  {
    id: 2,
    role: "Artificial Intelligence & Machine Learning Product Development Intern",
    company: "NeuraAI Solutions Private Limited",
    period: "07/2024 – 08/2024",
    description: "Assisted in AI & ML product development and data preprocessing. Conducted EDA and supported model training and evaluation. Implemented ML concepts using Python. Collaborated on AI product workflows and documentation."
  }
];

// Education data
export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "K.S.R College of Engineering",
    period: "09/2023 – 06/2025"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    institution: "Nandha Arts and Science College",
    period: "07/2020 – 06/2023"
  }
];

// Certifications data
export const certifications: Certification[] = [
  {
    id: 1,
    name: "Exploratory Data Analysis for Machine Learning",
    issuer: "Coursera",
    date: "2024"
  },
  {
    id: 2,
    name: "Business Analytics",
    issuer: "Coursera",
    date: "2024"
  },
  {
    id: 3,
    name: "Introduction to Project Management",
    issuer: "Coursera",
    date: "2024"
  },
  {
    id: 4,
    name: "Introduction to DevOps",
    issuer: "Coursera",
    date: "2024"
  },
  {
    id: 5,
    name: "UI/UX Design using Canva",
    issuer: "Coursera",
    date: "2024"
  }
];

// Publications data
export const publications: Publication[] = [
  {
    id: 1,
    title: "A Spatiotemporal Transfer Learning Frameworks with Mixture of Experts for Traffic Flow Predictions",
    journal: "IEEE",
    link: "https://ieeexplore.ieee.org/document/11200920",
    date: "2025"
  }
];