import type { Capability } from "@/types/capability";

export const capabilities: Capability[] = [
  {
    title: "Helpdesk Troubleshooting",
    description:
      "Diagnose hardware, OS, and application issues from ticket reports through to verified fixes.",
    icon: "Wrench",
    group: "IT Support",
  },
  {
    title: "User Support and Documentation",
    description:
      "Guide non-technical users with clear steps and record fixes for future reference.",
    icon: "ShieldCheck",
    group: "IT Support",
  },
  {
    title: "Laravel / MySQL Development",
    description:
      "CRUD applications with auth, role-based access, and reporting views for office workflows.",
    icon: "Database",
    group: "Systems",
  },
  {
    title: "Data Management",
    description:
      "Relational schema design, validation, and reporting views for operational data.",
    icon: "Database",
    group: "Systems",
  },
  {
    title: "Responsive Web Interfaces",
    description:
      "Server-rendered views and responsive layouts with HTML, CSS, and modern tooling.",
    icon: "Globe",
    group: "Software",
  },
  {
    title: "Backend Transaction Flows",
    description:
      "Booking, inventory, and record flows with validation at each step.",
    icon: "Globe",
    group: "Software",
  },
  {
    title: "System Reliability",
    description:
      "Backups, basic hardening, and preventive maintenance to keep office systems running.",
    icon: "ShieldCheck",
    group: "Infrastructure",
  },
  {
    title: "Network and Hardware Basics",
    description:
      "Local network checks, peripheral setup, and hardware maintenance.",
    icon: "Wrench",
    group: "Infrastructure",
  },
];
