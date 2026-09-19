import { CircleCheck, Construction, Monitor } from "lucide-react";

import { projects } from "@/lib/data/projects";
import type { ProjectStatus } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

const statusMeta: Record<
  ProjectStatus,
  { label: string; Icon: typeof CircleCheck }
> = {
  production: { label: "Production", Icon: CircleCheck },
  completed: { label: "Completed", Icon: CircleCheck },
  "in-development": { label: "In Development", Icon: Construction },
};

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="projects-heading"
          eyebrow="03 \u00b7 Supported Systems"
          title="Supported Systems"
          description="Systems I support and maintain: the issue context, how each system is kept running, and the support role behind it."
        />

        {/* Editorial alternating layout */}
        <div className="mt-8 flex flex-col gap-6">
          {projects.map((project, idx) => {
            const status = statusMeta[project.status];
            const isReversed = idx % 2 !== 0;

            return (
              <article
                key={project.slug}
                className="rounded-md border border-border bg-surface-0 p-6 sm:p-8"
              >
                <div className="grid gap-8 sm:grid-cols-12 sm:items-start">
                  {/* Narrative column */}
                  <div
                    className={`sm:col-span-7 ${
                      isReversed ? "sm:order-2" : "sm:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{project.year}</Badge>
                      <Badge variant="accent">
                        <status.Icon
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {status.label}
                      </Badge>
                    </div>

                    <h3 className="flex items-start gap-2 text-lg font-semibold leading-6">
                      <Monitor
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{project.title}</span>
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.context}
                    </p>

                    <div role="group" aria-label="Support details" className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground">
                          Problem
                        </h4>
                        <p className="mt-1 text-sm leading-6">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground">
                          Solution
                        </h4>
                        <p className="mt-1 text-sm leading-6">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Specs column -- elevated surface */}
                  <div
                    className={`sm:col-span-5 sm:border-l sm:border-border sm:pl-6 ${
                      isReversed ? "sm:order-1" : "sm:order-2"
                    }`}
                  >
                    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface-1 p-5">
                      <div>
                        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                          Architecture
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {project.architecture}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                          Technical decisions
                        </h4>
                        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
                          {project.technicalDecisions.map((decision) => (
                            <li key={decision}>{decision}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                          Role
                        </h4>
                        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
                          {project.role.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-subtle">
                          Challenges
                        </h4>
                        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
                          {project.challenges.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className="flex flex-wrap gap-1.5 pt-2 border-t border-border"
                        aria-label="Technologies in the supported system"
                      >
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}