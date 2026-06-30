export type ExperienceEntry = {
  type: "work" | "education";
  title: string;
  org: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    type: "work",
    title: "Business Support Specialist",
    org: "Financial Strategies",
    location: "Christchurch, NZ",
    period: "2025 – Present",
    points: [
      "Built VBA-based automation tools to streamline portfolio reporting and reduce manual data handling",
      "Designed data pipelines for extraction, validation, and transformation across multiple systems",
      "Debugged and refactored legacy codebases, improving reliability, maintainability, and performance",
    ],
  },
  {
    type: "work",
    title: "Engineering Intern",
    org: "Sharland Engineering",
    location: "Nelson, NZ",
    period: "Nov 2024 – Feb 2025",
    points: [
      "Contributed to fabrication and assembly of industrial machinery including hop harvesters and kilns, working from CAD drawings",
      "Performed precision welding, machining, and component fitting to strict quality control standards",
      "Assisted with CNC machining and mechanical assembly of high-tolerance components",
      "Collaborated with engineers to troubleshoot mechanical systems during assembly",
    ],
  },
  {
    type: "work",
    title: "Hop Machine Operator / Forklift Driver",
    org: "Northwood Hops",
    location: "Motueka, NZ",
    period: "Feb–Apr 2018, 2020, 2021",
    points: [
      "Operated and monitored industrial hop harvesting machinery across 12+ hour production shifts",
      "Gained practical exposure to agricultural machinery, uptime, throughput, and operator safety",
    ],
  },
  {
    type: "work",
    title: "Department Manager",
    org: "McDonald's",
    location: "Nelson, NZ",
    period: "Apr 2018 – Feb 2023",
    points: [
      "Managed and trained a team of 10+ staff",
      "Developed leadership and decision-making skills under pressure",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering (Honours) in Mechatronics",
    org: "University of Canterbury",
    location: "Christchurch, NZ",
    period: "2023 – 2026",
    points: [
      "Final-year student with focus on embedded systems, robotics, control systems, and digital electronics",
      "Relevant coursework: Embedded Systems, Embedded Software & Advanced Computing, Digital Electronics and Devices, Robotics, Control Systems, Applied Engineering Optimisation",
    ],
  },
];
