import { ArrowUpRight } from "lucide-react";

import type { Project, ProjectStatus } from "@/types/project";
import { Badge } from "@/components/ui/badge";

const statusLabel: Record<ProjectStatus, string> = {
  production: "Production",
  completed: "Completed",
  "in-development": "In Development",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-md border border-border bg-background p-5">
      <div className="flex items-center justify-between gap-2">
        <Badge variant="outline">{project.year}</Badge>
        <Badge>{statusLabel[project.status]}</Badge>
      </div>

      <h3 className="text-base font-medium leading-6">{project.title}</h3>
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
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        {project.liveUrl ?? project.repositoryUrl ? (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 rounded-md text-sm font-medium underline-offset-4 hover:underline"
              >
                Live site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 rounded-md text-sm font-medium underline-offset-4 hover:underline"
              >
                Repository
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
