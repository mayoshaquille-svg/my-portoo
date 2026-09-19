export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Mayo",
  role: "IT Support",
  title: "Mayo — IT Support",
  description:
    "Mayo is an IT Support specialist focused on troubleshooting, user support, system maintenance, application support, infrastructure support, and documentation.",
  // TODO: replace with production domain
  url: "https://example.com",
  // TODO: replace with real email address
  email: "mailto:hello@example.com",
  emailLabel: "hello@example.com",
  // TODO: replace with real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/",
  // TODO: replace with real GitHub profile URL
  github: "https://github.com/",
  location: "Riau, Indonesia",
} as const;

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Systems", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
