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
      className="scroll-mt-20 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="experience-heading"
          eyebrow="05 / Experience"
          title="Experience"
          description="Each support role broken down by action, system, contribution, and result."
        />
        <ol className="mt-6 flex list-none flex-col gap-4 p-0">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.role}`}
              className="rounded-md border border-border bg-background p-5"
            >
              <article>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="flex items-center gap-2 font-medium">
                    <Building2
                      className="h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    {exp.role} — {exp.company}
                  </h3>
                  <p className="flex items-center gap-1.5 font-mono text-xs text-subtle">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {exp.period}
                  </p>
                </div>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.key}>
                      <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
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
    </section>
  );
}
