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
    title: "User Support",
    description:
      "Direct assistance and clear step-by-step guidance for non-technical users.",
    icon: "Headset",
    group: "IT Support",
  },
  {
    title: "Application Support",
    description:
      "Support and maintain internal Laravel/MySQL business systems, including user assistance and issue handling.",
    icon: "MonitorCog",
    group: "Systems",
  },
  {
    title: "Data and Reporting Support",
    description:
      "MySQL data checks, validation, and reporting views matched to office workflows.",
    icon: "Database",
    group: "Systems",
  },
  {
    title: "Network Support",
    description:
      "Local network checks, connectivity diagnosis, and peripheral setup.",
    icon: "Network",
    group: "Network",
  },
  {
    title: "Connectivity Troubleshooting",
    description:
      "Isolate connectivity faults across device, cable or WiFi, and configuration layers.",
    icon: "Wifi",
    group: "Network",
  },
  {
    title: "Documentation",
    description:
      "Record fixes and procedures so recurring issues are resolved faster next time.",
    icon: "FileText",
    group: "Support Docs",
  },
  {
    title: "Verification and Follow-up",
    description:
      "Retest with the reporter, confirm resolution, and run preventive checks.",
    icon: "ClipboardCheck",
    group: "Support Docs",
  },
];
