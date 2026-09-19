export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Mayo",
  role: "IT Support",
  title: "Mayo — IT Support",
  description:
    "Mayo is an IT Support specialist focused on troubleshooting, reliable systems, Laravel/MySQL software, and office infrastructure.",
  url: "https://example.com",
  email: "mailto:hello@example.com",
  emailLabel: "hello@example.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  location: "Riau, Indonesia",
} as const;

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
