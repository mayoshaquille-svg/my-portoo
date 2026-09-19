import { CircleCheck, Construction, Monitor } from "lucide-react";

import type { Project, ProjectStatus } from "@/types/project";
import { Badge } from "@/components/ui/badge";

const statusMeta: Record<
  ProjectStatus,
  { label: string; Icon: typeof CircleCheck }
> = {
  production: { label: "Production", Icon: CircleCheck },
  completed: { label: "Completed", Icon: CircleCheck },
  "in-development": { label: "In Development", Icon: Construction },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusMeta[project.status];

  return (
    <article className="flex flex-col gap-4 rounded-md border border-border bg-background p-5">
      <div className="flex items-center justify-between gap-2">
        <Badge variant="outline">{project.year}</Badge>
        <Badge>
          <status.Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {status.label}
        </Badge>
      </div>

      <h3 className="flex items-start gap-2 text-base font-medium leading-6">
        <Monitor
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
        <span>
          {project.title}
          <span className="sr-only"> (supported system)</span>
        </span>
      </h3>
      <p className="text-sm leading-6 text-muted-foreground">
        {project.context}
      </p>

      {/* Primary info: always visible */}
      <div role="group" aria-label="Support details" className="flex flex-col gap-3">
        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
            Problem
          </h4>
          <p className="mt-1 text-sm leading-6">{project.problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
            Solution
          </h4>
          <p className="mt-1 text-sm leading-6">{project.solution}</p>
        </div>
      </div>

      {/* Secondary info: collapsible */}
      <details className="group flex flex-col gap-3">
        <summary className="cursor-pointer font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 [&::-webkit-details-marker]:hidden">
          Architecture
        </summary>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.architecture}
        </p>
      </details>

      <details className="group flex flex-col gap-3">
        <summary className="cursor-pointer font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 [&::-webkit-details-marker]:hidden">
          Technical decisions
        </summary>
        <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
          {project.technicalDecisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </details>

      {/* Role: always visible — primary for hiring */}
      <div>
        <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
          Role
        </h4>
        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
          {project.role.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <details className="group flex flex-col gap-3">
        <summary className="cursor-pointer font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 [&::-webkit-details-marker]:hidden">
          Challenges
        </summary>
        <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>

      <div className="mt-auto flex flex-col gap-3 pt-2">
        <div
          className="flex flex-wrap gap-1.5"
          aria-label="Technologies in the supported system"
        >
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
