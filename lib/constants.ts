export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "M. Mayo Shaquille",
  shortName: "Mayo",
  role: "IT Support Specialist",
  title: "M. Mayo Shaquille — IT Support & Systems Specialist",
  description:
    "An experienced IT Support & Systems Specialist with a proven track record in troubleshooting, network infrastructure, hardware maintenance, and enterprise system reliability.",
  url: "https://mayoshaquille.com",
  email: "mayoshaquille@gmail.com",
  phone: "+62 899-8164-856",
  location: "Riau, Indonesia",
  linkedin: "https://www.linkedin.com/in/m-mayo-shaquille-69953041b",
  instagram: "https://instagram.com",
  cvUrl: "/cv/CV M.Mayo Shaquille.pdf",
} as const;

export const nav: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Blogs", href: "#blogs" },
  { label: "FAQs", href: "#faqs" },
];

export const tickerItems = [
  "IT Support",
  "Network Engineering",
  "Hardware Diagnostics",
  "CCTV Infrastructure",
  "WiFi Access Points",
  "LAN Cabling",
  "System Maintenance",
  "User Helpdesk",
  "Troubleshooting",
  "Digital Signage",
  "Windows & Linux",
  "MikroTik & Cisco",
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const services: ServiceItem[] = [
  {
    id: "hardware-troubleshooting",
    title: "Hardware & OS Diagnostics",
    description:
      "Rapid resolution of desktop/laptop hardware failures, system crashes, component replacements, and preventive diagnostics.",
    iconName: "Cpu",
  },
  {
    id: "network-infrastructure",
    title: "Network & LAN Cabling",
    description:
      "End-to-end Cat6 structured cabling, router & managed switch configuration, subnet routing, and WiFi access point optimization.",
    iconName: "Network",
  },
  {
    id: "user-support",
    title: "User Support & Helpdesk",
    description:
      "First-tier user issue resolution, application setup, ticketing workflow support, and software troubleshooting for teams.",
    iconName: "Headphones",
  },
  {
    id: "surveillance-displays",
    title: "CCTV & Digital Signage",
    description:
      "Installation, IP configuration, and maintenance of CCTV security units alongside custom company digital information displays.",
    iconName: "Monitor",
  },
];

export interface ToolItem {
  name: string;
  percentage: number;
  category: string;
  icon: string;
  bgColor?: string;
}

export const tools: ToolItem[] = [
  { name: "Windows Server", percentage: 95, category: "OS / Server", icon: "Monitor" },
  { name: "Linux / Ubuntu", percentage: 88, category: "OS / Server", icon: "Terminal" },
  { name: "Cisco & MikroTik", percentage: 92, category: "Networking", icon: "Router" },
  { name: "Wireshark", percentage: 86, category: "Diagnostics", icon: "Activity" },
  { name: "Hardware & LAN", percentage: 98, category: "Infrastructure", icon: "Wrench" },
  { name: "CCTV & Displays", percentage: 94, category: "Peripherals", icon: "Camera" },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "Infrastructure" | "Systems" | "Display" | "Hardware";
  tags: string[];
  image: string;
  client: string;
  duration: string;
  country: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
}

export const projects: ProjectItem[] = [
  {
    id: "pertamina-digital-display",
    title: "Digital Company Information Display System",
    category: "Display",
    tags: ["IT Support", "Digital Display", "Linux Kiosk"],
    image: "/images/projects/display-informasi.jpeg",
    client: "Pertamina EP Field Lirik — ICT",
    duration: "2 Months",
    country: "Indonesia",
    summary:
      "Designed, configured, and deployed a standalone digital company announcement and operational metrics display for plant staff.",
    challenge:
      "Operational announcements relied on physical paper bulletin boards, delaying emergency safety notices and production status broadcasts.",
    solution:
      "Engineered an automated digital kiosk display connected to internal network shares, supporting dynamic slideshows, safety telemetry, and remote content pushing.",
    impact:
      "100% real-time information dissemination achieved across operational departments with zero maintenance downtime.",
  },
  {
    id: "telkom-network-stabilization",
    title: "Network Disruption Diagnostics & LAN Cabling",
    category: "Infrastructure",
    tags: ["Network", "LAN Cabling", "Troubleshooting"],
    image: "/images/projects/LAN.jpeg",
    client: "Telkom Plasa Air Molek",
    duration: "3 Months",
    country: "Indonesia",
    summary:
      "Comprehensive diagnostic sweep and cable re-termination to eliminate severe packet loss and intermittent customer service terminal outages.",
    challenge:
      "High packet drop rates during peak business hours caused POS transaction slowdowns and customer service delays.",
    solution:
      "Re-pulled shielded Cat6 cables, re-crimped patch panels, re-balanced port load on enterprise switches, and resolved IP conflict loops.",
    impact:
      "Eliminated 82% of recurrent network drop incidents and brought LAN ping latency under 3ms steady.",
  },
  {
    id: "cctv-wifi-overhaul",
    title: "Industrial CCTV Surveillance Camera Alignment",
    category: "Hardware",
    tags: ["CCTV", "Security", "Hardware"],
    image: "/images/projects/CCTV.jpeg",
    client: "Pertamina EP Field Lirik — ICT",
    duration: "1 Month",
    country: "Indonesia",
    summary:
      "Inspected, repaired, and re-aligned industrial IP dome cameras with weather-proof conduit cabling for facility-wide coverage.",
    challenge:
      "Corroded RJ45 connectors and storm damage caused frequent camera signal losses during critical security shifts.",
    solution:
      "Replaced damaged connectors with IP67 sealed terminations, tested PoE power draw, and realigned optical coverage angles.",
    impact:
      "Restored 100% video feed uptime for security audits and eliminated perimeter surveillance blindspots.",
  },
  {
    id: "enterprise-wifi-deployment",
    title: "Enterprise WiFi Access Point Network Deployment",
    category: "Infrastructure",
    tags: ["WiFi AP", "Wireless", "Network Setup"],
    image: "/images/projects/wifi.jpeg",
    client: "Pertamina EP Field Lirik — ICT",
    duration: "1 Month",
    country: "Indonesia",
    summary:
      "Conducted site survey, RF channel mapping, and ceiling deployment of enterprise multi-node wireless access points for seamless roaming.",
    challenge:
      "Concrete-heavy partitions caused severe WiFi attenuation and packet drops for staff moving between operational zones.",
    solution:
      "Configured dual-band 2.4/5GHz PoE ceiling access points with non-overlapping channels and centralized SSID roaming.",
    impact:
      "Delivered reliable high-speed wireless connectivity with full coverage and sub-10ms ping latency throughout facilities.",
  },
];

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  description: string;
}

export interface WorkItem {
  period: string;
  company: string;
  role: string;
  highlights: string[];
}

export const educationHistory: EducationItem[] = [
  {
    period: "2022 — 2026",
    institution: "Universitas Riau",
    degree: "S1 — Sistem Informasi (S.Kom) | IPK: 3.71",
    description:
      "Graduated with honors (Cum Laude). Specialization in IT infrastructure, database systems, networking fundamentals, and computer hardware diagnostics.",
  },
  {
    period: "2018 — 2021",
    institution: "SMKN 1 Pasir Penyu",
    degree: "Teknik Komputer & Jaringan (TKJ)",
    description:
      "Hands-on vocational curriculum in LAN/WAN cabling, server configuration, fiber optics basics, and computer troubleshooting.",
  },
];

export const workHistory: WorkItem[] = [
  {
    period: "Jan 2025 — Feb 2025",
    company: "Pertamina EP Field Lirik — ICT",
    role: "IT Support Specialist Intern",
    highlights: [
      "Built and deployed the digital company information display system.",
      "Inspected, aligned, and repaired industrial CCTV units.",
      "Installed and configured high-density WiFi access points.",
      "Tidied and organized structured LAN cabling across office racks.",
    ],
  },
  {
    period: "Feb 2025",
    company: "EMP Riau Lirik",
    role: "Event & K3 Documentation Specialist",
    highlights: [
      "Documented safety procedures and corporate events to strict HSE standards.",
      "Structured digital asset indexes for compliance audits.",
    ],
  },
  {
    period: "Sep 2021 — Dec 2021",
    company: "Telkom Plasa Air Molek",
    role: "Technician & IT Support Intern",
    highlights: [
      "Diagnosed and resolved internet connection and network disruptions.",
      "Installed and pulled Cat6 and fiber network lines.",
      "Assisted in configuring routers, switches, and customer terminal devices.",
    ],
  },
];


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What specific IT support & infrastructure services do you provide?",
    answer:
      "I specialize in hardware diagnostics and repair, OS configuration (Windows Server, Windows 10/11, Linux), structured LAN cabling, router and switch configuration, WiFi access point deployment, CCTV surveillance setups, and digital information display systems.",
  },
  {
    id: "faq-2",
    question: "Can I download your resume / CV directly?",
    answer:
      "Certainly! You can download my complete and up-to-date resume/CV directly from this website by clicking the 'Download CV' button in the About section or via the header. It includes my full educational background, certifications, and project experience.",
  },
  {
    id: "faq-3",
    question: "Are you available for freelance, contract, or full-time on-site work?",
    answer:
      "Yes, I am actively open to full-time roles, contract positions, and freelance IT infrastructure projects. I am based in Riau, Indonesia, and also available for relocation or remote technical support depending on project requirements.",
  },
  {
    id: "faq-4",
    question: "What network hardware and software tools do you use regularly?",
    answer:
      "I regularly work with Cisco and MikroTik routing/switching devices, UniFi / TP-Link access points, Wireshark for network packet inspection, Windows Server Active Directory, Linux terminal utilities, IP camera configuration suites, and cable testers.",
  },
  {
    id: "faq-5",
    question: "How do you respond to urgent downtime or unexpected network disruptions?",
    answer:
      "I follow a systematic troubleshooting workflow: isolate the failure layer (physical cabling, switch port, IP configuration, or gateway), perform ping and packet diagnostics, deploy rapid failover or patch solutions, and document the root cause to prevent future recurrences.",
  },
];

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  summary: string;
}

export const blogs: BlogItem[] = [
  {
    id: "blog-1",
    title: "Minimalist IT Architecture: Best Practices for Small Offices",
    date: "14 Oct 2026",
    category: "Infrastructure",
    image: "/images/blog_1.jpg",
    readTime: "5 min read",
    summary:
      "How to set up clean, durable, and easily maintainable network cabling and equipment racks that prevent 90% of office technical errors.",
  },
  {
    id: "blog-2",
    title: "Diagnosing Packet Loss & WiFi Latency: A Field Engineer's Guide",
    date: "28 Sep 2026",
    category: "Networking",
    image: "/images/blog_2.jpg",
    readTime: "7 min read",
    summary:
      "Practical methodologies using Wireshark and terminal ping commands to pinpoint the exact bottleneck in congested local area networks.",
  },
  {
    id: "blog-3",
    title: "Preventive Hardware Maintenance: Prolonging Enterprise PC Lifespan",
    date: "12 Sep 2026",
    category: "Hardware",
    image: "/images/blog_3.jpg",
    readTime: "4 min read",
    summary:
      "Routine thermal paste renewal, dust cleaning, and component stress testing to avoid catastrophic motherboard and power supply blowouts.",
  },
];
