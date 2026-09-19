import { Headset, MonitorCog, Wrench } from "lucide-react";

import { site } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";

const facts = [
  {
    key: "Focus",
    value: "Troubleshooting, user support, and system maintenance",
  },
  {
    key: "Systems",
    value: "Office systems, internal applications, local network",
  },
  { key: "Base", value: "Riau, Indonesia" },
] as const;

const pillars = [
  {
    title: "Helpdesk",
    description:
      "Hardware, OS, and application issues from ticket to verified fix.",
    Icon: Headset,
  },
  {
    title: "Applications",
    description:
      "Internal applications, user assistance, issue handling, and routine maintenance.",
    Icon: MonitorCog,
  },
  {
    title: "Infrastructure",
    description:
      "Local network checks, connectivity diagnosis, and peripheral setup.",
    Icon: Wrench,
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="about-heading"
          eyebrow="01 \u00b7 About"
          title="About"
          description="IT Support specialist focused on troubleshooting, user support, system maintenance, and application support."
        />

        {/* Bento: main story + quick facts */}
        <div className="mt-8 grid gap-5 sm:grid-cols-12">
          {/* Main story -- 8 cols */}
          <div className="sm:col-span-8 rounded-md border border-border bg-surface-0 p-6">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                Profile
              </p>
              <p className="font-mono text-[11px] text-subtle">
                {site.name} / {site.role}
              </p>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              IT Support specialist focused on troubleshooting, user support,
              system maintenance, application support, infrastructure support,
              and documentation. Experience supporting internal systems helps me
              diagnose issues faster -- keeping the system working is the job.
            </p>
            <div className="mt-5 pt-4 border-t border-border">
              <p className="font-mono text-[11px] text-subtle">
                {site.location} -- providing support, maintenance, and
                documentation for office systems and internal applications.
              </p>
            </div>
          </div>

          {/* Quick facts -- 4 cols */}
          <div className="sm:col-span-4 flex flex-col gap-4">
            {facts.map((item) => (
              <div
                key={item.key}
                className="rounded-md border border-border bg-surface-0 p-5"
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  {item.key}
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars -- elevated cards */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {pillars.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-md border border-border bg-surface-0 p-5 console-glow"
            >
              <Icon
                className="mb-2 h-5 w-5 text-accent"
                aria-hidden="true"
              />
              <h3 className="text-sm font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}