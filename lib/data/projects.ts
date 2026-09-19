import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "bps-riau-data-monitoring",
    title: "BPS Riau — Internal Data Monitoring",
    context:
      "Internal web application supporting data management and reporting workflows at BPS Riau, built alongside day-to-day IT support duties.",
    problem:
      "Operational data was spread across manual files, making entry, review, and follow-up slow and error-prone for staff.",
    solution:
      "Built a Laravel/MySQL application with structured data entry forms, role-based access, and reporting views matched to the existing office workflow.",
    architecture:
      "Laravel MVC with Blade views, MySQL relational schema for master and transaction data, and middleware-based access control.",
    technicalDecisions: [
      "MySQL relational tables for master data and transaction records",
      "Server-side validation on every data entry form",
      "Role-based access for data entry and review responsibilities",
    ],
    role: [
      "Developed and maintained the Laravel/MySQL application",
      "Provided support and troubleshooting for office users",
      "Managed data structure and reporting needs",
    ],
    challenges: [
      "Matching form fields to real office procedures without overcomplicating entry",
      "Keeping reports readable as data volume grew",
      "Supporting non-technical users with clear guidance",
    ],
    technologies: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    status: "production",
    year: "2024",
  },
  {
    slug: "sipemtra-travel-ticket-booking",
    title: "SIPEMTRA — Travel Ticket Booking",
    context:
      "Ticket booking information system for travel scheduling and passenger records, developed as a backend-focused Laravel/MySQL application.",
    problem:
      "Booking and schedule records were managed manually, which complicated availability checks and transaction tracking.",
    solution:
      "Implemented a backend transaction flow covering schedules, bookings, and passenger data with validation at each step.",
    architecture:
      "Laravel MVC backend with MySQL relations between schedules, bookings, and passengers, plus guarded transaction writes.",
    technicalDecisions: [
      "Relational booking model linking schedules to passengers",
      "Validation rules for booking input and schedule capacity",
      "Separated admin and operator responsibilities",
    ],
    role: [
      "Designed the backend structure and transaction flow",
      "Implemented booking, schedule, and passenger management",
      "Handled testing and fixes during delivery",
    ],
    challenges: [
      "Keeping booking state consistent across schedule changes",
      "Designing forms simple enough for operators to use daily",
    ],
    technologies: ["Laravel", "MySQL", "Blade"],
    status: "completed",
    year: "2024",
  },
  {
    slug: "inventory-borrowing-return",
    title: "Inventory — Borrowing and Return",
    context:
      "Inventory application for tracking items with borrowing and return records. Currently in active development.",
    problem:
      "Item loans were tracked informally, so availability and return status were hard to confirm.",
    solution:
      "Building borrowing and return flows with item status tracking and transaction history. Scope is limited to what is implemented so far.",
    architecture:
      "Laravel MVC with MySQL tables for items and loan transactions, status field per item.",
    technicalDecisions: [
      "Loan transaction records instead of overwriting item state",
      "In-progress scope: borrowing and return only, no production claims",
    ],
    role: [
      "Designing the item and loan data model",
      "Implementing borrowing and return flows",
    ],
    challenges: [
      "Defining loan states clearly before adding more features",
      "Avoiding scope creep while the core flow is unfinished",
    ],
    technologies: ["Laravel", "MySQL"],
    status: "in-development",
    year: "2025",
  },
];
