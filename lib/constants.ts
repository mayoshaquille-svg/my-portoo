export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "M. Mayo Shaquille",
  role: "IT Support",
  title: "M. Mayo Shaquille — IT Support",
  description:
    "M. Mayo Shaquille is an IT Support specialist focused on troubleshooting, user support, system maintenance, application support, infrastructure support, and documentation.",
  // TODO: replace with production domain
  url: "https://example.com",
  email: "mailto:mayoshaquille@gmail.com",
  emailLabel: "mayoshaquille@gmail.com",
  linkedin: "https://www.linkedin.com/in/m-mayo-shaquille-69953041b",
  location: "Riau, Indonesia",
} as const;

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
