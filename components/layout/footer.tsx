import { Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { LinkedinIcon } from "@/components/ui/brand-icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface-0">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {site.name} &mdash; {site.role}
            </p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </div>
          <nav
            aria-label="Social"
            className="flex items-center gap-1"
          >
            <a
              href={site.email}
              aria-label="Email"
              className="inline-flex min-h-[44px] w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-1 hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              aria-label="LinkedIn (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-1 hover:text-foreground"
            >
              <LinkedinIcon size={16} />
            </a>
          </nav>
        </div>
        <Separator />
        <p className="font-mono text-xs text-subtle">
          {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}