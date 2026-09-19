import {
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
      className="scroll-mt-20 bg-muted py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="capabilities-heading"
          eyebrow="02 / Capabilities"
          title="Capabilities"
          description="What I can own end to end, from ticket to fix to documentation."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group}
              className="rounded-md border border-border bg-background p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-subtle">
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

        <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-subtle">
          Troubleshooting flow
        </h3>
        <ol className="mt-3 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {troubleshootingFlow.map((item, index) => (
            <li
              key={item.step}
              className="rounded-md border border-border bg-background p-4"
            >
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
