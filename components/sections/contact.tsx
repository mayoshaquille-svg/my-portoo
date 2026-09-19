import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const externals = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
] as const;

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
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.emailLabel}
            </a>
          </Button>
          {externals.map(({ label, href }) => (
            <Button key={label} asChild variant="outline" size="lg">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
