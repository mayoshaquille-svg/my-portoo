import { ArrowUpRight, Briefcase, FolderGit, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const channels = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: Briefcase,
    variant: "outline" as const,
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: FolderGit,
    variant: "outline" as const,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-muted py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="contact-heading"
          eyebrow="06 / Contact"
          title="Contact"
          description="Fastest response via email. Include context, screenshots, and urgency."
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <a href={site.email}>
              <Mail aria-hidden="true" />
              {site.emailLabel}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          {channels.map(({ label, href, Icon, variant }) => (
            <Button key={label} asChild variant={variant} size="lg">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
