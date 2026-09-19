import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { LinkedinIcon } from "@/components/ui/brand-icons";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-surface-1 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="contact-heading"
          eyebrow="06 \u00b7 Contact"
          title="Contact"
          description="Fastest response via email. Include context, screenshots, and urgency."
        />

        {/* 2-column bento: direct connect + social */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Direct contact card */}
          <div className="rounded-md border border-border bg-surface-0 p-6 console-glow">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
              Direct
            </p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              Email
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Fastest way to reach me. Include what system is affected, what
              you&apos;ve tried, and how urgent it is.
            </p>
            <Button asChild size="lg" className="mt-5">
              <a href={site.email}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {site.emailLabel}
              </a>
            </Button>
          </div>

          {/* Social card */}
          <div className="rounded-md border border-border bg-surface-0 p-6">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
              Connect
            </p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              Online
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Find me on professional networks. Open to collaboration and
              support inquiries.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-md border border-border bg-surface-1 px-4 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight
                  className="ml-auto h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}