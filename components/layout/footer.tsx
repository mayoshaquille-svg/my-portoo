import { Briefcase, FolderGit, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

const socials = [
  { label: "Email", href: site.email, Icon: Mail },
  { label: "LinkedIn", href: site.linkedin, Icon: Briefcase },
  { label: "GitHub", href: site.github, Icon: FolderGit },
] as const;

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
          <nav aria-label="Social" className="flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
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
