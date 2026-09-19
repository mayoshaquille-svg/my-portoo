import { projects } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="projects-heading"
          eyebrow="03 / Projects"
          title="Projects"
          description="Mini case studies: context, problem, solution, and the decisions behind each build."
        />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
