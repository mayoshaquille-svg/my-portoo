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

      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Problem
          </h4>
          <p className="mt-1 text-sm leading-6">{project.problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Solution
          </h4>
          <p className="mt-1 text-sm leading-6">{project.solution}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Architecture
          </h4>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {project.architecture}
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
          Technical decisions
        </h4>
        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
          {project.technicalDecisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
          Role
        </h4>
        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
          {project.role.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
          Challenges
        </h4>
        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-muted-foreground">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

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
