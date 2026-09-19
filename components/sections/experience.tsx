import { Building2, Calendar } from "lucide-react";

import { experiences } from "@/lib/data/experience";
import { SectionHeader } from "@/components/ui/section-header";

const fields = [
  { key: "action", label: "Action" },
  { key: "system", label: "System" },
  { key: "contribution", label: "Contribution" },
  { key: "result", label: "Result" },
] as const;

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="experience-heading"
          eyebrow="05 \u00b7 Experience"
          title="Experience"
          description="Each support role broken down by action, system, contribution, and result."
        />

        {/* Timeline */}
        <div className="relative mt-8">
          {/* Vertical accent rail */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-0 bottom-0 w-px bg-accent/20 sm:left-1/2 sm:-translate-x-px"
          />

          <ol className="flex list-none flex-col gap-8 p-0">
            {experiences.map((exp, idx) => (
              <li
                key={`${exp.company}-${exp.role}`}
                className="relative grid gap-6 sm:grid-cols-2 sm:items-start"
              >
                {/* Period label -- alternating side */}
                <div
                  className={`flex items-center gap-2 font-mono text-xs text-subtle sm:justify-end ${
                    idx % 2 === 0
                      ? "sm:order-1 sm:text-right"
                      : "sm:order-3"
                  }`}
                >
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {exp.period}
                </div>

                {/* Center node -- accent dot */}
                <div
                  aria-hidden="true"
                  className="absolute left-[15px] top-1 h-[9px] w-[9px] rounded-full border-2 border-accent bg-surface-0 sm:left-1/2 sm:-translate-x-1/2"
                />

                {/* Content card */}
                <article
                  className={`rounded-md border border-border bg-surface-0 p-5 sm:col-span-1 ${
                    idx % 2 === 0 ? "sm:order-2" : "sm:order-1 sm:text-right"
                  }`}
                >
                  <h3 className="flex items-center gap-2 font-medium">
                    <Building2
                      className="h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>
                      {exp.role}
                      <span className="text-muted-foreground">
                        {" "}
                        &mdash; {exp.company}
                      </span>
                    </span>
                  </h3>

                  <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                    {fields.map((field) => (
                      <div key={field.key}>
                        <dt className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground">
                          {field.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                          {exp[field.key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}