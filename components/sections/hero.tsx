import { ArrowRight, Mail } from "lucide-react";

import { site } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const telemetry = [
  { label: "Systems supported", value: "3" },
  { label: "Active domains", value: "3" },
  { label: "Status", value: "Operational" },
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
            <Badge variant="accent" className="w-fit">
              IT Support · Open to work · {site.location}
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

          {/* Right: telemetry card */}
          <div
            role="group"
            aria-label="Portfolio metrics"
            className="lg:col-span-2"
          >
            <div className="rounded-md border border-border bg-surface-0 p-5 console-glow">
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  Telemetry
                </p>
              </div>
              <dl className="flex flex-col gap-3">
                {telemetry.map((item, i) => (
                  <div
                    key={item.label}
                    className={`reveal reveal-delay-${i + 1} flex items-baseline justify-between`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="font-mono text-sm font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
