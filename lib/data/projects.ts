import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "bps-riau-data-monitoring",
    title: "BPS Riau — Internal Data System",
    context:
      "Internal data system at BPS Riau supported day to day: user assistance, issue handling, data checks, and maintenance of the Laravel/MySQL application.",
    problem:
      "Staff faced slow, error-prone data entry and review across manual files, plus recurring usage issues needing troubleshooting.",
    solution:
      "Supported a structured Laravel/MySQL system with validated entry forms, role-based access, and reporting views matched to the office workflow, and troubleshot user issues as they arose.",
    architecture:
      "Laravel MVC with Blade views, MySQL relational schema for master and transaction data, and middleware-based access control.",
    technicalDecisions: [
      "MySQL relational tables for master data and transaction records",
      "Server-side validation on every data entry form",
      "Role-based access for data entry and review responsibilities",
    ],
    role: [
      "Provided support and troubleshooting for office users",
      "Maintained the Laravel/MySQL application and data structure",
      "Kept reporting views aligned with office procedures",
    ],
    challenges: [
      "Diagnosing user-reported issues across entry, data, and access layers",
      "Keeping reports readable as data volume grew",
      "Guiding non-technical users with clear steps",
    ],
    technologies: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    status: "production",
    year: "2024",
  },
  {
    slug: "sipemtra-travel-ticket-booking",
    title: "SIPEMTRA — Travel Ticket Booking System",
    context:
      "Ticket booking system for travel scheduling and passenger records, supported through delivery and handover: testing, fixes, and operator guidance.",
    problem:
      "Manual booking and schedule records complicated availability checks and transaction tracking for operators.",
    solution:
      "Supported delivery of a Laravel/MySQL transaction flow covering schedules, bookings, and passenger data with validation at each step.",
    architecture:
      "Laravel MVC backend with MySQL relations between schedules, bookings, and passengers, plus guarded transaction writes.",
    technicalDecisions: [
      "Relational booking model linking schedules to passengers",
      "Validation rules for booking input and schedule capacity",
      "Separated admin and operator responsibilities",
    ],
    role: [
      "Tested booking, schedule, and passenger flows and fixed issues found",
      "Supported operators during handover with usage guidance",
      "Documented the transaction flow for ongoing maintenance",
    ],
    challenges: [
      "Tracing booking inconsistencies across schedule changes",
      "Making the flow understandable for daily operators",
    ],
    technologies: ["Laravel", "MySQL", "Blade"],
    status: "completed",
    year: "2024",
  },
  {
    slug: "inventory-borrowing-return",
    title: "Inventory — Borrowing and Return System",
    context:
      "Inventory system for tracking items with borrowing and return records. Currently in active development with supportability in mind.",
    problem:
      "Item loans were tracked informally, so availability and return status were hard to confirm.",
    solution:
      "Preparing borrowing and return flows with item status tracking and transaction history. Scope is limited to what is implemented so far.",
    architecture:
      "Laravel MVC with MySQL tables for items and loan transactions, status field per item.",
    technicalDecisions: [
      "Loan transaction records instead of overwriting item state",
      "In-progress scope: borrowing and return only, no production claims",
    ],
    role: [
      "Preparing the item and loan data model",
      "Testing borrowing and return flows as they are built",
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
