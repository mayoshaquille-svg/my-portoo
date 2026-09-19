import { ArrowRight, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ledgerRows = [
  { status: "Open", badgeVariant: "default" as const, time: "09:14" },
  { status: "In Progress", badgeVariant: "outline" as const, time: "09:32" },
  { status: "Resolved", badgeVariant: "default" as const, time: "10:05" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: thesis */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Badge variant="outline" className="w-fit">
              IT Support / Open to work · {site.location}
            </Badge>
            <h1
              id="hero-heading"
              className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {site.name} — {site.role}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Keeping office systems running — troubleshooting issues,
              maintaining applications, and documenting fixes so teams can focus
              on their work.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#projects">
                  View supported systems
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  <Mail aria-hidden="true" />
                  Contact
                </a>
              </Button>
            </div>
          </div>

          {/* Right: ticket ledger strip */}
          <div
            role="group"
            aria-label="Example support ticket flow"
            className="lg:col-span-2"
          >
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-subtle">
              Ticket ledger
            </p>
            <div className="flex flex-col gap-2">
              {ledgerRows.map((row, i) => (
                <div
                  key={row.status}
                  className="hero-ledger-row flex items-center justify-between rounded-md border border-border bg-background px-4 py-2.5 transition-colors hover:bg-muted"
                  style={{ animationDelay: `${i * 250}ms` }}
                >
                  <Badge variant={row.badgeVariant}>{row.status}</Badge>
                  <span className="font-mono text-xs text-subtle">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
