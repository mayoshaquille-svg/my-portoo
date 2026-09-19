import {
  ArrowRight,
  ClipboardCheck,
  Crosshair,
  Database,
  FileText,
  Headset,
  Inbox,
  MonitorCog,
  Network,
  Search,
  Wifi,
  Wrench,
} from "lucide-react";

import { capabilities } from "@/lib/data/capabilities";
import type {
  CapabilityGroup,
  CapabilityIcon,
} from "@/types/capability";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const capabilityIcons: Record<CapabilityIcon, typeof Wrench> = {
  Wrench,
  Headset,
  MonitorCog,
  Database,
  Network,
  Wifi,
  FileText,
  ClipboardCheck,
};

const groups: CapabilityGroup[] = [
  "IT Support",
  "Systems",
  "Network",
  "Support Docs",
];

const troubleshootingFlow = [
  {
    step: "Issue",
    description: "Ticket report with context and symptoms",
    Icon: Inbox,
  },
  {
    step: "Investigation",
    description: "Reproduce and isolate the failing layer",
    Icon: Search,
  },
  {
    step: "Root Cause",
    description: "Confirm the underlying fault, not symptoms",
    Icon: Crosshair,
  },
  {
    step: "Solution",
    description: "Apply the smallest correct fix",
    Icon: Wrench,
  },
  {
    step: "Verification",
    description: "Retest with the reporter and check side effects",
    Icon: ClipboardCheck,
  },
  {
    step: "Documentation",
    description: "Record the fix for the next occurrence",
    Icon: FileText,
  },
] as const;

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-24 bg-muted py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="capabilities-heading"
          eyebrow="02 · Capabilities"
          title="Capabilities"
          description="What I can own end to end, from ticket to fix to documentation."
        />

        {/* Troubleshooting flow — full-width horizontal statement */}
        <div className="mt-8" role="group" aria-label="Troubleshooting flow">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-subtle">
            Troubleshooting flow
          </h3>
          <ol
            aria-label="Six-step troubleshooting process"
            className="relative mt-4 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-6"
          >
            {troubleshootingFlow.map((item, index) => (
              <li key={item.step} className="relative flex flex-col">
                {/* Connector line (CSS only, hidden on mobile for clean stacking) */}
                {index < troubleshootingFlow.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-4 hidden h-px w-[calc(100%-2rem)] bg-border lg:block"
                    style={{ left: "calc(50% + 1.5rem)" }}
                  />
                )}
                <div className="rounded-md border border-border bg-background p-4">
                  <div className="flex items-center gap-2">
                    <item.Icon className="h-4 w-4" aria-hidden="true" />
                    <p className="font-mono text-xs text-subtle">
                      Step {index + 1}
                    </p>
                  </div>
                  <p className="mt-2 text-sm font-medium">{item.step}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mid-page mini-CTA */}
        <div className="mt-8 flex flex-col items-start gap-3 rounded-md border border-border bg-background px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Punya masalah sistem? Saya bisa bantu diagnosa dan perbaiki.
          </p>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="#contact">
                Hubungi
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        {/* Capability groups */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group}
              className="rounded-md border border-border bg-background p-5"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-subtle">
                {group}
              </h3>
              <ul className="mt-3 flex list-none flex-col gap-4 p-0">
                {capabilities
                  .filter((cap) => cap.group === group)
                  .map((cap) => {
                    const Icon = capabilityIcons[cap.icon];
                    return (
                      <li key={cap.title} className="flex gap-3">
                        <Icon
                          className="mt-0.5 h-5 w-5 shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <h4 className="text-sm font-medium">{cap.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {cap.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
