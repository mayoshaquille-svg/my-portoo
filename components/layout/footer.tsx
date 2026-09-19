import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest">
              {site.name} — {site.role}
            </p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </div>
          <nav
            aria-label="Social"
            className="flex flex-col gap-1 sm:flex-row sm:items-center"
          >
            <a
              href={site.email}
              aria-label="Email"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a
              href={site.linkedin}
              aria-label="LinkedIn (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.github}
              aria-label="GitHub (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
